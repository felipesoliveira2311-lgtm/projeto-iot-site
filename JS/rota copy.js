

//endpoint que adiciona o mapa ao site.
const map = L.map('map').setView([ -23.529162,  -46.666273], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//MARCADORES MAPA
const empresa = L.marker([-23.529162,  -46.666273],
  {alt: 'Kyiv'}).addTo(map)
  .bindPopup('Kyiv, Ukraine is the birthplace of Leaflet!');

  const usuario = L.marker([-23.529162,  -46.666273],
  {alt: 'Kyiv'}).addTo(map)
  .bindPopup('Kyiv, Ukraine is the birthplace of Leaflet!');

//endpoint que traça a rota no mapa.
let request = new XMLHttpRequest();

request.open('GET', 'https://api.heigit.org/openrouteservice/v2/directions/driving-car?api_key=eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjZjZTllMjNlZTM1YjQ2ZmVhMWU4NDNlMWU4MGQxZTM5IiwiaCI6Im11cm11cjY0In0=&start=--23.529162,%20-23.32810&end=-46.666273,%20-23.52948');

request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();


//Endpoint busca o CEP e captura coordenadas.
const campoCEP = document.getElementById('cep');
const requisicao = document.getElementById('btnverify');


 const urlAPI = (preencherCEP) =>{
    const url = `https://brasilapi.com.br/api/cep/v2/${preencherCEP}`
    return url;
  }

  console.log(urlAPI())

requisicao.addEventListener('click', function(){

  const capturarCEP = (valorCEP) =>{
    valorCEP = campoCEP.value
    urlAPI(valorCEP)
    return urlAPI(valorCEP);
  }
  console.log(capturarCEP());

  const retornoURL = capturarCEP();

  fetch(retornoURL).then(response => response.json()).then(data =>{
    const cep = `cep: ${data.cep}`;
    const latitude = `latitude: ${data.location.coordinates.latitude}`;
    const longitude = `longitude: ${data.location.coordinates.longitude}`;
      console.log(cep)
      console.log(latitude)
      console.log(longitude)
   });
  })