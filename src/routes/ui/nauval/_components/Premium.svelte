<style>
.premium {
  background-color: #2184ae;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  justify-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1rem;
}

.premium__diamond {
  background-color: #ffffff;
  border-radius: 50%;
  padding: 1rem;
  color: #2184ae;
  display: flex;
  align-items: center;
  justify-content: center;
}

.detail__text {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  display: block;
  color: #ffffff;
  padding-bottom: 0.5rem;
}

.detail__button {
  border: 0.125rem #ffffff solid;
  border-radius: 1rem;
  background: none;
  padding: 0.25rem 1rem;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all ease-out 0.1s;
}

.detail__button:hover {
  background-color: #ffffff;
  color: #2184ae;
}
</style>

<div class="premium">
  <div class="premium__diamond">
    <Diamond class="diamond__icon" />
  </div>
  <div class="premium__detail">
    <span class="detail__text">Upgrade To Premium</span>
    <button class="detail__button">Learn More</button>
  </div>
</div>

<script>
import Diamond from "../icons/diamond.svg"
</script>
