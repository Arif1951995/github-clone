import React from 'react'
import FormComponent from './FormComponent'
import Intro from './Intro'

const GetStarted = () => {
    return (
        <div  className="GetStarted">
            <Intro 
            heading="Built for developers"
            par="GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside 40 million developers." />
            <FormComponent />
        </div>
    );
}


export default GetStarted