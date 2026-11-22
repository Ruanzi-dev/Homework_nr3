<template>
  <article v-if="post" class="post">
    <header class="post-header">
      <img src="/assets/images/me.png" />
      <p class="username">{{ post.creatorID }}</p>
      <p>{{ post.creationDate }}</p>
    </header>
    <img v-if="post.imgPath" :src="post.imgPath" class="post-img" alt="image" />
    <p class="post-text">
      {{ post.postText }}
    </p>
    <div class="like-box">
      <button type="button" class="like-button" @click="increaseLikes">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="heart"
          :class="{ liked: post.liked }"
        >
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          ></path>
        </svg>
      </button>
      <p class="count">{{ post.likeCount }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "PostItem",

  props: {
    postId: Number,
  },

  computed: {
    post() {
      return this.$store.getters.postById(this.postId);
    },
  },

  methods: {
    increaseLikes() {
      this.$store.commit("increaseLikes", this.postId);
    },
  },
};
</script>
