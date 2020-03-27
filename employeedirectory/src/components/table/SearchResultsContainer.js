import React from "react";

export function SearchResultsContainer({ children }) {
  return (
    <table>
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Work Phone</th>
                <th>Cell Phone</th>
                <th>Age</th>
                <th>Date of Birth</th>
            </tr>
            {children}
    </table>
  );
}




export default SearchResultsContainer;
