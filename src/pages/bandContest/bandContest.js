import BandContest from './BandContest.svelte'

import {Analytics} from '../../config/firebase';
import {logEvent} from "firebase/analytics";

const bandContest = new BandContest({
    target: document.body
})
logEvent(Analytics, 'band_contest_opened');

export default bandContest