// import './App.css';
// import TicTacToe from './TicTacToe';
// function App() {
//   return (
//     <>
//     <TicTacToe/>
//     </>
//   );
// }
// export default App;

import React from 'react'
import ParticlesBg from 'particles-bg'
import './App.css';
import TicTacToe from './TicTacToe';
const App=()=> {
    return (
      <>
        <div>
          <TicTacToe/>
        </div>
        <ParticlesBg color="#1087e7" type="cobweb" bg={true} />
      </>
    )
  }
  export default App;