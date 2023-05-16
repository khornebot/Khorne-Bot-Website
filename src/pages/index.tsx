import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";
import { Container } from "../components/Container";
import { Layout } from "~/components/Layout";
import { BotInviteButton } from "~/components/BotInviteButton";

const Home: NextPage = () => {
    const quotes = [
        `"Money is just numbers. Why can't we just put zeros in our bank accounts?" - Hri7566, 2022`,
        `"Losing my sanity? Nah I can't lose something I never had." - Khorne`
    ];

    return (
        <>
            <Head>
                <title>Khorne Bot</title>
            </Head>

            <Layout>
                <div className="pt-5 text-center text-3xl text-gray-200">
                    <p className="mb-3">
                        Welcome to Khorne Bot&apos;s official website!
                    </p>
                    <BotInviteButton />
                </div>
                <Container>
                    <div className="grid grid-cols-2 items-center justify-normal align-middle text-gray-200">
                        <p className="mb-10 mr-3">
                            Come here for support and updates on the latest
                            changes and bug fixes!
                        </p>
                        <p className="mb-10 ml-3">
                            Khorne Bot v5 coming soon! Khorne Bot is finally in
                            active development again.
                        </p>
                        <div
                            className="col-span-2 m-auto mb-5 content-center justify-center text-center align-middle"
                            style={{
                                backgroundColor: "#afafaf",
                                backgroundImage:
                                    "url(./Khorne-Bot-Full-Logo-3-PNG.png)",
                                backgroundSize: "contain",
                                width: "60vw",
                                height: "calc(60vw / 3)"
                            }}
                        />
                    </div>

                    {(() => {
                        let i = 0;
                        return quotes.map(q => {
                            i++;
                            return <p key={i}>{q}</p>;
                        });
                    })()}
                </Container>
            </Layout>
        </>
    );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//     const { data: sessionData } = useSession();

//     const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//         undefined, // no input
//         { enabled: sessionData?.user !== undefined }
//     );

//     return (
//         <div className="flex flex-col items-center justify-center gap-4">
//             <p className="text-center text-2xl text-white">
//                 {sessionData && (
//                     <span>Logged in as {sessionData.user?.name}</span>
//                 )}
//                 {secretMessage && <span> - {secretMessage}</span>}
//             </p>
//             <button
//                 className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//                 onClick={
//                     sessionData ? () => void signOut() : () => void signIn()
//                 }
//             >
//                 {sessionData ? "Sign out" : "Sign in"}
//             </button>
//         </div>
//     );
// };