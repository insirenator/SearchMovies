import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './styles/style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// let movies = [];

// let list = [
// 	'John Wick', 'Iron Man', 'Avengers', 'Inception',
// 	'The Social Network', 'The Wolf of the Wall Street',
// 	'Arrival', 'Interstellar', 'Gravity', 'Night Crawler',
// 	'Prisoners', 'La La Land', 'Blade Runner 2049',
// 	'The Hateful Eight', 'The Revenant', 'Inglourious Bastards',
// 	'Black Swan', 'The Witch', 'Manchester by the Sea',
// ];

// function getMovie() {
// 	list.forEach( (movie) => {
// 		const response = fetch(`http://www.omdbapi.com/?apikey=da4baaed&t=${movie}`);
// 		response.then(data => data.json()).then(data => list.push(data));		
// 	});

// 	console.log(list);
// }

// getMovie();