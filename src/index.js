import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './styles/style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// let movies = [];

// let list = [
// 	'Jason Bourne', 'Kill Bill Vol 1', 'Project X',
// 	'The Hot chick', 'Now you see me', 'The man on the ledge',
// 	'12 angry men'
// ];

// function getMovie() {
// 	list.forEach( (movie) => {
// 		const response = fetch(`http://www.omdbapi.com/?apikey=da4baaed&t=${movie}`);
// 		response.then(data => data.json()).then(data => movies.push(data));		
// 	});

// 	console.log(movies);
// }

// getMovie();