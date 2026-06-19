//loadingElement, errorElement, emptyState, resultsContainer, paginationContainer

// Funció per mostrar l'indicador de càrrega
function showLoading() {
  // ... (Elimina la classe 'hidden' de loadingElement)
}

// Funció per amagar l'indicador de càrrega
function hideLoading() {
  // ... (Afegeix la classe 'hidden' a loadingElement)
}

// Funció per mostrar missatges d'error
function showError(message) {
  // ... (Actualitza el text de errorElement i elimina la classe 'hidden')
}

// Funció per amagar missatges d'error
function hideError() {
  // ... (Afegeix la classe 'hidden' a errorElement)
}

// Funció per mostrar missatge empty state
function showEmptyState() {}

// Funció per amagar empty state
function hideEmptyState() {}

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
