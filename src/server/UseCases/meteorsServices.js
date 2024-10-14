import { getMeteors } from "../Repository/meteorsRepository.js";

const requestData = await getMeteors();

export const formatMeteors = () =>
  requestData.near_earth_objects["2024-10-07"].map((meteor) => ({
    id: meteor.id,
    name: meteor.name,
    meters_diameter: meteor.estimated_diameter.meters.estimated_diameter_max,
    is_potentially_hazardous_asteroid: meteor.is_potentially_hazardous_asteroid,
    close_approach_date_full: meteor.close_approach_date_full,
    relative_velocity:
      meteor.close_approach_data[0].relative_velocity.kilometers_per_second,
  }));
