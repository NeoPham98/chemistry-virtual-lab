import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/chemical/virtuallab.html',
      permanent: false,
    },
  }
}

export default function Home() {
  return null
}
