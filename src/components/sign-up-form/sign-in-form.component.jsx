import { useState } from "react"
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  console.log(formFields)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("passwords do not match")
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)

      await createUserDocumentFromAuth(user, { displayName }), resetFormFields()
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use")
      } else {
        console.error("user creation encountered an error", error)
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          onChange={handleChange}
          type='text'
          name='displayName'
          value={displayName}
          required
        />

        <FormInput
          label='Email'
          onChange={handleChange}
          type='email'
          name='email'
          value={email}
          required
        />

        <FormInput
          label='Password'
          onChange={handleChange}
          type='password'
          name='password'
          value={password}
          required
        />
        <FormInput
          label='Confirm Password'
          onChange={handleChange}
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          required
        />
        <button type='submit'>Sign up</button>
      </form>
    </div>
  )
}

export default SignUpForm