/* eslint-disable react/prop-types */

import { FormInputLabel, Group, Input } from "./form-input.styles"

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length} htmlFor='displayName'>
          {label}
        </FormInputLabel>
      )}
    </Group>
  )
}

export default FormInput

// className={`${
//             otherProps.value.length ? "shrink" : ""
//           } form-input-label`}
