package com.parrot.test.chrisxu.moviestodynamodb;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class ProcessWebInfoImplement implements IProcessWebInfo{

	public JSONObject GetJsonResource(String strUrl) {
		String res="";
        res=getJsonObject(strUrl);
        if(res=="")
        	return null;
        else
        	return JSONObject.fromObject(res);
	}

	public JSONArray GetJsonArrayResource(String strUrl) {
		String res="";
        res=getJsonObject(strUrl);
        if(res=="")
        	return new JSONArray();
        else
        	return JSONArray.fromObject(res);
	}
	private String getJsonObject(String strUrl) {
		String res="";
		StringBuffer buffer = new StringBuffer();
	    try{
	            URL url = new URL(strUrl);
	            HttpURLConnection urlCon= (HttpURLConnection)url.openConnection();
	            if(200==urlCon.getResponseCode()){
	                InputStream is = urlCon.getInputStream();
	                InputStreamReader isr = new InputStreamReader(is,"utf-8");
	                BufferedReader br = new BufferedReader(isr);

	                String str = null;
	                while((str = br.readLine())!=null){
	                    buffer.append(str);
	                }
	                br.close();
	                isr.close();
	                is.close();
	                res = buffer.toString();
	            }
	        }catch(IOException e){
	            e.printStackTrace();
	        }
	    return res;
		
	}

}
