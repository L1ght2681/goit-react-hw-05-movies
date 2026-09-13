import { useParams, Link } from 'react-router-dom';

export default function Cast() {
  const { movieId } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <Link to={`/movies/${movieId}`}>← Back to movie</Link>
      <h2>Cast for movie ID: {movieId}</h2>
      <p>Actor List</p>
    </div>
  );
}
