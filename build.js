import { mkdir, writeFile } from "fs/promises";
import { createWriteStream, readFileSync } from "fs";

import lucide from "lucide";

function buildContent(icon) {
  const elements = icon.map(t => {
    const tag = t[0];
    const attrs = Object.entries(t[1]).map(v => `${v[0]}="${v[1]}"`).join(' ');
    return `<${tag} ${attrs}/>`;
  });

  return `<>${elements.join('')}</>`;
};

function buildIcon(typesRelPath, baseIconRelPath) {
  const template = readFileSync("./icon.tsx.template", "utf8")
    .replace("{{TYPES_REL_PATH}}", typesRelPath)
    .replace("{{BASE_ICON_REL_PATH}}", baseIconRelPath);

  return function(name, content) {
    return template
      .replace("{{ICON_NAME}}", name)
      .replace("{{CONTENT}}", content);
  };
};

function buildExportLine(name, iconsRelPath) {
  return `export { default } as ${name} from '${iconsRelPath}${name}';\n`;
}


async function build() {
  // build icons
  const iconsPath = "./src/components/icons/";
  const build = buildIcon("../../icon-props", "../base-icon")

  await mkdir(iconsPath, {recursive: true});
  await Promise.all(Object.keys(lucide.icons).map(name => {
    const icon = lucide.icons[name];

    return writeFile(`${iconsPath}${name}.tsx`, build(name, buildContent(icon)), "utf8");
  }));

  // export icons
  const indexFile = createWriteStream("./src/index.ts", "utf8");
  Object.keys(lucide.icons).forEach(k => indexFile.write(buildExportLine(k, "./components/icons/")));
  indexFile.close();
}

build();
