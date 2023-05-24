import './App.css';
import {BrowserRouter, Route} from './react-router';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/" element={<>123 </>}>
        <Route path="user" element={<div>456</div>}></Route>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
