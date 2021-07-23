//package com.dashboard.backend.config;
//
//import org.springframework.web.context.ContextLoaderListener;
//import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
//
//import javax.servlet.ServletException;
//
//public class AppInitializer {
//
//    private ServletContext servletContext;
//
//    public AppInitializer(ServletContext servletContext) {
//        this.servletContext = servletContext;
//    }
//
//    public void onStartup(javax.servlet.ServletContext servletContext) throws ServletException {
//
//        AnnotationConfigWebApplicationContext rootContext = new AnnotationConfigWebApplicationContext();
//        rootContext.register(ServletContext.class);
//
//        servletContext.addListener(new ContextLoaderListener(rootContext));
//
//    }
//
//    protected String[] getServletMappings() {
//        return new String[]{"/api/*"};
//    }
//
//    protected String getServletName() {
//        return "AppConfig";
//    }
//
//}
