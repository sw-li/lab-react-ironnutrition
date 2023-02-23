// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {
const [keyword, setKeyword]= useState("")

const handleSearch = event=>{
  setKeyword(event.target.value)
  props.searchFunction(event.target.value)
  console.log("search this:", event.target.value)
}

  return (
    <div>
      <Divider>Search</Divider>
      <Input className="searchBar" value={keyword} type="text" onChange={handleSearch} />
    </div>
  );
}

export default Search;
