import { customPreset } from '@park-ui-monorepo/panda-preset'
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  jsxFramework: "react",
  presets: ['@pandacss/dev/presets', customPreset],
  outdir: "."
})
