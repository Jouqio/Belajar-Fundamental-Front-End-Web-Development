    class HelloWorld extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `<p>Halo, ini komponen pertamaku!</p>`;
      }
    }
    customElements.define('hello-world', HelloWorld);