const appName = "My App";
const appIcon = "images/banner-icon.png";

const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
  display: none;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #6e777c;
  font-family: "DM Sans", sans-serif;
  font-size: 13.5px;
  z-index: 9999999;
  width:95vw;
  line-height: 23px;
}

:host([hidden]) {
  display: none;
}

#install {
  padding: 8px 14px 8px 12px;
  background: #fff;
  max-height: 72px;
  border-radius: 8px;
  box-shadow: 0 0 0 1pt rgb(197 197 197);
  display: flex;
  align-items: center;
  gap: 8px;
}

#share {
  vertical-align: top;
  padding-right: 3px;
  width: 13px;
  margin-top:-3px;
  padding-left: 1px;
}

#arrowOuter {
  display: none;
}

#arrowInner {
  display: none;
}

#close {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 10px;
  height: 10px;
  padding: 5px;
  cursor: pointer;
}

#icon {
 min-width: 40px;
 min-height:40px;
 max-width: 60px;
 max-height:60px;
}

#add{
  width: 12px;
  margin-bottom:-3px;
}

@media only screen and (max-width: 490px) {
  #arrowOuter {
    display: block;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid rgb(197 197 197);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  #arrowInner {
    display: block;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -8px;
  }
}

@media only screen and (min-width: 490px) {
  :host {
    font-size: 13.5px;
    line-height: 24px;
    max-width: 520px;
  }

  #install {
    gap:16px;
  }

  #add{
    width: 16px;
    margin-bottom:-2px;
    margin-left: 1px;
  }

  #share {
    padding-right: 2px;
    width: 15.5px;
    margin-top: -2px;
  }

}


</style>

<div id="install">

<img  id="icon" width="17" height="22" src="${appIcon}" alt="Banner icon">

<div>
Add <strong>${appName}</strong> to your Home Screen for the best experience and to get regular updates.
  Tap <strong>Share</strong>

  <svg id="share" width="17" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.303 5.003 8.029 1.729 4.756 5.003l-.865-.865L8.029 0l4.138 4.138-.864.865Z" fill="#3478F6"/><path d="M7.412.865h1.235v12.97H7.41V.865Z" fill="#3478F6"/><path d="M14.205 21.246H1.853A1.82 1.82 0 0 1 0 19.393V8.276a1.82 1.82 0 0 1 1.853-1.853h4.323V7.66H1.853c-.37 0-.618.247-.618.617v11.117c0 .371.247.618.618.618h12.352c.37 0 .618-.247.618-.618V8.276c0-.37-.247-.617-.618-.617H9.882V6.423h4.323a1.82 1.82 0 0 1 1.853 1.853v11.117a1.82 1.82 0 0 1-1.853 1.853Z" fill="#3478F6"/></svg>
    <path
      d="M11.3025 5.00275L8.02907 1.72934L4.75567 5.00275L3.89099 4.13808L8.02907 0L12.1671 4.13808L11.3025 5.00275Z"
      fill="#3478F6"
    />
    <path
      d="M7.4115 0.864685H8.64674V13.8348H7.4115V0.864685Z"
      fill="#3478F6"
    />
    <path
      d="M14.2053 21.2463H1.85287C0.802909 21.2463 0 20.4434 0 19.3934V8.27618C0 7.22622 0.802909 6.42331 1.85287 6.42331H6.17622V7.65856H1.85287C1.48229 7.65856 1.23524 7.90561 1.23524 8.27618V19.3934C1.23524 19.764 1.48229 20.011 1.85287 20.011H14.2053C14.5759 20.011 14.8229 19.764 14.8229 19.3934V8.27618C14.8229 7.90561 14.5759 7.65856 14.2053 7.65856H9.88196V6.42331H14.2053C15.2553 6.42331 16.0582 7.22622 16.0582 8.27618V19.3934C16.0582 20.4434 15.2553 21.2463 14.2053 21.2463Z"
      fill="#3478F6"
    />
  </svg>
  and <strong>Add to Home Screen</strong> <svg id= "add" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 14C9.28334 14 9.521 13.904 9.713 13.712C9.905 13.52 10.0007 13.2827 10 13V10H13C13.2833 10 13.521 9.904 13.713 9.712C13.905 9.52 14.0007 9.28267 14 9C14 8.71667 13.904 8.479 13.712 8.287C13.52 8.095 13.2827 7.99934 13 8H10V5C10 4.71667 9.904 4.479 9.712 4.287C9.52 4.095 9.28267 3.99934 9 4C8.71667 4 8.479 4.096 8.287 4.288C8.095 4.48 7.99934 4.71734 8 5V8H5C4.71667 8 4.479 8.096 4.287 8.288C4.095 8.48 3.99934 8.71734 4 9C4 9.28334 4.096 9.521 4.288 9.713C4.48 9.905 4.71734 10.0007 5 10H8V13C8 13.2833 8.096 13.521 8.288 13.713C8.48 13.905 8.71734 14.0007 9 14ZM2 18C1.45 18 0.979002 17.804 0.587002 17.412C0.195002 17.02 -0.000664969 16.5493 1.69779e-06 16V2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H16C16.55 1.69779e-06 17.021 0.196002 17.413 0.588002C17.805 0.980002 18.0007 1.45067 18 2V16C18 16.55 17.804 17.021 17.412 17.413C17.02 17.805 16.5493 18.0007 16 18H2ZM2 16H16V2H2V16Z" fill="#6e777c"/>
  </svg> .
</div>
</div>

<div id="arrowOuter"></div>
<div id="arrowInner"></div>

<svg
id="close"
width="5"
height="5"
viewBox="0 0 5 5"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M5 0.4375L4.5625 0L2.5 2.0625L0.4375 0L0 0.4375L2.0625 2.5L0 4.5625L0.4375 5L2.5 2.9375L4.5625 5L5 4.5625L2.9375 2.5L5 0.4375Z"
  fill="#6e777c"
/>
</svg>


`;

export default class AddToHomeScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._closeClick = closeClick.bind(this);
  }

  connectedCallback() {
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iPad|iPhone|iPod/i);
    const webkit = !!ua.match(/WebKit/i);
    const isSafari = !!ua.match(/Version\/[\d\.]+.*Safari/);
    const isStandalone = window.navigator.standalone;
    const isNativeApp = window.navigator.userAgent.includes("gonative");

    const iOSSafari =
      iOS && webkit && isSafari && !isStandalone && !isNativeApp;

    if (iOSSafari) {
      this.style.display = "inline-block";
      this.shadowRoot
        .getElementById("close")
        .addEventListener("click", this._closeClick);
    }
  }

  disconnectedCallback() {
    this.shadowRoot
      .getElementById("close")
      .removeEventListener("click", this._closeClick);
  }
}

function closeClick() {
  this.style.display = "none";
}

window.customElements.define("add-to-home-screen", AddToHomeScreen);
