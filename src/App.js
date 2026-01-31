import './App.css';
import EmployeeGrid from './components/EmployeeGrid';
import employees from "./data/employees.json"

function App() {
  return (
    <div className="App" >
     <h2>Employee Dashboard</h2>
     <EmployeeGrid rowData={employees.employees}/>
    </div>
  );
}

export default App;
