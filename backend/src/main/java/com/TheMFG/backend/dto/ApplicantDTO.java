package com.TheMFG.backend.dto;

import com.TheMFG.backend.dto.enums.ApplicationStatus;

import java.time.LocalDateTime;

public class Applicant {
    private Long applicantId;
    private LocalDateTime timestamp;
    private ApplicationStatus applicationStatus;
}
