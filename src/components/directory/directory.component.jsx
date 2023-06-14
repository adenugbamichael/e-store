/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import DirectoryItem from "../directory-item/directory-item.component"
import { hats, jackets, mens, sneakers, womens } from "../../assets"
import "./directory.styles.scss"

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: hats,
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: jackets,
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: sneakers,
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: womens,
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: mens,
    route: "shop/mens",
  },
]

const Directory = () => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory
