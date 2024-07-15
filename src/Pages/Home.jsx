import { useState } from 'react';

import CreatePost from '../Components/CreatePost/CreatePost';
import Login from '../Components/Login';
import Post from '../Components/Common/Post/Post';
import Register from '../Components/Register';

import UserProfile from '../assets/webp/userProfile.webp';
import UserProfile2 from '../assets/webp/userProfile2.webp';

import { MODAL_STATE } from '../Utils/constant';

export default function Home(){
    // const [firstTime,setFirstTime] = useState(true);
    const [modal,setModal] = useState(MODAL_STATE.NONE)
    return(
        <>
        <div className={`home__container ${modal !== MODAL_STATE.NONE ?'dark':''}`}
        >
        <div className="home__details">
            <h1 className="home__details__title">Hello Jane</h1>
            <p className="home__details__description">How are you doing today? Would you like to share something with the community 🤗</p>
        </div>
        <CreatePost handleClick={()=>setModal(MODAL_STATE.REGISTER)}/>
        <Post 
            userName='Marvin McKinney'
            handleClick={()=>setModal(MODAL_STATE.REGISTER)}
            profilePic={UserProfile} 
            commentCount={24}
            postIcon='&#128075;'
            datePosted='5 mints ago'
            postContent='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        />
        <Post 
            userName='Theresa Webb'
            handleClick={()=>setModal(MODAL_STATE.REGISTER)}
            profilePic={UserProfile2} 
            commentCount={5}
            postIcon='&#128542;'
            datePosted='8 mints ago. Edited'
            postContent='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        />
        </div>
        {modal === MODAL_STATE.LOGIN && 
        <Login handleClick={setModal} />}
        {modal ===MODAL_STATE.REGISTER && 
        <Register handleClick={setModal}/>}
        </>
    )
}