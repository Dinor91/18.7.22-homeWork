//Defining the elements in the HTML page

const EL_userOutputs = document.getElementById("outputs-container");
const userChoosingName = document.getElementById("name");
const userChoosingAge = document.getElementById("age");
const userChoosingCountry = document.getElementById("country");
const userChoosingMale = document.getElementById("male");
const userChoosingFemale = document.getElementById("female");
const userBackgroundColor = document.getElementById("fav-color");

//Find out what gender
function userGender() {
  if (userChoosingMale.checked) {
    return "male";
  } else userChoosingFemale.checked;
  return "female";
}

function clearInputs() {
  userChoosingName.value = "";
  userChoosingAge.value = "";
  userBackgroundColor.style.backgroundColor = "#22222";
}

//Displays the user's choosing
function display() {
  if (userChoosingName.value.length < 2 || userChoosingAge.value < 0) {
    return;
  }

  EL_userOutputs.innerHTML += `<div class="card" style="width: 18rem; background-color:${
    userBackgroundColor.value
  }
    ">
  <div class="card-header">Here is yours Choosing:</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" id="show-name">${userChoosingName.value}
     
    </li>
    <li class="list-group-item" id="show-age">${userChoosingAge.value}
     </li>
    <li class="list-group-item" id="show-country">${userChoosingCountry.value}
    </li>
    <li class="list-group-item" id="show-gender">${userGender()}
    </li>
  </ul>`;
}

//Triggers the function when the user clicks on a button in html
function submit() {
  //userGender();
  display();
  clearInputs();
}
