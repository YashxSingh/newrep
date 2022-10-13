package com.appointment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appointment.model.Slots;

public interface SlotsRepository extends JpaRepository<Slots, Long> {

}
