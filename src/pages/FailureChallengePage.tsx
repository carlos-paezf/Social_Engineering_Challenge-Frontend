import { Link } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { useCluesStore } from "../store/useCluesStore";


export const FailureChallengePage = () => {
    const failedAttempts = useCluesStore( ( s ) => s.failedAttempts );

    return (
        <MainLayout>
            <div className="h-screen flex flex-col items-center justify-center bg-red-100 text-white px-4">
                <h1 className="text-3xl font-bold text-red-600 mb-4">¡Ups! No lograste el acceso</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Pero no te preocupes, este reto no es fácil. Ya has intentado <strong>{ failedAttempts }</strong> { failedAttempts === 1 ? "vez" : "veces" }.
                </p>
                <p className="text-gray-600">
                    Revisa las pistas y vuelve a intentarlo. ¡Tú puedes!
                </p>

                <Link to="/hints">
                    <button className="w-full bg-green-600 hover:bg-green-800 text-white font-semibold py-3 px-4 rounded-xl transition mt-5">
                        💡 Ver Pistas
                    </button>
                </Link>
            </div>
        </MainLayout>
    );
};
