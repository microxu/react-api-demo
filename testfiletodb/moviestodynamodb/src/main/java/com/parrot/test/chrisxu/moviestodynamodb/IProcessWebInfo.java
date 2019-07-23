package com.parrot.test.chrisxu.moviestodynamodb;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public interface IProcessWebInfo {
	public JSONObject GetJsonResource(String strUrl);
	public JSONArray GetJsonArrayResource(String strUrl);
}
