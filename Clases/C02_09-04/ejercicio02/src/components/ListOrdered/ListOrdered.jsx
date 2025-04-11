import './ListOrdered.css'

export const ListOrdered = ({items}) => {
    
    return (
        <ol>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ol>
    )
}