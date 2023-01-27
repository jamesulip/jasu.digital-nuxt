import presetWind from '@unocss/preset-wind'
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'

import { presetScrollbar } from 'unocss-preset-scrollbar'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        layoutTransition: { name: 'layout', mode: 'out-in' }
    },
    plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
    modules: [
        '@vueuse/nuxt',
        '@unocss/nuxt',
        'unplugin-icons/nuxt'
    ],
    css: [
        '@unocss/reset/tailwind.css'
    ],
    unocss: {
        // presets
        uno: true, // enabled `@unocss/preset-uno`
        icons: true, // enabled `@unocss/preset-icons`
        attributify: false,

        // core options
        shortcuts: [],
        rules: [],

        presets: [
            presetWind(

            ),
            presetScrollbar({
                // config
            }),
            presetIcons({
                scale: 1.2,
                warn: true,
            }),
            presetTypography(),
            presetWebFonts({
                fonts: {
                    sans: 'DM Sans',
                    serif: 'DM Serif Display',
                    mono: 'DM Mono',
                },
            }),
        ],

    },
})
