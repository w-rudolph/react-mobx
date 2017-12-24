import { observer, inject } from 'mobx-react';

const mapStoreToProps = ({ store }) => {
    return {
        home: store.home
    };
};

@inject(mapStoreToProps) @observer
class Home extends React.Component {
    render() {
        const home = this.props.home;
        return (
            <div>
                <div>home page: {home.message}</div>
            </div>
        );
    }
}

export default Home;