import React from 'react';
import { fetchMoviesSaga } from '../actionTypes';
import { selectMovies } from '../selector';
import { connect } from 'react-redux';
import { Image, Row, Table } from 'react-bootstrap';
import { ItemLine } from './itemLine';

const style = {
  height: '100%',
  //overflowY: 'scroll',
  float:'left',
  marginLeft:'-30px',
  marginTop:'10px'
};

class Items extends React.PureComponent {

  constructor(props) {
    super(props);
    this.iPage=0;
  }
  iPage=0;
  componentDidMount() {
    if (this.props.data.length === 0) {
      this.props.fetchMoviesSaga(0);
    }
  }
  componentWillMount() {
    window.addEventListener('scroll', this.onScrollEvent.bind(this))
  }
  routerTo(v) {
    //this.props.history.push({pathname: `/Detail/${v}`,state:{title: v}})
    this.props.history.push(`/Detail/${v}`)
  }
  onScrollEvent=(e)=> {
    //alert(e.srcElement.scrollingElement.scrollTop);
    if(e.srcElement.scrollingElement.scrollTop>800*this.iPage)
    {
    this.iPage+=1;
    //to pagination
    this.props.fetchMoviesSaga(this.iPage);
    }
  }
  render() {
    var list = (data) => {
      var res = [];  
      for(var i = 0; i < data.length; i++) { 

          res.push(
              <ItemLine key={data[i].id} image={data[i].image[0]} OnClickBack={this.routerTo.bind(this,data[i].title)}/>
          );

      }  
      return res  
    }
    return (
      <div style={style}>

            {
                list(this.props.data).map((ele) => {
                  return ele
                })
            }

      </div>
    );
    
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    data: selectMovies(state, ownProps)
  };
};

export const HoCItems = connect(
  mapStateToProps, {
    fetchMoviesSaga
  }
)(Items);