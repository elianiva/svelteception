<style>
.box {
  border-radius: 1rem;
  background-color: #ffffff;
  padding: 1.5rem 0;
}

.box__title {
  display: block;
  padding: 0 1rem 1.5rem;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
}
</style>

<div class="box" style="grid-row: {row}; grid-column: {col}">
  <span class="box__title">{title}</span>
  <div class="box__content">
    <slot />
  </div>
</div>

<script>
export let title, row, col
</script>
