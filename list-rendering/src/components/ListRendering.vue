<script setup>
import { ref } from 'vue';

const items = ref([
    {
        title: 'How to do lists in Vue',
        author: 'Moniruzzaman',
        publishedAt: '2025-04-10'
    },
    {
        title: 'How to do Condition in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
    },
    {
        title: 'How to do Attribute Binding in Vue',
        author: 'Devil Doe',
        publishedAt: '2016-04-10'
    },

])

const tweets = [
    {
        id: 1,
        name: 'James',
        handle: '@jokerjames',
        img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        tweet: "If you don't succeed, dust yourself off and try again.",
        likes: 10,
    },
    {
        id: 2,
        name: 'Fatima',
        handle: '@fantasticfatima',
        img: 'https://semantic-ui.com/images/avatar2/large/molly.png',
        tweet: 'Better late than never but never late is better.',
        likes: 12,
    },
    {
        id: 3,
        name: 'Xin',
        handle: '@xeroxin',
        img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',
        tweet: 'Beauty in the struggle, ugliness in the success.',
        likes: 18,
    }
]


</script>
<template>
    <h1>Vue Js List Rendering</h1>

    <ul>
        <li v-for="(item, key) in items">
            <h2>{{ item.title }}</h2>
            <blockquote>{{ item.author }}</blockquote>
            <time>{{ item.publishedAt }}</time>
        </li>
    </ul>

    <ul v-for="tweet in tweets" :id="tweet.id">
        <li class="back">
            <a href="#">
                <article>
                    <figure>
                        <img :src="tweet.img">
                    </figure>
                    <div>
                        <h3>hey {{ tweet.name }}</h3>
                        <p>{{ tweet.handle }}</p>
                    </div>
                </article>
            </a>
        </li>
    </ul>
</template>

<style scoped>
li {
    list-style: none;
}

.back {
    background-color: #fff;
}

article {
    display: flex;
}

figure {
    flex-grow: 0;
}

img {
    width: 64px;
    border: 2px solid #fff;
    border-radius: 50%;
}
</style>