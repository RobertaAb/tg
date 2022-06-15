package com.example.demo.dto;
import javax.validation.constraints.NotBlank;

public class TipoProblemaDto {

    @NotBlank
    private String titulo;
    @NotBlank
    private String tipoProblema;
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getTipoProblema() {
        return tipoProblema;
    }

    public void setTipoProblema(String tipoProblema) {
        this.tipoProblema = tipoProblema;
    }
}