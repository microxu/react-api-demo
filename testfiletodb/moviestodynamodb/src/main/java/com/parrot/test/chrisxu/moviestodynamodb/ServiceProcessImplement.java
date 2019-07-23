package com.parrot.test.chrisxu.moviestodynamodb;

import org.apache.commons.io.IOUtils;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Timestamp;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import java.util.Properties;
import java.io.InputStream;
public class ServiceProcessImplement implements IServiceProcess {
	private String baseUrl = "http://api.tvmaze.com/singlesearch/shows?q=";
	private String akasURl = "http://api.tvmaze.com/shows/ID/akas";
	private IProcessFiles _iProcessFiles;
	private IProcessWebInfo _iProcessWebInfo;
	
	//@Autowired
	//DynamoDBConfig _dynamoDBconfig;
	
	public ServiceProcessImplement(IProcessWebInfo iProcessWebInfo ,IProcessFiles iProcessFiles) {
		this._iProcessFiles=iProcessFiles;
		this._iProcessWebInfo=iProcessWebInfo;
	}

	public void GetMoviesDetails(String strFileName) {
		String awsCredentialsPath =ServiceProcessImplement.class.getClassLoader().getResource("application.properties").getPath();
		Properties properties = new Properties();
		try {
			properties.load(new FileInputStream(awsCredentialsPath));
		
		String awsAccessKey = properties.getProperty("amazon.dynamodb.accesskey");
		String awsSecretKey = properties.getProperty("amazon.dynamodb.secretkey");
		
		AmazonDynamoDB ddbClient = AmazonDynamoDBClientBuilder.standard()
				.withCredentials(new AWSStaticCredentialsProvider(
				new BasicAWSCredentials(awsAccessKey, awsSecretKey)))
					.withRegion(Regions.US_EAST_1).build();
		DynamoDBMapper dbMapper = new DynamoDBMapper(ddbClient);
		
		List<String> titlesList = new ArrayList<String>();

		InputStream titles =ServiceProcessImplement.class.getClassLoader().getResourceAsStream(strFileName);	
		titlesList = IOUtils.readLines(titles, "UTF-8");
		System.out.println("Number of titles to process - " + titlesList.size());
		List<List<String>> listOfTitleLists = _iProcessFiles.GetBreakTitles(titlesList, 10);

		for (List<String> showList : listOfTitleLists) {
				System.out.print('#');
			showList.parallelStream().forEach(t -> this.processTitle(dbMapper,t.trim()));			
		}

		} catch (IOException e) {
			e.printStackTrace();
		
		}
	}

	private void processTitle(DynamoDBMapper dbMapper,String title){
		try {	
        String formattedTitle = title.replaceAll(" ", "%20");
        String strUrl = this.baseUrl.concat(formattedTitle); 
        JSONObject  object = _iProcessWebInfo.GetJsonResource(strUrl);
        if(object==null)
        	return;
        String strUrlAkas = this.akasURl.replace("ID", object.get("id").toString()); 

        JSONArray aObject=null;
       	aObject=this._iProcessWebInfo.GetJsonArrayResource(strUrlAkas);
       	MoviesModel moviesModal=SetJsonObject(object, aObject);
       	dbMapper.save(moviesModal);
       	}catch(Exception e) {
       		System.out.print("#There is something wrong in processing with: " + title);
		}
	}
	
	private MoviesModel SetJsonObject(JSONObject tvObject,JSONArray akaObject) {
		String title="";
		Integer id=0;
		double rating=0;
		Set<String> genres=new HashSet<String>() ;
		Set<String> akas=new HashSet<String>() ;
		String lang="";
		Set<String> image=new HashSet<String>() ;
		String timestamp="";
		if(tvObject!=null) {
			id=Integer.parseInt(tvObject.get("id").toString());
			title=tvObject.get("name").toString();
			String sInt=tvObject.getJSONObject("rating").get("average").toString();
			rating=Double.parseDouble(sInt=="null"? "0":sInt);
			lang=tvObject.get("language").toString();
			image.add(tvObject.getJSONObject("image").get("medium").toString());
			image.add(tvObject.getJSONObject("image").get("original").toString());

			JSONArray array = tvObject.getJSONArray("genres");  			
			for (int i = 0; i < array.size(); i++) {
				genres.add(array.get(i).toString());}			
		}
		if(akaObject.size()>0) {
			for (int i = 0; i < akaObject.size(); i++) {
				JSONObject object = (JSONObject) akaObject.get(i); 
				akas.add(object.get("name").toString());}
		}
		timestamp = new Timestamp(System.currentTimeMillis()).toString();
		return initModal(id,rating,title,genres,akas,lang,timestamp,image);
	}
	public MoviesModel initModal(Integer id,Double rating,String title,Set<String> genres,Set<String> akas,String lang,String timestamp,Set<String> image){
		MoviesModel dbShow = new MoviesModel();
		if (title!="") {
		dbShow.setTitle(title);		
		dbShow.setId(id);
		dbShow.setRating(rating);
		if(genres.size()>0)
			dbShow.setGenres(genres);	
		if(akas.size()>0)
			dbShow.setAkas(akas);		
		dbShow.setLang(lang);
		if(image.size()>0)
			dbShow.setImage(image);
		dbShow.setTimestamp(timestamp);		
		}
		return dbShow;
	}

}
