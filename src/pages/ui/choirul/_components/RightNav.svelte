<style>
.rightnav {
  position: relative;
  background-color: #f6faff;
  padding: 2rem;
}

.rightnav__divider {
  width: 0.0625rem;
  height: calc(100% - 4rem);
  border: none;
  background-color: #d5e6f6;
  position: absolute;
  left: 0;
  top: 2rem;
}

.rightnav__top {
  display: flex;
  gap: 1rem;
}

.rightnav__search {
  position: relative;
  display: flex;
  align-items: center;
  border: 0.125rem #d5e6f6 solid;
  border-radius: 2rem;
  height: 4rem;
  width: 10rem;
}

.rightnav__input {
  width: 100%;
  height: 100%;
  background: none;
  outline: none;
  border: none;
  padding: 1rem 1rem 1rem 3rem;
  font-size: 1em;
}

.rightnav__input::placeholder {
  font-weight: 800;
  font-family: "Poppins", sans-serif;
  color: #a5b6e2;
}

.rightnav__notification,
.rightnav__upload {
  width: 4rem;
  height: 4rem;
  border: none;
  outline: none;
  background: none;
  border-radius: 2rem;
  cursor: pointer;
}

.rightnav__notification {
  border: 0.125rem #d5e6f6 solid;
  color: #a5b6e2;
  transition: all ease-out 0.2s;
}

.rightnav__notification:hover {
  background-color: #d5e6f6;
  color: #ffffff;
}

.rightnav__upload {
  background-color: #57baff;
  box-shadow: -0.5rem 0.5rem 1rem rgba(87, 186, 255, 0.25);
  color: #ffffff;
  transition: all ease-out 0.2s;
}

.rightnav__upload:hover {
  filter: brightness(0.9);
}

.suggestion__header {
  display: flex;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  margin: 2rem 0 1rem;
  font-weight: 700;
}

.suggestion__title {
  color: #253a73;
}

.suggestion__divider {
  border: none;
  width: calc(100% - 2rem);
  height: 0.0625rem;
  background-color: #d5e6f6;
  margin: 0 auto;
}

.suggestion__all {
  text-decoration: none;
  color: #aa75ff;
}

.activity__title {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: #253a73;
  margin: 2rem 0 1rem;
}

.activity__card {
  border: 0.125rem #ffffff solid;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 0.5rem 1rem rgba(170, 117, 255, 0.1);
}

.activity__wrapper {
  display: grid;
  grid-template-columns: 8rem 1fr;
  grid-template-rows: 4rem 1fr;
  gap: 1rem;
}

.activity__img {
  width: 8rem;
  border-radius: 0.5rem;
  border: 0.2rem #ffffff solid;
}

.activity__name {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  color: #253a73;
  line-height: 1.5rem;
}

.activity__actions {
  display: flex;
  grid-column: 2/3;
  gap: 0.5rem;
}

.activity__like,
.activity__comment,
.activity__bookmark {
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  color: #a5b6e2;
  font-size: 0.75rem;
  gap: 0.25rem;
}

.activity__all {
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  display: block;
  margin-top: 2rem;
  color: #aa75ff;
}

.rightnav__info {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  color: #a5b7e2;
  font-size: 0.75rem;
}

.rightnav__info a {
  font-family: "Poppins", sans-serif;
  font-size: 0.75rem;
  color: #a5b7e2;
  font-weight: 800;
  text-decoration: none;
  margin: 0 0.25rem;
}

:global(.activity__icon) {
  width: 1rem;
  height: 1rem;
}

:global(.rightnav__notification svg),
:global(.rightnav__upload svg) {
  width: 1.5rem;
  height: 1.5rem;
  transition: all ease-out 0.2s;
}

:global(.rightnav__icon) {
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  left: 1rem;
  color: #a5b6e2;
}
</style>

<aside class="rightnav">
  <hr class="rightnav__divider" />
  <div class="rightnav__top">
    <div class="rightnav__search">
      <Search class="rightnav__icon" />
      <input class="rightnav__input" type="text" placeholder="Search" />
    </div>
    <button class="rightnav__notification"><Bell /></button>
    <button class="rightnav__upload"><Cloud /></button>
  </div>
  <div class="rightnav__suggestion">
    <div class="suggestion__header">
      <span class="suggestion__title">Suggestions For You</span>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" class="suggestion__all">See All</a>
    </div>
    {#each data as item}
      <Suggestion {...item} />
    {/each}
    <hr class="suggestion__divider" />
  </div>
  <div class="rightnav__activity">
    <div class="activity__title">Latest Post Activity</div>
    <div class="activity__card">
      <div class="activity__wrapper">
        <img
          class="activity__img"
          src="/images/choirul/green.png"
          alt="green"
        />
        <span class="activity__name">Minimalist Stairs</span>
        <div class="activity__actions">
          <div class="activity__like">
            <Heart class="activity__icon" />
            <span>27</span>
          </div>
          <div class="activity__comment">
            <Comment class="activity__icon" />
            <span>12</span>
          </div>
          <div class="activity__bookmark">
            <Bookmark class="activity__icon" />
            <span>8</span>
          </div>
        </div>
      </div>
      <span class="activity__all">See All Posts</span>
    </div>
  </div>
  <div class="rightnav__info">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#">About</a>
    •
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#">Help</a>
    •
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#">Terms</a>
    •
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#">Popular</a>
    •
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#">Language</a>
  </div>
</aside>

<script>
import Heart from "../icons/heart.svg"
import Comment from "../icons/message.svg"
import Bookmark from "../icons/bookmark.svg"
import Search from "../icons/search.svg"
import Bell from "../icons/bell.svg"
import Cloud from "../icons/upload.svg"
import Suggestion from "./SuggestionCard.svelte"

const data = [
  {
    name: "Sarah Tancredi",
    username: "@dr.sarah",
    isFollowed: false,
    img: "/images/choirul/enola.png"
  },
  {
    name: "Arthur Shelby",
    username: "@art.shelby",
    isFollowed: true,
    img: "/images/choirul/walter.png"
  },
  {
    name: "Vin Diesel",
    username: "@vindiesel",
    isFollowed: false,
    img: "/images/choirul/jesse.png"
  }
]
</script>
