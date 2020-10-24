<style>
.card {
  display: grid;
  grid-template-columns: 4rem 1fr 6rem;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  row-gap: 0.25rem;
  column-gap: 0.5rem;
  height: 4rem;
  font-family: "Poppins", sans-serif;
  margin: 1rem 0;
}

.card__img {
  grid-column: 1/2;
  grid-row: 1/3;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: 0.25rem #ffffff solid;
}

.card__name {
  grid-column: 2/3;
  grid-row: 1/2;
  align-self: end;
  font-weight: 800;
  color: #253a73;
}

.card__username {
  grid-column: 2/3;
  grid-row: 2/3;
  align-self: start;
  color: #a5b6e2;
  font-size: 0.8rem;
  font-weight: 600;
}

.card__button {
  grid-column: 3/4;
  grid-row: 1/3;
  border: none;
  background-color: #aa75ff;
  outline: none;
  padding: 0.5rem 0.5rem;
  font-weight: 700;
  color: #ffffff;
  border-radius: 0.5rem;
  max-width: 6rem;
  transition: all ease-out 0.2s;
  cursor: pointer;
}

.card__button:hover {
  filter: brightness(0.95);
}

.isFollowed {
  background: none;
  color: #253a73;
  border: 0.0625rem #a5b6e2 solid;
}
</style>

<div class="card">
  <img class="card__img" src="{img}" alt="{name}" />
  <span class="card__name">{name}</span>
  <span class="card__username">{username}</span>
  <button
    class="card__button"
    class:isFollowed
    on:click="{() => (isFollowed = !isFollowed)}"
  >{isFollowed ? 'Followed' : 'Follow'}</button>
</div>

<script>
export let img, name, username, isFollowed
</script>
