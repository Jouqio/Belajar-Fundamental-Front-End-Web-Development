    class LifecycleDemo extends HTMLElement {
      constructor() {
        super();
        console.log('1. constructor dipanggil');
      }
      connectedCallback() {
        console.log('2. connectedCallback: elemen masuk ke DOM');
        this.innerHTML = '<p>Halo, saya elemen dengan siklus hidup!</p>';
      }
      disconnectedCallback() {
        console.log('3. disconnectedCallback: elemen keluar dari DOM');
      }
    }
    customElements.define('lifecycle-demo', LifecycleDemo);