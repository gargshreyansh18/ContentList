const initialState = {
    contentList: [],
    loading: false,
    error: null,
  };
  
  const contentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CONTENT_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_CONTENT_SUCCESS':
        return { ...state, loading: false, contentList: [...state.contentList, ...action.payload] };
      case 'FETCH_CONTENT_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default contentReducer;