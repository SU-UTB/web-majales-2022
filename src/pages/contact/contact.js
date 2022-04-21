import Contact from './Contact.svelte'

import {Analytics} from '../../config/firebase';
import {logEvent} from "firebase/analytics";

const contact = new Contact({
    target: document.body
})

logEvent(Analytics, 'contact_opened');
export default contact