import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'next-ecommerce',

  projectId: '5629bk22',
  dataset: 'production_private',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
