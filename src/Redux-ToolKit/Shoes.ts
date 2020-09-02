export interface productType {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity:number,
  added: boolean
}

const initialState: productType[] = [
  {
    id: 0,
    name: "VALOUR BLUE",
    price: 1500,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 1,
    name: "JORDAN MARS 270 LONDON",
    price: 1400,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 2,
    name: "RACER BLUE",
    price: 1000,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 3,
    name: "VALOUR BLUE",
    price: 1500,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 4,
    name: "JORDAN MARS 270 LONDON",
    price: 1800,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 5,
    name: "RACER BLUE",
    price: 2000,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 5,
    name: "VALOUR BLUE",
    price: 2200,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 6,
    name: "JORDAN MARS 270 LONDON",
    price: 1200,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 7,
    name: "RACER BLUE",
    price: 1500,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 8,
    name: "VALOUR BLUE",
    price: 1100,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 9,
    name: "JORDAN MARS 270 LONDON",
    price: 1900,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 10,
    name: "RACER BLUE",
    price: 1300,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 11,
    name: "VALOUR BLUE",
    price: 1600,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 12,
    name: "JORDAN MARS 270 LONDON",
    price: 1800,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 13,
    name: "RACER BLUE",
    price: 1700,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 14,
    name: "VALOUR BLUE",
    price: 2100,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 15,
    name: "JORDAN MARS 270 LONDON",
    price: 2500,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 16,
    name: "RACER BLUE",
    price: 900,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 17,
    name: "VALOUR BLUE",
    price: 2700,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 18,
    name: "JORDAN MARS 270 LONDON",
    price: 3000,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 19,
    name: "RACER BLUE",
    price: 2500,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 20,
    name: "VALOUR BLUE",
    price: 3500,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 21,
    name: "JORDAN MARS 270 LONDON",
    price: 1500,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 22,
    name: "RACER BLUE",
    price: 1000,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 23,
    name: "VALOUR BLUE",
    price: 500,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 24,
    name: "JORDAN MARS 270 LONDON",
    price: 1200,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 25,
    name: "RACER BLUE",
    price: 3200,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 26,
    name: "VALOUR BLUE",
    price: 3300,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 27,
    name: "JORDAN MARS 270 LONDON",
    price: 3400,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 28,
    name: "RACER BLUE",
    price: 4000,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 29,
    name: "VALOUR BLUE",
    price: 1000,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 30,
    name: "JORDAN MARS 270 LONDON",
    price: 1500,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 31,
    name: "RACER BLUE",
    price: 4000,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 32,
    name: "VALOUR BLUE",
    price: 4100,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 33,
    name: "JORDAN MARS 270 LONDON",
    price: 3500,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  {
    id: 34,
    name: "RACER BLUE",
    price: 2500,
    quantity: 0,
    added: false,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
];

export { initialState };
