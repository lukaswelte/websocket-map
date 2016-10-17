const R = 6371; // Radius of the earth in km

const deg2rad = (degree) => {
  return degree * (Math.PI/180);
}

export const distanceFromLocationToLocationInKm = (lat1, lng1, lat2, lng2) => {
    const differenceLatitude = deg2rad(lat2-lat1);  // deg2rad below
    const differenceLongitude = deg2rad(lng2-lng1);
    const a = Math.sin(differenceLatitude/2) * Math.sin(differenceLatitude/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(differenceLongitude/2) * Math.sin(differenceLongitude/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distanceInKm = R * c; // Distance in km
    return distanceInKm;
}
