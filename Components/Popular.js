
var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utiles/api');
var Bootstrap = require('react-bootstrap');
var Grid = Bootstrap.Grid;
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Image = Bootstrap.Image;
var Media = Bootstrap.Media;

function Repo(props) {
  let name = props.repo.owner.login;
  let photoSrc = props.repo.owner.avatar_url;
  let repoLink = props.repo.owner.html_url;
  return (
    <Col  md={3}>
        <Row> 
        <Image className="img-thumbnail" src={photoSrc} circle />
        </Row>
        <Row className="text-cente">
        <Col className="text-cente" md={12}>
        <a className="text-cente" href={repoLink}><span className="text-right"> {name}</span></a>
        </Col>
        </Row>
    </Col>


  )
}
function RowElements(props){
  return(
  <Row className="show-grid">
    {props.repos}
  </Row>
  )

} 
function RepoGrid(props) {

  let stops = [0, 3, 7, 11, 15, 19, 23, 27];
  let myElements = [];
  const myElementsRows = [];
  props.repos.map((myrepo) =>{ 
    myElements.push(<Repo repo={myrepo} />)
    if(myElements.length === 4){
      myElementsRows.push(<RowElements repos ={myElements}/>);
      myElements = [];      
    }

});
  
  return (
    <Grid>
      {
        myElementsRows
        }
        
        
    </Grid>

  )
}

function SelectedLanguage(props) {
  var langs = ['All', 'Java', 'JavaScript', 'C#'];
  return (
    <ul className="langs">
      {langs.map(function (langu) {
        return (
          <li
            style={langu === props.selectedlanga ? { color: '#d0021b' } : null}
            onClick={props.onSelect.bind(null, langu)} key={langu}>
            {langu}
          </li>)
      }
        , this)
      }
    </ul>
  )

}


SelectedLanguage.PropTypes = {
  selectedlanga: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}
class Popular extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedLang: 'All',
      repos: null
    };
    this.changeLang = this.changeLang.bind(this);
  }
  componentDidMount() {
    this.changeLang(this.state.selectedLang);

  }
  changeLang(lang) {

    this.setState({ selectedLang: lang, repos: null });
    api.fetchRepos(lang).then(myrepos => this.setState({ repos: myrepos }));
  }
  render() {
    return (
      <div>
        <SelectedLanguage selectedlanga={this.state.selectedLang} onSelect={this.changeLang} />
        {!this.state.repos ? <div>Loading</div> : <RepoGrid repos={this.state.repos} />}

      </div>)
  }
}
module.exports = Popular;
