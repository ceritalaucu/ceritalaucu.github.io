$(".menubtn").click(function(){
    $(this).toggleClass("click");
    $(".header-content").toggleClass("click");
});
$(".learnbtn").click(function(){
    $(".header-nav .learn-item-show").toggleClass("show");
    $(".header-nav .first").toggleClass("rotate");
});

// var days=20;
var preloader =document.getElementById("loading-page");
var today;
var hours;
var minutes;
var seconds;
var t;

function preloading(){
    preloader.style.display = "none";
}
function checkTime(i){
    if(i<10){i="0"+i}; // add zero in front of numbers < 10
    return i;
}
// function roadToDays(){
//     startTime
//     if(hours==00)days=days+1;
//     document.getElementById("bh-days").innerHTML="Day "+days;
//     t=setTimeout(roadToDays,1000);
// }
function startTime(){
    today=new Date();
    hours=today.getUTCHours()+7;
    minutes=today.getUTCMinutes();
    seconds=today.getUTCSeconds();
    if((hours-24)>=0)hours=hours-24;
    hours=checkTime(hours);
    minutes=checkTime(minutes);
    seconds=checkTime(seconds);
    document.getElementById("nowTime").innerHTML=hours+" : "+minutes+" : "+seconds;
    t=setTimeout(startTime,500);
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBGgNkxA-2pQsuRgwMJV-mGxjV6nJziBP0",
    authDomain: "ceritalaucu-dbtest.firebaseapp.com",
    projectId: "ceritalaucu-dbtest",
    storageBucket: "ceritalaucu-dbtest.appspot.com",
    messagingSenderId: "190004669058",
    appId: "1:190004669058:web:71a850c8fb45e4736da29b",
    measurementId: "G-70CDWPBZL2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

// -------------------------------------------------------------------

const feedbackList = document.querySelector('#feedback-list');
const form = document.querySelector('#add-feedback-form');

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('feedback').add({
        netName: form.netName.value,
        city: form.city.value,
        feedback: form.feedback.value,
    });
    form.netName.value = '';
    form.city.value = '';
    form.feedback.value = '';
})

//real-time listener
db.collection('feedback').orderBy('netName').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added'){
            renderFeedback(change.doc);
        } else if (change.type == 'removed'){
            let li = feedbackList.querySelector('[data-id=' + change.doc.id + ']');
            feedbackList.removeChild(li);
        }
    })
})

// create element and render feedback
function renderFeedback(doc){
    let li = document.createElement('li');
    let netName = document.createElement('span');
    let city = document.createElement('span');
    let feedback = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id)
    netName.textContent = doc.data().netName;
    city.textContent = doc.data().city;
    feedback.textContent = doc.data().feedback;
    cross.textContent = 'x';

    li.appendChild(netName);
    li.appendChild(city);
    li.appendChild(feedback);
    li.appendChild(cross);

    feedbackList.appendChild(li);

    //deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('feedback').doc(id).delete();
    })
}

// getting data
//making queries => .where('city', '==', 'manchester')
// db.collection('feedback').orderBy('netName').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         renderFeedback(doc);
//     })
// })