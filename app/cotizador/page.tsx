'use client'
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  Fragment,
  MutableRefObject,
  useRef,
  useState,
} from 'react'
import { Section } from '@/app/components/Section'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import { CustomButton } from '@/app/components/buttons/Button'
import {
  CATEGORIES_LIST,
  Command,
  DEFAULT_COMMAND_OPTION,
  DefaultValues,
  INDOOR_TYPES,
  ProductCategories,
  ProductCategory,
  ProductType,
  ROLLER_BLINDS_TYPES,
  RollerBlindType,
} from '@/app/cotizador/types'
import {
  COMMAND_INPUT_LABEL,
  DEFAULT_INPUT_STYLES,
  FIELD_COMMAND_INPUT,
  FIELD_ERROR_REQUIRED,
  FIELD_HEIGHT_INPUT,
  FIELD_PRODUCT_CATEGORY,
  FIELD_PRODUCT_TYPE,
  FIELD_ROLLER_BLIND_TYPE,
  FIELD_WIDTH_INPUT,
  FormValues,
  HEIGHT_INPUT_LABEL,
  INITIAL_VALUES,
  PRODUCTS_TO_QUOTE_FORM_SCHEMA_VALIDATION,
  ROLLER_BLINDS_TYPE_INPUT_LABEL,
  WIDTH_INPUT_LABEL,
} from './constants'
import CheckCircleRounded from '@mui/icons-material/CheckCircleRounded'
import { FormikErrors, useFormik } from 'formik'
import FormHelperText from '@mui/material/FormHelperText/FormHelperText'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Accordion from '@mui/material/Accordion'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ProductCategoriesSelect from '@/app/cotizador/ProductCategoriesSelect'
import { ProductTypesSelect } from '@/app/cotizador/ProductTypesSelect'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import UserDataForm from '../components/forms/UserDataForm'

export default function Page() {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null)

  const steps: string[] = [
    'Datos del producto',
    'Medidas de la avertura',
    'Tus datos',
  ]

  const [activeStep, setActiveStep] = useState(0)
  const [skipped, setSkipped] = useState(new Set<number>())
  const [orders, setOrders] = useState<FormValues[]>([])

  const isStepSkipped = (step: number) => skipped.has(step)

  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

  const handleNext = (): void => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    if (activeStep + 1 === 2) {
      formik.resetForm()
    }

    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: PRODUCTS_TO_QUOTE_FORM_SCHEMA_VALIDATION,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values: FormValues) => {
      setOrders([...orders, values])
      handleNext()
    },
  })

  const validateField = async (fieldName: string, fieldValue: unknown) => {
    try {
      await PRODUCTS_TO_QUOTE_FORM_SCHEMA_VALIDATION.validateAt(fieldName, {
        [fieldName]: fieldValue,
      })
      formik.setFieldError(fieldName, '')
    } catch (error: any) {
      formik.setFieldError(fieldName, error.message)
      throw error
    }
  }

  const deleteProduct = (index: number) => {
    const newArray = [...orders]

    newArray.splice(index, 1)

    setOrders(newArray)
  }

  const defaultStyles = {
    borderRadius: '16px',
    padding: '8px 16px',
    boxShadow: '2px 6px 9px -2px #b7b7b7',
    marginBottom: '12px',
    color: '#A7A7A7',
  }

  return (
    <Section
      title="Cotizador online"
      subtitle="¿Qué hacemos?"
      backgroundColor="#fff"
    >
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography sx={{ padding: '40px', color: '#7E7E7E' }}>
          Convierte tus sueños en realidad con nuestro cotizador online. Seguí
          los pasos de tus productos deseados y comienza a planificar tus
          proyectos.
        </Typography>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          sx={{
            width: 300,
            color: '#C4C4C4',
            '& .MuiStepIcon-root.Mui-active': {
              color: '#B4CF1F',
            },
            '& .MuiStepIcon-root.Mui-completed': {
              color: '#B4CF1F',
            },
            marginBottom: '40px',
          }}
        >
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {}

            if (isStepSkipped(index)) {
              stepProps.completed = false
            }

            return (
              <Step key={label} {...stepProps}>
                <StepLabel>{label}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <Fragment>
            <CheckCircleRounded
              sx={{ color: '#B4CF1F', width: '80px', height: '80px' }}
            />
            <Typography
              sx={{
                mt: 2,
                mb: 1,
                textAlign: 'center',
                color: '#7E7E7E',
                fontWeight: 700,
                fontSize: '14px',
              }}
            >
              ¡ FELICITACIONES POR LLEGAR HASTA ACÁ! <br />
              ¡TU COTIZACIÓN FUE REGISTRADA! <br />
              NOS COMUINICAREMOS A LA BREVEDAD
            </Typography>
            <CustomButton
              href="/"
              sx={{ m: '50px 0', minWidth: '120px' }}
              text="Inicio"
            />
          </Fragment>
        ) : (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              width: '100%',
              padding: '0 16px',
              mb: '50px',
            }}
          >
            {activeStep === 2 ? (
              <UserDataForm
                orders={orders}
                handleBack={() => {
                  setActiveStep(0)
                  setSkipped(new Set<number>())

                  if (ref?.current) {
                    ref.current.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                handleNext={handleNext}
              />
            ) : (
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                component="form"
                onSubmit={formik.handleSubmit}
              >
                {activeStep === 0 && (
                  <StepOne
                    errors={formik.errors}
                    values={formik.values}
                    onChange={formik.handleChange}
                    resetProductTypes={() =>
                      formik.setFieldValue(
                        FIELD_PRODUCT_TYPE,
                        DefaultValues._DEFAULT_PRODUCT_TYPE
                      )
                    }
                    setProductCategory={(newValue: ProductCategory) =>
                      formik.setFieldValue(FIELD_PRODUCT_CATEGORY, newValue)
                    }
                  />
                )}

                {activeStep === 1 && (
                  <StepTwo
                    errors={formik.errors}
                    values={formik.values}
                    onChange={formik.handleChange}
                  />
                )}

                {orders.length >= 1 && activeStep !== 0 && (
                  <Accordion sx={{ width: '100%' }}>
                    <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                      <Typography sx={{ fontWeight: 700, color: '#7E7E7E' }}>
                        Ver productos a cotizar ({orders.length})
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: '#7E7E7E',
                          fontSize: '18px',
                          textAlign: 'center',
                          marginBottom: '32px',
                        }}
                      >
                        Items <br />
                        Seleccionados
                      </Typography>
                      {orders.map((order, index: number) => {
                        return (
                          <Box
                            key={`order-${index}`}
                            sx={{ marginBottom: '32px' }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                              }}
                            >
                              <Typography sx={{ mb: 1 }}>
                                Producto N#{index + 1}
                              </Typography>
                              <IconButton onClick={() => deleteProduct(index)}>
                                <DeleteIcon />
                              </IconButton>
                            </Box>
                            <Typography sx={defaultStyles}>
                              Categoría:{' '}
                              <strong>{order[FIELD_PRODUCT_CATEGORY]}</strong>
                            </Typography>
                            <Typography sx={defaultStyles}>
                              Producto:{' '}
                              <strong>{order[FIELD_PRODUCT_TYPE]}</strong>
                            </Typography>
                            {order[FIELD_ROLLER_BLIND_TYPE] && (
                              <Typography sx={defaultStyles}>
                                Tipo:{' '}
                                <strong>
                                  {order[FIELD_ROLLER_BLIND_TYPE]}
                                </strong>
                              </Typography>
                            )}
                            <Typography sx={defaultStyles}>
                              Ancho: <strong>{order[FIELD_WIDTH_INPUT]}</strong>
                              m
                            </Typography>
                            <Typography sx={defaultStyles}>
                              Alto:{' '}
                              <strong>{order[FIELD_HEIGHT_INPUT]}m</strong>
                            </Typography>
                            <Typography sx={defaultStyles}>
                              Mando:{' '}
                              <strong>{order[FIELD_COMMAND_INPUT]}</strong>
                            </Typography>
                          </Box>
                        )
                      })}
                    </AccordionDetails>
                  </Accordion>
                )}

                {activeStep === 0 && (
                  <Box
                    sx={{
                      margin: '30px 0',
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <CustomButton
                      sx={{ minWidth: '120px' }}
                      text="Siguiente"
                      onClick={async () => {
                        try {
                          await validateField(
                            FIELD_PRODUCT_CATEGORY,
                            formik.values[FIELD_PRODUCT_CATEGORY]
                          )
                          await validateField(
                            FIELD_PRODUCT_TYPE,
                            formik.values[FIELD_PRODUCT_TYPE]
                          )

                          if (
                            formik.values[FIELD_PRODUCT_TYPE] !==
                              DefaultValues._DEFAULT_PRODUCT_TYPE &&
                            formik.values[FIELD_PRODUCT_TYPE] ===
                              INDOOR_TYPES._ROLLER_BLINDS
                          ) {
                            if (
                              formik.values[FIELD_ROLLER_BLIND_TYPE] ===
                              DefaultValues._DEFAULT_ROLLER_BLIND_OPTION
                            ) {
                              formik.setFieldError(
                                FIELD_ROLLER_BLIND_TYPE,
                                FIELD_ERROR_REQUIRED
                              )
                              throw Error(FIELD_ERROR_REQUIRED)
                            } else {
                              formik.setFieldError(FIELD_ROLLER_BLIND_TYPE, '')
                            }
                          } else {
                            await formik.setFieldValue(
                              FIELD_ROLLER_BLIND_TYPE,
                              undefined
                            )
                          }

                          handleNext()
                        } catch (e) {
                          console.log(e)
                        }
                      }}
                    />
                  </Box>
                )}

                {activeStep === 1 && (
                  <Box
                    sx={{
                      margin: '30px 0 30px 0',
                      display: 'flex',
                      flexDirection: 'column',
                      width: 'fit-content',
                    }}
                  >
                    <CustomButton
                      sx={{ m: 1, minWidth: '120px' }}
                      text="Siguiente"
                      type="submit"
                    />
                    <Button
                      onClick={handleBack}
                      sx={{ m: 1, minWidth: '120px', color: '#7E7E7E' }}
                    >
                      Volver
                    </Button>
                  </Box>
                )}

                {activeStep === 2 && (
                  <Box
                    sx={{
                      mt: '27px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Button
                      onClick={() => {
                        setActiveStep(0)
                        setSkipped(new Set<number>())
                      }}
                      sx={{ m: 1, minWidth: '120px', color: '#7E7E7E' }}
                    >
                      Agregar nuevo item
                    </Button>
                  </Box>
                )}
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Section>
  )
}

const StepOne: FC<{
  values: FormValues
  errors: FormikErrors<FormValues>
  resetProductTypes: () => void
  setProductCategory: (newValue: ProductCategory) => void
  onChange: (
    e:
      | SelectChangeEvent<ProductCategory>
      | SelectChangeEvent<ProductType>
      | SelectChangeEvent<RollerBlindType>
  ) => void
}> = ({ values, errors, onChange, setProductCategory, resetProductTypes }) => {
  const productCategory =
    values[FIELD_PRODUCT_CATEGORY] ?? DefaultValues._DEFAULT_CATEGORY
  const productType =
    values[FIELD_PRODUCT_TYPE] ?? DefaultValues._DEFAULT_PRODUCT_TYPE
  const rollerBlindType = values[FIELD_ROLLER_BLIND_TYPE]

  return (
    <Fragment>
      <ProductCategoriesSelect
        onChange={onChange}
        productCategory={productCategory}
        error={errors[FIELD_PRODUCT_CATEGORY]}
        resetProductTypes={resetProductTypes}
      />
      <ProductTypesSelect
        onChange={onChange}
        productCategory={productCategory}
        error={errors[FIELD_PRODUCT_TYPE]}
        productType={productType}
        setProductCategory={setProductCategory}
      />
      <RollerBlindsSelect
        onChange={onChange}
        productType={productType}
        error={errors[FIELD_ROLLER_BLIND_TYPE]}
        rollerBlindType={rollerBlindType}
      />
    </Fragment>
  )
}
const StepTwo: FC<{
  errors: FormikErrors<FormValues>
  values: FormValues
  onChange: (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => void
}> = ({ errors, values, onChange }) => {
  return (
    <Fragment>
      <TextField
        id={FIELD_WIDTH_INPUT}
        name={FIELD_WIDTH_INPUT}
        value={values[FIELD_WIDTH_INPUT]}
        sx={DEFAULT_INPUT_STYLES}
        fullWidth
        label={WIDTH_INPUT_LABEL}
        error={!!errors[FIELD_WIDTH_INPUT]}
        helperText={
          errors[FIELD_WIDTH_INPUT] ? errors[FIELD_WIDTH_INPUT] : undefined
        }
        onChange={onChange}
      />
      <TextField
        id={FIELD_HEIGHT_INPUT}
        name={FIELD_HEIGHT_INPUT}
        value={values[FIELD_HEIGHT_INPUT]}
        sx={DEFAULT_INPUT_STYLES}
        fullWidth
        label={HEIGHT_INPUT_LABEL}
        error={!!errors[FIELD_HEIGHT_INPUT]}
        helperText={
          errors[FIELD_HEIGHT_INPUT] ? errors[FIELD_HEIGHT_INPUT] : undefined
        }
        onChange={onChange}
      />
      <FormControl
        sx={DEFAULT_INPUT_STYLES}
        fullWidth
        error={!!errors[FIELD_COMMAND_INPUT]}
      >
        <InputLabel id={FIELD_COMMAND_INPUT}>{COMMAND_INPUT_LABEL}</InputLabel>
        <Select
          id={FIELD_COMMAND_INPUT}
          name={FIELD_COMMAND_INPUT}
          fullWidth
          label={COMMAND_INPUT_LABEL}
          defaultValue={DEFAULT_COMMAND_OPTION}
          onChange={onChange}
        >
          <MenuItem value={DEFAULT_COMMAND_OPTION}>
            {DEFAULT_COMMAND_OPTION}
          </MenuItem>
          <MenuItem value={Command._LEFT}>{Command._LEFT}</MenuItem>
          <MenuItem value={Command._RIGHT}>{Command._RIGHT}</MenuItem>
        </Select>
        <FormHelperText>{errors[FIELD_COMMAND_INPUT]}</FormHelperText>
      </FormControl>
    </Fragment>
  )
}

const RollerBlindsSelect: FC<{
  productType: ProductType
  rollerBlindType?: RollerBlindType
  onChange: (e: SelectChangeEvent<RollerBlindType>) => void
  error?: string
}> = ({ onChange, productType, rollerBlindType, error }) => {
  const ROLLER_BLIND_TYPES: { id: ROLLER_BLINDS_TYPES }[] =
    CATEGORIES_LIST.find(
      (category) => category.id === ProductCategories._INDOOR
    )?.types.find((type) => type.id === INDOOR_TYPES._ROLLER_BLINDS)?.types ??
    []

  return (
    <Fragment>
      {productType === INDOOR_TYPES._ROLLER_BLINDS ||
        (productType === INDOOR_TYPES._VERTICAL_BLAND && (
          <FormControl sx={{ marginBottom: '40px' }} fullWidth error={!!error}>
            <InputLabel sx={{ width: '100%' }} id={FIELD_ROLLER_BLIND_TYPE}>
              Tipo
            </InputLabel>
            <Select
              id={FIELD_ROLLER_BLIND_TYPE}
              name={FIELD_ROLLER_BLIND_TYPE}
              fullWidth
              value={rollerBlindType}
              label={ROLLER_BLINDS_TYPE_INPUT_LABEL}
              onChange={onChange}
              defaultValue={DefaultValues._DEFAULT_ROLLER_BLIND_OPTION}
            >
              <MenuItem value={DefaultValues._DEFAULT_ROLLER_BLIND_OPTION}>
                {DefaultValues._DEFAULT_ROLLER_BLIND_OPTION}
              </MenuItem>
              {ROLLER_BLIND_TYPES?.map((type: { id: ROLLER_BLINDS_TYPES }) => (
                <MenuItem key={type.id} value={type.id}>
                  {type.id}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{error}</FormHelperText>
          </FormControl>
        ))}
    </Fragment>
  )
}
