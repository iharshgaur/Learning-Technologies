import { BrowserRouter } from 'react-router-dom';
import { Router } from "./routes/routes"
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
          <Router/>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
