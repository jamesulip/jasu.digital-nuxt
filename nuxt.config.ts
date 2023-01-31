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
import { presetForms } from '@julr/unocss-preset-forms'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    // add external js facebook chat plugin
    nitro: {
        prerender: {
            crawlLinks: true,
          routes: [
            '/',
            '/shop/1160670858',
            '/shop/1219085152',
            '/shop/1257442947',
            '/shop/1359680611',
            '/shop/1371898642',
            '/shop/1375601954',
            '/shop/1376719718',
            '/shop/1389594533',

            ]
        }
      },
    app: {
        layoutTransition: {
            name: 'layout',
            mode: 'out-in'
        },
        head: {
            script: [
                {
                    src: '/facebok-sdk.js',
                    body: true,

                },
                {
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-MMMHPDHWYR',
                    async: true,
                    body: true,
                },
                {
                    src: '/google-tag.js',
                    body: true,
                }
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Amatic+SC',
                    type: 'text/css',
                }
            ]
        }
    },
    sitemap: {
        hostname: 'https://jasu.digital',
      },
    plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
    modules: [
        '@vueuse/nuxt',
        '@unocss/nuxt',
        'unplugin-icons/nuxt',
        'nuxt-simple-sitemap',
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
                    // Amatic SC:ital,wght@0,400;0,700;1,400;1,700

                },
            }),
            presetForms(),

        ],

    },
})
