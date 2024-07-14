# Park UI Monorepo

Example of a monorepo using Park UI.

Since Park UI uses Panda CSS under the hood, I followed
https://panda-css.com/docs/guides/component-library#include-the-src-files

and created separate workspace packages:

* `packages/components/` - shared components, 
  contains Park UI and custom components using Park UI
* `packages/panda-preset/` - custom Panda Preset, 
  see https://panda-css.com/docs/guides/component-library#ship-a-panda-preset
* `packages/styled-system/` - Panda as external package, 
  see https://panda-css.com/docs/guides/component-library#use-panda-as-external-package

 * `app/app1/` - example app  
   using Park UI and custom components based on Park UI.

The Park UI components were imported using:
                     
```bash
    npx @park-ui/cli@0.7.2 components add button card
```

As a post-processing I had to 

* replace the `styled-system` imports with imports from `@park-ui-monorepo/styled-system`.                
* change imports using an alias lik `~/ui` into relative paths, e.g. `../ui`

Diff of the changes:

```diff
diff --git b/packages/components/src/lib/create-style-context.tsx a/packages/components/src/lib/create-style-context.tsx
index 26fb6d3..3df852d 100644
--- b/packages/components/src/lib/create-style-context.tsx
+++ a/packages/components/src/lib/create-style-context.tsx
@@ -7,8 +7,8 @@ import {
   forwardRef,
   useContext,
 } from 'react'
-import { cx } from 'styled-system/css'
-import { styled } from 'styled-system/jsx'
+import { cx } from '@park-ui-monorepo/styled-system/css'
+import { styled } from '@park-ui-monorepo/styled-system/jsx'
 
 type Props = Record<string, unknown>
 type Recipe = {
diff --git b/packages/components/src/ui/primitives/button.tsx a/packages/components/src/ui/primitives/button.tsx
index 383d5f9..375de40 100644
--- b/packages/components/src/ui/primitives/button.tsx
+++ a/packages/components/src/ui/primitives/button.tsx
@@ -1,7 +1,7 @@
 import { ark } from '@ark-ui/react/factory'
-import { styled } from 'styled-system/jsx'
-import { button } from 'styled-system/recipes'
-import type { ComponentProps } from 'styled-system/types'
+import { styled } from '@park-ui-monorepo/styled-system/jsx'
+import { button } from '@park-ui-monorepo/styled-system/recipes'
+import type { ComponentProps } from '@park-ui-monorepo/styled-system/types'
 
 export type ButtonProps = ComponentProps<typeof Button>
 export const Button = styled(ark.button, button)
diff --git b/packages/components/src/ui/primitives/card.tsx a/packages/components/src/ui/primitives/card.tsx
index 05b829d..42ec9ca 100644
--- b/packages/components/src/ui/primitives/card.tsx
+++ a/packages/components/src/ui/primitives/card.tsx
@@ -1,9 +1,9 @@
 'use client'
 import type { Assign, PolymorphicProps } from '@ark-ui/react'
 import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
-import { type CardVariantProps, card } from 'styled-system/recipes'
-import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
-import { createStyleContext } from '~/lib/create-style-context'
+import { type CardVariantProps, card } from '@park-ui-monorepo/styled-system/recipes'
+import type { ComponentProps, HTMLStyledProps } from '@park-ui-monorepo/styled-system/types'
+import { createStyleContext } from '../../lib/create-style-context'
 
 const { withProvider, withContext } = createStyleContext(card)
 
```

# Getting the example app running

```bash
pnpm install
cd apps/app1
pnpm dev
````

Errors:
```bash
  pnpm -F @park-ui-monorepo/components run build

  [..]  
  DTS Build start
    src/ui/primitives/card.tsx(16,49): error TS2559: Type 'Assign<HTMLStyledProps<"div">, PolymorphicProps>' has no properties in common with type '{ className?: string | undefined; }'.
    src/ui/primitives/card.tsx(23,3): error TS2559: Type 'Assign<HTMLStyledProps<"div">, PolymorphicProps>' has no properties in common with type '{ className?: string | undefined; }'.
    src/ui/primitives/card.tsx(26,51): error TS2559: Type 'Assign<HTMLStyledProps<"div">, PolymorphicProps>' has no properties in common with type '{ className?: string | undefined; }'.
    src/ui/primitives/card.tsx(31,51): error TS2559: Type 'Assign<HTMLStyledProps<"div">, PolymorphicProps>' has no properties in common with type '{ className?: string | undefined; }'.
  [..]
```

```bash
    > pnpm -F @park-ui-monorepo/app run build
    
    > @park-ui-monorepo/app@0.0.0 build /[..]park-ui-monorepo/apps/app1
    > tsc && vite build 
    
    ../../packages/components/src/ui/primitives/card.tsx:16:49 - error TS2559: Type 'Assign<HTMLStyledProps<"div">, PolymorphicProps>' has no properties in common with type '{ className?: string | undefined; }'.
    
    16 export const Body = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
                                                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    ../../packages/components/src/ui/primitives/card.tsx:23:3 - error TS2559: Type 'Assign<HTMLStyledProps<"div">, PolymorphicProps>' has no properties in common with type '{ className?: string | undefined; }'.
    
    23   Assign<HTMLStyledProps<'div'>, PolymorphicProps>
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    ../../packages/components/src/ui/primitives/card.tsx:26:51 - error TS2559: Type 'Assign<HTMLStyledProps<"div">, PolymorphicProps>' has no properties in common with type '{ className?: string | undefined; }'.
    
    26 export const Footer = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
                                                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    ../../packages/components/src/ui/primitives/card.tsx:31:51 - error TS2559: Type 'Assign<HTMLStyledProps<"div">, PolymorphicProps>' has no properties in common with type '{ className?: string | undefined; }'.
    
    31 export const Header = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
                                                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    
    Found 4 errors in the same file, starting at: ../../packages/components/src/ui/primitives/card.tsx:16
    
    /[..]park-ui-monorepo/apps/app1:
     ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL  @park-ui-monorepo/app@0.0.0 build: `tsc && vite build `
    Exit status 2
```



