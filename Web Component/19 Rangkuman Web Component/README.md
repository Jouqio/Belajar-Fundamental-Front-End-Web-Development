# Modul 19: Rangkuman Web Component

## Tiga Pilar Web Component
| Pilar | Fungsi | Modul |
|---|---|---|
| **Custom Elements** | Mendefinisikan tag HTML baru & perilakunya | 3-9 |
| **Shadow DOM** | Mengisolasi struktur & style dari halaman utama | 10-16 |
| **HTML Template** | Mendefinisikan markup reusable tanpa render langsung | 17 |

## Ringkasan Lifecycle Callback
| Callback | Kapan Terpanggil |
|---|---|
| `constructor()` | Saat elemen dibuat (setup awal, `attachShadow`) |
| `connectedCallback()` | Saat elemen masuk ke DOM (render konten) |
| `disconnectedCallback()` | Saat elemen dihapus dari DOM (cleanup) |
| `attributeChangedCallback()` | Saat atribut yang dipantau berubah |

## Ringkasan API Penting
```js
// Mendaftarkan Custom Element
customElements.define('nama-tag', KelasKomponen);

// Membuat Shadow Root
this.attachShadow({ mode: 'open' });

// Memantau atribut
static get observedAttributes() { return ['atribut1', 'atribut2']; }

// Membuat & memakai template
const template = document.createElement('template');
template.innerHTML = `...`;
this.shadowRoot.appendChild(template.content.cloneNode(true));

// Slot untuk konten dari luar
<slot></slot>            <!-- slot default -->
<slot name="judul"></slot>  <!-- named slot -->

// Styling
:host { }                /* styling elemen host */
:host([disabled]) { }    /* styling kondisional */
::slotted(img) { }       /* styling konten yang disisipkan ke slot */
```

## Alur Belajar yang Sudah Dilalui
1. Memahami konsep dasar & alasan Web Component dibutuhkan (Modul 1-2).
2. Membuat & mendaftarkan Custom Element pertama (Modul 3-4).
3. Memahami siklus hidup dan menangani atribut secara reaktif (Modul 5-6).
4. Styling dasar dan menyusun komponen bersarang (Modul 7-9).
5. Mengisolasi komponen sepenuhnya dengan Shadow DOM (Modul 10-13).
6. Membuat komponen fleksibel dengan Slot (Modul 14-16).
7. Menyusun markup secara efisien dengan Template (Modul 17).
8. Menggabungkan semuanya dalam studi kasus nyata (Modul 18).

## Kapan Sebaiknya Memakai Web Component di Project Nyata?
- Membangun **design system** yang dipakai lintas tim/project/framework.
- Membuat **widget mandiri** (chat widget, banner, embed) yang harus terisolasi dari CSS halaman tempat ia dipasang.
- Ingin komponen yang **tahan lama** — karena berbasis standar web native, tidak akan "usang" seiring pergantian framework populer.

## Kelebihan dan Keterbatasan
**Kelebihan:**
- Native browser API, tanpa dependency tambahan.
- Enkapsulasi penuh (style tidak bentrok).
- Bisa dipakai di framework apa pun.

**Keterbatasan:**
- Tidak ada built-in state management/reactivity secanggih React/Vue perlu ditulis manual atau pakai library ringan seperti Lit.
- Server-Side Rendering (SSR) untuk Web Component murni masih lebih rumit dibanding framework modern.
- Sedikit lebih verbose untuk komponen yang sangat kompleks dibanding framework dengan syntax deklaratif.

## Langkah Selanjutnya yang Disarankan
- Coba pelajari **Lit** (library ringan dari tim Google) yang menyederhanakan penulisan Web Component dengan syntax deklaratif mirip JSX.
- Bangun ulang komponen UI sederhana dari website favoritmu (misalnya card produk, modal, tab) menggunakan Web Component murni sebagai latihan mandiri.
