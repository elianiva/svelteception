<style>
.msg {
  grid-column: 3/4;
  grid-row: 3/4;
  background-color: var(--white);
  border-radius: 1rem;
  padding: 1rem;
}

.msg__title {
  display: block;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 0.5rem 0 0;
  color: var(--black);
}

.msg__item {
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
  font-family: "Roboto", sans-serif;
}

.msg__name {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: var(--black);
}

.msg__content {
  color: var(--side-icon);
}

.msg__img {
  grid-row: 1/-1;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.img-pink {
  box-shadow: 0 0 0 0.125rem var(--white), 0 0 0 0.25rem #f9a59b;
}

.img-orange {
  box-shadow: 0 0 0 0.125rem var(--white), 0 0 0 0.25rem #ffa700;
}

.img-blue {
  box-shadow: 0 0 0 0.125rem var(--white), 0 0 0 0.25rem #69cae3;
}

.img-purple {
  box-shadow: 0 0 0 0.125rem var(--white), 0 0 0 0.25rem #a27edb;
}
</style>

<div class="msg">
  <span class="msg__title">Messages</span>
  {#each messages as { name, content, color }}
    <div class="msg__item">
      <img
        class="msg__img img-{color}"
        src="/images/manoj/{color}.png"
        alt=""
      />
      <span class="msg__name">{name}</span>
      <span class="msg__content">{content}</span>
    </div>
  {/each}
</div>

<script>
const messages = [
  {
    name: "John Doe",
    content: "Hi Angelina! How are you?",
    color: "pink"
  },
  {
    name: "Charmie",
    content: "Do you need that design?",
    color: "orange"
  },
  {
    name: "Jason Mandela",
    content: "What is the price of hourly...",
    color: "blue"
  },
  {
    name: "Charlie Chu",
    content: "Awesome!!",
    color: "purple"
  }
]
</script>
