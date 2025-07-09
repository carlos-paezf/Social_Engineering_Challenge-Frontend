import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoaderSpinner } from '../components/LoaderSpinner';
import { FailureChallengePage } from '../pages/FailureChallengePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { SuccessChallengePage } from '../pages/SuccessChallengePage';
import { ProtectedRoute } from './ProtectedRoute';


const CluesPage = lazy( () => import( "../pages/CluesPage" ) );
const HomePage = lazy( () => import( "../pages/HomePage" ) );
const LeaderboardPage = lazy( () => import( "../pages/LeaderboardPage" ) );
const LoginPage = lazy( () => import( "../pages/LoginPage" ) );


const router = createBrowserRouter( [
    {
        path: '/', element: (
            <Suspense fallback={ <LoaderSpinner message="Cargando inicio..." className="min-h-screen" size="lg" /> }>
                <HomePage />
            </Suspense>
        )
    },
    {
        path: '/hints', element: (
            <Suspense fallback={ <LoaderSpinner message="Cargando pistas..." className="min-h-screen" size="lg" /> }>
                <CluesPage />
            </Suspense>
        )
    },
    {
        path: '/login', element: (
            <Suspense fallback={ <LoaderSpinner message="Preparando acceso..." className="min-h-screen" size="lg" /> }>
                <LoginPage />
            </Suspense>
        )
    },
    {
        path: '/ranking', element: (
            <Suspense fallback={ <LoaderSpinner message="Cargando ranking..." className="min-h-screen" size="lg" /> }>
                <LeaderboardPage />
            </Suspense>
        )
    },
    {
        path: "/success-challenge",
        element: (
            <Suspense fallback={ <LoaderSpinner message='Validando resultado...' className="min-h-screen" size="lg" /> }>
                <ProtectedRoute>
                    <SuccessChallengePage />
                </ProtectedRoute>
            </Suspense>
        )
    },
    {
        path: "/failure-challenge",
        element: (
            <Suspense fallback={ <LoaderSpinner message='Evaluando resultado...' className="min-h-screen" size="lg" /> }>
                <ProtectedRoute>
                    <FailureChallengePage />
                </ProtectedRoute>
            </Suspense>
        )
    },
    {
        path: '*', element: ( <NotFoundPage /> )
    }
] );


export const AppRoutes = () => <RouterProvider router={ router } />;
