import './index.css'

interface Props{
    type: string,
    placeholder: string,
    idProp: string
}

export default function Input({type, placeholder, idProp}:Props){
    return(
        <div>
            <input type={type} placeholder={placeholder} id={idProp} required/>
        </div>
    )
}