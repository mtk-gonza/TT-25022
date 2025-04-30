import './../styles/MemberCard.css'

export const MemberCard = ({member}) => {
    return (
        <div className='member_card'>
            <img src={member.imagen} alt={'imagen de perfil de ' + member.nombre} />
            <h2>{member.nombre}</h2>
            <span>{member.rol}</span>
        </div>
    )
}