package com.TheMFG.backend.dto;

import com.TheMFG.backend.dto.enums.ApplicationStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Application {
    private Long id;
    private Long applicantId;
    private LocalDateTime interviewTime;
    private ApplicationStatus applicationStatus;
}