<template>
  <q-page class="constrain q-pa-md">
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-8">
        <template v-if="!isPostLoading && posts.length">
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
              <div class="text-caption text-grey">{{ formatDate(post.date) }}</div>
            </q-card-section>
          </q-card>
        </template>
        <template v-else-if="!isPostLoading && !posts.length">
          <h5 class="text-center text-grey">No Posts.</h5>
        </template>
        <template v-else>
      <q-card flat bordered>
        <q-item>
          <q-item-section avatar>
            <q-skeleton type="QAvatar" animation="fade"  size="40px" />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <q-skeleton type="text" animation="fade" />
            </q-item-label>
            <q-item-label caption>
              <q-skeleton type="text" animation="fade" />
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-skeleton height="200px" square animation="fade" />

        <q-card-section>
          <q-skeleton type="text" class="text-subtitle2" animation="fade" />
          <q-skeleton type="text" width="50%" class="text-subtitle2" animation="fade" />
        </q-card-section>
      </q-card>
        </template>
     
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
            <q-item-label caption> Divya sonara </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { date } from "quasar";
import axios from "axios";
import { useQuasar } from 'quasar'
const formatDate = (val) => {
  return date.formatDate(val, "MMMM D, h:mmA");
};
const posts = ref([]);
const $q = useQuasar()
const isPostLoading = ref(false)

const getPosts =  () => {
  isPostLoading.value = true
   axios
    .get(`${process.env.API}/posts`).then(response => {
        posts.value = response.data;
        isPostLoading.value = false;
    }).catch(error => {
      error ?   $q.dialog({
          title: "Error",
          message: "Could not find posts.",
        }) : false
        isPostLoading.value = false
    });
};

onMounted(() => {
  getPosts();
});
</script>
<style lang="scss">
.card-post {
  .q-img {
    min-height: 200px;
  }
}
</style>
