import React from 'react';
import { connect } from 'react-redux';

import CommentForm from '../components/comment-form.js';
import CommentList from '../components/comments-list.js';

import { isEmptyString } from '../actions/utils.js';

import { removeComment, addNewComment, changeElForm } from '../actions';

let CommentApp = (props) => {
	const {
		newAuthor, newComment, comments, removeComment, addNewComment, changeElForm
	} =props;

	return (
		<div>
			<h1>Комментарии</h1>
			<CommentList comments = { comments } removeComment = { removeComment }/>

			<CommentForm 
				newAuthor = {newAuthor} 
				newComment = {newComment} 
				addNewComment = { addNewComment } 
				changeElForm = { changeElForm }
			 />			

		</div>	
	)
}

const mapStateToProps = (state) => {
	const { comments, newAuthor, newComment } = state;
	return {
		comments,
		newAuthor,
		newComment
	}
}

const mapDispatchToProps = (dispatch) => {
	const { newAuthor, newComment } = state;
	return {
		removeComment: ( id ) => dispatch(removeComment( id )),
		addNewComment: ( event ) => if (!(isEmptyString( newAuthor )) || !(isEmptyString( newComment ))) { dispatch(addNewComment( event ))} ,
		changeElForm: ( event ) => dispatch(changeElForm( event))
	}
}

CommentApp = connect(
	mapStateToProps,
	mapDispatchToProps
)(CommentApp);

export default CommentApp;


