#!/bin/bash

# Usage: ./convert_to_ts.sh <input.json> <object_name> [output.json.ts]

INPUT="$1"
OBJ_NAME="$2"
OUTPUT="${3:-${INPUT%.json}.json.ts}"

if [[ -z "$INPUT" || -z "$OBJ_NAME" ]]; then
  echo "Usage: $0 <input.json> <object_name> [output.json.ts]"
  exit 1
fi

if ! command -v jq >/dev/null; then
  echo "Error: jq is required."
  exit 1
fi

# Create the file (multi-line pretty JSON recommended for formatting)
{
  echo "export const $OBJ_NAME ="
  jq . "$INPUT"   # Pretty-prints the JSON (multi-line)
  echo ";"
} > "$OUTPUT"

# Automatically format with Prettier
if command -v prettier >/dev/null; then
  prettier --write "$OUTPUT"
  echo "Converted and formatted $OUTPUT with Prettier"
else
  echo "Converted to $OUTPUT (install Prettier to auto-format)"
  echo "Tip: Run 'prettier --write $OUTPUT' manually"
fi