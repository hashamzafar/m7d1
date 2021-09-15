import { Form, FormControl } from 'react-bootstrap'
import React from 'react'
import { useState, useEffect } from 'react'
const Search = () => {
    const [
        searchValue, setSearchValue
    ] = useState("")

    useEffect(() => {
        fetchData()
    }, [searchValue])
    const fetchData = async () => {
        try {
            let data = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?company=olla`)
            if (data.ok) {
                let response = await data.json()
                let jsonData = response.data
                console.log(jsonData)
            }

        } catch (error) {
            console.error(error)
        }

    }



    return (
        <div>
            <Form inline className="justify-content-center mt-5">
                <FormControl type="text" placeholder="Search" className=" mr-sm-2 bg-warning" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                {/* <Button type="submit" className="btn btn-danger" >Search</Button> */}
            </Form>
        </div>
    )
}

export default Search