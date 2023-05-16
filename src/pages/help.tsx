import { type NextPage } from "next";
import Head from "next/head";
import { Container } from "~/components/Container";
import { Layout } from "~/components/Layout";

const Help: NextPage = () => {
    return (
        <>
            <Head>
                <title>Khorne Bot</title>
            </Head>

            <Layout>
                <Container>
                    <h1 className="text-2xl">Help</h1>
                    {/* TODO */}
                    <p>TODO</p>
                </Container>
            </Layout>
        </>
    );
};

export default Help;
