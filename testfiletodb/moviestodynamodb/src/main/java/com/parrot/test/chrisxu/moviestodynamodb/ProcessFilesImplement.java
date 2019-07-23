package com.parrot.test.chrisxu.moviestodynamodb;


import java.util.ArrayList;
import java.util.List;


public class ProcessFilesImplement implements IProcessFiles {

	@Override
	public List<List<String>> GetBreakTitles(List<String> strList, int iNum) {
		List<List<String>> listOfTitleLists = new ArrayList<List<String>>();
		try {
			List<String> tempList = new ArrayList<String>();
			for(int i = 0; i<strList.size(); i++){
				tempList.add(strList.get(i)); 
				if((i+1)%iNum == 0){
					listOfTitleLists.add(tempList);
					tempList = new ArrayList<String>();
				}
			}
			if(strList.size()%iNum != 0){
				listOfTitleLists.add(tempList);
			}
			return listOfTitleLists;
		}catch(Exception e){
			System.out.println("thorw:"+e);
		}
		return listOfTitleLists;
	}


	}



