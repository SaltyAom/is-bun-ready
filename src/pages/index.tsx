import { Button } from '@mui/material'

import { CollapsibleTable } from '@components'

export default function Index() {
    return (
        <>
            <header className="flex flex-col gap-4 w-full max-w-4xl mx-auto pt-24">
                <figure className="w-24 h-24 mx-auto">
                    <img
                        className="object-contain object-center"
                        src="/bun.svg"
                        alt="Bun icon"
                    />
                </figure>
                <h1 className="text-5xl text-gray-700 font-semibold text-center">
                    Is Bun ready?
                </h1>
                <h2 className="text-xl text-gray-500 text-center">
                    Community guide for tracking Bun supports library /
                    framework
                </h2>
                <h6 className="text-center text-gray-500 mt-4">
                    Not find what you&apos;re looking for?{' '}
                    <Button href="https://github.com/saltyaom/is-bun-ready">
                        Add one
                    </Button>
                </h6>
            </header>
            <main className="flex flex-col gap-3 w-full max-w-4xl mx-auto my-12">
                <CollapsibleTable />
                <p className="my-4 leading-relaxed">
                    ✅ Fully compatible
                    <br />
                    ⚠️ Partial support, not all feature might work
                    <br />
                    🚫 Not working
                </p>
            </main>
        </>
    )
}
