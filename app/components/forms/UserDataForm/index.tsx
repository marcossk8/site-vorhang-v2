'use client'

import React, { FC, useState } from 'react'
import TextField from '@mui/material/TextField'
import {
  DEFAULT_INPUT_STYLES,
  EMAIL_INPUT_LABEL,
  FIELD_EMAIL,
  FIELD_PHONE,
  FIELD_PROVINCE,
  FIELD_REGION,
  REGION_INPUT_LABEL,
  PHONE_NUMBER_INPUT_LABEL,
  PROVINCE_INPUT_LABEL,
  FIELD_ERROR_REQUIRED,
  FIELD_WITH_SHIPPING_CHECKBOX,
  FIELD_WITH_INSTALLATION_CHECKBOX,
} from '@/app/cotizador/constants'
import { useFormik } from 'formik'
import { SxProps } from '@mui/system'
import { Theme } from '@mui/material/styles'
import { boolean, object, ObjectSchema, string } from 'yup'
import { sendContactForm } from '@/app/lib/api'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox/Checkbox'
import LoadingButton from '@mui/lab/LoadingButton'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import SendRoundedIcon from '@mui/icons-material/SendRounded'

interface FormValues {
  [FIELD_PHONE]: string
  [FIELD_EMAIL]: string
  [FIELD_PROVINCE]: string
  [FIELD_REGION]: string
  [FIELD_WITH_SHIPPING_CHECKBOX]: boolean
  [FIELD_WITH_INSTALLATION_CHECKBOX]: boolean
}

const INITIAL_VALUES = {
  [FIELD_PHONE]: '',
  [FIELD_EMAIL]: '',
  [FIELD_PROVINCE]: '',
  [FIELD_REGION]: '',
  [FIELD_WITH_SHIPPING_CHECKBOX]: false,
  [FIELD_WITH_INSTALLATION_CHECKBOX]: false,
}

interface Props {
  orders: any[]
  handleBack: () => void
  handleNext: () => void
}

const UserDataForm: FC<Props> = ({ orders, handleBack, handleNext }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [hasError, setHasError] = useState(false)

  const USER_DATA_VALIDATION: ObjectSchema<FormValues> = object().shape({
    [FIELD_PHONE]: string().required(FIELD_ERROR_REQUIRED),
    [FIELD_EMAIL]: string().required(FIELD_ERROR_REQUIRED),
    [FIELD_PROVINCE]: string().required(FIELD_ERROR_REQUIRED),
    [FIELD_REGION]: string().required(FIELD_ERROR_REQUIRED),
    [FIELD_WITH_SHIPPING_CHECKBOX]: boolean().required(),
    [FIELD_WITH_INSTALLATION_CHECKBOX]: boolean().required(),
  })

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: USER_DATA_VALIDATION,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values: FormValues) => {
      try {
        setIsLoading(true)
        const email = {
          from: values[FIELD_EMAIL],
          to: 'danielaliendo98@gmail.com',
          subject: 'Cotización',
          text: {
            ...values,
            orders,
          },
        }

        const result = await sendContactForm(email)

        if (result.ok) {
          await result.json()
          handleNext()
        } else {
          throw new Error()
        }
      } catch (e) {
        console.error(e)
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    },
  })

  interface Input {
    sx?: SxProps<Theme>
    fullWidth?: boolean
    label: string
    field:
      | typeof FIELD_PHONE
      | typeof FIELD_EMAIL
      | typeof FIELD_PROVINCE
      | typeof FIELD_REGION
  }

  const formInputs: Input[] = [
    {
      label: PHONE_NUMBER_INPUT_LABEL,
      field: FIELD_PHONE,
    },
    {
      label: EMAIL_INPUT_LABEL,
      field: FIELD_EMAIL,
    },
    {
      label: PROVINCE_INPUT_LABEL,
      field: FIELD_PROVINCE,
    },
    {
      label: REGION_INPUT_LABEL,
      field: FIELD_REGION,
    },
  ]

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Snackbar
        sx={{ backgroundColor: '#fff' }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={hasError}
        onClose={() => setHasError(false)}
        autoHideDuration={3000}
      >
        <Alert
          onClose={() => setHasError(false)}
          severity="error"
          variant="outlined"
          sx={{ width: '100%' }}
        >
          Ha ocurrido un error
        </Alert>
      </Snackbar>

      {formInputs.map(
        ({ sx = DEFAULT_INPUT_STYLES, field, fullWidth = true, label }) => (
          <TextField
            key={field}
            id={field}
            name={field}
            sx={sx}
            fullWidth={fullWidth}
            label={label}
            value={formik.values[field]}
            onChange={formik.handleChange}
            error={!!formik.errors[field]}
            helperText={formik.errors[field] && FIELD_ERROR_REQUIRED}
          />
        )
      )}

      <FormControlLabel
        sx={{ width: '100%', marginBottom: '22px' }}
        control={
          <Checkbox
            value={formik.values[FIELD_WITH_SHIPPING_CHECKBOX]}
            id={FIELD_WITH_SHIPPING_CHECKBOX}
            name={FIELD_WITH_SHIPPING_CHECKBOX}
            onChange={formik.handleChange}
          />
        }
        label="Pedido con envío"
      />

      <FormControlLabel
        sx={{ width: '100%', marginBottom: '22px' }}
        control={
          <Checkbox
            onChange={formik.handleChange}
            checked={formik.values[FIELD_WITH_INSTALLATION_CHECKBOX]}
            id={FIELD_WITH_INSTALLATION_CHECKBOX}
            name={FIELD_WITH_INSTALLATION_CHECKBOX}
          />
        }
        label="Pedido con instalación"
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: 'fit-content',
        }}
      >
        <LoadingButton
          sx={{
            minWidth: '120px',
            backgroundColor: '#B4CF1F',
            borderRadius: '16px',
            '&:hover': {
              backgroundColor: '#B4CF1F',
              color: '#fff',
            },
            color: '#fff',
            padding: '6px 16px',
          }}
          disabled={isLoading}
          loading={isLoading}
          type="submit"
          loadingPosition="start"
          startIcon={<SendRoundedIcon />}
        >
          Enviar cotización
        </LoadingButton>

        <Button
          onClick={handleBack}
          sx={{ m: 1, minWidth: '120px', color: '#7E7E7E' }}
        >
          Volver
        </Button>
      </Box>
    </Box>
  )
}

export default UserDataForm
