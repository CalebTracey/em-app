//package com.dashboard.backend.employee;
//
//import java.io.IOException;
//import java.util.Map;
//
//import javax.persistence.AttributeConverter;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class JsonConverter implements AttributeConverter<Map<String, Object>, String> {
//
//    private final ObjectMapper objectMapper = new ObjectMapper();
//
//    @Override
//    public String convertToDatabaseColumn(Map<String, Object> employeeInfo) {
//
//        String employeeInfoJson = null;
//        try {
//            employeeInfoJson = objectMapper.writeValueAsString(employeeInfo);
//        } catch (final JsonProcessingException e) {
//            System.out.println(e);
//        }
//
//        return employeeInfoJson;
//    }
//    @Override
//    public Map<String, Object> convertToEntityAttribute(String employeeInfoJson) {
//
//        Map<String, Object> employeeInfo = null;
//        try {
//            employeeInfo = objectMapper.readValue(employeeInfoJson, Map.class);
//        } catch (final IOException e) {
//            System.out.println(e);
//        }
//
//        return employeeInfo;
//    }
//
//}
