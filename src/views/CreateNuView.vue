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
        birthdate: birthdate.value,
        gender: gender.value,
        place: place.value,
        phone: phone.value,
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
    <h1>Buat Nu Baru</h1>
    <form @submit.prevent="saveData">
        <div>
            <label for="name">Nama:</label>
            <input type="text" id="name" v-model="name" required />
        </div>
        <div>
            <label for="birthplace">Tempat Lahir:</label>
            <input type="text" id="birthplace" v-model="birthplace" required />
        </div>
        <div>
            <label for="birthdate">Tanggal Lahir:</label>
            <input type="date" id="birthdate" v-model="birthdate" required />
        </div>
        <div>
            <label for="gender">Jenis Kelamin:</label>
            <select id="gender" v-model="gender" required>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
            </select>
        </div>
        <div>
            <label for="place">Tempat:</label>
            <input type="text" id="place" v-model="place" required />
        </div>
        <div>
            <label for="phone">Telepon:</label>
            <input type="text" id="phone" v-model="phone" required />
        </div>
        <div>
            <label for="time">Waktu:</label>
            <input type="time" id="time" v-model="time" required />
        </div>
        <button type="submit">Simpan</button>
    </form>
</template>