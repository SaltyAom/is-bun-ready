import { Item } from '@models'

export const symbol: Record<Item['supports'], string> = {
    full: '✅',
    partial: '⚠️',
    none: '⛔️'
}

export const data: Item[] = [
    {
        name: 'Express',
        type: 'server',
        supports: 'partial',
        lastUpdate: '22 Dec 2022',
        bunVersion: '0.2.1',
        detail: `Body parser, and querystring doesn't work yet, slower compared to native Bun framework, see [Bun HTTP Benchmark](https://github.com/SaltyAom/bun-http-framework-benchmark).\n\n
It's recommended to use native Bun framework like [Elysia](https://github.com/elysiajs/elysia) or [Hono](https://github.com/honojs/hono) for now instead.
`,
        link: 'https://github.com/expressjs/express'
    },
    {
        name: 'Fastify',
        type: 'server',
        supports: 'none',
        lastUpdate: '22 Dec 2022',
        bunVersion: '-',
        link: 'https://github.com/fastify/fastify'
    },
    {
        name: 'Nestjs',
        type: 'server',
        supports: 'none',
        lastUpdate: '22 Dec 2022',
        bunVersion: '-',
        link: 'https://github.com/nestjs/nest',
        detail: `You can track Nestjs supports at [Bun#1641](https://github.com/oven-sh/bun/issues/1641)`
    },
    {
        name: 'Koa',
        type: 'server',
        supports: 'partial',
        lastUpdate: '24 Dec 2022',
        bunVersion: '0.4.0',
        detail: `Body parser, and querystring doesn't work yet, slower compared to native Bun framework, see [Bun HTTP Benchmark](https://github.com/SaltyAom/bun-http-framework-benchmark).\n\n
It's recommended to use native Bun framework like [Elysia](https://github.com/elysiajs/elysia) or [Hono](https://github.com/honojs/hono) for now instead.
`,
        link: 'https://github.com/expressjs/express'
    },
    {
        name: 'Hono',
        type: 'server',
        supports: 'full',
        lastUpdate: '22 Dec 2022',
        bunVersion: '0.1.10',
        detail: `Some plugin like [serve-static](https://https://honojs.dev/docs/builtin-middleware/serve-static/) and [JWT](https://honojs.dev/docs/builtin-middleware/jwt/) doesn't work with Bun yet.`,
        link: 'https://github.com/honojs/hono'
    },
    {
        name: 'Elysia',
        type: 'server',
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
        name: 'Nextjs',
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
        link: 'https://github.com/remix-run',
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
        name: 'Postgres (pg)',
        type: 'database',
        supports: 'none',
        lastUpdate: '22 Dec 2022',
        bunVersion: '-',
        link: 'https://github.com/brianc/node-postgres'
    },
    {
        name: 'Mongoose',
        type: 'database',
        supports: 'none',
        lastUpdate: '22 Dec 2022',
        bunVersion: '-',
        link: 'https://github.com/Automattic/mongoose'
    },
    {
        name: 'MongoDB',
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
        name: 'Cassandra',
        type: 'database',
        supports: 'none',
        lastUpdate: '24 Dec 2022',
        bunVersion: '-',
        link: 'https://github.com/datastax/nodejs-driver'
    },
    {
        name: 'ScyllaDB',
        type: 'database',
        supports: 'none',
        lastUpdate: '24 Dec 2022',
        bunVersion: '-',
        link: 'https://github.com/datastax/nodejs-driver',
        detail: 'ScyllaDB use same driver as [Cassandra](https://github.com/datastax/nodejs-driver)'
    },
    {
        name: 'GraphQL Yoga',
        type: 'utility',
        supports: 'full',
        lastUpdate: '24 Dec 2022',
        bunVersion: '0.2.1',
        link: 'https://github.com/dotansimha/graphql-yoga'
    },
    {
        name: 'GraphQL Mesh',
        type: 'utility',
        supports: 'full',
        lastUpdate: '24 Dec 2022',
        bunVersion: '0.2.1',
        link: 'https://github.com/urigo/graphql-mesh'
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
    },
    {
        name: 'Windows',
        type: 'others',
        supports: 'none',
        lastUpdate: '24 Dec 2022',
        bunVersion: '-',
        link: 'https://www.microsoft.com/en-us/windows',
        detail: `You can track Windows supports at [Bun#43](https://github.com/oven-sh/bun/issues/43)`
    },
    {
        name: 'MacOS',
        type: 'others',
        supports: 'full',
        lastUpdate: '24 Dec 2022',
        bunVersion: '0.1.0',
        link: 'https://www.apple.com/macos'
    },
    {
        name: 'Linux',
        type: 'others',
        supports: 'full',
        lastUpdate: '24 Dec 2022',
        bunVersion: '0.1.0',
        link: 'https://en.wikipedia.org/wiki/Linux'
    }
]
