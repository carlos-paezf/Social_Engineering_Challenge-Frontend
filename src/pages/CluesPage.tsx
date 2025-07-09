import { CluesFeed } from '../features/clues/CluesFeed';
import { CluesFooter } from '../features/clues/CluesFooter';
import { CluesHeader } from '../features/clues/CluesHeader';
import { MainLayout } from '../layout/MainLayout';


const CluesPage = () => {
    return (
        <MainLayout>
            <CluesHeader />
            <CluesFeed />
            <CluesFooter />
        </MainLayout>
    );
};


export default CluesPage;