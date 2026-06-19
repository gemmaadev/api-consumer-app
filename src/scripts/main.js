let currentPage = 1;
const itemsPerPage = 10; // Quants ítems per pàgina vols mostrar

// Referències als elements del DOM:
// apiSelector, searchInput, fetchButton, loadingElement, errorElement, resultsContainer, paginationContainer
// ... (Obtén les referències amb document.getElementById)

// Event Listener per al botó "Obtenir Dades"
// ... (Afegeix l'event listener al fetchButton per cridar fetchData)
// Funció principal per obtenir dades (a implementar)

async function fetchData() {
    const searchTerm = /* ... (Obtén el valor de searchInput) */;
    const useAxios = /* ... (Comprova si apiSelector.value és 'axios') */;
    
    showLoading();
    hideError();
    // ... (Neteja resultats anteriors i paginació anterior)

    try {
        if (useAxios) {
            // ... (Crida la funció per obtenir dades amb Axios)
        } else {
            // ... (Crida la funció per obtenir dades amb Fetch)
        }
    } catch (error) {
        // ... (Gestiona errors inesperats si s'escapen de les funcions específiques de Fetch/Axios)
    } finally {
        hideLoading();
    }
}
