import type { Assign } from '@ark-ui/react'
import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { styled } from '@park-ui-monorepo/styled-system/jsx'
import { type ButtonVariantProps, button } from '@park-ui-monorepo/styled-system/recipes'
import type { JsxStyleProps } from '@park-ui-monorepo/styled-system/types'

export interface ButtonProps
  extends Assign<JsxStyleProps, HTMLArkProps<'button'>>,
    ButtonVariantProps {}
export const Button = styled(ark.button, button)
