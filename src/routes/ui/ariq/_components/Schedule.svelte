<style>
.schedule {
  display: flex;
  gap: 2rem;
}

.schedule__next {
  width: 60%;
}

.schedule__title {
  position: relative;
  display: block;
  color: #122044;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 1rem;
}

.schedule__title::after {
  content: "• •";
  position: absolute;
  right: -1rem;
  font-size: 1.5rem;
}

.schedule__card {
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0.5rem 0.5rem 1.5rem rgba(0, 0, 0, 0.04);
}

.schedule__info,
.invitation__info {
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 0.5rem;
}

.info__title {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #122044;
  align-self: end;
}

.info__detail {
  font-family: "Montserrat", sans-serif;
  font-size: 0.95rem;
  color: #b1b5c4;
  font-weight: 400;
  align-self: start;
}

.info__img,
.invitation__img {
  grid-column: 1/2;
  grid-row: 1/4;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.05);
}

.schedule__detail,
.invitation__detail {
  display: flex;
  align-items: center;
  margin: 1.5rem 0 0.5rem;
}

.schedule__time,
.invitation__time {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #b1b5c4;
  font-family: "Montserrat", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
}

.schedule__people {
  display: flex;
  margin-right: 1.125rem;
  cursor: pointer;
}

.invitation__people:hover .people__img,
.schedule__people:hover .people__img {
  margin-right: 0;
}

.invitation__people {
  display: flex;
  cursor: pointer;
}

.people__img {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  border: 0.125rem #ffffff solid;
  border-right: -0.5rem;
  margin-right: -1.125rem;
  transition: all ease-out 0.2s;
}

.people__img:first-child {
  z-index: 3;
}
.people__img:nth-child(2) {
  z-index: 2;
}
.people__img:last-child {
  z-index: 1;
  margin-right: 0;
}

:global(.schedule__icon),
:global(.invitation__icon) {
  width: 1.125rem;
  height: 1.125rem;
}

.schedule__invitation {
  width: 40%;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0.5rem 0.5rem 1.5rem rgba(0, 0, 0, 0.04);
}

.invitation__buttons {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.invitation__decline,
.invitation__join {
  flex: 1;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  cursor: pointer;
}

.invitation__decline:hover,
.invitation__join:hover {
  filter: brightness(0.95);
}

.invitation__decline {
  background: none;
  color: #ff8345;
}

.invitation__join {
  background: #ff8345;
  color: #ffffff;
}
</style>

<div class="schedule">
  <div class="schedule__next">
    <span class="schedule__title">Next Meeting</span>
    <div class="schedule__card">
      <div class="schedule__info">
        <img class="info__img" src="/images/ariq/shark.png" alt="shark" />
        <span class="info__title">Ikan hiu makan tomat</span>
        <span class="info__detail">Weekly team meeting</span>
      </div>
      <div class="schedule__detail">
        <span class="schedule__time">
          <Clock class="schedule__icon" />
          09:00 - 10:00
        </span>
        <div class="schedule__people">
          <img class="people__img" src="/images/ariq/one.png" alt="1" />
          <img class="people__img" src="/images/ariq/two.png" alt="2" />
          <img class="people__img" src="/images/ariq/three.png" alt="3" />
        </div>
      </div>
    </div>
  </div>
  <div class="schedule__invitation">
    <div class="invitation__info">
      <img class="invitation__img" src="/images/ariq/senja.png" alt="senja" />
      <span class="info__title">Senja kala sepi</span>
      <span class="info__detail">Project plan</span>
    </div>
    <div class="invitation__detail">
      <span class="invitation__time">
        <Clock class="invitation__icon" />
        11:00 - 12:00
      </span>
      <div class="invitation__people">
        <img class="people__img" src="/images/ariq/one.png" alt="1" />
        <img class="people__img" src="/images/ariq/two.png" alt="2" />
      </div>
    </div>
    <div class="invitation__buttons">
      <button class="invitation__decline">
        <Cancel class="invitation__icon" />
        Decline
      </button>
      <button class="invitation__join">
        <Accept class="invitation__icon" />
        Join
      </button>
    </div>
  </div>
</div>

<script>
import Clock from "../icons/clock.svg"
import Cancel from "../icons/cancel.svg"
import Accept from "../icons/accept.svg"
</script>
