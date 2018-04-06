let React = require('react');
let Bootstrap = require('react-bootstrap');
let FieldGroup = Bootstrap.Grid;
let Row = Bootstrap.Row;
let Col = Bootstrap.Col;
let Grid = Bootstrap.Grid;
let Button = Bootstrap.Button;
let api = require('../utiles/api');
let Image = Bootstrap.Image;
class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { player1: { username: '', score: 0, avatarUI: '' }, player2: { username: '', score: 0, avatarUI: '' },Winner:'' }
        this.Fight = Fight.bind(this);
        this.HandleChange = HandleChange.bind(this);
    }
    render() {

        return (
            this.state.player1.score > 0 && this.state.player2.score > 0 ?
                <Grid>
                    <Row className="show-grid">
                        <Col md={6} xs={6}>
                        <label>Score: {this.state.player1.score}</label>
                        <Image className="img-thumbnail" src={this.state.player1.avatarUI} circle />

                        </Col>
                        <Col md={6} xs={6}>
                        <label>Score: {this.state.player2.score}</label>
                        <Image className="img-thumbnail" src={this.state.player2.avatarUI} circle />

                        </Col>
                    </Row>
                    <Row className="show-grid">
                        
                        <h1>{this.state.player1.score > this.state.player2.score ? "Winner is " + this.state.player1.username : this.state.player1.score > this.state.player2.score ? "Winner is " + this.state.player2.username :"IT's A Tie" }</h1>
                    </Row>
                    <Button onClick={()=>{this.setState({player1: { username: '', score: 0, avatarUI: '' }, player2: { username: '', score: 0, avatarUI: '' },Winner:'' })}}>New Fight ?</Button>
                </Grid> :
                <form className="battle-form">
                    <Grid>
                        <Row className="show-grid">
                            <Col md={6} xs={6}>
                                <input type="text" name="player1" onChange={this.HandleChange} className="form-control" />

                            </Col>
                            <Col md={6} xs={6}>
                                <input type="text" name="player2" onChange={this.HandleChange} className="form-control" />

                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col className="midle" md={12} xs={12}>
                                <Button onClick={this.Fight}>Fight</Button>
                            </Col>
                        </Row>
                    </Grid>
                </form>)
    }
}
function HandleChange(event) {
    console.log(event.target.name);
    if (event.target.name === "player1")
        this.setState({ player1: { username: event.target.value, score: 0, avatarUI: '' } });
    else
        this.setState({ player2: { username: event.target.value, score: 0, avatarUI: '' } });

}
function Fight() {
   
    api.fetchUserRepo(this.state.player1.username).then(user => { this.setState({ player1: { username: this.state.player1.username, score: user[0].score, avatarUI: user[0].avatar_url } }) });

    api.fetchUserRepo(this.state.player2.username).then(user => { this.setState({ player2: { username: this.state.player2.username, score: user[0].score, avatarUI: user[0].avatar_url } }) });



}
module.exports = Battle;