const linkedin = document.getElementById("in");
const ig = document.getElementById("ig");
const yt = document.getElementById("yt");

const emBreve = (rede) =>{rede.addEventListener('click', (event) =>{event.preventDefault();alert('Em breve!')})};

emBreve (linkedin);
emBreve (ig);
emBreve (yt);

