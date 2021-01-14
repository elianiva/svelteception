<style>
.pagination {
  display: flex;
  justify-content: center;
  padding: 1rem;
  gap: 0.5rem;
}

.pagination__item {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #efefef;
  border-radius: 50%;
}

.pagination__item.active {
  background-color: #fb6c38;
}
</style>

<div class="pagination">
  {#each pages as page}
    <div class="pagination__item {page.active ? 'active' : ''}" />
  {/each}
</div>

<script>
export let pages
</script>
