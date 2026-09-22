---
title: Ch 4. DNA, Chromosomes, and Genomes
description: Structure of DNA, how the genome is organised and packaged, the histone code, and what ENCODE did with it.
date: 2026-08-09
tags: [mboc, ch4]
---

> **Session 7** of the *Molecular Biology of the Cell* course in the **Molecular Medicine master's at Erasmus MC**, given by **Raymond Poot**.
>
> The exam asks about what was covered in the **lectures**, not the chapter as a whole, so this summary follows the slides.

The lecture announces seven topics on its second slide, and works through the first six in order:

1. Structure of DNA
2. Organisation of our genome
3. Packaging of DNA into nucleosomes, chromatin
4. Histone code
5. How does chromatin function in regulating gene expression
6. ENCODE project; what is it and what can we learn from it
7. Chromatin modifiers in cognition

The seventh is announced but never reached: the deck ends on the GWAS slide, so there is nothing to revise for it. Everything else on the list gets slides, and the second half of the lecture is really one long argument. Chromatin is not packing material. It is an addressing system, it is what makes three hundred cell types out of one genome, and it is where most disease-associated variation turns out to live.

---

# The structure of DNA

## The 1953 model, and the evidence behind it

The lecture opens where the field does: in 1953 **Watson and Crick** proposed a model for DNA that was **double-stranded, helical, complementary and anti-parallel**. Those four words are the whole model, and each of them is a claim that had to be paid for with evidence.

![The 1953 slide, with Watson and Crick at their model, Franklin's X-ray diffraction photograph of DNA, and portraits of Watson, Crick and Franklin](assets/img/slide-7-03.png)

The X-ray photograph on that slide is the payment. **Rosalind Franklin's** diffraction data is what said *helix*, and gave the dimensions the model had to fit. The slide puts her portrait beside theirs without further comment.

## Two chains of nucleotides, one backbone

A nucleotide is a **sugar-phosphate** unit plus a **base**. Link the units through their phosphates and you get a strand with chemical polarity: a **5' end** and a **3' end**.

![The building blocks of DNA, a single strand, a double-stranded molecule with hydrogen-bonded base pairs, and the same molecule wound into a double helix](assets/img/fig-4-03.png)

The bond doing the linking is the **phosphodiester bond**, joining the 5' carbon of one sugar to the 3' carbon of the next through a phosphate. The numbering of the sugar carbons, 1' to 5', is what the whole directional vocabulary of molecular biology rests on.

![A phosphodiester bond joining the 5′ carbon of one sugar to the 3′ carbon of the next, with the 5′ end of the chain at the top and the 3′ end at the bottom](assets/img/fig-4-04.png)

The two strands run **anti-parallel**: 5' to 3' on one, 3' to 5' on the other. The sugar-phosphate backbones sit on the outside, negatively charged, and the bases point inward.

## What holds the two strands together

Two things, and it is worth keeping them apart because they act along different axes.

**Hydrogen bonds, across the helix.** A pairs with T through **two** hydrogen bonds, G pairs with C through **three**. Pairing is always a **purine** (A or G, two fused rings) with a **pyrimidine** (C or T, one ring), which is why every base pair is the same width and the helix has a constant diameter of **2 nm**.

![Hydrogen bonds forming between A and T and between G and C, and four base pairs viewed from the side of the helix lying perpendicular to its axis](assets/img/fig-4-05.png)

**Base stacking, along the helix.** Successive base pairs lie flat, parallel, **0.34 nm** apart, and the overlap of their aromatic ring systems is itself stabilising. Stacking is not a minor correction: it contributes as much to duplex stability as the hydrogen bonding does, and it is the reason a single strand is floppy while a duplex is a stiff rod.

**GC-rich DNA is harder to melt than AT-rich DNA.** Three hydrogen bonds instead of two is the usual explanation and it is part of the answer, but the lecturer's point was that stacking contributes too.

> **Correction to the rough note.** The note gives "more rings" as the reason GC stacks better. That cannot be it: every base pair, GC or AT, is one purine plus one pyrimidine, so every base pair has the same three rings. Stacking energy differs because it depends on the **electronic character of the particular pair of stacked bases**, that is, on the dinucleotide step, and steps between G and C stack more favourably than steps between A and T. Ring count is equal; polarisability and overlap are not.

Not on the slides, but stated in the lecture: pulling the two strands apart with heat alone takes roughly **70 to 80 °C**. The exact figure depends on sequence and on salt, so treat it as an order of magnitude rather than a number to recall: the point is that the duplex is a genuinely stable structure at body temperature and needs enzymes, not thermal energy, to open.

## The grooves

Winding two backbones around a common axis leaves two unequal gaps: a **major groove** and a **minor groove**.

![Space-filling model of the double helix showing the major and minor grooves and a 2 nm scale bar](assets/img/fig-4-06.png)

This matters later. A protein can read the sequence of a duplex **without opening it**, because the edges of the base pairs present a different pattern of hydrogen-bond donors and acceptors to each groove, and the major groove carries more information than the minor one. Sequence-specific DNA binding is mostly major-groove binding.

---

# The organisation of our genome

## DNA is enclosed in a cell nucleus

In eukaryotes the genome sits behind a double membrane, punctured by **nuclear pores**, continuous with the ER, and lined on the inside by the **nuclear lamina**.

![Electron micrograph of a fibroblast nucleus and a schematic showing the double membrane, nuclear pores, continuity with the endoplasmic reticulum, the nuclear lamina and dark-staining heterochromatin](assets/img/fig-4-10.png)

In the electron micrograph, **dark, electron-dense material is heterochromatin** and the **lighter regions are euchromatin**. Euchromatin is the more accessible form and is where transcription happens. Heterochromatin is concentrated at the nuclear periphery, against the lamina, and around the nucleolus.

> **Correction to the rough note.** The note reads "dark patches are hetero chromatin (nucleulus)". The dark/heterochromatin half is right, but the **nucleolus is not heterochromatin**. It is a separate structure, a distinct dense body where ribosomal RNA is transcribed and ribosomes are assembled, and it is labelled separately on the slide. It stains dark for its own reasons: it is packed with rRNA and protein.

## Chromosomes contain long strings of genes

The lecture zooms in on human chromosome 22 in three steps of tenfold each: the whole mitotic chromosome, then a stretch of arm carrying about forty genes, then a stretch carrying four, then one gene.

![Chromosome 22 expanded tenfold three times, from the whole chromosome to a stretch with 40 genes, to four genes, to one gene showing its exons, introns and regulatory sequences](assets/img/fig-4-15.png)

The vocabulary the figure sets up is worth being exact about:

| Term | What it means |
|---|---|
| **Genic** | DNA within a gene, the whole transcription unit including introns |
| **Intergenic** | DNA between genes |
| **Exon** | The part of a gene retained in the mature RNA |
| **Intron** | The part spliced out |
| **Regulatory DNA sequences** | Sequence that controls when and where the gene is expressed, often well outside the transcription unit |

> **Correction to the rough note.** The note has "genic vs intragenic", which should be **genic vs intergenic**: within genes against between them. "Intragenic" would mean within a gene, which is the same thing as genic and not a contrast.

The final panel is the point of the whole figure: a gene of 34,000 nucleotide pairs, most of which is **intron**, with a handful of short exons and a block of regulatory sequence upstream. Coding sequence is a small minority of a gene, and genes are a small minority of the genome.

## The karyotype

Painting each chromosome with a differently coloured probe set gives the human karyotype directly.

![Human chromosomes painted a different colour each, shown as they spilled from the lysed cell and then lined up in numerical order as a karyotype](assets/img/fig-4-11.png)

Not on the slides, but stated in the lecture: the **numbering is by size**, largest first, which is why chromosome 1 is the biggest and 21 and 22 are the smallest. It is a historical convention from the days when size and banding were all you had, not a statement about content.

## Some vital statistics for the human genome

The lecturer showed Table 4–1 and said explicitly not to learn it by heart, but to look at what its shape says. Reproduced as shown:

| Protein-coding gene features | |
|---|---|
| Median size of protein produced | 430 amino acids |
| Smallest number of exons per gene | 1 (1068 of these unspliced genes) |
| Largest number of exons per gene | 363 |
| Median number of exons per gene | 9.0 |
| Median exon size | 131 nucleotide pairs |
| Median intron size | 1747 nucleotide pairs |
| Number of noncoding RNA genes | About 5000, with 4849 annotated |
| Number of pseudogenes | More than 20,000 |
| Percentage of protein-coding DNA sequence (in exons) | 1% |
| Percentage of DNA in other highly conserved sequences | 3.5% |
| Percentage of DNA transcribed (in protein-coding plus annotated noncoding RNA genes) | 45% |
| Percentage of DNA in high-copy-number repetitive elements | Approximately 50% |

What the table is actually saying, in four lines:

- **Introns dwarf exons.** A median intron is more than ten times a median exon, and a median gene has nine exons. Most of a gene is intron.
- **Protein-coding sequence is 1% of the genome.** Another 3.5% is conserved without coding for protein, which is a first hint that a lot of function is regulatory.
- **45% of the genome is transcribed** but only 1% of it ends up as protein-coding exon. Transcription is far more widespread than protein production.
- **Half the genome is repetitive.** The genome is not a tidy list of genes.

> **Correction to the rough note.** The note says "3% is exon". The table gives **1%** for protein-coding exon sequence; the 3.5% figure is the *other* highly conserved DNA, which is a separate row and mostly not exonic.

---

# Packaging DNA into nucleosomes and chromatin

## Beads on a string

Decondensed chromatin, seen by electron microscopy, is a string of particles: the **beads-on-a-string** form. The beads are **nucleosomes** and the string between them is **linker DNA**.

![Chromatin isolated from an interphase nucleus appearing as a thick thread, and the same chromatin experimentally decondensed into beads on a string](assets/img/fig-4-21.png)

## The nucleosome core particle

Digest the linker DNA with a nuclease and the beads come free as **nucleosome core particles**, 11 nm across. Raise the salt and each one falls apart into its two components.

![Chromatin digested by nuclease to release nucleosome core particles, which dissociate at high salt into a histone octamer and 147 nucleotide pairs of DNA, and further into H2A, H2B, H3 and H4](assets/img/fig-4-22.png)

- A **histone octamer**, built from four kinds of core histone: **H2A, H2B, H3 and H4**. They are not eight different proteins but four types in two copies each, assembled as two **H2A-H2B dimers** flanking one **(H3-H4)₂ tetramer**.
- **147 nucleotide pairs** of DNA, wrapped around the outside of the octamer in about **1.7 turns**.

The repeating unit including the linker is roughly **200 nucleotide pairs**, so a little over a quarter of nucleosomal DNA is linker.

> **Note on the rough note.** "Two winds of DNA" is close enough as a mental picture, but the wrap is **1.7 turns**, not two, and the 147 figure is the core particle only, not the whole repeat.

## The histone fold, and the tails

All four core histones share the same structural core, the **histone fold**, and each carries an unstructured **N-terminal tail** that protrudes from the assembled particle.

![The four core histones each drawn with an N-terminal tail and a histone fold, the fold itself, the H2A-H2B handshake dimer, and the assembled octamer with all eight tails protruding](assets/img/fig-4-24.png)

The folds do the packing: two of them interlock in a handshake to make a dimer, and the dimers assemble into the octamer. The **eight tails stick out** through and around the DNA gyres, going nowhere structurally. That is exactly what makes them useful: they are the part of the nucleosome that other proteins can reach, and they are where the histone code is written.

**Why histones bind DNA at all.** DNA is strongly **negatively charged** along its backbone. Histones are unusually rich in **lysine and arginine** and so carry a large **positive** charge. The interaction is largely electrostatic, with the histones neutralising the backbone so that DNA can be bent tightly without the two turns of the wrap repelling each other. This is also why the nucleosome is so stable that shifting one needs a motor protein, and why **acetylating a lysine**, which removes its positive charge, loosens the grip.

## Histone H1, and what it does

H1 is the answer to the question left in the rough note. It is **not** part of the octamer: it is the **linker histone**, one per nucleosome, and it binds where the DNA **enters and leaves** the core particle.

![Histone H1 bound at the point where DNA enters and leaves the nucleosome, constraining the exit path of the DNA](assets/img/fig-4-30.png)

By clamping the entry and exit points it fixes the angle at which DNA leaves the bead, seals an extra stretch of linker against the core, and in doing so lets neighbouring nucleosomes pack against each other. It is the component the slides add at exactly the step from beads-on-a-string to the **30 nm fibre**.

## From 2 nm to 1400 nm

The packing hierarchy, with the lecturer's two annotations on it:

![The levels of chromatin packing from the 2 nm double helix through beads-on-a-string and the 30 nm fibre to the 1400 nm mitotic chromosome, annotated with the point at which histone H1 is added and a bracket marking the higher orders as structurally unknown](assets/img/slide-7-15.png)

| Level | Width |
|---|---|
| Short region of DNA double helix | 2 nm |
| "Beads-on-a-string" form of chromatin | 11 nm |
| Chromatin fibre of associated nucleosomes (**+ histone H1**) | 30 nm |
| Chromatin fibre folded into loops | 700 nm |
| Entire mitotic chromosome | 1400 nm |

Net result: each DNA molecule ends up in a mitotic chromosome about **10,000-fold shorter** than its fully extended length.

The bracket the lecturer drew down the right-hand side is the honest part of the slide. Everything from the **30 nm fibre upward** is marked **"exact structure unknown"**. The beads-on-a-string level is solid, established structure; the higher orders are models. This is worth remembering precisely because the textbook picture looks equally confident at every level.

---

# The regulation of chromatin structure (1): ATP-dependent remodellers and histone chaperones

Two problems follow from everything above. The nucleosome is stable, and DNA inside one is not accessible. So something has to move nucleosomes out of the way, and the cell pays ATP for it in **both** directions: opening chromatin costs energy and closing it costs energy too, because what is being moved is a tightly bound protein-DNA complex either way.

## What a remodeller can do

![A remodeling complex catalyzing exchange of H2A-H2B dimers for variant dimers, and complete removal of the histone octamer with the help of a histone chaperone](assets/img/fig-4-27.png)

The slide shows an **ATP-dependent chromatin-remodelling complex** with two outputs, and introduces the **histone chaperone** that handles free histones so they do not aggregate or land somewhere unwanted:

- **Exchange of H2A-H2B dimers** for **variant** dimers, which changes the properties of a nucleosome without removing it.
- **Exchange or removal of the whole nucleosome core**, leaving DNA lacking a nucleosome.

The lecturer's practical example: **promoters usually sit in a nucleosome-free region**. Clearing that region is what makes a promoter available to the transcription machinery in the first place, and reversing it is a way of shutting the gene down.

## How the motor does it

![The lecturer's composite of remodeller mechanism: anchoring, DNA uncoiling, bulge formation and bulge migration by a translocase with a DNA-binding domain, and the two outcomes of eviction with insertion elsewhere or sliding along the DNA](assets/img/slide-7-17.png)

The mechanism is a **DNA translocase** anchored on the nucleosome: it grips the histone core at one point and pulls DNA in from one side, which cannot happen smoothly, so the DNA buckles into a **bulge** or loop on the surface of the octamer. Propagating that bulge around the particle and out the other side moves the DNA relative to the histones without ever letting go of it. Anchoring, uncoiling, bulge formation, bulge migration.

![A remodeling complex with its motor subunit bound to the nucleosome core and to the DNA, using ATP hydrolysis to slide the DNA relative to the core, and the structure of the yeast SWR1 complex](assets/img/fig-4-26.png)

Two outcomes, on the right of the slide:

- **Sliding.** The nucleosome ends up at a different position on the same DNA. Regulatory sequence that was wrapped becomes exposed, and something else gets covered.
- **Eviction, with insertion elsewhere.** The octamer comes off altogether, and may be deposited on another stretch of DNA.

Different remodellers act on different parts of the genome. They are not one enzyme with one job but a family, targeted by what they can bind.

## Chd7: a remodeller with a domain for each job

![The domain structure of Chd7, a chromodomain pair, an SNF2 helicase domain, a SANT domain, a BRK domain and an LZD domain along one polypeptide, with the protein's size and the function of three of the domains listed](assets/img/slide-7-19.png)

**Chromodomain Helicase DNA binding protein 7** is the worked example, and the reason for choosing it is that a single very large polypeptide of about 3000 amino acids carries one domain per sub-task:

| Domain | What the slide says it does |
|---|---|
| **Chromo** (two of them) | Binds **H3K4me**, the mark of an active promoter |
| **SNF2 helicase** | The **motor**: the ATP-dependent activity that moves nucleosomes |
| **SANT** | Binds **histones** |
| **BRK** | Named on the slide, no function given |
| **LZD** | Named on the slide, no function given |

The architecture is the lesson. **Reading** where to act (chromodomains, on a histone mark), **holding on** to the substrate (SANT), and **doing the work** (SNF2) are separate modules on one chain. Targeting and catalysis are decoupled, which is how the same chemistry gets aimed at different parts of the genome by different family members.

## CHD7 and CHARGE syndrome

Mutations in **CHD7** cause **CHARGE syndrome**, an acronym of the features that define it:

| Letter | Feature |
|---|---|
| **C** | **C**oloboma, a gap in the structures of the eye |
| **H** | **H**eart malformation |
| **A** | **A**tresias of trachea and esophagus |
| **R** | **R**etardation of growth |
| **G** | **G**enital anomalies |
| **E** | **E**ar anomalies |

Prevalence is roughly 1 in 10,000 births.

Two things make this the clinically interesting end of the lecture. The mutations are **heterozygous**: one working copy of CHD7 is not enough, so a single mutant allele produces the syndrome. And the affected structures, eye, heart, trachea and esophagus, genitals, ears, have nothing obviously in common except that each depends on a **particular developmental step at a particular time**. A chromatin remodeller is not required for cells to live. It is required for the right genes to come on in the right cells during development, and it is exactly those windows that fail.

---

# The regulation of chromatin structure (2): the histone code

## Which residues are modified, and with what

The tails are covalently modified, reversibly, at many sites. The chemistry is concentrated on a few residues.

![Lysine acetylation and the mono-, di- and trimethylated forms of lysine drawn as competing reactions, and serine phosphorylation](assets/img/fig-4-34.png)

**Lysine** is the favourite, and the reason is its side chain: a long arm ending in a **positively charged amino group**, sticking out into solution where an enzyme can reach it.

- **Acetylation** puts an acetyl group on that amino group and **neutralises the positive charge**. Less grip on the negatively charged DNA backbone, looser chromatin.
- **Methylation** comes in **three flavours**: **mono-, di- and trimethyl**. Methylation does *not* neutralise the charge. It changes the **shape and hydrophobicity** of the surface that a reader protein binds, which is why methylation can mean activation at one position and silencing at another.

The two are drawn as **competing reactions** on the same lysine: a given lysine can be acetylated or methylated, not both, so writing one mark excludes the other. Each direction has its own enzyme, and the lecture put the total number of histone-modifying enzymes in the human genome in the high hundreds.

**Serine** is the other common target, through **phosphorylation** to phosphoserine, which adds negative charge.

![The slide combining lysine modification states with a 2023 Nature paper showing that a single lysine can carry both an acetyl and a methyl group, and the full series of lysine states from unmodified through Kme1, Kme2, Kme3, Kac, Kacme and Kpr](assets/img/slide-7-24.png)

The lecturer then complicated his own slide with a recent result: **acetyl-methyllysine**, a lysine carrying an acetyl *and* a methyl group at once, marks chromatin at **active transcription start sites**. So "competing reactions" is the clean textbook version, and the real chemistry of a tail residue is richer than a binary switch.

## Where the marks sit

![The nucleosome with the first 30 amino acids of each of its eight N-terminal tails highlighted, and the sequences of the four core histone tails annotated with acetylation, methylation, phosphorylation and ubiquitylation sites](assets/img/fig-4-35.png)

Every core histone has a modifiable N-terminal tail, and the marks are dense along all four. A couple of sites also sit in the **globular domain** rather than the tail. There is no point memorising positions; what the figure is for is the scale of the thing. Dozens of sites, four types of modification, on eight tails per nucleosome, gives a combinatorial space far larger than a simple on/off switch, and that is the argument for calling it a **code**.

## What the marks mean

A small number of combinations have meanings that are actually understood:

![The lecturer's table of histone modification states against their meaning, running from H3K9 methylation through H3K4me with H3K9ac and H3S10ph with H3K14ac to H3K27 methylation](assets/img/slide-7-26.png)

| Modification state | "Meaning" |
|---|---|
| **H3K9me** | Heterochromatin formation, gene silencing (as **H3K9me3**) |
| **H3K4me** together with **H3K9ac** | Gene expression. **H3K4me3 = active promoter** |
| **H3S10 phosphorylation** with **H3K14ac** | Gene expression |
| **H3K27me** | Silencing of **Hox genes**, **X chromosome inactivation** |

The one to hold on to is that **methylation of the same histone, H3, means opposite things at different positions**: K4 means on, K9 and K27 mean off. This is the cleanest evidence that the mark is not chemistry acting directly on the chromatin. If methyl groups silenced genes by their chemistry, position would not matter. The mark is a **binding site**, and what it means is decided by **which reader protein recognises it**.

The book's Table 4–2 puts abundances next to the same marks, and the abundances are the interesting column:

| Histone modification | Association with chromatin type | Gene expression | Abundance (%) |
|---|---|---|---|
| H3K4me3 | Highly accessible, open chromatin | ON | 1 |
| H3K9ac | Highly accessible, open chromatin | ON | 1 |
| H3K9me3 | Heterochromatin (either constitutive or facultative) | OFF | 25 |
| H3K27me3 | Facultative heterochromatin | OFF | 13 |

The activating marks are **rare and sharply localised**, at the 1% level: an active promoter is a pinpoint. The silencing marks cover **tens of percent** of the genome in broad domains. The default state of the genome is off, and being on is the exception that has to be specified.

> The slide prints this row as "H4K4me3". That is a slip for **H3K4me3**: H4's tail begins SGRGK, so it has no lysine 4, and the rest of the lecture, including the slide before it, says H3K4me3.

## Readers and writers

![A reader complex built from several modules, each recognizing a different histone mark, binding only where the right combination is present and attracting further protein complexes](assets/img/fig-4-38.png)

A **reader complex** is a **scaffold protein** carrying several **protein modules**, each binding one specific modification on the nucleosome. Because the modules are held on one scaffold, the complex binds well only where **the right combination of marks is present at once**. That is how a handful of chemically simple marks specifies far more than a handful of states: the readout is combinatorial even when the marks are not.

Once bound, the reader **attracts other components**: complexes with catalytic activities and further binding sites. The outcome is gene expression, gene silencing, or some other function, depending on what got recruited.

## Spreading

![The slide showing a gene regulatory protein recruiting a histone modifying enzyme, the mark it writes being bound by a code-reader protein, and reader and writer together forming a complex that marks the next nucleosome along](assets/img/slide-7-29.png)

The sequence is a chain reaction with four steps:

1. A **gene regulatory protein**, a transcription factor, binds a specific **DNA sequence**. This is the only step with sequence specificity in it, and it is what decides *where*.
2. It recruits a **histone-modifying enzyme**, the **writer**, which marks a neighbouring nucleosome.
3. A **code-reader protein** binds that mark.
4. Reader and writer associate into a **reader-writer complex**, which now binds an existing mark and writes the same mark on the next nucleosome along.

From step 4 onward the sequence is self-propagating and no longer needs the transcription factor: the product of the reaction is the thing that recruits the next round of the reaction. The complex moves hand over hand along the chromosome, and the mark spreads.

![The slide showing the reader-writer complex joined by an ATP-dependent chromatin remodelling complex, with each round of ATP hydrolysis producing a spreading wave of chromatin condensation](assets/img/slide-7-30.png)

The variation on the same slide adds the machine from the first half of the lecture. A reader-writer complex can also recruit an **ATP-dependent chromatin remodelling complex**, which repositions each nucleosome as it is marked. Now the marks and the physical compaction spread together, as a **spreading wave of chromatin condensation**.

## Barriers stop the spread

Which raises the question the rough note asks: **how does it know when to stop?** It does not. Nothing in the mechanism is self-limiting, so the stop signal has to come from the DNA.

![A reader-writer complex recruited to a site, marking neighbouring nucleosomes and moving hand over hand until it reaches a barrier DNA sequence, and a reader-eraser complex removing the marks again](assets/img/fig-4-39.png)

**Barrier DNA sequences** recruit **barrier proteins** that block the spread, and this is what defines the **boundary between a heterochromatin domain and the euchromatin next to it**. Without them, one nucleation site would eventually silence a whole chromosome.

![Three barrier mechanisms: tethering chromatin to a nuclear pore complex, a barrier protein bound tightly to a group of nucleosomes, and a barrier that recruits enzymes to erase the marks heterochromatin needs](assets/img/fig-4-41.png)

The slide gives three mechanisms, which are worth keeping separate because they are physically different solutions to one problem:

1. **Tethering.** The barrier protein anchors the chromatin to a **nuclear pore complex**, so the fibre is physically held and the spreading complex cannot continue past it.
2. **Steric blocking.** A barrier protein binds a group of nucleosomes tightly enough that the reader-writer complex cannot get at them.
3. **Erasing.** The barrier recruits enzymes that **remove** the marks heterochromatin needs, so the wave is chemically reversed as fast as it arrives.

The third is the general principle for the whole system: every writer has an **eraser**, so the state of chromatin at any point is a balance of two opposing activities rather than a permanent record.

---

# What is this complex organisation of chromatin good for?

## One genome, three hundred cell types

![The slide asking what the complex organisation of chromatin is for, with a neuron, a cardiomyocyte and a dermal fibroblast drawn from one human body](assets/img/slide-7-34.png)

A human contains around **300 different cell types**, all carrying **the same DNA**. A neuron, a cardiomyocyte and a dermal fibroblast have identical genomes and almost nothing else in common. So the difference between them is not in the sequence; it is in **which parts of that sequence are available to be read**, and that is what a cell type's chromatin organisation is.

This is also the reason a eukaryote needs so much more regulatory machinery than a bacterium. A much larger genome, most of it not coding, expressed differently in hundreds of stable cell states, needs a mechanism that can address regions rather than genes, keep a state through cell division, and be set differently in each lineage. Chromatin is that mechanism.

## ENCODE: the Encyclopaedia of DNA Elements

The slides pose the next question, **how is chromatin marked in different cells?**, and answer it with a survey rather than a mechanism.

![The ENCODE slide listing the assays used to map functional elements in the human genome across 147 cell types and tissues](assets/img/slide-7-35.png)

**ENCODE** is an international consortium formed to **map the functional elements and regions of the human genome**, with the headline publication in *Nature* in September 2012. What it actually did:

| Assay | What it maps |
|---|---|
| RNA-seq | Transcribed genes |
| **ChIP-seq** | **Histone modifications** |
| ChIP-seq | Transcription factor binding sites |
| DNase-seq | Accessible regions |
| DNase-seq | Transcription factor binding sites, from footprints inside accessible regions |
| 5C | Chromatin 3D interactions |

Across **147 different human cell types and tissues**. The conclusion the lecturer put on the slide is the one that matters:

> The map of functional elements is a **"signature" of the identity of a cell**.

That is the payoff of the whole second half of the lecture. Cell identity is legible in chromatin. You can tell what a cell is from where its marks are, without looking at a single gene product.

## Chromatin states annotate the genome

![The Ernst and Kellis chromatin state table, with fifteen states defined by the frequency of nine chromatin marks and CTCF, each annotated as a candidate promoter, enhancer, insulator, transcribed, repressed or repetitive region](assets/img/slide-7-36.png)

The question on that slide: **can we assign function to parts of our genome by the histone modifications that are present?** The method is to feed the marks to a model that finds recurring **combinations**, and then ask what genomic features each combination sits on. The answer is yes, and the fifteen recovered states line up with recognisable elements:

| State group | Candidate annotation |
|---|---|
| Promoters | Active, weak, and inactive/poised promoter |
| Enhancers | Strong enhancer, weak/poised enhancer |
| **Insulator** | Defined almost entirely by **CTCF** |
| Transcribed | Transcriptional transition, elongation, weakly transcribed |
| Repressed | **Polycomb repressed**, heterochromatin with low signal |
| Repetitive | Repetitive and copy-number-variable regions |

Two readings are worth taking away. First, the **active promoter** state is the one enriched at transcription start sites and is defined by **H3K4me3** plus **H3K4me2** plus **H3K9ac**, exactly the combination the histone code slide gave. Second, and this is the genuinely new information, **promoters and enhancers are distinguished by which methylation state of H3K4 they carry**: promoters are **H3K4me3**-high, enhancers are **H3K4me1**-high and me3-low. The number of methyl groups on one lysine is enough to tell two classes of regulatory element apart.

The **Polycomb repressed** state is the H3K27me3 state from the earlier slide, now recovered from data without anyone looking for it.

## Expressed and repressed genes carry different regulators

![Binding profiles of about twenty-five chromatin regulators across an expressed gene on chromosome 1 and a repressed gene on chromosome 17, sharp peaks at the promoter of the expressed gene and broad domains across the repressed one](assets/img/slide-7-37.png)

The same approach applied to the **proteins** rather than the marks. Profiling a panel of chromatin regulators across an **expressed** gene and a **repressed** gene gives two distinct shapes:

- At the **expressed** gene, binding is **sharp and focused at the promoter**. A narrow peak, in the same place, for many different regulators.
- At the **repressed** gene, binding is a **broad domain spread across the whole gene**, dominated by Polycomb components and other silencing factors.

The counterintuitive detail, and the reason the figure is worth reading rather than summarising: **histone deacetylases peak at the active promoter**, not at the silent gene. Activating and repressing activities are both present at an active gene. What distinguishes the two states is not the presence of one class of enzyme and the absence of the other; it is the **balance** between opposed activities at a sharply defined point, which is the same conclusion the writers and erasers gave earlier, now visible genome-wide.

## GWAS, and where disease-associated variants actually sit

![DNase I hypersensitivity at four disease-associated SNPs across a panel of cell types, with the signal appearing only in the tissue relevant to each disease](assets/img/slide-7-38.png)

**Genome-wide association studies** look for correlations between common sequence variants, **SNPs**, and a disease or trait. Two problems follow, both listed on the slide:

1. **Which SNP is the real one?** Nearby variants are inherited together, so an association implicates a whole block of co-segregating SNPs rather than one.
2. **In which tissue does the SNP act?** A variant that does nothing in most cells may be doing everything in one.

And a third, which is what makes chromatin the tool for the job: **disease-associated variants are usually outside coding regions**, so there is no protein change to inspect and no obvious mechanism.

Mapping accessible chromatin across many cell types answers all three at once. Each of the four examples on the slide is a SNP sitting in a **DNase-hypersensitive**, and therefore **active regulatory**, region in **one specific cell type**, and that cell type is the one the disease would predict:

| Disease or trait | Cell type where the region is accessible |
|---|---|
| Multiple sclerosis (autoimmune) | Immune cells |
| QRS duration (cardiovascular) | Fetal heart |
| Prostate cancer | A prostate cancer cell line |
| ADHD (neurological) | Fetal brain |

The summary line the lecturer put across the slide:

> **Active regulatory regions span 2% of the genome and contain 70% of disease-associated SNPs.**

That single sentence is the case for the whole lecture. Most inherited risk of common disease is not in the 1% of the genome that codes for protein. It is in the small fraction that regulates, which means it is only interpretable once you know **which chromatin is active in which cell type**, which is what ENCODE built.

---

# Beyond the lecture: how chromatin gets marked differently in different cells

> This section is **not from the slides** and is **not examinable**. The lecture asks the question, on the ENCODE slide, and then answers a different one: ENCODE maps what the marks *are* in each cell type, not how they got there. This is the missing half, from the book.

The short answer is that **DNA sequence is still the addressing system**, acting through transcription factors, and chromatin is the memory.

**Establishing a pattern.** Everything in the reader-writer mechanism is sequence-blind except its first step: a **gene regulatory protein binding a specific DNA sequence**. Which regulatory proteins a cell has is decided by its history and by the signals it receives, and those proteins are what nucleate marks at particular loci. Some of them, the **pioneer factors**, can bind their sequence even when it is wrapped in a nucleosome, which is how a locus that is currently closed can be opened at all. So the same genome gives different chromatin in a neuron and a fibroblast because the two cells contain different transcription factors, which nucleate writers at different places, and the spreading and barrier machinery does the rest.

**Maintaining it through division.** A pattern that had to be re-established from scratch every cell cycle would not be a stable cell identity. It does not have to be.

![Modified nucleosomes in heterochromatin being split between the two daughter helices at chromosome duplication, reader-writer complexes marking the new unmarked nucleosomes, and heterochromatin-specific proteins reassembling on both daughters](assets/img/fig-4-44.png)

At replication the **parental histones are distributed to both daughter duplexes**, roughly at random, so each daughter inherits about half the marked nucleosomes interleaved with new unmarked ones. A **reader-writer complex** then does exactly what it does when it spreads a domain: it binds an existing mark and writes the same mark on the unmarked neighbour. The pattern is **restored rather than copied**, which makes chromatin state genuinely heritable through cell division without any of it being in the sequence.

**The long-term memory systems.** The **Polycomb** group maintains H3K27me3 and keeps developmental genes, the Hox cluster above all, off in the lineages that should not express them; the **trithorax** group maintains the opposite state at the same loci. **DNA methylation** at CpG sites adds a second inherited layer with its own maintenance enzyme that copies the pattern onto the new strand after replication.

So the full answer runs: **signals select transcription factors, transcription factors nucleate marks at specific sequences, reader-writer complexes spread them, barriers bound them, and replication-coupled restoration makes the result heritable.** ENCODE is the photograph of the outcome in 147 cell types; this is the mechanism that produced it.
