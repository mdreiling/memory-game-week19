import React, {Component} from "react";

class FlagCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            isClicked: false
        };

        // this.handleClick = this.handleClick.bind(this.FlagCard);
        // this.updateScore = this.updateScore.bind(this);

        // console.log(this.state);
    }

    // handleClick(clickedCard) {
    //     clickedCard.setState({ isClicked: true });
    //     console.log(clickedCard.state);
    // }

    render() {
        return (
            <div className="col s12 m3">
                <div className="card" key={this.props.id} onClick={() => this.props.handleClick(this)}>
                    <div className="card-image">
                        <img className="responsive-img" alt={this.props.name} src={this.props.image} />
                    </div>
                </div>
            </div>
        );
    }


}



export default FlagCard;