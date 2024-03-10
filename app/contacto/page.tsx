'use client'
import { Section } from '@/app/components/Section'
import Box from '@mui/material/Box'
import Image from 'next/image'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { images } from '@/app/database/images'
import { object, ObjectSchema, string, ref } from 'yup'
import {
  FIELD_EMAIL,
  FIELD_ERROR_REQUIRED,
  FIELD_NAME,
  FIELD_SUBJECT,
  FIELD_PHONE,
  FIELD_MESSAGE,
} from '@/app/cotizador/constants'
import { useFormik } from 'formik'
import { sendContactForm } from '@/app/lib/api'
import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import LoadingButton from '@mui/lab/LoadingButton'
import SendRoundedIcon from '@mui/icons-material/SendRounded'

const FIELD_CONFIRM_EMAIL = 'email-confirm'

interface FormValues {
  [FIELD_NAME]: string
  [FIELD_EMAIL]: string
  [FIELD_CONFIRM_EMAIL]: string
  [FIELD_PHONE]: string
  [FIELD_SUBJECT]: string
  [FIELD_MESSAGE]: string
}

const INITIAL_VALUES = {
  [FIELD_NAME]: '',
  [FIELD_EMAIL]: '',
  [FIELD_CONFIRM_EMAIL]: '',
  [FIELD_PHONE]: '',
  [FIELD_SUBJECT]: '',
  [FIELD_MESSAGE]: '',
}

const USER_DATA_VALIDATION: ObjectSchema<FormValues> = object().shape({
  [FIELD_NAME]: string().required(FIELD_ERROR_REQUIRED),
  [FIELD_EMAIL]: string().required(FIELD_ERROR_REQUIRED),
  [FIELD_CONFIRM_EMAIL]: string()
    .oneOf([ref(FIELD_EMAIL)], 'Ambos mails deben ser idénticos')
    .required(FIELD_ERROR_REQUIRED),
  [FIELD_PHONE]: string().required(FIELD_ERROR_REQUIRED),
  [FIELD_SUBJECT]: string().required(FIELD_ERROR_REQUIRED),
  [FIELD_MESSAGE]: string().required(),
})

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [hasError, setHasError] = useState(false)

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
          subject: 'Contacto',
          isContactEmail: true,
          text: {
            ...values,
          },
        }

        const result = await sendContactForm(email)

        if (result.ok) {
          await result.json()
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

  return (
    <Section
      title="Comunicate con nosotros"
      subtitle="¿Qué hacemos?"
      backgroundColor="#fff"
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
      <Box sx={{ padding: '48px 16px 16px 16px' }}>
        <Box sx={{ width: '100%' }}>
          <Image
            style={{ width: '100%', height: 'auto' }}
            src="/images/us-banner.jpg"
            alt="Quienes somos banner"
            width={500}
            height={500}
          />
        </Box>
        <Box
          sx={{
            padding: '48px 0 0 0',
          }}
          component="form"
          onSubmit={formik.handleSubmit}
        >
          <Box sx={{ margin: '0 0 6px 0' }}>
            <TextField
              sx={{
                width: 'calc(50% - 12px)',
                margin: '0 12px 0 0',
              }}
              size="small"
              placeholder="Nombre"
              type="text"
              onChange={formik.handleChange}
              error={!!formik.errors[FIELD_NAME]}
              helperText={formik.errors[FIELD_NAME]}
              id={FIELD_NAME}
              name={FIELD_NAME}
            />
            <TextField
              sx={{
                width: 'calc(50% - 12px)',
                margin: '0 0 0 12px',
              }}
              size="small"
              placeholder="Email"
              type="email"
              onChange={formik.handleChange}
              error={!!formik.errors[FIELD_EMAIL]}
              helperText={formik.errors[FIELD_EMAIL]}
              id={FIELD_EMAIL}
              name={FIELD_EMAIL}
            />
          </Box>
          <Box sx={{ margin: '0 0 16px 0' }}>
            <TextField
              sx={{
                width: 'calc(50% - 12px)',
                margin: '0 12px 0 0',
              }}
              size="small"
              placeholder="Tel./Cel."
              type="number"
              onChange={formik.handleChange}
              error={!!formik.errors[FIELD_PHONE]}
              helperText={formik.errors[FIELD_PHONE]}
              id={FIELD_PHONE}
              name={FIELD_PHONE}
            />
            <TextField
              sx={{
                width: 'calc(50% - 12px)',
                margin: '0 0 0 12px',
              }}
              size="small"
              placeholder="Confirmar email"
              type="email"
              onChange={formik.handleChange}
              error={!!formik.errors[FIELD_CONFIRM_EMAIL]}
              helperText={formik.errors[FIELD_CONFIRM_EMAIL]}
              id={FIELD_CONFIRM_EMAIL}
              name={FIELD_CONFIRM_EMAIL}
            />
          </Box>
          <TextField
            fullWidth
            size="small"
            placeholder="Asunto"
            type="text"
            onChange={formik.handleChange}
            error={!!formik.errors[FIELD_SUBJECT]}
            helperText={formik.errors[FIELD_SUBJECT]}
            id={FIELD_SUBJECT}
            name={FIELD_SUBJECT}
          />
          <TextField
            sx={{ marginTop: '26px' }}
            fullWidth
            multiline
            size="small"
            placeholder="Mensaje"
            type="text"
            rows={5}
            onChange={formik.handleChange}
            error={!!formik.errors[FIELD_MESSAGE]}
            helperText={formik.errors[FIELD_MESSAGE]}
            id={FIELD_MESSAGE}
            name={FIELD_MESSAGE}
          />

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
              margin: '32px 0 40px 0',
              width: '100%',
            }}
            disabled={isLoading}
            loading={isLoading}
            type="submit"
            loadingPosition="start"
            startIcon={<SendRoundedIcon />}
          >
            Enviar
          </LoadingButton>
        </Box>

        <Box sx={{ marginBottom: '46px' }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '18px',
              marginBottom: '26px',
            }}
          >
            Comparte tus opiniones y sugerencias
          </Typography>
          <Typography>
            Queremos saber lo que piensas. Comparte tus comentarios y
            sugerencias con nosotros para que podamos mejorar nuestros productos
            y servicios según tus necesidades.
          </Typography>
        </Box>
        <Grid sx={{ marginBottom: '70px' }} container spacing={1}>
          {images.map(({ src, alt }, index) => (
            <Grid key={index} item xs={4}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100px',
                }}
              >
                <Image src={src} alt={alt} fill objectFit="cover" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Section>
  )
}
