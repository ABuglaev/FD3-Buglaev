var colArr = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'violet'];
var i=0; // реализовано через рекурсию, i будет показывать на какой мы итерации


class DivFrame extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if (colArr[i]) {
      //стиль(цвет границы) для <div> на текущей итерации
      let thisDivStyle = {border: `5px solid ${colArr[i]}`}; 
      i++;
      return (
      //интересно, что надо сделать/дописать, чтоб отрисовывалось как надо, если очень хочется написать так:
      //<DivFrame style={thisStyle} />
        <div style={thisDivStyle} children={<DivFrame />}/>
      );
    } else
    {
      return 'lorem';
    }
  }

}
ReactDOM.render(<DivFrame />, document.getElementById('root'));