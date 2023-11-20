import { useState } from "react"
import style from './form.scss'


export default function Form(props) {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [number, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [adress, setAdress] = useState('')
    return (
        <form>
            <div>
                <input type="text" placeholder="ИМЯ" value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="ФАМИЛИЯ" value={surname} onChange={e => setSurname(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder="ТЕЛЕФОН" value={number} onChange={e => setTel(e.target.value)} />
                <input type="text" placeholder="ЕЛЕКТРОННАЯ ПОЧТА" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <textarea className="adress" type="text" placeholder="АДРЕС" value={adress} onChange={e => setAdress(e.target.value)} />
            <button type="button" onClick={() => {
                props.func(name, surname, number, email, adress);
                setName('');
                setSurname('');
                setTel('');
                setEmail('');
                setAdress(''); 
            }}>ОФОРМИТЬ ЗАКАЗ</button>
        </form>
    )
}
