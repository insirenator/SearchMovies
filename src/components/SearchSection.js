import React from 'react';
import MoviesSection from './MoviesSection';
import moviesData from '../data/movies';

const SearchSection = () => {

	const [inputVal, setInputVal] = React.useState("");

	function handleChange(event) {
		setInputVal(event.target.value);
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

			<MoviesSection movies={moviesData} searchVal = {inputVal} />
		</div>
	);
}

export default SearchSection;