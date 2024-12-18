import { Box, Button, Stack, styled } from '@mui/material'
import { Formik } from 'formik'
import { tokensDark } from '../../../../app/providers/ThemeProvider'
import MyInput from '../../../../shared/ui/MyInput'
import Header from '../../../../widgets/Header'
import { Contacts } from '../../type'
import EditContactServise from './EditContactServise'

const ContactEdit = ({ contact }: { contact: Contacts }) => {
	const { initialValues, validationSchema, isEditLoading, onSubmit } =
		EditContactServise(contact)
	return (
		<Box>
			<Header title='Редактирование контакта' />
			<Box>
				<Formik
					onSubmit={onSubmit}
					validationSchema={validationSchema}
					initialValues={initialValues}
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
							<Stack direction='column' spacing={2}>
								<MyInput
									name='name'
									value={values.name}
									onChange={handleChange}
									onBlur={handleBlur}
									labelName='ФИО'
									errorMessage={errors.name}
									error={touched.name && Boolean(errors.name)}
								/>
								<MyInput
									name='contact'
									value={values.contact}
									onChange={handleChange}
									onBlur={handleBlur}
									labelName='Номер телефона'
									errorMessage={errors.contact}
									error={touched.contact && Boolean(errors.contact)}
								/>
								<MyInput
									name='position'
									value={values.position}
									onChange={handleChange}
									onBlur={handleBlur}
									labelName='Позиция'
									errorMessage={errors.position}
									error={touched.position && Boolean(errors.position)}
								/>

								<MyStyledButton
									sx={{ background: tokensDark.greenAccent[600] }}
									variant='contained'
									type='submit'
									disabled={isEditLoading}
								>
									Изменить
								</MyStyledButton>
							</Stack>
						</form>
					)}
				</Formik>
			</Box>
		</Box>
	)
}

export default ContactEdit

const MyStyledButton = styled(Button)({
	'&:hover': {
		backgroundColor: '#ff8c08',
	},
})
