import { createId, getDate } from './utils.js';


export const removeComment = (id) => {
	return {
		type: 'REMOVE_COMMENT',
		id
	}
}

export const addNewComment = ( event ) => {
	return {
		type: 'ADD_NEW_COMMENT',
		id: createId(),
		date: getDate(),
		event
	}
}

export const changeElForm = ( event ) => {
	return {
		type: 'CHANGE_EL_FORM',
		name: event.target.name,
		value: event.target.value
	}
}