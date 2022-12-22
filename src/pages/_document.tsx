/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class OpenerDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body id="body">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default OpenerDocument
