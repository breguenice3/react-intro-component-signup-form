import Input from '../input'
import './index.css'

export default function InputArea() {

    return (
        <div className='container'>
            <div className='text-value'>
                <p className='value-text'><span>Try it free 7 days</span> then $20/mo. thereafter</p>
            </div>
            <div className='input-container'>
                <form action="">
                    <Input type="text" placeholder="First Name" idProp="fname"/>
                    <Input type="text" placeholder="Last Name" idProp="lname"/>
                    <Input type="text" placeholder="Email Address" idProp="emailA"/>
                    <Input type="password" placeholder="Password" idProp="pass"/>
                    <button>CLAIM YOUR FREE TRIAL</button>
                </form>
                <p className='terms'>By clicking the button, you are agreeing to our <a href="#" className='terms-and-services'>Terms and Services</a></p>
            </div>
        </div >
    )
}