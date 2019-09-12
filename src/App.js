import React from 'react';
import './App.css';
import NavbarComponent from "./NavbarComponent"
import GetStarted from './GetStarted';
import Enterprise from './Enterprise'
import IntroCard from './IntroCard'
import Businesses from './Businesses'
import Robot from './Robot'
import CardGallery from './CardGallery'
import CodeSecurity from './CodeSecurity'
import ImgGallery from './ImgGallery'
import DeveloperGallery from './DeveloperGallery'
import SignUpForm from './SignUpForm'



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <GetStarted />
        <Enterprise />
        <IntroCard
        color="white"
        backgroundImg="https://github.githubassets.com/images/modules/site/iso-ui.jpg"
        heading="Introducing GitHub Actions with CI/CD"
        par="Automate any workflow with GitHub Actions. See the latest updates announced at our HQ reveal."
        btnTxt="Check it out"
        />
        <Businesses />
        <IntroCard
        title="GitHub for teams"
        heading="A better way to work together"
        par="GitHub brings teams together to work through problems, move ideas forward, and learn from each other along the way."
        btnTxt="Sign Up for team"
        />
        <Robot />
        <CardGallery />
        <IntroCard
        title="Security and administration"
        heading="Your business needs, met"
        par="From flexible hosting to granular access controls, we’ve got your security requirements covered."
        btnTxt="Learn How Github Enterprise Work"
        />
        <CodeSecurity />
        <IntroCard
        title="Integrations"
        heading="Build on GitHub"
        par="Customize your process with GitHub apps and an intuitive API. Integrate the tools you already use or discover new favorites to create a happier, more efficient way of working."
        btnTxt="Learn more about Integrations"
        />
        <ImgGallery  />
        <IntroCard
        title="Community"
        heading="Welcome home, developers"
        par="GitHub is home to the world’s largest community of developers and their projects..."
        />
        <DeveloperGallery />
        <SignUpForm />
      

        
      </div>
    );
  }
}

export default App;
