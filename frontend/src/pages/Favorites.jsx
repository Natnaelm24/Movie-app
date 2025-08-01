import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/Moviecard"; // ✅ Missing import

function Favorite() {
  const { favorites } = useMovieContext();

  // ✅ Check if favorites exist and has items
  if (favorites && favorites.length > 0) {
    return (
        <div className="favorites-header">
            <h1>Favorite Movies</h1>
            <p>Here are your favorite movies:</p>
      <div className="movie-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
    );
  }

  // ✅ Show this if no favorites
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding some movies to your favorites and they will appear here.</p>
    </div>
  );
}

export default Favorite;
