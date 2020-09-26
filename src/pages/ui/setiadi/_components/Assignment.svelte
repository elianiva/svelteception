<style>
  .assignment {
    padding: 1rem 2rem;
    background-color: #FFF5F4;
    border-radius: 1rem;
    margin-bottom: 1rem;
    font-family: "Roboto", sans-serif;
  }

  .assignment__title {
    display: block;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: .5rem;
  }

  .assignment__desc {
    font-weight: 500;
    color: #787878;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }

  .assignment__wrapper {
    display: grid;
    grid-template-columns: 10rem 1fr 1fr;
    gap: 1rem;
    align-items: center;
  }

  .assignment__button {
    padding: 0.75rem 1rem;
    background-color: #FF7A7B;
    border: none;
    border-radius: .5rem;
    font-size: 1.125rem;
    font-weight: 600;
    color: #ffffff;
  }

  .assignment__time {
    font-weight: 600;
    color: #FF7A7B;
  }

  .assignment__student {
    justify-self: flex-end;
    font-weight: 600;
    color: #121212
  }
</style>

<div class="assignment">
  <span class="assignment__title">{num}. {title}</span>
  <p class="assignment__desc">{desc}</p>
  <div class="assignment__wrapper">
    <button class="assignment__button">View Details</button>
    <span class="assignment__time">{time} day left</span>
    <span class="assignment__student">{students} Students Collected</span>
  </div>
</div>

<script>
export let num, title, desc, time, students
</script>
