// const body=document.getElementsByTagName("body")[0];
// const btn=document.getElementById("button");
// const h1=document.createElement("h1");
// h1.textContent="JOHONGIUR"
// body.appendChild(h1);
// btn.addEventListener("click",()=>{
//     h1.classList.toggle("qizil");
// })







// const dada=document.createElement("div")
// const btn=document.createElement("button");
// const btn2=document.createElement("button");
// const card=document.createElement("div");
// const img=document.createElement("img");
// const h1=document.createElement("h2");
// const h2=document.createElement("h3");
// const p=document.createElement("p");




// card.classList.add("a");
// img.src="https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png";
// img.style="width:200px; border-radius:20px;";
// h1.textContent="Raju Webdev";
// h1.style="text-align:center;"
// h2.textContent="INDIA";



// h2.style="text-align:center;"
// p.textContent="Lorem ip;sum dolor  consectetur";
// p.style="text-align:center;"
// btn.textContent="Messago";
// btn2.textContent="Following"; 
// btn.classList.add("btn");
// btn2.classList.add("btn2");
// btn.style="gap:30px;"
// btn2.style="margin-left:20px;"
// card.style="text-align:center;   "



// card.appendChild(img);
// card.appendChild(h1);
// card.appendChild(h2);
// card.appendChild(p);
// card.appendChild(btn);
// card.appendChild(btn2);


// body.appendChild(card)


// h2.classList= "h2"
// h1.classList= "h1"
// p.classList="p"




// const kotta=document.createElement("div");
// const card1=document.createElement("div");
// const h4=document.createElement("h4")
// const btt=document.createElement("button");
// const btt1=document.createElement("button");
// const btt2=document.createElement("button");
// const btt3=document.createElement("button");


// card1.appendChild(h4);
// card1.appendChild(btt);
// card1.appendChild(btt1);
// card1.appendChild(btt2);
// card1.appendChild(btt3);
// body.appendChild(card1);
// body.appendChild(kotta);


// h4.textContent="SKILLS"
// btt.textContent="HTML"
// btt1.textContent="CSS"
// btt2.textContent="JAVAscrip"
// btt3.textContent="React"


// btt.classList="btt"
// btt1.classList="btt1"
// btt2.classList="btt2"
// btt3.classList="btt3"


// card1.style="text-align:center;flex-wrap:wrap;background-color:gray;heidth:400px;width:200px;border-radius:20px;padding:10px;"
// btt2.style="margin-left:20px;"
// kotta.style="text-align:center align-items:center;"


// dada.style="box-shadow:5px 5px 5px 5px "


// body.appendChild(dada)



const btn=document.getElementById("btn")
const box=document.getElementById("box")
const parol=document.getElementById("parol")
const modmeId=document.getElementById("modmeId")
const err=document.getElementById("err")
const wel=document.getElementById("wel")
     

const user={
    id:"123456789",
    password:"987654321"
}
btn.addEventListener("click",()=>{
    if(modmeId.value==user.id && parol.value==user.password){
        wel.style="display:block";
        box.style="display:none";
    }else{
        err.style="display:block";
        wel.style="display:none"
    }
})
