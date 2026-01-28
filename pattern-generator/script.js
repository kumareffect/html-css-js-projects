// Done

const screen = document.querySelector('.screen');
const generate = document.querySelector('.generate');

generate.addEventListener('click', ()=>{
    const num = parseInt(document.querySelector('.num').value);
    let string = "";

    // Triangle 1 (up to down)
    for(let i=0; i<=num; i++) {
        for(j = 0; j<num-i; j++) {
            string += "&nbsp;&nbsp;";
        }

        for(k=0; k<(i * 2) -1; k++) {
            string += "*";
        }

        string += "<br>";
    }

    // Triangle 2 (down to up)
    for(let i=0; i<=num; i++) {
        for(j = 0; j<i; j++) {
            string += "&nbsp;&nbsp;";
        }

        for(k=0; k<(num - i) * 2 -1; k++) {
            string += "*";
        }

        string += "<br>";
    }

    screen.innerHTML = `${string}`;
})