import React from "react";

declare module "react" {
  interface ReactElement {
    type: any;
    props: any;
    key: string | null;
  }

  interface HTMLAttributes<T> {
    children?: React.ReactNode | React.ReactNode[] | Element[] | any;
  }

  interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
    children?: React.ReactNode | React.ReactNode[] | Element[];
  }
}
