sessionStorage.cards="";


function func(){
  fetch('https://randomuser.me/api/?nat=us').then(response => response.json()).then(function(data){
    document.getElementById("gender").innerHTML = data.results[0].gender;
    document.getElementById("first-name").innerHTML = data.results[0].name.first;
    info['first-name'] = data.results[0].name.first;
    document.getElementById("last-name").innerHTML = data.results[0].name.last;
    info['last-name'] = data.results[0].name.last;
    document.getElementById("birthday").innerHTML = data.results[0].dob.date;
    document.getElementById("zipcode").innerHTML = data.results[0].location.postcode;
  })
}

function generate(){
  fetch('https://randomuser.me/api/?nat=us').then(response => response.json()).then(function(data){
    var gender = data.results[0].gender;
    var name = data.results[0].name.first + " " + data.results[0].name.last;
    var birthday = data.results[0].dob.date.slice(0,10);
    var location = data.results[0].location.street.number + " " + data.results[0].location.street.name + ". " + data.results[0].location.city + ", " + data.results[0].location.state + ', ' + data.results[0].location.country + '. ' + data.results[0].location.postcode;
    /*fetch('https://mailsac.com/api/me', {
      method: 'GET',
      headers: 'Mailsac-Key: k_n4xfjvrEoWZRObygXeukw7nppn43eHwVvIDG861YzTccf',
  }).then(response => response.json()).then(function(data){

  })*/
  let card = createCard(name,gender,birthday,location);
  var list = sessionStorage.getItem('cards');
    
  list = card + list

  sessionStorage.setItem('cards',list)

  document.getElementById('list').innerHTML = list;

  })
}

function createCard(name,gender,birthday,location){
  return `<div class=\"card-panel teal lighten-2 col s6\"><p>${name}</p><div></div><p>${gender}</p><div></div><p>${birthday}</p><div></div><p style=\"font-size:11px\">${location}</p></div><div class='divider'></div><div></div>`
}

function toggleOpts(){

}