<style>
.menu__heading {
  display: relative;
  font-size: 1.5rem;
  font-weight: 700;
}

.menu__divider {
  background-color: #eaeaea;
  height: 0.125rem;
  border: none;
  margin: 1rem 0 1rem;
}

.menu__items {
  font-size: 1.125rem;
  list-style: none;
  margin-bottom: 2rem;
}

.menu__item {
  margin: 0.75rem 0 0 0.5rem;
  position: relative;
  line-height: 2rem;
  transition: color ease-out 0.2s;
}

.menu__link {
  text-decoration: none;
  font-weight: 400;
  color: #696969;
}

.active a {
  color: #4c5598;
  font-weight: 700;
}

.menu__item:hover a {
  color: #4c5598;
  font-weight: 700;
}

.active::before {
  content: "";
  position: absolute;
  top: 0;
  left: -0.5rem;
  bottom: 0;
  width: 0.125rem;
  background-color: #4c5598;
}
</style>

<div class="menu">
  <span class="menu__heading">{title}</span>
  <hr class="menu__divider" />
  <ul class="menu__items">
    {#each items as item}
      <li class="menu__item {item.active ? 'active' : ''}">
        <a
          class="menu__link"
          href="{item.href}"
          onclick="return false"
        >{item.text}</a>
      </li>
    {/each}
  </ul>
</div>

<script>
export let title
export let items
</script>
