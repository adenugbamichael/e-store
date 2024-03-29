import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
// import { PersistGate } from "redux-persist/integration/react"
import App from "./App"
import "./index.scss"
import { Elements } from "@stripe/react-stripe-js"

import { store } from "./store/store"
import { stripePromise } from "./utils/stripe/stripe.utils"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

// <PersistGate loading={null} persistor={persistor}>
//     </PersistGate>
