<style>
.popular {
  background-color: #f0f5f8;
  border-radius: 1rem;
  padding: 1rem 2rem;
  margin-top: 2rem;
}

.popular__title {
  font-size: 1.25rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
}

.popular__movies {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
}

.movie-card__img {
  width: 100%;
  height: 12.5rem;
  border-radius: 1rem;
  object-fit: cover;
}

.movie-card__title {
  font-family: "Poppins", sans-serif;
  display: block;
  font-weight: 700;
  font-size: 1.125rem;
}

.movie-card__category {
  font-family: "Poppins", sans-serif;
  color: #888c8f;
  font-size: 0.75rem;
}
</style>

<div class="popular">
  <span class="popular__title">Most Popular Movie</span>
  <div class="popular__movies">
    {#each movies as { title, categories, img }}
      <div class="movie-card">
        <img class="movie-card__img" src={img} alt={title} />
        <span class="movie-card__title">{title}</span>
        <span class="movie-card__category">{categories.join(", ")}</span>
      </div>
    {/each}
  </div>
</div>

<script>
const movies = [
  {
    title: "Tenet",
    categories: ["Action", "Sci-Fi"],
    img: "/images/nauval/tenet.webp"
  },
  {
    title: "Soul",
    categories: ["Animation", "Adventure"],
    img: "/images/nauval/soul.webp"
  },
  {
    title: "Mank",
    categories: ["Biography", "Drama"],
    img: "/images/nauval/mank.webp"
  },
  {
    title: "Sound of Metal",
    categories: ["Drama", "Music"],
    img: "/images/nauval/metal.webp"
  }
]
</script>
