import Link from "next/link";

export const BotInviteButton = () => {
    return (
        <Link
            className={
                "rounded-full bg-white/30 p-4 text-center text-xl text-gray-100 transition-colors hover:bg-white/40"
            }
            href="https://discord.com/api/oauth2/authorize?client_id=778741121613561856&permissions=274948508736&scope=bot"
        >
            Invite me!
        </Link>
    );
};
