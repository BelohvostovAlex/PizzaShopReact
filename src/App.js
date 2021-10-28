import React from 'react';
import { Header } from './components'
import { Home , Cart} from './pages';
import { Route } from 'react-router-dom'


function App() {
  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error('Whoops')
      }
    })
    .then(result => {
      setPizzas(result.pizzas)
      return result
    })
    .catch(err => console.error(err.message))
  },[])

  return (
    <div className="wrapper">
    <Header />
    <div className="content">
      <Route exact path="/" render={() => <Home Items={pizzas}/>} ></Route>
      <Route exact path="/cart" component={Cart}></Route>
    </div>
  </div>
  );
}

export default App;
