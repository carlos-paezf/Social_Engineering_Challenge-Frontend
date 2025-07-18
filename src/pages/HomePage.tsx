import { Link } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";


const HomePage = () => {
    return (
        <MainLayout>
            <div className="max-w-3xl mx-auto text-center space-y-6 my-auto">
                <h2 className="text-5xl font-bold text-gray-800">¡Bienvenido al Reto Hacker!</h2>

                <p className="text-lg text-gray-600">
                    Ponte en los zapatos de un hacker ético por un día. Usa tu ingenio, trabajo en equipo y las pistas
                    disponibles para descubrir la contraseña de un perfil... ¿Tu información está segura?
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <Link to="/register">
                        <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-xl transition">
                            🔐 Iniciar Reto
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

export default HomePage;