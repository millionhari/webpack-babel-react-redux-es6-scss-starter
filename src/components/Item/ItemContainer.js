import React from 'react';
import './Item.scss';

export default class ItemContainer extends React.Component {
  constructor() {
    super();
    this.sayHello = this.sayHello.bind(this);
  }
  sayHello() {
    this.props.store.dispatch({
      type: 'SAY_HELLO',
      text: 'hello world'
    });
  }

  showHello() {
    let count = 0;
    return this.props.store.hello.map((item) => <div key={count++}>{item.text}</div>);
  }

  render() {
    this.showHello();
    return (
      <div className="item">
        <h1 className="intro">{this.showHello()}</h1>
        <button onClick={this.sayHello}>say hello</button>
      </div>
    );
  }
}

ItemContainer.propTypes = {
  store: React.PropTypes.object.isRequired
};
