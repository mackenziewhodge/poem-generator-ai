function generatePoem(event){
  event.preventDefault();
  let instructionsInput=document.querySelector("#user-instructions");
  let apiKey="9f6b8bcf34c1t0b4fa7o41dfc57380a8";
  let context="you are a polite and funny ai assistant knowlegable on lots of topics, your answer will be in HTML format separating each line with <br/> you will not title the poem. you will end the poem with '- Shecodes Ai' in a <strong> element";
  let prompt=`generate a 4 line poem about ${instructionsInput.value}`;
  let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
  
axios.get(apiUrl).then(displayPoem);
  console.log("generating poem")
  console.log(`prompt:${prompt}`)
  console.log(`context: ${context}`)
let poemElement=document.querySelector("#poem")
poemElement.classList.remove("hidden");
poemElement.innerHTML=`<div class="generating">Generating poem about ${instructionsInput.value}</div>`;
}
function displayPoem(response){
new Typewriter("#poem",{
    strings:response.data.answer,
    autoStart : true,
    delay:1,
    cursor:"",
  });
}
let poemFormElement=document.querySelector("#poem-form")
poemFormElement.addEventListener("submit", generatePoem);