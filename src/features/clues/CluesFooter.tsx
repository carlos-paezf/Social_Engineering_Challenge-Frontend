import { Link } from "react-router-dom";
import { useCluesStore } from '../../store/useCluesStore';


const REQUIRED_VIEWS = 3;

export const CluesFooter = () => {
    const totalViewed = useCluesStore( ( state ) => state.viewedHints ).length;

    return (
        <div className="w-full max-w-2xl mx-auto px-4 mt-8 text-center text-sm text-gray-600">
            <p className="mb-3 italic">
                ¿Has detectado patrones, nombres o fechas sospechosas? Puede que estés más cerca de descubrir la contraseña de acceso.
            </p>


            {
                totalViewed >= REQUIRED_VIEWS
                    ? ( <Link to="/login">
                        <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-md transition">
                            🔐 Intentar acceder al perfil
                        </button>
                    </Link> )

                    : ( <p className="mb-3 italic">
                        Has analizado <strong>{ totalViewed }</strong> pistas. ¡Sigue observando!
                    </p> )
            }
        </div>
    );
};
