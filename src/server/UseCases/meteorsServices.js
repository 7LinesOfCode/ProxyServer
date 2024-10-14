import { getMeteors } from "../Repository/meteorsRepository.js";

export const formatMeteors = async (
  startDate,
  endDate,
  count,
  wereDangerousMeteors
) => {
  const requestData = await getMeteors(startDate, endDate);

  console.log(requestData);

  const dataObj = Object.values(requestData.near_earth_objects)
    .flat()
    .map((meteor) => ({
      id: meteor.id,
      name: meteor.name,
      meters_diameter: meteor.estimated_diameter.meters.estimated_diameter_max,
      is_potentially_hazardous_asteroid:
        meteor.is_potentially_hazardous_asteroid,
      close_approach_date_full: meteor.close_approach_date_full,
      relative_velocity:
        meteor.close_approach_data[0].relative_velocity.kilometers_per_second,
    }));

  const result = { data: dataObj };
  if (count) {
    result.count = dataObj.length;
  }

  if (wereDangerousMeteors) {
    result.wereDangerousMeteors = dataObj.some(
      (meteor) => meteor.is_potentially_hazardous_asteroid
    );
  }

  return result;
};
