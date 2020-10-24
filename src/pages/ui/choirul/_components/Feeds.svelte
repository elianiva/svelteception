<style>
.feeds {
  padding: 2rem;
}

.feeds__header {
  display: flex;
  font-family: "Poppins", sans-serif;
  margin-bottom: 2rem;
}

.feeds__title {
  flex: 1;
  font-weight: 800;
  font-size: 1.125rem;
  color: #253a73;
}

.feeds__menu {
  display: flex;
  gap: 1rem;
}

.menu__item {
  font-weight: 700;
  color: #a5b7e2;
  text-decoration: none;
  transition: color ease-out 0.2s;
}

.menu__item:hover {
  color: #aa75ff;
}

.feeds__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.active {
  color: #aa75ff;
}
</style>

<div class="feeds">
  <div class="feeds__header">
    <span class="feeds__title">Feeds</span>
    <div class="feeds__menu">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a class="menu__item" href="#">All</a>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a class="menu__item" href="#">Following</a>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a class="menu__item" href="#">Newest</a>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a class="menu__item active" href="#">Popular</a>
    </div>
  </div>
  <div class="feeds__cards">
    {#each data as item}
      <FeedCard
        name="{item.name}"
        img="{item.img}"
        detailImg="{item.detailImg}"
        likes="{item.likes}"
        comments="{item.comments}"
      />
    {/each}
  </div>
</div>

<script>
import FeedCard from "./FeedCard.svelte"

const data = [
  {
    name: "Dean Winchester",
    likes: 632,
    comments: 64,
    img: "/images/choirul/pink.png",
    detailImg: "/images/choirul/dean.png"
  },
  {
    name: "Jesse Pinkman",
    likes: 72,
    comments: 24,
    img: "/images/choirul/blue.png",
    detailImg: "/images/choirul/jesse.png"
  },
  {
    name: "Theodore Bagwell",
    likes: 22,
    comments: 18,
    img: "/images/choirul/salmon.png",
    detailImg: "/images/choirul/theodore.png"
  },
  {
    name: "Walter White",
    likes: 48,
    comments: 16,
    img: "/images/choirul/yellow.png",
    detailImg: "/images/choirul/walter.png"
  }
]
</script>
