<style>
.discuss {
  padding: 0.5rem 1rem;
  margin: .5rem 0;
  font-family: "Roboto", sans-serif;
}

.discuss__profile {
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 1rem;
  align-items: center;
}

.discuss__pict {
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  grid-row: 1/3;
  object-fit: cover;
}

.discuss__name {
  font-weight: 600;
  font-size: 1.125rem;
}

.discuss__date {
  color: #787878;
}

.discuss__content {
  margin-top: 0.5rem;
  font-weight: 500;
  color: #787878;
}
</style>

<div class="discuss">
  <div class="discuss__profile">
    <img class="discuss__pict" src="{src}" alt="{name}" />
    <span class="discuss__name">{name}</span>
    <span class="discuss__date">{day} at {time} {period}</span>
  </div>
  <p class="discuss__content">{content}</p>
</div>

<script>
export let src, name, day, time, period, content
</script>
