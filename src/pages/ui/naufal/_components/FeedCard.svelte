<style>
.card {
  width: 100%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
}

.card__img {
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 0.5rem;
  display: block;
}

.card__detail {
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.detail__pfp {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.pfp__img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
}

.pfp__name {
  text-transform: capitalize;
  font-size: 1.125rem;
  font-weight: 500;
}

.detail__right {
  display: flex;
  gap: 1.75rem;
}

.detail__comments :global(.comments__icon),
.detail__likes :global(.likes__icon),
.detail__share :global(.share__icon),
.detail__bookmark :global(.bookmark__icon) {
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
}

.detail__comments,
.detail__likes,
.detail__bookmark,
.detail__share {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
</style>

<div class="card">
  <img class="card__img" src="{imgUrl}" alt="" />
  <div class="card__detail">
    <div class="detail__pfp">
      <img
        class="pfp__img"
        src="/images/naufal/{name.toLowerCase()}.webp"
        alt="pfp"
      />
      <span class="pfp__name">{name}</span>
    </div>
    <div class="detail__right">
      <div class="detail__likes" on:click="{() => (isLiked = !isLiked)}">
        {#if isLiked}
          <HeartFilled class="likes__icon" />
        {:else}
          <HeartOutline class="likes__icon" />
        {/if}
        <span class="likes__count">{likes}</span>
      </div>
      <div class="detail__comments">
        <Comment class="comments__icon" />
        <span class="comments__count">{comments}</span>
      </div>
      <div class="detail__share">
        <Share class="share__icon" />
      </div>
      <div class="detail__bookmark">
        <Bookmark class="bookmark__icon" />
      </div>
    </div>
  </div>
</div>

<script>
import HeartOutline from "../icons/heart-outlined.svg"
import HeartFilled from "../icons/heart-filled.svg"
import Comment from "../icons/comment.svg"
import Share from "../icons/send-outline.svg"
import Bookmark from "../icons/bookmark-outline.svg"

let isLiked = false

export let imgUrl, name, likes, comments
</script>
