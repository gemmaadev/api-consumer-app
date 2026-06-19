// Funció per obtenir dades amb Fetch (a implementar)
// Implementa fetchDataWithFetch(searchTerm):
// » Fes una petició GET a API_URL utilitzant Fetch API.
async function fetchDataWithFetch(searchTerm) {
  // ... (Implementa la petició amb Fetch API)
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  try {
    // Per afegir la paginació i la cerca, hauràs d'incloure _page, _limit i q (per al terme de cerca) com a paràmetres de query string a l'URL de la petició.
    const url = `${API_URL}?_page=${currentPage}&_limit=${itemsPerPage}&q=${searchTerm}`; //Construim la URL amb params

    const response = await fetch(url); //Fem la petició

    // Un cop rebuda la response, recorda comprovar la propietat response.ok.
    if (!response.ok) {
      //Comprova response.ok
      // Si és false, llança un nou Error amb un missatge descriptiu (p. ex., "Error HTTP: [codi d'estat]").
      throw new Error(`Error HTTP: ${response.status}`);
    }

    // Per a la paginació, necessitaràs el nombre total d'ítems. JSONPlaceholder retorna aquest valor en un encapçalament HTTP anomenat X-Total-Count. Hauràs d'accedir-hi mitjançant response.headers.get('X-Total-Count').
    const totalItems = response.headers.get("X-Total-Count"); //Llegeix X-Total-Count

    const result = await response.json(); //Parseja el JSON
    // » Finalment, crida displayResults passant les dades obtingudes i el totalItems.
    displayResults(result, totalItems); //Crida displayResults
  } catch (error) {
    showError(error.message); //Gestiona errors
    throw error;
  }
}
