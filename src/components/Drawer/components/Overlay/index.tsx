import { Props } from "../typings";

import * as S from "./styles";

export const OverlayDrawer = ({ open, close }: Props) => {
  return <S.Overlay open={open} onClick={close} />;
};
