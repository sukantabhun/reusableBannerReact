import './index.css'

const Cards = props => {
  const {list} = props
  return list.map(eachItem => (
    <li key={eachItem.id} className={eachItem.className} type="none">
      {eachItem.id === 3 ? (
        <div className="content">
          <h1>{eachItem.headerText}</h1>
          <p>{eachItem.description}</p>
          <div className="button-center">
            <button type="button">Show More</button>
          </div>
        </div>
      ) : (
        <div className="content">
          <h1>{eachItem.headerText}</h1>
          <p>{eachItem.description}</p>
          <button type="button">Show More</button>
        </div>
      )}
    </li>
  ))
}

export default Cards
