const btn = document.getElementById("button");
btn.addEventListener('click', function() {        
        const str = document.getElementById("string").value;
        const letter = document.getElementById("letter").value;
        if(str.indexOf(letter) === -1) {
            console.log("Letter does not exist in the string");
        }
        else {
            const afterLetter = str.substring(str.indexOf(letter)+1);
            console.log("Substring:",afterLetter);
        }
    }
);