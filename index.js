const notesList = [
    {
      id: 1,
      title: "Coding JavaScript",
      createdAt: "2024-03-13T20:43:34.067Z",
      completed: false,
    },
    {
      id: 2,
      title: "Study physics",
      createdAt: "2024-02-13T20:43:34.067Z",
      completed: true,
    },
    {
      id: 3,
      title: "React.js intervew",
      createdAt: "2024-01-13T20:43:34.067Z",
      completed: true,
    },
    {
      id: 4,
      title: "Cooking",
      createdAt: "2024-04-13T20:43:34.067Z",
      completed: false,
    },
];

function queryData(sort="latest", filter="coding", status="completed"){
    const NotesByDate= sortNotesByDate(sort);
    const NotesByCompletionStatus =SortNotesByCompletionStatus(status);
    const searchNotesResult = searchNotes(filter);
    return {NotesByDate, NotesByCompletionStatus, searchNotesResult}
}

console.log(queryData("earliest", "study", "uncompleted"));

function sortNotesByDate(sortBy = "latest"){  
    return [...notesList].sort((a,b)=>{
        if(sortBy === "latest") return new Date(b.createdAt) - new Date(a.createdAt)
        return new Date(a.createdAt) - new Date(b.createdAt)
    })
}

function SortNotesByCompletionStatus(sortBy="completed"){
    if(sortBy === "completed") return notesList.filter(note => note.completed)
    return notesList.filter(note => !note.completed);
}

function searchNotes(titleSearchTerm){
    const searchTerm = titleSearchTerm.toLowerCase().trim();
    const searchStatus = notesList.filter(note=> note.title.toLowerCase().trim().includes(searchTerm))
    if(searchStatus.length > 0) return `The search term ${searchTerm} was found in the note titled 👉 ${searchStatus.map(item => item.title)}.✅`;
    return "The search term was not found!❌"
}
