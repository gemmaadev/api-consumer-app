async function fetchDataWithFetch(searchTerm) {
  try {
    const url = `${API_URL}?_page=${currentPage}&_limit=${itemsPerPage}&q=${searchTerm}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const totalItems = response.headers.get("X-Total-Count");

    const result = await response.json();

    displayResults(result, totalItems);
  } catch (error) {
    showError(error.message);
    throw error;
  }
}
