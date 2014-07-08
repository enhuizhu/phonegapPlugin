package CalendarPlugin;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

public class Calendar extends CordovaPlugin{
	public static final String ACTION_ADD_CALENDAR_ENTRY="addCalendarEntry";
	
	/**
	 * add excute function signature, this method inherited from the 
	 * cordovaPlugin class so we'll add the @override annotation as well
	 */
	
	@Override
	public boolean execute(String action,JSONArray args, CallbackContext callbackContext) throws JSONException{
		
		callbackContext.success();
		return true;
		//return false;
		
	}
	
	
	
	
	
	
}