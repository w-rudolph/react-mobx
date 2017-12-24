import { extendObservable, observable, action, runInAction, useStrict } from 'mobx';

useStrict(true);

class Topics {
    @observable message = '[this is message from topics model]';
    @observable items = [];

    @action('update topic items!') getTopics() {
        this.items = this.items.concat([{ title: 'Topic1' }, { title: 'Topic2' }]);
    }
    @action("clear topics async") async clearTopics() {
        await 1;
        runInAction('clear topics - callback', () => {
            this.items = [];
        });
    }
}

export default new Topics;