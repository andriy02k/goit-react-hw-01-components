import css from './FriendsList.module.css'
import clsx from 'clsx';

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <li className={css.item} key={id}>
                        <span className={clsx(css.status, isOnline ? css.isOnline : css.isOffline)}></span>
                        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                        <p className={css.name}>{name}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default FriendList
