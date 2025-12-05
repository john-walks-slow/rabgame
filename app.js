Number.prototype.round = function (n) {
  const d = Math.pow(10, n)
  return Math.floor((this + Number.EPSILON) * d) / d
}
Number.prototype.format = function (precision = 0, useCount = false) {
  let number = this
  number = Math.floor(number * 10 ** precision) / 10 ** precision
  if (useCount) {
    if (number > 1000000000) {
      return `${(number / 1000000000).toFixed(1)}B`
    }
    if (number > 1000000) {
      return `${(number / 1000000).toFixed(1)}M`
    } else if (number > 1000) {
      return `${(number / 1000).toFixed(1)}K`
    }
  }
  return `${number}`
}
function Sound(
  src,
  volume = 0.5,
  replay = false,
  loop = false,
  autoplay = false
) {
  this.sound = document.createElement("audio")
  this.sound.volume = volume
  this.sound.style.display = "none"
  this.sound.src = src
  this.sound.setAttribute("preload", "auto")
  this.sound.setAttribute("controls", "none")
  loop && this.sound.setAttribute("loop", loop)
  autoplay && this.sound.setAttribute("autoplay", loop)

  //this.sound.style.display = "none";
  document.body.appendChild(this.sound)
  this.play = function () {
    replay ? (this.sound.currentTime = 0) : false
    this.sound.play()
  }
  this.stop = function () {
    this.sound.pause()
    this.sound.currentTime = 0
  }
}
var audioBgm = new Sound("res/audio/bgm-run.ogg", 0.15, false, true, true)
var audioClick = new Sound("res/audio/bubble.ogg", 0.8, true)
var audioM = new Sound("res/audio/meow.ogg", 0.2)
var audioSweet = new Sound("res/audio/meow2.ogg", 0.2)
var audioUnlock = new Sound("res/audio/unlock.ogg", 0.3)
var audioCheer = new Sound("res/audio/cheer.ogg", 0.3)
var bgmStart = false

var study = new Vue({
  // i18n,
  el: "#vue-app",
  data: {
    dev: false,
    count: 1,
    addition: 1,
    bonus: 1,
    auto: 0,
    era: 1,
    showUpgrade: false,
    showEquipment: false,
    showHelper: false,
    upgrades: UPGRADES,
    equipments: EQUIPMENTS,
    helpers: HELPERS,
    unlockThreshold: 0.5,
  },
  methods: {
    restart: function () {
      localStorage.clear()
      localStorage.setItem(
        "save",
        JSON.stringify({
          era: this.era + 1,
        })
      )
      window.location.reload()
    },
    cheat: function () {
      this.count *= 1.2
    },
    click: function () {
      // !bgmStart &&
      //   setTimeout(() => {
      //     audioBgm.play()
      //     bgmStart = true
      //   }, 50)

      audioClick.play()
      this.count += this.addition * this.bonus
    },
    fullScreen: function () {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        document.documentElement.requestFullscreen()
      }
    },
    buyUpgrade: function (upgrade) {
      upgrade.id % 2 == 0 ? audioM.play() : audioSweet.play()
      if (this.count < upgrade.price) {
        return
      }
      // if (upgrade.level >= upgrade.id*30) { return }
      this.count -= upgrade.price
      this.addition += upgrade.base * this.era
      upgrade.level++
      upgrade.base *= upgrade.growth
      if (upgrade.base < 10) {
        upgrade.base = upgrade.base.round(1)
      } else {
        upgrade.base = upgrade.base.round(0)
      }
      upgrade.price *= upgrade.growth ** 2
      if (upgrade.price < 10) {
        upgrade.price = upgrade.price.round(1)
      } else {
        upgrade.price = upgrade.price.round(0)
      }
      // upgrade.price=(upgrade.price*1.1 ).round()
    },
    buyEquipment: function (equipment) {
      audioUnlock.play()
      if (this.count < equipment.price) {
        return
      }
      // if (upgrade.level >= upgrade.id*30) { return }
      this.count -= equipment.price
      this.bonus += equipment.base * this.era

      // upgrade.price=(upgrade.price*1.1 ).round()
      equipment.bought = true
    },
    buyHelper: function (helper) {
      audioCheer.play()
      if (this.count < helper.price) {
        return
      }
      // if (upgrade.level >= upgrade.id*30) { return }
      this.count -= helper.price
      this.auto += helper.base * this.era

      // upgrade.price=(upgrade.price*1.1 ).round()
      helper.bought = true
    },
    unlockUpgrades: function () {
      if (this.count >= UPGRADES[0].price * this.unlockThreshold) {
        this.showUpgrade = true
      }
      if (this.count >= EQUIPMENTS[0].price * this.unlockThreshold) {
        this.showEquipment = true
      }
      if (this.count >= HELPERS[0].price * this.unlockThreshold) {
        this.showHelper = true
      }
    },
  },
  computed: {
    countD: function () {
      return Math.round(this.count)
    },
    eraBonus: function () {
      return 1.5 ** (this.era - 1)
    },
    target: function () {
      return 1000000000 * 4 ** (this.era - 1)
    },
  },
  mounted: function () {
    let save = localStorage.getItem("save")
    if (save) {
      Object.assign(this.$data, JSON.parse(save))
      this.unlockUpgrades()
    }
    if (this.addition === 1) {
      this.addition = this.eraBonus
    }
    setInterval(() => {
      // if (this.count > this.target) {
      // this.target *= 100;
      // }
      this.count += ((this.addition * this.bonus) / 4) * this.auto
    }, 250)
  },
  watch: {
    count: {
      handler(v, o) {
        this.unlockUpgrades()
        let save = {
          target: this.target,
          count: this.count,
          addition: this.addition,
          bonus: this.bonus,
          auto: this.auto,
          era: this.era,
          showUpgrade: this.showUpgrade,
          showEquipment: this.showEquipment,
          showHelper: this.showHelper,
          upgrades: this.upgrades,
          equipments: this.equipments,
          helpers: this.helpers,
        }
        localStorage.setItem("save", JSON.stringify(save))
      },
      immediate: false,
    },
  },
})
