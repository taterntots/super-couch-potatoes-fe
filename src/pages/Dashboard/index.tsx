import moment from "moment";
import * as Styled from "./styles";
import { TitleCard } from "./components";
import { mockMedia, months } from "./mockData";

// ----------------------------------------------------------------------------------
// ---------------------------------- DASHBOARD -------------------------------------
// ----------------------------------------------------------------------------------

export const Dashboard = () => {
  return (
    <Styled.Wrapper>
      {months.map((month) => (
        <Styled.MonthContainer key={month.id}>
          <Styled.MonthText>
            {month.name} (
            {
              mockMedia.filter(
                (mock) => moment(mock.date_completed).format("MM") === month.id
              ).length
            }
            )
          </Styled.MonthText>
          {mockMedia
            .filter(
              (mock) => moment(mock.date_completed).format("MM") === month.id
            )
            .map((filteredMock) => (
              <TitleCard key={filteredMock.id} data={filteredMock} />
            ))}
        </Styled.MonthContainer>
      ))}
    </Styled.Wrapper>
  );
};
