import PropTypes from 'prop-types';

import CommentIcon from "/src/assets/svg/ChatBubble.svg"
import styles from './Post.module.css'

export default function Post({handleClick,profilePic,userName,commentCount,datePosted,postContent,postIcon}){
    return <div onClick={handleClick} className={styles.PostContainer}>
        <div className={styles.UserContainer}>
            <img src={profilePic} alt="Profile Pic" className={styles.ProfilePic}/>
            <div className={styles.UserDetails}>
                <p className={styles.UserName}>{userName}</p>
                <p className={styles.DatePosted}> {datePosted}</p>
            </div>
            <span>...</span>
        </div>
        <div className={styles.Post}>
            <div>{postIcon}</div>
            <p>{postContent}</p>
        </div>
        <div className={styles.Comments}>
            <img src={CommentIcon} alt='Comment Icon'/>
            <p>{commentCount} comments</p>
        </div>
    </div>
}

Post.propTypes = {
    handleClick: PropTypes.func.isRequired,
    profilePic: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    commentCount: PropTypes.number.isRequired,
    datePosted: PropTypes.string.isRequired,
    postContent: PropTypes.string.isRequired,
    postIcon: PropTypes.string.isRequired,
}