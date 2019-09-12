import React from 'react'
import Intro from './Intro'

const CodeSecurity = () => {
    return (
        <div className="CodeSecurity">
            <div>
            <Intro
            heading="Code security"
            par="Prevent problems before they happen. Protected branches, signed commits, and required status checks protect your work and help you maintain a high standard for your code."
            />
            <Intro
            heading="Access controlled"
            par="Prevent problems before they happen. Protected branches, signed commits, and required status checks protect your work and help you maintain a high standard for your code."
            />

            </div>
            <img src="https://github.githubassets.com/images/modules/site/home-illo-business.png" />

        </div>
    );
}

export default CodeSecurity