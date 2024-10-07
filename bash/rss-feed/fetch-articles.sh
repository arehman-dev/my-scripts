#!/bin/bash

# Function to fetch and display articles from an RSS feed
fetch_rss_articles() {
    local rss_url="$1"

    # Fetch the RSS feed
    response=$(curl -s "$rss_url")

    # Check if the response is not empty
    if [ -n "$response" ]; then
        # Parse and display the articles
        echo "Articles from RSS Feed:"
        echo "$response" | xmllint --xpath '//item/title/text()' - | nl -w2 -s'. '
        echo ""
        echo "$response" | xmllint --xpath '//item/link/text()' - | nl -w2 -s'. '
    else
        echo "Failed to fetch the RSS feed."
    fi
}

# Main script execution
read -p "Enter the RSS feed URL: " rss_feed_url
fetch_rss_articles "$rss_feed_url"
