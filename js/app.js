var proverbs =[
  { x:  708, y:4884, en:"To be able to tie even the devil to a pillow", nl: "De duivel op het kussen binden", meaning: "Obstinacy overcomes everything"},
  { x:  216, y:3956, en:"To be a pillar-biter", nl: "Een pilaarbijte", meaning: "To be a religious hypocrite"},
  { x:  688, y:3924, en:"Never believe someone who carries fire in one hand and water in the other", nl: "Geloof nooit iemand die in de ene hand water en de andere hand vuur draagt", meaning: "To be two-faced and to stir up trouble"},
  { x: 1476, y:4276, en:"To bang one's head against a brick wall", nl: "Met het hoofd tegen de muur lopen", meaning: "To try to achieve the impossible"},
  { x: 1152, y:4644, en:"One foot shod, the other bare", nl:"Aan de ene voet een schoen, de ander blootvoets", meaning: "Balance is paramount"},
  { x: 1012, y:3668, en:"The sow pulls the bung", nl: "De zeug loopt met de tap weg", meaning: "Negligence will be rewarded with disaster"},
  { x: 1760, y:3564, en:"To bell the cat", nl: "De kat de bel aanbinden", meaning: "To carry out a dangerous or impractical plan"},
  { x: 1796, y:3308, en:"To be armed to the teeth", nl: "Tot de tanden bewapend", meaning: "To be heavily armed"},
  { x: 1588, y:3432, en:"To put your armor on", nl: "In het harnas steken", meaning: "To be angry"},
  { x: 2092, y:4288, en:"One shears sheep, the other shears pigs", nl: "De een scheert schapen, de ander varkens", meaning: "One has all the advantages, the other none"},
  { x: 1828, y:4488, en:"Shear them but do not skin them", nl: "Men moet de schapen scheren al naar ze wol hebben", meaning: "Do not press your advantage too far"},
  { x:  404, y:3296, en:"The herring does not fry here", nl:"De haring braadt hier niet", meaning: "It's not going according to plan"},
  { x:  520, y:3468, en:"To fry the whole herring for the sake of the roe", nl: "De haring braden om de hom of kuit", meaning: "To do too much to achieve a little"},
  { x:  316, y:3036, en:"To get the lid on the head", nl:"Een deksel op zijn kop hebben", meaning: "To end up taking responsibility"},
  { x:  216, y:2592, en:"The herring hangs by its own gills", nl: "De haring hangt aan zijn eigen kieuwen", meaning: "You must accept responsibility for your own actions"},
  { x:  192, y:2504, en:"There is more in it than an empty herring", nl: "Daar steekt meer in dan een enkele panharing", meaning: "There is more to it than meets the eye"},
  { x:  426, y:2850, en:"What can smoke do to iron?", nl: "De rook kan het hangerijzer niet deren", meaning: "There is no point in trying to change the unchangeable"},
  { x: 1108, y:2772, en:"To find the dog in the pot", nl: "De hond in de pot vinden", meaning: "To arrive too late for dinner and find all the food has been eaten"},
  { x:  882, y:3172, en:"To sit between two stools in the ashes", nl: "Tussen twee stoelen in de as zitten", meaning: "To be indecisive"},
  { x: 2082, y:3150, en:"To be a hen feeler", nl: "De hennentaster", meaning: "To depend on an uncertain outcome"},
  { x: 1406, y:3118, en:"The scissors hang out there", nl: "Daar hangt de schaar uit", meaning: "They are liable to cheat you there"},
  { x: 1870, y:2838, en:"To always gnaw on a single bone", nl: "Aan een been knagen", meaning: "To continually talk about the same subject"},
  { x: 1184, y:2214, en:"It depends on the fall of the cards", nl: "Het is maar hoe de kaarten vallen", meaning: "It is up to chance"},
  { x:  412, y:2234, en:"The world is turned upside down", nl: "De omgekeerde wereld", meaning: "Everything is the opposite of what it should be"},
  { x: 2054, y:2336, en:"Leave at least one egg in the nest", nl: "Een ei in het nest laten", meaning: "Always have something in reserve"},
  { x:  500, y:1826, en:"To crap on the world", nl: "Op de wereld schijten", meaning: "To despise everything"},
  { x:  986, y:1536, en:"To lead each other by the nose", nl: "Elkaar bij de neus nemen", meaning: "To fool each other"},
  { x: 1020, y:1810, en:"The die is cast", nl: "De teerling is geworpen", meaning: "The decision is made"},
  { x:  808, y:1751, en:"Fools get the best cards", nl: "De gekken krijgen de beste kaarten", meaning: "Luck can overcome intelligence"},
  { x:  623, y:1008, en:"To look through one's fingers", nl: "Iets door de vingers zien", meaning: "To turn a blind eye"},
  { x:  619, y:1327, en:"There hangs the knife", nl: "Daar hangt het mes uit", meaning: "To issue a challenge"},
  { x:  944, y:1082, en:"There stand the wooden shoes", nl: "Daar staan klompen", meaning: "To wait in vain"},
  { x:  581, y: 450, en:"To stick out the broom", nl: "De bezem uitsteken", meaning: "To have fun while the master is away"},
  { x:  807, y: 649, en:"To marry under the broomstick", nl: "Onder de bezem getrouwd zijn", meaning: "To live together without marrying"},
  { x: 1459, y: 537, en:"To have the roof tiled with tarts", nl: "Daar zijn de daken met vlaaien bedekt", meaning: "To be very wealthy"},
  { x: 2107, y:1431, en:"To have a hole in one's roof", nl: "Een gat in het dak krijgen", meaning: "To be unintelligent"},
  { x: 2448, y:1447, en:"An old roof needs a lot of patching up", nl: "Aan een oud dak moet je veel  herstellen", meaning: "Old things need more maintenance"},
  { x: 2080, y:1988, en:"The roof has lathes", nl: "Men heeft daar latten op het dak", meaning: "There could be eavesdroppers"},
  { x: 2538, y:1680, en:"To have toothache behind the ears", nl: "Lachen als een boer die kiespijn heeft", meaning: "To be a malingerer"},
  { x: 2707, y:2185, en:"To be pissing against the moon", nl: "Tegen de maan pissen", meaning: "To waste one's time on a futile endeavour"},
  { x: 2316, y:2248, en:"Here hangs the pot", nl: "Daar hangt de po uit", meaning: "It is the opposite of what it should be"},
  { x: 2028, y: 600, en:"To shoot a second bolt to find the first", nl: "De ene pijl de andere nazenden", meaning: "To repeat a foolish action"},
  { x: 3048, y:1808, en:"To shave the fool without lather", nl: "Ergens de gek mee scheren", meaning: "To trick somebody"},
  { x: 3080, y:1584, en:"Two fools under one hood", nl: "Twee zotten onder één kaproen", meaning: "Stupidity loves company"},
  { x: 3472, y:1708, en:"It grows out of the window", nl: "Uit het raam groeien", meaning: "It cannot be concealed"},
  { x: 3476, y:1072, en:"To play on the pillory", nl: "Hij speelt op de kaak", meaning: "To attract attention to one's shameful acts"},
  { x: 2808, y: 712, en:"When the gate is open the pigs will run into the corn", nl: "Zodra het hek van de dam is, lopen de varkens in het koren", meaning: "Disaster ensues from carelessness"},
  { x: 3044, y: 548, en:"When the corn decreases the pig increases", nl: "", meaning: "If one person gains then another must lose"},
  { x: 3532, y: 632, en:"To run like one's backside is on fire", nl: "Hij loopt alsof hij het vuur in zijn aars heeft", meaning: "To be in great distress"},
  { x: 3456, y: 492, en:"He who eats fire, craps sparks", nl: "", meaning: "Do not be surprised at the outcome if you attempt a dangerous venture"},
  { x: 3884, y: 428, en:"To hang one's cloak according to the wind", nl: "Zijn huik naar de wind hangen", meaning: "To adapt one's viewpoint to the current opinion"},
  { x: 4396, y: 372, en:"To toss feathers in the wind", nl: "Pluimen in de wind waaien", meaning: "To work fruitlessly"},
  { x: 4448, y: 712, en:"To gaze at the stork", nl: "De ooievaar nakijken", meaning: "To waste one's time"},
  { x: 4888, y:1242, en:"To try to kill two flies with one stroke", nl: "Twee vliegen in één klap slaan", meaning: "To be efficient"},
  { x: 3944, y:1396, en:"To fall from the ox onto the rear end of an ass", nl: "Van de os op de ezel springen", meaning: "To fall on hard times"},
  { x: 4320, y:1208, en:"To kiss the ring of the door", nl: "Hij kust het ringetje van de deur", meaning: "To be obsequious"},
  { x: 4520, y:1436, en:"To wipe one's backside on the door", nl: "Zijn gat aan de poort vegen", meaning: "To treat something lightly"},
  { x: 4372, y:1396, en:"To go around shouldering a burden", nl:"Zijn last dragen", meaning: "To imagine that things are worse than they are"},
  { x: 4264, y:1420, en:"One beggar pities the other standing in front of the door", nl: "De ene bedelaar ziet de ander niet graag voor de deur staan", meaning: "Being afraid for competition"},
  { x: 4460, y:2056, en:"To fish behind the net", nl: "Achter het net vissen", meaning: "To miss an opportunity"},
  { x: 4876, y:2216, en:"Sharks eat smaller fish", nl: "De grote vissen eten de kleine", meaning: "Anything people say will be put in perspective according to their level of importance"},
  { x: 5768, y:2248, en:"To be unable to see the sun shine on the water", nl: "De zon niet in het water kunnen zien schijnen", meaning: "To be jealous of another's success"},
  { x: 4808, y:1496, en:"It hangs like a privy over a ditch", nl: "Dat hangt als een schijthuis boven de gracht", meaning: "It is obvious"},
  { x: 4740, y:1516, en:"Anybody can see through an oak plank if there is a hole in it", nl: "Hij kan door een eiken plank zien als er een gat in zit", meaning: "There is no point in stating the obvious"},
  { x: 4952, y:1604, en:"They both crap through the same hole", nl: "Uit hetzelfde gat schijten", meaning: "They are inseparable comrades"},
  { x: 5184, y:1900, en:"To throw one's money into the water", nl: "Je geld in het water gooien", meaning: "To waste one's money"},
  { x: 5568, y:1508, en:"A wall with cracks will soon collapse", nl:"Een morse muur is snel afgebroken", meaning: "Anything poorly managed will soon fail"},
  { x: 5336, y: 916, en:"To not care whose house is on fire as long as one can warm oneself at the blaze", nl: "Hij geeft er niet om wiens huis in brand staat, als hij zich maar aan de gloed kan warmen", meaning: "To take every opportunity regardless of the consequences to others"},
  { x: 5604, y: 828, en:"To drag the block", nl: "De bok slepen", meaning: "To be deceived by a lover or to work at a pointless task"},
  { x: 5680, y: 552, en:"Fear makes the old woman trot", nl: "Nood doet zelfs oude vrouwen rennen", meaning: "An unexpected event can reveal unknown qualities"},
  { x: 5956, y: 872, en:"Horse droppings are not figs", nl: "Paardenkeutels zijn geen vijgen", meaning: "Do not be fooled by appearances"},
  { x: 5904, y: 516, en:"If the blind lead the blind both will fall in the ditch", nl: "Als de ene blinde de ander leidt vallen ze beiden in de gracht", meaning: "There is no point in being guided by others who are equally ignorant"},
  { x: 6268, y: 512, en:"The journey is not yet over when one can discern the church and steeple", nl: "De reis is nog niet ten einde als men kerk en toren herkent", meaning: "Do not give up until the task is fully complete"},
  { x: 6484, y: 296, en:"Everything, however finely spun, finally comes to the sun", nl: "Niemand zo fijn iets spon of het kwam aan het licht der zon", meaning: "Nothing can be hidden forever"},
  { x: 6734, y: 602, en:"To keep one's eye on the sail", nl: "Een oogje in het zeil houden", meaning: "To stay alert, be wary"},
  { x: 6964, y: 656, en:"To crap on the gallows", nl: "Op de galg schijten", meaning: "To be undeterred by any penalty"},
  { x: 7100, y: 544, en:"Where the carcass is, there fly the crows", nl: "Waar aas is vliegen kraaien", meaning: "If there's something to be gained, everyone hurries in front"},
  { x: 6608, y: 612, en:"It is easy to sail before the wind", nl: "Met de wind meewaaien", meaning: "If conditions are favourable it is not difficult to achieve one's goal"},
  { x: 6672, y:1004, en:"Who knows why geese go barefoot?", nl: "Wie weet waarom de ganzen blootsvoets gaan?", meaning: "There is a reason for everything, though it may not be obvious"},
  { x: 7000, y: 964, en:"If I am not meant to be their keeper, I will let geese be geese", nl: "", meaning: "Do not interfere in matters that are not your concern"},
  { x: 6600, y:1216, en:"To see bears dancing", nl:"De beren zien dansen", meaning: "To be starving"},
  { x: 6784, y:1224, en:"Wild bears prefer each other's company", nl:"Wilde beren vertoeven graag bij soortgenoten", meaning: "Peers get along better with each other than with outsiders"},
  { x: 6412, y:1532, en:"To throw one's cowl over the fence", nl: "De jas over de haag smijten", meaning: "To discard something without knowing whether it will be required later"},
  { x: 6208, y:1968, en:"It is ill to swim against the current", nl:"Tegen de stroom is het kwaad roeien (zwemmen)", meaning: "It is difficult to oppose the general opinion"},
  { x: 6740, y:1888, en:"The pitcher goes to the water until it finally breaks", nl: "De kruik gaat zolang te water tot zij barst", meaning: "Everything has its limitations"},
  { x: 6948, y:2020, en:"The broadest straps are cut from someone else's leather", nl: "Je moet niet brede riemen snijden uit andermans leer", meaning: "One is quick to another's money."},
  { x: 6428, y:2284, en:"To hold an eel by the tail", nl: "Een aal bij de staart hebben", meaning: "To undertake a difficult task"},
  { x: 6832, y:2720, en:"To fall through the basket", nl: "Door de mand vallen", meaning: "To have your deception uncovered"},
  { x: 6692, y:2668, en:"To be suspended between heaven and earth", nl:"Tussen hemel en aarde hangen", meaning: "To be in an awkward situation"},
  { x: 6688, y:3064, en:"To keep the hen's egg and let the goose's egg go", nl:"Naar het kippenei grijpen en het ganzenei laten lopen", meaning: "To make a bad decision"},
  { x: 6528, y:3500, en:"To yawn against the oven", nl:"Men kan niet gapen tegen een oven", meaning: "To attempt more than one can manage"},
  { x: 6228, y:4564, en:"To be barely able to reach from one loaf to another", nl:"Niet van het ene brood tot het andere weten te geraken", meaning: "To have difficulty living within budget  "},
  { x: 6612, y:4448, en:"A hoe without a handle", nl: "Een hark zonder steel", meaning: "Probably something useless"},
  { x: 6496, y:4820, en:"To look for the hatchet", nl:"Het bijltje zoeken", meaning: "To try to find an excuse"},
  { x: 6824, y:4756, en:"Here he is with his lantern", nl:"Zijn licht ergens op laten schijnen", meaning: "To finally have an opportunity to show a talent"},
  { x: 6240, y:4940, en:"A hatchet with a handle", nl: "De bijl naar de steel werpen", meaning: "'The whole thing'"},
  { x: 5680, y:4652, en:"He who has spilt his porridge cannot scrape it all up again", nl:"Die zijn pap gemorst heeft kan niet alles weer oprapen", meaning: "Once something is done it cannot be undone"},
  { x: 5328, y:4520, en:"To put a spoke in someone's wheel", nl: "Een stok in het wiel steken", meaning: "To put up an obstacle, to destroy someone's plans"},
  { x: 6360, y:4088, en:"Love is on the side where the money bag hangs", nl:"Liefde is waar de geldbuidel hangt", meaning: "Love can be bought"},
  { x: 5792, y:3844, en:"To pull to get the longest end", nl:"Ze trekken om het langst", meaning: "To attempt to get the advantage"},
  { x: 5972, y:3260, en:"To stand in one's own light", nl:"In zijn eigen licht staan", meaning: "To behave contrarily to one's own happiness or advantage"},
  { x: 6092, y:3524, en:"No one looks for others in the oven who has not been in there himself", nl: "Niemand zoekt de ander in de oven, als hij er zich niet zelf in verstopt heeft", meaning: "To imagine wickedness in others is a sign of wickedness in oneself"},
  { x: 5292, y:4112, en:"To have the world spinning on one's thumb", nl:"Hij laat de wereld op zijn duim draaien", meaning: "To have every advantage"},
  { x: 5236, y:3172, en:"To tie a flaxen beard to the face of Christ", nl:"Voor God een baard van vlas maken", meaning: "To hide deceit under a veneer of Christian piety"},
  { x: 4520, y:4528, en:"To have to stoop to get on in the world", nl: "Men moet zich krommen, wil men door de wereld kommen", meaning: "To succeed one must be willing to make sacrifices"},
  { x: 4552, y:4152, en:"To cast roses before swine", nl: "Met moet geen rozen (paarlen) voor de zwijnen werpen", meaning: "To waste effort on the unworthy  "},
  { x: 3388, y:4800, en:"To fill the well after the calf has already drowned", nl: "Als het kalf verdronken is, dempt men de put", meaning: "To take action only after a disaster"},
  { x: 2792, y:4724, en:"To be as gentle as a lamb", nl:"Zo mak als een lammetje", meaning: "Someone who is exceptionally calm or gentle"},
  { x: 3388, y:3448, en:"She puts the blue cloak on her husband", nl: "Zij hangt haar man de blauwe huik om", meaning: "She deceives him"},
  { x: 2832, y:3904, en:"Watch out that a black dog does not come in between", nl:"Zorg dat daar geen zwarte hond tussen komt", meaning: "Mind that things don't go wrong"},
  { x: 2516, y:3392, en:"One winds on the distaff what the other spins", nl:"De een rokkent wat de ander spint", meaning: "Both spread gossip"},
  { x: 2900, y:3116, en:"To carry the day out in baskets", nl:"Hij draagt de dag met manden uit", meaning: "To waste one's time"},
  { x: 3016, y:2764, en:"To hold a candle to the Devil", nl: "Een kaars voor de duivel branden", meaning: "To flatter and make friends indiscriminately"},
  { x: 3476, y:2900, en:"To confess to the Devil", nl:"Bij de duivel te biecht gaan", meaning: "To reveal secrets to one's enemy"},
  { x: 4028, y:3408, en:"The pig is stabbed through the belly", nl: "Het varken is door de buik gestoken", meaning: "A foregone conclusion or what is done can not be undone"},
  { x: 4740, y:3284, en:"Two dogs over one bone seldom agree", nl: "Twee honden aen eenen beene, si draghen selden wel overeene", meaning: "To argue over a single point"},
  { x: 4872, y:3456, en:"When two dogs fight out who gets the bone,the third one steals it", nl: "Als twee honden vechten om een been, loopt een derde er mee heen", meaning: "Self-explanatory"},
  { x: 4448, y:2936, en:"To be a skimming ladle", nl: "Een schuimspaan zijn", meaning: "To be a parasite or sponger"},
  { x: 4072, y:2872, en:"What is the good of a beautiful plate when there is nothing on it?", nl:"Wat heb je aan een mooi bord als het leeg is?", meaning: "Beauty does not make up for substance"},
  { x: 4192, y:2628, en:"The Fox and the Stork dine together", nl: "De haan en de vos hebben elkaar te gast", meaning: "Two deceivers always keep their own advantage in mind"},
  { x: 3765, y:2633, en:"To blow in the ear", nl:"Een oorblazer", meaning: "To spread gossip"},
  { x: 4385, y:2686, en:"Chalk up a debt", nl: "Bij iemand in het krijt staan", meaning: "To owe someone a favour"},
  { x: 4741, y:2881, en:"The meat on the spit must be basted", nl: "Het is gezond om in het vuur te pissen", meaning: "Certain things need constant attention"},
  { x: 5033, y:2923, en:"There is no turning the spit with him", nl: "Met hem kan men geen spies draaien", meaning: "He is uncooperative"},
  { x: 5346, y:2909, en:"To sit on hot coals", nl:"Op hete kolen zitten", meaning: "To be impatient"},
  { x: 4959, y:2523, en:"To catch fish without a net", nl: "Hij vangt vissen met zijn handen", meaning: "To profit from the work of others"}
]

var map = L.map('map', {maxZoom: 17, minZoom: 15, crs: L.CRS.Simple }),
    pulsarIcon = L.divIcon({className: 'pulsar_container', html: "<div class='dot'></div><div class='pulse'></div>"});

var southWest = map.unproject([0, 5120], map.getMaxZoom()),
    northEast = map.unproject([7168, 0], map.getMaxZoom());

map.setMaxBounds(new L.LatLngBounds(southWest, northEast));
map.setView(map.unproject([3600, 2600], 17), 15);

L.tileLayer('/images/tiles/{z}/bruegel_{x}_{y}.jpg', {
  attribution: 'Made with ♥ by <a href="analog.is">Analog</a> (Actual love not the unicode character of a heart)',
}).addTo(map);

var markers = []
for (var i = 0; i < proverbs.length; i++) {
  var currentProverb = proverbs[i]
  var popup = L.popup()
              .setContent('<div class="proverb"><h2>"'+proverbs[i].nl+'"</h2><h1>"' + proverbs[i].en + '"</h1></div><div class="meaning"><span>Meaning</span><h2>'+proverbs[i].meaning+'</h2>');
  popupOptions = {}
  x = 3
  y = -2
  if (currentProverb.y < 800 || currentProverb.x < 700 || currentProverb.x > 6500) {
    if (currentProverb.x < 1000) {
      x = 180
    }else {
      x = -180
    }
    y = 100
    popupOptions.className = 'noArrow';
  }
  popupOptions.offset = new L.Point(x,y);
  var currentMarker = L.marker(map.unproject([currentProverb.x, currentProverb.y], map.getMaxZoom()), {icon: pulsarIcon})
                      .bindPopup(popup, popupOptions);
  currentMarker.on('mouseover', function(e) {
    this.openPopup();
  });
  currentMarker.on('mouseout', function (e) {
    this.closePopup();
  });
  markers.push(currentMarker);
}
var markersLayer = L.layerGroup(markers);
markersLayer.addTo(map);
var overlayMaps = {
  "Proverbs": markersLayer
};
L.control.layers(null, overlayMaps).addTo(map);


var click = document.getElementById('click'),
    mousemove = document.getElementById('mousemove');
if (click){
  map.on('mousemove click', function(e) {
    window[e.type].innerHTML = map.project(e.latlng, map.getMaxZoom());
  });
}

(function() {
  var container = document.querySelector( 'div.container' ),
    triggerBttn = document.getElementById( 'trigger-overlay' ),
    overlay = document.querySelector( 'div.overlay' ),
    closeBttn = overlay.querySelector( 'button.overlay-close' );
    transEndEventNames = {
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'msTransition': 'MSTransitionEnd',
      'transition': 'transitionend'
    },
    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
    support = { transitions : Modernizr.csstransitions };

  function toggleOverlay() {
    if( classie.has( overlay, 'open' ) ) {
      classie.remove( overlay, 'open' );
      classie.remove( container, 'overlay-open' );
      classie.add( overlay, 'close' );
      var onEndTransitionFn = function( ev ) {
        if( support.transitions ) {
          if( ev.propertyName !== 'visibility' ) return;
          this.removeEventListener( transEndEventName, onEndTransitionFn );
        }
        classie.remove( overlay, 'close' );
      };
      if( support.transitions ) {
        overlay.addEventListener( transEndEventName, onEndTransitionFn );
      }
      else {
        onEndTransitionFn();
      }
    }
    else if( !classie.has( overlay, 'close' ) ) {
      classie.add( overlay, 'open' );
      classie.add( container, 'overlay-open' );
    }
  }

  closeBttn.addEventListener( 'click', toggleOverlay );
  toggleOverlay();
})();