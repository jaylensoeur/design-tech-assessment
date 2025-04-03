import type {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";

export type CompoundComponentWithRef<P, E, C> = ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<E>
> &
  C;
