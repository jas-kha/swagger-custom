// Back to Home Button for Swagger UI
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.createElement('a');
  btn.href = '/';
  btn.style.position = 'fixed';
  btn.style.top = '20px';
  btn.style.left = '0px';
  btn.style.backgroundColor = '#10b981';
  btn.style.color = 'white';
  // btn.style.font = "16px Yolnoma Pixel, sans-serif";
  btn.style.padding = '10px 12px 10px 12px';
  btn.style.borderRadius = '8px';
  btn.style.fontWeight = 'bold';
  btn.style.textDecoration = 'none';
  btn.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
  btn.style.zIndex = '9999';
  btn.style.transition = '0.3s ease';
  btn.style.display = 'inline-flex';
  btn.style.alignItems = 'center';
  btn.style.gap = '8px';

  btn.onmouseover = () => (btn.style.backgroundColor = '#059669');
  btn.onmouseout = () => (btn.style.backgroundColor = '#10b981');

  const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  icon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  icon.setAttribute('viewBox', '0 0 24 24');
  icon.setAttribute('fill', 'none');
  icon.setAttribute('stroke', 'currentColor');
  icon.setAttribute('stroke-width', '2');
  icon.setAttribute('stroke-linecap', 'round');
  icon.setAttribute('stroke-linejoin', 'round');
  icon.style.width = '20px';
  icon.style.height = '20px';

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M3 9.75L12 3l9 6.75M4.5 10.5V21h15V10.5M9 21v-6h6v6');

  icon.appendChild(path);
  btn.appendChild(icon);
  // btn.appendChild(document.createTextNode("Back to Home"));

  document.body.appendChild(btn);
});
