    class UserCard extends HTMLElement {
      connectedCallback() {
        const nama = this.getAttribute('name');
        const umur = this.getAttribute('age');
        this.innerHTML = `<p>${nama}, ${umur} tahun</p>`;
      }
    }
    customElements.define('user-card', UserCard);

    class Counter extends HTMLElement {
      static get observedAttributes() {
        return ['count'];
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'count') this.render(newValue);
      }
      connectedCallback() {
        this.render(this.getAttribute('count') || 0);
      }
      render(count) {
        this.innerHTML = `<p>Hitungan: ${count}</p>`;
      }
    }
    customElements.define('my-counter', Counter);