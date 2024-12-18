import { Typography } from "@mui/material"
import { Field, FieldArray } from "formik"
import { Box } from "@mui/material"
import { MyInput } from "@/shared/ui"

export const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

export const WorkTimeForm: React.FC = () => {
  return (
    <FieldArray name="work_time">
      {(arrayHelpers) => (
        <Box>
          <Typography>Рабочее время:</Typography>
          {daysOfWeek.map((day, index) => (
            <Box key={index}>
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                }}
              >
                <Typography>{day}</Typography>
                <Field
                  as={MyInput}
                  name={`work_time[${index}].start_time`}
                  labelName="Start Time"
                  selectOptions={[
                    { value: "08:00", label: "08:00" },
                    { value: "08:30", label: "08:30" },
                    { value: "09:00", label: "09:00" },
                    { value: "09:30", label: "09:30" },
                    { value: "10:00", label: "10:00" },
                    { value: "10:30", label: "10:30" },
                    { value: "11:00", label: "11:00" },
                    { value: "выходной", label: "выходной" },
                  ]}
                />
                <Field
                  as={MyInput}
                  name={`work_time[${index}].end_time`}
                  labelName="End Time"
                  selectOptions={[
                    { value: "21:00", label: "21:00" },
                    { value: "20:00", label: "20:00" },
                    { value: "19:00", label: "19:00" },
                    { value: "18:00", label: "18:00" },
                    { value: "17:00", label: "17:00" },
                    { value: "16:00", label: "16:00" },
                    { value: "15:00", label: "15:00" },
                    { value: "14:00", label: "14:00" },
                    { value: "13:00", label: "13:00" },
                    { value: "12:00", label: "12:00" },
                    { value: "11:00", label: "11:00" },
                    { value: "выходной", label: "выходной" },
                  ]}
                />
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </FieldArray>
  )
}
