import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './product'
// import product from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema],
}
