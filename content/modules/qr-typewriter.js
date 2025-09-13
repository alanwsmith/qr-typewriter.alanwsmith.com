export default class {
  clearCodes(el, _event) {
    el.innerHTML = "";
  }

  clear(el, _event) {
    el.value = "";
  }

  update(el, event) {
    const output = document.createElement("div");
    const lines = event.target.value.split("\n");
    lines.forEach((line) => {
      const chars = Array.from(line);
      const output_line = document.createElement("div");
      output_line.classList.add("output_line");
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
        output_line.appendChild(charDiv);
      });
      output.appendChild(output_line);
    });
    el.replaceChildren(output);
  }
}
