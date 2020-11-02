<style>
.call {
  position: relative;
  width: 100%;
  height: 24rem;
  background-image: url("/images/ariq/main.png");
  background-size: cover;
  margin: 1.5rem 0;
  border-radius: 1rem;
  padding: 1rem;
}

.call::after {
  content: "..";
  vertical-align: top;
  position: absolute;
  top: -1.5rem;
  right: 2rem;
  font-size: 4rem;
  color: #ffffff;
}

.call__duration {
  font-family: "Montserrat", sans-serif;
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #65b2a9;
  font-weight: 600;
  color: #ffffff;
  border-radius: 1rem;
  font-size: 0.8rem;
  letter-spacing: 0.2em;
}

.call__ui {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  gap: 1rem;
}

.ui__item {
  padding: 0.5rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
}

.ui__call:hover,
.ui__item:hover {
  filter: brightness(0.95);
}

:global(.ui__icon) {
  color: #515b76;
  width: 1.5rem;
  height: 1.5rem;
}

.ui__call {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #e35957;
  border-radius: 50%;
  cursor: pointer;
}

:global(.ui__call .ui__icon) {
  color: #ffffff;
}

.call__you {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background-color: #ffeee6;
  color: #ff8345;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 2rem;
}
</style>

<div class="call">
  <div class="call__duration">24:07</div>
  <div class="call__you">AF</div>
  <div class="call__ui">
    <div class="ui__item">
      <Record class="ui__icon" />
    </div>
    <div class="ui__item">
      <Mic class="ui__icon" />
    </div>
    <div class="ui__call">
      <Call class="ui__icon" />
    </div>
    <div class="ui__item">
      <Camera class="ui__icon" />
    </div>
    <div class="ui__item">
      <Full class="ui__icon" />
    </div>
  </div>
</div>

<script>
import Record from "../icons/circle.svg"
import Mic from "../icons/mic.svg"
import Call from "../icons/call.svg"
import Camera from "../icons/video.svg"
import Full from "../icons/full.svg"
</script>
