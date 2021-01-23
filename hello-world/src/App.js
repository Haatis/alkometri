import './App.css';
import {useState} from 'react';


function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  

  function handleSubmit(e) {
    e.preventDefault();
  let litres = bottles * 0.33
  let grams = litres * 8 * 4.5
  let burning = weight / 10
  let lgrams = grams - (burning * time)
  let result = 0
    if (gender === 'male') {
      result = lgrams/(weight * 0.7)
    } else {
      result = lgrams/(weight * 0.6)
    }
    setResult(result)
  }  


  return (
    <>
    <h3>Calculating alcohol blood level</h3>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Weight</label>
        <input className="form-control" name="weight" type="number" value={weight} onChange={e => setWeight(e.target.value)} ></input>
      </div>
      <div className="form-group">
        <label>Bottles</label>
        <input className="form-control form-control-sm" name="bottles" type="number" value={bottles} onChange={e => setBottles(e.target.value)} ></input>
      </div>
      <div className="form-group">
        <label>Time</label>
        <input className="form-control form-control-sm" name="time" type="number" value={time} onChange={e => setTime(e.target.value)} ></input>
      </div>
      <div className="form-group">
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
        <input type="radio" name="gender" value="Female"  onChange={e => setGender(e.target.value)}/><label>Female</label>
      </div>
      <div>
        <output>{result.toFixed(1)}</output>
      </div>
      <button>Calculate</button>
    </form>
    </>
  );
}

export default App;
