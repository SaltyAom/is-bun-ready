export interface Item {
    name: string
    type: 'web server' | 'frontend' | 'database' | 'utility'
    supports: 'full' | 'partial' | 'none'
    lastUpdate: string
    detail?: string
    bunVersion: string
    link: string
}
