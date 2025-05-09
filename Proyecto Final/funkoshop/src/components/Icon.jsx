import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Icon = ({icon, css}) => {
    return (
        <FontAwesomeIcon className={css} icon={icon} />
    )
}