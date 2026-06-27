import feedparser

databricks_feed = feedparser.parse('https://learn.microsoft.com/en-us/azure/databricks/feed.xml')

print(databricks_feed.entries[1].title)