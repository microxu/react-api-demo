---
title: ChrisXu's Test
date: 2019-07-24
---

## Front-end program description in testclient Project(VS Code in JSX):
### 1. React + Redux + router + Saga + reSelect + React-Bootstrap
>* I used all these technology in this project. Please check it.
### 2.Program structure introduction in .\testclient\src folder:
>* 1. components: items,itemLine,filters,details and moivehome as a index of them all. 
>* 2. Actions: two commands for saga and three commands for reducer. 
>* 3. Reducers: accept action return from saga, and filter action. 
>* 3. Store: movies data,a singal detail data and filters
>* 4. sagas: Only two asynchronous actions that obtain data are intercepted, and resend action to reducer.
>* 5. selectors: To calculate the data from state and filter.
>* 6. router: routing bewteen movies home and detail pages.
>* 7. About Pagination: listening to the screen scroll,and calculaing the distant of the top.
>* 8. sub-api: async functions to access Restful Apis, and some test data.
>* 9. Including React-Bootstrap and little css.
>* 10. \_\_tests\_\_: including  some unit tests.

### 3. to install : npm install    to run : npm start 

![image](https://github.com/microxu/ParrotTest/blob/master/images/1.jpg)
![image](https://github.com/microxu/ParrotTest/blob/master/images/2.jpg)

----------

## Back-end program description in testapis Project:

### 1.Program structure introduction in .\testapis\src folder:
>* 1. Two entities models: MovieId and MoviesInfo, because of the partition keys.
>* 2. The left is common, including repository,dynamoDb config and controller.
>* 3. There are two repositoris ,one for query by title, and the other is by pagination.
>* 4. Unit tests have contained  all the APIs
>* 5. About dependenceis, the most importand are aws-java-sdk-dynamodb and community derjust. please download my project and import it.

### 3.Restful APIs
>you can get API information using the following address:  http://localhost:8080/swagger-ui.html

![image](https://github.com/microxu/ParrotTest/blob/master/images/3.jpg)

----------

## About testfiletodb
>* this program is geting titles name and loading json data , saving them to dynmodb after integration. And all data have saved into fse-chris , please check it and at the same time it is also a kind of test. :)
>* Working with 10 files at the same time, and I've done exception handling.


