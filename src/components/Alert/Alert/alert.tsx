import React from 'react';

const Alert = (props: any) => {

    const text: string = props.text.text

    return (
        <div>
            <h4>{text}</h4>
        </div>
    );
};

export default Alert;