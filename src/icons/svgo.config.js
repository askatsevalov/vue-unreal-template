module.exports = {
  plugins: [
    {
      name: "removeAttrs",
      params: {
        attrs: ["fill", "fill-rule", "width", "height", "xmlns", "style"],
      },
    },
  ],
};
