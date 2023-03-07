import React from 'react';
import Home from './pages/Home';

function App (props) {
  console.log(props.username)
  return (
    <div className='home'>
      <Home />
    </div>
  )
}

export default App;