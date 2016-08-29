import React from 'react';
import HistoryMessage from	'./historyMessage';
import MessageField from './messageField';

export default class App extends React.Component {
    render() {
      return (
         <div>
            <HistoryMessage/>
            <MessageField/>
         </div>
      );
   }
}