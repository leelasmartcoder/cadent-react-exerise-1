import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import '../App.css';


export const ListTable = ({groceryList, 
                           selectedItemId, 
                           isItemSelected,
                           toggleItemSelection, 
                           removeItem}) => (
  <div className="listTable">
    <div className="container">
    <h2>Choose Your Favorite Grocery</h2>
  {
    groceryList.length > 0 ?
    (  <table className="table table-hover">
        <thead>
          <tr>
            <th className="temp">Id</th>
            <th>Name</th>
            <th>Category</th>
            <th>Delivery Method</th>
          </tr>
        </thead>
        <tbody>
          {
            groceryList.map( (grocery) => {
              return (
                <tr key={grocery.id} className={(grocery.id === selectedItemId) ? 'selected-row' : 'normal-row'}
                    onClick={() => toggleItemSelection(selectedItemId === grocery.id, grocery.id)}>           
                <td>{grocery.id}</td>
                <td>{grocery.name}</td>
                <td>{grocery.category}</td>
                <td>{grocery.deliveryMethod}</td>
                <td><Button className="buttonDel"  
                            onClick={(event) => {event.stopPropagation(); 
                                removeItem(grocery.id)}}>
                      <DeleteIcon className="delete"/>
                    </Button></td>
              </tr>
              )
            })
          }
        </tbody>
        </table>
      )
    :
    (<p className="empty-table-msg">Sorry! No groceries in the basket. Please click on <strong>Get More Groceries</strong> button</p>)
  }
    </div>
  </div>
);


ListTable.propTypes = {
  groceryList: PropTypes.array.isRequired,
  isItemSelected: PropTypes.bool.isRequired,
  selectedItemId: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
  toggleItemSelection : PropTypes.func.isRequired
}

export default ListTable
