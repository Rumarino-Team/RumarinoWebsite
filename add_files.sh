#!/bin/bash

# Add the files in batches of 5
ls public/robosub2025 | head -n 5 | while read -r file; do
  git add "public/robosub2025/$file"
done
