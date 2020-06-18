import React, {Component} from 'react';
import Title from "../global/Title";

class Default extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="mt-5">
                    <Title name="404 " title="Error"/>
                    <h1 className="text-center text-danger">Page Not Found!</h1>
                </div>
            </React.Fragment>
        );
    }
}

export default Default;