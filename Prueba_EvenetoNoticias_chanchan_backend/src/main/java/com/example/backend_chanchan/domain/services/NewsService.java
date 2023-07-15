package com.example.backend_chanchan.domain.services;

import java.util.List;

import com.example.backend_chanchan.domain.entities.News;

public interface NewsService {

    News createNews(News event);

    News updateNews(News event);

    void deleteNews(Integer id);

    List<News> listNews();

}
