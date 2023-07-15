package com.sistema.examenes;

import com.sistema.examenes.Domain.entities.Rol;
import com.sistema.examenes.Domain.entities.Usuario;
import com.sistema.examenes.Domain.entities.UsuarioRol;
import com.sistema.examenes.Domain.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class SistemaExamenesBackendApplication implements CommandLineRunner {

	@Autowired
	private UsuarioService usuarioService;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(SistemaExamenesBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

			Usuario usuario = new Usuario();

			usuario.setNombre("carlo1");
			usuario.setApellido("carlo1");
			usuario.setUsername("carlo1");
			usuario.setPassword(bCryptPasswordEncoder.encode ("1234"));
			usuario.setEmail("c@gmail.com");
			usuario.setTelefono("123456789");
			usuario.setPerfil("foto.png");

			Rol rol = new Rol();
			rol.setRolId(1L);
			rol.setRolNombre("ADMIN");

			Set<UsuarioRol> usuariosRoles = new HashSet<>();
			UsuarioRol usuarioRol = new UsuarioRol();
			usuarioRol.setRol(rol);
			usuarioRol.setUsuario(usuario);
			usuariosRoles.add(usuarioRol);

			Usuario usuarioGuardado = usuarioService.guardarUsuario(usuario,usuariosRoles);
			System.out.println(usuarioGuardado.getUsername());
		}
	}

