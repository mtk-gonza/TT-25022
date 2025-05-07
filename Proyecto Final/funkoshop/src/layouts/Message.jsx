import './../styles/Message.css'

export const Message = ({message}) => {
    return (
        <div className="container">
            <div className="message">{message}</div>
        </div>
    )
}