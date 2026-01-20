<style>
.best {
  background-color: #f0f5f8;
  padding: 1rem 1rem 2rem;
  border-radius: 1rem;
  margin-top: 2rem;
}

.best__title {
  font-size: 1rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
}

.best__collection {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.collection__img {
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 1rem;
}

.collection__img:not(:first-child) {
  margin-left: -1.5rem;
}

.collection__img:nth-child(1) {
  z-index: 5;
}
.collection__img:nth-child(2) {
  z-index: 4;
}
.collection__img:nth-child(3) {
  z-index: 3;
}
.collection__img:nth-child(4) {
  z-index: 2;
}
.collection__img:nth-child(5) {
  z-index: 1;
}
</style>

<div class="best">
  <span class="best__title">Most Watched Genre</span>
  <div class="best__collection">
    <img class="collection__img" src="/images/nauval/dude.webp" alt="dude" />
    <img class="collection__img" src="/images/nauval/blood.webp" alt="dude" />
    <img class="collection__img" src="/images/nauval/arrival.webp" alt="dude" />
    <img
      class="collection__img"
      src="/images/nauval/angrymen.webp"
      alt="dude"
    />
    <img
      class="collection__img"
      src="/images/nauval/whiplash.webp"
      alt="dude"
    />
  </div>
</div>

<script>
</script>
