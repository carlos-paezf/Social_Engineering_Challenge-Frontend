import type { FC } from "react";

interface LoaderSpinnerProps {
    message?: string,
    className?: string,
    size?: "sm" | "md" | "lg";
}

export const LoaderSpinner: FC<LoaderSpinnerProps> = ( { message = "Cargando...", className = "py-10", size = "md" } ) => {
    const sizeMap = {
        sm: "w-6 h-6 border-2",
        md: "w-10 h-10 border-4",
        lg: "w-14 h-14 border-[6px]",
    };

    return (
        <div className={ `flex flex-col items-center justify-center ${ className }` }>
            <div className={ `rounded-full border-t-transparent border-blue-500 animate-spin ${ sizeMap[ size ] } border-solid` } />
            { message && <p className="mt-3 text-sm text-gray-600 text-center">{ message }</p> }
        </div>
    );
};
