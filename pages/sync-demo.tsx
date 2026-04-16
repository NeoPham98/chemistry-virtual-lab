import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/sync-demo.html',
      permanent: false,
    },
  }
}

export default function SyncDemo() {
  return null
}
