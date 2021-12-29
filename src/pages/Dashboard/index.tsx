import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Styled from "./styles";
import { TitleCard } from "./components";
import { IMockMedia, mockMedia, months } from "./mockData";

// ----------------------------------------------------------------------------------
// ---------------------------------- DASHBOARD -------------------------------------
// ----------------------------------------------------------------------------------

export const Dashboard = () => {
  const [media, setMedia] = useState<IMockMedia[]>([]);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("game")) {
      const gameMedia = mockMedia.filter((media) => media.type === "game");
      setMedia(gameMedia);
    } else if (location.pathname.includes("movie")) {
      const movieMedia = mockMedia.filter((media) => media.type === "movie");
      setMedia(movieMedia);
    } else if (location.pathname.includes("show")) {
      const showMedia = mockMedia.filter((media) => media.type === "show");
      setMedia(showMedia);
    } else if (location.pathname.includes("book")) {
      const bookMedia = mockMedia.filter((media) => media.type === "book");
      setMedia(bookMedia);
    } else {
      setMedia([]);
    }
  }, [location]);

  return (
    <Styled.Wrapper>
      <Styled.DatePickerContainer>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => {
            setStartDate(date);
          }}
          selectsStart
          dateFormat="yyyy"
          showYearPicker
        />
      </Styled.DatePickerContainer>

      {months.map((month) => (
        <Styled.MonthContainer key={month.id}>
          <Styled.MonthText>
            {month.name} (
            {
              media.filter(
                (mock) => moment(mock.date_completed).format("MM") === month.id
              ).length
            }
            )
          </Styled.MonthText>
          {media
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
