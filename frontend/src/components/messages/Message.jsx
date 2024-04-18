import React from 'react'
import useConversation from '../../zustand/useConversation';
import {useAuthContext} from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {
  const {authUser} = useAuthContext();  
  const {selectedConversation} =useConversation();
   const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
   const chatClassName = fromMe ? 'chat-end':'chat-start';
   const profilePic = fromMe ? authUser.profilePic: selectedConversation.profilePic;
   const bubbleBgColor = fromMe ? 'bg-blue-500' : "";
   
  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>

            <div className='w-10 rounded-full'>
                <img src={profilePic} alt="tailwind css chatbubble component" />

            </div>
        </div>

      <div className={`chat-bubble text-white   ${bubbleBgColor}`}>
        {message.message}
    </div>
    <div className='chat-footend opacity-400 text-xs text-cyan-500 flex ap-1 items-center'>{formattedTime}</div>
    </div>
  )
}

export default Message




/*

import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>

            <div className='w-10 rounded-full'>
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="tailwind css chatbubble component" />

            </div>
        </div>

      <div className={`chat-bubble text-white bg-blue-500`}>
        Hi! What's upp?
    </div>
    <div className='chat-footend opacity-400 text-xs text-black flex ap-1 items-center'>12:42</div>
    </div>
  )
}

export default Message
*/