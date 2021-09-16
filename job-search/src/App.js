import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from "./Components/Home/Home"
import Details from "./Components/Details/Details"
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import { useState } from 'react'
// import Search from './Components/Search/Search'
import { Container } from "react-bootstrap"
function App() {




  return (
    <BrowserRouter>
      <NavBar />
      <Container>


        <Route exact path="/" render={(routerProps) => <Home   {...routerProps} />} />

        {/* <Search /> */}
        {/* <Details /> */}
        <Route exact path="/details/:id" render={(routerProps) => <Details {...routerProps} />} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
