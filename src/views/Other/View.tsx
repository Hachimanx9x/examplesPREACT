import { useToolContext } from "../../core/context";

export default function View() {
  const {
    general: { textGeneral },
  } = useToolContext();
  return <div>View - {textGeneral}</div>;
}
