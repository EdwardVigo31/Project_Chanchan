package com.example.backend_chanchan.infrastructure.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend_chanchan.domain.entities.News;

@Repository
public interface NewsJpaRepository extends JpaRepository<News, Integer> {
}
