import React, {Component} from "react";
import {SearchResultsContainer,ResultList} from "../../components/table"
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

class Employees extends Component {
    state = {
        Results: []
    }

    componentDidMount(){
        API.getRandomEmployees().then(res => 
            {console.log(res.data)
            this.setState({Results : res.data.results})}
        )
        .catch(err => console.log(err))
    }
    
    render(){
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6"> 
                        {this.state.Results.length ? (
                            <SearchResultsContainer>
                                {this.state.Results.map(result => {
                                    return (
                                        <ResultList key = {result.email}>
                                            <th>{result.name.first}</th>
                                            <th>{result.name.last}</th>
                                            <th>{result.email}</th>
                                            <th>{result.phone}</th>
                                            <th>{result.cell}</th>
                                            <th>{result.dob.age}</th>
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
}

export default Employees;