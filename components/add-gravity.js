customElements.define('add-gravity', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // view
    this.shadowRoot.innerHTML = `
      <style>
        .target {
          position: fixed;
          left: 50%;
          top: 0px;
          transform: translate(-50%, -50%);
        }
      </style>
      <div class="target"><slot></slot></div>
    `

    const target = this.shadowRoot.querySelector(".target");

    let targetClicked = false;
    const checkClicked = () => targetClicked;
    target.addEventListener("mousedown", () => {
      targetClicked = true;
    })

    document.body.addEventListener("mousemove", (e) => {
      if (targetClicked) {
        target.style.left = `${e.clientX}px`;
        target.style.top = `${e.clientY}px`;
      }
    })

    document.body.addEventListener("mouseup", () => {
      if (targetClicked) drop(0);
      targetClicked = false;
    })

    const takeStep = (step = 0) => {
      
      let cTop = target.style.top;
      if (cTop === "") cTop = "0px";

      let g = this.getAttribute("g") ?? 0.01;
      g = parseFloat(g);
      const dDelta = 0.5 * g * step**2

      target.style.top = `${parseFloat(cTop) + dDelta}px`;


      const h = document.body.clientHeight;
      const hitBottom = parseFloat(target.style.top) >= (h * .9);
      if (!hitBottom) { // Stop the animation after 2 seconds
        window.requestAnimationFrame(() => takeStep(step + 1));
      }
    }
    
    const drop = (step) => {
      window.requestAnimationFrame(() => takeStep(step));
    }

    drop(0)
  }
  
})