'use client'

import React, { FC, ReactNode } from 'react'
import { ProductCategory } from '@/app/cotizador/types'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import {
  DEFAULT_INPUT_STYLES,
  FIELD_PRODUCT_CATEGORY,
  PRODUCT_CATEGORIES,
  PRODUCT_CATEGORY_INPUT_LABEL,
} from '@/app/cotizador/constants'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText/FormHelperText'

const ProductCategoriesSelect: FC<{
  productCategory: ProductCategory 
  resetProductTypes: (newValue?: ProductCategory) => void
  onChange: (e: SelectChangeEvent<ProductCategory>) => void
  error?: string
}> = ({ productCategory, error, onChange, resetProductTypes }): ReactNode => {
  return (
    <FormControl sx={DEFAULT_INPUT_STYLES} fullWidth error={!!error}>
      <InputLabel id={FIELD_PRODUCT_CATEGORY}>
        {PRODUCT_CATEGORY_INPUT_LABEL}
      </InputLabel>
      <Select
        fullWidth
        required
        id={FIELD_PRODUCT_CATEGORY}
        name={FIELD_PRODUCT_CATEGORY}
        label={PRODUCT_CATEGORY_INPUT_LABEL}
        value={productCategory}
        onChange={(e) => {
          onChange(e)
          resetProductTypes()
        }}
      >
        {PRODUCT_CATEGORIES.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  )
}

export default ProductCategoriesSelect
