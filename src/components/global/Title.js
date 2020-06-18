import React from 'react';

const Title = (props) => {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center">
                <h1 className="text-capitalize font-weight-bold text-title">
                    {props.name} <strong className="text-blue">{props.title}</strong>
                </h1>
            </div>
        </div>
    );
};

export default Title;