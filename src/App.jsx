import { useState } from 'react'
import './App.css'
import { Switch } from 'antd'
import { AiOutlineCaretDown } from "react-icons/ai";

function App() {
  const [toggle,setToggle] = useState (false)
  const [fix,setFix] = useState('')

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  }

  return (
    <div className='container'>
      <div className='secondCon'>
      <div className='navCon'>
      <p>Your current plan:</p>
      <h2>Starter Trial 500MAUs</h2>
      </div>
      </div>
      <div className='choose'>
      <span style={{color:"#4a4a4a"}}>Created by Ridwan</span>
        <h1 className='plan'>Choose a plan</h1>
        <div className='toggle'>
          <Switch className="custom-switch" onChange={toggler}/>
          {toggle ? <p>Billed monthly</p> :<p>Billed anually</p> }
        </div>
      </div>
      <div className='card'>
        <div className='column'>
          <h2>Starter</h2>
          <h1 className='text'>$19</h1>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            500 MAUs
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            3 projects
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Unlimited guides
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Unlimited flows
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Unlimited branded themes
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Email support
            </p>
          </div>
          <button className='btnL'>Choose Plan</button>
          </div>
        <div className='column'>
          <h2>Pro</h2>
          <div style={{display:"flex",justifyContent:"center"}}>
          <h1 className='textPro'>$99/ </h1>
          <p className='month'>month</p>
          </div>
          <div className='list'>
            <input  placeholder='2500 MAUs                ⌵' className='input'/>
            
            <p className='users'>Monthly active users</p>
          </div>
          <div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            All starter features, plus:
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Unlimited projects
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Unlimited fully customizable themes
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            A dedicated Customer Success Manager
            </p>
          </div>
          <button className='btnM'>Choose Plan</button>
          </div>
          </div>
        <div className='column'>
          <h2>Enterprise</h2>
          <h1 className='text'>Let's Talk!</h1>
          <div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            All Pro features
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Unlimited MAUs
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Dedicated environment
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Enterprise account administration
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Premium support and services
            </p>
          </div>
          <button className='btnR'>Contact Us</button>
          </div>
          </div>
          
      </div>
    </div>
  )
}

export default App
