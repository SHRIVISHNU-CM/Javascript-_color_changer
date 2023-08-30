document.title = 'background color changer';
const button = document.getElementById('btn');
const text = document.getElementById('changedhexcolor');


button.addEventListener('click', colorchanger);
//random hexcolor generator
function render() {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
    let val = "#";
    for (let i = 0; i < 6; i++) {
        val = val + arr[Math.floor(Math.random() * 16)];

    }
    return val;

}

function colorchanger() {
    
    const hexcode = render();
    text.innerText = hexcode;
    document.body.style.backgroundColor = hexcode;
}