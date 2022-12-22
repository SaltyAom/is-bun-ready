import type { FunctionComponent } from 'react'

export interface OpenGraphProps {
	canonical: string
	title: string
	alternativeTitle?: string[]
	description: string
	author?: string
	icon: string
	image: {
		src: string
		width: number
		height: number
	}
	name?: string
	twitterDevAccount?: string
	id?: number
}

export type OpenGraphComponent = FunctionComponent<OpenGraphProps>
