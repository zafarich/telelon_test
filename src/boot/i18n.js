import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";
import messages from "src/i18n";

function customRule(choice, choicesLength) {
  if (choice === 0) return 0;

  const teen = choice > 10 && choice < 20;
  const endsWithOne = choice % 10 === 1;
  if (!teen && endsWithOne) return 1;
  if (!teen && choice % 10 >= 2 && choice % 10 <= 4) return 2;

  return choicesLength < 4 ? 2 : 3;
}

const i18n = createI18n({
  locale: "uz-Latn",
  globalInjection: true,
  legacy: false,
  pluralRules: {
    ru: customRule,
  },
  messages,
});

export { i18n };
export default boot(({ app }) => {
  app.use(i18n);
});
