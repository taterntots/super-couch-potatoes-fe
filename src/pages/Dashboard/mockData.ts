export interface IMockMedia {
  id: string;
  title: string;
  rating: number;
  date_completed: string;
  type: "game" | "movie" | "show" | "book";
  first_time: boolean;
  img_URL: string;
  created_at: string;
  updated_at: string;
}

export interface IMonths {
  id: string;
  name: string;
}

export const mockMedia: IMockMedia[] = [
  {
    id: "1",
    title: "The Legend of Zelda: Breath of the Wild",
    rating: 2,
    date_completed: "2017-01-03T00:00:00.000Z",
    type: "game",
    first_time: true,
    img_URL: "",
    created_at: "1640727470",
    updated_at: "1640727470",
  },
  {
    id: "2",
    title: "Hollow Knight",
    rating: 3,
    date_completed: "2018-02-07T00:00:00.000Z",
    type: "game",
    first_time: true,
    img_URL: "",
    created_at: "1640183746",
    updated_at: "1640183746",
  },
  {
    id: "3",
    title: "Celeste",
    rating: 3,
    date_completed: "2018-02-19T00:00:00.000Z",
    type: "game",
    first_time: false,
    img_URL: "",
    created_at: "1510727470",
    updated_at: "1510727470",
  },
  {
    id: "4",
    title: "Crypt of the Necrodancer",
    rating: 2,
    date_completed: "2018-03-10T00:00:00.000Z",
    type: "game",
    first_time: false,
    img_URL: "",
    created_at: "1316727470",
    updated_at: "1316727470",
  },
  {
    id: "5",
    title: "Hellow Kitty Kruisers",
    rating: 1,
    date_completed: "2018-04-20T00:00:00.000Z",
    type: "game",
    first_time: true,
    img_URL: "",
    created_at: "1316727470",
    updated_at: "1316727470",
  },
  {
    id: "6",
    title: "Die Hard",
    rating: 3,
    date_completed: "2018-04-20T00:00:00.000Z",
    type: "movie",
    first_time: true,
    img_URL: "",
    created_at: "1316727470",
    updated_at: "1316727470",
  },
  {
    id: "7",
    title: "The Hobbit",
    rating: 2,
    date_completed: "2018-04-20T00:00:00.000Z",
    type: "book",
    first_time: true,
    img_URL: "",
    created_at: "1316727470",
    updated_at: "1316727470",
  },
];

export const months: IMonths[] = [
  {
    id: "01",
    name: "January",
  },
  {
    id: "02",
    name: "February",
  },
  {
    id: "03",
    name: "March",
  },
  {
    id: "04",
    name: "April",
  },
  {
    id: "05",
    name: "May",
  },
  {
    id: "06",
    name: "June",
  },
  {
    id: "07",
    name: "July",
  },
  {
    id: "08",
    name: "August",
  },
  {
    id: "09",
    name: "September",
  },
  {
    id: "10",
    name: "October",
  },
  {
    id: "11",
    name: "November",
  },
  {
    id: "12",
    name: "December",
  },
];
