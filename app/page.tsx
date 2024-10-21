import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
            Transaction Management System
        </h1>

        <p className="mt-3 text-2xl">
          Manage your transactions efficiently
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="/dashboard" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Dashboard &rarr;</h3>
            <p className="mt-4 text-xl">
              View your account summary and recent transactions.
            </p>
          </Link>

          <Link href="/transactions" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Transactions &rarr;</h3>
            <p className="mt-4 text-xl">
              Manage your credits and debits.
            </p>
          </Link>

          <Link href="/reports" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Reports &rarr;</h3>
            <p className="mt-4 text-xl">
              Generate and view financial reports.
            </p>
          </Link>

          <Link href="/settings" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Settings &rarr;</h3>
            <p className="mt-4 text-xl">
              Manage your account settings.
            </p>
          </Link>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}