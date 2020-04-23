import React from "react";

export function SearchResultsContainer({ children }) {
  return (
    <div className = "table-responsive-lg">
      <table id="myTable" className="table table-hover table-bordered">
        <thead className = "thead-dark">
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Location</th>
            <th scope="col">Email</th>
            <th scope="col">Work Phone</th>
            <th scope="col">Cell Phone</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
}




export default SearchResultsContainer;
