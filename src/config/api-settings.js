export default {
  ENVIROMENT: 'dev',
  VERSION: 'v1',
  API: {
    dev: 'https://qq-vivo-api-gateway.herokuapp.com/api/v1/',
    prod: 'https://qq-vivo-api-gateway.herokuapp.com/api/v1/'
  },
  AUTH: {
    ENDPOINT_LOGIN: 'login'
  },
  ENDPOINTS: {
    GET_CAMPAINGS: 'campaigns',
    POST_CAMPAINGS: 'campaigns/create',
    UPDATE_CAMPAINGS: id => `campaigns/update/${id}`,

    START_CAMPAING: id => `campaigns/start/${id}`,
    DELETE_CAMPAING: id => `campaigns/delete/${id}`,

    GET_USERS: 'users',
    POST_USER: 'users',
    EDIT_USER: id => `users/${id}`,
    GET_USER: id => `users/${id}`,
    DELETE_USER: id => `users/${id}`
  }
};
