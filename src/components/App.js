import React from 'react';
import ItemContainer from './Item/ItemContainer';
import '../index.scss';

export default class Main extends React.Component {

  render() {
    return (
      <div>
        <ItemContainer store={this.props} />
      </div>
    );
  }
}
