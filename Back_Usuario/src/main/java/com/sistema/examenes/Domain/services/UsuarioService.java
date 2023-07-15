package com.sistema.examenes.Domain.services;

import com.sistema.examenes.Domain.entities.Usuario;
import com.sistema.examenes.Domain.entities.UsuarioRol;

import java.util.Set;

public interface UsuarioService {

    public Usuario guardarUsuario(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception;

    public Usuario obtenerUsuario(String username);

    public void eliminarUsuario(Long usuarioId);
}
