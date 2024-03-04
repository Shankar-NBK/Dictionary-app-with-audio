const url="https://api.dictionaryapi.dev/api/v2/entries/en/";

let searchBtn=document.getElementById("btn_Search");
let result=document.querySelector(".result");
let sound=document.getElementById("sound");
//console.log(searchBtn, url, inpWord);

searchBtn.addEventListener("click", () => {
    let inpWord=document.getElementById("inputWord").value;
    
    fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = `
        <div>
        <h2 id="heading" class="marginbottom">${inpWord}</h2>
       
        <span id="excl" class="marginbottom"><i>exclamation /${data[0].meanings[0].partOfSpeech}/</i></span><br /><br />
        <p id="phonetic" class="marginbottom"><i>${data[0].phonetic}</i></p><br />
        <p id="pr1" class="marginbottom rightborder">${data[0].meanings[0].definitions[0].definition}</p>
        </div>`;

        

        //sound.setAttribute("src", `${data[0].phonetics[1].audio}`);
        //console.log(sound);
        function play() {
            var audio = new Audio(`${data[0].phonetics[1].audio}`);
            audio.play();
            console.log(audio);
          }

          play();
    })
    .catch(() => {
        result.innerHTML=`<h2>Couldn't Find the Word</h2>`;
    });


});




