const paragraphs = [
    "Green vines attached to the trunk of the tree had wound themselves toward the top of the canopy. Ants used the vine as their private highway, avoiding all the creases and crags of the bark, to freely move at top speed from top to bottom or bottom to top depending on their current chore. At least this was the way it was supposed to be. Something had damaged the vine overnight halfway up the tree leaving a gap in the once pristine ant highway.",
    "The red glow of tail lights indicating another long drive home from work after an even longer 24-hour shift at the hospital. The shift hadn’t been horrible but the constant stream of patients entering the ER meant there was no downtime. She had some of the “regulars” in tonight with new ailments they were sure were going to kill them. It’s amazing what a couple of Tylenol and a physical exam from the doctor did to eliminate their pain, nausea, headache, or whatever other mild symptoms they had.",
    "He hid under the covers hoping that nobody would notice him there. It really didn't make much sense since it would be obvious to anyone who walked into the room there was someone hiding there, but he still held out hope. He heard footsteps coming down the hall and stop in front in front of the bedroom door. He heard the squeak of the door hinges and someone opened the bedroom door. He held his breath waiting for whoever was about to discover him, but they never did.",
    "Was it a whisper or was it the wind? He wasn't quite sure. He thought he heard a voice but at this moment all he could hear was the wind rustling the leaves of the trees all around him. He stopped and listened more intently to see if he could hear the voice again. Nothing but the wind rustling the leaves could be heard. He was about to continue his walk when he felt a hand on his shoulder, and he quickly turned to see who it was. There was nobody there, but he heard the voice again.",
    "The wave crashed and hit the sandcastle head-on. The sandcastle began to melt under the waves force and as the wave receded, half the sandcastle was gone. The next wave hit, not quite as strong, but still managed to cover the remains of the sandcastle and take more of it away. The third wave, a big one, crashed over the sandcastle completely covering and engulfing it. When it receded, there was no trace the sandcastle ever existed and hours of hard work disappeared forever.",
    "There were about twenty people on the dam. Most of them were simply walking and getting exercise. There were a few who were fishing. There was a family who had laid down a blanket and they were having a picnic. It was like this most days and nothing seemed out of the ordinary. The problem was that nobody noticed the water leaking through the dam wall.he was after the truth oblivious to the real truth sitting right in front of him.",
    "Spending time at national parks can be an exciting adventure, but this wasn't the type of excitement she was hoping to experience. As she contemplated the situation she found herself in, she knew she'd gotten herself in a little more than she bargained for. It wasn't often that she found herself in a tree staring down at a pack of wolves that were looking to make her their next meal.",
    "There was something in the tree. It was difficult to tell from the ground, but Rachael could see movement. She squinted her eyes and peered in the direction of the movement, trying to decipher exactly what she had spied. The more she peered, however, the more she thought it might be a figment of her imagination. Nothing seemed to move until the moment she began to take her eyes off the tree. Then in the corner of her eye, she would see the movement again.",
    "It had been her dream for years but Dana had failed to take any action toward making it come true. There had always been a good excuse to delay or prioritize another project. As she woke, she realized she was once again at a crossroads. Would it be another excuse or would she finally find the courage to pursue her dream? Dana rose and took her first step.",
    "He was after the truth. At least, that's what he told himself. He believed it, but any rational person on the outside could see he was lying to himself. It was apparent he was really only after his own truth that he'd already decided and was after this truth because the facts didn't line up with the truth he wanted. So he continued to tell everyone he was after the truth oblivious to the real truth sitting right in front of him.",
    "Why do Americans have so many different types of towels? We have beach towels, hand towels, bath towels, dish towels, camping towels, quick-dry towels, and let’s not forget paper towels. Would 1 type of towel work for each of these things? Let’s take a beach towel. It can be used to dry your hands and body with no difficulty. A beach towel could be used to dry dishes. Just think how many dishes you could dry with one beach towel. I’ve used a beach towel.",
    "The water rush down the wash and into the slot canyon below. Two hikers had started the day to sunny weather without a cloud in the sky, but they hadn't thought to check the weather north of the canyon. Huge thunderstorms had brought a deluge o rain and produced flash floods heading their way. The two hikers had no idea what was coming.Trees are a significant component of our environment. They are important to people, animals.",
    "It had been a rough day. Things hadn't gone as planned and that meant Hannah got yelled at by her boss. It didn't even matter that it wasn't her fault. When things went wrong at work, Hannah got the blame no matter the actual circumstances. It wasn't fair, but there was little she could do without risking her job, and she wasn't in a position to do that with the plans she had.",
    "The water rush down the wash and into the slot canyon below. Two hikers had started the day to sunny weather without a cloud in the sky, but they hadn't thought to check the weather north of the canyon. Huge thunderstorms had brought a deluge o rain and produced flash floods heading their way. The two hikers had no idea what was coming.",
    "Trees release life-supporting oxygen and absorb harmful gases like carbon dioxide during the process of photosynthesis. They act as sponges by taking in toxic emissions and other pollutants, released into the atmosphere by industries and vehicles. The roots of trees bind the soil together thereby preventing erosion. The blatant and increased rate of deforestation is the primary cause of landslides. In addition to being the bearers of delicious fruits.",
    "Scientists have studied the side effects of decreasing the number of trees. He concludes that the decrease of trees is due to a large amount of air pollution. Trees are natural purifiers of air.They release harmful oxygen by exploiting harmful carbon dioxide from the air. Oxygen is life and organisms survive by taking it. Therefore, it is imperative to have a sufficient number of trees on earth.",
    "The most important thing to remember is that saving plants doesnot help plants at all. It only helps us. People forget how important trees are, even though they give us all the things we need to live. We need to make sure everyone knows how important trees are to live. Because of the bad things we did, our children and grandchildren will have to pay for it. Therefore, we need to make things better.Trees are a significant component of our environment.",
    "Trees and plants don't need us to live, but we need them to live. Trees give us oxygen and food, which are two of the most important things for life. Some plants and trees can be used to treat illnesses. Roots, leaves, stems, flowers, and seeds are all parts of trees that are used by humans in some or another way. Trees also give many animals on Earth a place to live. The value of a tree to each living thing is different. Selling the flowers, fruits, and vegetables.",
    "From our health to our homes, trees are important in every way. They provide us with many things from food to shelter. Also, they help keep the temperature even and keep the sun's harmful rays from getting in. They also help save water and prevent soil erosion. Wood from trees is used to make beautiful furniture for our homes. They help to stop climate change by soaking up greenhouse gases, which are the main cause of it. Trees play a vital role in balancing.",
    "They prevent erosion of soil, stop inflow of flood, and bring down rains for the farmers. They make homes for the fauna. Apart from the noble deeds, the trees do for us, they offer us a soothing scenery to view. How grand it is to look at the vast stretch of the greenery! But it is surprising that people do not care for this beautiful creation of Nature. Trees are now on the verge of peril. We are slaying them thoughtlessly. Our civilization goes ahead.",
    "There are many different types of trees that grow. Trees are food for man and all herbivorous animals. The roots, stems, leaves, flowers, fruits and seeds of trees may be edible. Trees are also home to many wildlife species. Animals seek the shade and shelter of trees. Birds build their nests in trees. Reptiles and insects also live in trees.Trees help in binding the soil. Trees and forests also play a role in maintaining the hydrological cycle.",
    "Trees are Nature’s bounty. Trees are of many different kinds. There are flowering trees, which bear blossoms, and non-flowering ones, which do not bloom into flowers. There are evergreen trees, which stay green through the year. There are also deciduous ones which may shed their leaves during a particular season annually making their branches turn bare. Trees make landscapes beautiful. Trees are invaluable to man and terrestrial life forms.",
];



const inputarea=document.querySelector(".inputbox p"),
inputjs=document.querySelector(".container .inputarea"),
timetag=document.querySelector(".timerh span b"),
typingspeed=document.querySelector(".WPM span b"),
restartbtn=document.querySelector(".cabinet button");



let timer,
maxTime=60,
timeleft=maxTime,
letterindex= mistakes=istyping=0;


function loadParagraph() {
        const ranIndex = Math.floor(Math.random() * paragraphs.length);
        inputjs.innerHTML="";

        paragraphs[ranIndex].split("").forEach(char => {
            let span = `<span>${char}</span>`;
            inputarea.innerHTML += span;
        });
        document.addEventListener("keydown", () => inputjs.focus());
        inputarea.addEventListener("click", () => inputjs.focus());
    }

function typeover(){
    const letters=inputarea.querySelectorAll("span");
    let typedletter=inputjs.value.split("")[letterindex];
    if(letterindex<letters.length-1&& timeleft>0){
    if(!istyping){
    timer=setInterval(timeover,1000);
    istyping=true
    }
    if(typedletter==null){
        letterindex--;
        if(letters[letterindex].classList.contains("incorrect")){
        mistakes--;
        }
        letters[letterindex].classList.remove("correct","incorrect");
    }else{ 
    if(letters[letterindex].innerText===typedletter){

        letters[letterindex].classList.add("correct");
    }else{
        mistakes++;
        letters[letterindex].classList.add("incorrect");
    }
    letterindex++;
    }
    letters.forEach(span=> span.classList.remove("active"));
    letters[letterindex].classList.add("active");
    let wpm=Math.round((((letterindex-mistakes)/5)/(maxTime-timeleft ))*60);
    wpm=wpm<0||!wpm||wpm===Infinity?0:wpm;
    typingspeed.innerText=wpm;
    }else{
        inputjs.value="";
        clearInterval(timer);
    }
}

  

function timeover(){
    if(timeleft>0){
        timeleft--;
        timetag.innerText=timeleft;
    }else{
        clearInterval(timer)
    }
}



loadParagraph();

inputjs.addEventListener("input",typeover);
restartbtn.onclick=()=>{
    location.reload()
}


