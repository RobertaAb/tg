package com.example.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	UsuarioRepository usuarioRepository;

	@Transactional
	public Usuario save(Usuario usuarioDto) {
		return usuarioRepository.save(usuarioDto);

	}

	public List<Usuario> findAll() {
		return usuarioRepository.findAll();
	}

	public void delete(Integer id) {

		usuarioRepository.deleteById(id);

	}

}