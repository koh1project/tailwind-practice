module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  content: ["./*{html,js}"],
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [],
}