# Dissertation Flowchart Style Guide

## Status

- Canonical style version: `1.0`
- Canonical stylesheet: `Figures/Shared/flowchart_style.css`
- Scope: all dissertation workflow, architecture, experimental-design and comparison diagrams
- Primary LaTeX asset: vector PDF
- Preview asset: PNG exported at `4×` the CSS canvas dimensions

The canonical stylesheet is the single source of truth for visual styling. Individual figures may define their canvas size and element coordinates, but should not redefine fonts, colours, border widths, corner radii or arrow styling.

## Visual Tokens

| Element | Canonical value |
|---|---|
| Font family | `-apple-system, system-ui, sans-serif` |
| Node font | `14px`, weight `500`, line height `16px` |
| Phase title | `13px`, weight `500`, line height `16px` |
| Node radius | `8px` |
| Group-panel radius | `12px` |
| Border width | `0.5px` |
| Arrow width | `1.5px` |
| Short horizontal arrow | `16px` |
| Long horizontal arrow | `36px` |
| Arrow-to-boundary clearance | `4px` at both the source and target ends |
| Canvas background | `#FFFFFF` |

## Canonical Colour Roles

| Role | Fill | Strong fill | Border | Text |
|---|---|---|---|---|
| Green process family | `#E1F5EE` | `#9FE1CB` | `#0F6E56` | `#085041` |
| Blue process family | `#E6F1FB` | `#B5D4F4` | `#185FA5` | `#0C447C` |
| Neutral input/output | `#F1EFE8` | N/A | `#5F5E5A` | `#444441` |
| Connectors | N/A | N/A | `#5F5E5A` | N/A |

Use green and blue to distinguish process families or experimental representations. Use neutral nodes for shared inputs, answers, scoring outputs and other representation-independent stages. Use a strong fill only when a state or node requires explicit emphasis.

## Required HTML Structure

Every figure should:

1. use a fixed CSS-pixel canvas;
2. link to the canonical stylesheet;
3. keep figure-specific geometry in the HTML file;
4. use the shared semantic classes for panels, nodes and connectors;
5. provide an English `title` and an accessible `aria-label`;
6. use concise node labels with explicit `<br>` line breaks when needed;
7. avoid shadows, gradients, icons and decorative effects;
8. keep captions and explanatory notes outside the image and in LaTeX.

Example stylesheet reference from a Chapter 3 prototype:

```html
<link rel="stylesheet" href="../../../Shared/flowchart_style.css">
```

## Shared Classes

| Class | Purpose |
|---|---|
| `.canvas` | Fixed figure canvas |
| `.panel` | Rounded group container |
| `.node` | Base process node |
| `.phase-title` | Group or pathway label |
| `.green-panel`, `.green-node`, `.green-strong-node` | Green process family |
| `.blue-panel`, `.blue-node`, `.blue-strong-node` | Blue process family |
| `.neutral-node` | Shared input/output node |
| `.arrow-right`, `.arrow-down` | Directed connectors |
| `.line-h`, `.line-v` | Undirected connector segments |
| `.arrow-short`, `.arrow-long` | Canonical horizontal arrow lengths |

## Layout Rules

- Preserve at least `30px` of external canvas margin where practical.
- Align connected horizontal nodes by their vertical centres.
- Align connected vertical nodes by their horizontal centres.
- Reserve `4px` of clear space between each directed arrow and the source and target boundaries. Arrows must not touch or cross node or panel borders.
- Use the same node dimensions for semantically equivalent objects.
- Increase the canvas rather than compressing labels or reducing font size.
- Keep process panels and undirected connector segments behind nodes. Directed arrows must remain above node backgrounds so that arrowheads are not obscured at node boundaries.
- Do not encode meaning through colour alone; every pathway or condition must have a text label.

## Export Rules

Use the following pipeline:

```text
HTML + canonical CSS
→ vector PDF for LaTeX
→ 4× PNG for preview and inspection
```

LaTeX should include only the exported PDF:

```latex
\includegraphics[width=\textwidth,keepaspectratio]{path/to/flowchart.pdf}
```

Do not compile the HTML or SVG during LaTeX compilation. Re-export a figure only when its HTML source or the canonical stylesheet changes.

## Change Control

Do not modify a visual token for a single figure. A change to fonts, colours, arrows, borders or radii must be made in `flowchart_style.css`, recorded as a new style version and visually checked against existing figures. Figure-specific files may change only content, geometry, canvas dimensions and semantic class assignments.
