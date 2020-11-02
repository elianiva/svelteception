<style>
.item {
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: flex-end;
  gap: 0.75rem;
  padding: 0.75rem 0.5rem 0.75rem 2rem;
  color: #b1b5c4;
  margin: 0 -2rem;
  cursor: pointer;
}

.item:hover {
  color: #fbaea6;
  font-weight: 600;
  background-image: linear-gradient(
    to right,
    rgba(251, 174, 166, 0.1),
    rgba(0, 0, 0, 0)
  );
}

.active {
  position: relative;
  background-image: linear-gradient(
    to right,
    rgba(251, 174, 166, 0.1),
    rgba(0, 0, 0, 0)
  );
  color: #fbaea6;
  font-weight: 600;
}

.active::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 0.25rem;
  background-color: #fbaea6;
}

.item__name {
  line-height: 1.25rem;
}

:global(.item.active .item__icon) {
  color: #fbaea6;
}

:global(.item__icon) {
  width: 1.25rem;
  height: 1.25rem;
}
</style>

<div class="item" class:active="{isActive}">
  <svelte:component this="{icon}" class="item__icon" />
  <span class="item__name">{name}</span>
</div>

<script>
export let icon, name, isActive
</script>
