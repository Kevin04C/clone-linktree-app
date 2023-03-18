import * as Yup from 'yup'

export const validationSchemaLogin = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().min(6).required()
})

export const validationUsernameAndEmail = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string().email().required()
})

export const validationPassword = Yup.object().shape({
  password: Yup.string().min(6).required()
})
