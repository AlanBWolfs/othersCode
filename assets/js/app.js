const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Se añaden los # de id's
const $n = document.querySelector('#name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('#location');
const $i = document.querySelector('#avatar');

// Se indica función asíncrona para obtener datos de un usuario
async function displayUser(username) {
  $n.textContent = 'cargando...';
  //Se utiliza try/catch para manejar errores
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    // Se define data en función a la función async
    const data = await response.json();
    localStorage.setItem('userdata', JSON.stringify(data));
    console.log(data);
    $n.textContent = `${data.name}`;
    $b.innerHTML = `<a href="${data.blog}" target="_blank" rel="noopener noreferrer">${data.blog}</a>`;
    $l.textContent = `${data.location}`;
    // Se añade el avatar
    $i.src = data.avatar_url;
  } catch (err) {
    handleError(err);
  }
}


function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // Se añade el $ faltante
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski');