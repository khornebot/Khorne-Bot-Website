import { useSession } from "next-auth/react";
import Image from "next/image";

export const DiscordPFP = () => {
    const { data: sessionData } = useSession();
    return sessionData?.user.image ? (
        <Image
            src={sessionData.user.image}
            alt="Discord profile picture"
            width={64}
            height={64}
            className="rounded-lg"
        />
    ) : (
        <></>
    );
};
