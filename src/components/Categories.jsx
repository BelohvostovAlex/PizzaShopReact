import React from 'react'

// class Categories extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       activeItem: 3,
//     }
//   }

//   onSelectItem (index) {
//     this.setState({activeItem: index})
//   }
  

//   render() {
//     const {items, onClick} = this.props
//     return (
//       <div className="categories">
//       <ul>
//         <li>Все</li>
//         {items.map((item, index) => 
//         <li className={this.state.activeItem === index ? 'active' : ''} onClick={() => this.onSelectItem(index)} key={`${item}_${index}`}>{item}</li>)}
//       </ul>
//     </div>
//   )
//   }
// }

function Categories({items, onClick}) {
  const [activeItem, setActiveItem] = React.useState(null)
  
  const onSelectItem = (i) => {
    setActiveItem(i)
  }
  console.log(items)

    return (
        <div className="categories">
        <ul>
          <li 
          className={activeItem === null ? 'active' : ''}
          onClick={() => onSelectItem(null)}>
            Все
            </li>
          {items && 
            items.map((item, index) => <li 
            className={activeItem === index ? 'active' : ''}
            onClick={() => onSelectItem(index)} 
            key={`${item}_${index}`}>{item}</li>)}
        </ul>
      </div>
    )
}

export default Categories

