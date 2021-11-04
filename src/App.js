import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';


import { Header } from './components';
import { Home , Cart} from './pages';
import { Route } from 'react-router-dom';
import {setPizzas} from './redux/actions/pizzas';


function App () {

  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => dispatch(setPizzas(data.pizzas))
    )
  }, [])



  return (
    <div className="wrapper">
    <Header />
    <div className="content">
      <Route exact path="/" component={Home} ></Route>
      <Route exact path="/cart" component={Cart}></Route>
    </div>
  </div>
  )
}

<<<<<<< HEAD
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
=======
export default App

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//   }

  // componentDidMount() {
  //   axios.get('http://localhost:3000/db.json').then(({data}) => this.props.setPizzas(data.pizzas))
  // }

  // render() {
  //   console.log(this.props)
  //   return (
  //     <div className="wrapper">
  //     <Header />
  //     <div className="content">
  //       <Route exact path="/" render={() => <Home Items={this.props.items}/>} ></Route>
  //       <Route exact path="/cart" component={Cart}></Route>
  //     </div>
  //   </div>
  //   )
  // }
// }

// const mapStateToProps = state => {
//   return {
//     items: state.pizzasReducer.items,
//     filters: state.filtersReducer
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
>>>>>>> 9c94e0589b059e5068472d734da8ad892eda7701
