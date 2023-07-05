import React, { useState } from 'react';

const Person = (props) => {
    const [clicks, setClicks] = useState(0)

    const buttonClick = () => {
        //age += 1;
        setClicks(clicks + 1);
    }

    const { firstName, lastName, age, hairColor } = props;
    return (
        <>
            <h1>
                {lastName}, {firstName}
            </h1>
            <p>
                Age: {age + clicks}
            </p>
            <p>
                Hair Color: {hairColor}
            </p>

            <button onClick={buttonClick}>Birthday Button for {firstName} {lastName}</button>

        </>
    );
}


export default Person;