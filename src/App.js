import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Components/HomePage'
import LoginPage from './Components/LoginPage'
import NavBar from './Components/NavBar';
import { myContext } from './Context'
import { useContext } from 'react'
// Fazer a resposta da API para logar com google
// Fazer o Context

function App() {
  const userObject = useContext(myContext);
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      {userObject}
      <Switch>        
        <Route path='/' exact component={Homepage} />
        <Route path='/login' exact component={LoginPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
