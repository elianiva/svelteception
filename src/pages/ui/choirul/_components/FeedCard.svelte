<style>
.card__img {
  width: 100%;
  border-radius: 1rem;
  border: 0.25rem #ffffff solid;
  box-shadow: -0.5rem 0.5rem 1.5rem rgba(170, 117, 255, 0.1);
  margin-bottom: 0.75rem;
}

.card__detail {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Poppins", sans-serif;
}

.detail__name {
  font-weight: 700;
  color: #253a73;
  font-size: 0.875rem;
  flex: 1;
}

.detail__img {
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
}

.detail__likes,
.detail__comments {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #a5b7e2;
  font-weight: 700;
  font-size: 0.875rem;
}

.detail__likes {
  margin-right: 0.5rem;
}

.detail__button {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #a5b7e2;
  transition: all ease-out 0.2s;
}

.detail__button:hover {
  filter: brightness(0.95);
}

:global([class^="detail__icon"]) {
  width: 1.25rem;
  height: 1.25rem;
  transition: all ease-out 0.2s;
}
</style>

<div class="card">
  <img class="card__img" src={img} alt={name} />
  <div class="card__detail">
    <img class="detail__img" src={detailImg} alt="" />
    <span class="detail__name">{name}</span>
    <div class="detail__likes">
      <button class="detail__button" on:click={e => toggleStyle(e)}>
        <Heart class="detail__icon--like" />
      </button>
      <span
        class="detail__label"
        style="color: {isLiked ? '#FF5676' : '#a5b7e2'}">{likes}</span
      >
    </div>
    <div class="detail__comments">
      <button class="detail__button">
        <Comment class="detail__icon--comment" />
      </button>
      <span class="detail__label">{comments}</span>
    </div>
  </div>
</div>

<script>
import Heart from "../icons/heart.svg"
import Comment from "../icons/message.svg"
export let name, img, detailImg, likes, comments

let isLiked = false
const toggleStyle = event => {
  isLiked = !isLiked
  event.target.style.color = isLiked ? "#FF5676" : "#a5b7e2"
}
</script>
