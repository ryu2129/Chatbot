import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
  }
  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          {this.state.currentId}
        </div>
      </section>
    );
  }
}
