# PDF Slides Directory

Place your PDF presentation files in this directory.

## File Organization

Recommended naming convention:
```
public/slides/
├── kpg-view-demo.pdf
├── kpg-run-tutorial.pdf
├── uc-formulation-202505.pdf
├── market-simulation-results.pdf
└── README.md (this file)
```

## Usage

These PDFs can be embedded in any `.mdx` documentation file using the `PDFViewer` component:

```mdx
---
title: My Documentation Page
---

import PDFViewer from '@components/PDFViewer.astro';

# Documentation with Embedded Slides

<PDFViewer 
  src="/slides/kpg-view-demo.pdf" 
  title="KPG View Demo"
  height="700px"
/>
```

## Best Practices

1. **File Size**: Keep PDFs under 10MB for better loading performance
2. **Naming**: Use descriptive, URL-friendly names (lowercase, hyphens)
3. **Version**: Include dates in filename for versioned presentations
4. **Organization**: Consider subdirectories for large collections:
   - `/slides/tutorials/`
   - `/slides/research/`
   - `/slides/workshops/`

## Optimization Tips

- Export PDFs with web optimization enabled
- Compress images within PDFs before export
- Consider splitting very long presentations into separate files

