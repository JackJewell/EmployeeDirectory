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

    filterFunction(searchType,inputType){
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById(inputType);
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[searchType];
            console.log(td);
            if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
            }
  }
    }
    
    render(){
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6"> 
                        <input className = "form-control" type="text" id="myInput1" onKeyUp={e=>{this.filterFunction(1,"myInput1")}} placeholder="Search for first names.."/>
                        <input className = "form-control" type="text" id="myInput2" onKeyUp={e=>{this.filterFunction(2,"myInput2")}} placeholder="Search for last names.."/>
                        {this.state.Results.length ? (
                            <SearchResultsContainer>
                                {this.state.Results.map(result => {
                                    return (
                                        <ResultList key = {result.email}>
                                            <td><img src= {result.picture.thumbnail} alt = "Employee"></img></td>
                                            <td>{result.name.first}</td>
                                            <td>{result.name.last}</td>
                                            <td>{result.location.city}</td>
                                            <td>{result.email}</td>
                                            <td>{result.phone}</td>
                                            <td>{result.cell}</td>
                                            <td>{result.dob.age}</td>
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