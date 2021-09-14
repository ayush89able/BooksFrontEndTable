import { bookConstants } from "../constants/bookConstants"

const defaulState = {
    statusFetchBook: 'UNINIT',
    statusAddBook: 'UNINIT',
    statusEditBook: 'UNINIT',
    statusDeleteBook: 'UNINIT',
    successFetchBook: false,
    successAddBook: false,
    successEditBook: false,
    successDeleteBook: false,
    books: [],
    addBookData: {},
    editBookData: {},
    deleteBookData: {}
}


export default (state = defaulState, action) => {
    switch (action.type) {
        case bookConstants.GET_BOOKS_REQUEST:
            return {
                ...state,
                statusFetchBook: 'PENDING'
            }
        case bookConstants.GET_BOOKS_SUCCESS:
            return {
                ...state,
                statusFetchBook: 'SUCCESS',
                books: action.res,
                successFetchBook: true
            }
        case bookConstants.GET_BOOKS_FAILURE:
            return {
                ...state,
                statusFetchBook: 'FAILURE',
                successFetchBook: false
            }
        case bookConstants.ADD_BOOK_REQUEST:
            return {
                ...state,
                statusAddBook: 'PENDING',
            }
        case bookConstants.ADD_BOOK_SUCCESS:
            return {
                ...state,
                statusAddBook: 'SUCCESS',
                addBookData: action.res,
                successAddBook: true
            }
        case bookConstants.ADD_BOOK_FAILURE:
            return {
                ...state,
                statusAddBook: 'FAILURE',
                successAddBook: false
            }
        case bookConstants.EDIT_BOOK_REQUEST:
            return {
                ...state,
                statusEditBook: 'PENDING',
            }
        case bookConstants.EDIT_BOOK_SUCCESS:
            return {
                ...state,
                statusEditBook: 'SUCCESS',
                editBookData: action.res,
                successEditBook: true
            }
        case bookConstants.EDIT_BOOK_FAILURE:
            return {
                ...state,
                statusEditBook: 'FAILURE',
                successEditBook: false
            }
            case bookConstants.DELETE_BOOK_REQUEST:
            return {
                ...state,
                statusDeleteBook: 'PENDING',
            }
        case bookConstants.DELETE_BOOK_SUCCESS:
            return {
                ...state,
                statusDeleteBook: 'SUCCESS',
                deleteBookData: action.res,
                successDeleteBook: true
            }
        case bookConstants.DELETE_BOOK_FAILURE:
            return {
                ...state,
                statusDeleteBook: 'FAILURE',
                successDeleteBook: false
            }
        default:
            return state
    }
}