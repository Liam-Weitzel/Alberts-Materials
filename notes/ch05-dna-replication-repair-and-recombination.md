---
title: Ch 5. DNA Replication, Repair, and Recombination
description: ""
date: 2026-08-09
tags: [mboc, ch5]
---

> **Session 3** of the *Molecular Biology of the Cell* course in the **Molecular Medicine master's at Erasmus MC**, given by **Arnab Ray Chaudhuri** (Dept. of Molecular Genetics, Erasmus MC).
>
> The exam asks about what was covered in the **lectures**, not the chapter as a whole, so this summary follows the slides. A few places add background from the chapter to make the slides make sense, and say so.

The lecture follows the chapter only as far as the replication fork, and then turns into a lecture about what happens when replication goes wrong: replication stress, homologous recombination, BRCA1/2, the techniques used to study all three, and how their failure is exploited in the clinic. Much of the second half is the lecturer's own work — the fork-protection and chemoresistance results below are from **Ray Chaudhuri *et al.*, *Nature* 2016** and the reviews **Ray Chaudhuri & Nussenzweig, *Nat. Rev. Mol. Cell Biol.* / *EMBO Mol. Med.* 2017**, all listed on his closing slide.

The stated learning goals were:

1. Describe the structure of DNA
2. Describe the function of the enzymes of replication
3. Describe the anatomy of a replication fork
4. Explain how accuracy in replication is achieved
5. Explain the causes of replicative stress
6. Explain how homologous recombination underpins DNA replication
7. Describe the roles of important common factors in homologous recombination and the replication stress response
8. Describe the main techniques used to study homologous recombination and replication stress
9. Explain how replication stress and homologous recombination defects can be exploited for cancer treatments

Learning goals 1–4 are the chapter; 5–9 are the lecture, and that is where the weight of the slides lies.

---

# The structure of DNA

## The double helix

DNA is a **double helix**, and in the cell it is almost always **right-handed**. This is **B-DNA**, the form Watson and Crick described in *Nature* **171**, 737–738 (**1953**) from Franklin and Gosling's X-ray diffraction data.

Two other forms are worth knowing:

* **A-DNA:** also right-handed, shorter and wider. It appears in dehydrated DNA and in RNA–DNA hybrids.
* **Z-DNA:** **left-handed**, with a zigzag backbone. It forms in alternating purine–pyrimidine tracts (e.g. CGCGCG) and is stabilized by the negative supercoiling left behind a transcribing polymerase. Z-DNA is associated with **gene expression** rather than with bulk storage of the genome.

So "DNA is right-handed" is the rule, and Z-DNA is the exception that shows up where DNA is being actively read.

## Dimensions

From the classic figure on the slide:

| Feature | Value |
|---|---|
| One complete turn of the helix | **34 Å** (3.4 nm) |
| Rise per base pair | **3.4 Å** |
| Radius of the helix | **10 Å** (diameter ~20 Å) |
| Base pairs per turn | ~10 (about 10.5 in solution) |

The helix is not a smooth cylinder. The two backbones run around it at unequal spacing, which leaves a **major groove** and a **minor groove**. Sequence-specific DNA-binding proteins read the edges of the base pairs, and they mostly do this from the **major groove**, because that is where the pattern of hydrogen bond donors and acceptors is unique for each of the four base pairs.

## Polarity and antiparallelism

The **5′** and **3′** labels are the **carbon numbering of the deoxyribose**. The backbone is a chain of phosphodiester bonds running from the 5′-phosphate of one sugar to the 3′-hydroxyl of the next, so each strand has a chemical direction.

The two strands run in **opposite directions**: one 5′→3′ and the other 3′→5′. DNA is **antiparallel**.

This is not a detail of drawing convention. Antiparallelism is what makes complementary base pairing geometrically possible, and it is the reason the replication fork has to be asymmetric (below).

## Complementary base pairing

DNA is built from **nucleotides**: a base, a deoxyribose, and a phosphate.

* **A–T:** **2** hydrogen bonds
* **G–C:** **3** hydrogen bonds

A **purine** (A, G; two rings) always pairs with a **pyrimidine** (C, T; one ring), which keeps the width of the helix constant along its length.

Two consequences:

* **GC-rich DNA is harder to melt** than AT-rich DNA, because of the extra hydrogen bond per pair. This is also why AT-rich sequences are found at origins of replication, where the helix has to be opened.
* **Each strand carries the information for the other.** That is what makes **templating** possible, and it is the basis of both replication and repair. If one strand is damaged, the other still holds the sequence. If both are broken at the same place, the information is gone from that molecule, which is why a double-strand break is such a serious lesion.

![The parent double helix separating into an S strand and an S-prime strand, each acting as a template for a new complementary strand](assets/img/fig-5-02.png)

---

# Anatomy of a replication fork

Replication happens in **S phase** of the cell cycle.

![The four phases of the eukaryotic cell cycle, G1, S, G2 and M, with DNA replication confined to S phase](assets/img/fig-5-29.png)

## Opening the helix

Replication starts at **origins of replication**. A human cell fires tens of thousands of origins, because a single fork moving at ~1–2 kb/min could never copy a chromosome in one S phase.

The first step is unwinding. A **DNA helicase** is loaded onto the DNA at the origin and unwinds the duplex, moving ahead of the rest of the machinery. In eukaryotes the replicative helicase is the **MCM2–7** ring, which is loaded in G1 as an inactive double hexamer (origin **licensing**, by ORC, CDC6 and CDT1) and only activated in S phase, when CDK and DDK add **CDC45** and **GINS** to form the active **CMG** helicase.

Splitting licensing (G1) from firing (S) is how the cell guarantees that every origin fires **at most once per cell cycle**. Re-replication is a source of genome instability in its own right.

![Loading of two Mcm helicases in G1, phosphorylation of Mcm and ORC at S phase, CMG helicases moving apart, and the two complete replication machines](assets/img/fig-5-31.png)

Unwinding is the initiating step: nothing else at the fork can happen until there is single-stranded DNA to work on.

## Leading and lagging strands

DNA polymerase can only synthesize **5′→3′**, and it can only add to an existing 3′-OH. Because the two template strands are antiparallel, the fork cannot be symmetric:

* **Leading strand:** synthesized **continuously**, in the same direction the fork moves. One priming event is enough.
* **Lagging strand:** synthesized **discontinuously**, in short pieces made in the direction *opposite* to fork movement. Each piece is an **Okazaki fragment** (~100–200 nucleotides in eukaryotes) and each one needs its own **RNA primer**.

So "DNA is not synthesized continuously on both strands" is a direct consequence of two facts: the polymerase has one chemical direction, and the template strands have opposite polarity.

![The asymmetric replication fork, with continuous leading-strand synthesis and discontinuous lagging-strand fragments at each of two forks](assets/img/fig-5-07.png)

## Who is at the fork

| Protein | Job |
|---|---|
| **DNA helicase** (MCM2–7/CMG) | Unwinds the parental duplex ahead of the fork |
| **Single-strand DNA-binding protein** (bacterial SSB, eukaryotic **RPA**) | Coats exposed single-stranded DNA, keeps it from re-annealing or folding into hairpins, and protects it from nucleases |
| **DNA primase** (part of Pol α–primase) | Lays down the short RNA primers that the polymerase extends |
| **DNA polymerase** (Pol ε on the leading strand, Pol δ on the lagging strand) | Extends the primer 5′→3′ and proofreads |
| **Sliding clamp** (**PCNA**) and its clamp loader (**RFC**) | Encircles the DNA and tethers the polymerase to it, giving processivity |
| **DNA topoisomerase** | Relieves the positive supercoiling that builds up ahead of the fork, and unlinks the daughter molecules behind it |
| **FEN1 / RNase H2, DNA ligase I** | Remove the RNA primers and seal the nicks between Okazaki fragments |

The order of events on the lagging strand is worth holding on to: **RPA binds the single-stranded DNA first**, and the polymerase machinery takes over from it afterwards. RPA is not a passive placeholder; it is the platform that the next steps are built on, and later in the lecture it becomes the signal that a fork is in trouble.

**Primase is physically linked to the helicase.** That coupling is what keeps priming synchronized with unwinding: as the helicase exposes new lagging-strand template, primase is right there to start the next Okazaki fragment.

![A eukaryotic replication fork with polymerase epsilon on the leading strand, the CMG helicase, and polymerases alpha and delta on the lagging strand](assets/img/fig-5-19.png)

## The trombone model

If the leading and lagging polymerases were independent, they would travel in opposite directions and the fork would fall apart as a machine. Instead the **lagging-strand template is looped out**, so that the lagging polymerase is physically dragged along in the same direction as the fork even though it synthesizes backwards along the template.

The loop grows as the fragment is made and collapses when it is finished, like the slide of a **trombone**. This is what the lecture's **"Action at a DNA replication fork" / "Replication fork coupling"** animation (Oxford, *Molecular Biology: Principles of Genome Function*) is showing: both polymerases held in one complex, the lagging strand paying out and reeling back in.

![A bacterial replication fork with one polymerase on the leading strand and two alternating on the lagging strand, plus an electron micrograph of the T4 replication machine](assets/img/fig-5-18.png)

A human cell makes something like 50 million Okazaki fragments per S phase, so primer removal and ligation are not a footnote: **FEN1** clips the displaced RNA/DNA flap and **LIG1** seals the nick, on every fragment.

![RNA primer synthesis by primase, extension into an Okazaki fragment, removal of the previous primer, gap filling by repair polymerase and sealing by DNA ligase](assets/img/fig-5-11.png)

---

# How accuracy is achieved

This was learning goal 4 but the lecture moved through it quickly; the numbers below are the chapter's.

Replication is accurate to about **one error per $10^9$–$10^{10}$ nucleotides**. That comes from three layers, each multiplying the one before it:

1. **Base selection.** The polymerase active site only closes properly around a correctly paired nucleotide. On its own this gives roughly $10^{-5}$.
2. **Proofreading.** The **3′→5′ exonuclease** of Pol δ and Pol ε removes a mispaired nucleotide before moving on. Another ~100-fold.
3. **Mismatch repair.** A separate system scans the new duplex, finds the mismatch, and, crucially, knows **which strand is new** and should be corrected. Another ~100–1000-fold.

![Successive steps in which a polymerase adds an incorrect nucleotide, removes it by proofreading, and resumes synthesis](assets/img/fig-5-08.png)

![MutS locking onto a mismatch, recruiting MutL, scanning to a sliding clamp and nick, and the excision and resynthesis that follow](assets/img/fig-5-20.png)

Two consequences worth remembering:

* **A proofreading polymerase cannot start a chain from scratch.** The first few nucleotides of a new chain are poorly paired, and an efficient proofreading exonuclease would simply chew them off. That is why the cell pays the cost of RNA primers and then replaces them: primase has no proofreading, so it is allowed to start.
* **Losing a layer is oncogenic.** Germline mismatch repair defects cause **Lynch syndrome**; somatic exonuclease-domain mutations in **POLE/POLD1** give "ultramutated" tumours. Accuracy is not decoration.

![Primase joining two ribonucleotides on a DNA template and extending them into a short RNA primer](assets/img/fig-5-10.png)

---

# Replication stress

## What a fork runs into

A replication fork can be slowed or stopped by:

* **DNA lesions** — adducts, crosslinks, oxidative damage. Handled by repair or by **DNA damage tolerance** (translesion synthesis, template switching).
* **Ribonucleotide incorporation** — polymerases misinsert rNMPs at a high absolute rate simply because the cell's rNTP pools are much larger than its dNTP pools. **RNase H2** removes them.
* **DNA secondary structure** — G-quadruplexes, hairpins, cruciforms. Resolved by helicases such as **BLM** and **WRN** (mutated in Bloom and Werner syndromes).
* **Repetitive DNA** — also a job for BLM/WRN-type helicases.
* **Transcription, and RNA–DNA hybrids (R-loops)** — the transcription machinery is a **blocking lesion** for the replication machinery. Head-on collisions are worse than co-directional ones. Managed by RNA processing machinery, helicases, topoisomerases and **RNase H**.
* **Limiting nucleotides** — if the dNTP pool runs dry, forks stall everywhere. Controlled by **regulation of origin firing**.
* **Fragile sites and oncogene-induced stress** — see below.

![A nucleotide with arrows marking sites of oxidative damage in red, hydrolytic attack in blue and methylation in green, with arrow width showing relative frequency](assets/img/fig-5-37.png)

![Torsional stress building ahead of a fork, relief by supercoiling, and relief by a topoisomerase-generated single-strand break](assets/img/fig-5-21.png)

## Oncogene-induced replication stress

This is the part that connects the chapter to cancer.

**Oncogenes** such as **MYC** and **RAS** are normal genes for a multicellular organism; they drive proliferation. When they are mutated or overexpressed they push cells into S phase without the cell having the resources for it:

* **more origins fire**, so more forks are running at once
* each fork consumes nucleotides, so the **dNTP pool is drained**
* with dNTPs limiting, forks slow and **stall**
* proliferation is also driven transcriptionally, so **transcription–replication collisions** go up

The result is chronic **replication stress** in the earliest stages of tumourigenesis. It is both an engine of genome instability (which the tumour benefits from) and a liability (which therapy can exploit).

**Common fragile sites** are the places where this shows first: large, late-replicating regions with few origins, so a fork that stalls there has no backup origin to rescue it.

## Definition

**Replication stress** is the slowing or stalling of fork progression, and/or of DNA synthesis. Note the "and/or": a fork where the helicase keeps unwinding while the polymerase is blocked has not stopped, but it is in trouble.

The lecturer's framing: the replication process is **almost never unchallenged**, and yet it still has to be accurate. Everything downstream exists to make that true.

## Consequences: from stalled to collapsed

When the polymerase is blocked but the helicase keeps unwinding, the two **uncouple** and a stretch of **single-stranded DNA** accumulates behind the helicase. That ssDNA is immediately coated by **RPA**, and RPA-coated ssDNA is the universal signal that a fork is in trouble.

On the RPA filament, the checkpoint is assembled:

* **ATR–ATRIP** is recruited to RPA-ssDNA
* **TopBP1** (and ETAA1) activates ATR
* ATR phosphorylates **CHK1**; **DNA-PK** and **WEE1** feed into the same response

The outputs, as listed on the slide as the **Replication Stress Response**:

* **S-phase checkpoint activation**
* **control of new origin firing** — globally suppress new clusters so the dNTP pool is not spread even thinner, while allowing nearby **dormant origins** to rescue the local region
* **replication fork stabilization and restart**
* **prevention of fork collapse**
* **DNA repair**

Mechanistically, CHK1 drives degradation of **CDC25** phosphatases and WEE1 phosphorylates and inhibits **CDK1/2**, which is how the checkpoint also holds the cell out of mitosis until replication is finished.

If the response fails, or the block persists, the stalled fork becomes a **collapsed fork**: the replisome comes off, and **endonucleases** (MUS81–EME1, SLX1–SLX4) cleave the fork structure, producing a **DNA double-strand break**.

## Why one unrepaired double-strand break can kill the cell

The lecturer made the point that a single unchecked DSB is enough to kill a cell. The reasons:

* A break at a collapsed fork is a **one-ended** DSB. There is no second end to ligate to, so **NHEJ has nothing legitimate to do** with it. If NHEJ acts anyway, it joins the end to some other break elsewhere in the genome, producing **translocations** and **dicentric chromosomes**, which then break again at the next mitosis (breakage–fusion–bridge cycles).
* The fragment distal to the break has no centromere. At mitosis it is simply **lost**, taking thousands of genes with it.
* If the break is not repaired at all, persistent ATM/ATR signalling drives **p53** activation, and the cell goes into **apoptosis** or **senescence**.

So the only clean way to deal with a one-ended break in S phase is to copy the missing information back from the intact **sister chromatid**: homologous recombination.

---

# Homologous recombination

## Two situations, two animations

The lecture used two animations (J. H. Lo and B. P. Engelward) that are worth separating, because they are different problems:

**1. A two-ended double-strand break, repaired by SDSA.**
Both ends of the break are present. After resection, one 3′ end invades the sister, is extended by a polymerase, and is then displaced and annealed back to the other end: **synthesis-dependent strand annealing (SDSA)**. Because the invading strand is unwound before a second junction forms, SDSA gives **no crossover**. This is the simple case: a template exists, and both ends are available.

**2. A broken replication fork, restored by HR.**
Here the fork has run into a nick or single-strand lesion and the arm has broken off, giving a **one-ended** break. The 3′ end invades the sister duplex, forms a **D-loop**, and re-establishes a replication fork from the invading end. The junction is resolved afterwards. This is the "restoration of a broken replication fork" animation, and it is why homologous recombination is not just a repair pathway but part of normal replication.

![A replication fork collapsing at a single-strand break, then being rebuilt by strand exchange and DNA synthesis so that replication restarts](assets/img/fig-5-49.png)

Both depend on an **intact sister chromatid** being available, which is why HR is restricted to **S and G2**.

## The pathway, step by step

The slide's flow diagram, in order:

1. **DSB** — the break is made (here, ionizing radiation; in S phase, a collapsed fork).
2. **DSB binding** — the **MRN complex** (MRE11–RAD50–NBS1) binds the ends and holds them together.
3. **End resection** — MRE11/CtIP nick and trim the 5′-ended strands, then **EXO1** and **BLM–DNA2** carry out long-range resection. This "chops back" the 5′ strand and **leaves a 3′ single-stranded overhang** on each side.
4. **RPA binding and ATR activation** — the exposed 3′ overhangs are coated by **RPA**, which both stiffens the ssDNA (removing secondary structure) and recruits **ATR–ATRIP**. The same RPA signal as at a stalled fork; this is the shared factor between the replication stress response and HR, and it is learning goal 7 in one picture.
5. **RAD51 loading** — **BRCA1–PALB2–BRCA2** deliver **RAD51** onto the ssDNA, **replacing RPA**. This is the committed step, and it is where BRCA2 does its work.
6. **Invasion and D-loop extension** — the RAD51 nucleoprotein filament performs the **homology search**, invades the sister duplex, and displaces one of its strands as a **D-loop**. A **DNA polymerase** extends the invading 3′ end using the sister as template.
7. **dHJ intermediate** — the second end is captured, giving a **double Holliday junction**.
8. **Resolution** — **resolvases** (GEN1, MUS81–EME1, SLX1–SLX4) cut the junctions, giving crossover or non-crossover products. Alternatively the **BLM–TOP3A–RMI1/2** "dissolvasome" migrates and dissolves the junctions, which always gives **non-crossover** products. Somatic cells prefer dissolution, because crossovers between sisters are harmless but crossovers between homologues cause **loss of heterozygosity**.

![Resection of the 5′ ends of a broken duplex, strand invasion into the undamaged homolog, repair synthesis, and ligation restoring both helices](assets/img/fig-5-47.png)

**RAD51 is the central recombinase of the cell**, and it is essential: *Rad51* knockout mice die as embryos. Its importance comes from what it uniquely does — it takes over from RPA, and only then can a single strand **search the sister chromatid for homology and invade it**. Without RAD51 loading, resection still happens, RPA still binds, ATR still signals, but the break can never be repaired by homology.

![RecA-bound single-stranded DNA held in a stretched conformation, and the heteroduplex formed after strand exchange](assets/img/fig-5-48.png)

## The pathway choice: HR or NHEJ

Not on the slides in detail, but needed to make sense of BRCA and of PARP inhibitors.

![Nonhomologous end joining, in which ends are cleaned and ligated with loss of nucleotides, beside homologous recombination, which repairs accurately from an undamaged homolog](assets/img/fig-5-45.png)

**Non-homologous end joining (NHEJ)** is the alternative: **Ku70/80** binds the ends, recruits **DNA-PKcs**, ends are cleaned up by **Artemis** and polymerases, and **XRCC4–LIG4** with **XLF** ligates them.

![Ku heterodimers grasping the broken ends, additional proteins holding them together and processing them, ligation, and the three-dimensional structure of Ku on duplex DNA](assets/img/fig-5-46.png)

| | Homologous recombination | Non-homologous end joining |
|---|---|---|
| Template | Sister chromatid required | None |
| Cell cycle | S/G2 only | Any phase; dominant in G1 |
| Speed | Slow (hours) | Fast (minutes) |
| Fidelity | Essentially error-free | Error-prone: small indels at the junction |
| Key factors | MRN, CtIP, EXO1, RPA, BRCA1, PALB2, BRCA2, RAD51 | Ku70/80, DNA-PKcs, Artemis, XRCC4, LIG4, XLF |

The choice is made at **resection**: resection commits to HR, and end protection commits to NHEJ. **53BP1–RIF1–Shieldin** block resection; **BRCA1** removes 53BP1 from the break and promotes resection. The two antagonize each other, which becomes important for PARP inhibitor resistance below.

A third pathway, **microhomology-mediated end joining** (polymerase θ / POLQ), joins ends using a few bases of microhomology. It is mutagenic, and it is the pathway HR-deficient cells fall back on — which is why POLQ inhibitors are now being developed for the same tumours as PARP inhibitors.

---

# BRCA1 and BRCA2

## What the lecture asserts

Three statements from the slide:

* **BRCA1/2 mutations promote tumour growth.**
* **BRCA1/2 deletion in primary cells inhibits growth.**
* **Loss of homologous recombination is believed to be the major catalyst for both** the tumour promotion and the growth inhibition.

The first two look contradictory, and reconciling them is the point of this part of the lecture.

## Where they act in HR

On the pathway diagram:

* **BRCA1** acts early, at **end resection** — it antagonizes 53BP1 and licenses the 5′→3′ resection that creates the 3′ overhangs.
* **BRCA2** acts late, at **strand invasion** — with **PALB2** as the bridge to BRCA1, it loads **RAD51** onto RPA-coated ssDNA.

Both are therefore required for HR, at different steps, and germline mutations in either cause hereditary breast and ovarian cancer.

## A second job: protecting stalled forks

BRCA1/2 have a function that is **separable from HR**: they **protect replication forks from nuclease-mediated degradation**.

When a fork stalls, it can **reverse** into a four-way "chicken foot" structure (driven by SMARCAL1, ZRANB3, HLTF), which exposes the nascent strands as a one-ended duplex. BRCA1/2, with RAD51, stabilize that structure and **repel MRE11**.

![A fork backing up so that the newly synthesized leading and lagging strands base-pair with each other, allowing synthesis past the lesion before the fork re-forms](assets/img/fig-5-50.png)

Without BRCA1/2, **MRE11** (with CtIP and EXO1) attacks the reversed fork and **degrades the nascent strands**. The consequences on the slide:

* **loss of viability**
* **chemotherapy sensitivity**

So BRCA1/2 sit at the head of two arms:

```
              BRCA1/2
             /        \
   HOMOLOGOUS          REPLICATION
 RECOMBINATION        FORK STABILITY
             \        /
          VIABILITY, GENOME STABILITY
```

and when they are lost, both arms fail: **cell death and genome instability** (Moynahan *et al.*, *Mol. Cell* 1999; Schlacher *et al.*, *Cell* 2011).

## How a tumour arises anyway

If BRCA loss kills cells, how do BRCA-mutant tumours exist? The lecture's answer, in three steps:

1. **Heterozygous germline mutation.** Carriers inherit one mutant and one wild-type allele. Every cell in the body is heterozygous, and heterozygous cells have normal HR.
2. **Loss of heterozygosity.** In a somatic cell, the remaining wild-type allele is lost — by deletion, by mitotic recombination, by gene conversion, or by promoter methylation. That cell is now **homozygous mutant**, i.e. HR-deficient. This is Knudson's two-hit model, and it is why the inherited mutation is dominant at the level of cancer risk but recessive at the level of the cell.
3. **A cooperating mutation that tolerates the damage.** An HR-deficient cell accumulates breaks, and a checkpoint-competent cell responds by arresting or dying. If the cell has *also* lost the checkpoint — typically **TP53** — it survives the damage instead. Now the genome instability from HR loss becomes a **source of further mutations** rather than a death sentence, and the clone expands.

Which is exactly the resolution of the paradox: **BRCA1 or BRCA2 loss alone kills a cell; BRCA loss together with p53 loss builds a tumour.** The genome instability that would have been lethal becomes the tumour's engine.

The same logic explains the therapeutic window later: the tumour is HR-deficient, the patient's normal tissue is still heterozygous and HR-proficient.

---

# Techniques used to study replication and recombination

The slide builds a tree: a mouse model at the top, then **electron microscopy**, **cell biology**, and **biochemistry and proteomics**.

## Electron microscopy of replication intermediates

Gives the **structure** of the fork itself.

The problem is that replication intermediates are fragile and collapse during preparation. The solution (J. Sogo, ETH Zürich; protocol in Zellweger and Lopes, *Meth. Mol. Biol.* 2017):

1. Treat living cells with **trimethyl psoralen (TMP)** and **366 nm** light. Psoralen intercalates and crosslinks the two strands **in vivo**, freezing the structure that was actually there.
2. Extract and spread the DNA for EM.
3. Score the molecules: parental duplex (**P**), daughter duplexes (**D**), and **reversed** forks (**R**).

What it shows: **fork reversal**, single-stranded gaps, and how often each occurs under stress. This is the assay that made "reversed forks" a real physical structure rather than a model.

## DNA fibre assay (single-molecule analysis of replication)

Gives the **dynamics** of replication in individual molecules.

1. Pulse cells with **CldU**, wash, apply the stress (here **UVC**, or HU, or a drug), then pulse with **IdU**.
2. Trypsinize, dilute labelled cells 1:8 with unlabelled cells, spot 2.5 µl on a slide.
3. Lyse and **tilt the slide (15°)** so the fibres spread out in a line.
4. Stain with antibodies that distinguish CldU from IdU (one red, one green), then image by confocal microscopy.

The patterns tell you what the forks did:

| Pattern (first label = CldU, second label = IdU) | Interpretation |
|---|---|
| First-label track continued by a second-label track | **Ongoing fork** that ran through both pulses |
| First-label track with second label on both ends | Origin that fired during the **first** pulse and is running bidirectionally |
| Second label only | **Newly fired origin**, fired during the second pulse |
| Two tracks running into each other | **Replicon merging** |
| First label only, no second label | **Termination**, or a fork that stopped during the second pulse |

Measurements you get from it: **fork speed** (track length / pulse time), **fork symmetry**, **origin firing frequency**, **restart efficiency after stress**, and — by comparing the second tract to the first — **degradation of nascent strands**, which is the readout for fork protection in BRCA-deficient cells.

## Immunofluorescence of repair proteins

Gives **where the proteins are** and whether they got there.

The slide's example: **RAD51** staining in untreated cells versus cells under replication stress. Untreated nuclei are almost blank; stressed nuclei are full of bright **RAD51 foci**. A focus is the microscopic shadow of a nucleoprotein filament assembled at a site of damage.

![Fibroblast nuclei showing total DNA, sites of repair synthesis, and localization of the Mre11 complex in stripes matching the pattern of irradiation](assets/img/fig-5-51.png)

Extended to HR competence (the "How to study HR?" slide): after **ionizing radiation**,

* **wild-type cells** form abundant RAD51 foci
* **BRCA1/2-deficient cells** form none — the damage is there, but RAD51 never gets loaded

This is a functional assay for HR, and the **RAD51 foci assay** is now used clinically as a biomarker of homologous recombination deficiency.

## Biochemistry and proteomics: proteomes at replication forks

Gives **which proteins are at the fork**, quantitatively, and how that changes under stress.

1. Grow one population in **light** medium (untreated) and one in **heavy** SILAC medium (**HU**-treated).
2. Label nascent DNA with **EdU**.
3. Click chemistry attaches a biotin tag to EdU; **pull down the labelled replication forks** on streptavidin.
4. Analyse by **quantitative mass spectrometry**, comparing heavy to light.

This is iPOND-style analysis, and it is how the composition of a stressed fork is compared with an unperturbed one without guessing which proteins to blot for.

## Gene targeting efficiency

A functional, genetic readout of HR.

A **gene targeting vector** carries a **selection marker** flanked by arms homologous to the target locus. After transformation, **homologous recombination** exchanges the vector arms for the genomic sequence, replacing the target gene. Correct integration is scored by Southern blot (here at the **pim-1** locus: the wild-type band is 3.6 kb, the targeted band 2.4 kb) and reported as **% of targeted clones**.

The result on the slide is stark:

* **WT:** 192/192 clones targeted (~100%)
* **Brca2-null cells + shPTIP** (two independent knockdowns): 0/96 and 0/96

Gene targeting is completely dependent on HR, so BRCA2-null cells cannot do it at all. The **PTIP knockdown** matters for the chemoresistance story below: knocking down PTIP restores **fork protection** in BRCA2-deficient cells, and this experiment shows that it does **not** restore **HR**. The two functions really are separable.

## Reporter assays: DR-GFP

The standard quantitative HR assay.

The **DR-GFP** cassette contains two defective copies of GFP: **SceGFP**, a GFP interrupted by an **I-SceI** recognition site, and **iGFP**, an internal fragment of GFP with no promoter.

* **I-SceI** is a homing endonuclease with an 18 bp recognition site, which does not occur in the mammalian genome. Expressing it (from **pCMV3xNLS-I-SceI**) makes exactly **one defined double-strand break**, in SceGFP.
* If the cell repairs that break by **HR**, using **iGFP** as the template (gene conversion), the I-SceI site is replaced by wild-type GFP sequence and the cell becomes **green**.
* If it repairs it by NHEJ, GFP stays broken.

Read out by **flow cytometry** (or microscopy): **% GFP-positive cells = HR efficiency**. The slide's −I-SceI / +I-SceI images and FACS plots are exactly this comparison. Knock down your gene of interest, and a drop in % GFP+ says it is needed for HR.

## Metaphase spread analysis

The cytogenetic readout of what unrepaired damage does to chromosomes. Cells are arrested in metaphase, spread, and scored for:

* **breaks**
* **gaps**
* **quadriradials** — four-armed "radial" chromosomes, produced when breaks on two different chromosomes are joined; the classic signature of HR deficiency (and of Fanconi anaemia cells)
* **multiple complex damage** — a shattered spread, seen when damage overwhelms the cell

---

# Exploiting HR and replication defects for cancer therapy

## Synthetic lethality

Two genes are **synthetically lethal** when losing either one alone is tolerated but losing both together kills the cell:

| Gene A | Gene B | Outcome |
|---|---|---|
| ✓ | ✓ | alive |
| ✗ | ✓ | alive |
| ✓ | ✗ | alive |
| ✗ | ✗ | **lethal** |

The therapeutic idea: if the **tumour** has already lost gene A (a mutation you cannot fix), give a drug that inhibits gene B. Tumour cells die; normal cells, which still have A, survive. The tumour's own driver lesion becomes its vulnerability, and the selectivity is genetic rather than a matter of dose.

Here **A = BRCA1/2 (HR)** and **B = PARP1 (single-strand break repair)**.

## PARP1

**PARP1** is the sensor of single-strand breaks. Its domain organization, from the slide:

| Region | Domains | Role |
|---|---|---|
| **DNA-binding domain** | ZF1, ZF2, NLS, ZF3 | Zinc fingers detect nicks and single-strand breaks; binding allosterically activates the enzyme |
| **Automodification domain** | BRCT | Accepts PAR chains on PARP1 itself |
| **Catalytic domain** | WGR, CD | Transfers ADP-ribose from NAD⁺ |

The reaction: PARP1 binds the damage, then consumes **NAD⁺** (releasing **nicotinamide**) to build **mono(ADP-ribose)** and long branched **poly(ADP-ribose) chains** on itself and on nearby proteins. PAR is a transient, highly negatively charged signal that **recruits repair factors to the site of damage**, and it is removed again by **PARG, ARH3 and OARD1**.

What the PAR signal is used for, from the slide:

* repair of **ssDNA nicks and breaks**
* repair of **bulky lesions**
* repair of **double-strand breaks**
* **stabilization of replication forks**
* **chromatin modifications**

In single-strand break repair specifically: PARP1 detects the lesion, PAR recruits the scaffold **XRCC1** with **PNKP**, **APTX** and **LIG3**, the ends are cleaned up, **Pol β/δ/ε** fills the gap (with **FEN1** and **PCNA** for the longer patch), and **LIG1/LIG3** ligates. PARP1 auto-PARylates until it is negatively charged enough to release itself from the DNA.

## PARP inhibitors

Small molecules that occupy the NAD⁺-binding site of the catalytic domain. The ones on the slide, all built around the same nicotinamide-mimicking core (drawn in red):

| Drug | Code |
|---|---|
| **Olaparib** (Lynparza) | AZD-2281 |
| Veliparib | ABT-888 |
| Niraparib | MK-4827 |
| Rucaparib | AG-014699 |
| Talazoparib | BMN-673 |
| E7016 | — |

They have two effects, and the second matters more than the first:

1. **Catalytic inhibition** — no PAR chains, so SSB repair is impaired.
2. **PARP trapping** — because auto-PARylation is what releases PARP1 from DNA, an inhibited PARP1 stays **stuck on the DNA** as a protein–DNA complex. A trapped PARP1 is itself a fork barrier. Trapping potency differs between the drugs (talazoparib ≫ niraparib ≈ olaparib ≈ rucaparib > veliparib) and tracks with cytotoxicity better than catalytic potency does.

## The mechanism of the synthetic lethality

The slide builds this up as a two-branch diagram:

**Top branch, PARP working.** A single-strand lesion at the replication fork is repaired by **PARP-dependent SSB/BER repair**, and **replication continues**.

**Bottom branch, PARP inhibited.** The single-strand break persists (and the trapped PARP1 sits on it). The advancing fork **runs into it**, and the fork **collapses → a one-ended DSB is induced**. Then:

* **Normal HR:** the one-ended break is repaired by HR, replication restarts, the cell lives.
* **Defective HR (BRCA1/2 mutant):** the break cannot be repaired accurately. Breaks accumulate, NHEJ mis-joins ends, and the cell **dies**.

That is the whole logic of the therapy: PARP inhibition converts a manageable single-strand lesion into a double-strand break that only HR can fix, and HR is precisely what the tumour has lost.

The evidence on the slides:

* **Survival curves:** BRCA-deficient cells (filled circles) lose viability at PARP inhibitor doses (NU1025, AG14361) that barely touch the controls — a difference of two orders of magnitude or more (Bryant *et al.*, *Nature* 2005, and its companion paper Farmer *et al.*).
* **"HOW? DNA damage?"** → **metaphase analysis**, showing breaks, gaps and **quadriradials** in the treated HR-deficient cells. The killing really is through unrepaired chromosomal damage.

## The clinical picture

The last three slides are one sentence in three frames:

1. A **BRCA1/2 mutation** appears in a cell.
2. HR loss plus a cooperating mutation → **tumour growth**.
3. **PARPi / cisplatin treatment** → the HR-deficient tumour cells are selectively killed.

Cisplatin works in the same way for the same reason: it makes interstrand crosslinks, whose repair requires HR, so HR-deficient tumours are also **platinum-sensitive**. Olaparib and its successors are now approved for BRCA-mutant ovarian, breast, pancreatic and prostate cancer, and the indication is increasingly written as **"HRD"** — homologous recombination deficiency from any cause (BRCA1/2, PALB2, RAD51 paralogs, *BRCA1* promoter methylation), the so-called **BRCAness** phenotype.

---

# Chemoresistance

Not covered in the slides, but it is the obvious next question, and it is where the lecturer's own work sits.

Tumours treated with PARP inhibitors or platinum eventually come back. The known escape routes:

* **Reversion mutations.** A second mutation in *BRCA1/2* restores the open reading frame (for example a compensating indel near the original frameshift). HR is restored, and the tumour is resistant to both PARPi and platinum. These reversions are detectable in circulating tumour DNA.
* **Loss of 53BP1–RIF1–Shieldin.** In *BRCA1*-mutant cells, the problem is that 53BP1 blocks resection with no BRCA1 to counteract it. Delete 53BP1 or Shieldin, and resection happens anyway — HR is partially restored without BRCA1. This is why the 53BP1/BRCA1 antagonism matters clinically.
* **Restored fork protection without restored HR.** In *BRCA2*-deficient cells, loss of **PTIP** (or CHD4, or PARP1 itself) prevents **MRE11** from being recruited to stalled forks. The nascent strands stop being degraded, the cells become resistant to cisplatin and PARP inhibitors — and yet, as the gene-targeting slide shows, **HR is still completely dead** (0/96 targeted clones). Fork protection alone is enough for chemoresistance (Ray Chaudhuri *et al.*, *Nature* 2016). This is the strongest argument that the two BRCA functions are genuinely separate, and it means HR assays alone are not sufficient to predict response.
* **Drug efflux.** Upregulation of **ABCB1/P-glycoprotein** pumps the inhibitor out; common in mouse models.
* **Target-level changes.** Mutations in *PARP1* that abolish trapping, or **PARG loss**, which restores enough PAR signalling to survive.

The practical consequence: resistance can arise either by **restoring HR** or by **restoring fork stability**, and the two need different second-line strategies. It also explains why combinations — with ATR, CHK1 or WEE1 inhibitors, which attack the replication stress response itself, or with POLQ inhibitors, which remove the mutagenic backup pathway — are where the field has gone next.
