import './App.css'
import Dashboard from "./layouts/Dashboard.tsx";
import 'semantic-ui-css/semantic.min.css';
import {Container} from "semantic-ui-react";
import Navi from "./layouts/Navi.tsx";

function App() {

  return (
    <>
      <div>
          <Navi />
          <Container className="main">
              <Dashboard />
          </Container>
      </div>
    </>
  )
}

export default App
