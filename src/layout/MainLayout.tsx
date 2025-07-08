import type { FC, ReactNode } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import './layout.css';

interface Props {
    children: ReactNode;
}


export const MainLayout: FC<Props> = ( { children } ) => {
    return (
        <div className="flex flex-col h-screen">
            <Header />

            <main className="main-layout flew-1 overflow-y-auto p-4 bg-gray-50">
                { children }
            </main>

            <Footer />
        </div>
    );
};
