function Sound(src,volume=0.5,replay=false,loop=false,autoplay=false) {
  this.sound = document.createElement("audio");
  this.sound.volume=volume;
  this.sound.style.display="none"
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  loop&&  this.sound.setAttribute("loop", loop);
    autoplay&&  this.sound.setAttribute("autoplay", loop);

  //this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function() {
    replay?this.sound.currentTime=0:false;
    this.sound.play();
  }
  this.stop = function() {
    this.sound.pause();
    this.sound.currentTime = 0
  }
}
var audioBgm = new Sound('bgm.mp3',0.5,false,true,true);
var audioClick = new Sound('bubble.mp3',0.8,true);
var audioM = new Sound('meow.mp3',0.2);
var audioSweet = new Sound('meow2.mp3',0.2);
var audioUnlock = new Sound('unlock.wav');
var audioCheer = new Sound('cheer.wav');
const bgmStart=false;
var study = new Vue({
  el: "#vue-app",
  data: {
    target: 1000,
    count: 1,
    addition: 1,
    bonus: 1,
    auto: 0,
    showUpgrade: false,
    showEquipment: false,
    showHelper: false,
    upgrades: UPGRADES,
    equipments: EQUIPMENTS,
    helpers: HELPERS
  },
  methods: {
    click: function() {
     !bgmStart&& setTimeout(()=>{
            audioBgm.play()
bgmStart=true
      },50)

            audioClick.play()
      this.count += this.addition * this.bonus
    },
    fullScreen:function(){
             document.documentElement.requestFullscreen()

    },
    buyUpgrade: function(upgrade) {
      upgrade.id%2==0?audioM.play():audioSweet.play()
      if (this.count < upgrade.price) { return }
      // if (upgrade.level >= upgrade.id*30) { return }
      this.count -= upgrade.price;
      this.addition += upgrade.addition;
      // upgrade.price=(upgrade.price*1.1 ).toFixed()
      upgrade.level++;
    },
    buyEquipment: function(e) {
      audioUnlock.play()
      if (this.count < e.price) { return }
      // if (upgrade.level >= upgrade.id*30) { return }
      this.count -= e.price;
      this.bonus += e.addition;

      // upgrade.price=(upgrade.price*1.1 ).toFixed()
      e.bought = true;
    },
    buyHelper: function(e) {
            audioCheer.play()
      if (this.count < e.price) { return }
      // if (upgrade.level >= upgrade.id*30) { return }
      this.count -= e.price;
      this.auto += e.addition;
    
      // upgrade.price=(upgrade.price*1.1 ).toFixed()
      e.bought = true;
    },
  },
  computed: {
    countD: function() {
      return Math.round(this.count)
    },
  },
  mounted: function() {
    setInterval(() => {
      if(this.count>this.target){
        this.target*=100
      }
      this.count += this.addition * this.bonus / 4 * this.auto
    }, 250);
  },
  watch: {
    count:
    {
      handler(v, o) {
        if (v >= 10) {
          this.showUpgrade = true
        }
        if (v >= 700) { this.showEquipment = true }
        if (v >= 4000) {this.showHelper=true}
      },
      immediate: true
    }
  }


});
