
// исходный массив товаров
var goods = [
  {name: 'Часы01', barcode: '4811645001828', picURL: 'images/1.jpg',  price: 14.8,  amount: 34, description: 'Часы настенные, модель01, диаметр 290мм, стекло минеральное, печать цифр на стекле, полноцветная печать на пластике.'},
  {name: 'Часы02', barcode: '4811645001873', picURL: 'images/2.jpg',  price: 14.8,  amount: 12, description: 'Часы настенные, модель01, диаметр 290мм, стекло минеральное, печать цифр на стекле, полноцветная печать на пластике.'},
  {name: 'Часы03', barcode: '4811645002634', picURL: 'images/3.jpg',  price: 14.8,  amount: 53, description: 'Часы настенные, модель01, диаметр 290мм, стекло минеральное, печать цифр на стекле, полноцветная печать на пластике.'},
  {name: 'Часы04', barcode: '4811645002641', picURL: 'images/4.jpg',  price: 14.8,  amount: 32, description: 'Часы настенные, модель01, диаметр 290мм, стекло минеральное, печать цифр на стекле, полноцветная печать на пластике.'},
  {name: 'Часы05', barcode: '4811645009817', picURL: 'images/5.jpg',  price: 9.89,  amount: 35, description: 'Часы настенные, модель01, диаметр 290мм, стекло минеральное, печать цифр на стекле, полноцветная печать на пластике.'},
  {name: 'Часы06', barcode: '4811645000029', picURL: 'images/6.jpg',  price: 9.89,  amount: 54, description: 'Часы настенные, модель01, диаметр 290мм, стекло минеральное, кольцо пластик.'},
  {name: 'Часы07', barcode: '4811645002993', picURL: 'images/7.jpg',  price: 10.74, amount: 13, description: 'Часы настенные, модель01, диаметр 290мм, стекло минеральное, кольцо пластик.'},
  {name: 'Часы08', barcode: '4811645010424', picURL: 'images/8.jpg',  price: 9.89,  amount: 64, description: 'Часы настенные, модель01, диаметр 290мм, стекло минеральное, кольцо пластик. Печать цифр по кольцу.'},
  {name: 'Часы09', barcode: '4811645004140', picURL: 'images/9.jpg',  price: 10.74, amount: 46, description: 'Часы настенные, модель01, диаметр 290мм, стекло минеральное, кольцо пластик. '},
  {name: 'Часы10', barcode: '4811645008438', picURL: 'images/10.jpg', price: 10.74, amount: 24, description: 'Часы настенные, модель01, диаметр 290мм, стекло минеральное, кольцо пластик. '},
  {name: 'Часы11', barcode: '4811645009923', picURL: 'images/11.jpg', price: 10.74, amount: 43, description: 'Часы настенные, модель01, диаметр 290мм, стекло минеральное, кольцо пластик. '},
  {name: 'Часы12', barcode: '4811645001521', picURL: 'images/12.jpg', price: 16.42, amount: 23, description: 'Часы настенные пластиковые, модель01, диаметр 290мм, стекло минеральное, кольцо пластик-серебро. Засыпка – специи.'},
];

//компонент - строчка в таблице(инфо по одному товару)
class GoodsItem extends React.Component {
  render () {
    return  <tr>
              <td>{this.props.name}</td>
              <td>{this.props.barcode}</td>
              <td><img src={this.props.picURL} /></td>
              <td>{this.props.price}</td>
              <td>{this.props.amount}</td>
              <td>{this.props.description}</td>
            </tr>
  }
};

//компонент - таблица в целом
class Table extends React.Component {
  render () {

    var arr = goods.map( v => 
      <GoodsItem {...v} />
    );

    // for (let i=0; i<arr.length;i++) {
    //   arr[i].key = 'item №' + i;
    // };

    return  <table>
              <thead>
              <tr>
              <td>Название товара</td>
              <td>Штрихкод</td>
              <td>Изображение</td>
              <td>Цена</td>
              <td>Кол-во на складе</td>
              <td>Описание</td>
              </tr>
              </thead>

              <tbody>
              {arr}
              </tbody>

            </table>
  }
};

ReactDOM.render(<Table />, document.getElementById('root'));
