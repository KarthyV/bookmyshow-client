import React from "react";
import { Card } from "react-bootstrap";

const PremiumCard = () => {
  const premiumCol = [
    {
      name: "RRR",
      img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rrr-et00094579-27-07-2021-11-33-17.jpg",
    },
    {
      name: "Spiderman : No Way Home",
      img: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/spider-man-no-way-home-et00310790-15-03-2022-10-22-50.jpg",
    },
    {
      name: "KGF : CHAPTER 2",
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICA3MDNrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00098647-dvapsdepqj-portrait.jpg",
    },
  ];
  return (
    <div className="premium">
      {premiumCol.map((col, i) => {
        return (
          <Card key={i} style={{ width: "19rem" }}>
            <Card.Img variant="top" className="movieImage" src={col.img} />
            <Card.Body>
              <Card.Title className="cardTitle">{col.name}</Card.Title>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default PremiumCard;
