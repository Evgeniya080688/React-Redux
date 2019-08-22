import { REMOVE_COMMENT, ADD_NEW_COMMENT, CHANGE_EL_FORM } from "../constants/action-types";


const  reducer = ( state = {}, action ) => {

	switch (action.type) {
		case REMOVE_COMMENT:
    		return [
			...state,
			{ comments: state.comments.filter( comment => comment.id !== action.id ) }
			]
			localStorage.setItem('comments', JSON.stringify(state.comments));

    	case ADD_NEW_COMMENT:
    		return prevent;
    		let { comments, newAuthor, newComment } = state;  
    		return [
    		...state,
    		{
				comments: [...comments, { id: action.id, author: newAuthor, date: action.date , text: newComment}],
				newAuthor: '',
		 		newComment: ''
			}
    		]  		
			localStorage.setItem('comments', JSON.stringify(state.comments));

    	case CHANGE_EL_FORM:
    		return [
    		...state,
    		{ [action.name]: action.value }
    		]
    		
    	default:
     		return state;
	}
	
}

export default reducer;

