const messages = {
  en: {
    game: {
      hello: "hello world",
    },
  },
  zh: {
    game: {
      hello: "こんにちは、世界",
    },
  },
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: "zh", // set locale
  messages, // set locale messages
})
