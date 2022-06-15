package com.example.demo.dto;

import javax.validation.constraints.NotBlank;

public class ProcedimentoDto {

    @NotBlank
    private String titulo;
    @NotBlank
    private String solucao;
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public String getSolucao() {
        return solucao;
    }
    public void setSolucao(String solucao) {
        this.solucao = solucao;
    }

//@NotBlank
    //private UsuariosModel usuariosModel;

    //@NotBlank
    //private TipoProblemaModel tipoProblemaModel;

}
