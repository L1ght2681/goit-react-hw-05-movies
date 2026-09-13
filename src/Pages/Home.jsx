import { Link } from 'react-router-dom';

export default function Home() {
  const trendingMovies = [
    { id: 1, title: 'Avatar' },
    { id: 2, title: 'Inception' },
    { id: 3, title: 'The Matrix' },
  ];

  return (
    <div style={{ padding: '0 20px' }}>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
