import { Link } from "react-router-dom";


export const Header = () => {
    return (
        <header className="bg-blue-1000 text-white px-20 p-4 flex justify-between items-center shadow-md">
            <h1 className="text-3xl font-bold">Reto Hacker</h1>
            <nav className="space-x-4">
                <Link to="/" className="hover:underline">Inicio</Link>
                <Link to="/ranking" className="hover:underline">Ranking</Link>
            </nav>
        </header>
    );
};
