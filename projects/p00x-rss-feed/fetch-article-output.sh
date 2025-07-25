#!/bin/bash

# Function to fetch and display articles from an RSS feed
fetch_rss_articles() {
    local rss_url="$1"
    local output_file="rss_articles.txt"

    # Fetch the RSS feed
    response=$(curl -s "$rss_url")

    # Check if the response is not empty
    if [ -n "$response" ]; then
        # Check if the response is valid XML
        if echo "$response" | xmllint --noout - 2>/dev/null; then
            # Parse and display the articles
            echo "Articles from RSS Feed:" | tee "$output_file"
            echo "" | tee -a "$output_file"
            echo "$response" | xmllint --xpath '//item/title/text()' - | nl -w2 -s'. ' | tee -a "$output_file"
            echo "" | tee -a "$output_file"
            echo "$response" | xmllint --xpath '//item/link/text()' - | nl -w2 -s'. ' | tee -a "$output_file"
        else
            echo "The fetched content is not valid XML." | tee -a "$output_file"
        fi
    else
        echo "Failed to fetch the RSS feed." | tee -a "$output_file"
    fi
}

# Main script execution
read -p "Enter the RSS feed URL: " rss_feed_url
fetch_rss_articles "$rss_feed_url"
