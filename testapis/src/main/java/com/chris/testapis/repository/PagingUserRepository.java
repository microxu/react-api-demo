package com.chris.testapis.repository;

import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.socialsignin.spring.data.dynamodb.repository.EnableScanCount;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.chris.testapis.models.MovieId;
import com.chris.testapis.models.MoviesInfo;


public interface PagingUserRepository extends PagingAndSortingRepository<MoviesInfo, MovieId> {
    @EnableScan
	@EnableScanCount
	Page<MoviesInfo> findAll(Pageable pageable);
}
