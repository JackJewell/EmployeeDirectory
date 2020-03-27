import React, { useEffect, useState } from "react";
import {SearchResultsContainer,ResultList} from "../../components/table"
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

function Employees(){
    const [Results, setResults] = useState([])
    useEffect(()=>{
        API.getRandomEmployees().then(res => 
            setResults(res.data)
          )
          .catch(err => console.log(err))
    })

    return (
        <Container fluid>
            <Row>
                <Col size="md-6"> 
                    {Results.length ? (
                        <SearchResultsContainer>
                            {Results.map(result => {
                                return (
                                <ResultList>
                                    <th>{result.name.first}</th>
                                    <th>{result.name.last}</th>
                                    <th>{result.email}</th>
                                    <th>{result.work}</th>
                                    <th>{result.phone}</th>
                                    <th>{result.age}</th>
                                    <th>{result.dob}</th>
                                </ResultList>
                                );
                            })}
                        </SearchResultsContainer>
                    ) : (
                        <h3>No Results to Display</h3>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default Employees;