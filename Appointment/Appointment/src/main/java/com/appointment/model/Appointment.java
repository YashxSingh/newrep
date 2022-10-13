package com.appointment.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	private String name;
	private String disease;
	private String contact;
	private Integer age;
	private Long doctor_id;
	private Long slots_id;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDisease() {
		return disease;
	}

	public void setDisease(String disease) {
		this.disease = disease;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public Long getDoctor_id() {
		return doctor_id;
	}

	public void setDoctor_id(Long doctor_id) {
		this.doctor_id = doctor_id;
	}

	public Long getSlots_id() {
		return slots_id;
	}

	public void setSlots_id(Long slots_id) {
		this.slots_id = slots_id;
	}

	@Override
	public String toString() {
		return "Appointment [name=" + name + ", disease=" + disease + ", contact=" + contact + ", age=" + age
				+ ", doctor_id=" + doctor_id + ", slots_id=" + slots_id + "]";
	}

	public Appointment(String name, String disease, String contact, Integer age, Long doctor_id, Long slots_id) {
		super();
		this.name = name;
		this.disease = disease;
		this.contact = contact;
		this.age = age;
		this.doctor_id = doctor_id;
		this.slots_id = slots_id;
	}

	public Appointment() {
		super();
		// TODO Auto-generated constructor stub
	}

}
