import React from "react";
import "firebase/database";
import {
  SuspenseWithPerf,
  useDatabase,
  useDatabaseObjectData,
} from "reactfire";
import AppLayout from "../components/AppLayout";

import logo from "./logo.svg";

/** Watching a single Object inside Firebase Real-Time Database */
function Tap() {
  type tapList = {
    counter: number;
  };

  const ref = useDatabase().ref("list");

  // get the value from the doc
  const document = useDatabaseObjectData(ref);

  const data = document.data as tapList;
  const status = document.status;

  // Display Value
  const display = () => {
    if (status === "loading") {
      return "Loading...";
    }
    return data.counter;
  };

  // Animation from loading State
  const loadingClass = () => {
    if (status === "loading") {
      return "text-6xl";
    }
    return "text-9xl";
  };

  return (
    <span
      className={
        "self-center text-gray-400 opacity-60 transition-all " + loadingClass()
      }
    >
      {display()}
    </span>
  );
}

function App() {
  const ref = useDatabase().ref("list");

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    ref.once("value", function (snapshot) {
      snapshot.ref.update({
        counter: snapshot.val().counter + 1,
      });
    });

    e.preventDefault();
    console.log("The link was clicked.");
  }

  return (
    <SuspenseWithPerf fallback={"loading..."} traceId={"load-nextslideplz-app"}>
          <AppLayout debugView 
            bottom={
              <button
                className="mx-auto bg-gradient-to-br from-white to-neogray rounded-full shadow-neomorphic-light flex justify-center cursor-pointer"
                onClick={handleClick}
              >
                <Tap />
              </button>
            }
          />
{/*       <div className="h-full w-screen m-0 flex bg-gray-200">
        <div className="self-center mx-auto">

          <button
            className="bg-gradient-to-br from-white to-neogray rounded-full shadow-neomorphic-light w-96 h-96 flex justify-center cursor-pointer"
            onClick={handleClick}
          >
            <Tap />
          </button>

          <div className="text-base italic p-10 text-gray-400">
            by Dino Scheidt
          </div>
        </div>
      </div> */}
    </SuspenseWithPerf>
  );
}

export default App;
