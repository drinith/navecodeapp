import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Components/HomePage'
import LoginPage from './Components/LoginPage'
import NavBar from './Components/NavBar';

// Fazer a resposta da API para logar com google
// Fazer o Context

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>        
        <Route path='/' exact component={Homepage} />
        <Route path='/login' exact component={LoginPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
