<style>
.body {
  display: flex;
  position: relative;
  background-color: #121212;
  min-height: 100vh;
  min-width: 1800px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fbfbfb;
  background-image: url("/images/rahmat/pattern.svg");
  background-repeat: repeat;
  overflow: hidden;
  min-width: 1860px;
  height: 32rem;
}

.container::before {
  content: "アイドル";
  position: absolute;
  font-size: 28rem;
  -webkit-text-stroke: 0.5px #787878;
  color: transparent;
  font-family: "Sawarabi Gothic";
  font-weight: 600;
  white-space: nowrap;
  letter-spacing: 2rem;
  transform: rotateZ(-4deg);
}

.main {
  position: relative;
}

.main__name {
  position: absolute;
  z-index: 20;
  left: -13rem;
  top: 4.5rem;
  display: flex;
  min-width: 23.5rem;
  font-family: "Sawarabi Gothic", sans-serif;
  font-size: 3rem;
  line-height: 4rem;
  box-shadow: 0 0 1.5rem rgba(232, 88, 139, 0.75);
  transform: rotateZ(-4deg);
}

.main__name::before {
  content: "";
  position: absolute;
  border-left: 0.625rem solid #322c2e;
  border-bottom: 0.625rem solid #322c2e;
  left: -1.5rem;
  bottom: -1.5rem;
  width: 5rem;
  height: 2rem;
}

.name__first {
  position: relative;
  background-color: #ffffff;
  color: #3e52e2;
  padding: 0 0.5rem 0 1rem;
}

.name__first::before {
  content: "12";
  position: absolute;
  top: -6rem;
  left: -0.25rem;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-size: 7rem;
  font-weight: 700;
  text-shadow: 0 0 1.5rem rgba(232, 88, 139, 0.75);
}

.name__last {
  position: relative;
  background-color: #322c2e;
  color: #ee4a81;
  padding: 0 0.5rem;
}

.main__seiyuu {
  position: absolute;
  z-index: 18;
  width: 15.5rem;
  top: 6.75rem;
  left: -2.25rem;
  padding: 0 1rem 0 0.5rem;
  font-family: "Sawarabi Gothic", sans-serif;
  font-size: 3.5rem;
  line-height: 6rem;
  color: #ffffff;
  background-image: linear-gradient(to top right, #bd427b 20%, #f86091 60%);
  transform: rotateZ(-4deg);
  box-shadow: 0 0 1.5rem rgba(232, 88, 139, 0.75);
}

.main__seiyuu::before {
  content: "";
  position: absolute;
  border-right: 0.5rem solid #322c2e;
  border-bottom: 0.5rem solid #322c2e;
  right: -1rem;
  bottom: -1rem;
  height: 3rem;
  width: 2rem;
}

.riamu {
  position: absolute;
  z-index: 5;
  left: 50%;
  top: -17rem;
  transform: translateX(-50%) rotateZ(-2deg);
  width: 24rem;
  filter: drop-shadow(0 0 0.5rem rgba(232, 88, 139, 0.5));
  -webkit-filter: drop-shadow(0 0 0.5rem rgba(232, 88, 139, 0.5));
}

.main__bg {
  position: absolute;
  z-index: 2;
  left: -12.5rem;
  top: -8rem;
  width: 15rem;
  height: 16rem;
  background-color: #322c2e;
  transform: rotateZ(-2deg);
}

.main__bg::before {
  content: "";
  position: absolute;
  left: -2rem;
  top: 0;
  height: 1.5rem;
  width: 6rem;
  background-color: #322c2e;
}

.main__cross {
  position: absolute;
  z-index: 20;
  height: 1.25rem;
  width: 4rem;
  background-color: #fd6e9c;
  right: -12rem;
  top: -3rem;
  transform: rotateZ(35deg);
  box-shadow: 0 0 1.5rem rgba(232, 88, 139, 0.1);
}

.main__cross::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: #fd6e9c;
  transform: rotateZ(90deg);
}

.bottom {
  position: absolute;
  z-index: 20;
  bottom: -8.5rem;
  left: -4rem;
  right: -3rem;
  height: 10rem;
  padding-right: 4rem;
  background-color: #ee4d81;
  display: flex;
  justify-content: flex-end;
  transform: rotateZ(-2.5deg);
}

.bottom::before {
  content: "YUMEMI";
  position: absolute;
  top: -8rem;
  font-size: 7.5rem;
  font-weight: 800;
  color: transparent;
  font-family: "Montserrat", sans-serif;
  -webkit-text-stroke: 1px #fd7c90;
}

.bottom-alt {
  position: absolute;
  z-index: 2;
  bottom: -7.5rem;
  left: -4rem;
  right: -3rem;
  height: 10rem;
  padding-right: 4rem;
  background-color: #fd7c90;
  transform: rotateZ(-2.5deg);
}

.bottom-popup {
  position: absolute;
  left: 26.5rem;
  bottom: 2rem;
  width: 20rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: #fd7c90;
  transform: rotateZ(-45deg);
  box-shadow: 0 0 1.5rem rgba(232, 88, 139, 0.1);
}

.bottom-popup::before {
  content: "";
  position: absolute;
  right: 1.75rem;
  bottom: -4rem;
  width: 18rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: #fd7c90;
  box-shadow: 0 0 1.5rem rgba(232, 88, 139, 0.1);
}

.bottom-popup::after {
  content: "";
  position: absolute;
  right: 2.5rem;
  bottom: -8rem;
  width: 18rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: #fd7c90;
  box-shadow: 0 0 1.5rem rgba(232, 88, 139, 0.1);
}

.bottom__text {
  font-family: "Sawarabi Gothic", sans-serif;
  font-size: 3.25rem;
  line-height: 4rem;
  color: #ffffff;
}

.bottom__icons {
  position: absolute;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
  gap: 0.5rem;
}

.top__icons {
  position: absolute;
  display: flex;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  gap: 0.5rem;
}

.top__icons :global(svg),
.bottom__icons :global(svg) {
  width: 1.5rem;
  height: 1.5rem;
  color: #ffffff;
}

.top {
  position: absolute;
  z-index: 5;
  top: -8.5rem;
  left: -4rem;
  right: -3rem;
  height: 10rem;
  padding-right: 4rem;
  background-color: #41cfe5;
  display: flex;
  justify-content: flex-start;
  transform: rotateZ(-2.5deg);
}

.top::before {
  content: "RIAMU";
  position: absolute;
  bottom: -9rem;
  left: 5rem;
  font-size: 9rem;
  font-weight: 800;
  color: transparent;
  font-family: "Montserrat", sans-serif;
  -webkit-text-stroke: 1px #7aafe5;
}

.top-alt {
  position: absolute;
  z-index: 2;
  top: -7.5rem;
  left: -4rem;
  right: -3rem;
  height: 10rem;
  padding-right: 4rem;
  background-color: #7aafe5;
  transform: rotateZ(-2.5deg);
}

.top-popup {
  position: absolute;
  right: 27.5rem;
  top: 2rem;
  width: 20rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: #7aafe5;
  transform: rotateZ(-45deg);
  box-shadow: 0 0 1.5rem rgba(232, 88, 139, 0.1);
}

.top-popup::before {
  content: "";
  position: absolute;
  right: 1.75rem;
  top: -4rem;
  width: 17rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: #7aafe5;
  box-shadow: 0 0 1.5rem rgba(232, 88, 139, 0.1);
}

.top-popup::after {
  content: "";
  position: absolute;
  right: 2.5rem;
  top: -8rem;
  width: 15rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: #7aafe5;
  box-shadow: 0 0 1.5rem rgba(232, 88, 139, 0.1);
}

.top__text {
  position: absolute;
  font-family: "Sawarabi Gothic", sans-serif;
  font-size: 3.25rem;
  line-height: 4rem;
  bottom: 0;
  left: 4.5rem;
  color: #ffffff;
}

.left {
  position: absolute;
  left: -2.5rem;
  top: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  transform: rotateZ(-15deg);
}

.left span {
  padding: 0.25rem;
  background-color: #ee4d81;
  font-family: "Sawarabi Gothic", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  box-shadow: 0.5rem -0.5rem 0 #fd7c90;
  letter-spacing: 0.075em;
}

.left-2 {
  margin-left: -2rem;
}

.left-3 {
  margin-left: -2rem;
}

.left-4 {
  margin-left: -3rem;
}

.right {
  position: absolute;
  z-index: 10;
  right: -4rem;
  top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  transform: rotateZ(-15deg);
}

.right span {
  padding: 0.25rem;
  background-color: #41cfe5;
  font-family: "Sawarabi Gothic", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  box-shadow: -0.5rem 0.5rem 0 #7aafe5;
  letter-spacing: 0.075em;
}

.right-1 {
  margin-right: -2rem;
}

.right-2 {
  margin-right: 1rem;
}

.right-3 {
  margin-right: 0;
}

.right-4 {
  margin-right: 3rem;
}

.container :global(.top-circle) {
  position: absolute;
  z-index: 4;
  top: 2rem;
  left: 43.25rem;
  transform: rotateZ(-10deg);
  width: 26.5rem;
}

.right-line {
  position: absolute;
  background-color: #999ac4;
  width: 46rem;
  height: 0.2rem;
  right: 0.75rem;
  top: 7.25rem;
  transform: rotateZ(-15deg);
}

.container :global(.bottom-circle) {
  position: absolute;
  z-index: 4;
  bottom: 1rem;
  left: 44.5rem;
  transform: rotateZ(-190deg) rotateY(180deg);
  width: 26.5rem;
}

.left-line {
  position: absolute;
  background-color: #da829e;
  width: 46rem;
  height: 0.2rem;
  left: -1rem;
  bottom: 6.25rem;
  transform: rotateZ(-15deg);
}

.container :global(.right-arrow) {
  position: absolute;
  z-index: 10;
  color: #7aafe5;
  height: 2rem;
  right: 36rem;
  top: 10rem;
  transform: rotateZ(-15deg);
}

.container :global(.left-arrow) {
  position: absolute;
  z-index: 10;
  color: #da829e;
  height: 2rem;
  left: 33rem;
  bottom: 8.75rem;
  transform: rotateZ(-15deg);
}
</style>

<div class="body">
  <div class="container">
    <div class="left">
      <span class="left-1">可愛い | 可愛い | 可愛い</span>
      <span class="left-2">ピンク | ピンク | ピンク</span>
      <span class="left-3">アイドル | アイドル</span>
      <span class="left-4">主人 | 主人 | 主人</span>
    </div>
    <div class="top-popup"></div>
    <div class="top-alt"></div>
    <div class="top">
      <div class="top__icons">
        <Rotate />
        <Eye />
        <Crop />
        <Trash />
        <Temp />
        <Wand />
      </div>
      <div class="top__text">夢見りあむ</div>
    </div>
    <div class="main">
      <div class="main__cross"></div>
      <div class="main__name">
        <span class="name__first">夢見り</span>
        <span class="name__last">あむ〜〜</span>
      </div>
      <div class="main__seiyuu">星希成奏</div>
      <img class="riamu" src="/images/rahmat/riamu.webp" alt="" />
      <div class="main__bg"></div>
    </div>
    <div class="bottom-popup"></div>
    <div class="bottom-alt"></div>
    <div class="bottom">
      <div class="bottom__icons">
        <Rotate />
        <Eye />
        <Crop />
        <Trash />
        <Temp />
        <Wand />
      </div>
      <div class="bottom__text">夢見りあむ</div>
    </div>
    <div class="right">
      <span class="right-1">餃子 | 餃子 | 餃子</span>
      <span class="right-2">オタク | オタク</span>
      <span class="right-3">アイドル | アイドル</span>
      <span class="right-4">主人 | 主人 | 主人</span>
    </div>
    <Circle class="top-circle" />
    <Circle class="bottom-circle" />
    <div class="right-line"></div>
    <Shape class="right-arrow" />
    <div class="left-line"></div>
    <Shape class="left-arrow" />
  </div>
</div>

<script>
import Circle from "./icons/circle.svg"
import Shape from "./icons/shape.svg"
import Rotate from "./icons/rotate.svg"
import Eye from "./icons/eye.svg"
import Trash from "./icons/trash.svg"
import Temp from "./icons/temp.svg"
import Wand from "./icons/wand.svg"
import Crop from "./icons/crop.svg"
import { metatags } from "@sveltech/routify"

metatags.title = "Rahmat | Svelteception"
metatags.description = "Yumemi Riamu by Rahmat"
</script>
