# Draft-to-TeX Synchronisation Issues

This file records content-level questions found during synchronisation. They are not silently corrected in the thesis text.

1. **Section 3.4.3 heading numbering:** the Draft labels `Knowledge Encoding Implementation` as `3.4.1`; its parent is Section 3.4.3. The TeX hierarchy therefore renders it as Section 3.4.3.1.
2. **Section 3.5.2.3 table placeholder:** the Draft refers literally to `Table 4.RQ2-3`. This is not yet a LaTeX cross-reference and should be replaced with the final table label after the Results structure is frozen.
3. **Section 3.6.1 cross-reference:** the Draft states that repeated runs and statistical uncertainty are described in Section 3.6.3, but Section 3.6.3 is currently `Ethical Scope and Interpretation`.
4. **Section 3.6.1 cross-reference granularity:** the Draft points to Sections 3.2.2 and 3.5.1 for the PDB formula, model selection, and estimator-sensitivity analysis; the estimator-sensitivity subsection is specifically Section 3.2.2.3.
5. **Section 3.5.3.3 heading markup:** the Draft heading contains malformed bold markup and a trailing space. The TeX heading is normalised to `Evaluation Measures` without changing its wording.
6. **Chapter 5 length:** the current Draft content compiles to approximately three pages, whereas the supervisor feedback recorded elsewhere sets a target of no more than one page for the combined Conclusions and Future Work chapter. The text has not been shortened because the Draft is authoritative for this synchronisation.
7. **Chapter structure:** the Draft integrates the overall discussion into Section 4.4 and combines Conclusions and Future Work as Chapter 5. The legacy `6 Conclusion.tex` and `7 Future Work.tex` files remain in the project for recovery, but `Report.tex` no longer inputs them.
