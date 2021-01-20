

var encString="";



function getEncouragement(){
  r = Math.floor(Math.random() * 14);

  strings=[
    "Treat yourself!",
    "Treat time, Jenny!",
    "Put something in your tummy!",
    "Have a little drinkie!",
    "You're beautiful and you deserve treats!",
    "Fill that tum up, Jenny!",
    "Time to look after that belly!",
    "Drink time for Jenny!",
    "Down the hatch!",
    "Bon voyage, Jenny!",
    "You're smart and kind and deserve to be drunk!",
    "Hoping you're getting nice and drunk!",
    "Jenny + booze = pink sticky sexy Jenny!",
    "Pickle that tum!"
  ];

  return strings[r];
}



function updateTime(){
  o = document.getElementById("timelabel");
  oc = document.getElementById("counterlabel");

  count = localStorage.getItem("count");
  if(!count || count == 0 ){
    oc.innerHTML = "You've had no little drinks here yet, Jenny.  Although perhaps you are ALSO getting through a lot of wine -- I hope so!";
  }else {
    oc.innerHTML = "You've had " + count + " little drinks, Jenny.";
  }

  t = new Date().getTime();
  lastt = localStorage.getItem("prevtime");
  d = t - lastt;

  if(!lastt || lastt == 0){
    o.innerHTML="You are waiting to begin!";
    return;
  }

  var ts = Math.floor(d/60000);

  if(ts < 3){
    o.innerHTML= encString;
    return;
  }

  o = document.getElementsByClassName("bigbutton");
  for (var i = 0; i < o.length; i++) {
    if(o[i].disabled == true)
      o[i].disabled=false;
  }

  if(ts < 10){
    o.innerHTML="It's been <b>" + ts + "</b> minutes since your last treat.  I hope your tummy is feeling happy!";
    return;
  }

  if(ts < 15){
    o.innerHTML="It's been <b>" + ts + "</b> minutes... perhaps you should consider a new treat, Jenny?";
    return;
  }

  if(ts < 20){
    o.innerHTML="It's been <b>" + ts + "</b> minutes... definitely time to put MORE in your belly, Jenny!";
    return;
  }

  if(ts < 30){
    o.innerHTML="It's been <b>" + ts + "</b> minutes... you need to keep going!  Don't give up on me, big girl!";
    return;
  }

  o.innerHTML="If you're asleep, sweet dreams!";

}

function reset(){
  localStorage.setItem("prevtime", 0);
  localStorage.setItem("count", 0);
  o = document.getElementById("outputbox");
  o.innerHTML="";

  o = document.getElementsByClassName("bigbutton");
  for (var i = 0; i < o.length; i++) {
    if(o[i].disabled == true)
      o[i].disabled=false;
  }

}

function button(b){
  o = document.getElementById("outputbox");
  o.innerHTML=getChallenge(b);

  o = document.getElementsByClassName("bigbutton");
  for (var i = 0; i < o.length; i++) {
    o[i].disabled=true;
  }

  encString = getEncouragement();


  localStorage.setItem("prevtime", new Date().getTime());

  count = localStorage.getItem("count");
  count ++;
  localStorage.setItem("count", count);

  var audio = new Audio('img/glass-clink-1.mp3');
  audio.play();


  updateTime();


}

//
function getChallenge(t){
  let s = "";

  let r = Math.random();

  s = s + getChallengeIntro(t, r);

  if (t == 2){
    s = s + getMajorChallenge();
  }else {
    s = s + getChallengeBegin(t, r);

    s = s + getChallengeMiddle(t);

    s = s + getChallengeEnd(t, r);
  }
  return s;

}

function getMajorChallenge(){
  r = Math.floor(Math.random() * 14);

  strings=[
    "Finish your glass right now, Jenny.  Pour another full glass of the same drink, and guzzle it down quickly.  That should help fill your belly!",
    "Pour two shots of spirits now.  Pour them both into your mouth, then glug them down!  Feel the warmth...!",
    "Pour two shots, Jenny.  Then put your hand on your pussy and give it a stroke. Drink both shots while touching your pussy.  Greedy girl!",
    "Pour yourself two drinks and pick up one in each hand.  You can't put them down till they are BOTH in your tummy!",
    "Exercise time!  Stand up and pour youself a really big glass, and drink it while still standing up.  Exercise is good!",
    "Drink a shot.  Now, go to the wall and lean against it belly first.  Feel how cool it is!  That was a lot of exercise, wasn't it?  Have another shot before you sit down!",
    "Go to your bedroom and take a bottle with you.  Lie on the bed and drink half the contents of the bottle.  You can't get up until you're finished.  That should make your belly happy!",
    "Wine and spirits are BOTH so delicious for a greedy girl!  Get yourself a glass of wine, pour a shot in it, and quaff it swiftly!",
    "Fat girls can't ONLY drink.  Eat a small quick snack... there, now you can go back to pickling yourself like a pro!  Have TWO drinks in rapid succession!",
    "You're very fat.  And girls who are very fat have a large capacity for alcohol.  Finish your current drink and pour yourself a HUGE glass, and drink it while touching your cute little pussy.",
    "Tipple til you topple, that's the motto -- and you haven't yet toppled over.  Serious challenge time, then; three shots, spaced two minutes apart.  GO JENNY!",
    "Jenny, you're too big and beautiful to fuss over glasses all the time.  Whatever bottle you last used, pick it up and take several big glugs.  Then wash it down by finishing a drink.  Good Jenny!",
    "I want you round and pick and sticky.  Have a drink.  Now, think about how round and pink you will be tomorrow IF you keep the DRINKING up!  Hangovers can be sexy too!  Now have ANOTHER drink!",
    "Exercise time!  Make two drinks and carry them over to the kitchen counter.  Yay, that was exercise!  But it's important to stay hydrated, so drink them BOTH before you sit back down!"
  ];

  return strings[r];
}

function getChallengeIntro(t, r){

  switch(t){
    case 1:
      return "<i>Good girl!</i>  You deserve a refreshing drink!<p/>";
    case 2:
      return "<b>Challenge your belly!</b><p/>";
    case 3:
      return "NAUGHTY greedy girl!  Get some more drinks inside you!<p/>";
  }
}

function getChallengeBegin(t, r) {

  r = Math.floor(r * 11);

  strings=[
    "Finish your drink (if you had none left, pour a new one and finish <i>that</i>!",
    "Pour yourself a lovely refreshing shot of spirits.",
    "Close your eyes for a moment... how drunk do you feel?",
    "Jenny needs wine!  Drink six large gulps of wine, refilling your glass if you have to.",
    "A change is as good as a rest.  Whatever you were drinking, pour yourself something else as well.",
    "Hold your belly in your hands and think of me.",
    "Hold your huge tits in your hands and think of me.",
    "Adopt a brisk, efficient attitude and pour yourself a glass of wine.",
    "Idly toy with your bottle.  Perhaps touch its coolness to the smooth skin of your belly...",
    "Shot time for Jenny!  Pour yourself a shot and drink it <i>right away</i>.",
    "You are loved despite -- or because of? -- your love of food and drink."

  ];

  return strings[r] + "</p>";
}


function getChallengeMiddle(t){
  r = Math.floor(Math.random() * 12);

  goodstrings=[
    "Gently stroke the bare skin of your belly.  Take as long as you like.  So smooth, so <i>sexy</i>...",
    "Put your hand under your belly and weigh it gently.  So <i>fat</i> and <i>heavy!</i>  It just needs a few more little drinks...",
    "Pat each of your fat tits gently.  Beautiful girls!  You are beautiful and they are beautiful.",
    "Give your stomach some encouraging pats.  You can do it, tummy!  You can handle <i>all</i> the booze in the world!",
    "Now imagine me kissing you.  Kissing you is the <i>best</i> thing.",
    "Now picture my arm around your fat waist, cuddling and caressing.",
    "Now say to yourself, 'I am beautiful, kind, intelligent fat woman.'",
    "Remember that you are loved.",
    "Lightly touch that beautiful, strong, belly of yours, which I constantly long to stroke and adore...",
    "Settle your belly comfortably and feel the weight of your lovely soft tits on it",
    "Close your eyes (did that make you dizzy?  I hope it did, you little boozy angel!).  Imagine a lovely kiss on the lips.",
    "Did you know that your cute little chubby chin is the softest thing ever?"

  ];

  badstrings=[
    "Now give that naughty tum a little slap -- greedy thing!",
    "Cup one heavy, soft breast in your hand.  Now pinch it gently because you're a greedy girl!",
    "Give yourself a slap on the rear.  Unless you're too fat to even <i>reach</i> your rear, you fat girl!",
    "Now give your belly a gentle slap.  Why is that thing so <i>greedy</i> anyway?",
    "Now give yourself a little spank -- that should encourage you to drink when you're told!",
    "Say out loud, 'I am fat and greedy and my belly is big.'  Because you <i>are</i> and it <i>is</i>.",
    "Naughty girl -- you drink, yes but you <i>could</i> drink <i>more</i>.  And you <i>will!</i>",
    "Brat! Pinch your tum and remember that I want you staggering drunk.  No dignified bedtime for <i>this</i> fat little drinker.",
    "Put your pretty little hand near your pussy.  Lightly touch your thighs and lower belly.  But <i>don't</i> touch your pussy, you excessively naughty woman -- you should be <i>putting booze into your stomach!</i>",
    "Reflect seriously on how greedy you have been.  You have been very very greedy, and that's why you are so very fat.  And you're going to carry on being greedy, aren't you?",
    "Close your eyes (did that make you dizzy?  If not, you need to drink harder!).  Imagine a slap on the butt.  You probably deserve one, you <i>excessively sober</i> woman!",
    "Pinch your thigh, because you can sometimes be kind of a brat.  It's just true."
  ];

  if(t==1)
    return goodstrings[r] + "</p>";
  else
    return badstrings[r] + "</p>";
}

function getChallengeEnd(t, r) {
  r = Math.floor(r * 11);

  strings=[
    "Now, get ready to get to work on that <i>new</i> drink.",
    "Drink the shot in one go!  Now, back to your regular drinking, you boozy beauty!",
    "Now finish your drink.  If nothing spun much when you closed your eyes, finish the <i>next</i>drink too!",
    "Feel the wine in your belly, filling it up.",
    "Now you have two drinks in front of you -- I want them in your tummy within FIVE minutes!",
    "Now drink a large glass of wine.  And have a chocolate.",
    "Cocktail time -- pour yourself a large mixed drink and get to work on it.",
    "Drink the wine briskly and efficiently.  Well done!  Next drink!",
    "Now, get at least a quarter of that bottle <i>inside</i> your belly in the next ten minutes.",
    "Well done for taking that shot, anyway.  You may go back to your regular tippling.",
    "Now, get yourself SERIOUSLY drunk.  Finish a WHOLE drink NOW."

  ];

  return strings[r] + "  ";
}


