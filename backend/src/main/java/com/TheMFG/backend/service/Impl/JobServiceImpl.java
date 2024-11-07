package com.TheMFG.backend.service.Impl;

import com.TheMFG.backend.dto.JobDTO;
import com.TheMFG.backend.exception.JobPortalException;
import com.TheMFG.backend.repository.JobRepository;
import com.TheMFG.backend.service.Interface.JobService;
import com.TheMFG.backend.utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
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
}

