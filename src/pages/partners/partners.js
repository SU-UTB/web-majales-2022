import Partners from './Partners.svelte'

import {Analytics} from '../../config/firebase';
import {logEvent} from "firebase/analytics";

const partners = new Partners({
    target: document.body
})

logEvent(Analytics, 'partners_opened');
export default partners