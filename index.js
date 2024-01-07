const selectComponent = document.querySelector(".form-select")
const inputComponent = document.getElementById("input-perso")
const inputType = document.getElementById("input-type")


const inputTypes = [
  "button",
  "checkbox",
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "sumbit",
  "tel",
  "text",
  "time",
  "url",
  "week"
]

for(let type of inputTypes){
  const option = document.createElement("option")
  option.value = type
  option.text = `${type.slice(0,1).toUpperCase()}${type.slice(1)}`
  selectComponent.append(option)
}


selectComponent.addEventListener("change",(e)=>{
  const type = e.target.value
  inputType.textContent = `(${type.slice(0,1).toUpperCase()}${type.slice(1)})`
  inputComponent.type = type
})