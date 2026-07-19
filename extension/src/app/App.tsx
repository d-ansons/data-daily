import { SettingsIcon } from './components/extension/icons'

export default function App() {
  return (
    <div className="w-80 p-4 font-sans">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">Data Brew</h1>
        <SettingsIcon className="w-5 h-5" aria-hidden />
      </div>
      <p className="text-sm text-gray-500">Your daily data briefing</p>
    </div>
  )
}
