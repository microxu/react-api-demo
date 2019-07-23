package com.parrot.test.chrisxu.moviestodynamodb;
import java.util.Set;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBRangeKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
//import lombok.Data;


@DynamoDBTable(tableName="fse-chris")
public class MoviesModel {	
		private Integer id;		
		private Double rating;
		@DynamoDBHashKey(attributeName="title")
		private String title;		
		private Set<String> genres;		
		private Set<String> akas;		
		private String lang;
		@DynamoDBRangeKey(attributeName="timestamp")
		private String timestamp;		
		private Set<String> image;
		public MoviesModel(Integer id,Double rating,String title,Set<String> genres,Set<String> akas,String lang,String timestamp,Set<String> image)
		{
			this.id=id;
			this.rating=rating;
			this.title=title;
			this.genres=genres;
			this.akas=akas;
			this.lang=lang;
			this.timestamp=timestamp;
			this.image=image;
		}
		public MoviesModel() {

		}
		
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		
		
		public String getTimestamp() {
			return timestamp;
		}
		public void setTimestamp(String timeStamp) {
			this.timestamp = timeStamp;
		}

		public Integer getId() {
			return id;
		}
		public void setId(Integer id) {
			this.id = id;
		}

		public Double getRating() {
			return rating;
		}
		public void setRating(Double rating) {
			this.rating = rating;
		}

		public Set<String> getGenres() {
			return genres;
		}
		public void setGenres(Set<String> genres) {
			this.genres = genres;
		}

		public Set<String> getAkas() {
			return akas;
		}
		public void setAkas(Set<String> akas) {
			this.akas = akas;
		}

		public String getLang() {
			return lang;
		}
		public void setLang(String lang) {
			this.lang = lang;
		}	

		public Set<String> getImage() {
			return image;
		}
		public void setImage(Set<String> Image) {
			this.image = Image;
		}
}
