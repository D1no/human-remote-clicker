import React from "react";

type ClickerDisplayProps = {
  /** Text to be shown at the center of the display. */
  text?: string;
  /** Displays a background color behind layout sections for debugging. */
  debugView: boolean;
} & typeof defaultProps;

const defaultProps = {
  debugView: false,
};

/** Displays an svg element proportionally centered with the text set at the center. */
const ClickerDisplay = (props: ClickerDisplayProps) => {
  return (
    <div
      className={
        "items-center align-middle flex justify-center overflow-hidden flex-1 flex-col relative" +
        (props.debugView ? " bg-purple-200" : "")
      }
    >
      <svg
        viewBox="0 0 140 140"
        preserveAspectRatio="xMinYMin meet"
        className={
          "fill-current text-red-600 h-4/5 max-w-4/5" +
          (props.debugView ? " bg-pink-400" : "")
        }
      >
        {/* ToDo: <g> tag is not vertically centered inside the ViewBox, effecting very long displays like pixel 2 xl */}
        <g>
          <circle r="50%" cx="50%" cy="50%" />
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            dy="0.3em"
            className={"fill-current text-white text-3xl"}
          >
            {props.text}
          </text>
        </g>
      </svg>
    </div>
  );
};

ClickerDisplay.defaultProps = defaultProps;

export default ClickerDisplay;
