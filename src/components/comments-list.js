import React from 'react';
import CommentItem from './comment-item';

let CommentsList = (props) => {
	const { comments, removeComment } = props;
	return (<ul>
		{
			comments.map((comment) => {
				const { id, author, text, date } = comment;
				return (
					<CommentItem 	
						key = { id }
						id = { id }					
						author = { author }
						text = { text }
						date = { date }							
						removeComment = { removeComment }
						comments
				/>
				)
			})
		}
	</ul>
	)
}

export default CommentsList;