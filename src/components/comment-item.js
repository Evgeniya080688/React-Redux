import React from 'react';

const CommentItem = (props) => {
	const { id, author, text, date, removeComment } = props;
	return (
		<li>
			<article>
				<header>
					<h2>{author}</h2>					
				</header>	 
				
				<p>
					{text}
				</p>	
				<footer>
					<time>
						{date}
					</time>	
				</footer>				
			</article>
			<button class="deleteBtn"
				onClick = { () => removeComment(id) }				
			>
			Удалить
			</button>			
		</li>
	);
}

export default CommentItem;

			
