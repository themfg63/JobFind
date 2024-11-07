package com.TheMFG.backend.service.Interface;

import com.TheMFG.backend.dto.JobDTO;
import com.TheMFG.backend.exception.JobPortalException;

import java.util.List;

public interface JobService {
    public JobDTO postJob(JobDTO jobDTO) throws JobPortalException;
    public List<JobDTO> getAllJobs() throws JobPortalException;
    public JobDTO getJob(Long id) throws JobPortalException;
}
