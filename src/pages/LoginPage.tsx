import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../api/useLoginAttempt";
import { LoginForm } from "../features/auth/LoginForm";
import { useCluesStore } from "../store/useCluesStore";
import { MainLayout } from "../layout/MainLayout";


const LoginPage = () => {
    const navigate = useNavigate();
    const { markLoginSuccess, markLoginFailure } = useCluesStore();

    const [ email, setEmail ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const [ error, setError ] = useState( "" );

    const { mutate: login, isPending } = useLogin();


    /**
     * The handleSubmit function in TypeScript React handles form submission for a login process, including
     * error handling and navigation based on the response.
     * @param {FormEvent} e - The `e` parameter in the `handleSubmit` function is of type `FormEvent`,
     * which is an event object representing a form submission event. In this case, the function is
     * preventing the default form submission behavior using `e.preventDefault()` and then handling the
     * form submission logic
     */
    const handleSubmit = ( e: FormEvent ) => {
        e.preventDefault();
        setError( "" );

        login(
            { email, password },
            {
                onSuccess: ( res ) => {
                    if ( res.success ) {
                        markLoginSuccess();
                        navigate( "/success-challenge" );
                    } else {
                        markLoginFailure();
                        setError( res.message || "Acceso Denegado" );
                        navigate( "/failure-challenge" );
                    }
                },
                onError: () => {
                    setError( "Error de conexión. Intenta nuevamente." );
                }
            }
        );
    };

    return (
        <MainLayout>
            <div className="h-screen flex flex-col items-center justify-center px-4">
                <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">Accede al sistema</h1>
                <LoginForm
                    handleSubmit={ handleSubmit }
                    email={ email }
                    setEmail={ setEmail }
                    password={ password }
                    setPassword={ setPassword }
                    error={ error }
                    isPending={ isPending }
                />
            </div>
        </MainLayout>
    );
};


export default LoginPage;