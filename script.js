let currentdragedimage;

const tierinput = document.getElementById("tier1");

const imagecontainerss = document.getElementsByClassName("tier-image-container");

// const tierlistcontainer = document.querySelectorAll('.tier-list-container')

const submitbtn = document.getElementById("submit1");

const imageinput = document.getElementById("image-form");

for(const imagecontainer of imagecontainerss){
    setUpItemContainer(imagecontainer);
}

// tierlistcontainer.forEach(dropZoneIntierlist)


imageinput.addEventListener('submit',(event)=>{
    event.preventDefault();
    
    const inputImageurl = document.getElementById('tier-image');
    const imageurl = inputImageurl.value;
    if(imageurl === ''){
        alert('please enter any image url');
    }
    console.log(imageurl);
    creatimageurl(imageurl);
    inputImageurl.value = '';
});

submitbtn.addEventListener('click',(event)=>{
    // console.log(tierinput.value);
    event.preventDefault();// for stops the defult behaviour of the event
 
    //event.target is used to get the element that triggered the event or to get acess of
    //the element on whi9ch this event was fired
    const target = event.target;

    creattierlist(tierinput.value);
    if(tierinput.value === ''){
        alert('please enter any text');
    }
    tierinput.value = '';
});

function creattierlist(tierListName){
    const newtierlist = document.createElement('div');
    newtierlist.classList.add('tier-list-container')

    const heading = document.createElement('div');
    heading.classList.add('heading');
    const textcontainer = document.createElement('div');
    textcontainer.textContent = tierListName ;
    heading.appendChild(textcontainer);

    const newTierListItem = document.createElement('div');
    newTierListItem.classList.add('tier-list-items');
    
    newtierlist.appendChild(heading);
    newtierlist.appendChild(newTierListItem);

    const tierSection = document.getElementById('tier-list-section');
    tierSection.appendChild(newtierlist);
   
    dropZoneIntierlist(newTierListItem);

}

function creatimageurl(imageurl){
    const imagecontainer = document.createElement('div');
    imagecontainer.classList.add('tier-image-container');
    imagecontainer.setAttribute('draggable','true');

    setUpItemContainer(imagecontainer);

    const newImage = document.createElement('img');
    newImage.src = imageurl;

    imagecontainer.appendChild(newImage);
    const imageSection = document.getElementById('tier-image-section');
    imageSection.appendChild(imagecontainer);
    
}

function setUpItemContainer(imagecontainer){

    imagecontainer.addEventListener('dragstart',(event)=>{
        
        currentdragedimage = event.target.parentNode;
        //console.log(currentdragedimage);
    })
imagecontainer.addEventListener('dblclick',(event)=>{

    const parentNode = event.target.parentNode;
    const imageSection = document.getElementById('tier-image-section');
    imageSection.appendChild(parentNode);
})
    
}


function dropZoneIntierlist (tierlistcontainer){
    
   tierlistcontainer.addEventListener('drop',(event)=>{
    event.preventDefault();//stops the defult behaviour of the event which is do
    //not allow drop
   })

   tierlistcontainer.addEventListener("dragover",function(event){
    //console.log('dragged over');
    //event.target.appendChild(currentdragedimage);
    //console.log(currentdragedimage.parentNode);
   if(this !== currentdragedimage.parentNode){
    this.appendChild(currentdragedimage);
   }
    
    
   })
    
}