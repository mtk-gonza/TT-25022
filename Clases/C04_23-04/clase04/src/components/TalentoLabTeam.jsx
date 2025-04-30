import { MemberCard} from './MemberCard.jsx'
import './../styles/TalentoLabTeam.css'

export const TalentoLabTeam = ({members}) => {
    return (
        <ul className='members'>
            {
                members.map((member, index) => (
                    <li className='member' key={index}>
                        <MemberCard member={member}></MemberCard>
                    </li>
                ))
            }
        </ul>
    )
}