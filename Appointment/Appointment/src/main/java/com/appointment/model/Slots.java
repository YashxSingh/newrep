package com.appointment.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Slots {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String time;

	@ManyToOne
	private Doctor doctor;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	@Override
	public String toString() {
		return "Slots [id=" + id + ", time=" + time + ", doctor=" + doctor + "]";
	}

	public Slots(Long id, String time, Doctor doctor) {
		super();
		this.id = id;
		this.time = time;
		this.doctor = doctor;
	}

	public Slots() {
		super();
		// TODO Auto-generated constructor stub
	}

}
