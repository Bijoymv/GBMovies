export const getLocalState = type => {
  try {
    const localState = localStorage.getItem(type);
    if (localState === null) {
      return [];
    }
    return JSON.parse(localState);
  } catch (err) {
    return [];
  }
};

export const addLocalState = (type, state) => {
  try {
    // Get the existing data
    const localState = localStorage.getItem(type);

    // If no existing data, create an array
    // Otherwise, merge the localStorage string to existing array
    const existing = localState
      ? [state, ...JSON.parse(localState)]
      : new Array(state);

    // Save back to localStorage
    localStorage.setItem(type, JSON.stringify(existing));
  } catch (err) {
    console.log(err);
  }
};

export const deleteLocalState = (type, id) => {
  try {
    //Create a new  array after removing the deleted value
    const localState = localStorage.getItem(type);
    if (localState === null) {
      return null;
    }
    const newLocalState = JSON.parse(localState).filter(function(obj) {
      return obj.id !== id;
    });

    localStorage.setItem(type, JSON.stringify(newLocalState));
  } catch (err) {
    console.log(err);
  }
};
