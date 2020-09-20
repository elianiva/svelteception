<style>
.card {
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  transition: all ease-out 0.2s;
}

.card__card:hover {
  filter: brightness(1.05);
}

.card__detail {
  padding: 1.5rem 2rem 2rem;
  border-radius: 0 0 0.5rem 0.5rem;
}

.blue {
  background-color: #66d1e1;
  border-bottom: 0.5rem #39c7df solid;
}

.yellow {
  background-color: #feb028;
  border-bottom: 0.5rem #f8aa22 solid;
}

.red {
  background-color: #e65b62;
  border-bottom: 0.5rem #de565a solid;
}

.card__servername {
  font-family: "PT Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #f4f4f4;
  margin-bottom: 0.5rem;
  display: block;
  text-decoration: none;
  transition: color ease-out 0.2s;
}

.card__shortdesc {
  color: #f4f4f4;
  line-height: 1.5rem;
}
</style>

<div class="card">
  <img src="{img}" alt="" />
  <div class="card__detail {color}">
    <a href="{href}" class="card__servername">{title}</a>
    <p class="card__shortdesc">{desc}</p>
  </div>
</div>

<script>
export let href
export let title
export let desc
export let color
export let img
</script>
