<style>
.item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
  color: #a5b7e2;
  cursor: pointer;
}

.item__title {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
}

.active {
  color: #36497d;
  padding: 1rem 2rem;
  margin-left: -2rem;
  margin-right: -2rem;
  box-shadow: 0 0.5rem 1rem rgba(170, 117, 255, 0.1);
}

:global(.active svg) {
  color: #aa75ff;
}

:global(.item svg) {
  width: 1.5rem;
  height: 1.5rem;
}
</style>

{#if isActive}
  <style>
  </style>
{/if}

<div class="item" class:active="{isActive}">
  <svelte:component this="{icon}" />
  <span class="item__title">{title}</span>
</div>

<script>
export let icon, title
export let isActive = false
</script>
