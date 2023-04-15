import React from 'react';
import MoviesSection from './MoviesSection';
import moviesData from '../data/movies';

const SearchSection = () => {

	const [inputVal, setInputVal] = React.useState("");
	const [filteredMovies, setFilteredMovies] = React.useState(moviesData);
	const [found, setFound] = React.useState(filteredMovies.length);

	function handleChange(event) {
		const newInputVal = event.target.value;
		const newFilteredMovies = filterMovies(moviesData, newInputVal);
		
		setFilteredMovies(newFilteredMovies);
		setFound(newFilteredMovies.length);
		setInputVal(newInputVal);
	}

	function filterMovies(moviesData, inputVal) {
		return moviesData.filter((mv) => {
			return mv.Title.toLowerCase().includes(inputVal.trim().toLowerCase())
		})
	}

	return (
		<div className="search-section">
			<div className="search-bar">
				<input 
					type="text"
					placeholder="Search Movie"
					className="search-input"
					onChange={handleChange}
				/>
				<span 
					className="material-icons search-icon">
					search
				</span>
			</div>

			{found !== moviesData.length && <h4 className="found">Found Results : {found} </h4>}

			<MoviesSection 
				movies={filteredMovies} 
			/>
		</div>
	);
}

export default SearchSection;