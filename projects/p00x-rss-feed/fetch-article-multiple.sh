#!/bin/bash

# Function to fetch and display articles from an RSS feed
fetch_rss_articles() {
    local rss_urls=("$@")  # Accept multiple RSS feed URLs
    local output_file="rss_articles.txt"

    # Clear the output file at the start
    > "$output_file"

    # Loop through each RSS feed URL
    for rss_url in "${rss_urls[@]}"; do
        # Fetch the RSS feed
        response=$(curl -s "$rss_url")

        # Check if the response is not empty
        if [ -n "$response" ]; then
            # Check if the response is valid XML
            if echo "$response" | xmllint --noout - 2>/dev/null; then
                echo "Articles from RSS Feed: $rss_url" | tee -a "$output_file"
                echo "" | tee -a "$output_file"

                # Parse and display the articles with embedded links
                titles=($(echo "$response" | xmllint --xpath '//item/title/text()' -))
                links=($(echo "$response" | xmllint --xpath '//item/link/text()' -))

                for i in "${!titles[@]}"; do
                    title="${titles[$i]}"
                    link="${links[$i]}"
                    echo "<a href=\"$link\">$title</a>" | tee -a "$output_file"
                done

                echo "" | tee -a "$output_file"
            else
                echo "The fetched content from $rss_url is not valid XML." | tee -a "$output_file"
            fi
        else
            echo "Failed to fetch the RSS feed from $rss_url." | tee -a "$output_file"
        fi
    done
}

# Main script execution
read -p "Enter the RSS feed URLs (separated by space): " -a rss_feed_urls
fetch_rss_articles "${rss_feed_urls[@]}"
