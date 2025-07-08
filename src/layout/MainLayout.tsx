import type { FC, ReactNode } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';


interface Props {
    children: ReactNode;
}


export const MainLayout: FC<Props> = ( { children } ) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flew-grow p-4 bg-gray-50">{ children }</main>
            <Footer />
        </div>
    );
};
