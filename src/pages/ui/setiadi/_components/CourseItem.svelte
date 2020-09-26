<style>
.course {
  display: grid;
  grid-template-columns: 6rem 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 0.5rem;
  padding: 1rem;
  font-family: "Roboto", sans-serif;
}

.course__img {
  width: 6rem;
  height: 6rem;
  border-radius: 0.5rem;
  grid-row: 1/3;
  object-fit: cover;
}

.course__title {
  align-self: flex-end;
  font-size: 1.125rem;
  font-weight: 600;
}

.course__author {
  align-self: flex-start;
  font-weight: 500;
  color: #787878;
}
</style>

<div class="course">
  <img class="course__img" src="{src}" alt="{title}" />
  <span class="course__title">{title}</span>
  <span class="course__author">by {author}</span>
</div>

<script>
export let src, title, author
</script>
