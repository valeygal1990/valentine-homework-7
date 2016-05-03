$(document).ready(function(){

// I use a console.log to check to make sure that my pages are hooked up correctly to start
  console.log("Page Ready");

  // This is a good start on the array but you do have these stored in classes already so I would choose to do what you want in the dropdown menu
  // var cityImages = [
  //   'images/austin.jpg',
  //   'images/citipix_skyline.jpg',
  //   'images/la.jpg',
  //   'images/nyc.jpg',
  //   'images/sf.jpg',
  //   'images/sydney.jpg'];

  var cities = ['Austin', 'San Francisco', 'Los Angeles', 'New York', 'Sydney'];

  // First, you want to use the array to create a list of options
  var currentIndex = 0;
  // You can use the current index variable you made but it's easier to use i and set that variable in your loop
  // So this says start at i=0 and then continue until we hit the value of cities.length and add one each time it goes through the loop
  for(var i=0; i<cities.length; i++){
    // This targets the id of city-type and adds more options to it using the array with the html you're writing here
    $('#city-type').append("<option>"+cities[i]+"</option>");
  }

  

   //When you click the up or down button, display the drop down list of citites

   //when you lick on a city, display the corresponding background

   // Change is a better option here because there is not click to submit option with the drop down and the user action triggering the change is the change in the value
   $('#city-type').change(displayImageSelections);

   function displayImageSelections(){
    // In this function, you want to get the information from what the user selected and save it in a new variable

    var city = $('#city-type').val();

    // I like to check what value I'm getting here too
    console.log(city);

    // Now you can do your if statement with the nice variable you have (I'll let you try that one)

    // var action = $(this).val();
    // if (action = "")
    // $('#city-type option:selected').text();

  }





 





	
});