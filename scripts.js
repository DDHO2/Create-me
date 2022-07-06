sessionStorage.card1=" ";
sessionStorage.card2=" ";
sessionStorage.card3=" ";
sessionStorage.card4=" ";
sessionStorage.card5=" ";
sessionStorage.nationality="";

function generate(){
  var ele = document.getElementsByName("gender");
  var gender = "";


  for (let i = 0; i<ele.length; i++){
    if (ele[i].checked){
      gender = ele[i].value;
    }
  }

  fetch(`https://randomuser.me/api/?nat=us&gender=${gender}`).then(response => response.json()).then(function(data){
    if (gender == 'none' || gender ==""){
      gender = data.results[0].gender;
    }
    var name = data.results[0].name.first + " " + data.results[0].name.last;
    var birthday = data.results[0].dob.date.slice(0,10);
    var location = data.results[0].location.street.number + " " + data.results[0].location.street.name + ". " + data.results[0].location.city + ", " + data.results[0].location.state + '. ' + data.results[0].location.postcode + ", " + data.results[0].location.country;
    /*fetch('https://mailsac.com/api/me', {
      method: 'GET',
      headers: 'Mailsac-Key: k_n4xfjvrEoWZRObygXeukw7nppn43eHwVvIDG861YzTccf',
  }).then(response => response.json()).then(function(data){

  })*/
  let card = createCard(name,gender,birthday,location);

  updateCards();

  sessionStorage.setItem('card1',card)

  let cards = '<br><br>' + sessionStorage.getItem('card1') + sessionStorage.getItem('card2') + sessionStorage.getItem('card3') + sessionStorage.getItem('card4')

  document.getElementById('list').innerHTML = cards;

  })
}

function createCard(name,gender,birthday,location){
  return `<div class=\"card-panel teal lighten-2 col s6 m12\"><p>${name}</p><div></div><p>${gender}</p><div></div><p>${birthday}</p><div></div><p style=\"font-size:11px\">${location}</p></div><div class='divider'></div><div></div>`
}

function updateCards(){
  sessionStorage.setItem('card5', sessionStorage.getItem('card4'));
  sessionStorage.setItem('card4', sessionStorage.getItem('card3'));
  sessionStorage.setItem('card3', sessionStorage.getItem('card2'));
  sessionStorage.setItem('card2', sessionStorage.getItem('card1'));
}
