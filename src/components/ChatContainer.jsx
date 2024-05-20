import React, { useState, useEffect } from "react";

const ChatContainer = () => {
  const backendURL = "https://levy-backend-cognitivedsai.replit.app";

  const [threadID, setThreadID] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typing) {
      console.log("Effect: Typing is true");
      addMessage("Levy", "Escribiendo...");
      const interval = setInterval(() => {
        setMessages((prevMessages) => {
          const lastMessage = prevMessages[prevMessages.length - 1];
          if (
            lastMessage &&
            lastMessage.sender === "Levy" &&
            lastMessage.message.includes("Escribiendo")
          ) {
            return prevMessages.map((msg, index) => {
              if (index === prevMessages.length - 1) {
                return {
                  ...msg,
                  message: msg.message.endsWith("...")
                    ? "Escribiendo"
                    : msg.message + ".",
                };
              }
              return msg;
            });
          }
          return prevMessages;
        });
      }, 500);
      return () => clearInterval(interval);
    } else {
      console.log("Effect: Typing is false or ended");
    }
  }, [typing]);

  const startConversation = () => {
    setMessages([]);
    setError(null);
    fetch(`${backendURL}/start?platform=Web`, { method: "GET" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setThreadID(data.thread_id);
        addMessage(
          "Levy",
          "Hola! Soy el asistente virtual de Cognitiveds\n¿En qué te puedo ayudar?"
        );
      })
      .catch((error) => {
        console.error("Error al iniciar la conversación:", error);
        setError(`Error al iniciar la conversación: ${error.message}`);
      });
  };

  const sendMessage = () => {
    if (!input.trim() || !threadID) return;
    addMessage("Tú", input.trim());
    setInput("");
    setTyping(true);
    console.log("Typing started");
    setError(null);
    fetch(`${backendURL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ thread_id: threadID, message: input.trim() }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setTyping(false);
        console.log("Typing stopped");
        removeTypingMessage(); // Eliminar el mensaje "Escribiendo..."
        addMessage("Levy", formatLinks(data.response));
      })
      .catch((error) => {
        console.error("Error al enviar el mensaje:", error);
        setTyping(false);
        console.log("Typing stopped");
        removeTypingMessage(); // Eliminar el mensaje "Escribiendo..." en caso de error
        setError(`Error al enviar el mensaje: ${error.message}`);
        addMessage("Error", "No se pudo obtener respuesta.");
      });
  };

  const addMessage = (sender, message) => {
    setMessages((prevMessages) => [...prevMessages, { sender, message }]);
  };

  const removeTypingMessage = () => {
    setMessages((prevMessages) => prevMessages.filter((msg, index) => {
      const lastMessage = prevMessages[prevMessages.length - 1];
      if (lastMessage && lastMessage.sender === "Levy" && lastMessage.message.includes("Escribiendo")) {
        return index !== prevMessages.length - 1;
      }
      return true;
    }));
  };

  const formatLinks = (text) => {
    return text.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" style="color: #A84D31;">$1</a>'
    );
  };

  return (
    <div className="flex flex-col p-4 space-y-4 chat-container">
      <div className="chat-header">
        <img
          src="/images/chat_icon.png"
          alt="Assistant Icon"
          className="chat-icon"
        />
        <span className="chat-title">Levy - Asistente de IA</span>
      </div>
      <button id="startButton" onClick={startConversation}>
        Iniciar conversación
      </button>
      {error && <div className="error">{error}</div>}
      <div className="flex-1 overflow-y-auto bg-gray-800 p-4 rounded chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${
              msg.sender === "Tú" ? "user-message" : "assistant-message"
            }`}
          >
            <div
              className={`${
                msg.sender === "Tú" ? "user-avatar" : "assistant-avatar"
              }`}
            ></div>
            <div
              className="message-content"
              dangerouslySetInnerHTML={{
                __html: `<strong>${msg.sender}:</strong> ${msg.message.replace(
                  /\n/g,
                  "<br>"
                )}`,
              }}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center chat-input-container mt-4 mb-4">
        <input
          id="chatInput"
          className="flex-1 p-2 rounded bg-gray-700 text-white mx-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button id="sendButton" className="mx-2" onClick={sendMessage}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ChatContainer;
