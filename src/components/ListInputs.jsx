import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export const ListInputs = ({ addItem, maxItemId}) => {
  const createItem = () => {
    const item = {
      id: maxItemId + 1,
      name: 'Roasted Turkey',
      category: 'Deli',
      deliveryMethod: 'Ground',
    }

    addItem(item);
  }

  return (
    <Button variant="contained" 
            color="success"
            className="addItemButton"
            onClick={createItem}>
      Get More Groceries
    </Button>
  );
};

ListInputs.propTypes = {  
  addItem: PropTypes.func.isRequired,
  maxItemId: PropTypes.number.isRequired
};

export default ListInputs;
