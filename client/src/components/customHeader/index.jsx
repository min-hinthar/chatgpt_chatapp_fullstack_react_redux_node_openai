import React from 'react';
import { ChatBubbleLeftRightIcon, PhoneIcon } from '@heroicons/react/24/solid';

const CustomHeader = ({ chat }) => {
  return (
    <div className='chat-header'>
        <div className='flexbetween'>
            <ChatBubbleLeftRightIcon className='icon-chat' />
            <h3 className='header-text'>
                {chat.title}
            </h3>
            <p>
                MUST be Titled as: AiChat / AiCode / AiAssist + Add AI_Min as Member for AI Features
            </p>
        </div>
        <div className='flexbetween'>
            <PhoneIcon className='icon-phone' />
            {chat.description !== "⬅️ ⬅️ ⬅️" ?
                (
                <p className='header-text'>
                    {chat.description}
                </p>
                ) :
                (
                <p className='header-text'>
                    AI_Min is Online
                </p>
                )
            }
        </div>
    </div>
  )
}

export default CustomHeader