export default {
  getUser: () => {
    return {
      name: sessionStorage.getItem('name'),
      lastname: sessionStorage.getItem('lastname'),
      email: sessionStorage.getItem('email'),
      telephone: sessionStorage.getItem('telephone')
    };
  },
  getUserByAttr: attr => !!sessionStorage.getItem(attr),
  getToken: () => sessionStorage.getItem('token'),
  setUserFromAPI: user => {
    sessionStorage.setItem('username', user.username);
    sessionStorage.setItem('email', user.email);
    sessionStorage.setItem('name', user.name);
    sessionStorage.setItem('lastname', user.lastName);
  },
  setAuth: (id, token) => {
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('token', token);
  },
  clear: () => sessionStorage.clear()
};
