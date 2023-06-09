import "./categories.styles.scss"
import n from "./assets/img/hats/n.jpg"
import a from "./assets/img/jackets/a.jpg"
import s from "./assets/img/sneakers/s.jpg"
import wo from "./assets/img/womens/wo.jpg"
import m from "./assets/img/mens/m.jpg"

const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: n,
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: a,
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: s,
    },
    {
      id: 4,
      title: "womens",
      imageUrl: wo,
    },
    {
      id: 5,
      title: "mens",
      imageUrl: m,
    },
  ]

  return (
    <div className='categories-container'>
      {categories.map(({ title, id, imageUrl }) => (
        <div key={id} className='category-container'>
          <div
            className='background-image'
            style={{
              background: `url(${imageUrl})`,
            }}
          />
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop now</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
