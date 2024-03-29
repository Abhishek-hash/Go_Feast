Go-Feast🍕🍔🍗 <br />  A FOOD DELIVERY APP.   
----------------------------------------------------------------------------------

<br/>

**Video with Explanation**
https://github.com/Abhishek-hash/Go_Feast/assets/54746811/7243c6b0-39f9-4317-8f2d-ddd18f320c23


<br/>

TECHS USED IN DEVELOPMENT:
--------------------------

+ HTML
+ CSS
+ JavaScript
+ React
+ React-Router-Dom
+ BootStrap Dark
+ React BootStrap
+ BootStrap 5
+ Online Web Fonts (NHaasGroteskDSPro-65Md Fonts)
+ bcryptjs (It's a hashing algorithm) Mostly all bcrypt functions are async in nature. Implemented on back end side.
+ jwt (It's a athorization token generator algorithm). Implemented on front end side.
+ useReducer
+ context API


PROBLEMS FACED DURING DEVELOPMENT: 
----------------------------------

1. BootStrap Navbar dropdown was not working.
Fix: I was missing importing the required onClick JavaScript code in App.js

	 import "bootstrap/dist/css/bootstrap.min.css";
	 import "bootstrap/dist/js/bootstrap.bundle.min.js";
 
 2. mongoose.connect() does not accepts callback now.
 3. Date.now is giving 6 hours before datetime.
 
 4. Got error regarding typecasting. 
 Fix: When sending input from forms, it was taking input value as an array but in schema it is defined as
      String. So i passed zero index value of each input array.
	  
	  eg. body: JSON.stringify({
                name: credentials.name[0],
                email: credentials.email[0],
                password: credentials.password[0],
                location: credentials.geolocation[0],
            })
		
5. Carousel component can not be made separate. 
-> Actually the basic thumb rule of react says, "If your code is being re used, then make a different
   component and reuse that component" But if that is being used in only inside one component then 
   better make that component into that same component.
  
-> Therefore here we can not make Carousel a different component, because it is being used in only one component and that is Home.js.  
			
			
6. Why we used context API ?
-> It solves the problem of prop drilling in application.	
   We wrap the whole application with context-provider. And we define a state at the global level, and when there is any chnage happen in that
   state, it will be changed at the global level.
   
7. useReducer -> As the name suggest, it is used to reduce something. And that is, it is used to reduce the defining many states for each and every individual component.
				 Rather than defining individual states, we should store data in some global state, from where each state can access those data.
   
8. Setting the default values of quantity and size after clicking on Add To Cart button.
9. Was getting blank page in react app.
Fix: It was a typo. Actually i was writing Children instead of children.
<br />
<br />
<br />
<br />
**APPLICATION'S PAGES SCREENSHOTS:**
<br />
<br/>

**1. Login Page - If new user, then SignUp.** <br/>

<br/>

![Screenshot (572)](https://github.com/Abhishek-hash/Go_Feast/assets/54746811/47531572-84d5-4002-a7bc-1dcab7672d3c)

**2. SignUp Page** <br/>
<br/>
![Screenshot (571)](https://github.com/Abhishek-hash/Go_Feast/assets/54746811/faa38749-8ae7-4ae0-bfe8-c9c686c75280)

**3. SignUp Page - Create new user by Filling details.**<br/>
<br/>
![Screenshot (574)](https://github.com/Abhishek-hash/Go_Feast/assets/54746811/b8949923-d2f2-4581-b2f7-9ae28535ef7c)

**4. Login by filling the correct details**<br/>
<br/>

**5. Home Page** <br/>
<br/>
![Screenshot (618)](https://github.com/Abhishek-hash/Go_Feast/assets/54746811/9e61371b-0512-43b6-9330-f93dabe44325)

![Screenshot (577)](https://github.com/Abhishek-hash/Go_Feast/assets/54746811/2e62eab8-8cc8-45fc-8823-0ea93c9a9d07)![Screenshot (636)](https://github.com/Abhishek-hash/Go_Feast/assets/54746811/9f6212ef-5809-4e6a-8fc4-824b91877637)
![Screenshot (635)](https://github.com/Abhishek-hash/Go_Feast/assets/54746811/0a9a2484-893c-45f1-9f2a-a2901d2bcd11)


![Screenshot (610)](https://github.com/Abhishek-hash/Go_Feast/assets/54746811/20d76f26-cb64-4647-b71c-69ef5676e772)
![Screenshot (612)](https://github.com/Abhishek-hash/Go_Feast/assets/54746811/132200f6-9c03-4634-8055-be7d6f3d507c)
![Screenshot (611)](https://github.com/Abhishek-hash/Go_Feast/assets/54746811/65f3e1c9-2571-4094-a2f9-2384d2446b59)

![Screenshot (613)](https://github.com/Abhishek-hash/Go_Feast/assets/54746811/f0d463d7-ba46-442f-aba7-eea6d9f2859d)
![Screenshot (616)](https://github.com/Abhishek-hash/Go_Feast/assets/54746811/06ac6a56-c8bc-4d93-91cc-7a23847b3aa2)
![Screenshot (615)](https://github.com/Abhishek-hash/Go_Feast/assets/54746811/52959fb5-927b-44ce-b064-aa7c18cb7db7)
![Screenshot (614)](https://github.com/Abhishek-hash/Go_Feast/assets/54746811/6e50a3ef-9c67-4f64-aa3e-a783fc005c21)
![Screenshot (617)](https://github.com/Abhishek-hash/Go_Feast/assets/54746811/ac99989a-2208-4098-aa73-8a9300e61a04)




![Screenshot (638)](https://github.com/Abhishek-hash/Go_Feast/assets/54746811/c0c3a949-c381-4916-9781-b950789dd691)
![Screenshot (637)](https://github.com/Abhishek-hash/Go_Feast/assets/54746811/454c1326-b54f-4d27-ae87-ca966785eff8)
![Screenshot (640)](https://github.com/Abhishek-hash/Go_Feast/assets/54746811/18fb1a9e-8fb6-4828-b8ac-18402cea46b4)
![Screenshot (639)](https://github.com/Abhishek-hash/Go_Feast/assets/54746811/0a83bf98-b243-4d9f-a11c-2a965799a5fc)

