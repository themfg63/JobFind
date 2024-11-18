package com.TheMFG.backend.controller;

import com.TheMFG.backend.dto.ApplicantDTO;
import com.TheMFG.backend.dto.Application;
import com.TheMFG.backend.dto.JobDTO;
import com.TheMFG.backend.dto.ResponseDTO;
import com.TheMFG.backend.exception.JobPortalException;
import com.TheMFG.backend.service.Interface.JobService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/jobs")
public class JobController {
    @Autowired
    private JobService jobService;

    // iş ilanı oluşturma
    @PostMapping("/post")
    public ResponseEntity<JobDTO> postJob(@RequestBody @Valid JobDTO jobDTO) throws JobPortalException{
        return new ResponseEntity<>(jobService.postJob(jobDTO), HttpStatus.CREATED);
    }

    // tüm iş ilanlarını görüntüleme
    @GetMapping("/getAll")
    public ResponseEntity<List<JobDTO>> getAllJobs() throws JobPortalException {
        return new ResponseEntity<>(jobService.getAllJobs(),HttpStatus.OK);
    }

    //ID'ye göre iş ilanını gösterir.
    @GetMapping("/get/{id}")
    public ResponseEntity<JobDTO> getJob(@PathVariable Long id) throws JobPortalException{
        return new ResponseEntity<>(jobService.getJob(id),HttpStatus.OK);
    }

    @PostMapping("/apply/{id}")
    public ResponseEntity<ResponseDTO> applyJob(@PathVariable Long id, @RequestBody ApplicantDTO applicantDTO) throws JobPortalException{
        jobService.applyJob(id,applicantDTO);
        return new ResponseEntity<>(new ResponseDTO("Başvuru Tamamlandı!"),HttpStatus.OK);
    }

    @GetMapping("/postedBy/{id}")
    public ResponseEntity<List<JobDTO>> getJobsPostedBy(@PathVariable Long id) throws JobPortalException {
        return new ResponseEntity<>(jobService.getJobsPostedBy(id), HttpStatus.OK);
    }

    @PostMapping("/changeAppStatus")
    public ResponseEntity<ResponseDTO> changeAppStatus(@RequestBody Application application) throws JobPortalException{
        jobService.changeAppStatus(application);
        return new ResponseEntity<>(new ResponseDTO("Başvuru Durumu Değiştirildi!"),HttpStatus.OK);
    }
}
