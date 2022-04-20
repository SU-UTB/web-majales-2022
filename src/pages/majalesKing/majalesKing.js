import MajalesKing from './MajalesKing.svelte'

import {Analytics} from '../../config/firebase';
import {logEvent} from "firebase/analytics";

const majalesKing = new MajalesKing({
    target: document.body
})

logEvent(Analytics, 'majales_king_opened');
export default majalesKing