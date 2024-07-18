package com.dream.models;

import java.time.LocalDate;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "property")
@Data
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "description")
    private String description;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state; 

    @Column(name = "size")
    private String size;

    @Column(name = "price")
    private String price; 

    @Column(name = "contactInformation")
    private String contactInformation;

    @Column(name = "sold")
    private Boolean sold = false;

    @Column(name = "dateSold")
    private LocalDate dateSold;

}
