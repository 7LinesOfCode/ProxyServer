import { getRoverData } from "../Repository/roversRepository.js";

export const GetRoverPhoto = async (id, name, api_key) => {
  const requestData = await getRoverData(api_key);

  const dataObj = requestData.photos.map((photo) => ({
    img_src: photo.img_src,
  }));

  const result = { data: dataObj };

  return result;
};
