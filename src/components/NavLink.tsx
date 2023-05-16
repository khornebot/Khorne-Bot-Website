import Link, { type LinkProps } from "next/link";

export const NavLink = (props: React.PropsWithChildren & LinkProps) => {
    return (
        <Link
            href={props.href}
            className="items-center rounded-xl px-4 py-5 transition-colors hover:bg-white/10 hover:text-white"
        >
            {props.children}
        </Link>
    );
};
