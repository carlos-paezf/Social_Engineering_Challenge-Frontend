import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterGroup } from "../api/useRegisterGroup";
import { RegisterForm } from "../features/auth/RegisterForm";
import { MainLayout } from "../layout/MainLayout";
import { useGameStore } from "../store/useGameStore";


const RegisterPage = () => {
    const [ groupName, setGroupName ] = useState( "" );
    const [ institution, setInstitution ] = useState( "" );
    const [ leaderName, setLeaderName ] = useState( "" );
    const [ memberCount, setMemberCount ] = useState( 2 );
    const [ error, setError ] = useState( "" );

    const navigate = useNavigate();
    const setGroupData = useGameStore( ( state ) => state.setGroupData );

    const { mutate: registerGroup, isPending } = useRegisterGroup();

    /**
     * The handleSubmit function in TypeScript React prevents default form submission, validates form
     * fields, sets group data, and navigates to a new page.
     * @param {FormEvent} e - FormEvent is a type that represents the event object for form elements in
     * TypeScript. In this case, the handleSubmit function takes a FormEvent parameter named e, which
     * is used to handle form submission events. The function prevents the default form submission
     * behavior, checks if certain fields are filled out, sets an error
     * @returns If any of the required fields (groupName, institution, leaderName, memberCount) are
     * missing or invalid, an error message "Todos los campos son obligatorios" is set and the function
     * returns without further processing. If all required fields are present and valid, the group data
     * is set with the provided values and the user is navigated to the "/hints" page.
     */
    const handleSubmit = ( e: FormEvent ) => {
        e.preventDefault();

        if ( !groupName || !institution || !leaderName || memberCount < 1 ) {
            setError( "Todos los campos son obligatorios" );
            return;
        }

        const groupData = { groupName, institution, leaderName, memberCount };

        setGroupData( groupData );

        registerGroup( groupData, {
            onSuccess: () => navigate( "/hints" ),
            onError: () => setError( "Hubo un problema al registrar el grupo" )
        } );
    };

    return (
        <MainLayout>
            <div className="h-screen flex flex-col items-center justify-center px-4">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-5">Registro del Grupo</h1>

                <RegisterForm
                    handleSubmit={ handleSubmit }
                    groupName={ groupName } setGroupName={ setGroupName }
                    institution={ institution } setInstitution={ setInstitution }
                    leaderName={ leaderName } setLeaderName={ setLeaderName }
                    memberCount={ memberCount } setMemberCount={ setMemberCount }
                    error={ error } isPending={ isPending }
                />
            </div>
        </MainLayout>
    );
};


export default RegisterPage;