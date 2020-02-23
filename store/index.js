export const mutations = {
  SET_DATA(store, data) {
    store.data = data;
  }
};

export const state = () => {
  return {
    data: [],
  }
}

export const getters = {
  getData: (state) => state.data,
};
