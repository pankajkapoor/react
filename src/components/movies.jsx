import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  deleteItem = id => {
    const movies = this.state.movies.filter(item => item._id !== id);
    this.setState({ movies });
  };

  handelLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  render() {
    const { length } = this.state.movies;
    if (!length) return <p>There are no movies in the database.</p>;

    return (
      <React.Fragment>
        <p>Showing {length} from database.</p>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Like</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td align="center">
                  <Like
                    liked={movie.liked}
                    onToggle={() => this.handelLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => {
                      this.deleteItem(movie._id);
                    }}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
