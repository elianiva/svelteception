<style>
.card {
  display: flex;
  background-color: #4b5497;
  background-image: url("../images/aghits/wave.png");
  background-size: cover;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 4rem;
}

.card__profile {
  flex: 1;
}

.card__username {
  display: block;
  color: #efefef;
  font-weight: 700;
  margin-top: 1rem;
}

.card__icons {
  display: flex;
  gap: 1rem;
  align-items: center;
  background: none;
}

.card__icon {
  background: none;
  border: none;
  cursor: pointer;
}
</style>

<div class="card">
  <div class="card__profile">
    <img src="../images/aghits/pfp.png" alt="profile pict" />
    <span class="card__username">{username}</span>
  </div>
  <div class="card__icons">
    <button class="card__icon">
      <Settings width="24px" height= "24px"/>
    </button>
    <button class="card__icon">
      <Logout width="24px" height= "24px"/>
    </button>
  </div>
</div>

<script>
import Settings from "../icons/settings.svg";
import Logout from "../icons/logout.svg";

export let username
</script>
