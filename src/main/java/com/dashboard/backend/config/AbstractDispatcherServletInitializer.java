//package com.dashboard.backend.config;
//
//import org.springframework.web.context.WebApplicationContext;
//import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
//
//public class AbstractDispatcherServletInitializer {
//    @Override
//    protected WebApplicationContext createServletApplicationContext() {
//        AnnotationConfigWebApplicationContext normalWebAppContext
//                = new AnnotationConfigWebApplicationContext();
//        normalWebAppContext.register(NormalWebAppConfig.class);
//        return normalWebAppContext;
//    }
//
//    @Override
//    protected String[] getServletMappings() {
//        return new String[] { "/api/*" };
//    }
//
//    @Override
//    protected String getServletName() {
//        return "normal-dispatcher";
//    }
//}
