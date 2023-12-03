export default class Clock {
    constructor(min, sec) {
      this.min = min;
      this.sec = sec;
    }
  
    printTime() {
        let minute = "";
       let second = "";

       if
    }

    codeHTML = () => {
        codeHTML =
  let li = document.createElement("li");
    li.id = this.id;
    
    let span = document.createElement("span");
    span.innerText = "";

    let buttonStart = document.createElement("button");
    buttonStart.innerHTML = "Start";
    buttonStart.addEventListener("click", this.start);

    let buttonStop = document.createElement("button");
    buttonStop.innerHTML = "Stop";
    buttonStop.addEventListener("click", this.stop);   
    
    // add in li tag 
    li.appendChild(span);
    li.append
li.appendChild(buttonStart);
    li.appendChild(buttonStop);

    // add item in ol (list)
    this.listComponent.appendChild(li);

    };
  
    start() {}
  
    stop() {
      clearInterval(this.timer);
    }
  }




  updateTimeBySec() {
    this.sec++;
    if (this.sec == 60) {
        this.sec = 0;
        this.min++; 
    } 
  }

  start() {
    this
  }