import clsx from "clsx";

function Container(props) {
    const { className } = props;
    return (
        <div
            {...props}
            className={clsx(
                className,
                "container w-screen mx-auto place-content-center"
            )}
        ></div>
    );
}

export default Container;
