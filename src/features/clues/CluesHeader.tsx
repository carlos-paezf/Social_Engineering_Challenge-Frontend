export const CluesHeader = () => {
    return (
        <div className="w-full max-w-2xl mx-auto px-4 mb-5 space-y-2 text-center">
            <h2 className="text-2xl font-bold text-gray-800">🕵️ Feed del perfil público</h2>
            <p className="text-sm text-gray-600">
                Las publicaciones pueden parecer inofensivas… hasta que las analizas con mentalidad hacker.
            </p>
            <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 p-2 rounded-md text-sm">
                Consejo: anota lo que veas sospechoso. Fechas, lugares, nombres o emojis pueden ser pistas clave.
            </div>
        </div>
    );
};
