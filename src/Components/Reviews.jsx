import { useParams, Link } from 'react-router-dom';

export default function Reviews() {
  const { movieId } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <Link to={`/movies/${movieId}`}>← Back to movie</Link>
      <h2>Reviews for movie ID: {movieId}</h2>
      <p>Reviews </p>
    </div>
  );
}
