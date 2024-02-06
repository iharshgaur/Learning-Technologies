function createElement (type, props, ...children) {
  return {
    type,
    props: {
        ...props,
        children: children.map(child => typeof child != "object"
                            ? createTextElement(child)
                            : child
            )
    }
  }
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      value: text,
      children: []
    }
  }
}
// myReactDom.js

function createDomElement(element) {
  if (element.type === 'TEXT_ELEMENT') {
    return document.createTextNode(element.props.value);
  }

  const dom = document.createElement(element.type);

  element.props.children.forEach(child => {
    const childDom = createDomElement(child);
    dom.appendChild(childDom);
  });

  return dom;
}

function render(element, container) {
  const domElement = createDomElement(element);
  container.appendChild(domElement);
}

export const MyReactDom = {
  render
};

export const React = {
  createElement
}