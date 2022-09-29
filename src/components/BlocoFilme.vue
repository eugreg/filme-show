<script>
export default {
  name: "PictureCard",
  props: {
    picture_src: String,
    pic_link: {
      type: String,
      default: "/",
    },
  },
};
</script>

<template>
  <article>
    <div class="films">
      <RouterLink :to="pic_link">
        <img :src="picture_src" />
      </RouterLink>
    </div>
  </article>
</template>
