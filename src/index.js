import person from "./modules/person";
import createHeader from "./modules/header";

const printName = ({ name }) => {
  console.log(name);
};

printName(person("José", 1.7, 75));

const app = document.getElementById("app");
const header = createHeader({
  level: 1,
  text: "Hello World!",
  className: "color__blue",
});

app.appendChild(header);
