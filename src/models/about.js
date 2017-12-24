import { extendObservable, action, useStrict } from 'mobx';

useStrict(true);

class About {
    constructor() {
        extendObservable(this, {
            message: '[this is message from about model]'
        })
    }
}

export default new About;