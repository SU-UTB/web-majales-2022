import NewsFeed from './NewsFeed.svelte'

import {Analytics} from '../../config/firebase';
import {logEvent} from "firebase/analytics";

const newsFeed = new NewsFeed({
    target: document.body
})

logEvent(Analytics,'news_opened');
export default newsFeed