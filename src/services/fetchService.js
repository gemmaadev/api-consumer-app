const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Funció per obtenir dades amb Fetch (a implementar)
async function fetchDataWithFetch(searchTerm) {
  // ... (Implementa la petició amb Fetch API)
}

// Implementa fetchDataWithFetch(searchTerm):
// » Fes una petició GET a API_URL utilitzant Fetch API.
//  Algunes pistes:

// Per afegir la paginació i la cerca, hauràs d'incloure _page, _limit i q (per al terme de cerca) com a paràmetres de query string a l'URL de la petició.
// Un cop rebuda la response, recorda comprovar la propietat response.ok. Si és false, llança un nou Error amb un missatge descriptiu (p. ex., "Error HTTP: [codi d'estat]").
// Per a la paginació, necessitaràs el nombre total d'ítems. JSONPlaceholder retorna aquest valor en un encapçalament HTTP anomenat X-Total-Count. Hauràs d'accedir-hi mitjançant response.headers.get('X-Total-Count').
// » Finalment, crida displayResults passant les dades obtingudes i el totalItems.
