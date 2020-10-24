<style>
.story {
  display: flex;
  justify-content: space-around;
  padding: 2rem 1rem 1.25rem;
}

.divider {
  width: calc(100% - 4rem);
  border: none;
  height: 0.0625rem;
  margin: 0 auto;
  background-color: #d5e6f6;
}

.story__item {
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}

.story__item:first-child::before {
  content: "+";
  position: absolute;
  top: 0.5rem;
  color: #ffffff;
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  z-index: 2;
}

.story__img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

.story__name {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: #253a73;
}
</style>

<div class="story">
  {#each data as item}
    <div class="story__item">
      <img
        class="story__img"
        src="{item.img}"
        alt="{item.name}"
        style="{item.isUnread ? activeBorder : inactiveBorder}"
      />
      <span class="story__name">{item.name}</span>
    </div>
  {/each}
</div>
<hr class="divider" />

<script>
const activeBorder = "box-shadow: 0 0 0 0.25rem #F5F8FF, 0 0 0 0.4rem #aa75ff;"
const inactiveBorder =
  "box-shadow: 0 0 0 0.25rem #F5F8FF, 0 0 0 0.4rem #CDDBEE;"

const data = [
  { name: "You", img: "/images/choirul/you.png", isUnread: false },
  { name: "Supardi", img: "/images/choirul/supardi.png", isUnread: false },
  { name: "Dean", img: "/images/choirul/dean.png", isUnread: false },
  { name: "Theodore", img: "/images/choirul/theodore.png", isUnread: true },
  { name: "Walter", img: "/images/choirul/walter.png", isUnread: true },
  { name: "Jesse", img: "/images/choirul/jesse.png", isUnread: true },
  { name: "Enola", img: "/images/choirul/enola.png", isUnread: true }
]
</script>
