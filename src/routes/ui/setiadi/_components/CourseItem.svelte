<style>
.course {
  display: grid;
  grid-template-columns: 6rem 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 0.5rem;
  padding: 1rem;
  font-family: "Roboto", sans-serif;
}

.course__img {
  width: 6rem;
  height: 6rem;
  border-radius: 0.5rem;
  grid-row: 1/4;
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

.course__progress {
  position: relative;
  height: 0.25rem;
  width: 100%;
  background-color: #efefef;
}

.course__progressbar {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
}
</style>

<div class="course">
  <img class="course__img" {src} alt={title} />
  <span class="course__title">{title}</span>
  <span class="course__author">by {author}</span>
  <div class="course__progress" data-length="20%">
    <span
      class="course__progressbar"
      style="width: {width}; background-color: {colour};"
    />
  </div>
</div>

<script>
export let src, title, author, width, colour
</script>
