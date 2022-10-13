package com.appointment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appointment.model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {

}
