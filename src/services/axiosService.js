// Funció per obtenir dades amb Axios (a implementar)
// Implementa fetchDataWithAxios(searchTerm):
// » Fes una petició GET a API_URL utilitzant la llibreria Axios.
async function fetchDataWithAxios(searchTerm) {
  // ... (Implementa la petició amb Axios)
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  try {
    // » Pista de paràmetres: Axios facilita afegir paràmetres de query string utilitzant l'objecte params en la configuració de la petició. Pensa en _page, _limit i q.
    // const url = `${API_URL}?_page=${currentPage}&_limit=${itemsPerPage}&q=${searchTerm}`; //BUSCAR Com passar params a axios.get()

    const response = await axios.get(API_URL, {
      params: {
        _page: currentPage,
        _limit: itemsPerPage,
        q: searchTerm,
      },
    });

    // » Pista de gestió d'errors d'Axios: Axios llança errors automàticament per respostes HTTP amb estat d'error.
    // Captura'ls amb try...catch. L'objecte error d'Axios conté informació útil com error.response?.statusText (per al missatge d'error HTTP)
    // o error.message (per a errors de xarxa).
    // if (!response.ok) {
    //   throw new Error(`Error HTTP: ${response.status}`);
    // }

    // » Pista d'obtenció de total d'ítems: Amb Axios, els encapçalaments de la resposta es troben a response.headers.
    // El total d'ítems estarà a response.headers['x-total-count'].
    const totalItems = response.headers["x-total-count"];

    // const result = await response.json(); //BUSCAR Com accedir a response.data (diferent de Fetch que usa response.json())

    // » Finalment, crida displayResults passant les dades (response.data) i el totalItems.
    displayResults(response.data, totalItems);
  } catch (error) {
    const message = error.response?.statusText || error.message;
    showError(message);
    throw error;
  }
}
