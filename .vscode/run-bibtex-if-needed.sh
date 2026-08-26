#!/bin/sh

set -eu

document_base="$1"
aux_file="${document_base}.aux"
bbl_file="${document_base}.bbl"

if grep -Fq '\citation' "$aux_file"; then
  exec /Library/TeX/texbin/bibtex "$document_base"
fi

: > "$bbl_file"
