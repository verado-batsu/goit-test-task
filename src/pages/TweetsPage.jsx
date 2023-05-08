import { BackButton } from '../components/BackButton/BackButton';
import Filter from '../components/Filter/Filter';
import { Tweets } from '../components/Tweets/Tweets';

export default function TweetsPage() {
    return (
        <>
            <BackButton />
            <Filter />
            <Tweets />
        </>
    );
}
