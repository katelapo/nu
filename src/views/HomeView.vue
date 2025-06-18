<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

interface Nu {

  id: string
  name: string
  birthplace: string
  birthdate: string
  gender: string
  place: string
  phone: string
  time: string
}

const nus = ref<Nu[]>([])

const fetchNus = async () => {
  const response = await fetch('/api/nus')
  const data = await response.json()
  nus.value = data
}

onMounted(() => {
  fetchNus()
})

</script>

<template>
  <main>
    <div>Data Anggota</div>
    <div>
      <RouterLink to="/nu">Daftar Baru</RouterLink>
    </div>

    <div>
      <ul>
        <li v-for="nu in nus" :key="nu.id">
          <div>{{ nu.name }}</div>
          <div>{{ nu.birthplace }}</div>
          <div>{{ nu.birthdate }}</div>
          <div>{{ nu.gender }}</div>
          <div>{{ nu.place }}</div>
          <div>{{ nu.phone }}</div>
          <div>{{ new Date(Number(nu.time) * 1000).toLocaleString() }}</div>
        </li>
      </ul>
    </div>
  </main>
</template>
