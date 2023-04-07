import * as Yup from 'yup'

export const validationUseLink = Yup.object().shape({
  id: Yup.number().required().min(1),
  title: Yup.string().required(),
  url: Yup.string().url('Please enter a valid URL').required(),
  active: Yup.boolean().required()
})
