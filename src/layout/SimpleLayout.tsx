import type { FC, ReactNode } from "react";
import { Footer } from '../components/Footer';

import './layout.css';

interface Props {
    children: ReactNode;
}


export const SimpleLayout: FC<Props> = ( { children } ) => {
    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <main className="main-layout">
                { children }
            </main>

            <Footer />
        </div>
    );
};