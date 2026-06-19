const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Funció per obtenir dades amb Axios (a implementar)
async function fetchDataWithAxios(searchTerm) {
  // ... (Implementa la petició amb Axios)
}

// Implementa fetchDataWithAxios(searchTerm):
// » Fes una petició GET a API_URL utilitzant la llibreria Axios.
// » Pista de paràmetres: Axios facilita afegir paràmetres de query string utilitzant l'objecte params en la configuració de la petició. Pensa en _page, _limit i q.
// » Pista de gestió d'errors d'Axios: Axios llança errors automàticament per respostes HTTP amb estat d'error. Captura'ls amb try...catch. L'objecte error d'Axios conté informació útil com error.response?.statusText (per al missatge d'error HTTP) o error.message (per a errors de xarxa).
// » Pista d'obtenció de total d'ítems: Amb Axios, els encapçalaments de la resposta es troben a response.headers. El total d'ítems estarà a response.headers['x-total-count'].
// » Finalment, crida displayResults passant les dades (response.data) i el totalItems.
