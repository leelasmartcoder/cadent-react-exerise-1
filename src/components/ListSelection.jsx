import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const ListSelection = ({isItemSelected, selectedItem}) => (
  <div className="listSelection">
  { isItemSelected ?
    <div className="selectedInfo">
      <h3 className="selectedMessage">Selected Grocery:</h3>
      <div className="selectId">
        <strong>Id:</strong>
         <span>{selectedItem.id}</span>
      </div>
      <div className="selectName">
        <strong>Name:</strong>
        <span>{selectedItem.name}</span>
      </div>
      <div className="selectCategory">
        <strong>Category:</strong>
        <span>{selectedItem.category}</span>
      </div>
      <div className="selectDeliveryMethod">
        <strong>Delivery Method:</strong>
        <span>{selectedItem.deliveryMethod}</span>
      </div>      
    </div>
    :
    <p className="selectedNone">No Grocery Item Selected</p>
  }  
  </div>
);

ListSelection.propTypes = {  
  isItemSelected: PropTypes.bool.isRequired,
  selectedItem: PropTypes.object.isRequired
};

export default ListSelection;
