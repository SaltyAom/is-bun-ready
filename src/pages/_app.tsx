import type { AppProps } from 'next/app'

import OpenGraph from '@shared/opengraph'

import '@styles/global.sass'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <OpenGraph
                canonical="https://is-bun-ready.pages.dev"
                title="Is Bun Ready Yet"
                description="Community guide for tracking Bun supports library /
                    framework"
                image={{
                    src: '/cover.png',
                    width: 1920,
                    height: 1080
                }}
                icon="/bun.svg"
            />
            <Component {...pageProps} />
        </>
    )
}
