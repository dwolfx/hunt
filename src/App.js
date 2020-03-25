import React from 'react';
import Routes from './routes'
// Styles default
import './styles.css'

// Componentes
import Header from './components/Header'



const App = () => (
  <div className="App">
    <Header/>
    <Routes/>
  </div>
)

export default App;
