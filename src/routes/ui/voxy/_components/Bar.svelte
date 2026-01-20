<style>
.bar {
  width: 100%;
  height: 2rem;
  background-color: #f6f6f6;
  border-radius: 0.5rem;
  position: relative;
  box-shadow: 0 0.25rem 1rem rgba(203, 69, 154, 0.075);
}

.bar__filler {
  background-image: linear-gradient(to bottom right, #f31a9a, #cb0f7f, #ca68ab);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: 0.5rem;
}
</style>

<div class="bar">
  <div class="bar__filler" style="width: {amount}%"></div>
</div>

<script>
export let amount
</script>
