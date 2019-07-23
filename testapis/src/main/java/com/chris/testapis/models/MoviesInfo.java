package com.chris.testapis.models;

import java.io.Serializable;
import java.util.Set;

import org.springframework.data.annotation.Id;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBRangeKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;

@DynamoDBTable(tableName="fse-chris")
public class MoviesInfo implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
    private MovieId movieId;

	private int id;
	private Double rating;
	private Set<String> genres;
	private Set<String> akas;
	private String lang;
	private Set<String> image;

	@DynamoDBHashKey(attributeName = "title")
	public String getTitle() {
	    return movieId != null? movieId.getTitle():null;

	}
	public void setTitle(String title) {
	    if (movieId == null) {
	        movieId = new MovieId();
        }

        movieId.setTitle(title);
	}

    @DynamoDBRangeKey(attributeName = "timestamp")
	public String getTimestamp() {
        return movieId != null? movieId.getTimeStamp():null;
	}
	public void setTimestamp(String timestamp) {
        if (movieId == null) {
            movieId = new MovieId();
        }

        movieId.setTimeStamp(timestamp);
	}

	@DynamoDBAttribute(attributeName = "Id")
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}

	@DynamoDBAttribute(attributeName = "rating")
	public Double getRating() {
		return rating;
	}
	public void setRating(Double rating) {
		this.rating = rating;
	}

	@DynamoDBAttribute(attributeName = "genres")
	public Set<String> getGenres() {
		return genres;
	}
	public void setGenres(Set<String> genres) {
		this.genres = genres;
	}

	@DynamoDBAttribute(attributeName = "akas")
	public Set<String> getAkas() {
		return akas;
	}
	public void setAkas(Set<String> akas) {
		this.akas = akas;
	}

    @DynamoDBAttribute(attributeName = "lang")
	public String getLang() {
		return lang;
	}
	public void setLang(String lang) {
		this.lang = lang;
	}

    @DynamoDBAttribute(attributeName = "image")
	public Set<String> getImage() {
		return image;
	}
	public void setImage(Set<String> Image) {
		this.image = Image;
	}
}
