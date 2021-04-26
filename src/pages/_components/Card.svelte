<style>
.card {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  border: 0.0625rem #b0b0b0 solid;
}

.card__img {
  height: 10rem;
  object-fit: cover;
  object-position: top;
}

.card__content {
  display: grid;
  grid-template-rows: 4rem 1.5rem 1fr;
  padding: 0.5rem 1rem 1rem;
}

.card__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #343434;
  font-family: "Roboto Condensed", sans-serif;
  text-decoration: none;
}

.card__title:hover {
  color: #3d5dd9;
}

.card__creator {
  display: block;
  color: #898989;
  font-family: "Roboto", sans-serif;
  font-weight: 200;
  line-height: 2rem;
}

.card__creator a {
  color: #3d5dd9;
  text-decoration: none;
}

.card__detail {
  align-self: flex-end;
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
</style>

<div class="card">
  <img class="card__img" {src} alt="" />
  <div class="card__content">
    <a href={path} target="_blank" class="card__title">{title}</a>
    <span class="card__creator">
      Designed by
      <a href={link}>{designer}</a>
    </span>
    {#if type === "mobile"}
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
export let title, path, link, designer, type, src
</script>
