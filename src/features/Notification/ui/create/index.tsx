import { Box, Stack } from '@mui/material'
import { Formik } from 'formik'
import { tokensDark } from '../../../../app/providers/ThemeProvider'
import MyCheckbox from '../../../../shared/ui/MyCheckbox'
import MyInput from '../../../../shared/ui/MyInput'
import { MyStyledButton } from '../../../../shared/ui/style/style'
import Header from '../../../../widgets/Header'
import CreateService from './createService'

const CreateNotification = () => {
	const {
		initialValues,
		validationSchema,
		onSubmit,
		isCreatingNotificationStatus,
	} = CreateService()

	console.log(validationSchema, 'validationSchema')
	console.log(initialValues, 'initialValues')
	console.log(onSubmit, 'onSubmit')

	return (
		<Box>
			<Header title='Добавить уведомление' />
			<Box>
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
							<Stack>
								<MyInput
									name='message'
									type='text'
									value={values.message}
									onChange={handleChange}
									onBlur={handleBlur}
									labelName='Сообщение'
									errorMessage={errors.message}
									error={touched.message && Boolean(errors.message)}
								/>

								<MyInput
									name='user'
									type='number'
									value={values.user}
									onChange={handleChange}
									onBlur={handleBlur}
									labelName='Пользователь'
									errorMessage={errors.user?.id}
									error={touched.user?.id && Boolean(errors.user?.id)}
								/>
								<MyCheckbox
									name='is_read'
									value={values.is_read}
									onChange={handleChange}
									onBlur={handleBlur}
									labelName='Сообщение прочитано?'
									errorMessage={errors.is_read}
									error={touched.is_read && Boolean(errors.is_read)}
								/>
								<MyStyledButton
									sx={{ background: tokensDark.greenAccent[600] }}
									variant='contained'
									type='submit'
									disabled={isCreatingNotificationStatus}
								>
									Добавить
								</MyStyledButton>
							</Stack>
						</form>
					)}
				</Formik>
			</Box>
		</Box>
	)
}

export default CreateNotification
