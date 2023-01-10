export interface AdoptData {
  id: string;
  type: string;
  name: string;
  entryDate: string;
  sex: string;
  age: string;
  birthControlStatus: string;
  describe: string;
  healthStatus: string;
  imgUrl: string;
}

//圖片路徑
export interface ImageUrl {
  fileFirstName: string;
  fileSecondName: string;
}

export interface SelectAdoptAnimalsData {
  id: string;
  type: string;
  name: string;
  entryDate: string;
  sex: string;
  age: string;
  birthControlStatus: string;
  describe: string;
  healthStatus: string;
  imgUrl: string;
}

export interface NewItems {
  id: string;
  type: string;
  name: string;
  entryDate: string;
  sex: string;
  age: string;
  birthControlStatus: string;
  describe: string;
  healthStatus: string;
  imgUrl: string;
}

export interface DefaultAdoptAnimalsData {
  code: number;
  msg: string;
  data: SelectAdoptAnimalsData;
}
