<template>
  <q-page class="constrain q-pa-md">
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-8">
        <q-card
          class="card-post q-mb-md"
          flat
          bordered
          v-for="post in posts"
          :key="post.id"
        >
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="../assets/profile.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-bold">divya__sonara</q-item-label>
              <q-item-label caption>
                {{ post.location }}
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />
          <q-img :src="post.imageUrl" />

          <q-card-section>
            <div>{{ post.caption }}</div>
            <div class="text-caption text-grey">{{ post.date }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4 large-screen-only">
        <q-item class="fixed">
          <q-item-section avatar>
            <q-avatar size="48px">
              <img src="../assets/profile.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-bold">divya__sonara</q-item-label>
            <q-item-label caption>
                Divya sonara
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { date } from "quasar";
export default defineComponent({
  name: "PageHome",

  setup() {
    const formatDate = (val) => {
      return date.formatDate(val, "MMMM D, h:mmA");
    };
    const posts = ref([
      {
        id: 1,
        caption: "Golden Gate Bridge",
        date: formatDate(1677645620926),
        location: "Gujarat, India",
        imageUrl: "https://cdn.quasar.dev/img/parallax2.jpg",
      },
      {
        id: 2,
        caption: "Golden Gate Bridge",
        date: formatDate(1677645620926),
        location: "Gujarat, India",
        imageUrl: "https://cdn.quasar.dev/img/parallax2.jpg",
      },
      {
        id: 3,
        caption: "Golden Gate Bridge",
        date: formatDate(1677645620926),
        location: "Gujarat, India",
        imageUrl: "https://cdn.quasar.dev/img/parallax2.jpg",
      },
      {
        id: 4,
        caption: "Golden Gate Bridge",
        date: formatDate(1677645620926),
        location: "Gujarat, India",
        imageUrl: "https://cdn.quasar.dev/img/parallax2.jpg",
      },
    ]);

    return {
      posts,
    };
  },
});
</script>
<style lang="scss">
.card-post {
  .q-img {
    min-height: 200px;
  }
}
</style>
