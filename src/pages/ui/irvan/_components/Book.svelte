<style>
.book {
  width: 10rem;
  flex: 0 0 auto;
  text-align: center;
  cursor: pointer;
  transition: all ease-out 0.2s;
}

.book:hover {
  transform: translateY(-0.25rem);
  filter: brightness(0.95);
}

.book__img {
  position: relative;
  padding: 2rem 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  margin-bottom: 1rem;
}

.book__rating {
  position: absolute;
  bottom: 2.5rem;
  right: 1rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: #1f3a7d;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
}

:global(.book__icon) {
  width: 1rem;
  height: 1rem;
}

.book__img img {
  width: 80%;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
}

.book__title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #696969;
}
</style>

<div class="book">
  <div class="book__img" style="background-color: {background}">
    <img src="{img}" alt="{title}" />
    <span class="book__rating"><Star class="book__icon" />
      {rating}</span>
  </div>
  <span class="book__title">{title}</span>
</div>

<script>
import Star from "../icons/star.svg"
export let title, rating, img, background
</script>
