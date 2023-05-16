import { DiscordPFP } from "./DiscordPFP";
import { signIn, signOut, useSession } from "next-auth/react";

export const DiscordIdentifier = () => {
    const { data: sessionData } = useSession();

    return (
        <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white/20 bg-center p-3">
            <DiscordPFP />
            <p className="p-2">
                {sessionData ? (
                    <>Logged in as {sessionData?.user.name}</>
                ) : (
                    <>Not logged in</>
                )}
            </p>

            <button
                className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
                onClick={
                    sessionData ? () => void signOut() : () => void signIn()
                }
            >
                {sessionData ? "Sign out" : "Sign in"}
            </button>
        </div>
    );
};
