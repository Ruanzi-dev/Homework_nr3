import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
  },
  getters: {
    posts: (state) => state.posts,
    postById: (state) => (id) =>
      state.posts.find((post) => post.postID === Number(id)),
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts.map((post) => ({
        ...post,
        likeCount: Math.floor(Math.random() * 100),
      }));
    },

    increaseLikes(state, postID) {
      const post = state.posts.find((post) => post.postID === postID);

      if (post) {
        post.likeCount++;
      }
    },

    resetLikes(state) {
      state.posts.forEach((post) => {
        post.likeCount = 0;
      });
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      const response = await fetch("/posts.json");
      const json = await response.json();
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      commit("setPosts", json);
    },
  },
  modules: {},
});
