# Modul 6: Grid Container dan Grid Item

## Grid Container
Adalah parent yang diberi `display: grid` atau `display: inline-grid`. Properti yang dipasang di **container**:
```css
.container {
  display: grid;
  grid-template-columns: ...;
  grid-template-rows: ...;
  gap: ...;
  justify-items: ...;
  align-items: ...;
}
```

## Grid Item
Adalah setiap child langsung dari container. Properti yang dipasang di **item** (bukan container):
```css
.item {
  grid-column: ...;
  grid-row: ...;
  justify-self: ...;
  align-self: ...;
}
```

## Contoh Membedakan Keduanya
```html
<div class="container">        <!-- ini Grid Container -->
  <div class="item">Item 1</div>  <!-- ini Grid Item -->
  <div class="item">Item 2</div>
</div>
```
```css
.container { display: grid; grid-template-columns: 1fr 1fr; }
.item { background: #333; color: white; padding: 10px; }
```

## Tips Pemula
Kesalahan paling umum adalah menaruh properti grid item (seperti `grid-column`) di elemen yang salah, atau lupa mengaktifkan `display: grid` di container. Selalu cek dua hal ini dulu kalau layout terlihat aneh.