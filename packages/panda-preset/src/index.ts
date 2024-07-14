import {defineConfig} from "@pandacss/dev";
import {createPreset} from "@park-ui/panda-preset";

export const customPreset = defineConfig({
    preflight: true,
    presets: [
        '@pandacss/preset-base',
        createPreset({
            accentColor: 'iris',
            grayColor: 'mauve',
            borderRadius: 'sm',
            additionalColors: ['brand'],
        }),
    ],
    include: ["./src/**/*.{js,jsx,ts,tsx}",],
    exclude: [],

    theme: {
        extend: {
            tokens: {
                colors: {
                    brand: {value: '#253e75'}
                }
            },
            slotRecipes: {
                card: {
                    base: {
                        header: {
                            fontVariant: "small-caps",
                            fontSize: "xl",
                            fontWeight: "bold"
                        },
                    }
                }
            }
        }

    },
    jsxFramework: 'react',
    outdir: "styled-system",
});
