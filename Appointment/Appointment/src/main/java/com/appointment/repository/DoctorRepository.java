package com.appointment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appointment.model.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

}
