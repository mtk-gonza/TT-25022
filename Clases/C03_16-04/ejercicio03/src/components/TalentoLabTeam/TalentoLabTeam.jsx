import { MemberCard} from './../MemberCard/MemberCard.jsx'
import './TalentoLabTeam.css'

export const TalentoLabTeam = ({members}) => {
    return (
        <ul className='members'>
            {
                members.map(member => (
                    <li className='member'>
                        <MemberCard member={member}></MemberCard>
                    </li>
                ))
            }
        </ul>
    )
}