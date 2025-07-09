export const LoaderSpinner = ( { message = "Cargando..." }: { message?: string; } ) => {
    return (
        <div className="flex flex-col items-center justify-center py-10 text-gray-600 animate-fade-in">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <p className="mt-4 text-sm">{ message }</p>
        </div>
    );
};
