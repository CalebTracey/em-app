package com.dashboard.backend.DataBase;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

@AllArgsConstructor
@Component
public class DataBase {

    @Autowired
    private DataSource dataSource;

    public static void main(String[] args) throws Exception {
        GenericXmlApplicationContext ctx = new GenericXmlApplicationContext("classpath:com/dashboard/backend/resources/applicationContext.xml");
    }

    @PostConstruct
    public void myRealMainMethod() throws SQLException {
        Statement stmt = dataSource.getConnection().createStatement();
        stmt.executeUpdate("DROP TABLE IF EXISTS ticks");
        stmt.executeUpdate("CREATE TABLE ticks (tick timestamp)");
        stmt.executeUpdate("INSERT INTO ticks VALUES (now())");
        ResultSet rs = stmt.executeQuery("SELECT tick FROM ticks");
        while (rs.next()) {
            System.out.println("Read from DB: " + rs.getTimestamp("tick"));
        }
    }

}

