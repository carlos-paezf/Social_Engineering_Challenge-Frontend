import type { FC, FormEvent } from "react";
import { LoaderSpinner } from "../../components/LoaderSpinner";


interface LoginProps {
    handleSubmit: ( e: FormEvent ) => void;
    email: string;
    setEmail: ( arg0: string ) => void;
    password: string;
    setPassword: ( arg0: string ) => void;
    error: string;
    isPending: boolean;
}


export const LoginForm: FC<LoginProps> = ( { handleSubmit, email, setEmail, password, setPassword, error, isPending } ) => {
    return (
        <form
            onSubmit={ handleSubmit }
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 max-w-sm w-full"
        >
            <label className="block mb-4">
                <span className="text-gray-700">Correo electrónico</span>
                <input
                    type="email"
                    value={ email }
                    onChange={ ( e ) => setEmail( e.target.value ) }
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-800"
                />
            </label>

            <label className="block mb-6">
                <span className="text-gray-700">Contraseña</span>
                <input
                    type="password"
                    value={ password }
                    onChange={ ( e ) => setPassword( e.target.value ) }
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-800"
                />
            </label>

            {
                error && <p className="text-sm text-red-600 mb-4 text-center">{ error }</p>
            }

            <button
                type="submit"
                disabled={ isPending }
                className={ `w-full font-semibold py-2 px-4 rounded transition 
                            ${ isPending
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700" }
                        `}
            >
                Ingresar
            </button>

            { isPending && <LoaderSpinner message="Verificando con el servidor..." className="py-4" size="sm" /> }
        </form>
    );
};
