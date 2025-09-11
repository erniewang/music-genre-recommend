#!/bin/bash

# Initialize fnm in this script
eval "$(fnm env --use-on-cd --shell bash)"

# Use the fnm-managed node
exec node "$@"
