<style>
.awards {
  background-color: #ffffff;
  grid-row: 3/4;
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08);
  color: #2a2a2a;
}

.awards__title {
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
}

.awards__main {
  display: flex;
  margin-top: 1rem;
  gap: 0.5rem;
  width: 100%;
}

.awards__img {
  width: 6rem;
}

.awards__content {
  width: 100%;
}

.content__title {
  display: block;
  font-family: "Nunito", sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.content__detail {
  font-family: "Nunito", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
}

.content__bar {
  position: relative;
  width: 100%;
  height: 1rem;
  border-radius: 0.5rem;
  background-color: #eeffaa;
  margin-top: 1rem;
}

.content__bar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 80%;
  border-radius: 0.5rem;
  background-color: #fcd200;
}

.content__bar::after {
  content: "80.7/90";
  position: absolute;
  right: 0;
  bottom: -1.5rem;
  color: #8971ff;
  font-size: 0.625rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}
</style>

<div class="awards">
  <span class="awards__title">Awards</span>
  <div class="awards__main">
    <img class="awards__img" src="/images/fakih/medal.png" alt="medal" />
    <div class="awards__content">
      <span class="content__title"> Level </span>
      <span class="content__detail">
        Congratulations
        <br />
        you're at level 80
      </span>
      <div class="content__bar" />
    </div>
  </div>
</div>
