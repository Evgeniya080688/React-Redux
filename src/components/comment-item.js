import React from 'react';

const CommentItem = (props) => {
	const { id, author, text, date, removeComment, comments } = props;
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
			<button class="deleteBtn" type="submit"
				onClick = { () => {
						removeComment(id);
						localStorage.setItem('comments', JSON.stringify(comments));
					}
				}				
			>
			Удалить
			</button>			
		</li>
	);
}

export default CommentItem;

			
