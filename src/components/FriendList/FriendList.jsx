import css from './FriendsList.module.css'
import FriendListItem from './FriendListItem'

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name= {friend.name}
                    isOnline={friend.isOnline}
                />
                    ))}
        </ul>
    )
}

export default FriendList
