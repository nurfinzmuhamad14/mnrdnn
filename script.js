function changeBackground() {
    const colors = ["#f39c12", "#16a085", "#e74c3c", "#9b59b6", "#34495e"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
