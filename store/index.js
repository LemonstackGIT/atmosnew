export const state = () => ({
  loadingMain: false,
  expand: true,
  auth: false
});

export const getters = {
  get_bussuserByID: (state) => (userId) => {
    if (state.materials) {
      return state.materials.find(materials => materials.user_id == userId)
    }
  },
};

export const mutations = {
  SET_AUTH (state, data) {
    state.auth = true
  },
  SET_EXPAND_TOGGLE (state) {
    state.expand = !state.expand
  },
  SET_EXPAND (state, data) {
    state.expand = data
  },
};

export const actions = {
  get_materials ({ dispatch, commit, state, getters }) {
    this.$fire.database.ref('material').once('value', (snapshot) => {
      let innerChild = []
      snapshot.forEach((childSnapshot) => {
        var inner = []
        var inner = childSnapshot.val()
        inner.id = childSnapshot.key
        innerChild.push(inner)
      })
      commit("SET_MATERIAL", innerChild);
    })
  },
  async nuxtServerInit ({ commit, dispatch }, { req }) {
    //dispatch("get_presses")
    //dispatch("get_materials")
    //dispatch("get_materials_content")
  },
  async login_backend({ state, dispatch, commit }, { userName, password }) {
    if (userName == 'admin' && password == '999999') {
      state.backenduser = 'admin'
    }
  },
};
