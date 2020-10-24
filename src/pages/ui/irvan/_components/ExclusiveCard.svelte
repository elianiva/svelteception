<style>
.exclusive {
  display: flex;
  padding: 2rem;
  gap: 3rem;
  border-radius: 1rem;
  background-color: #f9faff;
}

.exclusive__img {
  width: 8rem;
  grid-column: 1/2;
  grid-row: 1/5;
}

.exclusive__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.exclusive__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f3a7d;
  cursor: pointer;
}

.exclusive__author {
  font-size: 1.25rem;
  font-weight: 700;
  color: #696969;
  cursor: pointer;
}

.exclusive__scores {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.exclusive__rating {
  padding: 0.5rem;
  color: #1f3a7d;
  border-radius: 0.25rem;
  font-size: 0.9rem;
  font-weight: 700;
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.1);
}

:global(.exclusive__rating svg) {
  width: 0.8rem;
  height: 0.8rem;
}

.exclusive__reviews {
  color: #696969;
  font-weight: 700;
}

.exclusive__categories {
  display: flex;
  gap: 1rem;
}

.exclusive__category {
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.1);
  text-transform: capitalize;
  font-weight: 700;
  color: #b0b0b0;
}
</style>

<div class="exclusive">
  <img class="exclusive__img" src="{img}" alt="{title}" />
  <div class="exclusive__content">
    <span class="exclusive__title">{title}</span>
    <span class="exclusive__author">{author}</span>
    <div class="exclusive__scores">
      <span class="exclusive__rating"><Star />{rating}</span>
      <span class="exclusive__reviews">{reviews} reviews</span>
    </div>
    <div class="exclusive__categories">
      {#each categories as item}
        <span class="exclusive__category">{item}</span>
      {/each}
    </div>
  </div>
</div>

<script>
import Star from "../icons/star.svg"
export let img, title, author, rating, reviews, categories
</script>
