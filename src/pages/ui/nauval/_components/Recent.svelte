<style>
.recent {
  background-color: #f0f5f8;
  border-radius: 1rem;
  padding: 1rem 2rem;
  margin: 2rem 0;
}

.recent__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title__text {
  font-size: 1.25rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
}

.title__option {
  background: none;
  color: #888f8c;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
}

.recent__movies {
  margin-top: 1rem;
}

.movie-card {
  padding: 0.5rem 0;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 2fr 2fr;
  align-items: center;
  font-family: "Poppins", sans-serif;
}

.movie-card:not(:last-child) {
  border-bottom: 0.0625rem #ccdde5 solid;
}

.movie-card__img {
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  border-radius: 1rem;
  object-position: top;
}

.movie-card__title {
  font-weight: 700;
  padding-left: 1rem;
}

.movie-card__category,
.movie-card__duration,
.movie-card__time {
  font-size: 0.8rem;
  color: #888c8f;
}
</style>

<div class="recent">
  <div class="recent__title">
    <span class="title__text">Recently Watched</span>
    <select class="title__option">
      <option value="foo">This Week</option>
      <option value="bar">Last 3 days</option>
      <option value="baz">Today</option>
    </select>
  </div>
  <div class="recent__movies">
    {#each movies as { title, categories, duration, time, img }}
      <div class="movie-card">
        <img class="movie-card__img" src={img} alt={title} />
        <span class="movie-card__title">{title}</span>
        <span class="movie-card__category">{categories.join(", ")}</span>
        <span class="movie-card__duration">{duration}</span>
        <span class="movie-card__time">{time}</span>
      </div>
    {/each}
  </div>
</div>

<script>
const movies = [
  {
    title: "Arrival",
    categories: ["Drama", "Sci-Fi"],
    duration: "1h 56min",
    time: "Today",
    img: "/images/nauval/arrival.webp"
  },
  {
    title: "There Will Be Blood",
    categories: ["Drama"],
    duration: "2h 38min",
    time: "Yesterday",
    img: "/images/nauval/blood.webp"
  },
  {
    title: "Whiplash",
    categories: ["Drama", "Music"],
    duration: "1h 46min",
    time: "Yesterday",
    img: "/images/nauval/whiplash.webp"
  }
]
</script>
