import React from "react";

export function SearchResultsContainer({ children }) {
  return (
    <table>
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Work Phone</th>
          <th>Cell Phone</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
}




export default SearchResultsContainer;
