import { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { LoaderSpinner } from '../components/LoaderSpinner';
import { FailureChallengePage } from '../pages/FailureChallengePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { SuccessChallengePage } from '../pages/SuccessChallengePage';
import { ProtectedRoute } from './ProtectedRoute';


const CluesPage = lazy( () => import( "../pages/CluesPage" ) );
const HomePage = lazy( () => import( "../pages/HomePage" ) );
const LeaderboardPage = lazy( () => import( "../pages/LeaderboardPage" ) );
const LoginPage = lazy( () => import( "../pages/LoginPage" ) );
const RegisterPage = lazy( () => import( "../pages/RegisterPage" ) );


// const router = createBrowserRouter( [
//     {
//         path: '/', element: (
//             <Suspense fallback={ <LoaderSpinner message="Cargando inicio..." className="min-h-screen" size="lg" /> }>
//                 <HomePage />
//             </Suspense>
//         )
//     },
//     {
//         path: '/register', element: (
//             <Suspense fallback={ <LoaderSpinner message="Cargando registro..." className="min-h-screen" size="lg" /> }>
//                 <RegisterPage />
//             </Suspense>
//         )
//     },
//     {
//         path: '/hints', element: (
//             <Suspense fallback={ <LoaderSpinner message="Cargando pistas..." className="min-h-screen" size="lg" /> }>
//                 <CluesPage />
//             </Suspense>
//         )
//     },
//     {
//         path: '/login', element: (
//             <Suspense fallback={ <LoaderSpinner message="Preparando acceso..." className="min-h-screen" size="lg" /> }>
//                 <LoginPage />
//             </Suspense>
//         )
//     },
//     {
//         path: '/ranking', element: (
//             <Suspense fallback={ <LoaderSpinner message="Cargando ranking..." className="min-h-screen" size="lg" /> }>
//                 <LeaderboardPage />
//             </Suspense>
//         )
//     },
//     {
//         path: "/success-challenge",
//         element: (
//             <Suspense fallback={ <LoaderSpinner message='Validando resultado...' className="min-h-screen" size="lg" /> }>
//                 <ProtectedRoute condition='success'>
//                     <SuccessChallengePage />
//                 </ProtectedRoute>
//             </Suspense>
//         )
//     },
//     {
//         path: "/failure-challenge",
//         element: (
//             <Suspense fallback={ <LoaderSpinner message='Evaluando resultado...' className="min-h-screen" size="lg" /> }>
//                 <ProtectedRoute condition='failed'>
//                     <FailureChallengePage />
//                 </ProtectedRoute>
//             </Suspense>
//         )
//     },
//     {
//         path: '*', element: ( <NotFoundPage /> )
//     }
// ] );


export const AppRoutes = () => (
    <HashRouter>
        <Suspense fallback={ <LoaderSpinner message="Cargando..." className="min-h-screen" size="lg" /> }>
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/register" element={ <RegisterPage /> } />
                <Route path="/hints" element={ <CluesPage /> } />
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="/ranking" element={ <LeaderboardPage /> } />
                <Route
                    path="/success-challenge"
                    element={
                        <ProtectedRoute condition="success">
                            <SuccessChallengePage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/failure-challenge"
                    element={
                        <ProtectedRoute condition="failed">
                            <FailureChallengePage />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={ <NotFoundPage /> } />
            </Routes>
        </Suspense>
    </HashRouter>
);
