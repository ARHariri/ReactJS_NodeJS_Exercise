import React from 'react';
import HistoryMessage from	'./historyMessage.jsx';
import MessageField from './messageField.jsx';

class App extends React.Component {
    render() {
      return (
         <div>
            <HistoryMessage/>
            <MessageField/>
         </div>
      );
   }
}

export default App;