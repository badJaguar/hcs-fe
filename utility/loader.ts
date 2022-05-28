export default `
.lds-ring {
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 120px;
  top: 50vh;
  z-index: 9999;
  backgroundColor: yellow;
}
.ring-background {
  background: rgb(40,122,224);
  background: linear-gradient(90deg, rgba(40,122,224,1) 0%, rgba(173,226,195,1) 100%);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
}
.lds-ring div:not(.ring-background) {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 120px;
  height: 120px;
  border: 12px solid #287AE0;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #287AE0 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
}`;
