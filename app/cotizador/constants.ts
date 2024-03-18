import {
  ProductCategories,
  ProductCategory,
  ProductType,
  RollerBlindType,
  INDOOR_TYPES,
  DEFAULT_COMMAND_OPTION,
  CommandType,
  DefaultValues,
} from './types'
import { object, string, ObjectSchema } from 'yup'

export const PRODUCT_CATEGORIES = [
  DefaultValues._DEFAULT_CATEGORY,
  ProductCategories._INDOOR,
  ProductCategories._OUTDOOR,
]

// Step one
export const PRODUCT_CATEGORY_INPUT_LABEL = 'Exterior / Interior'
export const PRODUCT_TYPES_INPUT_LABEL = 'Producto'
export const ROLLER_BLINDS_TYPE_INPUT_LABEL = 'Tipo'

// Step two
export const COMMAND_INPUT_LABEL = 'Mando'

export const WIDTH_INPUT_LABEL = 'Ancho (metros)'

export const HEIGHT_INPUT_LABEL = 'Alto (metros)'

// Step three
export const PHONE_NUMBER_INPUT_LABEL = 'Tel/Cel'
export const EMAIL_INPUT_LABEL = 'Mail'
export const PROVINCE_INPUT_LABEL = 'Provincia'
export const REGION_INPUT_LABEL = 'Localidad'

// Styles
export const DEFAULT_INPUT_STYLES = { marginBottom: '27px' }

// Form
export const FIELD_ERROR_REQUIRED = 'Campo requerido'

export const FIELD_PRODUCT_CATEGORY = 'category'

export const FIELD_PRODUCT_TYPE = 'product'

export const FIELD_ROLLER_BLIND_TYPE = 'roller_blind'

export const FIELD_WIDTH_INPUT = 'width'

export const FIELD_HEIGHT_INPUT = 'height'

export const FIELD_COMMAND_INPUT = 'command'

export const FIELD_WITH_SHIPPING_CHECKBOX = 'with_shipping'
export const FIELD_WITH_INSTALLATION_CHECKBOX = 'with_installation'

export interface FormValues {
  [FIELD_PRODUCT_CATEGORY]: ProductCategory
  [FIELD_PRODUCT_TYPE]: ProductType
  [FIELD_ROLLER_BLIND_TYPE]?: RollerBlindType
  [FIELD_WIDTH_INPUT]: string
  [FIELD_HEIGHT_INPUT]: string
  [FIELD_COMMAND_INPUT]: CommandType
}

export const INITIAL_VALUES: FormValues = {
  [FIELD_PRODUCT_CATEGORY]: DefaultValues._DEFAULT_CATEGORY,
  [FIELD_PRODUCT_TYPE]: DefaultValues._DEFAULT_PRODUCT_TYPE,
  [FIELD_ROLLER_BLIND_TYPE]: DefaultValues._DEFAULT_ROLLER_BLIND_OPTION,
  [FIELD_WIDTH_INPUT]: '',
  [FIELD_HEIGHT_INPUT]: '',
  [FIELD_COMMAND_INPUT]: DEFAULT_COMMAND_OPTION,
}

export const PRODUCTS_TO_QUOTE_FORM_SCHEMA_VALIDATION: ObjectSchema<FormValues> =
  object().shape({
    [FIELD_PRODUCT_CATEGORY]: string<ProductCategory>()
      .test('not-default-option', FIELD_ERROR_REQUIRED, (value) => {
        return value !== DefaultValues._DEFAULT_CATEGORY
      })
      .required(FIELD_ERROR_REQUIRED),
    [FIELD_PRODUCT_TYPE]: string<ProductType>()
      .test('not-default-option', FIELD_ERROR_REQUIRED, (value) => {
        return value !== DefaultValues._DEFAULT_PRODUCT_TYPE
      })
      .required(FIELD_ERROR_REQUIRED),
    [FIELD_ROLLER_BLIND_TYPE]: string<RollerBlindType>().when(
      FIELD_PRODUCT_TYPE,
      {
        is: (value: ProductType) => {
          return (
            value === INDOOR_TYPES._ROLLER_BLINDS ||
            value === INDOOR_TYPES._VERTICAL_BLAND
          )
        },
        then: (schema) => schema.required(FIELD_ERROR_REQUIRED),
        otherwise: (schema) => schema.notRequired(),
      }
    ),
    [FIELD_WIDTH_INPUT]: string().required(FIELD_ERROR_REQUIRED),
    [FIELD_HEIGHT_INPUT]: string().required(FIELD_ERROR_REQUIRED),
    [FIELD_COMMAND_INPUT]: string<CommandType>()
      .test('not-default-option', FIELD_ERROR_REQUIRED, (value) => {
        return value !== DEFAULT_COMMAND_OPTION
      })
      .required(FIELD_ERROR_REQUIRED),
  })

export const FIELD_PHONE = 'phone'

export const FIELD_EMAIL = 'email'

export const FIELD_PROVINCE = 'province'

export const FIELD_REGION = 'region'

export const FIELD_NAME = 'name'

export const FIELD_SUBJECT = 'subject'

export const FIELD_MESSAGE = 'message'
