import { Box, Stack } from '@mui/material'
import { Formik } from 'formik'
import { tokensDark } from '../../../../app/providers/ThemeProvider'
import MyCheckbox from '../../../../shared/ui/MyCheckbox'
import { MyStyledButton } from '../../../../shared/ui/style/style'
import Header from '../../../../widgets/Header'
import CreateService from './createService'
const CreateMainStory = () => {
	const {
		initialValues,
		validationSchema,
		onSubmit,
		isCreatingMainStoryStatus,
	} = CreateService()

	return (
		<Box>
			<Header title='Добавить главный сторис' />
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
						setFieldValue,
					}) => (
						<form onSubmit={handleSubmit}>
							<Stack>
								<input
									type='file'
									name='imageFile'
									onChange={event => {
										const file = event.currentTarget.files?.[0]
										if (file) {
											setFieldValue('imageFile', file)
										}
									}}
									onBlur={handleBlur}
									accept='image/*,.png,.jpg,.gif,.web'
								/>

								<MyCheckbox
									name='is_active'
									value={values.is_active}
									onChange={handleChange}
									onBlur={handleBlur}
									labelName='Строриз активен?'
									errorMessage={errors.is_active}
									error={touched.is_active && Boolean(errors.is_active)}
								/>
								<MyStyledButton
									sx={{ background: tokensDark.greenAccent[600] }}
									variant='contained'
									type='submit'
									disabled={isCreatingMainStoryStatus}
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

export default CreateMainStory
