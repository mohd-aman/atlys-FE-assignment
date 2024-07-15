import PropTypes from 'prop-types';

import Button from '../Common/Button/Button'
import styles from './CreatePost.module.css'

export default function CreatePost({handleClick}){
    return <div onClick={handleClick} className={styles.CreatePostContainer}>
        <p className={styles.Typo}>Create Post</p>
        <div className={styles.CreatePost}>
            <div>💬</div>
            <p>How are you feeling today? </p>
        </div>
        <Button extraClass={styles.Button} value='Post' size='small'/>
    </div>
}

CreatePost.propTypes = {
    handleClick: PropTypes.func.isRequired,
}