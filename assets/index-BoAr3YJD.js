(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`})}connectedCallback(){let e=this.getAttribute(`image`)||``,t=this.getAttribute(`name`)||`Usuario`,n=this.getAttribute(`role`)||`Invitado`;this.render(e,t,n)}render(e,t,n){this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
        }

        .card {
          background: #60a5fa;
          border-radius: 16px;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          background: white;
          flex-shrink: 0;
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .text h3 {
          margin: 0;
          font-size: 1rem;
        }

        .text p {
          margin: 0;
          font-size: 0.8rem;
        }

        button {
          border: none;
          background: #2563eb;
          color: white;
          padding: 0.7rem 1rem;
          border-radius: 10px;
          cursor: pointer;
        }

        button:hover {
          background: #1d4ed8;
        }
      </style>

      <div class="card">
        <div class="info">

          <div class="avatar">
            <img src="${e}" alt="avatar">
          </div>

          <div class="text">
            <h3>${t}</h3>
            <p>${n}</p>
          </div>
        </div>

        <button>Saludar</button>
      </div>
    `,this.shadowRoot.querySelector(`button`).addEventListener(`click`,()=>{this.dispatchEvent(new CustomEvent(`usercard:greet`,{bubbles:!0,composed:!0,detail:{name:t}}))})}};customElements.define(`user-card`,e);var t=e=>`https://goweather.xyz/v2/weather/${e}`,n=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.data=null}connectedCallback(){this.render(),this.fetchWeather()}async fetchWeather(){let e=this.getAttribute(`city`)||`Liberia`;try{let n=await fetch(t(e));this.data=await n.json()}catch{this.data={temperature:`31 °C`,description:`Sunny`}}this.render()}render(){let e=this.data?.temperature,t=this.data?.description;this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
        }

        .weather {
          background: #86efac;
          border-radius: 16px;
          padding: 1rem;
          min-height: 120px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .content {
          text-align: center;
        }

        h2 {
          margin: 0;
        }

        p {
          margin: 0.3rem 0;
        }
      </style>

      <div class="weather">
        ${e?`
          <div class="content">
            <h2>🌤 ${e}</h2>
            <p>${t}</p>
          </div>
        `:`
          <p>Cargando clima...</p>
        `}
      </div>
    `}};customElements.define(`weather-time`,n);var r=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.greetName=``}connectedCallback(){this.render()}greet(e){this.greetName=e,this.render()}render(){let e=this.greetName?`Hola profe ${this.greetName}`:`Sesión por expirar`;this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
        }

        .badge {
          background: #fde68a;
          border-radius: 16px;
          padding: 1rem;
          font-weight: bold;
          text-align: center;
        }
      </style>

      <div class="badge">
        ${e}
      </div>
    `}};customElements.define(`warning-badge`,r);var i=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`})}connectedCallback(){this.render(),this.listen()}listen(){this.addEventListener(`usercard:greet`,e=>{let t=this.shadowRoot.querySelector(`warning-badge`);t&&t.greet(e.detail.name)})}render(){let e=this.getAttribute(`image`)||``,t=this.getAttribute(`name`)||`Alonso`,n=this.getAttribute(`role`)||`Profesor`,r=this.getAttribute(`city`)||`Liberia`;this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
          max-width: 700px;
        }

        .dashboard {
          background: #fca5a5;
          padding: 2rem;
          border-radius: 20px;

          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        warning-badge {
          grid-column: 1 / 3;
        }
      </style>

      <div class="dashboard">

        <user-card
          image="${e}"
          name="${t}"
          role="${n}">
        </user-card>

        <weather-time
          city="${r}">
        </weather-time>

        <warning-badge>
        </warning-badge>

      </div>
    `}};customElements.define(`user-dashboard`,i),console.log(`INDEX CARGADO`);