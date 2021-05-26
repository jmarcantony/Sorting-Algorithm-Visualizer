
function displayArray() {
    let array = [];    
    let length = 100;

    // Generates random numbers and adds to array
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    
    const visual = document.getElementById("visual");

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        let height = (num / 100) * 74;
        let bar = document.createElement("div");
        let p = document.createElement("p");
        let text = document.createTextNode(height);
        p.style.visibility = "hidden";
        p.appendChild(text)
        bar.classList.add("bar")
        bar.appendChild(p);
        bar.id = i;
        bar.style.height = `${height}vh`;
        visual.appendChild(bar);
    }  
    // Returns unsorted array to sort outside the function
    return array;
}

function visualizeBubbleSort() {
    let swapped = false;
    setTimeout(() => {
        for (let i = 1; i < 100; i++) {
            let curr = document.getElementById(i);
            let prev = document.getElementById(i-1);
            let a = parseFloat(curr.firstElementChild.innerHTML);
            let b = parseFloat(prev.firstElementChild.innerHTML);
            if (a < b) {
                curr.style.height = `${b}vh`;
                prev.style.height = `${a}vh`;
                curr.firstElementChild.innerHTML = b;
                prev.firstElementChild.innerHTML = a;
                swapped = true;
            }
        }
        if (swapped === true) {
            visualizeBubbleSort();
        }
    }, 150);
}

displayArray();