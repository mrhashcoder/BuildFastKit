curl --request POST \
  --url https://api.perplexity.ai/chat/completions \
  --header 'Authorization: Bearer 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' \
  --header 'Content-Type: application/json' \
  --data '{
  "model": "sonar-pro",
  "messages": [
    {"role": "user", "content": "Summarize the latest research papers on climate change."}
  ],
  "max_tokens": 300
}'