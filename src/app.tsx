import { ToolGLobalProvider } from "./core/context";
import GlobalRouter from "./router";

export function App() {
  return (
    <ToolGLobalProvider>
      <GlobalRouter />
    </ToolGLobalProvider>
  );
}
