import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from "./Components/Home/Home"
import Details from "./Components/Details/Details"
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import { useState } from 'react'
import Search from './Components/Search/Search'
import { Container } from "react-bootstrap"
function App() {

  const [searchJobs, setSearchJobs] = useState([])
  const [searchCompanies, setSearchCompanies] = useState([])
  const [searchCategory, setSearchCategory] = useState([])

  const jobsData = (value) => {
    setSearchJobs(value)
  }

  const companiesData = (value) => {
    setSearchCompanies(value)
  }

  const categoryData = (value) => {
    setSearchCategory(value)
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Container>


        <Route exact path="/" render={(routerProps) => <Home category={categoryData} companies={companiesData} jobs={jobsData} {...routerProps} />} />

        <Search />
        <Details />
        <Route exact path="/details/:id" render={(routerProps) => <Details category={searchCategory} companies={searchCompanies} jobs={searchJobs} {...routerProps} />} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
