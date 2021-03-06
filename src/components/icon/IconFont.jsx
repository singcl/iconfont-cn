import Icon from "./index.jsx";
import { mergeProps } from "../../utils/props-util";

const customCache = new Set();

function isValidCustomScriptUrl(scriptUrl) {
  return typeof scriptUrl === "string" && scriptUrl.length && !customCache.has(scriptUrl);
}

function createScriptUrlElements(scriptUrls, index = 0) {
  const currentScriptUrl = scriptUrls[index];
  if (isValidCustomScriptUrl(currentScriptUrl)) {
    const script = document.createElement("script");
    script.setAttribute("src", currentScriptUrl);
    script.setAttribute("data-namespace", currentScriptUrl);
    if (scriptUrls.length > index + 1) {
      script.onload = () => {
        createScriptUrlElements(scriptUrls, index + 1);
      };
      script.onerror = () => {
        createScriptUrlElements(scriptUrls, index + 1);
      };
    }
    customCache.add(currentScriptUrl);
    document.body.appendChild(script);
  }
}

export default function create(options) {
  const { scriptUrl, extraCommonProps = {} } = options;

  /**
   * DOM API required.
   * Make sure in browser environment.
   * The Custom Icon will create a <script/>
   * that loads SVG symbols and insert the SVG Element into the document body.
   */
  if (
    typeof document !== "undefined" &&
    typeof window !== "undefined" &&
    typeof document.createElement === "function"
  ) {
    if (Array.isArray(scriptUrl)) {
      // 因为iconfont资源会把svg插入before，所以前加载相同type会覆盖后加载，为了数组覆盖顺序，倒叙插入
      createScriptUrlElements(scriptUrl.reverse());
    } else {
      createScriptUrlElements([scriptUrl]);
    }
  }

  const Iconfont = {
    functional: true,
    name: "AIconfont",
    props: Icon.props,
    render(h, context) {
      const { props, slots, listeners, data } = context;
      const { type, ...restProps } = props;
      const slotsMap = slots();
      const children = slotsMap.default;
      // component > children > type
      let content = null;
      if (type) {
        content = <use {...{ attrs: { "xlink:href": `#${type}` } }} />;
      }
      if (children) {
        content = children;
      }
      const iconProps = mergeProps(extraCommonProps, data, { props: restProps, on: listeners });
      return <Icon {...iconProps}>{content}</Icon>;
    },
  };
  return Iconfont;
}
