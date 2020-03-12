window.onload = () => {
  const element = document.getElementById("detail");

  const width = `Lebar layar adalah ${window.screen.width} px`;
  const height = `Tinggi layar adalah ${window.screen.height} px`;
  const pixelRatio = `Pixel device ratio adalah  ${window.devicePixelRatio}`;
  const userAgent = `User agent: ${navigator.userAgent}`;
  const browserVendor = `Browser vendor-nya ${navigator.vendor}`;

  const content = [width, height, userAgent, browserVendor];
  content.forEach(text => {
    const TextNode = document.createElement("P");
    TextNode.innerHTML = `<h4>${text}</h4>`;
    element.appendChild(TextNode);
  });
};
