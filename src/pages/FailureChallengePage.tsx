import { useCluesStore } from "../store/useCluesStore";


export const FailureChallengePage = () => {
    const failedAttempts = useCluesStore( ( s ) => s.failedAttempts );

    return (
        <div className="text-center max-w-xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold text-red-600 mb-4">¡Ups! No lograste el acceso</h1>
            <p className="text-lg text-gray-700 mb-6">
                Pero no te preocupes, este reto no es fácil. Ya has intentado <strong>{ failedAttempts }</strong> { failedAttempts === 1 ? "vez" : "veces" }.
            </p>
            <p className="text-gray-600">
                Revisa las pistas y vuelve a intentarlo. ¡Tú puedes!
            </p>
        </div>
    );
};
