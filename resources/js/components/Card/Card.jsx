import clsx from "clsx";

function Card(props) {
    const { className = "bg-white", children } = props;
    return (
        <div
            {...props}
            className={clsx(
                className,
                "card flex flex-col justify-center rounded shadow-lg p-4"
            )}
        >
            {children}
        </div>
    );
}

export default Card;
