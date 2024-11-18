package com.TheMFG.backend.service.Impl;

import com.TheMFG.backend.dto.ApplicantDTO;
import com.TheMFG.backend.dto.Application;
import com.TheMFG.backend.dto.JobDTO;
import com.TheMFG.backend.dto.enums.ApplicationStatus;
import com.TheMFG.backend.entity.Applicant;
import com.TheMFG.backend.entity.Job;
import com.TheMFG.backend.exception.JobPortalException;
import com.TheMFG.backend.repository.JobRepository;
import com.TheMFG.backend.service.Interface.JobService;
import com.TheMFG.backend.utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class JobServiceImpl implements JobService {
    @Autowired
    private JobRepository jobRepository;

    @Override
    public JobDTO postJob(JobDTO jobDTO) throws JobPortalException{
        jobDTO.setId(Utilities.getNextSequence("jobs"));
        jobDTO.setPostTime(LocalDateTime.now());
        return jobRepository.save(jobDTO.toEntity()).toDTO();
    }

    @Override
    public List<JobDTO> getAllJobs() throws JobPortalException{
        return jobRepository.findAll().stream().map((x) -> x.toDTO()).toList();
    }

    @Override
    public JobDTO getJob(Long id) throws JobPortalException {
        return jobRepository.findById(id).orElseThrow(() -> new JobPortalException("JOB_NOT_FOUND")).toDTO();
    }

    @Override
    public void applyJob(Long id, ApplicantDTO applicantDTO) throws JobPortalException{
        Job job = jobRepository.findById(id).orElseThrow(() -> new JobPortalException("JOB_NOT_FOUND"));
        List<Applicant> applicants = job.getApplicants();

        if(applicants == null){
            applicants = new ArrayList<>();
        }

        if(applicants.stream().filter((x) -> x.getApplicantId() == applicantDTO.getApplicantId()).toList().size()>0) throw new JobPortalException("JOB_APPLIED_ALREADY");

        applicantDTO.setApplicationStatus(ApplicationStatus.APPLIED);
        applicants.add(applicantDTO.toEntity());
        job.setApplicants(applicants);
        jobRepository.save(job);
    }

    @Override
    public List<JobDTO> getJobsPostedBy(Long id){
        return jobRepository.findByPostedBy(id).stream().map((x) -> x.toDTO()).toList();
    }

    @Override
    public void changeAppStatus(Application application) throws JobPortalException{
        Job job = jobRepository.findById(application.getId()).orElseThrow(() -> new JobPortalException("JOB_NOT_FOUND"));
        List<Applicant> applicants = job.getApplicants().stream().map((x) -> {
            x.setApplicationStatus(application.getApplicationStatus());
            if(application.getApplicationStatus().equals(ApplicationStatus.INTERVIEWING)){
                x.setInterviewTime(application.getInterviewTime());
            }
            return x;
        }).toList();
        job.setApplicants(applicants);
        jobRepository.save(job);
    }
}

