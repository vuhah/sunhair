export class ComponentClickOutside extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    // important
    document.removeEventListener("click", this.handleClick);
  }

  handleClick = () => {
    // do things here
    console.log(clickoutside);
  };

  render() {
    return <div ref={this.wrapperRef}>{this.props.component}</div>;
  }
}
