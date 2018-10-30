
import axios from "axios";

export const FETCHING_REQUEST = "FETCHING_REQUEST";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";
export const ADDING = "ADDING";
export const ADDING_SUCCESS = "ADDING_SUCCESS";
export const ADDING_FAILURE = "ADDING_FAILURE";

export const DELETING = "DELETING";
export const DELETING_SUCCESS = "DELETING_SUCCESS";
export const DELETING_FAILURE = "DELETING_FAILURE";

export const fetchNotes = () => dispatch => {
  // let's do some async stuff! Thanks react-thunk :)
  dispatch({ type: FETCHING_REQUEST });
 
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => {
      dispatch({ type: FETCHING_SUCCESS, payload: response.data });
    })
    .catch(error => dispatch({ type: FETCHING_FAILURE, payload: error }));
};

export const addNote = Note => dispatch => {
  // let's do some async stuff! Thanks react-thunk :)
  dispatch({ type: "ADDING" });
  axios
    .post("http://localhost:3333/Notes", Note)
    .then(response => {
      dispatch({ type: ADDING_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: ADDING_FAILURE, payload: error });
    });
};

export const deleteNote = id => dispatch => {
  // let's do some async stuff! Thanks react-thunk :)
  dispatch({ type: "DELETING" });
  axios
    .delete(`http://localhost:3333/Notes/${id}`)
    .then(response => {
      dispatch({ type: DELETING_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: DELETING_FAILURE, payload: error });
    });
};
