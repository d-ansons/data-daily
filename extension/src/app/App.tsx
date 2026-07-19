import { SettingsIcon } from './components/extension/icons'
import { useFeed } from './hooks/useFeed'

const FEED_URL = 'https://learn.microsoft.com/en-us/azure/databricks/feed.xml'

export default function App() {
  const { entries, loading, error } = useFeed(FEED_URL)

  return (
    <div className="w-80 p-4 font-sans">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-lg font-bold">Data Brew</h1>
        <SettingsIcon className="w-5 h-5" aria-hidden />
      </div>

      {loading && <p className="text-sm text-gray-500">Loading...</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}
      {entries.map((entry, i) => (
        <a
          key={i}
          href={entry.link}
          target="_blank"
          rel="noreferrer"
          className="block mb-2 text-sm hover:underline"
        >
          {entry.title}
        </a>
      ))}
    </div>
  )
}
