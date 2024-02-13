import "./Question.css"
export default function Question({ item, onClick }) {
  return <li className='question btn btn-primary' onClick={onClick}>{item}</li>;
}
