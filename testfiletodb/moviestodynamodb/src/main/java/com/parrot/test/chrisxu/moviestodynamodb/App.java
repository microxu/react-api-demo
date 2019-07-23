package com.parrot.test.chrisxu.moviestodynamodb;



public class App 
{
    public static void main( String[] args ) 
    {
    	IProcessFiles _iProcessFiles=new ProcessFilesImplement();
    	IProcessWebInfo _iProcessWebInfo=new ProcessWebInfoImplement();
    	IServiceProcess _iServiceProcess=new ServiceProcessImplement(_iProcessWebInfo,_iProcessFiles);
    	_iServiceProcess.GetMoviesDetails("titles.txt");


    	System.out.println("complete!!");  
    }
}
