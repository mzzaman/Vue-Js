<script setup>
import { ref } from 'vue';

const photos = ref([

    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1618835962148-cf177563c6c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
        isFavorite: false,
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
        isFavorite: false,
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
        isFavorite: false
    },
    {
        id: 4,
        url: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww',
        isFavorite: false
    },
    {
        id: 5,
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
        isFavorite: false
    },
    {
        id: 6,
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        isFavorite: false
    },
    {
        id: 7,
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        isFavorite: false
    }
])

const newPhotoUrl = ref('');


const uploadPhoto = () => {
    console.log('Button was clicked');
    const photo = {
        id: photos.value.length + 1,
        url: newPhotoUrl.value,
        isFavorite: false,
    }

    if (newPhotoUrl.value !== "") {
        photos.value.push(photo);
        newPhotoUrl.value = "";
    }
}

const toggleFavorite = (photo => photo.isFavorite = !photo.isFavorite);

const removePhoto = (index) => {
    console.log("clicked")
    return photos.value.splice(index, 1)
}



</script>
<template>
    <h1 class="text-center text-5xl my-5 text-teal-500 antialiased  font-bold">Image Gallery</h1>

    <div class="mb-10">

        <form class="max-w-md mx-auto" @submit.prevent="uploadPhoto">
            <label for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="text" v-model="newPhotoUrl" id="default-search"
                    class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Upload Photos..." />
                <button type="submit"
                    class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Upload</button>
            </div>
        </form>

    </div>


    <ul class="container mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <p v-if="photos.length === 0" class="text-center text-red-500">Nothing To Show</p>
        <li v-else v-for="(photo, index) in photos" :key="photo.id" class="w-xs">
            <img class="h-full w-full rounded-lg cursor-pointer" :src="photo.url" @click="removePhoto(index)">
            <button class="relative left-5 bottom-10 text-3xl" :class="{ active: photo.isFavorite }"
                @click="toggleFavorite(photo)">★</button>
        </li>

    </ul>

</template>
<style scoped>
.active {
    color: red;
}
</style>