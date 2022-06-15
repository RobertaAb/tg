package com.example.demo.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table
public class Procedimento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "titulo", nullable = false)
	private String titulo;

	@Column(name = "descricao", nullable = false)
	private String descricao;

	@Column(name = "solucao", nullable = false)
	private String solucao;

	@ManyToMany
	@JoinColumn(name = "usuarios", referencedColumnName = "id")
	private List<Usuario> usuario;

	@ManyToMany
	@JoinColumn(name = "tipoProblemas", referencedColumnName = "id")
	private List<TipoProblema> tipoProblema;

}
