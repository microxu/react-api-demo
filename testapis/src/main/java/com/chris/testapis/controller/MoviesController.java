package com.chris.testapis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import com.chris.testapis.models.MoviesInfo;
import com.chris.testapis.repository.MoviesRepository;
import com.chris.testapis.repository.PagingUserRepository;

import java.util.List;


@RestController
@CrossOrigin
public class MoviesController {
	
	@Autowired
    private MoviesRepository repository;
	@Autowired
	private PagingUserRepository pagerepository;
	
    /*public MoviesController(MoviesRepository _repository ,PagingUserRepository _pagerepository) {
    	this.repository=_repository;
    	this.pagerepository=_pagerepository;
    }*/
	@ResponseBody
	@RequestMapping(value = "/movies/{title}", method = RequestMethod.GET)
    public List<MoviesInfo> fetchDataByTitle(@PathVariable("title") String title) {
		return repository.findByTitle(title);}
	

	@CrossOrigin
    @ResponseBody
    @RequestMapping(value = "/movies/{currPage}/{pageSize}", method = RequestMethod.GET)
    public Page<MoviesInfo> findAPage(@PathVariable("currPage") int currPage, @PathVariable("pageSize") int pageSize) {
    	Pageable userPages = PageRequest.of(currPage,pageSize);
    	Page<MoviesInfo> movies = pagerepository.findAll(userPages);
        return movies;
    }
}
