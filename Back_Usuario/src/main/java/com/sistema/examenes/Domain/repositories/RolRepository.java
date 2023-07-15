package com.sistema.examenes.Domain.repositories;

import com.sistema.examenes.Domain.entities.Rol;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolRepository extends JpaRepository<Rol,Long> {
}
