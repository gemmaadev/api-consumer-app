let currentPage = 1;

const searchForm = document.getElementById("search-form");
const apiSelector = document.getElementById("api-selector");
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  currentPage = 1;
  fetchData();
});

async function fetchData() {
  const searchTerm = searchInput.value.trim();
  const useAxios = apiSelector.value === "axios";

  showLoading();
  hideError();
  clearResults();
  clearPagination();

  try {
    if (useAxios) {
      await fetchDataWithAxios(searchTerm);
    } else {
      await fetchDataWithFetch(searchTerm);
    }
  } catch (error) {
    showError(error.message);
  } finally {
    hideLoading();
  }
}
