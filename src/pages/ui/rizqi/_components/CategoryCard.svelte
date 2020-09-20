<style>
.category {
  flex: 1;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.category__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
  transform: scale(1.1);
  transition: all ease-out 0.2s;
}

.category:hover .category__img {
  filter: hue-rotate(-20deg) brightness(0.8);
  transform: scale(1);
}

.category__caption {
  position: absolute;
  z-index: 2;
  font-size: 2rem;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
}
</style>

<figure class="category">
  <figcaption class="category__caption">{title}</figcaption>
  <img class="category__img" src="{src}" alt="{title}" />
</figure>

<script>
export let title
export let src
</script>
