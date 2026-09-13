export default function Movies() {
    return (
      <div style={{ padding: '0 20px' }}>
        <h1>Search Movies</h1>
        <form>
          <input type="text" placeholder="Search movies..." />
          <button type="submit">Search</button>
        </form>
        <p>Film List</p>
      </div>
    );
  }
  