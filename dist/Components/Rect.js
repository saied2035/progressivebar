"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.parse-float.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const validations = props => {
  const {
    bar,
    animationDuration,
    width,
    height,
    barColor,
    animationColor,
    textColor,
    borderColor,
    borderRadius
  } = props;
  if (/[0-9]/.test(bar) === false && bar === '' === false) return 'bar attribute should be a number.';else if (bar > 100 || bar < 0) return 'Progress bars only accept a number  >= 0 and <= 100 for the bar attribute.';else if (/[0-9]/.test(animationDuration) === false) return 'animationDuration attribute should be a number (in seconds).';else if (/[0-9]px$/.test(width) === false) return 'width attribute should be in pixels in this format: "(number)px"';else if (/[0-9]px$/.test(height) === false) return 'height attribute should be in pixels in this format: "(number)px"';else if (typeof barColor === 'string' === false) return 'barColor should be string in this format: "(color)"';else if (typeof animationColor === 'string' === false) return 'animationColor should be string in this format: "(color)"';else if (typeof textColor === 'string' === false) return 'textColor should be string in this format: "(color)"';else if (typeof borderColor === 'string' === false) return 'borderColor should be string in this format: "(color)"';else if (/[0-9]px$/.test(borderRadius) === false) return 'borderRadius attribute should be in pixels in this format: "(number)px"';else return true;
};
const countAnimation = (num, duration) => {
  const progressText = document.getElementById('rect-counter');
  let counter = parseInt(progressText.textContent, 10);
  const percent = Math.abs(counter - num);
  const progressing = num => {
    const progressText = document.getElementById("rect-counter");
    if (counter < num) progressText.textContent = "".concat(++counter, "%");
    if (counter > num) progressText.textContent = "".concat(--counter, "%");
    if (counter === num) {
      clearInterval(counts);
    }
  };
  let counts = setInterval(() => progressing(num), duration * 1000 / percent);
};
const progressFunc = (width, num, animationDuration) => {
  const progress = width * (num / 100);
  document.getElementById('rect-progress-bar').setAttribute('width', progress);
  countAnimation(num, animationDuration);
};
const Rect = props => {
  const result = validations(props);
  const {
    bar,
    animationDuration,
    width,
    height,
    barColor,
    animationColor,
    textColor,
    borderColor,
    borderRadius
  } = props;
  const progress = {
    transition: "".concat(animationDuration, "s width")
  };
  _react.default.useEffect(() => {
    if (typeof result === 'string') return console.error(result);
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      progressFunc(parseFloat(width, 10), bar, animationDuration);
    }, 500);
  }, [width, bar, animationDuration, result]);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: width,
      margin: '2px'
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 ".concat(parseFloat(width, 10), " ").concat(parseFloat(height, 10)),
    style: {
      display: 'block',
      border: "1px solid ".concat(borderColor),
      borderRadius: borderRadius
    }
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: width,
    height: height,
    fill: barColor
  }), /*#__PURE__*/_react.default.createElement("rect", {
    id: "rect-progress-bar",
    style: progress,
    width: "0",
    stroke: animationColor,
    height: height,
    fill: animationColor,
    rx: parseInt(borderRadius, 10) / 2
  }), /*#__PURE__*/_react.default.createElement("text", {
    x: parseFloat(width, 10) / 2 - 15,
    y: parseFloat(height, 10) / 2 + 5,
    id: "rect-counter",
    fill: textColor,
    style: {
      fontWeight: 'bold'
    }
  }, "0%")));
};
Rect.defaultProps = {
  bar: 0,
  animationDuration: 1,
  width: '170px',
  height: '20px',
  borderColor: 'black',
  barColor: 'transparent',
  animationColor: '#307bbe',
  textColor: 'black',
  borderRadius: '0px'
};
var _default = Rect;
exports.default = _default;