import React from 'react';
import { Sidebar } from '../components/home/Sidebar';
import { OpenConversation } from '../components/home/Conversation/index';
import { useConversations } from '../contexts/ConversationProvider';

export default function HomeScreen({ id }) {

    const { selectedConversation } = useConversations();

    return (
        <div className="d-flex" style={{ height: '100vh' }} >
            <Sidebar id={id} />
            {
                selectedConversation && <OpenConversation />
            }
        </div>
    )
}
