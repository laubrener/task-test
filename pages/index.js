import { useState } from 'react';
import styles from '../styles/main.module.css'
import Layout from '../components/Layout'
import { tasks } from './api/tasks/_tasks';
import connectDB from '../lib/db';
import Task from '../models/Task';

export default function Home({todos}) {

  console.log(todos);
  
  const [input, setInput] = useState({
      title:'',
      complete:''
  });

  function handleChange(e){
    const {value, name} = e.target
    setInput({
      ...input,
      [name]: value
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    postData(input);
    setInput({
      title:'',
      complete:''
    })
  }

  const postData = async (input) => {
    try {
      console.log(input);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSelect(e){
    setInput({
        ...input,
        complete: [...input.complete, e.target.value]
    })
};

  return (
    <Layout className={styles.container}>
        <form className={styles.form} onSubmit={(e) => {handleSubmit(e)}}>
          <div className={styles.column1}>
            <button className={styles.title}>TODO LIST</button>
            {/* <div className={styles.line}></div> */}
              {
                tasks.map((el) => {
                  return (
                    <div key={el.id} className={styles.list}>
                      <ul>
                        <button className={styles.btnTask}>
                          <li>{el.title}</li>
                          <button className={styles.xBtn} type='submit'>X</button>
                        </button>
                        {/* <div className={styles.lineIndex}></div> */}
                      </ul>
                    </div>
                  );
                })
              }
          </div>
          <div className={styles.column2}>
            <div className={styles.input}>
              <input 
                  type="text" 
                  value={input.title}
                  name="title"
                  placeholder="New Todo"
                  onChange={(e) => {handleChange(e)}}  
              />
            </div>
            <div>
              <select className={styles.select} onSubmit={(e) => {handleSelect(e)}}>
                <option>Status (Pending / In progress / Done)</option>
                <option value='false' key='pending'>Pending</option>
                <option value='false' key='inProgress'>In progress</option>
                <option value='true' key='done'>Done</option>
              </select>
            </div>
            <div className={styles.btns}>
              <button type='submit' className={styles.btn}>ADD</button>
              <button type='submit' className={styles.btn}>MODIFY</button>
            </div>
          </div>
        </form>
    </Layout>
  )
}

export async function getServerSideProps(){
  try {
    await connectDB();
    const res = await Task.find({});

    console.log(res);

    const todos = res.map((el) => {
      const todo = el.toObject()
      todo._id = todo._id.toString()
      return todo
    })

    return {
      props: {todos: todos}
    }
  } catch (error) {
    console.log(error);
  }
}

// export async function getStaticProps() {
//   try {
//     const res = await fetch('api\tasks\_tasks');
//     const data = await res.json();
//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//   }
  
// }
