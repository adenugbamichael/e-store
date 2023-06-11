/* eslint-disable react/jsx-key */

import { hats, jackets, mens, sneakers, womens } from "../../assets"
import Directory from "../../components/directory/directory.component"

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: hats,
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: jackets,
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: sneakers,
    },
    {
      id: 4,
      title: "womens",
      imageUrl: womens,
    },
    {
      id: 5,
      title: "mens",
      imageUrl: mens,
    },
  ]

  return (
    <div>
      <Directory categories={categories} />
    </div>
  )
}

export default Home
