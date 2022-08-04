# material spinner code

# css

```css
@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  to {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
@keyframes loading-rotate {
  to {
    transform: rotate(1turn);
  }
}
.path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 4;
  stroke: #409eff;
  stroke-linecap: round;
}
.circular {
  height: 42px;
  width: 42px;
  animation: loading-rotate 2s linear infinite;
}
```

```html
<svg viewBox="25 25 50 50" class="circular">
  <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
</svg>
```
