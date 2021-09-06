import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    movies:[],
  }
  getMovies = async () => {
    const {
      data: {
        data: {movies},
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    // console.log(movies);
    this.setState({ movies,isLoading: false });
  }

  componentDidMount() {
    //영화 데이터 로딩!
    //https://yts.mx/api/v2/movie_details.json?movie_id=1
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return (
      <div>
        { isLoading ? 'Loading...' : 'We are ready' }
      </div>
    )
  }
}

export default App;
