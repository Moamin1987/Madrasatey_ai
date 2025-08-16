const lessons = [
  { name: "مذكرة المجد علوم  الصف الرابع ترم اول 2026", file: "مذكرة المجد علوم الصف الرابع ترم اول 2026.pdf" },
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
