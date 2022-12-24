# Is Bun Ready
A community guide for tracking Bun supports library / framework

## Contribute
To add more library:
- fork
- edit `src/stores/data.ts`
- submit PR

The data must follow the [type definition of Item](https://github.com/saltyaom/is-bun-ready/tree/main/src/models/index.ts) which consists of:
- name
    - Name of the library / framework
- type: 
    - Should be one of the following:
        - 'server'
        - 'frontend'
        - 'database'
        - 'utility'
        - 'others'
- supports:
    - Should be one of the following
        - 'full' - is fully supports Bun and should work without problems
        - 'partial' - can use with Bun but not ready for production, some feature is not available
        - 'none' - can't use with Bun yet
- lastUpdate
    - The date which add / edit the library / framework
- detail
    - Note or explanation of the current status
    - Can be Markdown
- link
    - Link to the repository / documentaion of the library / framework

Example:
The following is representation for Express:
```typescript
const data = [
    {
        name: 'Express',
        type: 'web server',
        supports: 'partial',
        lastUpdate: '22 Dec 2022',
        bunVersion: '0.2.1',
        detail: `Work but not fully optimized yet, see [Bun HTTP Benchmark](https://github.com/SaltyAom/bun-http-framework-benchmark) for web framework benchmark.`,
        link: 'https://github.com/expressjs/express'
    }
]
```
