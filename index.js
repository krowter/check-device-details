window.onload = () => {
  const element = document.getElementById("detail");

  const innerHeight = `Inner height-nya ${window.innerHeight} px`;
  const innerWidth = `Inner width-nya ${window.innerWidth} px`;
  const outerHeight = `Inner height-nya ${window.outerHeight} px`;
  const outerWidth = `Inner width-nya ${window.outerWidth} px  `;
  const userAgent = `User agent: ${navigator.userAgent}`;
  const browserVendor = `Browser vendor-nya ${navigator.vendor}`;

  const content = [
    innerHeight,
    innerWidth,
    outerHeight,
    outerWidth,
    userAgent,
    browserVendor
  ];
  content.forEach(text => {
    const TextNode = document.createElement("P");
    TextNode.innerHTML = `<h4>${text}</h4>`;
    element.appendChild(TextNode);
  });
};
