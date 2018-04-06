let React = require('React');
let Bootstrap = require('react-bootstrap');
let Grid = Bootstrap.Grid;
let Row = Bootstrap.Row;
let Col = Bootstrap.Col;
let Button = Bootstrap.Button;
let Jumbotron = Bootstrap.Jumbotron;
let Redirect = require('react-router-dom').Redirect;


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.goToBattle = goToBattle.bind(this);
        this.state = ({ redirect: false })
    }
    render() {
        return (
            this.state.redirect ?
                <Redirect to='/battle' />
                :
                <Grid>
                    <Row className="show-grid">
                        <Jumbotron>
                            <h1>Hello, Worior!</h1>
                            <p> Create new Github Battle ? </p>

                            <p>
                                <Button onClick={this.goToBattle} bsStyle="primary">Begin !</Button>
                            </p>
                        </Jumbotron>
                    </Row>
                </Grid>

        )
    }
}
function goToBattle() {

    this.setState({ redirect: true });

}
module.exports = Home;