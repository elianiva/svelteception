<style>
.popular {
  flex: 1;
}

.popular__img {
  width: 100%;
  height: 8rem;
  border-radius: 1rem;
  object-fit: cover;
}

.popular__figure {
  position: relative;
}

.popular__time {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: #efefef;
  border-radius: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
}

.popular__title {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  margin-top: 1rem;
  display: block;
  text-decoration: none;
  color: #282828;
}

.popular__title:hover {
  color: #fb6c38;
}

.popular__label {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Nunito";
}

.popular__score,
.popular__price {
  font-weight: 600;
}
</style>

<div class="popular">
  <figure class="popular__figure">
    <img class="popular__img" src="{src}" alt="" />
    <figcaption class="popular__time">{duration} min</figcaption>
  </figure>
  <a href="{href}" class="popular__title">{title}</a>
  <div class="popular__label">
    <StarIcon width="1rem" height="1rem" />
    <span class="popular__score">{score}</span>
    <span class="popular__price">Rp {price.toLocaleString('id-ID')}</span>
  </div>
</div>

<script>
import StarIcon from "../icons/star.svg"
export let src, title, duration, href, score, price
</script>
