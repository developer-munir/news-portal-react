import React from 'react';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitch, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarosel from '../BrandCarosel/BrandCarosel';
const Rightsidenav = () => {
    return (
      <div>
        <ButtonGroup vertical>
          <Button className='mb-2' variant="outline-primary">
            <FaGoogle></FaGoogle>
            Login With Google
          </Button>
          <Button variant="outline-dark">
            <FaGithub></FaGithub>
            Login With Github
          </Button>
        </ButtonGroup>
        <div>
          <h5>Find Us On</h5>
          <ListGroup>
                    <ListGroup.Item className='mb-2'>
                        <FaFacebook></FaFacebook>    
                        Facebook
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2'>
                        <FaYoutube></FaYoutube>
                        Youtube
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2'>
                        <FaWhatsapp></FaWhatsapp>
                        WhatsApp
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2'>
                        <FaTwitter></FaTwitter>
                        Twitter
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2'>
                        <FaInstagram></FaInstagram>    
                        Instagram
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2'>
                        <FaTwitch></FaTwitch>   
                        Twitch
                    </ListGroup.Item>
          </ListGroup>
            </div>
            <div>
                <BrandCarosel></BrandCarosel>
            </div>
      </div>
    );
};

export default Rightsidenav;