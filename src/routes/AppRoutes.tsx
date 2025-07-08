import { Route, Routes } from 'react-router-dom';
import { CluesPage } from '../pages/CluesPage';
import { HomePage } from '../pages/HomePage';
import { LeaderboardPage } from '../pages/LeaderboardPage';
import { LoginPage } from '../pages/LoginPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { SuccessPage } from '../pages/SuccessPage';


export const AppRoutes = () => (
    <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/hints" element={ <CluesPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/ranking" element={ <LeaderboardPage /> } />
        <Route path="/win" element={ <SuccessPage /> } />
        <Route path="*" element={ <NotFoundPage /> } />
    </Routes>
);
