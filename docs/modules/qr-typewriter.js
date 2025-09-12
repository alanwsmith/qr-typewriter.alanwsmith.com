export default class {
  clear(el, _event) {
    console.log(el);
    el.value = "";
  }

  update(el, event) {
    const chars = Array.from(event.target.value);
    const output = document.createElement("div");
    output.classList.add("output");
    chars.forEach((char) => {
      const charDiv = document.createElement("div");
      charDiv.classList.add("char");
      if (char === " ") {
      } else {
        charDiv.innerHTML = `
<lean-qr value="https://www.youtube.com/watch?v=dQw4w9WgXcQ&letter=${char}" 
  on="goldenrod" off="black"
  pad-x="1" pad-y="1"
></lean-qr>
`;
      }
      output.appendChild(charDiv);
    });
    el.replaceChildren(output);
  }
}
