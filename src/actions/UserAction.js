import axios from 'axios';

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
    }
  };
};
