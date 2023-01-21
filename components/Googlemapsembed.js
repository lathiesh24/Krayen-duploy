// import React from 'react'
// import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

// const WrappedMap = withScriptjs(withGoogleMap(() =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   />
// ));

// function Googlemapsembed() {
//     //AIzaSyBxVwnFlRH_9eyNjxEQx2mA4e-2wDthAN0
//     //  https://www.google.com/maps/embed/v1/MAP_MODE?key=AIzaSyBxVwnFlRH_9eyNjxEQx2mA4e-2wDthAN0&parameters
//   return (
//     <WrappedMap
//       googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=YOUR_API_KEY`}
//       loadingElement={<div style={{ height: `100%` }} />}
//       containerElement={<div style={{ height: `400px` }} />}
//       mapElement={<div style={{ height: `100%` }} />}
//     />
//   );
// }

// export default Googlemapsembed
// q=place_id:ChIJN1t_tDeuEmsRUsoyG83frY4

import React from 'react';

export function Googlemapsembed({place}) {
    const placeId = place[4]
  return (
    <div>
        <iframe
      width="600"
      height="450"
      frameBorder="0"
      src={`https://www.google.com/maps/embed/v1/place?q=place_id:${placeId}&key=AIzaSyBxVwnFlRH_9eyNjxEQx2mA4e-2wDthAN0`}
      allowFullScreen
    />
    </div>
  );
}

