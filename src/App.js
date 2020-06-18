import React from 'react';
import './App.css';
import SearchMovies from  './components/searchmovie';


class App extends React.Component{
render(){
  return(
    <div className='container'>
      <h1 className='title'>Movie list</h1>
      <SearchMovies/>
    </div>
  )
}

}
export default App;
