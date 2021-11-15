import classNames from "classnames";
import VueIcon from "../VueIcon"
import PropTypes from "../../utils/vue-types"
import createFromIconfontCN from "./IconFont.jsx";
import { svgBaseProps, withThemeSuffix, removeTypeTheme, /* getThemeFromTypeName */ alias } from "./utils";
//
import { filterEmpty, getListeners } from "../../utils/props-util";

// Initial setting
const defaultTheme = "outlined";
let dangerousTheme;

function renderIcon(h, context) {
  const { $props: props, $slots } = context;
  const listeners = getListeners(context);
  const {
    // affect inner <svg>...</svg>
    type,
    component: Component,
    viewBox,
    spin,
    // other
    theme, // default to outlined
    twoToneColor,
    rotate,
    tabIndex,
  } = props;
  let children = filterEmpty($slots.default);
  children = children.length === 0 ? undefined : children;
  // warning(
  //   Boolean(type || Component || children),
  //   "Icon",
  //   "Icon should have `type` prop or `component` prop or `children`."
  // );

  const classString = classNames({
    [`anticon`]: true,
    [`anticon-${type}`]: !!type,
  });

  const svgClassString = classNames({
    [`anticon-spin`]: !!spin || type === "loading",
  });

  const svgStyle = rotate
    ? {
      msTransform: `rotate(${rotate}deg)`,
      transform: `rotate(${rotate}deg)`,
    }
    : undefined;

  const innerSvgProps = {
    attrs: {
      ...svgBaseProps,
      viewBox,
    },
    class: svgClassString,
    style: svgStyle,
  };
  if (!viewBox) {
    delete innerSvgProps.attrs.viewBox;
  }

  const renderInnerNode = () => {
    // component > children > type
    if (Component) {
      return <Component {...innerSvgProps}>{children}</Component>;
    }
    if (children) {
      // warning(
      //   Boolean(viewBox) || (children.length === 1 && children[0].tag === "use"),
      //   "Icon",
      //   "Make sure that you provide correct `viewBox`" + " prop (default `0 0 1024 1024`) to the icon."
      // );
      const innerSvgProps = {
        attrs: {
          ...svgBaseProps,
        },
        class: svgClassString,
        style: svgStyle,
      };
      return (
        <svg {...innerSvgProps} viewBox={viewBox}>
          {children}
        </svg>
      );
    }

    if (typeof type === "string") {
      let computedType = type;
      if (theme) {
        // const themeInName = getThemeFromTypeName(type);
        // warning(
        //   !themeInName || theme === themeInName,
        //   "Icon",
        //   `The icon name '${type}' already specify a theme '${themeInName}',` +
        //     ` the 'theme' prop '${theme}' will be ignored.`
        // );
      }
      computedType = withThemeSuffix(removeTypeTheme(alias(computedType)), dangerousTheme || theme || defaultTheme);

      return (
        <VueIcon
          focusable="false"
          class={svgClassString}
          type={computedType}
          primaryColor={twoToneColor}
          style={svgStyle}
        />
      );
    }
  };
  let iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && "click" in listeners) {
    iconTabIndex = -1;
  }
  // functional component not support nativeOn，https://github.com/vuejs/vue/issues/7526
  const iProps = {
    attrs: {
      "aria-label": type && `-: ${type}`,
      tabIndex: iconTabIndex,
    },
    on: listeners,
    class: classString,
    staticClass: "",
  };
  return <i {...iProps}>{renderInnerNode()}</i>;
}

const Icon = {
  name: "AIcon",
  props: {
    tabIndex: PropTypes.number,
    type: PropTypes.string,
    component: PropTypes.any,
    viewBox: PropTypes.any,
    spin: PropTypes.bool.def(false),
    rotate: PropTypes.number,
    theme: PropTypes.oneOf(["filled", "outlined", "twoTone"]),
    twoToneColor: PropTypes.string,
    role: PropTypes.string,
  },
  render(h) {
    return renderIcon(h, this);
  },
};

Icon.createFromIconfontCN = createFromIconfontCN;

/* istanbul ignore next */
Icon.install = function (Vue) {
  // Vue.use(Base);
  Vue.component(Icon.name, Icon);
};

export default Icon;
