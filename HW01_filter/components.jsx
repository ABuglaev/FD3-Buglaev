//компонент всего блока(весь фильтр)
class Filter extends React.Component {
  constructor(props){
    //я хз зачем, но эта строчка тут надо :)
    super(props);
    //привязка this
    this.handleClick =      this.handleClick.bind(this);
    this.handleStrChanged = this.handleStrChanged.bind(this);
    this.changeArr =        this.changeArr.bind(this);
    //начальное состояние
    this.state = {
      //флаг привязан к чекбоксу
      isSorted: false,
      //строка в инпуте, строки с которой нужно удалить из массива
      strToCut: '',
      //массив для отрисовки, при измении компонент перерисовывается
      //что-то мне подсказывает, что нехорошо хранить данные в состоянии. это только сейчас тут 7 строк/элементов массива... 
      //должен быть способ покрасивше.
      arrToRender: textArr,
    }
  }

  //функция, меняющая состояние флага "isSorted", срабатывает по клику на checkbox.
  handleClick(){
    this.setState( {isSorted: this.state.isSorted ? false : true},
      this.changeArr
    );
  }

  //функция, меняющая состояние строки "strToCut", срабатывает по изменению в инпуте
  handleStrChanged(){
    this.setState( {strToCut: document.getElementById('textInput').value},
      this.changeArr
    );
  }

  //функция, подменяющая массив строк в завимости от состояния компонента
  changeArr(){
    console.log(this); // <-- посмотреть на компонент перед изменением
    console.log('флаг сортировки ->', this.state.isSorted); // <-- посмотреть на флаг
    console.log('строка ->', this.state.strToCut); // <-- посмотреть на строку
    var arr = textArr.map(v => v); // <-- массив для извращений

    if (this.state.isSorted) { arr.sort() };

    if (this.state.strToCut) {
      for (let i=0; i<arr.length; i++) {
        if ( arr[i].indexOf(this.state.strToCut) == -1 ) {arr.splice(i, 1); i--;}
      };
    };

    this.setState( {arrToRender: arr} );
  }

  render(){
    //завел этот массив просто чтоб разметку не засорять
    var nArr = this.state.arrToRender.map((v,i) => <li key={'1stArr'+i}>{v}</li> );
    return (
      <div className='form'>
        <input type='checkbox' className='checkBox' onClick={this.handleClick}  />
        <input type='text' className='input' id='textInput' onChange={this.handleStrChanged} />
        <ul className='output'>
          {nArr}
        </ul>
      </div>
    )
  }
};