const notes = [
  { id: 1, title: "note 1", content: "스프린트 스프린트 스프린트" },
  { id: 2, title: "note 2", content: "코드잇 코드잇 코드잇" },
];

const noteList = document.getElementById("note-list");
const noteContent = document.getElementById("note-content");
const addNoteButton = document.getElementById("add-note");
const searchInput = document.getElementById("search");

// 메모 리스트
function renderNotes(search = "") {
  noteList.innerHTML = ""; // 기존 리스트 초기화
  const filteredNotes = notes.filter(
    (note) => note.title.includes(search) || note.content.includes(search)
  );
  filteredNotes.forEach((note) => {
    const li = document.createElement("li");
    li.textContent = note.title;
    li.addEventListener("click", () => showNoteDetail(note));
    noteList.appendChild(li);
  });
}

// 메모 상세보기
function showNoteDetail(note) {
  noteContent.innerHTML = `
      <h2>${note.title}</h2>
      <p>${note.content}</p>
    `;
}

// 검색 이벤트
searchInput.addEventListener("input", (e) => {
  renderNotes(e.target.value);
});

renderNotes(); //페이지가 새로고침 될때 리스트가 띄워질 수 있도록
