<style>
.card {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  overflow: hidden;
  background-color: #171C26;
  transition: all ease-out 0.2s;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border: 0.0625rem #3b465a solid;
}

.card__img {
  height: 10rem;
  object-fit: cover;
  object-position: top;
  filter: brightness(0.8);
}

.card__content {
  padding: 0.5rem 1rem 1rem;
}

.card__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #cbccc6;
  font-family: "Roboto Condensed", sans-serif;
  text-decoration: none;
  transition: color ease-out 0.2s;
}

.card__title:hover {
  color: #73d0ff;
}

.card__creator {
  display: block;
  color: #707a8c;
  font-family: "Roboto", sans-serif;
  font-weight: 200;
  line-height: 2rem;
}

.card__creator a {
  color: #73d0ff;
  text-decoration: none;
}

.card__detail {
  font-family: "Roboto", sans-serif;
  display: block;
  color: #707a8c;
  margin-top: 1rem;
  font-size: 1.125rem;
}

.card__icon {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
}

@media only screen and (min-width: 600px) {
  .card:hover {
    transform: translateY(-0.25rem);
    filter: brightness(1.2) !important;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  }
}
</style>

<div class="card">
  <img class="card__img" src="{src}" alt="" />
  <div class="card__content">
    <a href="{path}" target="_blank" class="card__title">{title}</a>
    <span class="card__creator">Designed by
      <a href="{link}">{designer}</a></span>
    {#if type === 'mobile'}
      <span class="card__detail">
        <img class="card__icon" src="images/global/mobile.svg" alt="mobile" />
        Mobile UI
      </span>
    {:else}
      <span class="card__detail">
        <img class="card__icon" src="images/global/desktop.svg" alt="desktop" />
        Desktop UI
      </span>
    {/if}
  </div>
</div>

<script>
export let title
export let path
export let link
export let designer
export let type
export let src
</script>
