import Head from 'next/head'
import { useRouter } from 'next/router'

import type { OpenGraphComponent } from './types'

// eslint-disable-next-line react/function-component-definition
const OpenGraph: OpenGraphComponent = ({
    canonical,
    title,
    alternativeTitle = [],
    description,
    author = '',
    icon,
    image = {
        width: 1920,
        height: 1080
    },
    name = title,
    twitterDevAccount = '@SaltyAom'
}) => {
    let { asPath = '/' } = useRouter() ?? { asPath: '/' }

    return (
        <Head>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="author" content={author} />
            <link rel="icon" href={icon} />
            <link rel="shortcut icon" href={icon} />
            <link rel="canonical" href={`${canonical}${asPath}`} />
            <meta
                name="keyword"
                content={`${title},${
                    alternativeTitle.length ? alternativeTitle.join(',') : ''
                }${author}`}
            />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="article:author" content={author} />
            <meta property="og:site_name" content={name} />
            <meta property="og:image" content={`${canonical}${image.src}`} />
            <meta property="og:image:width" content={image.width.toString()} />
            <meta
                property="og:image:height"
                content={image.height.toString()}
            />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${canonical}${asPath}`} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:site" content={twitterDevAccount} />
            <meta name="twitter:image" content={`${canonical}/${image.src}`} />
            <meta name="twitter:creator" content={twitterDevAccount} />
        </Head>
    )
}

export default OpenGraph
