// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Row, Divider, Button } from 'antd';
import "./App.css"
import { useState } from 'react';
import foods from "./foods.json"
import FoodBox from "./components/FoodBox"
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {

  const[dynamicFoods,setDynamicFoods] = useState(foods)
  const[allFoods, setAllFoods] = useState(foods)

  const searchFunction = (keyword) => {
    let filteredAllFoods = [...allFoods];
    filteredAllFoods = filteredAllFoods.filter((food) =>
      food.name.toLowerCase().includes(keyword.toLowerCase())
    );

    setDynamicFoods(filteredAllFoods);
  };


  return (
    <div className="App">

    <AddFoodForm></AddFoodForm>
 
      

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}
      <Search searchFunction={searchFunction}></Search>
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {dynamicFoods.map(food=> <FoodBox food={food}></FoodBox>)}
      </Row>
    </div>
  );
}

export default App;