export const Container = (props: React.PropsWithChildren) => {
    return (
        <div className="my-5 min-w-max max-w-xs bg-white/10 p-5 text-white md:mx-auto lg:max-w-4xl">
            {props.children}
        </div>
    );
};
