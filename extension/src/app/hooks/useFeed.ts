import { useState, useEffect } from 'react'

export interface FeedEntry {
  title: string
  link: string
  published: string
}

export function useFeed(url: string) {
  const [entries, setEntries] = useState<FeedEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(url)
      .then(res => res.text())
      .then(text => {
        const xml = new DOMParser().parseFromString(text, 'application/xml')
        const items = Array.from(xml.querySelectorAll('item'))
        console.log('items found:', items.length)
        setEntries(items.map(item => ({
        title: item.querySelector('title')?.textContent ?? '',
        link: item.querySelector('link')?.textContent ?? '',
        published: item.querySelector('pubDate')?.textContent ?? ''
        })))
      })
      .catch(() => setError('Failed to load feed'))
      .finally(() => setLoading(false))
  }, [url])

  return { entries, loading, error }
}
