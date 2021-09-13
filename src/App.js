import Chatbot from 'react-chatbot-kit'
import './App.css';

import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';
import config from './config';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Chatbot
      config={config}
      actionProvider={ActionProvider}
      messageParser={MessageParser}
      />
      </header>
    </div>
  );
}

export default App;