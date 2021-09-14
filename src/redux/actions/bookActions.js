import { bookConstants } from "../constants/bookConstants";
import { bookService } from '../../services/bookService'
export const bookActions = {
    getBooks,
    addBook,
    deleteBook,
    editBook
};

function getBooks(filter) {
    return dispatch => {
        dispatch(request(filter));

        bookService.getBooks(filter)
            .then(
                res => { 
                    dispatch(success(res.data));
                },
                error => {
                    console.log('error', error)
                    dispatch(failure(error));
                }
            );
    };

    function request(req) { return { type: bookConstants.GET_BOOKS_REQUEST, req } }
    function success(res) { return { type: bookConstants.GET_BOOKS_SUCCESS, res } }
    function failure(error) { return { type: bookConstants.GET_BOOKS_FAILURE, error } }
}

function addBook(payload) {
    return dispatch => {
        dispatch(request(payload));
        bookService.addBook(payload)
            .then(
                res => { 
                    dispatch(success(res.data));
                },
                error => {
                    console.log('error', error)
                    dispatch(failure(error));
                }
            );
    };

    function request(req) { return { type: bookConstants.ADD_BOOK_REQUEST, req } }
    function success(res) { return { type: bookConstants.ADD_BOOK_SUCCESS, res } }
    function failure(error) { return { type: bookConstants.ADD_BOOK_FAILURE, error } }
}

function deleteBook(payload) {
    return dispatch => {
        dispatch(request(payload));
        bookService.deleteBook(payload)
            .then(
                res => { 
                    dispatch(success(res.data));
                },
                error => {
                    console.log('error', error)
                    dispatch(failure(error));
                }
            );
    };

    function request(req) { return { type: bookConstants.DELETE_BOOK_REQUEST, req } }
    function success(res) { return { type: bookConstants.DELETE_BOOK_SUCCESS, res } }
    function failure(error) { return { type: bookConstants.DELETE_BOOK_FAILURE, error } }
}

function editBook(selectedId,payload) {
    return dispatch => {
        dispatch(request(payload));
        bookService.editBook(selectedId, payload)
            .then(
                res => { 
                    dispatch(success(res.data));
                },
                error => {
                    console.log('error', error)
                    dispatch(failure(error));
                }
            );
    };

    function request(req) { return { type: bookConstants.EDIT_BOOK_REQUEST, req } }
    function success(res) { return { type: bookConstants.EDIT_BOOK_SUCCESS, res } }
    function failure(error) { return { type: bookConstants.EDIT_BOOK_FAILURE, error } }
}
