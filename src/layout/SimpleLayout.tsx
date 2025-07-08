import type { FC, ReactNode } from "react";
import { Footer } from '../components/Footer';


interface Props {
    children: ReactNode;
}


export const SimpleLayout: FC<Props> = ( { children } ) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <main className="flex-grow flex items-center justify-content p-4">
                { children }
            </main>

            <Footer />
        </div>
    );
};