import React from 'react'
import Container from './components/Container';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <h1 className="badge bg-primary text-wrap fs-4 w-100" >Gallery App</h1>      
      <Container/>
      <Footer/>
    </div>
  )
}

export default App;

