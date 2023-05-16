import { NavBar } from "./NavBar";

export const Layout = (props: React.PropsWithChildren) => {
    return (
        <>
            <main className="min-h-screen bg-red-800">
                <NavBar />
                <div id="content">{props.children}</div>
            </main>
        </>
    );
};
