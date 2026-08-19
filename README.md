# Beyond Persona Prompting

UCL MSc dissertation source for:

> Beyond Persona Prompting: A Cognitive-Process-Based Framework for ADHD Student Simulation with Large Language Models

Author: Qingqing Liu  
Supervisor: Dr Sahan Bulathwela  
Programme: MSc Artificial Intelligence for Sustainable Development

## Build

Compile `Report.tex` from the project root using the LaTeX toolchain required by the supplied UCL template:

```bash
pdflatex Report.tex
pdflatex Report.tex
```

When references have been added to `references.bib`, run `bibtex Report` between
the two `pdflatex` passes, followed by one additional `pdflatex Report` pass.

The formatting files and UCL visual assets are retained from the supplied thesis template. Thesis content is organised across the numbered `.tex` chapter files.
