async function fetchDataWithAxios(searchTerm) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        _page: currentPage,
        _limit: itemsPerPage,
        q: searchTerm,
      },
    });

    const totalItems = response.headers["x-total-count"];

    displayResults(response.data, totalItems);
  } catch (error) {
    const message = error.response?.statusText || error.message;
    showError(message);
    throw error;
  }
}
