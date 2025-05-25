/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent;
  export default component;
}

declare var umami: {
  track: {
    (): void;
    (payload: object): void;
    (event_name: string): void;
    (event_name: string, data: object): void;
  };
  identify: {
    (unique_id: string): void;
    (unique_id: string, data: object): void;
    (data: object): void;
  };
};
