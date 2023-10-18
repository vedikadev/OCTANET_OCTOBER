  const inputBox = document.getElementById("task-create");
  const listContainer = document.getElementById("list-container");
  const inAchieve = document.getElementById("achievement");
  const listAchieve = document.getElementById("achieve");

  function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData();
  }
  listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
  }, false);
  function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
  }
  function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
  }
  showTask();

  //my own try
  function addAchieve(){
    if(inAchieve.value === ''){
      alert("You must write something!");
  }
  else{
        let li = document.createElement("li");
        li.innerHTML = inAchieve.value;
        listAchieve.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
  }
    inAchieve.value ="";
    saveData();
  }  
  listAchieve.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
  }, false);
  function saveData(){
    localStorage.setItem("data", listAchieve.innerHTML);
  }
  function showTask(){
    listAchieve.innerHTML = localStorage.getItem("data");
  }
  showTask();