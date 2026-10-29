

//endpoint que adiciona o mapa ao site.
const map = L.map('map').setView([ -23.529162,  -46.666273], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

window.addEventListener('resize', () => {
    map.invalidateSize();
});

//MARCADORES MAPA
const empresa = L.marker([-23.529162,  -46.666273],
  {alt: 'Kyiv'}).addTo(map)
  .bindPopup('Estamos localizados em:  Av. Dr. Adolpho Pinto, 109 - Barra Funda, São Paulo - SP, CEP: 01156-050');

  console.log(typeof empresa._latlng.lat)


//Endpoint busca o CEP e captura coordenadas.
const campoCEP = document.getElementById('cep');
const requisicao = document.getElementById('btnverify');


 const urlAPI = (preencherCEP) =>{
    const url = `https://brasilapi.com.br/api/cep/v2/${preencherCEP}`
    return url;
  }
  console.log(urlAPI())

  

let marcadorUsuario = null;

requisicao.addEventListener('click', function () {
  const retornoURL = urlAPI(campoCEP.value);

  fetch(retornoURL)
    .then(response => response.json())
    .then(data => {
      const latitude = Number(data.location.coordinates.latitude);
      const longitude = Number(data.location.coordinates.longitude);

      if (marcadorUsuario !== null) {
        map.removeLayer(marcadorUsuario);
      }

      marcadorUsuario = L.marker([latitude, longitude], { alt: 'Kyiv' })
        .addTo(map)
        .bindPopup('Você está aproximadamente aqui!');
    });
});

