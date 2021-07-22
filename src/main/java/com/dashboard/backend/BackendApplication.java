package com.dashboard.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;

@SpringBootApplication
public class BackendApplication {

		public static void main(String[] args) {
			SpringApplication.run(BackendApplication.class, args);
		}

		protected WebApplicationContext createServletApplicationContext() {
			AnnotationConfigWebApplicationContext normalWebAppContext
					= new AnnotationConfigWebApplicationContext();
			normalWebAppContext.register(AppConfig.class);
			return normalWebAppContext;
		}

		protected String[] getServletMappings() {
			return new String[]{"/api/*"};
		}

		protected String getServletName() {
			return "normal-dispatcher";
		}
	}

//
//	@Override
//	protected WebApplicationContext createServletApplicationContext() {
//		AnnotationConfigWebApplicationContext secureWebAppContext
//				= new AnnotationConfigWebApplicationContext();
//		secureWebAppContext.register(SecureWebAppConfig.class);
//		return secureWebAppContext;
//	}
//
//	@Override
//	protected String[] getServletMappings() {
//		return new String[] { "/s/api/*" };
//	}
//
//	@Override
//	protected String getServletName() {
//		return "secure-dispatcher";
//	}

