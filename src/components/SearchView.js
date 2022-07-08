import Hero from "./Hero";
import NoMovieView from "./NoMovieView";
import { Link } from 'react-router-dom';

//TMDB APIKEY=958e286c0fe0fbcd0e0f1c099cbd3f4d

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`

  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={detailUrl} className="btn btn-primary">Show details</Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  const resultsHtml = searchResults.map((obj, i) => {
      return <MovieCard movie={obj} key={i} />;
    
  });

  if(resultsHtml.length>0){
    return(
      <>
        <Hero text={title} />
        {resultsHtml && 
          <div className="container">
              <div className="row">
                  {resultsHtml}
              </div>
          </div>
          }
      </>
    )
  }
    else if(resultsHtml.length===0) {
     return(
      <>
        <Hero text="No movie found" />
        <NoMovieView />
      </>
      );
    }
};

export default SearchView;
