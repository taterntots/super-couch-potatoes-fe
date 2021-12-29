import * as Styled from "./styles";
import {
  BsEmojiFrownFill,
  BsEmojiNeutralFill,
  BsEmojiSmileFill,
} from "react-icons/bs";
import { colors } from "../../../../styles";
import { IMockMedia } from "../../mockData";

// ----------------------------------------------------------------------------------
// ---------------------------------- TITLE CARD ------------------------------------
// ----------------------------------------------------------------------------------

interface ITitleCard {
  //   Title card media data
  data: IMockMedia;
}

export const TitleCard = ({ data }: ITitleCard) => {
  const style = {
    color: colors.white,
    backgroundColor:
      data.rating === 1
        ? colors.red[400]
        : data.rating === 2
        ? colors.orange[400]
        : colors.green[500],
    padding: "14px",
    fontSize: "1.4em",
    borderRadius: "0px 9px 9px 0px",
  };

  return (
    <Styled.Wrapper>
      <Styled.CardText>{data.title}</Styled.CardText>
      {data.rating === 1 ? (
        <BsEmojiFrownFill style={style} />
      ) : data.rating === 2 ? (
        <BsEmojiNeutralFill style={style} />
      ) : (
        <BsEmojiSmileFill style={style} />
      )}
    </Styled.Wrapper>
  );
};
