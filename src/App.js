import './App.css';
import Navi from './layouts/Navi';
import Homepage from './pages/Homepage';
import Register from './pages/Register/Register';
import UserResumeList from './components/UserResumeList/UserResumeList';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import { ToastContainer } from 'react-toastify';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <Navi />
      <Container className="main">
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/homepage" component={Homepage}></Route>
        <Route exact path="/userresumes" component={UserResumeList}></Route>
        <Route exact path="/register" component={Register}></Route>
      </Container>
    </div>
  );
}

export default App;
