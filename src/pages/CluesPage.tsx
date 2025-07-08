import { CluesFeed } from '../features/clues/CluesFeed';
import { CluesFooter } from '../features/clues/CluesFooter';
import { CluesHeader } from '../features/clues/CluesHeader';
import { MainLayout } from '../layout/MainLayout';


export const CluesPage = () => {
    return (
        <MainLayout>
            <CluesHeader />
            <CluesFeed />
            <CluesFooter />
        </MainLayout>
    );
};
