import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const News = () => {
  const news = useLoaderData();
  const { category_id, image_url, title, author, details } = news;
  console.log(news);
  return (
    <div>
      <Card>
        <Card.Header>
          <Image src={image_url} fluid></Image>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary">Go Category</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
