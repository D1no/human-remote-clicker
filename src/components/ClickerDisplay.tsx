import React from "react";

type ClickerDisplayProps = {
  /** Content of SVG text to be shown at the center of the display. */
  text?: string;
  /** Additional SVG text className property. */
  textClassName: string;
  /** Additonal SVG cricle path className property. */
  circleClassName: string;
  /** Displays a background color behind layout sections for debugging. */
  debugView: boolean;
} & typeof defaultProps;

const defaultProps = {
  textClassName: "text-white text-3xl",
  circleClassName: "text-red-600",
  debugView: false,
};

/** Displays an svg element proportionally centered with text set at the center. Has default styles.*/
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
        className={"h-4/5 max-w-4/5 " + (props.debugView ? " bg-pink-400" : "")}
      >
        {/* ToDo: <g> tag is not vertically centered inside the ViewBox, effecting very long displays like pixel 2 xl */}
        <g>
          <circle
            r="50%"
            cx="50%"
            cy="50%"
            className={"fill-current " + props.circleClassName}
          />
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            dy="0.3em"
            className={"fill-current " + props.textClassName}
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
