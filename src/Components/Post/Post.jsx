import style from './post.scss'
export default function Post(props) {
    return (
        <div className="post">
            <p className="post__title">
                <span>{props.item.name} </span>
                <span>{props.item.surname}</span>
            </p>
            <p className="post__body">
                <b>ТЕЛЕФОН:</b> {props.item.number}
            </p>
            <p className="post__body">
                <b>ЭЛ. ПОЧТА:</b> {props.item.email}
            </p>
            <p className="post__body">
                <b>АДРЕС:</b> {props.item.adress}
            </p>
            <div className='closeBtn' onClick={() => props.delPost(props.item.id)}>✖</div>
        </div>
    )
}
