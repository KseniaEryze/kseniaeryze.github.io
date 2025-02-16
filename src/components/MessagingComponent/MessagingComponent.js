import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateClient } from '../../store/reducer/clientReducer';
import './MessagingComponent.css';

const MessagingComponent = () => {
    const [activeSection, setActiveSection] = useState('Входящие');
    const dispatch = useDispatch();
    const clients = useSelector((state) => state.clients);

    if (!Array.isArray(clients)) {
        return <div>No clients available.</div>;
    }

    const renderMessages = (messages) => {
        return messages.map((message, index) => (
            <p key={index}>{message}</p>
        ));
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'Входящие':
                return (
                    <div className="client-list">
                        {clients.map((client) => (
                            <div key={client.id} className="client-item">
                                <h3>{client.name}</h3>
                                <div className="messages">
                                    {renderMessages(client.inboxMessages)}
                                </div>
                                <input
                                    type="text"
                                    placeholder="Отправить сообщение"
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            dispatch(updateClient({ id: client.id, updates: { inboxMessages: [...client.inboxMessages, e.target.value] } }));
                                            e.target.value = '';
                                        }
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                );
            case 'Отправленные':
                return (
                    <div className="client-list">
                        {clients.map((client) => (
                            <div key={client.id} className="client-item">
                                <h3>{client.name}</h3>
                                <div className="messages">
                                    {renderMessages(client.sentMessages)}
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'Избранные':
                return (
                    <div className="client-list">
                        {clients.map((client) => (
                            <div key={client.id} className="client-item">
                                <h3>{client.name}</h3>
                                <div className="messages">
                                    {renderMessages(client.favoriteMessages)}
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'Черновики':
                return (
                    <div className="client-list">
                        {clients.map((client) => (
                            <div key={client.id} className="client-item">
                                <h3>{client.name}</h3>
                                <div className="messages">
                                    {renderMessages(client.draftMessages)}
                                </div>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="info-container">
            <h2>Сообщения</h2>
            <div className="menu">
                <button onClick={() => setActiveSection('Входящие')}>Входящие</button>
                <button onClick={() => setActiveSection('Отправленные')}>Отправленные</button>
                <button onClick={() => setActiveSection('Избранные')}>Избранные</button>
                <button onClick={() => setActiveSection('Черновики')}>Черновики</button>
            </div>
            {renderSection()}
        </div>
    );
};

export default MessagingComponent;