const createHeader = (attributes) => {
  const { level, text, className } = attributes;
  const headerTag = document.createElement(`h${ level }`);
  headerTag.innerText = text;
  headerTag.classList.add(className);
  return headerTag;
};

export default createHeader;
