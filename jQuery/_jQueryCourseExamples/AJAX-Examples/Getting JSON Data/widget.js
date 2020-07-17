// step 1
var xhr = new XMLHttpRequest(); 

// step 2
xhr.onreadystatechange = function () {// on each change
  if(xhr.readyState === 4) {  // 4 means it is back
    var employees = JSON.parse(xhr.responseText); // turns string into real javascript using JSON.parse and include in a variable

      //console.log(typeof xhr.responseText); // type of javascript element
      //console.log(xhr.responseText); // show the output

    var statusHTML = '<ul class="bulleted">'; // variable to start the list html
    for (var i=0; i<employees.length; i += 1) { // do a loop for each object in the json
      if (employees[i].inoffice === true) { //  looks at the value in the json file for each 'inoffice' value
        statusHTML += '<li class="in">'; // += adds html to the statusHTML each time. 
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name; // this adds the persons name inside the <li>
      statusHTML += '</li>'; // this adds the closing </li> for each list item
    }
    statusHTML += '</ul>'; // once the loop has finished it closes the list by adding </ul> to the variable
    document.getElementById('employeeList').innerHTML = statusHTML; // this finds <div id="employeeList"> and adds the above <ul> on to the page
  }
};
// step 3
xhr.open('GET', 'data/employees.json'); // where the json data is held

//step 4
xhr.send();

var roomRequest = new XMLHttpRequest();
roomRequest.onreadystatechange = function () {
  if(roomRequest.readyState === 4) {
    var rooms = JSON.parse(roomRequest.responseText);
    var statusHTML = '<ul class="rooms">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
roomRequest.open('GET', 'data/rooms.json');
roomRequest.send();


// jQuery Method of doing this!


  $.getJSON('data/employees.json', function (data) { // first pull the data from the url then a function with the  data callback
    var statusHTML = '<ul class="bulleted">'; // create a list
    $.each(data,function (index, employee) { // go through the json file like the for loop. index is like 0,1,2 and the employee is the value from the index, like [1] is   {"name": "Amit","inoffice": false}
      if (employee.inoffice === true) { // this checks the value inside that json object
        statusHTML +='<li class="in">';
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeListAlt').html(statusHTML); // then add the <ul class="bulleted"> inside the  <div id="employeeListAlt">
  }); // end getJSON


    $.getJSON('data/rooms.json', function (data) { // first pull the data from the url then a function with the  data callback
    var statusRoomsHTML = '<ul class="rooms">'; // create a list
    $.each(data,function (index, inOffice) { // go through the json file like the for loop. index is like 0,1,2 and the employee is the value from the index, like [1] is   {"name": "Amit","inoffice": false}
      if (inOffice.available === true) { // this checks the value inside that json object
        statusRoomsHTML +='<li class="empty">';
      } else {
        statusRoomsHTML +='<li class="full">';
      }
      statusRoomsHTML += inOffice.room + '</li>';
    });
    statusRoomsHTML += '</ul>';
    $('#roomListAlt').html(statusRoomsHTML); // then add the <ul class="bulleted"> inside the  <div id="employeeListAlt">
  }); // end getJSON


