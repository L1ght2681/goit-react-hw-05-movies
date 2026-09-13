import { useParams, Link } from 'react-router-dom';

export default function MovieDetails() {
  const { movieId } = useParams();

  return (
    <div style={{ padding: '0 20px' }}>
      <Link to="/">← Go back</Link>
      
      <h1>Movie Details (ID: {movieId})</h1>
      <p>Film Details</p>

      <hr />
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
}
