import logo from './logo.svg';
import './App.css';
import Card from './component/Card'
import AppBar from './component/AppBar'
function App() {
  return (
    <div className="App">
    <AppBar/>
    <Card
    title={"görev"}
    paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque, voluptas ipsam excepturi, velit, eaque quae accusamus praesentium dicta impedit architecto dolores error numquam? Ratione aperiam at totam repellendus consequuntur"}
    />
  
    <Card
    title={"ipucu"}
    paragraph={"asddddddddddddddddddd dddddddddddddddd ddddddddd ddddddddddddd"}
    />
    </div>
  );
}

export default App;
