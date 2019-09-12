import React from 'react'
import Intro from './Intro'

const Robot = () => {
    return (
        <section className="Robot">
            <img style={{height: '100vh', width: '40%;'}} src="https://github.githubassets.com/images/modules/site/home-illo-team.svg" />
        <div>
        <Intro
        heading="Write better code"
        par="On GitHub, lightweight code review tools are built into every pull request. Your team can create review processes that improve the quality of your code and fit neatly into your workflow."
        />
         <Intro
        heading="Manage your chaos"
        par="Take a deep breath. On GitHub, project management happens in issues and project boards, right alongside your code. All you have to do is mention a teammate to get them involved. "
        />
         <Intro
        heading="Find the Right tools"
        par="Browse and buy apps from GitHub Marketplace with your GitHub account. Find the tools you like or discover new favorites—then start using them in minutes. "
        />

        </div>
        </section>
    );
}

export default Robot