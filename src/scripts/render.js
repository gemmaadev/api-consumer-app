const loadingElement = document.getElementById("loading");
const errorElement = document.getElementById("error");
const errorMessage = document.getElementById("error-message");
const emptyState = document.getElementById("empty-state");
const resultsContainer = document.getElementById("results");
const paginationContainer = document.getElementById("pagination");

function showLoading() {
  loadingElement.classList.remove("hidden");
}

function hideLoading() {
  loadingElement.classList.add("hidden");
}

function showError(message) {
  errorMessage.textContent = message;
  errorElement.classList.remove("hidden");
}

function hideError() {
  errorElement.classList.add("hidden");
}

function showEmptyState() {
  emptyState.classList.remove("hidden");
}

function hideEmptyState() {
  emptyState.classList.add("hidden");
}

function clearResults() {
  resultsContainer.innerHTML = "";
}

function clearPagination() {
  paginationContainer.innerHTML = "";
}

function displayResults(items, totalItems) {
  if (!resultsContainer || !items) return;
  clearResults();
  hideEmptyState();

  if (items.length === 0) {
    showEmptyState();
    return;
  }

  resultsContainer.innerHTML = items
    ?.map(
      (item) => `
  <article class="results-card">
    <div class="results-card-photo-wrapper">
      <img src="https://picsum.photos/seed/${item.id}/800/400"
           alt="${item.title}"
           class="results-card-photo"/>
      <span class="results-card-id">ID ${item.id}</span>
    </div>
    <div class="results-card-info">
      <h3 class="results-card-title">${item.title}</h3>
      <p class="results-card-description">${item.body}</p>
      <button type="button" class="btn-card">Read more</button>
    </div>
  </article>`,
    )
    .join("");

  setupPagination(totalItems);
}

function setupPagination(totalItems) {
  clearPagination();

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.classList.add("pagination-button");

    if (i === currentPage) {
      button.disabled = true;
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      currentPage = i;
      fetchData();
    });

    paginationContainer.appendChild(button);
  }
}
