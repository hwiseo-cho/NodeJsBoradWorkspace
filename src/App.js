import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer.js';

const customers = [{
  'id': 1,
  'image':'http://placeimg.com/64/64/1',
  'name':'조휘서',
  'birthday':'980716',
  'gender':'남자',
  'job':'대학생'
},
{
  'id': 2,
  'image':'http://placeimg.com/64/64/2',
  'name':'홍길동',
  'birthday':'930302',
  'gender':'남자',
  'job':'의사'
},
{
  'id': 3,
  'image':'http://placeimg.com/64/64/3',
  'name':'박동구',
  'birthday':'000430',
  'gender':'남자',
  'job':'운동선수'
}]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              id = {c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
            />
          );
        })
      }
    </div>
  );
}

export default App;
