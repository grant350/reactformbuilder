class Container extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="container" style={{background:"red", width:"100%", height:"auto",position:"relative","left":"20px"}}>
          {this.props.children}
      </div>
    );
  }
}
export default Container;