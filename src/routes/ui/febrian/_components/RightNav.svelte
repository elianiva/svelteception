<style>
.side {
  padding: 1rem;
}

.side__img-wrapper {
  position: relative;
  width: 100%;
  height: 16rem;
  background-image: url("/images/febrian/that-guy.jpg");
  background-size: cover;
  border-radius: 0.25rem;
  overflow: hidden;
}

.side__img-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5) 20%,
    rgba(0, 0, 0, 0) 35%
  );
}

.side__img-name {
  position: absolute;
  font-family: "Montserrat", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  bottom: 1.5rem;
  left: 0.5rem;
}

.side__img-status {
  position: absolute;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  color: #ffffff;
  bottom: 0.5rem;
  left: 0.5rem;
  padding-left: 0.75rem;
}

.side__img-status::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: #2dda53;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
}

.side__items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

.side__item {
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
}

.item__name {
  color: #787878;
}

.item__value {
  color: #1c263d;
  font-weight: 600;
  font-size: 0.85rem;
}

.side__show-more {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #3663f5;
  font-size: 0.8rem;
}

.side__media {
  margin-top: 1rem;
}

.media__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  margin-bottom: 1rem;
}

.media__title {
  font-size: 0.85rem;
  font-weight: 600;
}

.media__see-more {
  font-size: 0.8rem;
  color: #3663f5;
  font-weight: 600;
}

.media__img-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.media__img {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
}

.side__docs {
  margin-top: 1rem;
}

.docs__title {
  display: block;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.docs__items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.docs__item {
  display: grid;
  grid-template-columns: 3rem 1fr 2rem;
  grid-template-rows: 1.5rem 1.5rem;
  column-gap: 0.25rem;
  align-items: center;
  justify-content: center;
  border-bottom: 0.0625rem #ebebeb solid;
  padding-bottom: 0.5rem;
}

.doc__icon {
  grid-column: 1/2;
  grid-row: 1/3;
  justify-self: start;
  background-color: #ffc912;
  color: #ffffff;
  border-radius: 0.25rem;
  padding: 0.5rem;
}

.doc__icon.blue {
  background-color: #3663f5;
}

.doc__name {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  grid-column: 2/3;
  grid-row: 1/2;
}

.doc__detail {
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  grid-column: 2/3;
  grid-row: 2/3;
  color: #787878;
}

:global(.doc__dl) {
  grid-column: 3/4;
  grid-row: 1/3;
  width: 1.5rem;
  height: 1.5rem;
  justify-self: center;
  color: #b0b0b0;
}

:global(.doc__dl.blue) {
  color: #3663f5;
}

:global(.doc__dl.grey) {
  color: #b0b0b0;
}
</style>

<div class="side">
  <div class="side__img-wrapper">
    <span class="side__img-name">Bessie Cooper</span>
    <span class="side__img-status">Online</span>
  </div>
  <div class="side__items">
    <div class="side__item">
      <span class="item__name">ID</span>
      <span class="item__value">#432873</span>
    </div>
    <div class="side__item">
      <span class="item__name">Email</span>
      <span class="item__value">yus@fikristudio.com</span>
    </div>
    <div class="side__item">
      <span class="item__name">Phone</span>
      <span class="item__value">(0281)212-55779</span>
    </div>
    <span class="side__show-more">Show More</span>
  </div>
  <div class="side__media">
    <div class="media__heading">
      <span class="media__title">Media</span>
      <span class="media__see-more">See More</span>
    </div>
    <div class="media__img-wrapper">
      <img class="media__img" src="/images/febrian/hold-1.jpeg" alt="hold-1" />
      <img class="media__img" src="/images/febrian/hold-2.png" alt="hold-2" />
      <img class="media__img" src="/images/febrian/hold-3.jpg" alt="hold-3" />
    </div>
  </div>
  <div class="side__docs">
    <span class="docs__title">Docs</span>
    <div class="docs__items">
      <div class="docs__item">
        <div class="doc__icon">
          <File width="1.25rem" height="1.25rem" />
        </div>
        <span class="doc__name">Return Product</span>
        <span class="doc__detail">pdf • 1.7Mb</span>
        <Download class="doc__dl blue" />
      </div>
      <div class="docs__item">
        <div class="doc__icon blue">
          <File width="1.25rem" height="1.25rem" />
        </div>
        <span class="doc__name">New Customer Guide</span>
        <span class="doc__detail">docx • 2.5Mb</span>
        <Download class="doc__dl grey" />
      </div>
    </div>
  </div>
</div>

<script>
import File from "../icons/file.svg"
import Download from "../icons/download.svg"
</script>
