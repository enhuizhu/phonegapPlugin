		/**
		* service name maps to the name of your native plugin class
		* the action name is passed as the first parameter of the excute method
		* the arguments array is passed as a JSONArray in the second parameter of excute()
		* the success and error callback function are passed as part of a callbackContext object in 
		* the third parameter of excute()
		**/
		
		
		var calendar={
			createEvent:function(title,location,notes,startDate,endDate,successCallback,errorCallback){
			    cordova.exec(
					successCallback,
					errorCallback,
					'Calendar',
					'addCalendarEntry',
					[{
					  'title':title,
					  'description':notes,
					  'eventLocation':location,
					  'startTimeMillis':startDate.getTime(),
					  'endTimeMillis':endDate.getTime()	
					}]
				);	
				
			}
		}
		
		/**
		* lastly export calendar variable so it's avilable for use with the following line of cod
		**/
		module.exports=calendar;