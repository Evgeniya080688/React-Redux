import { createId, getDate } from './utils.js';


export const removeComment = ( payload ) => {
	return {
		type: 'REMOVE_COMMENT',
		id: payload
	}
}

export const addNewComment = ( payload, newAuthor, newComment) => {
	return {
		type: 'ADD_NEW_COMMENT',
		id: createId(),
		date: getDate(),
		prevent: payload.preventDefault()
	}
}

export const changeElForm = ( payload ) => {
	return {
		type: 'CHANGE_EL_FORM',
		name: payload.target.name,
		value: payload.target.value
	}
}