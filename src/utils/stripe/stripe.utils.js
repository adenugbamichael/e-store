import process from "process"
import { loadStripe } from "@stripe/stripe-js"

const apiKey = `${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`

export const stripePromise = await loadStripe(apiKey)
