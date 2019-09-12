import  React from 'react'
import Button from 'react-bootstrap/Button'
const IntroCard = props => {
    return (
        <div clsssName="IntroCard" style={{
            backgroundImage: 
            `url(${props.backgroundImg})`,
            color: `${props.color}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: "center",
            height: '40vh',
            width: '70%',
            margin: '0 auto'
        }}
         >
             <p>{props.title}</p>
            <h1>{props.heading}</h1>
            <p>{props.par}</p>
            
        <Button style={{color: `${props.color}`}} variant="outline-primary">{props.btnTxt}</Button>
 


        </div>
    );
}

export default IntroCard