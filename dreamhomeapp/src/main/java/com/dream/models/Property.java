package com.dream.models;

import java.time.LocalDate;
import java.util.List;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
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

    @Column(name = "photourl")
    private String photoUrl;

    @OneToMany
    @JoinColumn(name = "property_id", referencedColumnName = "id")
    private List<Photo> photos;

}
