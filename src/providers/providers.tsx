import { FC, ReactNode } from "react";
import { NavigateOptions, useHref, useNavigate } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/system";
import { Provider } from "react-redux";
import { store } from "@/redux/store.ts";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  const navigate = useNavigate();

  return <Provider store={store}>
    <NextUIProvider navigate={navigate} useHref={useHref}>
      {children}
    </NextUIProvider>
  </Provider>;
};

export default Providers;