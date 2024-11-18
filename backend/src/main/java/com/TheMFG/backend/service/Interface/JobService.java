package com.TheMFG.backend.service.Interface;

import com.TheMFG.backend.dto.ApplicantDTO;
import com.TheMFG.backend.dto.Application;
import com.TheMFG.backend.dto.JobDTO;
import com.TheMFG.backend.entity.Job;
import com.TheMFG.backend.exception.JobPortalException;

import java.util.List;

public interface JobService {
    public JobDTO postJob(JobDTO jobDTO) throws JobPortalException;
    public List<JobDTO> getAllJobs() throws JobPortalException;
    public JobDTO getJob(Long id) throws JobPortalException;
    public void applyJob(Long id, ApplicantDTO applicantDTO) throws JobPortalException;
    public List<JobDTO> getJobsPostedBy(Long id) throws JobPortalException;
    public void changeAppStatus(Application application) throws JobPortalException;
}
