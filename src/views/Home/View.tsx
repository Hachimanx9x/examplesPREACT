import { useCallback } from "preact/hooks";
import { route } from "preact-router";
import { useToolContext, useToolMethodsContext } from "../../core/context";
import { Chart, Map } from "../../components";

export default function View() {
  const {
    general: { isAutorization },
  } = useToolContext();
  const {
    generalMethods: { acceptAuth, deniedAuth, msjGeneral },
  } = useToolMethodsContext();
  return (
    <div className={"flex flex-col"}>
      user is {isAutorization ? "auth" : "not auth"}
      <input
        onInput={(e) => {
          const v = e.currentTarget.value;
          msjGeneral(v);
        }}
      />
      <button
        className={"bg-slate-400"}
        onClick={useCallback(() => {
          acceptAuth();
        }, [])}
      >
        {" "}
        login
      </button>{" "}
      <button
        className={"bg-green-400"}
        onClick={useCallback(() => {
          deniedAuth();
        }, [])}
      >
        {" "}
        out
      </button>
      <button
        className={"bg-red-400"}
        onClick={useCallback(() => {
          route("/Other");
        }, [])}
      >
        {" "}
        go other page
      </button>
      <Chart />
      <Map />
    </div>
  );
}
