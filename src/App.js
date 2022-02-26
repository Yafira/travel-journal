import React from 'react';
import './App.css';
import Post from './components/Post';
import Navbar from './components/Navbar';
import data from './data';

export default function App() {
	const posts = data.map((item) => {
		return <Post key={item.id} {...item} />;
	});

	return (
		<div>
			<Navbar />
			<section className='post-list'>{posts}</section>
		</div>
	);
}
