import React from 'react';

const Movie = ({ movie }) => {
	return (
		<div className="movie-card">
			{movie.Poster !== 'N/A' && <img 
				src={movie.Poster} 
				alt={movie.Title}
				className="movie-poster"
			/>}
			<div className="movie-info">
				<p className="movie-title">
					{movie.Title}
					<span className="movie-year">({movie.Year})</span>
				</p>
				
				<p className="movie-genre">{movie.Genre}</p>
				<p className="movie-runtime">{movie.Runtime}</p>
				<p className="movie-rating"> 
					<span className="material-symbols-outlined star-icon">star</span>{movie.imdbRating}/10
					</p>
				<p className="movie-plot">{movie.Plot}</p>
			</div>
		</div>
	)
};

const MoviesSection = ({ movies, searchVal }) => {

	const filteredMovies = movies.filter((mv) => {
		return mv.Title.toLowerCase().includes(searchVal.trim().toLowerCase())
	});

	const moviesList = filteredMovies.map((mv, idx) => {
		return <Movie key={idx} movie={mv} />
	});

	return (
		<div className="movies-list">
			{ moviesList }
		</div>
	);
}

export default MoviesSection;