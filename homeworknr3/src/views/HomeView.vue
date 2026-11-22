<template>
  <main class="main">
    <PostItem v-for="post in posts" :key="post.postID" :post-id="post.postID" />

    <div class="buttonContainer">
      <button class="resetLikesButton" @click="resetLikes">Reset likes</button>
    </div>
  </main>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  name: "HomeView",

  components: {
    PostItem,
  },

  computed: {
    posts() {
      return this.$store.getters.posts;
    },
  },

  mounted() {
    this.$store.dispatch("fetchPosts").catch((error) => console.error(error));
  },

  methods: {
    resetLikes() {
      this.$store.commit("resetLikes");
    },
  },
};
</script>
