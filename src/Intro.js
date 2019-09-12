import React from 'react'

const Intro = props => {
    return (
        <div>
            <div >
                <p>{props.title}</p>
                    <h1>
                    {props.heading}
        
                    </h1>
                    <p>
                        {props.par}
                    </p>
                    

            </div>
        </div>
    );
}

export default Intro