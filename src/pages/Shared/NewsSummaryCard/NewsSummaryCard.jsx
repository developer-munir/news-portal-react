import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaShareAlt } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const {
    details,
    image_url,
    author,
    published_date,
    rating,
    title,
    total_view,
    _id,
  } = news;
  console.log(news);
  return (
    <div>
      <Card className="text-center mb-2">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Image
              roundedCircle
              src={author?.img}
              style={{ height: "60px", marginRight: "10px" }}
            ></Image>
            <div>
              <h5 className="text-uppercase">{author?.name}</h5>
              <p>
                <small>{author?.published_date}</small>
              </p>
            </div>
          </div>
          <div>
            <span className="mr-3">
              <FaBookmark></FaBookmark>
            </span>
            <span>
              <FaShareAlt></FaShareAlt>
            </span>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details?.length > 200 ? (
              <p>
                {details.slice(0, 200)}...
                <Link to={`/news/${_id}`}>Read More</Link>
              </p>
            ) : (
              details
            )}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
