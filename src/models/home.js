import { extendObservable, action, useStrict } from 'mobx';

useStrict(true);

class Home {
    constructor() {
        extendObservable(this, {
            message: '[this is message from home model]'
        })
    }
}

export default new Home;