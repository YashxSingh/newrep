package com.appointment.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;
	private String disease;
	private String contact;
	private Integer age;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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

	@Override
	public String toString() {
		return "Patient [id=" + id + ", name=" + name + ", disease=" + disease + ", contact=" + contact + ", age=" + age
				+ "]";
	}

	public Patient(Long id, String name, String disease, String contact, Integer age) {
		super();
		this.id = id;
		this.name = name;
		this.disease = disease;
		this.contact = contact;
		this.age = age;
	}

	public Patient() {
		super();
		// TODO Auto-generated constructor stub
	}

}
