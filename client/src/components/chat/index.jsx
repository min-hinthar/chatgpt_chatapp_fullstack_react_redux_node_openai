import React from 'react';
import { 
    useMultiChatLogic, 
    MultiChatSocket, 
    MultiChatWindow 
} from 'react-chat-engine-advanced';

import Header from '@/components/customHeader';
import StandardMessageForm from '@/components/customMessageForms/StandardMessageForm';
import Ai from '@/components/customMessageForms/Ai';

const Chat = () => {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "Admin",
        "abcd"
    );

    return (
        <div style={{ flexBasis: '100%' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow 
                {...chatProps}
                style={{ height: '100vh' }}
                renderChatHeader={(chat) => <Header chat={chat} />}
                renderMessageForm={(props) => {
                    if (chatProps.chat?.title.startsWith("OpenAI_")) {
                        return <Ai props={props} activeChat={chatProps.chat} />
                    }

                    return (
                        <StandardMessageForm props={props} activeChat={chatProps.chat} />
                    )
                }}
            />
        </div>
    )
};

export default Chat;