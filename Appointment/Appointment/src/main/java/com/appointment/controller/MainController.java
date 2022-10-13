package com.appointment.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.appointment.model.Appointment;
import com.appointment.model.Doctor;
import com.appointment.model.Patient;
import com.appointment.model.Slots;
import com.appointment.repository.AppointmentRepository;
import com.appointment.repository.DoctorRepository;
import com.appointment.repository.PatientRepository;
import com.appointment.repository.SlotsRepository;

@RestController
@CrossOrigin(origins = { "http://localhost:8180" })
public class MainController {

	@Autowired
	private DoctorRepository doctorRepository;

	@Autowired
	private SlotsRepository slotsRepository;

	@Autowired
	private PatientRepository patientRepository;

	@Autowired
	private AppointmentRepository appointmentRepository;

	@GetMapping("/doctor/get/all")
	public List<Doctor> showAllDoctor() {
		return doctorRepository.findAll();
	}

	@GetMapping("/doctor/get/{id}")
	public Doctor showDoctorById(@PathVariable("id") Long id) {
		Optional<Doctor> optional = doctorRepository.findById(id);

		if (!optional.isPresent())
			throw new RuntimeException("Object at id doen't exist");

		Doctor doctor = optional.get();
		return doctor;
	}

	@GetMapping("/slots/get/{id}")
	public Slots showSlotsById(@PathVariable("id") Long id) {
		Optional<Slots> optional = slotsRepository.findById(id);

		if (!optional.isPresent())
			throw new RuntimeException("Object at id doen't exist");

		Slots slots = optional.get();
		return slots;
	}

	@GetMapping("/slots/get/all")
	public List<Slots> showAllSlots() {
		return slotsRepository.findAll();
	}

	@GetMapping("/appointment/get/all")
	public List<Appointment> showAllAppointment() {
		return appointmentRepository.findAll();
	}

	@GetMapping("/patient/get/all")
	public List<Patient> showAllPatient() {
		return patientRepository.findAll();
	}

	@PostMapping("/doctor/insert/one")
	public Doctor insertDoctor(@RequestBody Doctor doctor) {
		return doctorRepository.save(doctor);
	}

	@PostMapping("/doctor/insert/many")
	public List<Doctor> insertManyDoctor(@RequestBody List<Doctor> list) {
		for (Doctor d : list)
			doctorRepository.save(d);
		return list;
	}

	@PostMapping("/slots/insert/{id}")
	public Slots insertSlots(@PathVariable("id") Long id, @RequestBody Slots slots) {
		Optional<Doctor> optional = doctorRepository.findById(id);

		if (!optional.isPresent())
			throw new RuntimeException("Object at id doen't exist");

		Doctor doctor = optional.get();
		slots.setDoctor(doctor);
		return slotsRepository.save(slots);
	}

	@PostMapping("/patient/insert")
	public Patient insertPatient(@RequestBody Patient patient) {
		return patientRepository.save(patient);
	}

	@PostMapping("/insert/appointment")
	public void insertAppointment(@RequestBody Appointment appointment) {
		appointmentRepository.save(appointment);
	}

//	@PostMapping("/insert/appointment")
//	public void insertAppointment(@RequestBody Appointment appointment, Patient patient, Slots slots, Doctor doctor) {
//		patient.setAge(appointment.getAge());
//		patient.setContact(appointment.getContact());
//		patient.setDisease(appointment.getDisease());
//		patient.setName(appointment.getName());
//
//		Optional<Doctor> optional = doctorRepository.findById(appointment.getDoctor_id());
//		if (!optional.isPresent())
//			throw new RuntimeException("Object at id doen't exist");
//
//		doctor = optional.get();
//		slots.setDoctor(doctor);
//		slotsRepository.save(slots);
//		patientRepository.save(patient);
//	}
}
