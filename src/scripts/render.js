// Referències als elements del DOM:
// //loadingElement, errorElement, errorMessage, emptyState, resultsContainer, paginationContainer
const loadingElement = document.getElementById("loading");
const errorElement = document.getElementById("error");
const errorMessage = document.getElementById("error-message");
const emptyState = document.getElementById("empty-state");
const resultsContainer = document.getElementById("results");
const paginationContainer = document.getElementById("pagination");

// Funció per mostrar l'indicador de càrrega
function showLoading() {
  // ... (Elimina la classe 'hidden' de loadingElement)
  loadingElement.classList.remove("hidden");
}

// Funció per amagar l'indicador de càrrega
function hideLoading() {
  // ... (Afegeix la classe 'hidden' a loadingElement)
  loadingElement.classList.add("hidden");
}

// Funció per mostrar missatges d'error
function showError(message) {
  // ... (Actualitza el text de errorElement i elimina la classe 'hidden')
  errorMessage.textContent = message; //textContent en lloc de innerHTML per seguretat, evita injecció de HTML
  errorElement.classList.remove("hidden");
}

// Funció per amagar missatges d'error
function hideError() {
  // ... (Afegeix la classe 'hidden' a errorElement)
  errorElement.classList.add("hidden");
}

// Funció per mostrar missatge empty state
function showEmptyState() {
  emptyState.classList.remove("hidden");
}

// Funció per amagar empty state
function hideEmptyState() {
  emptyState.classList.add("hidden");
}

function clearResults() {
  resultsContainer.innerHTML = "";
}

function clearPagination() {
  paginationContainer.innerHTML = "";
}

// Funció per a la visualització dels resultats i la paginació (a implementar)
function displayResults(items, totalItems) {
  // ... (Implementa la lògica per mostrar cada "ítem" com una targeta i per cridar setupPagination)
  //   Implementa displayResults(items, totalItems):
  // » Assegura't de netejar el contingut del resultsContainer abans d'afegir nous elements.
  // » Si l'array items està buit, mostra un missatge com "No s'han trobat resultats" dins del resultsContainer.
  // » Per a cada item de l'array items, hauràs de crear dinàmicament un element div amb la classe card.
  // » Dins de cada card, mostra la informació rellevant de l'ítem (p. ex., title, body, id).
  // » Afegeix cada card al resultsContainer.
  // » Un cop mostrats tots els resultats, crida setupPagination(totalItems) per generar els botons de paginació.
}

function setupPagination(totalItems) {
  // ... (Implementa la lògica per crear els botons de paginació)
  //   Implementa setupPagination(totalItems):
  // » Neteja el contingut actual del paginationContainer.
  // » Pista de càlcul de pàgines: Calcula el nombre total de pàgines (totalPages) dividint totalItems per itemsPerPage i arrodonint cap amunt (utilitza Math.ceil()).
  // » Crea un bucle per generar un botó per a cada pàgina (des de 1 fins a totalPages).
  // » Cada botó ha de mostrar el seu número de pàgina (textContent).
  // » Afegeix un event listener click a cada botó. Quan es cliqui:
  // Actualitza la variable global currentPage amb el número de pàgina clicat.
  // Torna a cridar la funció fetchData() per carregar les dades de la nova pàgina.
  // » Pista d'estat del botó: Deshabilita el botó que correspon a la currentPage actual per indicar a l'usuari en quina pàgina es troba.
  // » Afegeix els botons al paginationContainer.
}
