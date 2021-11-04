import Document, { Html, Main, NextScript } from 'next/document';
import Head from 'next/head';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <script src='https://kit.fontawesome.com/433667d0ds.js' crossOrigin="anonymous" />
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }

}

export default MyDocument;