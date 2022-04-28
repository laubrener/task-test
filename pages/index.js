
import styles from '../styles/main.module.css'
import Layout from '../components/Layout'

export default function Home({data}) {
  return (
    <Layout className={styles.container}>
        <h1 className={styles.title}>
          Welcome to Task Manager
        </h1>
        {
          data.map(({id, title, body}) => (
            <div id={id}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))
        }
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
  
}
