function generate(nat=""){

  document.getElementById("genButton").classList.add("disabled");
  document.getElementById("retrieveButton").classList.add("disabled");
  var ele = document.getElementsByName("gender");
  var gender = "";


  for (let i = 0; i<ele.length; i++){
    if (ele[i].checked){
      gender = ele[i].value;
    }
  }
  console.log(gender)
  let withoutLoading = document.getElementById('users').innerHTML;
  document.getElementById('users').innerHTML = `<div class="lds-dual-ring"></div>` + document.getElementById('users').innerHTML;
  fetch(`https://bfk.dho6342568911.repl.co/getuser?gender=${gender}`).then(response => {
    return response.json()}).then(data => {
    data = data.fields;
    
    const card = createCard(data)
    document.getElementById("genButton").classList.remove("disabled");
    document.getElementById("retrieveButton").classList.remove("disabled");
    document.getElementById('users').innerHTML = card + withoutLoading;
  })
}

function retrieve(){
  document.getElementById("genButton").classList.add("disabled");
  document.getElementById("retrieveButton").classList.add("disabled");
  let withoutLoading = document.getElementById('users').innerHTML;
  document.getElementById('users').innerHTML = `<div class="lds-dual-ring"></div>` + document.getElementById('users').innerHTML;
  const id = document.getElementById('userID').value
  fetch(`https://bfk.dho6342568911.repl.co/getById?id=${id}`).then(response => response.json()).then(data => {
    
    const card = createCard(data)
    
    document.getElementById("genButton").classList.remove("disabled");
    document.getElementById("retrieveButton").classList.remove("disabled");
    document.getElementById('users').innerHTML = card + withoutLoading;
  }).catch(() => {
    document.getElementById('users').innerHTML = `<div><h3>Error</h3></div>` + withoutLoading;
  })
}

function createCard(data){
  var name = data.firstname + " " + data.lastname;

  var card = `<div class="card" style="zoom: 0.75;">
  <p>${name}</p>
  <p>${data.gender}</p>
  <p>${data.dob}</p>
  <p>${data.adress}</p>
  <p>${data.email}</p>
  <p>${data.username}</p>
  <div class="divider"></div>
  <p class="center">${data.id}</p>
  </div>`

  return card
}

function toggle(){
  var x = document.getElementById('options');
  if (x.style.visibility === 'hidden') {
    x.style.visibility = 'visible';
  } else {
    x.style.visibility = 'hidden';
  }

  if (document.getElementById("optionstoggle").innerHTML == "OPTIONS +"){
    document.getElementById("optionstoggle").innerHTML = "OPTIONS -";
  } else {
    document.getElementById("optionstoggle").innerHTML = "OPTIONS +";
  }
}



/*
Questions to ask:
Are login credentials stored on databases? ie. websites with user accounts like facebook and instagram.
How are api keys secure? Can't users open the scripts file and find the key?
*/