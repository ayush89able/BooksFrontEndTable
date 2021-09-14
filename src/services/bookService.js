import axios from 'axios'

export const bookService = {
    getBooks,
    addBook,
    deleteBook,
    editBook
};

function getBooks(filter) {
console.log('filter from service',filter)
    let url;
    if(filter.length > 0) {
        url = `http://localhost:8001/books?genre=${filter}`
    } else {
        url= `http://localhost:8001/books`
    }
    return axios.get(url, {})
      .then((response) => {
          console.log(response)
          return response
      })
      .catch((error) => {
          console.log(error.response.data)
          return Promise.reject(error.response.data);
      })
}

function addBook(payload) {
    return axios.post('http://localhost:8001/books', payload)
      .then((response) => {
          console.log(response)
          return response
      })
      .catch((error) => {
          console.log(error.response.data)
          return Promise.reject(error.response.data)
      })
}

function deleteBook(id) {
    return axios.delete(`http://localhost:8001/books/${id}`, {})
      .then((response) => {
          console.log(response)
          return response
      })
      .catch((error) => {
          console.log(error.response.data)
          return Promise.reject(error.response.data)
      })
}

function editBook(id, payload) {
    return axios.put(`http://localhost:8001/books/${id}`, payload)
      .then((response) => {
          console.log(response)
          return response
      })
      .catch((error) => {
          console.log(error.response.data)
          return Promise.reject(error.response.data)
      })
}
