import { Button, Stack, TextField, Typography } from "@mui/material"
import { Formik } from "formik"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import { useAppDispatch, useAppSelector } from "../../../../../app/store"
import { StatusResponse } from "../../../../../shared/enums"
import LoaderDots from "../../../../../shared/ui/LoaderDots"
import { login } from "../../../store/actions"
import { selectLogin } from "../../../store/selectors"
import { LoginReq } from "../../../type"

const Form = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const isLoading =
    useAppSelector(selectLogin).status === StatusResponse.LOADING

  const validationSchema = yup.object().shape({
    phone: yup.string().required("Обязательное поле"),
    password: yup
      .string()
      .required("Обязательное поле")
      .min(5, "Минимальное количество символов 5"),
  })

  const initialValues: LoginReq = {
    phone: "",
    password: "",
  }

  const onSubmit = (values: LoginReq) => {
    dispatch(login({ userData: values, navigate }))
  }

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Typography
            sx={{
              marginBottom: "10px",
              fontSize: 21,
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Войти
          </Typography>
          <Stack spacing={2}>
            <TextField
              type="phone"
              variant="outlined"
              placeholder="Почта"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.phone}
              name="phone"
              error={Boolean(touched.phone) && Boolean(errors.phone)}
              helperText={touched.phone && errors.phone}
              sx={{
                gridColumn: "span 4",
                borderRadius: "10px",
                "& input": {
                  // Style for the input element
                },
              }}
              size="small"
              inputProps={{
                sx: {
                  py: "10px",
                },
              }}
            />
            <TextField
              variant="outlined"
              placeholder="Пароль"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{
                gridColumn: "span 4",
              }}
              size="small"
              inputProps={{
                sx: {
                  "&:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 1000px #EE7D00 inset",
                  },
                  py: "10px",
                },
              }}
            />
          </Stack>
          <Button
            fullWidth
            type="submit"
            disabled={isLoading}
            sx={{
              m: "1rem 0",
              border: "1px solid #EE7D00",
              backgroundColor: "#EE7D00",
              color: "#FCFCFC",
              py: "10px",

              "&:hover": {
                background: "#ff8800 ",
              },
            }}
          >
            {isLoading ? <LoaderDots /> : "Отправить"}
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default Form
