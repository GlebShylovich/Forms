import { useState } from 'react'
import posts from './posts.json'
import Post from './Components/Post/Post'
import Form from './Components/Form/Form'
import './App.scss'

function App() {
  const [arr, setArr] = useState(posts);
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [buttonVisible, setButtonVisible] = useState(true);


  function delPost(id) {
    const arrCopy = [...arr]
    const resultArr = arrCopy.filter(item => item.id != id)
    setArr(resultArr)
  }
  const addPost = (name, surname, number, email, adress) => {
    const copyArr = [...arr];
    const obj = { id: Date.now(), name, surname, number, email, adress }
    copyArr.push(obj)
    setArr(copyArr)
    setIsOpenModal(false)
    setButtonVisible(true)
  }

  function openModal() {
    setIsOpenModal(true)
    setButtonVisible(false)
  }

  return <div>
    {isOpenModal &&
      <div className='modal' onClick={(e) => {
        setIsOpenModal(true)
        e.stopPropagation()}}>
    <div className="content-modal">
      <h2>КОНТАКТНАЯ ИНФОРМАЦИЯ</h2>
      <Form func={addPost} />
    </div>
  </div>
}
{
  buttonVisible && (<button className="openModalBtn" onClick={openModal}>
    <span>🡅</span>
    <span>СОЗДАТЬ ПОЛЬЗОВАТЕЛЯ</span>
  </button>)
}

{
  arr.map((item, index) => (
    <Post item={item} key={index} delPost={delPost} />
  ))
}
  </div >;
}

export default App
