const notes = [
  { id: 1, title: "note 1", content: "스프린트 스프린트 스프린트" },
  { id: 2, title: "note 2", content: "코드잇 코드잇 코드잇" },
];

const noteList = document.getElementById("note-list");
const noteContent = document.getElementById("note-content");
const addNoteButton = document.getElementById("add-note");
const searchInput = document.getElementById("search");

// 메모 리스트
function renderNotes() {
  noteList.innerHTML = ""; // 기존 리스트 초기화
  notes.forEach((note) => {
    const li = document.createElement("li");
    li.textContent = note.title || "제목 없음"; // 제목 표시
    li.addEventListener("click", () => {
      noteTitle.textContent = note.title; // 제목 로드
      noteContent.textContent = note.content; // 내용 로드
    });
    noteList.appendChild(li);
  });
}

// 검색 이벤트
searchInput.addEventListener("input", (e) => {
  renderNotes(e.target.value);
});

renderNotes(); //페이지가 새로고침 될때 리스트가 띄워질 수 있도록

const noteTitle = document.getElementById("note-title");
const saveNoteButton = document.getElementById("save-note");

// 저장 버튼 클릭 이벤트
saveNoteButton.addEventListener("click", () => {
  const title = noteTitle.textContent.trim(); // 제목 가져오기
  const content = noteContent.textContent.trim(); // 내용 가져오기

  if (!title || !content) {
    alert("제목과 내용을 모두 입력하세요!");
    return;
  }

  const newNote = {
    id: Date.now(),
    title: title,
    content: content,
  };

  notes.push(newNote);
  renderNotes();

  // 제목과 내용 초기화
  noteTitle.textContent = "제목을 입력하세요...";
  noteContent.textContent = "내용을 입력하세요...";
  alert("메모가 저장되었습니다!");
});
