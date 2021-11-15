import { generate, isIconDefinition, log, MiniMap, withSuffix } from "../utils";

const Icon = {
  name: "AntdIcon",
  props: ["type", "primaryColor", "secondaryColor"],
  displayName: "IconVue",
  definitions: new MiniMap(),
  add(...icons) {
    icons.forEach((icon) => {
      Icon.definitions.set(withSuffix(icon.name, icon.theme), icon);
    });
  },
  clear() {
    Icon.definitions.clear();
  },

  render(h) {
    const { type } = this.$props;

    let target;
    if (isIconDefinition(type)) {
      target = type;
    }
    if (!target) {
      log(`type should be string or icon definiton, but got ${type}`);
      return null;
    }
    return generate(h, target.icon, `svg-${target.name}`, {
      attrs: {
        "data-icon": target.name,
        width: "1em",
        height: "1em",
        fill: "currentColor",
        "aria-hidden": "true",
      },
      on: this.$listeners,
    });
  },
};

/* istanbul ignore next */
Icon.install = function (Vue) {
  Vue.component(Icon.name, Icon);
};

export default Icon;
