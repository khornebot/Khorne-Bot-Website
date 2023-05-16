import Link from "next/link";
import Image from "next/image";
import { NavLink } from "./NavLink";

export const NavBar = () => {
    return (
        <nav className="bg-white/20 text-gray-200">
            <div className="mx-auto sm:max-w-6xl">
                <div className="flex items-center justify-between py-3">
                    <div>
                        <Link
                            href="/"
                            className="flex items-center justify-around"
                        >
                            <Image
                                src="/Khorne-Bot-Logo-WebP-Website.webp"
                                alt="Khorne Bot Logo"
                                width={64}
                                height={64}
                            />
                            <h1 className="mx-3 text-4xl">Khorne Bot</h1>
                        </Link>
                    </div>
                    <div className="items-center space-x-4 text-xl">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/help">Help</NavLink>
                        <NavLink href="https://discord.gg/NTM3ytnP2W">
                            Discord
                        </NavLink>
                        <NavLink href="/status">Status</NavLink>
                        <NavLink href="mailto:khornebot@gmail.com">
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};
