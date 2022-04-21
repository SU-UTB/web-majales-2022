import Lineup from './Lineup.svelte'

import {Analytics} from '../../config/firebase';
import {logEvent} from "firebase/analytics";

const lineup = new Lineup({
    target: document.body
})

logEvent(Analytics, 'lineup_opened');
export default lineup