import logo from './logo.svg';
import './App.css';
import routes from './routes';
import { BrowserRouter, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        {routes}
      </BrowserRouter>

    </div>
  );
}

export default App;
