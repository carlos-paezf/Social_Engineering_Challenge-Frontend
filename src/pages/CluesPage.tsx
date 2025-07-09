import { useEffect } from 'react';
import { CluesFeed } from '../features/clues/CluesFeed';
import { CluesFooter } from '../features/clues/CluesFooter';
import { CluesHeader } from '../features/clues/CluesHeader';
import { MainLayout } from '../layout/MainLayout';
import { useCluesStore } from '../store/useCluesStore';
import { Timer } from '../components/Timer';


const CluesPage = () => {
    const startClock = useCluesStore( ( state ) => state.startClock );
    const startTime = useCluesStore( ( state ) => state.startTime );

    useEffect( () => {
        startClock();
    }, [ startClock ] );

    return (
        <MainLayout>
            <Timer startTime={ startTime ?? Date.now() } label="⏱ Tiempo:" />
            <CluesHeader />
            <CluesFeed />
            <CluesFooter />
        </MainLayout>
    );
};


export default CluesPage;