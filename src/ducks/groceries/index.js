import update from 'immutability-helper';

const duckRoot = 'app/groceries/';

// Constants
export const ADD_ITEM = `${duckRoot}ADD_ITEM`;
export const REMOVE_ITEM = `${duckRoot}REMOVE_ITEM`;
export const SELECT_ITEM = `${duckRoot}SELECT_ITEM`;
export const DESELECT_ITEM = `${duckRoot}DESELECT_ITEM`;

export const initialState = {
  list: [
    {
      id: 66,
      name: 'Bananas',
      category: 'Fruit',
      deliveryMethod: 'Air',
    },
    {
      id: 16,
      name: 'Whole Grain Bread',
      category: 'Grains',
      deliveryMethod: 'Air',
    },
    {
      id: 100,
      name: 'Lettuce',
      category: 'Vegitable',
      deliveryMethod: 'Ground',
    },
    {
      id: 10,
      name: 'Roasted Turkey',
      category: 'Deli',
      deliveryMethod: 'Ground',
    },
  ],
  isItemSelected: false,
  selectedItem: {
    id: 0,
    name: '',
    category: '',
    deliveryMethod: '',
  },
};

// Reducers
export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  console.log(action);

  switch (type) {
    case ADD_ITEM:
      return update(state, {
        list: { $push: [payload] },
      });

    case REMOVE_ITEM:
      const newList = state.list.filter( (listItem) => {
        return listItem.id !== payload.id;
      });
      return (state.selectedItem.id === payload.id) ? {...state, list: newList, isItemSelected: false, selectedItem: initialState.selectedItem}
                                                    : {...state, list: newList}

    case SELECT_ITEM:
      const [matchItem] = state.list.filter((listItem) => {
        return listItem.id === payload.id
      });
      return {...state, 
        isItemSelected: true,
        selectedItem: {...matchItem}
      };

    case DESELECT_ITEM:
      return {...state, 
        isItemSelected: false,
        selectedItem: initialState.selectedItem
       }

    default:
      return state;
  }
};

// Action Creators
export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  payload: {id}
});

export const selectItem = id => ({
  type: SELECT_ITEM,
  payload: {id}
});

export const deselectItem = id => ({
  type: DESELECT_ITEM,
  payload: {id}
});