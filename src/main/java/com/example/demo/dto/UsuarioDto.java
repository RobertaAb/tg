package com.example.demo.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class UsuarioDto {

    @NotBlank
    private String nome;
    @NotBlank
    @Email
    private String email;
    @NotBlank
    private String senha;
    @NotBlank
    private String status;
    @NotBlank
    private String tipo_usuario;
    @NotBlank
    private String deletar;
    @NotBlank
    private String atualizar;
    @NotBlank
    private String salvar;
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getSenha() {
        return senha;
    }
    public void setSenha(String senha) {
        this.senha = senha;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public String getTipo_usuario() {
        return tipo_usuario;
    }
    public void setTipo_usuario(String tipo_usuario) {
        this.tipo_usuario = tipo_usuario;
    }
    public String getDeletar() {
        return deletar;
    }
    public void setDeletar(String deletar) {
        this.deletar = deletar;
    }
    public String getAtualizar() {
        return atualizar;
    }
    public void setAtualizar(String atualizar) {
        this.atualizar = atualizar;
    }
    public String getSalvar() {
        return salvar;
    }
    public void setSalvar(String salvar) {
        this.salvar = salvar;
    }
}