import Home from './Home.svelte'
import {logEvent} from "firebase/analytics";
import {Analytics} from "../../config/firebase";


const home = new Home({
    target: document.body
})

logEvent(Analytics,'home_opened');

export default home