const moviesData = [
  {
    "Title": "Iron Man",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "02 May 2008",
    "Runtime": "126 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Jon Favreau",
    "Writer": "Mark Fergus, Hawk Ostby, Art Marcum",
    "Actors": "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
    "Plot": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    "Language": "English, Persian, Urdu, Arabic, Kurdish, Hindi, Hungarian",
    "Country": "United States, Canada",
    "Awards": "Nominated for 2 Oscars. 22 wins & 73 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "94%"
      },
      {
        "Source": "Metacritic",
        "Value": "79/100"
      }
    ],
    "Metascore": "79",
    "imdbRating": "7.9",
    "imdbVotes": "1,074,372",
    "imdbID": "tt0371746",
    "Type": "movie",
    "DVD": "30 Sep 2008",
    "BoxOffice": "$319,034,126",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "John Wick",
    "Year": "2014",
    "Rated": "R",
    "Released": "24 Oct 2014",
    "Runtime": "101 min",
    "Genre": "Action, Crime, Thriller",
    "Director": "Chad Stahelski, David Leitch",
    "Writer": "Derek Kolstad",
    "Actors": "Keanu Reeves, Michael Nyqvist, Alfie Allen",
    "Plot": "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took his car.",
    "Language": "English, Russian, Hungarian",
    "Country": "United States, United Kingdom, China",
    "Awards": "5 wins & 10 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "86%"
      },
      {
        "Source": "Metacritic",
        "Value": "68/100"
      }
    ],
    "Metascore": "68",
    "imdbRating": "7.4",
    "imdbVotes": "665,807",
    "imdbID": "tt2911666",
    "Type": "movie",
    "DVD": "03 Feb 2015",
    "BoxOffice": "$43,037,835",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "The Avengers",
    "Year": "2012",
    "Rated": "PG-13",
    "Released": "04 May 2012",
    "Runtime": "143 min",
    "Genre": "Action, Sci-Fi",
    "Director": "Joss Whedon",
    "Writer": "Joss Whedon, Zak Penn",
    "Actors": "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    "Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    "Language": "English, Russian, Hindi",
    "Country": "United States",
    "Awards": "Nominated for 1 Oscar. 38 wins & 80 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "91%"
      },
      {
        "Source": "Metacritic",
        "Value": "69/100"
      }
    ],
    "Metascore": "69",
    "imdbRating": "8.0",
    "imdbVotes": "1,407,148",
    "imdbID": "tt0848228",
    "Type": "movie",
    "DVD": "25 Sep 2012",
    "BoxOffice": "$623,357,910",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
    "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    "Language": "English, Japanese, French",
    "Country": "United States, United Kingdom",
    "Awards": "Won 4 Oscars. 158 wins & 220 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "87%"
      },
      {
        "Source": "Metacritic",
        "Value": "74/100"
      }
    ],
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "2,391,406",
    "imdbID": "tt1375666",
    "Type": "movie",
    "DVD": "07 Dec 2010",
    "BoxOffice": "$292,587,330",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "The Social Network",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "01 Oct 2010",
    "Runtime": "120 min",
    "Genre": "Biography, Drama",
    "Director": "David Fincher",
    "Writer": "Aaron Sorkin, Ben Mezrich",
    "Actors": "Jesse Eisenberg, Andrew Garfield, Justin Timberlake",
    "Plot": "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea and by the co-founder who was later squeezed out of the business.",
    "Language": "English, French",
    "Country": "United States",
    "Awards": "Won 3 Oscars. 173 wins & 186 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "96%"
      },
      {
        "Source": "Metacritic",
        "Value": "95/100"
      }
    ],
    "Metascore": "95",
    "imdbRating": "7.8",
    "imdbVotes": "717,677",
    "imdbID": "tt1285016",
    "Type": "movie",
    "DVD": "11 Jan 2011",
    "BoxOffice": "$96,962,694",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "Arrival",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "11 Nov 2016",
    "Runtime": "116 min",
    "Genre": "Drama, Mystery, Sci-Fi",
    "Director": "Denis Villeneuve",
    "Writer": "Eric Heisserer, Ted Chiang",
    "Actors": "Amy Adams, Jeremy Renner, Forest Whitaker",
    "Plot": "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
    "Language": "English, Russian, Mandarin",
    "Country": "United States, Canada",
    "Awards": "Won 1 Oscar. 70 wins & 269 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "95%"
      },
      {
        "Source": "Metacritic",
        "Value": "81/100"
      }
    ],
    "Metascore": "81",
    "imdbRating": "7.9",
    "imdbVotes": "711,605",
    "imdbID": "tt2543164",
    "Type": "movie",
    "DVD": "14 Feb 2017",
    "BoxOffice": "$100,546,139",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "United States, United Kingdom, Canada",
    "Awards": "Won 1 Oscar. 44 wins & 148 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "72%"
      },
      {
        "Source": "Metacritic",
        "Value": "74/100"
      }
    ],
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "1,882,826",
    "imdbID": "tt0816692",
    "Type": "movie",
    "DVD": "31 Mar 2015",
    "BoxOffice": "$188,020,017",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "Gravity",
    "Year": "2013",
    "Rated": "PG-13",
    "Released": "04 Oct 2013",
    "Runtime": "91 min",
    "Genre": "Drama, Sci-Fi, Thriller",
    "Director": "Alfonso Cuarón",
    "Writer": "Alfonso Cuarón, Jonás Cuarón",
    "Actors": "Sandra Bullock, George Clooney, Ed Harris",
    "Plot": "Two astronauts work together to survive after an accident leaves them stranded in space.",
    "Language": "English, Greenlandic",
    "Country": "United Kingdom, United States",
    "Awards": "Won 7 Oscars. 240 wins & 187 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "96%"
      },
      {
        "Source": "Metacritic",
        "Value": "96/100"
      }
    ],
    "Metascore": "96",
    "imdbRating": "7.7",
    "imdbVotes": "836,908",
    "imdbID": "tt1454468",
    "Type": "movie",
    "DVD": "25 Feb 2014",
    "BoxOffice": "$274,092,705",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "Prisoners",
    "Year": "2013",
    "Rated": "R",
    "Released": "20 Sep 2013",
    "Runtime": "153 min",
    "Genre": "Crime, Drama, Mystery",
    "Director": "Denis Villeneuve",
    "Writer": "Aaron Guzikowski",
    "Actors": "Hugh Jackman, Jake Gyllenhaal, Viola Davis",
    "Plot": "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 1 Oscar. 10 wins & 38 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "81%"
      },
      {
        "Source": "Metacritic",
        "Value": "70/100"
      }
    ],
    "Metascore": "70",
    "imdbRating": "8.1",
    "imdbVotes": "736,311",
    "imdbID": "tt1392214",
    "Type": "movie",
    "DVD": "17 Dec 2013",
    "BoxOffice": "$61,002,302",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "La La Land",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "25 Dec 2016",
    "Runtime": "128 min",
    "Genre": "Comedy, Drama, Music",
    "Director": "Damien Chazelle",
    "Writer": "Damien Chazelle",
    "Actors": "Ryan Gosling, Emma Stone, Rosemarie DeWitt",
    "Plot": "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    "Language": "English, Cantonese",
    "Country": "United States, Hong Kong",
    "Awards": "Won 6 Oscars. 243 wins & 297 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "91%"
      },
      {
        "Source": "Metacritic",
        "Value": "94/100"
      }
    ],
    "Metascore": "94",
    "imdbRating": "8.0",
    "imdbVotes": "608,179",
    "imdbID": "tt3783958",
    "Type": "movie",
    "DVD": "25 Apr 2017",
    "BoxOffice": "$151,101,803",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "Blade Runner 2049",
    "Year": "2017",
    "Rated": "R",
    "Released": "06 Oct 2017",
    "Runtime": "164 min",
    "Genre": "Action, Drama, Mystery",
    "Director": "Denis Villeneuve",
    "Writer": "Hampton Fancher, Michael Green, Philip K. Dick",
    "Actors": "Harrison Ford, Ryan Gosling, Ana de Armas",
    "Plot": "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    "Language": "English, Finnish, Japanese, Hungarian, Russian, Somali, Spanish",
    "Country": "United States, United Kingdom, Canada, Spain",
    "Awards": "Won 2 Oscars. 100 wins & 165 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "88%"
      },
      {
        "Source": "Metacritic",
        "Value": "81/100"
      }
    ],
    "Metascore": "81",
    "imdbRating": "8.0",
    "imdbVotes": "593,783",
    "imdbID": "tt1856101",
    "Type": "movie",
    "DVD": "16 Jan 2018",
    "BoxOffice": "$92,071,675",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "The Hateful Eight",
    "Year": "2015",
    "Rated": "R",
    "Released": "30 Dec 2015",
    "Runtime": "168 min",
    "Genre": "Crime, Drama, Mystery",
    "Director": "Quentin Tarantino",
    "Writer": "Quentin Tarantino",
    "Actors": "Samuel L. Jackson, Kurt Russell, Jennifer Jason Leigh",
    "Plot": "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.",
    "Language": "English, Spanish, French, Persian",
    "Country": "United States",
    "Awards": "Won 1 Oscar. 45 wins & 116 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "74%"
      },
      {
        "Source": "Metacritic",
        "Value": "68/100"
      }
    ],
    "Metascore": "68",
    "imdbRating": "7.8",
    "imdbVotes": "615,994",
    "imdbID": "tt3460252",
    "Type": "movie",
    "DVD": "29 Mar 2016",
    "BoxOffice": "$54,117,416",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "The Revenant",
    "Year": "2015",
    "Rated": "R",
    "Released": "08 Jan 2016",
    "Runtime": "156 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Alejandro G. Iñárritu",
    "Writer": "Mark L. Smith, Alejandro G. Iñárritu, Michael Punke",
    "Actors": "Leonardo DiCaprio, Tom Hardy, Will Poulter",
    "Plot": "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
    "Language": "English, Pawnee, French",
    "Country": "Hong Kong, Taiwan, United States",
    "Awards": "Won 3 Oscars. 91 wins & 188 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "78%"
      },
      {
        "Source": "Metacritic",
        "Value": "76/100"
      }
    ],
    "Metascore": "76",
    "imdbRating": "8.0",
    "imdbVotes": "819,948",
    "imdbID": "tt1663202",
    "Type": "movie",
    "DVD": "19 Apr 2016",
    "BoxOffice": "$183,637,894",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "Black Swan",
    "Year": "2010",
    "Rated": "R",
    "Released": "17 Dec 2010",
    "Runtime": "108 min",
    "Genre": "Drama, Thriller",
    "Director": "Darren Aronofsky",
    "Writer": "Mark Heyman, Andres Heinz, John J. McLaughlin",
    "Actors": "Natalie Portman, Mila Kunis, Vincent Cassel",
    "Plot": "A committed dancer struggles to maintain her sanity after winning the lead role in a production of Tchaikovsky's \"Swan Lake\".",
    "Language": "English, French, Italian",
    "Country": "United States",
    "Awards": "Won 1 Oscar. 97 wins & 280 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "85%"
      },
      {
        "Source": "Metacritic",
        "Value": "79/100"
      }
    ],
    "Metascore": "79",
    "imdbRating": "8.0",
    "imdbVotes": "781,467",
    "imdbID": "tt0947798",
    "Type": "movie",
    "DVD": "29 Mar 2011",
    "BoxOffice": "$106,954,678",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "Manchester by the Sea",
    "Year": "2016",
    "Rated": "R",
    "Released": "16 Dec 2016",
    "Runtime": "137 min",
    "Genre": "Drama",
    "Director": "Kenneth Lonergan",
    "Writer": "Kenneth Lonergan",
    "Actors": "Casey Affleck, Michelle Williams, Kyle Chandler",
    "Plot": "A depressed uncle is asked to take care of his teenage nephew after the boy's father dies.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 2 Oscars. 129 wins & 269 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "96%"
      },
      {
        "Source": "Metacritic",
        "Value": "96/100"
      }
    ],
    "Metascore": "96",
    "imdbRating": "7.8",
    "imdbVotes": "291,104",
    "imdbID": "tt4034228",
    "Type": "movie",
    "DVD": "21 Feb 2017",
    "BoxOffice": "$47,695,371",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "The Witch",
    "Year": "2015",
    "Rated": "R",
    "Released": "19 Feb 2016",
    "Runtime": "92 min",
    "Genre": "Drama, Fantasy, Horror",
    "Director": "Robert Eggers",
    "Writer": "Robert Eggers",
    "Actors": "Anya Taylor-Joy, Ralph Ineson, Kate Dickie",
    "Plot": "A family in 1630s New England is torn apart by the forces of witchcraft, black magic and possession.",
    "Language": "English",
    "Country": "United States, Canada, United Kingdom",
    "Awards": "43 wins & 71 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTUyNzkwMzAxOF5BMl5BanBnXkFtZTgwMzc1OTk1NjE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "90%"
      },
      {
        "Source": "Metacritic",
        "Value": "83/100"
      }
    ],
    "Metascore": "83",
    "imdbRating": "6.9",
    "imdbVotes": "272,193",
    "imdbID": "tt4263482",
    "Type": "movie",
    "DVD": "17 May 2016",
    "BoxOffice": "$25,138,705",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
   {
    "Title": "Kill Bill: Vol. 1",
    "Year": "2003",
    "Rated": "R",
    "Released": "10 Oct 2003",
    "Runtime": "111 min",
    "Genre": "Action, Crime, Drama",
    "Director": "Quentin Tarantino",
    "Writer": "Quentin Tarantino, Uma Thurman",
    "Actors": "Uma Thurman, David Carradine, Daryl Hannah",
    "Plot": "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
    "Language": "English, Japanese, French",
    "Country": "United States",
    "Awards": "Nominated for 5 BAFTA 29 wins & 104 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "85%"
      },
      {
        "Source": "Metacritic",
        "Value": "69/100"
      }
    ],
    "Metascore": "69",
    "imdbRating": "8.2",
    "imdbVotes": "1,130,566",
    "imdbID": "tt0266697",
    "Type": "movie",
    "DVD": "13 Apr 2004",
    "BoxOffice": "$70,099,045",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "Now You See Me",
    "Year": "2013",
    "Rated": "PG-13",
    "Released": "31 May 2013",
    "Runtime": "115 min",
    "Genre": "Crime, Mystery, Thriller",
    "Director": "Louis Leterrier",
    "Writer": "Ed Solomon, Boaz Yakin, Edward Ricourt",
    "Actors": "Jesse Eisenberg, Common, Mark Ruffalo",
    "Plot": "An F.B.I. Agent and an Interpol Detective track a team of illusionists who pull off bank heists during their performances, and reward their audiences with the money.",
    "Language": "English, French",
    "Country": "United States, France",
    "Awards": "1 win & 3 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "50%"
      },
      {
        "Source": "Metacritic",
        "Value": "50/100"
      }
    ],
    "Metascore": "50",
    "imdbRating": "7.2",
    "imdbVotes": "672,310",
    "imdbID": "tt1670345",
    "Type": "movie",
    "DVD": "03 Sep 2013",
    "BoxOffice": "$117,723,989",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "Jason Bourne",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "29 Jul 2016",
    "Runtime": "123 min",
    "Genre": "Action, Thriller",
    "Director": "Paul Greengrass",
    "Writer": "Paul Greengrass, Christopher Rouse, Robert Ludlum",
    "Actors": "Matt Damon, Tommy Lee Jones, Alicia Vikander",
    "Plot": "The CIA's most dangerous former operative is drawn out of hiding to uncover more explosive truths about his past.",
    "Language": "English, Greek, German, Japanese",
    "Country": "United States, China, Spain, Japan, Germany",
    "Awards": "3 wins & 20 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGJlYjVkMjQtN2NlZC00NTJhLThmZjItMTRlZDczMmE3YmI3XkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "54%"
      },
      {
        "Source": "Metacritic",
        "Value": "58/100"
      }
    ],
    "Metascore": "58",
    "imdbRating": "6.6",
    "imdbVotes": "232,070",
    "imdbID": "tt4196776",
    "Type": "movie",
    "DVD": "06 Dec 2016",
    "BoxOffice": "$162,434,410",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "Project X",
    "Year": "2012",
    "Rated": "R",
    "Released": "02 Mar 2012",
    "Runtime": "88 min",
    "Genre": "Comedy",
    "Director": "Nima Nourizadeh",
    "Writer": "Matt Drake, Michael Bacall",
    "Actors": "Thomas Mann, Oliver Cooper, Jonathan Daniel Brown",
    "Plot": "Three high-school seniors throw a birthday party to make a name for themselves. As the night progresses, things spiral out of control as word of the party spreads.",
    "Language": "English",
    "Country": "United States",
    "Awards": "5 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc1MTk0Njg4OF5BMl5BanBnXkFtZTcwODc0ODkyNw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "28%"
      },
      {
        "Source": "Metacritic",
        "Value": "48/100"
      }
    ],
    "Metascore": "48",
    "imdbRating": "6.6",
    "imdbVotes": "217,509",
    "imdbID": "tt1636826",
    "Type": "movie",
    "DVD": "19 Jun 2012",
    "BoxOffice": "$54,731,865",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "12 Angry Men",
    "Year": "1957",
    "Rated": "Approved",
    "Released": "10 Apr 1957",
    "Runtime": "96 min",
    "Genre": "Crime, Drama",
    "Director": "Sidney Lumet",
    "Writer": "Reginald Rose",
    "Actors": "Henry Fonda, Lee J. Cobb, Martin Balsam",
    "Plot": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 3 Oscars. 17 wins & 13 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "9.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "100%"
      },
      {
        "Source": "Metacritic",
        "Value": "97/100"
      }
    ],
    "Metascore": "97",
    "imdbRating": "9.0",
    "imdbVotes": "803,154",
    "imdbID": "tt0050083",
    "Type": "movie",
    "DVD": "04 Mar 2008",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
]

export default moviesData;