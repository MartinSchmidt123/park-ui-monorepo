import { ark } from '@ark-ui/react/factory'
import { styled } from '@park-ui-monorepo/styled-system/jsx'
import { button } from '@park-ui-monorepo/styled-system/recipes'
import type { ComponentProps } from '@park-ui-monorepo/styled-system/types'

export type ButtonProps = ComponentProps<typeof Button>
export const Button = styled(ark.button, button)
