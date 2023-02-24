// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input , Button, Space} from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [calories, setCalories] = useState(0)
  const [servings, setServings] = useState(1)


  const handleName = e=> setName(e.target.value)
  const handleImage = e=> setImage(e.target.value)
  const handleCalories = e=> setCalories(e.target.value)
  const handleServings = e=> setServings(e.target.value)

  function handleSubmit(e){
    e.preventDefault()

    console.log("submited")
  }

  return (

    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <label>Name</label>
      <Input value={name} type="text" onChange={handleName} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImage} />

      <label>Calories</label>
      <Input value={calories} type="text" onChange={handleCalories} />

      <label>Servings</label>
      <Input value={servings} type="text" onChange={handleServings} />

      <Button type="primary">Create</Button>
      </Space>
    </form>
  );
}

export default AddFoodForm;