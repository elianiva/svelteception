<style>
.body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to bottom, #cea2ca, #f5c199);
  color: #242424;
}

.container {
  width: 100%;
  display: grid;
  grid-template-columns: 20rem 1fr;
  max-width: 1380px;
  max-height: 960px;
  background-color: #ffffff;
  overflow: hidden;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
}

.main {
  padding: 2rem 3rem;
  max-width: 66rem;
}

.topnav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.topnav__search {
  background-color: #f4f4f4;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  color: #b0b0b0;
}

.topnav__search :global(.search__icon) {
  width: 1.5rem;
  height: 1.5rem;
}

.search__input {
  background: none;
  outline: none;
  border: none;
}

.search__input::placeholder {
  color: #b0b0b0;
}

.topnav__button {
  background-image: linear-gradient(to bottom, #962fbf, #fa7e1e);
  padding: 0.125rem 1.25rem;
  border: none;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.4rem;
  cursor: pointer;
}

.topnav__button .plus {
  font-size: 1.5rem;
  font-weight: 600;
}

.topnav__button:hover {
  filter: brightness(0.92);
}

.feed {
  position: relative;
  font-family: "Roboto", sans-serif;
  margin-top: 2rem;
}

.feed__title {
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.feed__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1.5rem;
}
</style>

<div class="body">
  <div class="container">
    <Sidebar />
    <main class="main">
      <nav class="topnav">
        <div class="topnav__search">
          <Search class="search__icon" />
          <input class="search__input" type="text" placeholder="Search" />
        </div>
        <button class="topnav__button">
          <span class="plus">+</span>
          Add Photo
        </button>
      </nav>
      <Stories />
      <div class="feed">
        <span class="feed__title">Feed</span>
        <div class="feed__cards">
          {#each cards as card}
            <Card {...card} />
          {/each}
        </div>
      </div>
    </main>
  </div>
</div>

<script>
import Sidebar from "./_components/Sidebar.svelte"
import Search from "./icons/search.svg"
import Stories from "./_components/Stories.svelte"
import Card from "./_components/FeedCard.svelte"

import { metatags } from "@roxi/routify"
metatags.title = "Naufal | Svelteception"

const cards = [
  {
    name: "Lili",
    imgUrl: "/images/naufal/photo-1.webp",
    likes: "1,294",
    comments: "132"
  },
  {
    name: "Mutia",
    imgUrl: "/images/naufal/photo-2.webp",
    likes: "872",
    comments: "72"
  },
  {
    name: "Hooman",
    imgUrl: "/images/naufal/photo-3.webp",
    likes: "1,294",
    comments: "132"
  },
  {
    name: "Someone",
    imgUrl: "/images/naufal/photo-4.webp",
    likes: "1,294",
    comments: "132"
  }
]
</script>
