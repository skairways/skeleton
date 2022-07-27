import * as Yup from "yup"

export const validationSchema = {
  name: Yup.string().required("Name is required"),
}
