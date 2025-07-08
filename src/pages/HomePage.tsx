import { Link } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";


export const HomePage = () => {
    return (
        <MainLayout>
            <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-5xl font-bold text-gray-800">¡Bienvenido al Reto Hacker!</h2>

                <p className="text-lg text-gray-600">
                    Ponte en los zapatos de un hacer ético por un día. Usa tu ingenio, trabajo en equipo y las pistas
                    disponibles para descubrir la contraseña de un perfil... ¡Antes de que se acabe el tiempo!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <Link to="/login">
                        <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-xl transition">
                            🔐 Iniciar Reto
                        </button>
                    </Link>

                    <Link to="/hints">
                        <button className="w-full bg-green-600 hover:bg-green-800 text-white font-semibold py-3 px-4 rounded-xl transition">
                            💡 Ver Pistas
                        </button>
                    </Link>

                    <Link to="/ranking">
                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition">
                            🏆 Ver Ranking
                        </button>
                    </Link>
                </div>
            </div>
        </MainLayout>
    );
};
