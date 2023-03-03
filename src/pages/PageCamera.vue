<template>
  <q-page class="constrain-more q-pa-md">
    <div class="camera-frame q-pa-md">
      <video
        v-show="!imageCaptured"
        class="full-width"
        autoplay
        playsinline
        ref="videoRef"
      />
      <canvas v-show="imageCaptured" ref="canvasRef" class="full-width" height="240" />
      <!-- <img   
       class="full-width" 
      src="https://cdn.quasar.dev/img/parallax2.jpg"> -->
    </div>
    <div class="text-center q-pa-md">
      <q-btn
        :disable="imageCaptured"
        v-if="hasCameraSupport"
        round
        color="grey-10"
        size="lg"
        icon="eva-camera"
        @click="captureImage"
      />

      <q-file
        outlined
        v-else
        label="Choose an image"
        v-model="imageUpload"
        accept="image/*"
        @input="capturedImageFallback"
      >
        <template v-slot:prepend>
          <q-icon name="eva-attach-outline" />
        </template>
      </q-file>
    </div>
    <div class="row justify-center q-ma-md">
      <q-input label="Caption *" class="col col-sm-6" dense v-model="post.caption" />
    </div>
    <div class="row justify-center q-ma-md">
      <q-input
        label="Location"
        class="col col-sm-6"
        dense
        v-model="post.location"
        :loading="locationLoading"
      >
        <template v-slot:append>
          <q-btn
            round
            dense
            flat
            icon="eva-navigation-2-outline"
            @click="getLocation"
            v-if="!locationLoading && islocationSupported"
          />
        </template>
      </q-input>
    </div>
    <div class="row justify-center q-mt-lg">
      <q-btn unelevated rounded color="grey-10" label="Post Image" @click="createPost()" :disable="!post.caption || !post.photo" />
    </div>
  </q-page>
</template>

<script setup>
import { defineComponent, ref, onMounted, onBeforeUnmount, computed } from "vue";
import { uid } from "quasar";
import "md-gum-polyfill";
import axios from "axios";
import { useQuasar } from 'quasar'
import { useRouter, useRoute } from 'vue-router'

//data
const videoRef = ref();
const canvasRef = ref();
const imageCaptured = ref(false);
const hasCameraSupport = ref(true);
const imageUpload = ref([]);
const locationLoading = ref(false);
const $q = useQuasar()
const router = useRouter()

const post = ref({
  id: uid(),
  caption: "",
  location: "",
  photo: null,
  date: Date.now(),
});


//computed 
const islocationSupported = computed(()=>{
 return  'geolocation' in navigator ? true : false;
})

//methods
const initCamera = () => {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
    })
    .then((stream) => {
      videoRef.value.srcObject = stream;
    })
    .catch((error) => {
      hasCameraSupport.value = false;
    });
};

const captureImage = () => {
  let video = videoRef.value;
  let canvas = canvasRef.value;
  canvas.width = video.getBoundingClientRect().width;
  canvas.height = video.getBoundingClientRect().height;

  let context = canvas.getContext("2d");
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  imageCaptured.value = true;
  post.value.photo = dataURItoBlob(canvas.toDataURL());
  disableCamera();
};

const dataURItoBlob = (dataURI) => {
  var byteString = atob(dataURI.split(",")[1]);
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  var blob = new Blob([ab], { type: mimeString });
  return blob;
};

const capturedImageFallback = (event) => {
  post.value.photo = event.target.files;

  let canvas = canvasRef.value;
  let context = canvas.getContext("2d");

  var reader = new FileReader();
  reader.onload = (event) => {
    var img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);
      imageCaptured.value = true;
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

const disableCamera = () => {
  videoRef.value.srcObject.getVideoTracks().forEach((track) => {
    track.stop();
  });
};

const getLocation = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      getCityAndCountry(position);
    },
    (error) => {
      locationError();
    },
    {
      timeout: 7000,
    }
  );
};

const getCityAndCountry = async (position) => {
  locationLoading.value = true;
  const options = {
    method: "GET",
    url: "https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse",
    params: {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
      "accept-language": "en",
      polygon_threshold: "0.0",
    },
    headers: {
      "X-RapidAPI-Key": "a3bffba49cmshd32ef086eb9b927p1dc1d8jsn9bc4cfd158e6",
      "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
    },
  };

  await axios
    .request(options)
    .then((result) => {
      locationSuccess(result);
    })
    .catch((error) => {
      locationError();
    });
};

const locationSuccess = (result) => {
  if (result && result.data) {
    post.value.location = result.data.address.city ? result.data.address.city : "";
    post.value.location += result.data.address.country
      ? ", " + result.data.address.country
      : "";
  }
  locationLoading.value = false;
};

const locationError = () => {
  $q.dialog({
    title: "Error",
    message: "Could not find your location.",
  });
  locationLoading.value = false;
};

const createPost = () =>{

  $q.loading.show()
  let formdata = new FormData();
  formdata.append('id', post.value.id)
  formdata.append('caption', post.value.caption)
  formdata.append('location', post.value.location)
  formdata.append('date', post.value.date)
  formdata.append('file', post.value.photo, post.value.id + '.png')

  axios.post(`${process.env.API}/createPost`, formdata).then((Response)=>{
      router.push("/");
      $q.notify({
      message: 'Post created!',
      actions: [
        { label: 'Dismiss', color: 'white' }
      ]
    })
    $q.loading.hide()
  }).catch((error)=>{
      $q.dialog({
      title: "Error",
      message: "Could not create post.",
    });
    $q.loading.hide()
  })
}

//hooks
onMounted(() => {
  initCamera();
});

onBeforeUnmount(() => {
  hasCameraSupport ? disableCamera() : "";
});
</script>
<style lang="scss">
.camera-frame {
  border: 2px solid $grey-10;
  border-radius: 10px;
}
</style>
