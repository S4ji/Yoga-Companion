<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'

definePageMeta({
    pageTransition: {
    name: 'rotate'
  },
  layout: 'orange',
  layoutTransition: {
    name: 'slide-in'
  },
  
})


const route = useRoute()
const { data: categories } = await useFetch('https://yoga-api-nzy4.onrender.com/v1/categories')

</script>

<template>
          <HomeButton> </HomeButton>  

  <div>
    <ul class="card-container" v-if="categories">
      <li v-for="category in categories" :key="category.id">
        <div v-if="category.poses && category.poses[route.params.id]">
          
          <div class="card">
            <img :src="category.poses[route.params.id].url_png" alt="">
            <p>Category :</p>{{ category.poses[route.params.id].category_name }}
            <p>English Name:</p>{{ category.poses[route.params.id].english_name }}
            <p>Sanskrit Name Adapted:</p>{{ category.poses[route.params.id].sanskrit_name_adapted }}
            <p>Translation:</p>{{ category.poses[route.params.id].translation_name }}
            <p>Description :</p>{{ category.poses[route.params.id].pose_description }}
            <p>Pose Benefit :</p>{{ category.poses[route.params.id].pose_benefits }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

