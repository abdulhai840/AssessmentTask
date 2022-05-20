import React from "react";
import { Input } from "antd";

const Search = Input.Search;

export const CountrySearch = ({ onSearch, ...props }) => (
  <div {...props}>
    <Search
      placeholder="Search Country"
      onSearch={onSearch}
      style={{ width: 200 }}
    />
  </div>
);