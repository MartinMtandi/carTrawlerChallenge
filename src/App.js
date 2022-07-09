import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Wrapper from './common/Wrapper';
import Home from './pages/home/Home';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route 
              path="/" 
              element={
                <Wrapper>
                  <Home />
                </Wrapper>
            }/>
            <Route
              path="*"
              element={
                <main>
                  <p>There's nothing here!</p>
                </main>
              }
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
