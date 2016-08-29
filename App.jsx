import React from 'react';
import css from './App.css';
// import HistoryMessage from	'./historyMessage';
import MessageField from './messageField';

export default class App extends React.Component {
    render() {
      return (
         <div className={css.message}>
            <MessageField />
         </div>
      );
    }
}