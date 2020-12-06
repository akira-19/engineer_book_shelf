import firebase from './firebase';

export const isBrowser = () => typeof window !== 'undefined';

export const getUser = () => {
  const user = window.localStorage.getItem('gatsbyUser');

  return isBrowser() && user ? JSON.parse(user) : {};
};

const setUser = (user) =>
  window.localStorage.setItem('gatsbyUser', JSON.stringify(user));

export const handleLogin = (email: string, password: string) => {
  const isSuccess = firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res);

      return true;
    })
    .catch((error) => {
      console.log(error);

      return false;
    });
  console.log(isSuccess);

  return isSuccess;
};

export const isLoggedIn = async () => {
  let result = false;
  await firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('auth success');
      setUser(user);
      result = true;
    }
  });

  return result;
};

export const logout = (callback) => {
  setUser({});
  callback();
};