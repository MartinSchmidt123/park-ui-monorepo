import { customPreset } from '@park-ui-monorepo/panda-preset'
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/dev/presets', customPreset],
  include: ['../../packages/components/src/**/*.tsx', './src/**/*.{ts,tsx}'],
  importMap: '@park-ui-monorepo/styled-system',
  outdir: 'styled-system'
})
