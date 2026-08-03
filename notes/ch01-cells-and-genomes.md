---
title: Ch 1. Cells and Genomes
description: What every cell has in common, and why the tree of life has three branches.
date: 2026-08-03
tags: [mboc, ch1]
---

The opening chapter is doing one job: convincing you that the enormous variety of
life sits on top of a very small set of shared mechanisms. Everything after this
is detail on top of that claim.

## The universal cell

Three properties hold for every cell we know of:

- it stores hereditary information in DNA
- it reads that information out through RNA into protein
- it keeps itself separate from the world with a plasma membrane

Nothing beyond that is universal. A nucleus is not required, and neither is a
cell wall.

The information flow is the part worth internalising early, because the rest of
the book keeps returning to it:

$$\text{DNA} \xrightarrow{\text{transcription}} \text{RNA} \xrightarrow{\text{translation}} \text{protein}$$

What struck me is how much of the machinery is shared rather than merely
analogous. The genetic code is essentially the same in bacteria and in us. That is
not something evolution would converge on independently; it is evidence of common
descent, and it is why you can put a human gene into yeast and have it work.

## Three domains, and how we know

Life splits into Bacteria, Archaea and Eukaryotes. The surprise is Archaea, which
look like bacteria under a microscope but turned out to be a separate lineage
once people started comparing ribosomal RNA sequences ([[woese-1990-three-domains]]).

![The three domains, with Bacteria branching off before Archaea and Eukaryotes separate](assets/img/three-domains.svg)

Why rRNA specifically? It has two properties you need at once:

- it exists in every organism and does the same job everywhere, so the sequences
  are genuinely comparable
- it changes slowly enough that homologous stretches stay alignable over billions
  of years, while still accumulating enough differences to resolve branches

Most molecules fail one of those. A protein that only some organisms have is
useless for a universal tree, and a fast-evolving sequence turns to noise.

The awkward complication is **horizontal gene transfer**. Prokaryotes swap genes
across lineages, so different genes in one genome can honestly have different
ancestries. The tidy branching tree is a better description for eukaryotes than
for bacteria, where a network is closer to the truth.

## Genome size tells you less than you would think

| Organism | Genome (bp) | Protein-coding genes |
|---|---:|---:|
| *E. coli* | 4.6 × 10⁶ | ~4,300 |
| *S. cerevisiae* | 1.2 × 10⁷ | ~6,600 |
| *D. melanogaster* | 1.4 × 10⁸ | ~14,000 |
| Human | 3.2 × 10⁹ | ~20,000 |

We have roughly 20,000 protein-coding genes, only about one and a half times as
many as a fly, and coding sequence is only around 1.5% of the genome. So the
complexity is not in the gene count. It sits in regulation and in how a limited
set of proteins gets reused, which is a theme the book keeps returning to.

The vocabulary here is worth getting right the first time:

- **Homologs** are genes descended from a common ancestral gene.
- **Orthologs** are homologs in different species, separated by speciation.
- **Paralogs** are homologs in the same genome, separated by gene duplication.

Gene duplication followed by divergence is the main way new functions appear.
One copy keeps doing the original job while the other is free to drift.

## Model organisms

The chapter's list of model organisms initially reads like trivia, but the logic
behind each choice is consistent. You pick an organism where the thing you care
about is present, and where experiments are fast and cheap.

- ***E. coli***: fast, and the place most basic molecular biology was worked out.
- ***S. cerevisiae***: the simplest eukaryote that still has the cell cycle we
  care about. The *cdc* mutants named most of the cycle's control genes.
- ***C. elegans***: fixed cell lineage, every one of the 959 somatic cells traced.
  Programmed cell death was worked out here.
- ***D. melanogaster***: where the genes that set up the body plan were found.
- ***A. thaliana***, mouse, zebrafish: plants, mammals, vertebrate development.

## Mitochondria and chloroplasts

Both have their own genomes because both used to be free-living bacteria. The
evidence lines up neatly: a double membrane, division by fission, circular DNA,
and bacteria-like ribosomes. Most of their original genes have since moved to the
nucleus, which is why they cannot live independently now.

## What I want to remember

The single idea I would keep if I had to drop the rest: conservation is the reason
this field is tractable. Because the machinery is shared, work in yeast tells you
something about humans, and a tree built from one molecule tells you about the
whole history. The cards for this chapter lean on that rather than on the
organism lists.
