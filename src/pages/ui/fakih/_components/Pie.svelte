<style>
.pie {
  background-color: #ffffff;
  grid-row: 3/-1;
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08);
  color: #2a2a2a;
}

.pie__title {
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
}

.pie__chart-wrapper {
  position: relative;
}

.pie__chart {
  position: relative;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin: 4rem auto;
  background-image: conic-gradient(
    #6a4bff 170deg,
    #fcd200 0 250deg,
    #00c9b8 0 100deg
  );
  transform: rotateZ(-40deg);
}

.pie__chart::after {
  content: "";
  position: absolute;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background-color: #ffffff;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}

.pie__chart-percent {
  position: absolute;
  height: 0.125rem;
  background-color: #2a2a2a;
}

.pie__chart-percent::before {
  content: "";
  position: absolute;
  background-color: #2a2a2a;
}

.pie__chart-percent::after {
  content: "";
  position: absolute;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
}

.pie__chart-percent:nth-child(1) {
  width: 3rem;
  right: 4rem;
  top: -1.5rem;
}

.pie__chart-percent:nth-child(1)::before {
  height: 0.125rem;
  width: 1.5rem;
  left: -1.25rem;
  top: 0.5rem;
  transform: rotateZ(-45deg);
}

.pie__chart-percent:nth-child(1)::after {
  content: "48%";
  height: 0.125rem;
  width: 1.5rem;
  right: -1.75rem;
  top: -0.5rem;
}

.pie__chart-percent:nth-child(2) {
  width: 2rem;
  left: 2rem;
  top: 5rem;
}

.pie__chart-percent:nth-child(2)::before {
  height: 0.125rem;
  width: 1.5rem;
  left: -1.25rem;
  top: 0.5rem;
  transform: rotateZ(-45deg);
}

.pie__chart-percent:nth-child(2)::after {
  content: "34%";
  height: 0.125rem;
  width: 1.5rem;
  left: -1.75rem;
  bottom: -1.25rem;
}

.pie__chart-percent:nth-child(3) {
  width: 2rem;
  right: 5rem;
  bottom: -1.5rem;
}

.pie__chart-percent:nth-child(3)::before {
  height: 0.125rem;
  width: 1.5rem;
  left: -1.25rem;
  top: -0.5rem;
  transform: rotateZ(45deg);
}

.pie__chart-percent:nth-child(3)::after {
  content: "34%";
  height: 0.125rem;
  width: 1.5rem;
  right: -1.75rem;
  top: -0.5rem;
}

.pie__label {
  position: relative;
  display: block;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  color: #2a2a2a;
  font-size: 1rem;
  line-height: 2em;
  padding-left: 2rem;
}

.pie__label::before {
  content: "";
  position: absolute;
  width: 1rem;
  height: 1rem;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
}

.pie__label:nth-child(1)::before {
  background-color: #6a4bff;
}

.pie__label:nth-child(2)::before {
  background-color: #fcd200;
}

.pie__label:nth-child(3)::before {
  background-color: #00c9b8;
}
</style>

<div class="pie">
  <span class="pie__title"> Best agility recently </span>
  <div class="pie__chart-wrapper">
    <div class="pie__chart-percent" />
    <div class="pie__chart-percent" />
    <div class="pie__chart-percent" />
    <div class="pie__chart" />
  </div>
  <div class="pie__labels">
    <span class="pie__label">komputasi grafis</span>
    <span class="pie__label">kalkulus</span>
    <span class="pie__label">teknik nuklir</span>
  </div>
</div>
