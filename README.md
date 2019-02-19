# WeatherToDo
https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/Mobile.JPG



Weather to do is a simple single page web application that shows the forcasted weather of any day and shows the list of activities the user has created. User can modify and and delete activity (modify and delete function is still on going and still buggy as of 19/02/2019)

Created for the purpose of learning and exploring react.js and also for a technical assessment.

# Usage:
To build the app, type "npx webpack" on command line at the project folder.
Look for index.html from the project folder and open it on any broswer.



# WeatherToDo Application

UI Information
It is a single page application with responsive achieved through css. 

![alt text](https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/Desktop.JPG)

Desktop View

https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/Mobile.JPG
Mobile View



Weather Information
1) User can view the weather information of the current day on pageload
2) To view the weather information another date, User should click on the date at the top of the application and a calender widget will pop up. user should click on interested date and the weather information will be retrieved for the selected date.

https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/weather1.JPG
User clicks on the date at the top of the page (Date turns from black to mint green)
https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/weather3.JPG
Calender widget pops up and user is selecting 3rd of  March
https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/weather4.JPG
Weather details of 3rd of March is retrieved


Activity List
1)List fo activities will be loaded on the web application below the weather widget if the data exist at the Local Storage.
2)User can add new activity by clicking the plus button in the middle of the app and keying in the details on the form that will pop up.
3)New activity will be saved to Local Storage upon clicking the submit button and the activity will be shown under the List of activities.
4)User can click the edit button on a particular activity card to edit it and a form will pop up with information of the "to be edited" activity.
5) User can make changes to the activity details in the forma and changes to the activity will be saved. (Ongoing, not done as of 18/02/2019)
6) User can delete an activity (Ongoing, not done as of 18/02/2019)

Add feature:
https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/activity.JPG
Form window pops up after clicking on the plus button
https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/activity3.JPG
Submit button to be clicked after entering "Study for Test" activity
https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/activity4.JPG
"Sudy for Test" activity shows up in the activity list

Edit feature:
https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/Edit.JPG
Selecting the first activity
https://github.com/marini-rahumath/WeatherToDo/blob/master/screenshot/Edit2.JPG
Details of activity loaded to the form.










