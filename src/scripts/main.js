let currentPage = 1;

// Referències als elements del DOM:
// apiSelector, searchInput, searchForm
// ... (Obtén les referències amb document.getElementById)
const searchForm = document.getElementById("search-form");
const apiSelector = document.getElementById("api-selector");
const searchInput = document.getElementById("search-input");

// Event Listener
// ... (Afegeix l'event listener al searchForm per cridar fetchData)
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  currentPage = 1;
  fetchData();
});

// Funció principal per obtenir dades (a implementar)
async function fetchData() {
  const searchTerm = searchInput.value.trim();
  const useAxios =
    apiSelector.value ===
    "axios"; /* ... (Comprova si apiSelector.value és 'axios') */

  showLoading();
  hideError();
  clearResults();
  clearPagination();
  // ... (Neteja resultats anteriors i paginació anterior)

  try {
    if (useAxios) {
      await fetchDataWithAxios(searchTerm);
      // ... (Crida la funció per obtenir dades amb Axios)
    } else {
      await fetchDataWithFetch(searchTerm);
      // ... (Crida la funció per obtenir dades amb Fetch)
    }
  } catch (error) {
    showError(error.message); // ... (Gestiona errors inesperats si s'escapen de les funcions específiques de Fetch/Axios)
  } finally {
    hideLoading();
  }
}
