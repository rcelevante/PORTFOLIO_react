import React from 'react';


import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';

function Project() {
    return (
<CardDeck>
       
<Card className="bg-dark text-white">
  <Card.Img src="../../assets/img/kickback.png" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Kick Back Application</Card.Title>
    <a href="https://achigas.github.io/KickBack/">Visit this site.</a>
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="../../assets/img/mylingual.png" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>MyLingual Application</Card.Title>
    <a href="https://fathomless-reef-91284.herokuapp.com/">Visit this site.</a>
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="../../assets/img/taskmasterpro.png" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Task Master Pro Application</Card.Title>
    <a href="https://rcelevante.github.io/taskmaster-pro/">Visit this site.</a>
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="../../assets/img/datespot.png" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>DateSpot</Card.Title>
    <a href="https://frightening-labyrinth-81081.herokuapp.com/">Visit this site.</a>
  </Card.ImgOverlay>
</Card>
        
        
</CardDeck>
);
}
export default Project;