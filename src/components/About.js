import React, {useState} from 'react'

export default function About(props) {

    /*const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'gray',
        border:'3px solid'
    })*/
    let myStyle={
        color:props.mode==='dark'?'white':'#042743',
        backgroundColor:props.mode==='dark'?'rgb(36,74,104)':'white',
        border:'1px solid',
        borderColor:props.mode==='dark'?'white':'#042743',
        
    }
   /* const [btntext, setBtnText] = useState("Enable Dark Mode")
    
    const toggleStyle = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({ 
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
                
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({ 
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode");
        }
    }*/
    
    return (
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>ABOUT TEXT CONVERTER</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong><code>Welcome to the Convert Case Text Generator Tool</code></strong> A very handy convert text tool where you can change between lower case and upper case letters, where you can cleartext, copytext,and RemoveExtraspace from your text .Explore the options:
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>ABOUT ME</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        My self <code><strong>OMVEER YADAV</strong></code> I am Pursuing my Graduaction in Engineering from <code><strong>JSS Academy of Technical Education Noida</strong></code><br/>
                        This  Text converter UI is Totaly designed my me using ReactJs
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>CONTACT US</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>Mail id</strong>- <code><strong>omyadav16081999@gmail.com</strong></code>
                        <br/>
                        <strong>Instagram Id</strong>- <code><strong>omyadav_495 </strong></code><br/>
                        <strong>Linkdin profile</strong>- <code><strong>https://www.linkedin.com/in/omveer-yadav-495b62223/</strong></code><br/>
                        <strong>Github profile</strong>-<code><strong>https://github.com/1Tpro</strong></code>
                    </div>
                    </div>
                </div>
            </div>
            {/*<div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div>*/}
        </div>
    )
}
