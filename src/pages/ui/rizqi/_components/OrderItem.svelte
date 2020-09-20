<style>
.order {
  display: grid;
  grid-template-columns: 4rem 2rem 2rem 1fr 4rem;
  align-items: center;
  justify-items: center;
  gap: 0.25rem;
  height: 4rem;
  font-weight: 600;
  color: #282828;
}

.order__img {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
  background-color: #fff7ed;
}

.order__price {
  color: #b0b0b0;
  justify-self: flex-end;
}

.destination {
  display: grid;
  grid-template-columns: 4rem 1fr 4rem;
  align-items: center;
  justify-items: center;
  font-weight: 600;
  color: #282828;
  gap: 0.25rem;
  height: 4rem;
}

.order__icon {
  width: 2rem;
  height: 2rem;
}

.order__img {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

{#if food}
  <div class="order">
    <img class="order__img" src="{src}" alt="" />
    <span class="order__qty">{qty}</span>
    <span class="order__symbol">&times;</span>
    <span class="order__name">{name}</span>
    <span class="order__price">Rp {price}k</span>
  </div>
{:else}
  <div class="destination">
    <div class="order__img"><img class="order__icon" src="{src}" alt="" /></div>
    <span class="order__name">{name}</span>
    <span class="order__price">{price}</span>
  </div>
{/if}

<script>
export let src
export let qty
export let name
export let price
export let food
</script>
