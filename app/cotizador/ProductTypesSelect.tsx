import React, { ReactNode } from 'react'
import {
  CATEGORIES_LIST,
  CategoryType,
  DefaultValues,
  ProductCategory,
} from '@/app/cotizador/types'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import {
  FIELD_PRODUCT_TYPE,
  PRODUCT_TYPES_INPUT_LABEL,
} from '@/app/cotizador/constants'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText/FormHelperText'

export const ProductTypesSelect: ({
  productCategory,
  productType,
  onChange,
  setProductCategory,
  error,
}: {
  productCategory: any
  productType: any
  onChange: any
  setProductCategory: any
  error: any
}) => ReactNode = ({
  productCategory,
  productType,
  onChange,
  setProductCategory,
  error,
}): ReactNode => {
  const CATEGORY_TYPES: CategoryType[] =
    productCategory === DefaultValues._DEFAULT_CATEGORY
      ? [...CATEGORIES_LIST[0].types, ...CATEGORIES_LIST[1].types]
      : CATEGORIES_LIST.find((category) => category.id === productCategory)
          ?.types ?? []

  return (
    <FormControl sx={{ marginBottom: '27px' }} fullWidth error={!!error}>
      <InputLabel id={FIELD_PRODUCT_TYPE}>
        {PRODUCT_TYPES_INPUT_LABEL}
      </InputLabel>
      <Select
        id={FIELD_PRODUCT_TYPE}
        name={FIELD_PRODUCT_TYPE}
        fullWidth
        label={PRODUCT_TYPES_INPUT_LABEL}
        defaultValue={DefaultValues._DEFAULT_PRODUCT_TYPE}
        value={productType}
        onChange={(e) => {
          onChange(e)

          const productType = e.target.value

          if (productCategory === DefaultValues._DEFAULT_CATEGORY) {
            const productCategory: ProductCategory =
              CATEGORIES_LIST.find(
                (category) =>
                  category.types?.some((type) => type.id === productType)
              )?.id ?? DefaultValues._DEFAULT_CATEGORY
            setProductCategory(productCategory)
          }
        }}
      >
        <MenuItem value={DefaultValues._DEFAULT_PRODUCT_TYPE}>
          {DefaultValues._DEFAULT_PRODUCT_TYPE}
        </MenuItem>
        {CATEGORY_TYPES.map((type: CategoryType) => (
          <MenuItem key={type.id} value={type.id}>
            {type.id}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  )
}
