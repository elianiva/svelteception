<style>
.pie {
  background-color: #f0f5f8;
  padding: 1rem 1rem 2rem;
  border-radius: 1rem;
  margin-top: 2rem;
}

.pie__title {
  font-size: 1rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
}

.pie__content {
  padding-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.pie__circle {
  position: relative;
  background-image: conic-gradient(
    #2184ae 122deg,
    #ffd608 0 173deg,
    #e93c5a 0 263deg,
    #9ccd62 0 166deg
  );
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  transform: rotateZ(15deg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.pie__circle::before {
  position: absolute;
  content: "";
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: #9ccd62;
  top: 0rem;
  right: 3rem;
}

.pie__circle::after {
  position: absolute;
  content: "";
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: #2184ae;
  top: 4.5rem;
  right: 0.5rem;
}

.pie__circle-middle {
  width: 4.5rem;
  height: 4.5rem;
  background-color: #f0f5f8;
  border-radius: 50%;
}

.pie__circle-middle::before {
  position: absolute;
  content: "";
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: #ffd608;
  top: 5.75rem;
  right: 2.5rem;
}

.pie__circle-middle::after {
  position: absolute;
  content: "";
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: #e93c5a;
  top: 3.25rem;
  right: 5.75rem;
}

.pie__detail {
  display: flex;
  flex-direction: column;
}

.detail__text {
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  line-height: 2em;
  font-weight: 500;
  padding-left: 1rem;
}

.detail__text:nth-child(1)::before,
.detail__text:nth-child(2)::before,
.detail__text:nth-child(3)::before,
.detail__text:nth-child(4)::before {
  position: absolute;
  content: "";
  width: 0.5rem;
  height: 0.5rem;

  border-radius: 50%;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.detail__text:nth-child(1)::before {
  background-color: #2184ae;
}
.detail__text:nth-child(2)::before {
  background-color: #9ccd62;
}
.detail__text:nth-child(3)::before {
  background-color: #e93c5a;
}
.detail__text:nth-child(4)::before {
  background-color: #ffd608;
}
</style>

<div class="pie">
  <span class="pie__title">Most Watched Genre</span>
  <div class="pie__content">
    <div class="pie__circle">
      <div class="pie__circle-middle" />
    </div>
    <div class="pie__detail">
      <span class="detail__text">Action</span>
      <span class="detail__text">Drama</span>
      <span class="detail__text">Sci-Fi</span>
      <span class="detail__text">Adventure</span>
    </div>
  </div>
</div>

<script>
</script>
