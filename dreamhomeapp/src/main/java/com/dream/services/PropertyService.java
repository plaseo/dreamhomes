package com.dream.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.dream.models.Property;
import com.dream.repositories.PropertyRepository;

@Service
public class PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    public List<Property> findUnsoldProperties(){
        List<Property> properties = propertyRepository.findBySoldFalse();
        return properties;
    }
    
}
