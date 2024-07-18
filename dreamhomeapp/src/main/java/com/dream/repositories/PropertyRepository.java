package com.dream.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.dream.models.Property;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {

    public List<Property> findBySoldFalse();

}
