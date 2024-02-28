let notesData=[];
let generatedId=1;

if(localStorage.getItem("notes")!==null)
{
    notesData=JSON.parse(localStorage.getItem("notes"));
    
//     check if array is not empty then only check for last element id otherwise continue with id of 1 for new element cause array in 
//     localstorage will become empty if you delete all elements
    if(notesData.length!==0)
    {
        let lastIndex=notesData.length-1;
        generatedId=notesData[lastIndex].id+1;
    }
    
}

function displayExistingNotes()
{

    notesData.forEach(function(oldNote,index){

            let note=document.createElement("div");
            note.classList.add("note");

            let title=document.createElement("input");
            title.classList.add("title");
            title.setAttribute("placeholder","Sticky Title...");
            title.setAttribute("type","text");
            title.setAttribute("data-id",oldNote.id);
            title.value=oldNote.title;
            title.onkeyup=updateTitle;

            let content=document.createElement("textarea");
            content.classList.add("content");
            content.setAttribute("placeholder","Content Here");
            content.setAttribute("data-id",oldNote.id);
            content.value=oldNote.content;
            content.onkeyup=updateContent;

            let deleteBtn=document.createElement("img");
            deleteBtn.src="./delete.png";
            deleteBtn.setAttribute("data-id",oldNote.id);
            deleteBtn.onclick=deleteNote;

            note.appendChild(title);
            note.appendChild(content);
            note.append(deleteBtn);

            document.getElementById("notes").appendChild(note);


    })

}

displayExistingNotes();


function newNote()
{
    let note=document.createElement("div");
    note.classList.add("note");

    let title=document.createElement("input");
    title.classList.add("title");
    title.setAttribute("placeholder","Sticky Title...");
    title.setAttribute("type","text");
    title.setAttribute("data-id",generatedId);
    title.onkeyup=updateTitle;

    

    let content=document.createElement("textarea");
    content.classList.add("content");
    content.setAttribute("placeholder","Content Here");
    content.setAttribute("data-id",generatedId);
    content.onkeyup=updateContent;

    let deleteBtn=document.createElement("img");
    deleteBtn.src="data:image/jpeg;base64,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";
    deleteBtn.setAttribute("data-id",generatedId);
    deleteBtn.onclick=deleteNote;
    

    note.appendChild(title);
    note.appendChild(content);
    note.append(deleteBtn);

    document.getElementById("notes").appendChild(note);

    notesData.push({id:generatedId,title:"",content:""});
    generatedId++;

    

    localStorage.setItem("notes",JSON.stringify(notesData));


}


function updateTitle()
{
    let titleId=Number(this.getAttribute("data-id"));
    let titleValue=this.value;

    let obj=notesData.find(function(note,index){
        return note.id===titleId;
    })

    obj.title=titleValue;

    localStorage.setItem("notes",JSON.stringify(notesData));

   
    



}


function updateContent()
{
    let contentId=Number(this.getAttribute("data-id"));
    let contentValue=this.value;

    let obj=notesData.find(function(note,index){
        return note.id===contentId;
    })

    obj.content=contentValue;

    localStorage.setItem("notes",JSON.stringify(notesData));
  



}

function deleteNote()
{

    let deleteId=Number(this.getAttribute("data-id"));
    
    let index=notesData.findIndex(function(note,index){
        return note.id===deleteId;
    })

    notesData.splice(index,1);

    this.parentNode.remove();

    localStorage.setItem("notes",JSON.stringify(notesData));

}

