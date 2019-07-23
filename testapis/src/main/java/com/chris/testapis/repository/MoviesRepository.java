package com.chris.testapis.repository;

import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;
//import org.springframework.stereotype.Repository;

import com.chris.testapis.models.MovieId;
import com.chris.testapis.models.MoviesInfo;

import java.util.List;

@EnableScan
public interface MoviesRepository extends CrudRepository<MoviesInfo, MovieId> {

    List<MoviesInfo> findByTitle(String title);
}
