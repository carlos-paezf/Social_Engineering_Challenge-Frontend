import { useState, type FormEvent } from "react";
import { useCluesStore } from "../hooks/useCluesStore";
import { SimpleLayout } from "../layout/SimpleLayout";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const markLoginSuccess = useCluesStore( ( state ) => state.markLoginSuccess );
    const markLoginFailure = useCluesStore( ( state ) => state.markLoginFailure );

    const [ email ] = useState( "" );
    const [ correctEmail ] = useState( "" );
    const [ password ] = useState( "" );
    const [ correctPassword ] = useState( "" );

    const navigate = useNavigate();

    const handleSubmit = ( e: FormEvent ) => {
        e.preventDefault();

        if ( email === correctEmail && password === correctPassword ) {
            markLoginSuccess();
            navigate( "success-challenge" );
        } else {
            markLoginFailure();
            navigate( "/failure-challenge" );
        }

        navigate( "/resultado" );
    };

    return (
        <SimpleLayout>
            <h2>Login Page</h2>
        </SimpleLayout>
    );
};


export default LoginPage;