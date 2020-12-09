<style>
.growth {
  background-color: #ffffff;
  grid-column: 2/3;
  grid-row: 4/5;
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08);
  color: #2a2a2a;
}

.growth__title {
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
}

.growth__chart {
  position: relative;
  margin: 0 -1.5rem;
}

.growth__chart :global(.icon) {
  position: relative;
  z-index: 5;
  width: 100%;
  color: #6a4bff;
}

.growth__line {
  position: absolute;
  border-top: 0.125rem dashed #d5ccff;
  left: 0;
  right: 0;
}

.growth__line:nth-last-child(1) {
  bottom: 0rem;
}

.growth__line:nth-last-child(2) {
  bottom: 2.5rem;
}

.growth__line:nth-last-child(3) {
  bottom: 5rem;
}

.growth__month {
  display: flex;
  gap: 1rem;
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #abbce3;
  margin-top: 1rem;
}

.month__name {
  flex: 1;
}

</style>

<div class="growth">
  <span class="growth__title">Growth</span>
  <div class="growth__chart">
    <Line class="icon" />
    <div class="growth__line" />
    <div class="growth__line" />
    <div class="growth__line" />
  </div>
  <div class="growth__month">
    <span class="month__name">Jan</span>
    <span class="month__name">Feb</span>
    <span class="month__name">Mar</span>
    <span class="month__name">Apr</span>
    <span class="month__name">May</span>
    <span class="month__name">Jun</span>
  </div>
</div>

<script>
import Line from "../icons/growth.svg"
</script>
