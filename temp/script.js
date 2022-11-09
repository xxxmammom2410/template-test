
const elem = document.getElementById('asdf');

//カスタムイベントを作成
const event = new CustomEvent('eventname', { detail: 'Hello world' });
console.log(asdf)
console.log(testelem2)
// console.log(id)
//カスタムイベントのイベントリスナーを設定
asdf.addEventListener('eventname', function(e) {
  // setTimeout(() => {
    console.log("e:_"+e);
    // console.log(e.target);
    // console.log(e.target.tagName);
    console.log("this.tagName:_"+this.tagName)
    console.log("e.currentTarget:_"+e.currentTarget);

  // }, 0);
  
});
const elem2 = document.getElementById("testelem2");
const elem3 = document.getElementById("testelem3");

asdf.addEventListener('click',function(){this.dispatchEvent(event); console.log(this)});


//イベントを発火
// elem.dispatchEvent(event); // -> 'Hello world'

// asdf.addEventListener('click', function(){alert("target = " + event.target.tagName + ", this=" + this.tagName);})

// form.onclick = function(event) {
//   event.target.style.backgroundColor = 'yellow';

//   // chrome needs some time to paint yellow
//   // setTimeout(() => {
//     alert("target = " + event.target.tagName + ", this=" + this.tagName);
//     event.target.style.backgroundColor = ''
//   // }, 0);
// };