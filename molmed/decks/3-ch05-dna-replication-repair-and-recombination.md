---
title: Session 3. DNA Replication, Repair and Recombination
description: Revision for Arnab Ray Chaudhuri's lecture. Built from the slides, with the replication stress and BRCA half where the weight lies.
tags: [molmed, session-3, ch5]
---

Q: This topic divides into two halves. What is the organising question of each?
A: First, **how does a cell copy its genome accurately**: the structure of DNA, the enzymes involved, the anatomy of a fork and how fidelity is achieved. Second, **what happens when that fails**: the causes of replication stress, how homologous recombination rescues a broken fork, and how a tumour's inability to do so is turned into a treatment.

Read more: [The structure of DNA](#/chapter/ch05-dna-replication-repair-and-recombination/the-structure-of-dna)
Tags: type/why, core

---

Q: Which two features of the DNA double helix does everything at a replication fork depend on?
A: That the two strands are **antiparallel**, one running 5' to 3' against the other's 3' to 5'; and that they are **complementary**, A with T and G with C. **Complementarity** is why either strand can serve as a template; **antiparallelism** is why one new strand is built continuously and the other in pieces. The experiment showing replication is semiconservative is [[meselson-1958-replication-dna-escherichia]].

![The DNA double helix with its dimensions and the A-T and G-C base pairs](assets/img/slide-3-11.png)

Read more: [Complementary base pairing](#/chapter/ch05-dna-replication-repair-and-recombination/complementary-base-pairing)
Tags: type/figure, structure, core

---

Q: What job does each component at a replication fork do?
A: **DNA helicase** unwinds the parental helix; **single-strand DNA-binding protein** stops the exposed strands re-pairing; **DNA primase** lays down an **RNA primer**, because a DNA polymerase cannot start a chain from nothing; **DNA polymerase** extends from that primer, held onto the template by a **sliding clamp**. On the lagging strand each separately primed stretch is an **Okazaki fragment**.

![A replication fork with helicase, primase, polymerases, clamp and single-strand binding protein](assets/img/slide-3-13.png)

Read more: [Who is at the fork](#/chapter/ch05-dna-replication-repair-and-recombination/who-is-at-the-fork)
Tags: type/figure, fork, core

---

Q+: The lagging-strand template is often drawn looped back on itself. Why?
A: So that **both polymerases sit in one complex and travel in the same direction** as the fork, even though the lagging strand is synthesized backwards along its template. This is what the "replication fork coupling" animation shows.

Read more: [The trombone model](#/chapter/ch05-dna-replication-repair-and-recombination/the-trombone-model)
Tags: type/why, fork, core

---

Q+: Why does the lagging strand need a new RNA primer for every fragment, while the leading strand needs one?
A: Because synthesis is always **5' to 3'** and the lagging template is exposed **in the wrong direction**, so each new stretch has to be started afresh as the fork opens. The leading strand runs continuously toward the fork, so one priming event is enough.

Read more: [Leading and lagging strands](#/chapter/ch05-dna-replication-repair-and-recombination/leading-and-lagging-strands)
Tags: type/why, core

---

Q: Which of these are causes of replication stress?
- [x] DNA lesions
- [x] Ribonucleotide incorporation
- [x] DNA secondary structure and repetitive DNA
- [x] Transcription and RNA-DNA hybrids
- [x] Limiting nucleotides
- [ ] Too many origins of replication licensed in G1
A: Licensing in G1 is normal and protective. The listed causes are handled respectively by repair and damage tolerance, **RNase H**, helicases such as **BLM and WRN**, RNA processing machinery with topoisomerases, and **regulation of origin firing**. Fragile sites and oncogene-induced stress are the sixth entry.

![The causes of DNA replication stress, each with the factor that deals with it](assets/img/slide-3-15.png)

Read more: [What a fork runs into](#/chapter/ch05-dna-replication-repair-and-recombination/what-a-fork-runs-into)
Tags: type/figure, type/discriminate, stress, core

---

Q: Which three inputs converge to cause replication stress?
A: **Shortage of replication factors or dNTPs**; **oncogenic stress** such as **MYC or RAS**, with transcriptome collision; and **DNA-bound obstacles**, meaning DNA-bound proteins, DNA lesions and DNA secondary structures.

![The consequences of replication stress, from stalled forks through ATR and CHK1 to collapse](assets/img/slide-3-16.png)

Read more: [Oncogene-induced replication stress](#/chapter/ch05-dna-replication-repair-and-recombination/oncogene-induced-replication-stress)
Tags: type/figure, stress, core

---

Q+: On the same figure, what has happened at the fork itself, and which single structure is the signal?
A: The **polymerase is blocked while the MCM helicase keeps unwinding**, so the two uncouple and **single-stranded DNA** accumulates. Coated by **RPA**, that ssDNA is the signal.

Read more: [Consequences: from stalled to collapsed](#/chapter/ch05-dna-replication-repair-and-recombination/consequences-from-stalled-to-collapsed)
Tags: type/figure, type/why, stress, core

---

Q+: What assembles on the RPA filament, and what does it phosphorylate?
A: **ATR with ATRIP**, activated by **TopBP1**. ATR phosphorylates **CHK1**, the diffusible effector that carries the signal away from the fork and turns a local problem into a cell-wide checkpoint; **DNA-PK** and **WEE1** feed into the same response.

Read more: [Consequences: from stalled to collapsed](#/chapter/ch05-dna-replication-repair-and-recombination/consequences-from-stalled-to-collapsed)
Tags: stress, core

---

Q+: Name the five outputs of the replication stress response.
A: **S-phase checkpoint activation**; **control of new origin firing**; **replication fork stabilisation and restart**; **prevention of fork collapse**; and **DNA repair**.

Read more: [Consequences: from stalled to collapsed](#/chapter/ch05-dna-replication-repair-and-recombination/consequences-from-stalled-to-collapsed)
Tags: stress, core

---

Q+: What happens if that response fails?
A: The stalled fork becomes a **collapsed fork**: **endonucleases** cut the fork structure and produce a **DNA double-strand break**.

Read more: [Consequences: from stalled to collapsed](#/chapter/ch05-dna-replication-repair-and-recombination/consequences-from-stalled-to-collapsed)
Tags: stress, core

---

Q: Why is a one-ended double-strand break at a collapsed fork more dangerous than an ordinary two-ended break?
A: Because there is **no second end to ligate to**. End joining has nothing legitimate to do with it, and if it acts anyway it joins the end to some other break, giving **translocations**. Copying the information back from the **sister chromatid** by homologous recombination is the only clean route.

Read more: [Why one unrepaired double-strand break can kill the cell](#/chapter/ch05-dna-replication-repair-and-recombination/why-one-unrepaired-double-strand-break-can-kill-the-cell)
Tags: type/why, core

---

Q: Homologous recombination repairs both a two-ended break and a broken replication fork. How do the two situations differ?
A: The first is a **two-ended break repaired by synthesis-dependent strand annealing (SDSA)**: both ends are present, and after resection the invading end is extended and annealed back to the other end. The second is a **broken replication fork**, a **one-ended** break, where the invading end **re-establishes a replication fork** instead.

Read more: [Two situations, two animations](#/chapter/ch05-dna-replication-repair-and-recombination/two-situations-two-animations)
Tags: type/discriminate, hr, core

---

Q: Put the steps of homologous recombination in order, with the factor acting at each.
A: **DSB**; **DSB binding by MRN (MRE11-RAD50-NBS1)**; **end resection by EXO1 and BLM-DNA2**; **RPA binding and ATR-ATRIP activation**; **RAD51 loading by BRCA1-PALB2-BRCA2**; **invasion and D-loop extension by a DNA polymerase**; **double Holliday junction**; **resolution by resolvases**.

![The homologous recombination pathway from break to resolution](assets/img/slide-3-19.png)

Read more: [The pathway, step by step](#/chapter/ch05-dna-replication-repair-and-recombination/the-pathway-step-by-step)
Tags: type/figure, type/sequence, hr, core

---

Q+: Resection leaves which end protruding, and why does that matter?
A: The **3' end**. Resection chews back the **5'-ended** strands, leaving **3' single-stranded overhangs**, and a 3' end is what a **DNA polymerase can extend** once it has invaded the sister duplex.

Read more: [The pathway, step by step](#/chapter/ch05-dna-replication-repair-and-recombination/the-pathway-step-by-step)
Tags: type/why, hr, core

---

Q+: RPA binds that overhang first, then has to be replaced. By what, and by whom?
A: By **RAD51**, delivered by **BRCA1-PALB2-BRCA2**. RPA stiffens the ssDNA and signals through ATR, but only a **RAD51 filament** can search the sister chromatid for homology and invade it.

Read more: [The pathway, step by step](#/chapter/ch05-dna-replication-repair-and-recombination/the-pathway-step-by-step)
Tags: hr, core

---

Q+: Where in that pathway does BRCA1 act, and where does BRCA2?
A: **BRCA1 early, at end resection**; **BRCA2 late, at strand invasion**, loading RAD51 with PALB2 as the bridge between them.

Read more: [Where they act in HR](#/chapter/ch05-dna-replication-repair-and-recombination/where-they-act-in-hr)
Tags: type/discriminate, brca, core

---

Q: Three statements about the BRCA proteins look contradictory when put side by side. What are they?
A: **BRCA1/2 mutations promote tumour growth.** **BRCA1/2 deletion in primary cells inhibits growth.** **Loss of homologous recombination is believed to be the major catalyst for both.**

Read more: [What the lecture asserts](#/chapter/ch05-dna-replication-repair-and-recombination/what-the-lecture-asserts)
Tags: brca, core

---

Q+: How can the same loss both promote a tumour and kill a cell?
A: Because a normal cell with HR loss accumulates breaks and **dies or arrests**, while a cell that has **also lost its checkpoint**, typically **p53**, survives the same damage. The genome instability that would have been lethal then becomes the tumour's engine.

Read more: [How a tumour arises anyway](#/chapter/ch05-dna-replication-repair-and-recombination/how-a-tumour-arises-anyway)
Tags: type/why, brca, clinical, core

---

Q: BRCA1/2 has a second job besides homologous recombination. What is it, and what attacks the fork without it?
A: **Protecting replication forks from nuclease-mediated degradation.** Without BRCA1/2, **MRE11** degrades the **nascent strands** at the fork.

Read more: [A second job: protecting stalled forks](#/chapter/ch05-dna-replication-repair-and-recombination/a-second-job-protecting-stalled-forks)
Tags: brca, core

---

Q+: What are the two consequences of that degradation?
A: **Loss of viability** and **chemotherapy sensitivity**.

Read more: [A second job: protecting stalled forks](#/chapter/ch05-dna-replication-repair-and-recombination/a-second-job-protecting-stalled-forks)
Tags: brca

---

Q+: Draw the "multiple functions of BRCA1/2" diagram in words, in both its versions.
A: **BRCA1/2** supports two arms, **homologous recombination** and **replication fork stability**, which together give **viability and genome stability**. In the second version the same diagram reads **cell death** and **genome instability**. References: Moynahan et al. 1999 and Schlacher et al. 2011, both from the Jasin lab.

![BRCA1/2 supporting homologous recombination and replication fork stability](assets/img/slide-3-32.png)

Read more: [A second job: protecting stalled forks](#/chapter/ch05-dna-replication-repair-and-recombination/a-second-job-protecting-stalled-forks)
Tags: type/figure, brca, core

---

Q: The techniques tree has three branches. What are they, and what does each deliver?
A: **Electron microscopy:** structural visualization of replication intermediates. **Cell biology:** single-molecule analysis of DNA replication, and immunofluorescence of replication proteins. **Biochemistry and proteomics:** analysis of protein dynamics at replication forks.

Read more: [Techniques used to study replication and recombination](#/chapter/ch05-dna-replication-repair-and-recombination/techniques-used-to-study-replication-and-recombination)
Tags: techniques, core

---

Q: How are fragile replication intermediates preserved for electron microscopy?
A: With **trimethyl psoralen and 366 nm light**, which **crosslinks the two strands inside living cells**, so the structure is frozen as it was before extraction and **EM spreading**. Protocol in Zellweger and Lopes, *Meth. Mol. Biol.* 2017.

![In vivo psoralen crosslinking followed by EM spreading of replication intermediates](assets/img/slide-3-37.png)

Read more: [Electron microscopy of replication intermediates](#/chapter/ch05-dna-replication-repair-and-recombination/electron-microscopy-of-replication-intermediates)
Tags: type/figure, techniques, core

---

Q+: Why is in vivo crosslinking necessary at all?
A: Because branched replication intermediates are **fragile** and would **collapse or rearrange** during extraction and spreading. Crosslinking makes the observed structure evidence about the cell rather than about the preparation.

Read more: [Electron microscopy of replication intermediates](#/chapter/ch05-dna-replication-repair-and-recombination/electron-microscopy-of-replication-intermediates)
Tags: type/why, techniques, core

---

Q: In the DNA fibre assay, what are the two labels and what is done between them?
A: A **CldU pulse**, then a **wash and the insult** (**UVC** in this protocol), then an **IdU pulse**. The cells are lysed on a slide and the DNA is **stretched into single fibres**, stained with antibodies that tell the two labels apart, and imaged. Because the labels went on in a known order, the **length and order of the tracks report what each individual fork did**.

![The DNA fibre protocol, from CldU and IdU pulses to spread fibres and their patterns](assets/img/slide-3-39.png)

Read more: [DNA fibre assay (single-molecule analysis of replication)](#/chapter/ch05-dna-replication-repair-and-recombination/dna-fibre-assay-single-molecule-analysis-of-replication)
Tags: type/figure, techniques, core

---

Q+: Match the fibre patterns to what the fork did.
A: **First label continued by second label: an ongoing fork.** **Second label on both ends of a first-label track: an origin that fired during the first pulse, running bidirectionally.** **Second label only: a newly fired origin.** **Two tracks running into each other: replicon merging.** **First label only: termination, or a fork that stopped.**

Read more: [DNA fibre assay (single-molecule analysis of replication)](#/chapter/ch05-dna-replication-repair-and-recombination/dna-fibre-assay-single-molecule-analysis-of-replication)
Tags: type/discriminate, techniques, core

---

Q+: Which measurement from this assay reports fork protection, and how?
A: Comparing the **second tract to the first** in the same fibre. If nascent strands are being **degraded**, as in BRCA-deficient cells, the ratio falls below one. The assay also gives fork speed, fork symmetry, origin firing and restart efficiency.

Read more: [DNA fibre assay (single-molecule analysis of replication)](#/chapter/ch05-dna-replication-repair-and-recombination/dna-fibre-assay-single-molecule-analysis-of-replication)
Tags: type/apply, techniques, core

---

Q: What does a RAD51 immunofluorescence experiment show, and what is a focus?
A: **Untreated nuclei are nearly blank; stressed nuclei are full of bright RAD51 foci.** A focus is the microscopic shadow of a **nucleoprotein filament** assembled at a site of damage.

![RAD51 foci in untreated cells and after replication stress](assets/img/slide-3-40.png)

Read more: [Immunofluorescence of repair proteins](#/chapter/ch05-dna-replication-repair-and-recombination/immunofluorescence-of-repair-proteins)
Tags: type/figure, techniques, core

---

Q+: After ionizing radiation, wild-type cells form RAD51 foci and BRCA1/2-deficient cells form none. Does that mean the deficient cells have no damage?
- [ ] Yes, they repaired it faster
- [x] No, the damage is there but RAD51 is never loaded
- [ ] No, the antibody fails in those cells
A: The break, the resection and the RPA coating all still happen. What fails is the **BRCA-dependent handover of the ssDNA to RAD51**, which is why the foci assay is a functional read-out of HR and is now used clinically as a biomarker.

Read more: [Immunofluorescence of repair proteins](#/chapter/ch05-dna-replication-repair-and-recombination/immunofluorescence-of-repair-proteins)
Tags: type/misconception, techniques, core

---

Q: How does the iPOND-style proteomics experiment work?
A: Grow one population in **light** medium (untreated) and one in **heavy** SILAC medium (**HU**-treated), label nascent DNA with **EdU**, **pull down the labelled forks**, and compare by **quantitative mass spectrometry**. It tells you which proteins are at a stressed fork without having to guess what to blot for.

![SILAC labelling, EdU pulldown of replication forks and quantitative mass spectrometry](assets/img/slide-3-44.png)

Read more: [Biochemistry and proteomics: proteomes at replication forks](#/chapter/ch05-dna-replication-repair-and-recombination/biochemistry-and-proteomics-proteomes-at-replication-forks)
Tags: type/figure, techniques, core

---

Q: Gene targeting succeeds in every wild-type clone, in none at all from Brca2-null cells, and knocking down PTIP does not rescue it. What does that show?
A: That gene targeting depends **entirely on homologous recombination**, and that **PTIP knockdown restores fork protection without restoring HR**. The two jobs of BRCA2 are therefore **genuinely separable**: a cell can be rescued for one and left defective in the other.

![Gene targeting efficiency at the pim-1 locus in wild-type and Brca2-null cells](assets/img/slide-3-48.png)

Read more: [Gene targeting efficiency](#/chapter/ch05-dna-replication-repair-and-recombination/gene-targeting-efficiency)
Tags: type/figure, type/apply, brca, core

---

Q: How does the DR-GFP reporter measure homologous recombination?
A: The cassette holds **SceGFP**, a GFP interrupted by an **I-SceI site**, and **iGFP**, a promoterless internal fragment. Expressing **I-SceI** makes **one defined double-strand break**; if the cell repairs it by **HR using iGFP as template**, the cell turns **green**.

![The DR-GFP reporter cassette and the I-SceI expression construct](assets/img/slide-3-49.png)

Read more: [Reporter assays: DR-GFP](#/chapter/ch05-dna-replication-repair-and-recombination/reporter-assays-dr-gfp)
Tags: type/figure, techniques, core

---

Q+: Why use I-SceI rather than a drug or radiation to make the break?
A: Because its **18 bp recognition site does not occur in the mammalian genome**, so it makes **exactly one break at a known place**. Radiation makes many breaks of unknown position, which cannot be scored as a clean repair event.

Read more: [Reporter assays: DR-GFP](#/chapter/ch05-dna-replication-repair-and-recombination/reporter-assays-dr-gfp)
Tags: type/why, techniques, core

---

Q+: What are the two conditions compared in the images, and what does each show?
A: **Minus I-SceI**, essentially no green cells, the background; **plus I-SceI**, a population of green cells whose percentage is the **HR efficiency**. Knock down a gene of interest and a drop in % GFP-positive says it is needed for HR.

Read more: [Reporter assays: DR-GFP](#/chapter/ch05-dna-replication-repair-and-recombination/reporter-assays-dr-gfp)
Tags: techniques

---

Q: Define synthetic lethality, using the four combinations of two genes.
A: Losing **gene A alone: alive.** Losing **gene B alone: alive.** Losing **both: lethal.** The therapeutic use follows: if the tumour has already lost A, a drug against B kills the tumour and spares normal cells.

Read more: [Synthetic lethality](#/chapter/ch05-dna-replication-repair-and-recombination/synthetic-lethality)
Tags: parp, core

---

Q: PARP1 has to do three separate things at a break. What are they, and how is the protein built to do them?
A: **Recognise the damaged DNA**, through a **DNA-binding region** built from zinc fingers; **modify itself**, through an **automodification region**; and **build the PAR signal**, through a **catalytic domain**. One polypeptide, three modules, used in that order.

![The domain organization of PARP1 and the synthesis of poly(ADP-ribose) chains](assets/img/slide-3-62.png)

Read more: [PARP1](#/chapter/ch05-dna-replication-repair-and-recombination/parp1)
Tags: type/figure, parp, core

---

Q+: Once PARP1 recognizes damage, what does it build and what does it consume?
A: **Mono(ADP-ribose)** and long **poly(ADP-ribose) chains**, consuming **NAD⁺** and releasing **nicotinamide**. The chains are removed again by **PARG, ARH3 and OARD1**.

Read more: [PARP1](#/chapter/ch05-dna-replication-repair-and-recombination/parp1)
Tags: parp, core

---

Q+: What is the PAR signal used for? Name the five processes.
A: **Repair of ssDNA nicks and breaks**; **repair of bulky lesions**; **repair of double-strand breaks**; **stabilization of replication forks**; **chromatin modifications**.

Read more: [PARP1](#/chapter/ch05-dna-replication-repair-and-recombination/parp1)
Tags: parp, core

---

Q: The PARP inhibitors in clinical use are all built around the same chemical core. Why would that be?
A: Because they all have to fit **the same pocket**, the catalytic site that normally binds **NAD⁺**. A shared core is the signature of a family of **competitive inhibitors of one active site**, with the rest of each molecule tuning potency and behaviour in the body. Olaparib is the best known of them.

![The structures of six PARP inhibitors built around a common core](assets/img/slide-3-63.png)

Read more: [PARP inhibitors](#/chapter/ch05-dna-replication-repair-and-recombination/parp-inhibitors)
Tags: type/figure, type/why, parp, core

---

Q: Trace both branches of the synthetic lethality mechanism.
A: A **single-strand lesion at a replication fork** is normally repaired by **PARP-dependent SSB/BER repair**, and **replication continues**. With a **PARP inhibitor** the lesion persists, the fork **collapses** and a **double-strand break** is induced. With **normal HR** that break is repaired; with **defective HR**, damage accumulates and the **cell dies**.

![Mechanism for synthetic lethality between BRCA and PARP deficiency](assets/img/slide-3-72.png)

Read more: [The mechanism of the synthetic lethality](#/chapter/ch05-dna-replication-repair-and-recombination/the-mechanism-of-the-synthetic-lethality)
Tags: type/figure, type/sequence, parp, core

---

Q+: On that logic, which patients should respond to a PARP inhibitor, and which cells in the same patient are spared?
A: Tumour cells that are **HR-deficient**, typically **BRCA1/2 mutant**, respond. The patient's normal tissue is **heterozygous and HR-proficient**, so it repairs the induced breaks and survives. The selectivity is genetic rather than a matter of dose.

Read more: [The mechanism of the synthetic lethality](#/chapter/ch05-dna-replication-repair-and-recombination/the-mechanism-of-the-synthetic-lethality)
Tags: type/apply, clinical, core

---

Q: In a clonogenic survival experiment with a PARP inhibitor, what distinguishes BRCA-deficient cells from controls?
A: The BRCA-deficient cells **lose viability at doses the controls barely notice**, differing by one to two orders of magnitude in surviving fraction. The whole curve is **shifted rather than reshaped**, which is what a genetic sensitivity looks like as opposed to general toxicity.

![Survival curves for BRCA-deficient and control cells treated with two PARP inhibitors](assets/img/slide-3-64.png)

Read more: [PARP inhibitors](#/chapter/ch05-dna-replication-repair-and-recombination/parp-inhibitors)
Tags: type/figure, parp, core

---

Q+: How would you show that the killing actually runs through DNA damage, and what is scored in that experiment?
A: **Metaphase analysis**, scoring **breaks**, **gaps**, **quadriradials** and **multiple complex damage**. The quadriradials are the signature of failed homologous recombination, and they confirm that the killing runs through unrepaired chromosomal damage.

![Metaphase spreads scored for breaks, gaps, quadriradials and complex damage](assets/img/slide-3-66.png)

Read more: [Metaphase spread analysis](#/chapter/ch05-dna-replication-repair-and-recombination/metaphase-spread-analysis)
Tags: type/figure, techniques, core

---

Q: Tell the clinical story in three frames, from mutation to treatment.
A: A **BRCA1/2 mutation** arises; **tumour growth** follows; **PARPi or cisplatin treatment** kills the HR-deficient tumour cells selectively. The section title is "Homologous recombination and replication stress in health and tumorigenesis".

Read more: [The clinical picture](#/chapter/ch05-dna-replication-repair-and-recombination/the-clinical-picture)
Tags: clinical, core

---

Q+: Why does cisplatin work on the same tumours as a PARP inhibitor?
A: Because it makes **interstrand crosslinks**, whose repair also requires **homologous recombination**. The same deficiency that makes the tumour PARPi-sensitive makes it platinum-sensitive.

Read more: [Chemoresistance](#/chapter/ch05-dna-replication-repair-and-recombination/chemoresistance)
Tags: type/apply, clinical, core

---

Q: **Exam-shaped question.** "Explain why PARP inhibitors selectively kill BRCA-mutant tumour cells."
A: A checklist for marks:

| Point | Content |
|---|---|
| PARP1's job | Sensor of single-strand breaks; builds PAR chains from NAD⁺ to recruit SSB and base excision repair |
| Effect of inhibition | Single-strand lesions persist into S phase |
| At the fork | The advancing fork meets the lesion, collapses, and a one-ended double-strand break is formed |
| Normal cell | HR repairs that break using the sister chromatid, so replication restarts and the cell lives |
| BRCA-mutant tumour cell | No RAD51 loading, so no HR; breaks accumulate and the cell dies |
| Synthetic lethality | Either defect alone is survivable, the combination is not |
| Evidence | Survival curves showing BRCA-deficient cells die at doses controls tolerate; metaphase spreads showing breaks, gaps and quadriradials |
| Selectivity | The patient's normal cells are heterozygous and HR-proficient |
| Related agent | Cisplatin makes crosslinks that also need HR, so the same tumours are platinum-sensitive |

Read more: [The mechanism of the synthetic lethality](#/chapter/ch05-dna-replication-repair-and-recombination/the-mechanism-of-the-synthetic-lethality)
Tags: type/exam, clinical, core
