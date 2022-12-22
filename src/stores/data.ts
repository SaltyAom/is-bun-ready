import { Item } from '@models'

export const symbol: Record<Item['supports'], string> = {
    full: '✅',
    partial: '⚠️',
    none: '⛔️'
}

export const data: Item[] = [
    {
        name: 'Express',
        type: 'web server',
        supports: 'partial',
        lastUpdate: '22 Dec 2022',
        bunVersion: '0.2.1',
        detail: `Work but not fully optimized yet, see [Bun HTTP Benchmark](https://github.com/SaltyAom/bun-http-framework-benchmark) for web framework benchmark.`,
        link: 'https://github.com/expressjs/express'
    },
    {
        name: 'Fastify',
        type: 'web server',
        supports: 'none',
        lastUpdate: '22 Dec 2022',
        bunVersion: '-',
        link: 'https://github.com/fastify/fastify'
    },
    {
        name: 'Nestjs',
        type: 'web server',
        supports: 'none',
        lastUpdate: '22 Dec 2022',
        bunVersion: '-',
        link: 'https://github.com/nestjs/nest',
        detail: `You can track Nestjs supports at [Bun#1641](https://github.com/oven-sh/bun/issues/1641)`
    },
    {
        name: 'Hono',
        type: 'web server',
        supports: 'full',
        lastUpdate: '22 Dec 2022',
        bunVersion: '0.1.10',
        detail: `Some plugin like [serve-static](https://https://honojs.dev/docs/builtin-middleware/serve-static/) and [JWT](https://honojs.dev/docs/builtin-middleware/jwt/) doesn't work with Bun yet.`,
        link: 'https://github.com/honojs/hono'
    },
    {
        name: 'Elysia',
        type: 'web server',
        supports: 'full',
        lastUpdate: '22 Dec 2022',
        bunVersion: '0.1.10',
        link: 'https://github.com/elysiajs/elysia'
    },
    {
        name: 'React',
        type: 'frontend',
        supports: 'full',
        lastUpdate: '22 Dec 2022',
        bunVersion: '0.2.1',
        link: 'https://github.com/facebook/react'
    },
    {
        name: 'Next.js',
        type: 'frontend',
        supports: 'partial',
        lastUpdate: '22 Dec 2022',
        bunVersion: '0.2.1',
        link: 'https://github.com/vercel/next.js'
    },
    {
        name: 'Svelte',
        type: 'frontend',
        supports: 'partial',
        lastUpdate: '22 Dec 2022',
        bunVersion: '0.1.11',
        link: 'https://github.com/sveltejs/svelte',
        detail: 'Work thanks to community driver, [Svelte Adapter Bun](https://github.com/gornostay25/svelte-adapter-bun)'
    },
    {
        name: 'Remix',
        type: 'frontend',
        supports: 'partial',
        lastUpdate: '22 Dec 2022',
        bunVersion: '0.2.1',
        link: 'https://github.com/sveltejs/svelte',
        detail: 'Work thanks to community driver, [Remix Bun](https://github.com/patlux/remix-bun)'
    },
    {
        name: 'Prisma',
        type: 'database',
        supports: 'none',
        lastUpdate: '22 Dec 2022',
        bunVersion: '-',
        link: 'https://github.com/prisma/prisma'
    },
    {
        name: 'node-postgres (pg)',
        type: 'database',
        supports: 'none',
        lastUpdate: '22 Dec 2022',
        bunVersion: '-',
        link: 'https://github.com/brianc/node-postgres'
    },
    {
        name: 'mongoose',
        type: 'database',
        supports: 'none',
        lastUpdate: '22 Dec 2022',
        bunVersion: '-',
        link: 'https://github.com/Automattic/mongoose'
    },
    {
        name: 'mongodb',
        type: 'database',
        supports: 'none',
        lastUpdate: '22 Dec 2022',
        bunVersion: '-',
        link: 'https://github.com/mongodb/node-mongodb-native'
    },
    {
        name: 'Firebase',
        type: 'database',
        supports: 'none',
        lastUpdate: '22 Dec 2022',
        bunVersion: '-',
        link: 'https://github.com/firebase/firebase-js-sdk'
    },
    {
        name: 'Supabase',
        type: 'database',
        supports: 'none',
        lastUpdate: '22 Dec 2022',
        bunVersion: '-',
        link: 'https://github.com/supabase/supabase-js'
    },
    {
        name: 'Jose',
        type: 'utility',
        supports: 'full',
        lastUpdate: '22 Dec 2022',
        bunVersion: '0.2.1',
        link: 'https://github.com/panva/jose'
    },
    {
        name: 'Lyra',
        type: 'utility',
        supports: 'full',
        lastUpdate: '22 Dec 2022',
        bunVersion: '0.2.1',
        link: 'https://github.com/lyrasearch/lyra'
    },
    {
        name: 'Cronner',
        type: 'utility',
        supports: 'full',
        lastUpdate: '22 Dec 2022',
        bunVersion: '0.2.1',
        link: 'https://github.com/hexagon/croner'
    },
    {
        name: 'Shumai',
        type: 'utility',
        supports: 'full',
        lastUpdate: '22 Dec 2022',
        bunVersion: '0.1.11',
        link: 'https://github.com/facebookresearch/shumai'
    }
]
