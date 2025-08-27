// DO NOT MODIFY

export interface AddressModel {
  city: string;
  firstName: string;
  // houseNumber: string;
  gender: string;
  id: string;
  lastName: string;
  address: string;
  state: string;
  // postcode: string;
  //  street: string;
}

export interface RawAddressModel extends AddressModel {
  lat: string;
  lon: string;
}

export default function transformAddress(data: RawAddressModel): AddressModel {
  const {
    firstName,
    lastName,
    city,
    //    houseNumber,
    lat,
    address,
    lon,
    //    postcode,
    state,
    //   street,
    gender,
  } = data;
  return {
    city: city || "",
    state: state || "",
    gender: gender || "",
    firstName: firstName || "",
    //   houseNumber: houseNumber || "",
    address: address || "",
    id: `${lat || Date.now()}_${lon || Math.random()}`,
    lastName: lastName || "",
    //   postcode: postcode || "",
    // street: street || "",
  };
}
