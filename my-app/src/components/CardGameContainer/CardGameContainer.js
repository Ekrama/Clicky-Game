import React, {Component} from 'react';
import images from "../../images.json"
import Card from "../Card";

class CardGameContainer extends Component {
    state = {
        images,
        message: "Click To Begin",
        score:0
    };

    handleClick = (id,clicked) =>{
        const allImages = this.state.images;

        if(clicked)
        {
            //set images back to unclick
            allImages.forEach((image,index) => {
                allImages[index].clicked=false;
            });
            return this.setState({
                image:allImages.sort(() => Math.random() -0.5),
                message: "you Guessed Incorrectly!",
                score: 0
            })
        }
        else
        {
          //set images back to clicked
          allImages.forEach((image,index) => {

            if (id === image.id)
            {
            allImages[index].clicked=true;  
            }
        });
            const {score} = this.state;
            const updatedScore = score +1;
            if(updatedScore === images.lenght)

            {
                allImages.forEach((image,index) =>{
                    allImages[index].clicked = false
                });
            }
            return this.setState({
                image:allImages.sort(() => Math.random() -0.5),
                message: "you are correct",
                score: updatedScore
        });
        }}
render() {
    return(
        <div>
        <p>{this.state.message}</p>
        <div>
            {this.state.images.map(image => (
                <Card
                    key ={image.id}
                    id = {image.id}
                    name = {image.name}
                    clicked={image.clicked}
                    image= {image.image}
                    handleClick={this.handleClick}
                    />
            ))}
        </div>
        </div>
    
    );
}
}
export default CardGameContainer;