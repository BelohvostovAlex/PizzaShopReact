import React from 'react'


const Categories = React.memo(function Categories({items, onClick}) {
  const [activeItem, setActiveItem] = React.useState(null)
  
  const onSelectItem = (i) => {
    setActiveItem(i)
    onClick(i)
  }
  
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
})

export default Categories


