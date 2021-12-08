import React, { useState, useEffect } from "react";
import axios from "axios";

import Post from "./Post.jsx";
import dommyPosts from "../../../dammyData/data.js";

const Posts = () => {
	const [postsList, setPostsList] = useState(dommyPosts);
	// useEffect(() => {
	// 	axios.get("/api/posts").then(({ data }) => {
	// 		setPostsList(data);
	// 	});
	// });
	return (
		<div>
			<h4> List of Posts </h4>
			<div className='postsContainer'>
				{postsList.map((post, i) => (
					<Post post={post} key={i} />
				))}
			</div>
		</div>
	);
};

export default Posts;
