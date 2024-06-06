import React from "react";

const ChatBubble = () => {
  return (
    <>
      <div>
        <h1>Chat Bubble</h1>
        <div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <div className="chat-header">
              Kayks
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">It's over bro.</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble">Lolll!!!</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBubble;
