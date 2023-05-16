import { Head, Html, NextScript, Main } from "next/document";

const Document = () => {
    return (
        <Html>
            <Head>
                <meta
                    name="description"
                    content="Official homepage of Khorne Bot, the Discord kitchen sink bot by Khorne."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
