export const fetchContentRequest = (page) => ({
    type: 'FETCH_CONTENT_REQUEST',
    page,
  });
  
  export const fetchContentSuccess = (content) => ({
    type: 'FETCH_CONTENT_SUCCESS',
    payload: content,
  });
  
  export const fetchContentFailure = (error) => ({
    type: 'FETCH_CONTENT_FAILURE',
    payload: error,
  });