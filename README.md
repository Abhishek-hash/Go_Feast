FOOD DELIVERY APP   Go-Feast🍕🍔🍗
----------------------------------------------------------------------------------

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
