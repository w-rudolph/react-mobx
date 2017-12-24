import { observer, inject } from 'mobx-react';

const mapStoreToProps = ({ store }) => {
    return {
        about: store.about
    };
};

@inject(mapStoreToProps) @observer
class About extends React.Component {
    render() {
        const about = this.props.about;
        return (
            <div>
                <div>About page: {about.message}</div>
            </div>
        );
    }
}

export default About;