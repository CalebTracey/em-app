package com.dashboard.backend.employee;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import org.springframework.boot.autoconfigure.jackson.Jackson2ObjectMapperBuilderCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;

import java.util.List;

//@Configuration
//public class EmployeeConfig {
//
//    @Bean
//    @Primary
//    public ObjectMapper customJson(){
//        return new Jackson2ObjectMapperBuilder()
//                .indentOutput(true)
//                .serializationInclusion(JsonInclude.Include.NON_NULL)
//                .propertyNamingStrategy(PropertyNamingStrategy.SNAKE_CASE)
//                .build();
//    }
//
//}
