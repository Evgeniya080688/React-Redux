import { REMOVE_COMMENT, ADD_NEW_COMMENT, CHANGE_EL_FORM } from "../constants/action-types";
import { isEmptyString } from '../actions/utils.js';

const  reducer = ( state = {}, action ) => {

	switch (action.type) {
		case 'REMOVE_COMMENT':
    		return Object.assign({}, { comments: state.comments.filter( comment => comment.id !== action.id ) });
    		return localStorage.setItem('comments', JSON.stringify(state.comments));

    	case 'ADD_NEW_COMMENT':
    		action.event.preventDefault();
    		let { comments, newAuthor, newComment} = state;    		
			if (isEmptyString(newAuthor) !== '' && isEmptyString(newComment) !==''){
				return Object.assign({}, state, {
					comments: [...comments, { id: action.id, author: newAuthor, date: action.date , text: newComment}],
					newAuthor: '',
			 		newComment: ''
				});	
			}
			return state;
			return localStorage.setItem('comments', JSON.stringify(state.comments));

    	case 'CHANGE_EL_FORM':
    		return Object.assign({}, state, { [action.name]: action.value })
    		
    	default:
     		return state;
	}
	
}

export default reducer;

