const $=s=>document.querySelector(s),WA="https://wa.me/254759857440?text=";
// splash
const tags=["Your Digital Partner","Print. Design. Repair.","Books and Accessories","Fast, Friendly, Reliable"];let ti=0;
function nextTag(){ti=(ti+1)%tags.length;$("#tag").style.opacity=0;setTimeout(()=>{$("#tag").textContent=tags[ti];$("#tag").style.opacity=1;[...$("#sd").children].forEach((d,i)=>d.className=i==ti?"on":"")},350)}
const tt=setInterval(nextTag,1500);
function enter(){clearInterval(tt);$("#splash").classList.add("out")}
$("#enter").onclick=enter;setTimeout(enter,6200);
// hero rotator
const words=["printed.","designed.","repaired.","connected."];let wi=0;
setInterval(()=>{wi=(wi+1)%words.length;$("#rot").style.opacity=0;setTimeout(()=>{$("#rot").textContent=words[wi];$("#rot").style.opacity=1},400)},2600);
// menu
$("#menu").onclick=()=>$("#drawer").classList.toggle("open");
document.querySelectorAll("#drawer a").forEach(a=>a.onclick=()=>$("#drawer").classList.remove("open"));
// reel
const slides=[["Our shop","Walk in, walk out sorted."],["At the desk","Friendly help with every request."],["Behind the scenes","Documents prepared with care."],["Every detail","Accurate work, every time."]];
const imgs=[...document.querySelectorAll("#reelbox>img")],rt=$(".rt");let ri=0,rtm;
slides.forEach(()=>rt.insertAdjacentHTML("beforeend","<i><b></b></i>"));
function show(i){ri=i;imgs.forEach((m,j)=>{m.classList.remove("on");if(j==i){void m.offsetWidth;m.classList.add("on")}});
[...rt.children].forEach((b,j)=>{b.className=j<i?"done":"";if(j==i){void b.offsetWidth;b.className="cur"}});
$("#rs").textContent=slides[i][0];$("#rq").textContent=slides[i][1];clearTimeout(rtm);rtm=setTimeout(()=>show((i+1)%slides.length),5000)}
show(0);
// services
const cats={"Cyber and government":[["🏛️","eCitizen and eServices","Applications and account help for eCitizen and other online services."],["🧾","KRA, SHA and NTSA","Tax, health insurance and driving service support."],["💼","GHRIS payslips","Download and print your payslips quickly."],["🌐","Internet services","Fast browsing, online forms and email support."],["🛍️","Jumia services","Order, pick up and get help with Jumia purchases."],["🎬","Movies and series","Ask us for the latest titles."]],
"Print and design":[["🖨️","Printing and photocopy","Black and white or colour, small or bulk."],["📄","Scanning","Clear scans of documents and certificates."],["🔖","Lamination and binding","Protect and present your documents neatly."],["🪪","Passport size photos","Quick photos that meet official requirements."],["⌨️","Typesetting","CVs, letters, proposals and school work."],["🎨","Business cards and designing","Cards, posters, flyers and branding."],["🖼️","Portrait photos","Printed portraits and gifts."]],
"Tech and repair":[["💻","Website design","All types: business, school, shop and portfolio sites.",1],["🛠️","Hardware maintenance","Cleaning, upgrades and fixes for desktops and laptops.",1],["🪟","Windows installation","Fresh installs, activation and clean setup.",1],["🔌","Drivers installation","Get printers, graphics and Wi-Fi working properly.",1],["📶","Wi-Fi connection","Router setup, network fixes and better coverage.",1],["📺","Electronics service repair","Diagnosis and repair of common electronics.",1],["📱","Phone repair","Screens, charging ports, software and more.",1]],
"Bookshop":[["📚","Books and exercise books","School and office reading and writing needs."],["✏️","Stationery","Pens, pencils, geometry sets, staplers and tape."],["🔋","Phone accessories","Chargers, cables, earphones and screen protectors."],["💾","Flash disks and storage","Reliable storage for your files."]]};
const tabs=$("#tabs"),grid=$("#grid");
Object.keys(cats).forEach((c,i)=>{const b=document.createElement("button");b.className="tab";b.role="tab";b.textContent=c;b.onclick=()=>draw(c);tabs.append(b)});
function draw(c){[...tabs.children].forEach(b=>b.setAttribute("aria-selected",b.textContent==c));
grid.innerHTML=cats[c].map(s=>`<div class="s${s[3]?" new":""}"><i>${s[0]}</i><h3>${s[1]}</h3><p>${s[2]}</p><a target="_blank" rel="noopener" href="${WA+encodeURIComponent("Hello Biro Empire, I would like to ask about: "+s[1])}">Ask on WhatsApp</a></div>`).join("")}
draw("Cyber and government");
$("#sv").innerHTML="<option value=''>Choose a service</option>"+Object.values(cats).flat().map(s=>`<option>${s[1]}</option>`).join("");
$("#f").onsubmit=e=>{e.preventDefault();const t=`Hello Biro Empire, my name is ${$("#n").value}. I need: ${$("#sv").value||"a service"}. ${$("#m").value}`;window.open(WA+encodeURIComponent(t),"_blank")};