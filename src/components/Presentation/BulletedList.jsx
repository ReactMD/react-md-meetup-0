import React from 'react';

class BulletedList extends React.Component {
  constructor (props) {
    super (props);

    this._createListItem = this._createListItem.bind (this);
  }

  _createListItem (item, index) {
    if (Array.isArray (item)) {
      // map it to create list item
      return (
        <ul key={ index }>
          { item.map (this._createListItem) }
        </ul>
      )
    } else {
      return (
        <li key={ index }>{ item }</li>
      );
    }
  }

  render () {
    const _listItems = this.props.items.map (this._createListItem);

    return (
      <ul>
        { _listItems }
      </ul>
    );
  }
};

export default BulletedList;
