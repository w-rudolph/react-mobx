import { observer, inject } from 'mobx-react';

const mapStoreToProps = ({ store }) => {
    return {
        topic: store.topic
    };
};

@inject(mapStoreToProps) @observer
class Topics extends React.Component {
    render() {
        const topic = this.props.topic;
        const items = topic.items;
        return (
            <div>
                <div>Topics page {topic.message}</div>
                <button onClick={() => topic.getTopics()}>get items</button>
                <button onClick={() => topic.clearTopics()}>clear items</button>
                {items.map((item, index) => (
                    <div key={index}>{item.title}</div>
                ))}
            </div>
        );
    }
}

export default Topics;