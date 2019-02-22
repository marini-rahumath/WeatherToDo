# WeatherToDo

<img src="https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/Mobile.JPG" width="300px" align="middle"/>



Weather to do is a simple single page web application that shows the forcasted weather of any day and shows the list of activities the user has created. User can add, modify and and delete activities.

Created for the purpose of learning and exploring react.js and for a technical assessment.
&nbsp;

### Usage:
* To build the app, type `npx webpack` on command line at the project folder.
* Look for `index.html` from the project folder and open it on any broswer.
&nbsp;
&nbsp;
&nbsp;



### WeatherToDo Application Information

#### User Interface
It is a single page application with responsive User Interface achieved through css. 

<img src="https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/Desktop.JPG" width="900px"/>
<span style="color:grey;">Fig. 1: Desktop View</span>
&nbsp;
&nbsp;
&nbsp;



<img src="https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/Mobile.JPG" width="300px"/>
<span style="color:grey;">Fig. 2: Mobile View</span>
&nbsp;
&nbsp;
&nbsp;





#### Weather Information Feature
1. User can view the weather information of the current day on pageload.
2. To view the weather information of another date, user should click on the date at the top of the application and a calender widget will pop up. 
3. user should click on interested date and the weather information will be retrieved for the selected date.
&nbsp;
&nbsp;
&nbsp;



<img src="https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/weather1.JPG" width="300px"/>
<span style="color:grey;">Fig. 3: User clicks on the date at the top of the page (Date turns from black to mint green)</span>
&nbsp;
&nbsp;
&nbsp;



<img src="https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/weather3.JPG" width="300px"/>
<span style="color:grey;">Fig. 4: Calender widget pops up and user is selecting 3rd of March</span>
&nbsp;
&nbsp;
&nbsp;



<img src="https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/weather4.JPG" width="300px"/>
<span style="color:grey;">Weather details of 3rd of March is retrieved</span>
&nbsp;
&nbsp;
&nbsp;




#### Activity List Feature
1. List of activities will be loaded on the web application below the weather widget if the data exist in the Local Storage.
2. User can add new activity by clicking the plus button in the middle of the app and keying in the details on the form that will pop up.
3. New activity will be saved to Local Storage upon clicking the submit button and the activity will be shown at the List of activities.
4. User can click the edit button on a particular activity card to edit it and a form will pop up with information of the "to be edited" activity.
5. User can make changes to the activity details in the form and changes to the activity will be saved.
6. User can delete an activity.
&nbsp;
&nbsp;
&nbsp;


#### Add feature:

<img src="https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/activity0.JPG" width="300px"/>
<span style="color:grey;">Fig. 6: User clicks on the plus button to add new activity</span>
&nbsp;
&nbsp;
&nbsp;




<img src="https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/activity.JPG" width="300px"/>
<span style="color:grey;">Fig. 7: Form window pops up after clicking on the plus button</span>
&nbsp;
&nbsp;
&nbsp;



<img src="https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/activity3.JPG" width="300px"/>
<span style="color:grey;">Fig. 8: Submit button to be clicked after entering "Study for Test" activity</span>
&nbsp;
&nbsp;
&nbsp;



<img src="https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/activity4.JPG" width="300px"/>
<span style="color:grey;">Fig. 9: "Sudy for Test" activity shows up in the activity list</span>
&nbsp;
&nbsp;
&nbsp;




#### Edit feature:

<img src="https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/Edit.JPG" width="300px"/>
<span style="color:grey;">Fig. 10: User clciks on the edit button of the first activity, "Do Laundry"</span>
&nbsp;
&nbsp;
&nbsp;



<img src="https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/Edit2.JPG" width="300px"/>
<span style="color:grey;">Fig. 11: Details of "Do Laundry" activity is loaded to the form.</span>
&nbsp;
&nbsp;
&nbsp;



<img src="https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/Edit3.JPG" width="300px"/>
<span style="color:grey;">Fig. 12: User modifies the "Do Laundy: activity to "Do laundry again" activity"</span>
&nbsp;
&nbsp;
&nbsp;



<img src="https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/Edit4.JPG" width="300px"/>
<span style="color:grey;">Fig. 13: "Do Laundy" activity is replaced by"Do laundry again" activity on the activity list.</span>
&nbsp;
&nbsp;
&nbsp;




#### Delete feature:

<img src="https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/Delete.JPG" width="300px"/>
<span style="color:grey;">Fig. 14: User clicks the delete button on the "Study for Test activity"</span>
&nbsp;
&nbsp;
&nbsp;



<img src="https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/Delete2.JPG" width="300px"/>
<span style="color:grey;">Fig. 15: "Study for Test activity" is removed from the activities list</span>
&nbsp;
&nbsp;
&nbsp;

