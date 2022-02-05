url1="https://data.covid19india.org/state_district_wise.json";
var down = document.getElementById('gfg');
var select = document.getElementById("arr");
var select2 = document.getElementById("arr2");
var states = null;
var dist = 0;
loadNames();

async function loadNames() {
  var response = await fetch(url1);
  const names = await response.json();
  states = Object.keys(names);
  GFG_Fun(states);
}

function GFG_Fun(elmts) {
  for (var i = 0; i < elmts.length; i++) {
      var optn = elmts[i];
      var el = document.createElement("option");
      el.textContent = optn;
      el.value = optn;
      select.appendChild(el);
  }
  // down.innerHTML = "Select District";
}

async function loadNames2() {
  var select = document.getElementById('arr');
  var text = select.options[select.selectedIndex].text;
  if (text== "select data" || text== "State Unassigned") {
    alert("Select valid option");
  } else {
    console.log(text);
    GFG_Fun2(text);
  }
}

async function GFG_Fun2(elmts) {
  var response = await fetch(url1);
  const names = await response.json();
  const dists = Object.keys(names[elmts]['districtData']);
  for (var i = 0; i < dists.length; i++) {
      var optn = dists[i];
      var el = document.createElement("option");
      el.textContent = optn;
      el.value = optn;
      select2.appendChild(el);
  }
}
async function covidInfo(){
  var response = await fetch(url1);
  const names = await response.json();
  var select = document.getElementById('arr');
  var text1 = select.options[select.selectedIndex].text;
  var select2 = document.getElementById('arr2');
  var text2 = select2.options[select2.selectedIndex].text;
  const dataa = Object.keys(names[text1]['districtData'][text2]);
  console.log(dataa);
  const total = names['Andhra Pradesh']['districtData']['Vizianagaram']['confirmed'] ;
  const active = names['Andhra Pradesh']['districtData']['Vizianagaram']['active'] ;
  const recovered = names['Andhra Pradesh']['districtData']['Vizianagaram']['recovered'] ;
  const deceased = names['Andhra Pradesh']['districtData']['Vizianagaram']['deceased'] ;
  const Dtotal= names['Andhra Pradesh']['districtData']['Vizianagaram']['delta']['confirmed'] ;
  const Drecovered = names['Andhra Pradesh']['districtData']['Vizianagaram']['delta']['recovered'] ;
  const Ddeceased= names['Andhra Pradesh']['districtData']['Vizianagaram']['delta']['deceased'] ;
  document.getElementById('covidData').innerHTML = '<h2>Covid Details</h2> <br/><br/>'+'Total :'+total+'<br/><br/>Active :'
  +active+'<br/><br/>Recovered :'+recovered+'<br/><br/>Deceased :'+deceased+'<br/><br/><h2>Delta variant details:</h2><br/><br/>'+
  'Total :'+Dtotal+'<br/><br/>Recovered :'+Drecovered+'<br/><br/>Deceased :'+Ddeceased;
}
