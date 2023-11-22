// Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';
import { Widget } from 'rasa-webchat';

const Chatbot = () => {
  const [conversationId, setConversationId] = useState(null);

  const handleUserMessage = async (message) => {
    const response = await axios.post('http://localhost:5005/webhooks/rest/webhook', {
      message,
      sender: conversationId,
    });

    const botResponse = response.data[0]?.text || 'Xin lỗi, tôi không hiểu điều đó.';

    // Xử lý phản hồi của bot theo cách cần thiết

    console.log('Phản hồi của bot:', botResponse);
  };

  return (
    <Widget
      initPayload={"/get_started"}
      socketUrl={"http://localhost:3001"}
      title={"Chatbot"}
      onSocketEvent={setConversationId}
      handleUserMessage={handleUserMessage}
    />
  );
};

export default Chatbot;
