import * as Yup from 'yup'

export const validationNewLinkForm = Yup.object().shape({
  url: Yup.string().url().required()
})
