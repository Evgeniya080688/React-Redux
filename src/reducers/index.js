import { REMOVE, ADD_NEW_COMMENT, CHANGE_EL_FORM } from "../constants/action-types";
import { isEmptyString } from '../actions/utils.js';

const  reducer = ( state = {}, action ) => {
	

	if (action.type === REMOVE) {	
		return Object.assign({}, {comments: state.comments.filter(comment => comment.id !== action.id)})
		return localStorage.setItem('comments', JSON.stringify(state.comments)); 			
	}

	else if (action.type === ADD_NEW_COMMENT) {	
		action.event.preventDefault();

		if (!isEmptyString(state.newAuthor) && !isEmptyString(state.newComment)){
			return Object.assign({}, state, {
				comments: [...state.comments, { id: action.id, author: state.newAuthor, date: action.date , text: state.newComment}],
				newAuthor: '',
		 		newComment: ''
			});	
		}	

		return state;

	    return localStorage.setItem('comments', JSON.stringify(state.comments)); 	
	    
	}

	else if (action.type === CHANGE_EL_FORM) {

		return Object.assign({}, state, {
			[action.name]: action.value
			
		});
	   
	}

	return state;
}

export default reducer;


