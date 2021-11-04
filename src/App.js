import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


import { Header } from './components';
import { Home , Cart} from './pages';
import { Route } from 'react-router-dom';
import {setPizzas} from './redux/actions/pizzas';


<<<<<<< HEAD
// function App () {

//   const dispatch = useDispatch();
=======
function App () {
  const dispatch = useDispatch();
>>>>>>> bcc6b2794047f739edb35c575fd599bff79c2d0b

//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({data}) => dispatch(setPizzas(data.pizzas))
//     )
//   }, [])


<<<<<<< HEAD

//   return (
//     <div className="wrapper">
//     <Header />
//     <div className="content">
//       <Route exact path="/" component={Home} ></Route>
//       <Route exact path="/cart" component={Cart}></Route>
//     </div>
//   </div>
//   )
// }
=======
  return (
    <div className="wrapper">
    <Header />
    <div className="content">
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/cart" component={Cart}></Route>
    </div>
  </div>
  )
}
>>>>>>> bcc6b2794047f739edb35c575fd599bff79c2d0b

// export default App

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


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({data}) => this.props.setPizzas(data.pizzas))
  }

  render() {
    console.log(this.props)
   return (
      <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home Items={this.props.items}/>} ></Route>
        <Route exact path="/cart" component={Cart}></Route>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (store) => {
  console.log(store)
  return {
    items: store.pizzasReducer.items,
    filters: store.filterReducer
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)),
//     dispatch
//   }
// }

const mapDispatchToProps = {
  setPizzas
}


export default connect(mapStateToProps, mapDispatchToProps)(App)