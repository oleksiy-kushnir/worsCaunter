 console.clear()
 setTimeout(()=>{
  console.log(textArea.value)
  }, 5000
)
const textArea = document.getElementById("textArea");
let numbers = document.querySelectorAll(".number")

textArea.addEventListener("input", () => {
  const text = textArea.value;

  numbers[1].textContent = text.length;

  const words = text.split(" ").filter(word => word !== "");
 numbers[0].textContent = words.length;
//пробіли
  const spaces = text.split("").filter(char => char === " ").length;
numbers[2].textContent = spaces

//абревіатура
  const abr = text.split(" ").filter(item => 
    item.split("").every(char =>  char.toUpperCase() == char) && item

  ).length
console.log(abr)
numbers[3].textContent = abr
});
let letter = "a"
console.log(letter.toLowerCase())
console.log(letter.toUpperCase())
if (letter.toUpperCase() == letter) {
console.log(true)
}
