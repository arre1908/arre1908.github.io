const links = {
  resume:
    "https://docs.google.com/document/d/1TEsW382Kkjgz4FqoFjjwV-o1kY27UScMC7JrAfnsfoo/edit?usp=sharing",
  linkedin: "https://linkedin.com/in/luis-arredondo-262067115/",
  github: "https://github.com/arre1908",
  email: "arredoluis@gmail.com",
  swapi: "https://luisarredondo.com/vue-swapi",
};

const descriptions = {
  help: "Show list of commands",
  me: "Show all contact info",
  swapi: "Show link to Star Wars API web application",
  resume: "Show link to resume",
  linkedin: "Show link to LinkedIn profile",
  github: "Show link to Github profile",
  email: "Show email address",
  clear: "Clear the console output",
};

const commands = Object.keys(descriptions);

export { links, descriptions, commands };
