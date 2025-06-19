<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const name = ref('')
const birthplace = ref('')
const birthdate = ref('')
const gender = ref('')
const place = ref('')
const phone = ref('')
const time = ref('')

const saveData = async () => {
    const newNu = JSON.stringify({
        name: name.value,
        birthplace: birthplace.value,
        birthdate: Date.parse(birthdate.value)/1000,
        gender: gender.value,
        place: place.value,
        time: Date.parse(time.value)/1000,
    })

    const response = await fetch('/api/nus', {
        method:'POST',
        body: newNu,
    })
    const data = await response.json()

    router.push('/')
}
</script>

<template>
    <h1>Edit</h1>
    <form @submit.prevent="saveData">
        <div>
            <label>Nama</label>
            <input type="text" v-model="name">
        </div>
        <div>
            <label>Tempat Lahir</label>
            <input type="text" v-model="birthplace">
        </div>
        <div>
            <label>Tanggal Lahir</label>
            <input type="date" v-model="birthdate">
        </div>
        <div>
            <label>Jenis Kelamin</label>
            <select v-model="gender">
                <option value="male">Laki-laki</option>
                <option value="female">Perempuan</option>
            </select>
        </div>
        <div>
            <label>Tempat</label>
            <input type="text" v-model="place">
        </div>
        <div>
            <label>Telepon</label>
            <input type="text" v-model="phone">
        </div>
        <div>
            <label>Waktu</label>
            <input type="datetime-local" v-model="time">
        </div>

        <div>
            <input type="submit">
        </div>
    </form>
</template>