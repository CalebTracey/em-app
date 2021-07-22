package com.dashboard.backend.employee;

import org.springframework.web.multipart.MultipartFile;

public class FileUploadDto {

    private Long id;
    private MultipartFile multipartFile;

    public FileUploadDto(Long id, MultipartFile multipartFile) {
        this.id = id;
        this.multipartFile = multipartFile;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public MultipartFile getMultipartFile() {
        return multipartFile;
    }

    public void setMultipartFile(MultipartFile multipartFile) {
        this.multipartFile = multipartFile;
    }
}
