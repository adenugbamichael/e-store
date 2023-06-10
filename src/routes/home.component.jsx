/* eslint-disable react/jsx-key */

import Directory from "../components/directory/directory.component"

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://raw.githubusercontent.com/adenugbamichael/e-store/master/src/assets/img/hats/n.jpg",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl:
        "https://raw.githubusercontent.com/adenugbamichael/e-store/master/src/assets/img/jackets/a.jpg",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl:
        "https://raw.githubusercontent.com/adenugbamichael/e-store/master/src/assets/img/sneakers/s.jpg",
    },
    {
      id: 4,
      title: "womens",
      imageUrl:
        "https://raw.githubusercontent.com/adenugbamichael/e-store/master/src/assets/img/womens/wo.jpg",
    },
    {
      id: 5,
      title: "mens",
      imageUrl:
        "https://raw.githubusercontent.com/adenugbamichael/e-store/master/src/assets/img/mens/m.jpg",
    },
  ]

  return (
    <div>
      <Directory categories={categories} />
    </div>
  )
}

export default Home
