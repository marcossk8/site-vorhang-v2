export enum ProductCategories {
  _INDOOR = 'Interior',
  _OUTDOOR = 'Exterior',
}

export enum INDOOR_TYPES {
  _ROLLER_BLINDS = 'Cortinas roller',
  _VERTICAL_BLAND = 'Bandas verticales',
}

export enum OUTDOOR_TYPES {
  _AWNINGS = 'Toldos',
}

export enum ROLLER_BLINDS_TYPES {
  _BLACKOUT = 'Blackout',
  _SUNSCREEN = 'Sunscreen',
  _RUSTIC = 'Rústica',
}

interface IndoorCategoryType {
  id: INDOOR_TYPES
  types: { id: ROLLER_BLINDS_TYPES }[]
}

interface OutdoorCategoryType {
  id: OUTDOOR_TYPES
  types: never[]
}

export type CategoryType = OutdoorCategoryType | IndoorCategoryType

export enum DefaultValues {
  _DEFAULT_CATEGORY = 'Selecciona una categoría',
  _DEFAULT_PRODUCT_TYPE = 'Selecciona el producto',
  _DEFAULT_ROLLER_BLIND_OPTION = 'Selecciona el tipo de cortina roller',
}

export type ProductCategory =
  | DefaultValues._DEFAULT_CATEGORY
  | ProductCategories._INDOOR
  | ProductCategories._OUTDOOR

export type ProductType =
  | DefaultValues._DEFAULT_PRODUCT_TYPE
  | CategoryType['id']

export type RollerBlindType =
  | DefaultValues._DEFAULT_ROLLER_BLIND_OPTION
  | ROLLER_BLINDS_TYPES

export const DEFAULT_COMMAND_OPTION = 'Selecciona el tipo de mando'
export type CommandType = typeof DEFAULT_COMMAND_OPTION | Command

export enum Command {
  _LEFT = 'Izquierdo',
  _RIGHT = 'Derecho',
}

export const CATEGORIES_LIST = [
  {
    id: ProductCategories._INDOOR,
    types: [
      {
        id: INDOOR_TYPES._ROLLER_BLINDS,
        types: [
          {
            id: ROLLER_BLINDS_TYPES._BLACKOUT,
          },
          {
            id: ROLLER_BLINDS_TYPES._SUNSCREEN,
          },
          {
            id: ROLLER_BLINDS_TYPES._RUSTIC,
          },
        ],
      },
      {
        id: INDOOR_TYPES._VERTICAL_BLAND,
        types: [
          {
            id: ROLLER_BLINDS_TYPES._BLACKOUT,
          },
          {
            id: ROLLER_BLINDS_TYPES._SUNSCREEN,
          },
          {
            id: ROLLER_BLINDS_TYPES._RUSTIC,
          },
        ],
      },
    ],
  },
  {
    id: ProductCategories._OUTDOOR,
    types: [
      {
        id: OUTDOOR_TYPES._AWNINGS,
        types: [],
      },
    ],
  },
]
