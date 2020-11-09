<style>
.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: #f7444e;
  padding-top: 2rem;
}

.sidebar__icon {
  display: flex;
  align-items: center;
  color: #ffffff;
}

.sidebar__icon:last-child {
  position: absolute;
  bottom: 2rem;
}

.sidebar__icon--active {
  padding: 1rem;
  color: #f7444e;
  background-color: #ffffff;
  border-radius: 1.25rem;
}
</style>

<aside class="sidebar">
  <div class="sidebar__icon">
    <HomeIcon width="1.5rem" height="1.5rem" />
  </div>
  <div class="sidebar__icon--active">
    <BookIcon width="1.5rem" height="1.5rem" />
  </div>
  <div class="sidebar__icon">
    <ChartIcon width="1.5rem" height="1.5rem" />
  </div>
  <div class="sidebar__icon">
    <BellIcon width="1.5rem" height="1.5rem" />
  </div>
  <div class="sidebar__icon">
    <SettingsIcon width="1.5rem" height="1.5rem" />
  </div>
</aside>

<script>
import HomeIcon from "../icons/house-icon.svg"
import BookIcon from "../icons/book-icon.svg"
import ChartIcon from "../icons/chart-icon.svg"
import BellIcon from "../icons/bell-icon.svg"
import SettingsIcon from "../icons/settings-icon.svg"
</script>
