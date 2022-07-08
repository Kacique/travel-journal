import React from "react";
import Card from "./components/Card";
import data from "./data";

function Main() {
  const displayCards = data.map((item) => {
    return (
      <Card
        url={item.imageUrl}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
      />
    );
  });

  return <section>{displayCards}</section>;
}

export default Main;
//
