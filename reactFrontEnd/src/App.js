import { useEffect } from 'react';
import './App.css';


function App() {
  const [students, setStudents] = useState([]);

  useEffect(()=>{
    async function getAllStudent(){
      try{
        const students = await axios.get("http://localhost:5000/api/student")//we only want to get the data so we'r using .get
        console.log(students);
      }catch(err){
        console.log(err);
      }
    }
  })
  return (
    <div className="App">
      <h1>Connect React to Express</h1>
    </div>
  );
}

export default App;
