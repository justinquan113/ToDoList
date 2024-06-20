


document.addEventListener("keydown", event => {
    if(event.key == "Enter"){
        addToList();
    }
})

function addToList (){
    //adding to the list using appendchild
    const itemInput = document.getElementById("input").value;
    const newItem = document.createElement("p");
    newItem.textContent = itemInput;
    
    if (!itemInput){
        return;
    }
    else{
        //add the styling from css file
        newItem.classList.add("list-styling");
        document.getElementById("theList").appendChild(newItem);
        //clearing the input box
        document.getElementById("input").value = '';
        //creating remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "remove";
        removeButton.classList.add("remove-button");

        //this adds the remove button as a child to each item in the list
        newItem.appendChild(removeButton);
        removeButton.addEventListener('click', () =>{
            newItem.remove();
        })
    }   
}




   

 


    

    



