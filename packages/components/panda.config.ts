import { customPreset } from '@park-ui-monorepo/panda-preset'
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/dev/presets', customPreset],
  importMap: '@park-ui-monorepo/styled-system',
  outdir: 'styled-system'
})
