import React from "react";

type AppLayoutProps = {
  /** Navigation layout section with default size (flex basis). */
  nav: React.ReactElement;
  /** Top layout section of main content (golden ratio grow). */
  top: React.ReactElement;
  /** Bottom layout section of main content (golden ratio shrink). */
  bottom: React.ReactElement;
  /** Footer layout section with default size (flex basis). */
  footer: React.ReactElement;
  /** Displays a background color behind layout sections for debugging. */
  debugView: boolean;
} & typeof defaultProps;

const defaultProps = {
  nav: <span>AppLayout: nav section not assigned</span>,
  top: <span>AppLayout: top section not assigned</span>,
  bottom: <span>AppLayout: bottom section not assigned</span>,
  footer: <span>AppLayout: footer section not assigned</span>,
  debugView: false,
};

/** Full screen app layout with a golden ratio split between top and bottom.
 * Tailwindcss Extension: flex-golden and flex-basis are defined in global css file. */
const AppLayout = (props: AppLayoutProps) => {
  return (
    <div className="h-full flex flex-col bg-gray-200">
      <div
        className={
          "flex-basis-l flex" + (props.debugView ? " bg-green-100" : "")
        }
      >
        {props.nav}
      </div>

      <div
        className={"flex-golden flex" + (props.debugView ? " bg-red-100" : "")}
      >
        {props.top}
      </div>

      <div
        className={"flex-1 flex" + (props.debugView ? " bg-yellow-100" : "")}
      >
        {props.bottom}
      </div>
      <div
        className={
          "flex-basis-s flex" + (props.debugView ? " bg-blue-100" : "")
        }
      >
        {props.footer}
      </div>
    </div>
  );
};

AppLayout.defaultProps = defaultProps;

export default AppLayout;
