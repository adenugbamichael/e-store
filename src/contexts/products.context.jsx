/* eslint-disable react/prop-types */
import { createContext, useState } from "reac
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.jsx"

export const ProductsContext = createContext({
  products: [],
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  const value = { products }
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
