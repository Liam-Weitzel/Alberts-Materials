---
title: Ch 12. Intracellular Organization and Protein Sorting
description: Nuclear pore complexes, the Ran-GTP cycle that gives nuclear transport its direction, NLS and NES signals, and what goes wrong when they fail.
date: 2026-09-16
tags: [mboc, ch12]
---

> **Session 6** of the *Molecular Biology of the Cell* course in the **Molecular Medicine master's at Erasmus MC**, given by **Andrea Conidi**.
>
> The exam asks about what was covered in the **lectures**, not the chapter as a whole, so this summary follows the slides.

Session 6 is one lecture across two chapters, and this is the second half. Chapter 12 in the book covers every sorting route in the cell: the ER, mitochondria, chloroplasts, peroxisomes. **The lecture takes one of them**, the nucleus, and goes through it properly. The outline slide lists five things:

1. **Nuclear pore complexes**
2. **Nuclear transport of ions, mRNAs and proteins**
3. **Diseases associated with nuclear transport defects**
4. **Techniques**
5. **Summary**

The first half of the session, membrane structure, is in [ch 10](#/chapter/ch10-membrane-structure).

---

# Why the nucleus needs a gate

DNA is kept apart from the rest of the cell by the **nuclear envelope**, which is two membranes rather than one: an **outer nuclear membrane** continuous with the ER, an **inner nuclear membrane** lined on the nuclear side by the **nuclear lamina**, and the **perinuclear space** between them. **Nuclear pore complexes** puncture both membranes at once, and transmembrane proteins link the lamina out to the cytoskeleton.

![The double nuclear envelope penetrated by nuclear pore complexes, with transmembrane proteins linking the nuclear lamina to the cytoskeleton, and a micrograph of the fibrous lamin meshwork underlying the inner membrane](assets/img/fig-12-54.png)

Separating the genome buys the cell the ability to process a transcript before anything translates it, which is the whole of chapter 6. The cost is that **everything the nucleus needs has to be brought in, and everything it makes has to be taken out**.

## Where this sits among the sorting routes

The lecture opens on the road map of protein traffic, with four transport modes colour-coded, and the nucleus-cytosol arrows boxed in red.

![A road map of protein traffic within a eukaryotic cell, with protein translocation in blue, gated transport in red, vesicular transport in green and engulfment in grey](assets/img/fig-12-10.png)

| Mode | Where it is used |
|---|---|
| **Protein translocation** | Cytosol into the ER, mitochondria, plastids, peroxisomes |
| **Gated transport** | **Cytosol to nucleus and back** |
| **Vesicular transport** | Between the ER, Golgi, endosomes, lysosomes and the cell surface |
| **Engulfment** | Cytosol into the peroxisome by wrapping |

Nuclear transport is the **gated** one, and from the book the distinction is physical: the nucleus and the cytosol are topologically continuous through the pore, so a cargo crosses it **already folded**, in one piece, with its partners still attached. A protein entering a mitochondrion has to be pulled through unfolded. Nothing is unfolded to enter a nucleus.

**The traffic is bidirectional.** The slide draws it with two arrows: **RNAs, proteins and ions** coming out, **proteins and ions** going in.

---

# The nuclear pore complex

![Slide 21: the nuclear pore complex in cross section with symmetric and asymmetric nucleoporins, cytoplasmic filaments, nuclear basket and the FG repeat diffusion barrier, beside an electron micrograph of pores in a nuclear envelope](assets/img/slide-6-21.png)

**Large multiprotein structures embedded in the nuclear envelope.** The slide's facts, in its order:

* Each NPC is built from **different nucleoporins** arranged with **octagonal cylindrical symmetry**: eight-fold, around a central channel. The count is **around 30 in yeast and more than 60 in higher organisms**.
* It has a **cytoplasmic ring and a nuclear ring**, each anchoring **filaments** that extend into their compartment. Those filaments are where transport factors and cargo **dock** before they go anywhere.
* It is **selective by size**. Molecules up to about **40 kDa diffuse freely**. RNAs, proteins and ribonucleoprotein complexes **above 40 kDa** need the regulated route.
* The selectivity is produced by **FG repeats**, phenylalanine-glycine repeats in the nucleoporins that line the channel. They **interact with transport receptors** to let cargo through.
* **Active transport is energy-dependent** and is mediated by the **Ran GTPase**, which is what gives the transport its **direction**.

> **A correction to the rough note.** The note records "~30-60 different nucleoporins" as one range. It is two numbers for two organisms: **~30 in yeast, >60 in higher organisms**.

## The FG repeats are the barrier

The rough note has the diffusion barrier being a **hydrogel**, and that is right, but it leaves out what the gel is made of. The FG repeat regions are **intrinsically disordered**: they are not folded domains but flexible chains, and they fill the channel with a tangled, weakly self-associating mesh. A bare macromolecule cannot get through a mesh like that. A **transport receptor can**, because it binds the FG repeats and locally dissolves the mesh as it moves.

![An import receptor with cargo binding FG repeats and locally dissolving the gel-like mesh to diffuse through the nuclear pore](assets/img/fig-12-59.png)

This also explains why the size limit is soft rather than sharp: a 40 kDa protein is not blocked by a wall, it is slowed by a mesh, and the larger it is, the slower it gets. The model is testable, and [[hlsmann-2012-permeability-reconstituted-nuclear]] tested it on a barrier rebuilt from FG domains alone.

## Where the energy goes

"Active transport" here does not mean the pore is a pump. The **pore does no work**: nothing is pushed through it, and cargo crosses by diffusion in both directions. What the cell pays for is the **asymmetry** that makes net movement go one way, and that asymmetry is the Ran-GTP gradient, which the next sections build.

---

# Three routes across the envelope

The organising slide of the whole second half. Three routes, distinguished by what travels and how.

![Slide 22: a nucleus with three routes marked, free diffusion of ions and small molecules, RanGTP-regulated transport of proteins with an NLS inward and an NES outward, and mRNA export by the mRNP pathway](assets/img/slide-6-22.png)

| Route | Cargo | Direction |
|---|---|---|
| **Diffusion** | Ions and small molecules, below about 40 kDa | Both ways, unregulated |
| **Ran-GTP regulated transport** | Proteins carrying an **NLS** or an **NES** | **Both**: NLS in, NES out |
| **mRNP pathway** | **mRNAs** | Out |

> **A correction to the rough note.** The note splits this the wrong way, with protein **export** by Ran-GTP and protein **import** by a separate "NLS pathway". There is one Ran-GTP regulated route and it runs **in both directions**: the NLS is the signal read on the way in, the NES the signal read on the way out, and the same Ran gradient powers both. The separate pathway is the **mRNP** one, and that is for mRNA, not protein.

---

# The mRNP pathway

An mRNA never travels naked. From the moment transcription starts it is bound by **RNA-binding proteins**, and it is that **messenger ribonucleoprotein particle**, the mRNP, that moves.

![Slide 23: the mRNP pathway, from transcription and splicing in the nucleus through export, to translation, localisation and degradation in the cytoplasm, with RNA-binding proteins bound throughout](assets/img/slide-6-23.png)

The slide follows one transcript all the way through: **transcription**, **splicing**, **export** across the envelope, then in the cytoplasm **translation**, **localisation** along the cytoskeleton, and eventually **degradation** by RNases. The protein coat changes at each step, and it is the coat, not the sequence, that determines what happens next. That connects directly to [ch 6](#/chapter/ch06-how-cells-read-the-genome), where the same point is made from the transcript's side: the proteins deposited during processing are a **record of what has been done** to the message, and export reads that record.

---

# Ran-GTP regulated transport

## Nuclear import

![Slide 24: the five steps of Ran-GTP regulated nuclear import, with importin binding NLS cargo in the cytosol, translocation through the pore, RanGTP displacing the cargo in the nucleus, and RanGAP recycling the importin in the cytosol](assets/img/slide-6-24.png)

1. Cargo proteins containing a **nuclear localisation signal (NLS)** are recognised by **importins**, the nuclear import receptors.
2. The **importin-cargo complex binds the nucleoporins** of the NPC and is carried into the nucleus.
3. **Ran-GTP binds the importin**, and that **releases the cargo** into the nucleus.
4. The **Ran-GTP-importin complex exits** the nucleus.
5. In the cytosol, **RanGAP hydrolyses Ran-GTP to Ran-GDP**, releasing the importin to do it again.

> **A correction to the rough note.** The note's last step reads "RanGTP hydrolyzes ran gtp". The hydrolysis is done by **RanGAP**, the GTPase-activating protein, and it happens in the **cytosol**. Ran does not fire itself.

## Nuclear export

![Slide 25: the five steps of Ran-GTP regulated nuclear export, with RanGTP required for exportin to bind NES cargo in the nucleus, translocation, RanGAP disassembling the complex in the cytosol, and RanGEF reloading Ran in the nucleus](assets/img/slide-6-25.png)

1. Proteins with a **nuclear export signal (NES)** are recognised by **exportins**, which **require Ran-GTP in order to bind cargo at all**.
2. The **exportin-cargo-Ran-GTP** complex leaves through the NPC.
3. In the cytoplasm, **RanGAP hydrolyses Ran-GTP to Ran-GDP**, the export complex falls apart, and the cargo is released.
4. **Exportin and Ran-GDP return** to the nucleus.
5. In the nucleus, **RanGEF converts Ran-GDP back to Ran-GTP**.

## One gradient, two directions

Import and export run on the same cycle, and the difference between them is a single inversion:

| | Import | Export |
|---|---|---|
| Receptor | Importin | Exportin |
| Ran-GTP does what to cargo binding | **Breaks it** | **Makes it possible** |
| Cargo is therefore released | In the **nucleus**, where Ran-GTP is | In the **cytosol**, where Ran-GTP is destroyed |

That is the whole trick, and it is the single most examinable idea in this half of the lecture. **RanGEF is in the nucleus** and **RanGAP is in the cytosol**, so Ran is GTP-bound inside and GDP-bound outside. A receptor whose cargo grip is switched by Ran-GTP therefore **lets go in exactly one compartment**, and which compartment that is depends only on whether Ran-GTP opens the grip or closes it.

![Ran GAP in the cytosol and Ran GEF bound to chromatin in the nucleus, creating a Ran-GDP cytosol and a Ran-GTP nucleus, and Ran-GTP causing an import receptor to release its cargo](assets/img/fig-12-60.png)

Direction is not built into the pore, and it is not built into the receptor. It is built into the **spatial separation of two enzymes**, and the GTP that RanGEF spends is what maintains that separation against the diffusion constantly trying to erase it.

![Nuclear import and nuclear export both running on the Ran GTPase cycle, with Ran-GTP in the nucleus and Ran-GDP in the cytosol setting the direction of each](assets/img/fig-12-61.png)

---

# NLS and NES

## Where a protein ends up is written into its sequence

Four arrangements, four outcomes:

| Signals carried | Where the protein is found |
|---|---|
| One **NLS** | Nucleus |
| Two **NLS** | Nucleus |
| One **NES** | Cytoplasm |
| **NLS and NES** | **Shuttling** between the two |

The last row is the interesting one. A protein with both signals is not confused; it is **continuously moving in both directions**, and its steady-state distribution is set by which signal is currently being read. Mask the NLS and it accumulates outside; mask the NES and it accumulates inside. That is how a transcription factor can be held in the cytoplasm until a signal arrives, and it is the mechanism behind a large part of signal transduction.

## What the two signals look like

![Slide 26: NLS and NES, with the four signal arrangements and their outcomes, the classification of transport signals into classical and non-classical NLS and hydrophobic NES with consensus sequences, the ZEB2 gene and protein with a nuclear/cytoplasmic western blot, and a table comparing NLS with NES](assets/img/slide-6-26.png)

| Feature | NLS | NES |
|---|---|---|
| **Conserved domain cluster** | **Basic** | **Hydrophobic** |
| **Function** | Import to the nucleus | Export from the nucleus |
| **Receptor** | Importins | Exportins |
| **Activity** | Active in the **cytoplasm** | Active in the **nucleus** |

The slide also gives the signals themselves. **Classical NLS** comes in two shapes: **monopartite**, a single run of basic residues such as `PKKKRKV`, and **bipartite**, two basic clusters separated by a spacer, `KR-10aa-KKKL`. **Non-classical** NLS includes the **PY-NLS**, `PRVRY-NPYTTRP`. The **NES** consensus is **Φ-X₂₋₃-Φ-X₂₋₃-Φ-X-Φ**, where **Φ is L, I, V, F or M** and X is anything, as in `LPPLERLTL`.

> **A correction to the rough note.** The note says the NLS is a known sequence while the NES is deduced from properties rather than sequence. The NES does have a consensus, and the slide prints it. The real difference is that the NLS consensus is a **cluster of specific basic residues**, which is easy to spot, while the NES consensus is a **spacing of any of five hydrophobic residues**, which matches far too much of the proteome to be a reliable predictor on its own.

The bottom row of the table, **where each signal is active**, is not a separate fact. It is the Ran gradient again: the importin grips its NLS in the cytoplasm and lets go inside, the exportin can only grip its NES inside and lets go out.

## ZEB2 as a worked example

The lecturer's own protein. **ZEB2** is a multidomain transcription factor, and the slide lays its gene out against its protein with every domain marked. A **nuclear versus cytoplasmic western blot** then shows where it actually is: Zeb2 is overwhelmingly in the **nuclear extract**, while **VCP**, the control, is in the **cytoplasmic extract**. The conclusion on the slide is one line: **the transcription factor Zeb2 is mainly localised in the nucleus**.

The point of running a second protein is that a fractionation with no controls proves nothing. VCP appearing where it should is what makes Zeb2's distribution interpretable rather than an artefact of how the cells were lysed.

---

# When nuclear transport fails

## Four examples

![Examples of signal sequences directing proteins to the nucleus, out of the nucleus, to mitochondria, to plastids, to peroxisomes, to the ER and back to the ER](assets/img/fig-12-13.png)

A signal sequence is a short stretch of residues, so a **point mutation is enough to destroy it**, and the protein is then made perfectly well and delivered to the wrong compartment. The slide's four cases all work that way.

| Protein | Mechanism | Consequence | Disease |
|---|---|---|---|
| **SRY** | Mutation of NLS | Loss of nuclear localisation | Swyer syndrome (gonadal dysgenesis) |
| **FOXP2** | Mutation of NLS | Loss of nuclear localisation | Speech-language disorder, with intellectual disability |
| **FUS** | Mutation of NLS | **Cytoplasmic aggregates** | ALS, frontotemporal dementia |
| **FOXO** | Mutation of NLS, and post-translational modifications | Cytoplasmic mislocalisation | Cancer |

Three of the four are transcription factors, which is not a coincidence: a transcription factor that cannot reach DNA is a **complete loss of function** no matter how well it folds. FUS is the one that fails differently. Its mislocalised protein does not merely fail to work, it **aggregates in the cytoplasm**, so the defect is a gain of something toxic rather than a loss.

FOXO is worth reading twice, because its mechanism row lists **PTMs** alongside mutation. That is the normal, regulated version of the same switch: phosphorylation of a FOXO factor masks its import and drives it out of the nucleus. The disease is the regulation being stuck on.

## Neurodegeneration

![Slide 28: a map of nucleo-cytoplasmic transport defects in neurodegenerative disease, with mRNA accumulation and impaired protein export on the nuclear side, impaired protein import on the cytoplasmic side, and protein deposits in both compartments](assets/img/slide-6-28.png)

The slide is a map rather than a list to learn. It sorts a large number of neurodegenerative diseases into **four failure modes**, and the four are the thing to take away:

* **Impaired protein import**, so nuclear proteins are stranded in the cytoplasm.
* **Impaired protein export**, so cytoplasmic proteins are stranded in the nucleus.
* **mRNA accumulation** in the nucleus, because export has failed.
* **Protein deposits**, on both sides of the envelope.

The same diseases keep appearing under more than one heading, which is the real message: once transport is disturbed, the failure is not confined to one cargo. ALS, frontotemporal dementia, Huntington's disease, the tauopathies and Alzheimer's all show up in several boxes at once.

## FOXP2

![Slide 29: FOXP2 isoform I with its domains and the NLS marked in the FOX domain, three variants, immunofluorescence of wild-type and R553H protein, and a nuclear versus cytoplasmic western blot of all four](assets/img/slide-6-29.png)

The single case followed all the way to data. **Mutations affecting the NLS of FOXP2 result in impaired learning, disruption of receptive linguistic skills and general cognition.**

The NLS sits inside the FOX domain, and the slide shows variants that hit it and variants that do not. Two experiments, agreeing:

* **Immunofluorescence.** Wild-type FOXP2 overlays the DAPI-stained nuclei exactly. The **NLS variant is in the cytoplasm**, in a pattern that outlines the whole cell rather than the nucleus.
* **Fractionation.** The wild type and the variant outside the NLS are in the **nuclear** fraction. The **NLS variant switches to the cytoplasmic** fraction. The truncation, which removes the NLS entirely, is only detectable in the cytoplasmic fraction on an overexposed blot.

Two methods, one conclusion, and they are worth having as a pair: the imaging shows **where the protein is in a cell**, the blot shows **how much is in each compartment**. Neither is sufficient on its own, and a question asking how you would demonstrate mislocalisation wants both.

---

# Doing it in the lab

## Sending a protein where you want it

![Slide 30: the same gene expressed as an NLS-gene-GFP fusion giving nuclear green fluorescence, and as a gene-NES-GFP fusion giving cytoplasmic green fluorescence](assets/img/slide-6-30.png)

Signals are **transferable**, and that makes them a tool. Take a gene, fuse it to **GFP** so you can see the product, and add:

* an **NLS** to overexpress the protein **in the nucleus**;
* an **NES** to overexpress it **in the cytoplasm**.

The images on the slide show exactly that: green confined to the nuclei on one side, green filling the cytoplasm and excluded from the nuclei on the other. This is how you ask what a protein does in one compartment when it normally visits both. Force it to one side and see which activity you lose.

## Nuclear/cytoplasmic fractionation

![Slide 31: the nuclear and cytoplasmic fractionation protocol, from hypotonic lysis and centrifugation to separate the cytoplasmic fraction from the nuclear pellet, through hypertonic lysis of that pellet, to SDS-PAGE of nuclear and cytoplasmic extracts](assets/img/slide-6-31.png)

The biochemical counterpart, and the method behind both blots above.

1. **Lyse the cells in a hypotonic buffer.** Water enters, the cells swell, and the plasma membrane gives way. The **nuclei stay intact**, which is the point of doing it gently.
2. **Centrifuge.** The **supernatant is the cytoplasmic fraction**; the **pellet is nuclei**.
3. **Lyse the pellet in a hypertonic buffer**, then incubate, homogenise and centrifuge again. This supernatant is the **nuclear proteins**; what pellets is nuclear membranes and organelles.
4. **Run both on SDS-PAGE**, as an **NE** (nuclear extract) and a **CE** (cytoplasmic extract) lane, and blot for the protein of interest.

The two buffers are chosen for opposite reasons, and that contrast is the part to remember. The first is **hypotonic** to burst one membrane and leave another standing. The second is **hypertonic**, because nuclear proteins are bound to chromatin and it takes **high salt** to compete them off.

---

# Summary

The lecturer's closing slide:

* **Nuclear pore complexes are the gate-keepers** at the nuclear/cytoplasmic interface.
* **Ions and small molecules below 40 kDa diffuse freely** in and out of the nucleus.
* **Trafficking of RNAs, proteins and large molecules is regulated** by the NPCs.
* **NLS and NES sequences regulate a protein's subcellular localisation.**
* **Neurodegenerative disorders and developmental defects** can be caused by defects in the transport system.
