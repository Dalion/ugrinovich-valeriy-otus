export default (store) => {
  store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
  });
};