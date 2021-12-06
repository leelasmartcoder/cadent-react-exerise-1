import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addItem, removeItem, selectItem, deselectItem } from '../ducks/groceries';

import ListInputs from './ListInputs';
import ListSelection from './ListSelection';
import ListTable from './ListTable';


const mapStateToProps = ({
  groceries: {
    list: groceryList,
    isItemSelected,
    selectedItem    
  },
}) => ({
  groceryList,
  isItemSelected,
  selectedItem
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addItem,
    removeItem,
    selectItem,
    deselectItem
  }, dispatch)
);

class ListContainer extends Component {
  componentWillMount() {
    /* eslint-disable no-console */
    console.log('groceryList', this.props.groceryList, this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('groceryList', nextProps.groceryList, this);
  }

  render() {

    console.log('render', this.props.selectedItem);

    return (
      <section className="groceryApp">
        <div className="listInputs">
          <ListInputs addItem={this.props.addItem} maxItemId={Math.max(0, ...this.props.groceryList.map((item) => item.id))} />
        </div>
        <div className="types">
          <ListSelection isItemSelected={this.props.isItemSelected}
                         selectedItem={this.props.selectedItem}/>
          <ListTable groceryList={this.props.groceryList}
                     toggleItemSelection={(isSelected, id) => isSelected ? this.props.deselectItem(id) : this.props.selectItem(id)}
                     removeItem={this.props.removeItem}
                     selectedItemId={this.props.selectedItem.id}/>
        </div>
      </section>
    );
  }
}

ListContainer.propTypes = {
  // Props
  // Actions
  addItem: PropTypes.func.isRequired,
  // Store
  groceryList: PropTypes.array.isRequired,
  isItemSelected: PropTypes.bool.isRequired,
  selectItem: PropTypes.func.isRequired,
  deselectItem: PropTypes.func.isRequired,
  selectedItem: PropTypes.object.isRequired,
  // Other
};

const ListContainerRedux = connect(mapStateToProps, mapDispatchToProps)(ListContainer);

export default ListContainerRedux;
