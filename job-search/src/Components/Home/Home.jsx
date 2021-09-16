import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, FormControl } from "react-bootstrap"
import JobsList from "../JobList/JobList"


class Home extends Component {
    state = {
        jobs: [],
        companies: [],
        jobSearch: "",
        companySearch: "",
        categories: [],
        categorySearch: "",
        categoryJobs: []
    }

    componentDidMount = () => {
        this.fetchCategories()
    }

    searchJobs = async (e) => {

        e.preventDefault()

        try {
            const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${this.state.jobSearch}`)
            const { data } = await response.json()
            console.log(data)

            console.log("data jobs", data);
            if (response.ok) {
                this.setState({

                    jobs: data,

                })
            }
        } catch (error) {
            console.log(error);
        }
    }


    searchCompanies = async (e) => {
        e.preventDefault()
        console.log({ value: e.target.value })
        try {
            const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?company=${this.state.companySearch}`)
            const { data } = await response.json()
            console.log("search companies", data)


            if (response.ok) {
                this.setState({

                    companies: data,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    fetchCategories = async (e) => {
        try {
            const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs/categories`)
            const data = await response.json()
            console.log("fetch categories", data);
            if (response.ok) {
                this.setState({

                    categories: data,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    searchCategories = async (e) => {
        // console.log(e);
        try {
            const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?category=${e.target.value}`)
            const { data } = await response.json()

            console.log("search categories", data);
            if (response.ok) {
                this.setState({

                    categoryJobs: data,
                })
            }

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <Container fluid className="" >
                <Row className="justify-content-center my-5 home-body pb-5">
                    <Col md={4} className=" ">
                        <h4 className="py-3">Search By Job Title</h4>
                        <Form inline onSubmit={(e) => this.searchJobs(e)}>
                            <FormControl
                                value={this.state.jobSearch}
                                onChange={(e) =>
                                    this.setState({

                                        jobSearch: e.target.value
                                    })}
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2" />
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Col>

                    <Col md={4} className="ml-auto">
                        <h4 className="py-3">Filter by Category</h4>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Control

                                onChange={(e) => {
                                    console.log(e.target.value)
                                    this.searchCategories(e)
                                }}
                                as="select"
                                defaultValue="Select...">
                                <option>Select...</option>
                                {this.state.categories && this.state.categories.map(category =>
                                    <option key={category} value={category}>{category}</option>
                                )}

                            </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col md={4} className="ml-auto">
                        <h4 className="py-3">Search By Company Name</h4>
                        <Form inline onSubmit={(e) => this.searchCompanies(e)}>
                            <FormControl
                                value={this.state.companySearch}
                                onChange={(e) =>
                                    this.setState({

                                        companySearch: e.target.value
                                    })}
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2" />
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
                <Row className=" job-list">
                    <Col>
                        <JobsList jobs={this.state.jobs.length ? this.state.jobs : this.state.companies.length ? this.state.companies : this.state.categoryJobs} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;