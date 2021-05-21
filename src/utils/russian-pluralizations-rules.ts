export default (choice: number, choicesLength: number) => {
  console.log("🚀 > choicesLength", choicesLength);
  console.log("🚀 > choice", choice);
  if (choice === 0) {
    return 0;
  }

  const teen = choice > 10 && choice < 20;
  const endsWithOne = choice % 10 === 1;

  if (choicesLength < 4) {
    console.log(!teen && endsWithOne ? 1 : 2);

    return !teen && endsWithOne ? 1 : 2;
  }
  if (!teen && endsWithOne) {
    console.log(1);

    return 1;
  }
  if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
    console.log(2);

    return 2;
  }
  console.log(choicesLength < 4 ? 2 : 3);

  return choicesLength < 4 ? 2 : 3;
};
