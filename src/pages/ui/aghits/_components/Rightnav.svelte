<style>
.rightnav__icon:hover {
  cursor: pointer;
}
.rightnav {
  background-color: #f5f5f5;
}

.rightnav__container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0.5rem;
  border-radius: 1rem 0 0 1rem;
  background-color: #4b5497;
  height: 100%;
}

.rightnav__icon {
  background: none;
  border: none;
  padding: 1rem 0.75rem;
  border-radius: 0.5rem;
}

.rightnav__icon img {
  width: 2rem;
  height: 2rem;
}

.rightnav__container .active {
  background-color: #4a5084;
}
</style>

<aside class="rightnav">
  <div class="rightnav__container">
    <button class="rightnav__icon active">
      <img src="../images/aghits/users.svg" alt="" />
    </button>
    <button class="rightnav__icon">
      <img src="../images/aghits/settings.svg" alt="settings" />
    </button>
  </div>
</aside>
