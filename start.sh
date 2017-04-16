#!/bin/bash
set -e

echo "Generating Lodash Build..."
../lodash-cli/bin/lodash modularize exports=es -o ./lodash-es
