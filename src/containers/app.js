import React from 'react';
import { connect } from 'react-redux';

import CommentForm from '../components/comment-form.js';
import CommentsList from '../components/comments-list.js';

import { remove, addNewComment, changeElForm } from '../actions';

let CommentApp = (props) => {
	const {
		newAuthor, newComment, comments, remove, addNewComment, changeElForm
	} =props;

	return (
		<div>
			<h1>Комментарии</h1>
			<CommentsList comments = { comments } remove = { remove }/>

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
	return {
		comments: state.comments,
		newAuthor: state.newAuthor,
		newComment: state.newComment
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		remove: ( id ) => dispatch(remove(id)),
		addNewComment: ( event ) => dispatch(addNewComment( event )),
		changeElForm: ( event ) => dispatch(changeElForm( event))
	}
}

CommentApp = connect(
	mapStateToProps,
	mapDispatchToProps
)(CommentApp);

export default CommentApp;