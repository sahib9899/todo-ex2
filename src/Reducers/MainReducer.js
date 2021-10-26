export const addNewTask = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];

    case "REMOVE_TASK":
      const newData = state.filter(
        (task) => state.indexOf(task) !== action.payload
      );
      return newData;

    case "UPDATE_TASK":
      const index = state.indexOf(action.payload[0]);
      const updateData = [...state];
      updateData[index] = action.payload[1];
      return updateData;

    default:
      return state;
  }
};

export const fetchReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DATA":
      console.log("data", action.payload);
      return  [...state, action.payload];

    default: 
      return state;
  }
};
