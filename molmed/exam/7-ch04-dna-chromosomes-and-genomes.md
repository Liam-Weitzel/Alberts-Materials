---
title: Session 7. DNA, Chromosomes and Genomes
description: Open exam questions for Raymond Poot's lecture, in the style of the course's sample questions, with model answers.
tags: [molmed, session-7, ch4, exam]
---

Q: Histone H3 can be methylated on lysine 4 (H3K4), lysine 9 (H3K9) and lysine 27 (H3K27), and it can also be acetylated.

**a)** Compare what acetylation and methylation do to the charge of a lysine side chain, and explain the consequence of acetylation for the interaction between histones and DNA.

**b)** H3K4me3 is associated with active promoters, while H3K9me3 and H3K27me3 are associated with silenced chromatin. Why is this strong evidence that methyl marks act as binding sites rather than by their chemistry?

**c)** Active marks such as H3K4me3 cover about 1% of histones, while silencing marks such as H3K9me3 cover tens of percent. What does this tell you about the default state of the genome?

**d)** Explain what is meant by the "histone code", and how a reader complex interprets it.
A: **In brief:** **Acetylation** neutralises lysine's charge and loosens chromatin; **methylation** keeps it. The same methyl mark means **opposite** things at K4 and K9/K27, so it acts as a **binding site** read by specific readers. Active marks are **rare**, silencing marks widespread: the default is off. Combinations are read by **multi-module reader complexes**.

**a)** **Acetylation neutralises** the positive charge of the lysine amino group. **Methylation (mono-, di- or tri-) keeps the positive charge** but changes the shape and hydrophobicity of the side chain. Histones bind DNA largely **electrostatically**: their positively charged lysines and arginines neutralise the negatively charged phosphate backbone. Acetylation **weakens that grip**, loosening chromatin and making DNA more accessible.

**b)** The **same chemical modification on the same histone** means **opposite** things depending on its **position**: K4 methylation goes with activity, K9 and K27 methylation with silencing. If the methyl group acted through its chemistry (for example on the DNA-histone interaction), position would not matter. Its meaning is decided by **which reader protein recognises** that particular methylated lysine and what that reader recruits.

**c)** Active marks are **rare and sharply localised** (an active promoter is a pinpoint), while silencing marks cover **large domains**. The **default state is off**: expression is the exception that has to be specified.

**d)** Histone tails carry **many modifiable sites** (on lysine: acetylation, methylation; on serine: phosphorylation), on eight tails per nucleosome, so the **combination** of marks can carry much more information than any single mark: a code. A **reader complex** is a **scaffold** carrying several **protein modules**, each recognising one specific modification. It binds strongly only where the **right combination of marks** is present, and then **recruits** further components (remodellers, modifying enzymes, transcription machinery) that bring about expression or silencing.

Read more: [What the marks mean](#/chapter/ch04-dna-chromosomes-and-genomes/what-the-marks-mean)
Tags: histone-code, core

---

Q: A reporter gene is inserted into the genome next to a region of heterochromatin. In some cells the reporter is expressed, in others it is silenced, and the pattern is passed on when the cells divide.

**a)** Explain how heterochromatin can spread along a chromosome from a nucleation site. Which step of the process is sequence-specific?

**b)** What normally prevents heterochromatin from spreading into neighbouring genes? Describe three mechanisms.

**c)** Predict what happens to genes next to a heterochromatin domain if the barrier sequence between them is deleted.

**d)** How can a chromatin state be passed on through DNA replication, even though it is not encoded in the DNA sequence?
A: **In brief:** A **sequence-specific TF** recruits a **writer**; a **reader-writer** complex then copies the mark onto the next nucleosome, so it spreads. **Barriers** stop it by tethering, steric blocking or **erasing**. Without the barrier, **silencing spreads** into neighbouring genes. At replication, marked parental histones go to both daughters and **reader-writers restore** the pattern.

**a)** (1) A **sequence-specific gene regulatory protein** binds its DNA site; this is the only step that recognises sequence, and it decides **where**. (2) It recruits a **histone-modifying enzyme (writer)**, which marks nearby nucleosomes. (3) A **reader** protein binds the mark. (4) Reader and writer form a **reader-writer complex** that binds an existing mark and writes the **same mark on the next nucleosome**. From then on the process is **self-propagating**: each mark recruits the enzyme for the next, so the mark spreads along the fibre. The reader-writer can also recruit an **ATP-dependent remodelling complex**, so compaction spreads with the mark.

**b)** **Barrier DNA sequences** bind **barrier proteins** that block spreading: (1) **tethering** the chromatin to a fixed structure, such as a **nuclear pore complex**, so the spreading complex cannot pass; (2) **steric blocking**, binding nucleosomes tightly so the reader-writer cannot reach them; (3) **erasing**, recruiting enzymes that **remove** the heterochromatin marks as fast as they are written.

**c)** Nothing in the spreading mechanism is self-limiting, so heterochromatin would **spread into the neighbouring region** and **silence** the genes there. Because spreading is somewhat stochastic, this can happen in some cells and not others, giving the variegated (mosaic) pattern seen with the reporter.

**d)** At replication the **parental histones**, with their marks, are distributed to **both daughter DNA molecules**, interspersed with new unmarked histones. **Reader-writer complexes** bind the old marks and **copy them onto the new neighbouring nucleosomes**, restoring the pattern. (DNA methylation is a second inherited layer, copied by a maintenance enzyme.)

Read more: [Spreading](#/chapter/ch04-dna-chromosomes-and-genomes/spreading)
Tags: heterochromatin, histone-code, type/apply

---

Q: A genome-wide association study (GWAS) finds that a single-nucleotide polymorphism (SNP) is associated with an increased risk of a heart rhythm disorder. The SNP lies 60 kb from the nearest gene, in a region that does not encode protein.

**a)** Why is it difficult to interpret such a GWAS hit? Give two problems.

**b)** Data from the ENCODE project show that the region containing this SNP is DNase-hypersensitive in **fetal heart** cells but not in other cell types. What does this suggest about how the SNP could cause disease?

**c)** "Active regulatory regions span 2% of the genome and contain 70% of disease-associated SNPs." Explain why this makes chromatin maps essential for understanding common disease.
A: **In brief:** Problems: **linked SNPs**, unknown **tissue**, and **non-coding** location. Hypersensitivity only in **fetal heart** suggests the SNP sits in a heart-specific **enhancer** and changes **gene expression** there. Most disease risk lies in **regulatory DNA**, which is **cell-type specific**, so chromatin maps are needed to interpret it.

**a)** (1) **Which SNP is causal?** Nearby variants are inherited together, so an association implicates a **block of linked SNPs**, not one. (2) **In which tissue does it act?** A variant may do nothing in most cells and everything in one. (3) Most disease-associated variants are **outside coding regions**, so there is **no protein change** to point at and no obvious mechanism.

**b)** DNase hypersensitivity marks **accessible chromatin**, typically an **active regulatory element** (enhancer, promoter) bound by transcription factors. The SNP lies in a regulatory region active specifically in **fetal heart**, the tissue that matches the disease. It probably alters a **transcription factor binding site** in an **enhancer**, changing the **expression level** of a gene (possibly a distant one reached by DNA looping) in heart cells during development, rather than changing a protein.

**c)** Most common disease risk is **not in the ~1% of the genome that codes for protein**, but in the small fraction that **regulates** genes, and regulatory elements are **cell-type specific**. A variant can only be interpreted once you know **which regions are active in which cell type**, which is what maps of accessible chromatin and histone marks (ENCODE) provide.

Read more: [GWAS, and where disease-associated variants actually sit](#/chapter/ch04-dna-chromosomes-and-genomes/gwas-and-where-disease-associated-variants-actually-sit)
Tags: encode, gwas, clinical

---

Q: In a human cell, each DNA molecule is packed into a mitotic chromosome about 10,000 times shorter than its extended length, yet specific genes must remain accessible to be transcribed.

**a)** Describe the structure of the nucleosome core particle. Why do histones bind DNA so strongly, regardless of sequence?

**b)** What is the role of histone H1?

**c)** Promoters are usually found in nucleosome-free regions. Describe how ATP-dependent chromatin remodelling complexes can move nucleosomes, and the two outcomes of their action.

**d)** Heterozygous mutations in the remodeller **CHD7** cause CHARGE syndrome, which affects the eye, heart, airways and ears. Explain why one mutant copy is enough, and why specific organs are affected rather than every cell.
A: **In brief:** **Octamer** (two each of H2A, H2B, H3, H4) with **147 bp** wrapped around; **Lys/Arg** bind the phosphate backbone whatever the sequence. **H1** binds the linker and helps form the 30 nm fibre. **Remodellers** use ATP to pull DNA around the octamer: sliding, eviction or dimer exchange. CHD7 is **haploinsufficient**, and needed for **specific developmental steps**.

**a)** A **histone octamer** of two copies each of **H2A, H2B, H3 and H4** (two H2A-H2B dimers and an (H3-H4)₂ tetramer), assembled through their **histone folds**, with about **147 bp of DNA** wrapped around it in about **1.7 turns**; unstructured N-terminal **tails** protrude. Histones are rich in **lysine and arginine**, so they are strongly **positive**; they bind the **negatively charged phosphate backbone**, which is the same in every sequence. This neutralisation also lets DNA bend tightly around the octamer.

**b)** **H1 is the linker histone**, not part of the octamer. It binds where DNA **enters and leaves** the nucleosome, fixing the exit angle and pulling nucleosomes together, which allows packing into the **30 nm fibre** (higher-order structures beyond this are not well established).

**c)** A remodeller is an **ATP-driven DNA translocase** anchored on the nucleosome: it pulls DNA in on one side, creating a **bulge** on the octamer surface that propagates around and out the other side, moving DNA relative to the histones. Outcomes: **sliding** the nucleosome to a new position (exposing sequence that was wrapped), or **eviction** of the octamer (possibly inserted elsewhere); remodellers can also exchange **H2A-H2B for variant dimers**. Clearing nucleosomes from a promoter makes it available to the transcription machinery.

**d)** One working copy does not make **enough** CHD7 (haploinsufficiency). A remodeller is not needed for cells to live, but to switch on the **right genes in the right cells at the right time during development**. The affected structures each depend on a **particular developmental step** that needs a high level of CHD7 activity; CHD7 is targeted there by its **chromodomains**, which read **H3K4me** at active promoters, while its **SNF2** domain is the motor.

Read more: [The nucleosome core particle](#/chapter/ch04-dna-chromosomes-and-genomes/the-nucleosome-core-particle)
Tags: nucleosome, remodelling, clinical

---

Q: A human contains around 300 different cell types that all carry the same DNA sequence.

**a)** If the DNA is the same, where does the difference between a neuron and a fibroblast lie? Explain what the ENCODE project mapped and what it concluded about cell identity.

**b)** When combinations of histone marks are used to annotate the genome, promoters and enhancers can be distinguished by the methylation state of H3K4. Explain.

**c)** At an actively expressed gene, chromatin regulators are found as a sharp peak at the promoter, and surprisingly this peak includes histone **deacetylases** (HDACs). What does this tell you about how gene activity is controlled?
A: **In brief:** The difference lies in **which regions are accessible and marked**; ENCODE mapped chromatin across many cell types and found it is a **signature of cell identity**. **Promoters** carry **H3K4me3**, **enhancers** **H3K4me1**. HDACs at active promoters show that activity is a **balance** between writers and erasers.

**a)** In **which parts of the genome are accessible and active**, that is, in the **chromatin organisation** of each cell type. ENCODE mapped, across ~150 human cell types and tissues, **transcribed regions** (RNA-seq), **histone modifications** and **transcription factor binding** (ChIP-seq), **accessible regions** (DNase-seq) and **3D chromatin contacts**. Its conclusion: the map of functional elements is a **"signature" of the identity of a cell**. Cell identity can be read from chromatin.

**b)** **Active promoters** carry high **H3K4me3** (with H3K4me2 and H3K9ac) at the transcription start site; **enhancers** carry high **H3K4me1** and low me3. The **number of methyl groups** on a single lysine therefore distinguishes two classes of regulatory element, a clear example of a combinatorial code.

**c)** Activating and repressing activities are **both present** at an active gene. Gene activity is not simply the presence of activators and absence of repressors, but the **balance** between opposing writers and erasers at a precisely defined point. Every mark has an **eraser**, so chromatin state is continuously maintained rather than permanently fixed. (At a **repressed** gene, regulators such as Polycomb form a **broad domain** over the whole gene instead of a sharp peak.)

Read more: [ENCODE: the Encyclopaedia of DNA Elements](#/chapter/ch04-dna-chromosomes-and-genomes/encode-the-encyclopaedia-of-dna-elements)
Tags: encode, histone-code

---

Q: The DNA double helix is stable enough to require temperatures of around 70 to 80 °C to separate its strands in the test tube.

**a)** Describe the two types of interaction that hold the double helix together, and the direction in which each acts.

**b)** Why does GC-rich DNA melt at a higher temperature than AT-rich DNA?

**c)** Sequence-specific DNA-binding proteins can "read" the sequence without separating the two strands. How?

**d)** The electron micrograph of a nucleus shows dark and light regions, and a separate dense body. Identify what each represents.
A: **In brief:** **Hydrogen bonds** across the helix (A–T 2, G–C 3) and **base stacking** along it. GC-rich DNA melts later: **more hydrogen bonds and stronger stacking**. Proteins read the base edges in the **grooves**, mostly the **major** groove. Dark = **heterochromatin**, light = **euchromatin**, the separate dense body = **nucleolus**.

**a)** (1) **Hydrogen bonds** between complementary bases, **across** the helix: A–T with **two**, G–C with **three**; always a **purine with a pyrimidine**, so the helix has a constant width. (2) **Base stacking** between successive flat base pairs, **along** the helix axis; stacking contributes about as much to stability as hydrogen bonding and makes the duplex a stiff rod.

**b)** A G–C pair has **three hydrogen bonds** instead of two, and **stacking** between G/C-containing steps is also more favourable (it depends on the electronic character of the stacked bases, not on the number of rings, which is the same for every base pair).

**c)** Through the **grooves**: the edges of the base pairs are exposed in the **major and minor grooves**, and each base pair presents a **distinct pattern of hydrogen-bond donors and acceptors** (and methyl groups). The **major groove** carries the most information, so most sequence-specific binding is in the major groove.

**d)** **Dark, electron-dense regions: heterochromatin** (condensed, largely silent, concentrated at the nuclear periphery against the lamina and around the nucleolus). **Lighter regions: euchromatin** (more open, where transcription takes place). The **separate dense body is the nucleolus**, which is **not** heterochromatin: it is the site of rRNA transcription and ribosome assembly, dense because it is packed with rRNA and protein.

Read more: [What holds the two strands together](#/chapter/ch04-dna-chromosomes-and-genomes/what-holds-the-two-strands-together)
Tags: dna-structure, nucleus

---

Q: The figure shows the four core histone proteins.

![The four core histones H2A, H2B, H3 and H4 drawn as lines from N to C terminus, each with an unstructured N-terminal tail followed by the helices of the histone fold](assets/img/slide-9-26.png)

**a)** Indicate in the figure the region(s) of the core histone proteins that are the main regions modified by posttranslational covalent modifications which compose the "histone code".

**b)** Are all four core histones subject to covalent posttranslational modification?

**c)** Where are these regions located in the context of a nucleosome?

**d)** Can one and the same core histone protein be methylated and acetylated at the same time?
A: **In brief:** a) The **N-terminal tails** (plus a few sites in the fold). b) **Yes**, all four core histones are modified. c) The tails **stick out** of the nucleosome core, past the DNA, where enzymes and reader proteins can reach them. d) **Yes**: one histone can carry methyl groups on some lysines and acetyl groups on others at the same time (for example H3K4me3 with H3K9ac); a **single lysine** carries one or the other.

**a)** The **unstructured N-terminal tails**, the left-hand part of each line in the figure. The histone fold forms the core of the nucleosome; the tails carry most of the modification sites (a few sites also lie in the fold).

**b) Yes.** H2A, H2B, H3 and H4 all carry covalent modifications on their tails: **acetylation** and **methylation** of lysines (and methylation of arginines), **phosphorylation** of serines, and ubiquitylation.

![The nucleosome with the first 30 amino acids of each of its eight N-terminal tails highlighted, and the sequences of the four core histone tails annotated with acetylation, methylation, phosphorylation and ubiquitylation sites](assets/img/fig-4-35.png)

**c)** The histone folds form the **octamer core**, with the DNA wrapped around it. The eight tails **protrude** from the core, between and past the DNA gyres, into the surroundings. That is what makes them useful: they are the part of the nucleosome that **modifying enzymes and reader proteins can reach**, and they can also contact **neighbouring nucleosomes** and influence chromatin compaction.

![The exit points of the eight N-terminal histone tails from a nucleosome, and the same tails reaching across to bind neighbouring nucleosomes](assets/img/fig-4-29.png)

**d) Yes, on different residues.** A single H3 tail can, for example, be trimethylated on K4 and acetylated on K9 together, a combination found at active promoters. A **given lysine** can carry either an acetyl group or methyl groups, not both, because the two modifications compete for the same amino group (a recently described exception, acetyl-methyllysine, was mentioned in the lecture). The **combination** of marks on the tails is the "code".

Read more: [Where the marks sit](#/chapter/ch04-dna-chromosomes-and-genomes/where-the-marks-sit)
Tags: qa, histone-code, type/figure

---

Q: In contrast to histone acetylation, which always correlates with gene activation, histone methylation can lead to either transcriptional activation or repression.

How do you suppose that the same type of modification (histone methylation) can mediate different biological outcomes?
A: **In brief:** Methylation does not change the charge of the lysine; it creates a **binding site**. What it means depends on **which residue** is methylated (and how many methyl groups), because different **reader proteins** recognise different methylated sites and recruit either **activating** or **repressing** complexes.

**Acetylation** acts partly by its chemistry: it **neutralises the positive charge** of lysine, loosening histone-DNA contacts, and it is read by activating proteins, so it points one way: **activation**.

**Methylation** keeps the positive charge, so it has little direct effect on DNA binding. Instead it is a **mark that is read**:
- **Position** matters: **H3K4me3** marks **active promoters**, while **H3K9me3** (heterochromatin, via HP1) and **H3K27me3** (**Polycomb** silencing) mark **repressed** chromatin. The same chemical group on the same histone means opposite things at different lysines.
- **Degree** matters too: mono-, di- and trimethylation are distinguished (for example **H3K4me1** at enhancers versus **H3K4me3** at promoters).
- **Readers** decide the outcome: specific reader domains bind a particular methylated lysine. Reader complexes carry several modules and bind best where the **right combination** of marks is present, then **recruit** further complexes: transcription machinery and remodellers (activation), or heterochromatin proteins and Polycomb complexes (repression).

So the outcome is not in the methyl group itself but in **who binds it**.

![A reader complex built from several modules, each recognizing a different histone mark, binding only where the right combination is present and attracting further protein complexes](assets/img/fig-4-38.png)

Read more: [What the marks mean](#/chapter/ch04-dna-chromosomes-and-genomes/what-the-marks-mean)
Tags: qa, histone-code
