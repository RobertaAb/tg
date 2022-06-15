package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.TipoProblema;
import com.example.demo.repository.TipoProblemaRepository;

@Service
public class TipoProblemaService {

	@Autowired
	TipoProblemaRepository tipoProblemaRepository;

	public List<TipoProblema> findAll() {
		return tipoProblemaRepository.findAll();
	}

	public TipoProblema save(TipoProblema tipoProblemaModel) {
		return tipoProblemaRepository.save(tipoProblemaModel);
	}

}
