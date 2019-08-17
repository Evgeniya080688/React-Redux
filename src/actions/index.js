import { createId, getDate, isEmptyString } from './utils.js';


export const remove = (id) => {
	return {
		type: 'REMOVE',
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