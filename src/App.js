// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Row, Divider, Button } from 'antd';
import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [dynamicFoods, setDynamicFoods] = useState(foods);
  const [allFoods, setAllFoods] = useState(foods);
  const [hideForm, setHideForm] = useState(true);
  const searchFunction = (keyword) => {
    let filteredAllFoods = [...allFoods];
    filteredAllFoods = filteredAllFoods.filter((food) =>
      food.name.toLowerCase().includes(keyword.toLowerCase())
    );

    setDynamicFoods(filteredAllFoods);
  };

  const deleteFood = (foodName) => {
    console.log(foodName, 'again');
    let filteredAllFoods = [...allFoods];
    filteredAllFoods = filteredAllFoods.filter((food) => {
      return food.name !== foodName;
    });
    setAllFoods(filteredAllFoods);
    setDynamicFoods(filteredAllFoods);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const newHideForm = !hideForm;
    setHideForm(newHideForm);
  };


  const addNewFood = newFood=>{
    const newDynamicFoodList = [...dynamicFoods, newFood]
    const newAllFoodList = [...allFoods, newFood]

    setDynamicFoods(newDynamicFoodList)
    setAllFoods(newAllFoodList)
  }

  return (
    <div className="App">
      <div className="newFoodSection">
        {hideForm ? <br /> : <AddFoodForm addNewFood={addNewFood}></AddFoodForm>}

        <Button onClick={handleClick}>
          {' '}
          {hideForm ? 'Add New Food' : 'Hide Form'}{' '}
        </Button>
      </div>
      {/* Display Search component here */}
      <Search searchFunction={searchFunction}></Search>
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {dynamicFoods.map((food) => (
          <FoodBox food={food} deleteFoodByName={deleteFood}></FoodBox>
        ))}
      </Row>
    </div>
  );
}

export default App;
