import React from 'react';
import axios from 'axios'


import { Header } from './components'
import { Home , Cart} from './pages';
import { Route } from 'react-router-dom'


function App() {
  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => setPizzas(data.pizzas))
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







class App {
  constructor(props) {
    super(props)
    this.state = {
      items: 123,
      name: 4
    }
  }
  
}
