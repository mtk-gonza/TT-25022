import { Button } from './../Button/Button.jsx'
import './Card.css'

export const Card = ({title, description, btnTxt = 'Ver más'}) => {
    
    return (
        <div className='card'>
            <h2>{title}</h2>
            <p>{description}</p>
            <Button>
                {btnTxt}
            </Button>
        </div>
    )
}