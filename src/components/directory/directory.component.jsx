/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import CategoryItem from "../category-item/category-item.component"
import "./directory.styles.scss"

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem kry={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory