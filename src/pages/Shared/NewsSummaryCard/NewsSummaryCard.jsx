import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

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
              <h5 className="text-uppercase mb-0 text-danger">{author?.name}</h5>
              <p>
                <small>{author?.published_date}</small>
              </p>
            </div>
          </div>
          <div>
            <FaBookmark style={{ marginRight: "10px" }}></FaBookmark>
            <FaShareAlt></FaShareAlt>
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
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between">
          <div>
            <FaStar className="me-2 text-danger"></FaStar>
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye className="me-2 text-danger"></FaEye>
            <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
