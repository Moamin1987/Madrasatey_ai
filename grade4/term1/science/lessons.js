const lessons = [
  { name: "الدرس الأول (تجريبي)", file: "lesson1.html" },
];

window.onload = () => {
  const container = document.getElementById("lessons-container");
  lessons.forEach(lesson => {
    const btn = document.createElement("button");
    btn.textContent = lesson.name;
    btn.onclick = () => openPage(lesson.file);
    container.appendChild(btn);
  });
};
