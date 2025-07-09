import type { FC, FormEvent } from "react";
import { LoaderSpinner } from "../../components/LoaderSpinner";

interface RegisterProps {
    handleSubmit: ( e: FormEvent ) => void;
    groupName: string;
    setGroupName: ( arg0: string ) => void;
    institution: string;
    setInstitution: ( arg0: string ) => void;
    leaderName: string;
    setLeaderName: ( arg0: string ) => void;
    memberCount: number;
    setMemberCount: ( arg0: number ) => void;
    error: string;
    isPending: boolean;
}


export const RegisterForm: FC<RegisterProps> = ( {
    handleSubmit, error, isPending,
    groupName, setGroupName,
    institution, setInstitution,
    leaderName, setLeaderName,
    memberCount, setMemberCount
} ) => {
    return (
        <form
            onSubmit={ handleSubmit }
            className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full space-y-6"
        >
            <div>
                <label className="block text-gray-700">Nombre del grupo</label>
                <input
                    type="text"
                    value={ groupName }
                    onChange={ ( e ) => setGroupName( e.target.value ) }
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 text-gray-800"
                    required
                />
            </div>

            <div>
                <label className="block text-gray-700">Institución educativa</label>
                <input
                    type="text"
                    value={ institution }
                    onChange={ ( e ) => setInstitution( e.target.value ) }
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 text-gray-800"
                    required
                />
            </div>

            <div>
                <label className="block text-gray-700">Nombre del líder</label>
                <input
                    type="text"
                    value={ leaderName }
                    onChange={ ( e ) => setLeaderName( e.target.value ) }
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 text-gray-800"
                    required
                />
            </div>

            <div>
                <label className="block text-gray-700">Cantidad de integrantes</label>
                <input
                    type="number"
                    value={ memberCount }
                    onChange={ ( e ) => setMemberCount( parseInt( e.target.value ) ) }
                    min={ 1 }
                    max={ 10 }
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 text-gray-800"
                    required
                />
            </div>

            <button
                type="submit"
                disabled={ isPending }
                className={ `w-full font-semibold py-2 px-4 rounded transition 
                            ${ isPending
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700" }
                        `}
            >
                Comenzar Reto
            </button>
            { isPending && <LoaderSpinner message="Verificando con el servidor..." className="py-4" size="sm" /> }
            { error && <p className="text-sm text-red-600 text-center">{ error }</p> }
        </form>
    );
};
