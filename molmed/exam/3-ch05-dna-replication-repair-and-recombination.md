---
title: Session 3. DNA Replication, Repair and Recombination
description: Open exam questions for Arnab Ray Chaudhuri's lecture, in the style of the course's sample questions, with model answers.
tags: [molmed, session-3, ch5, exam]
---

Q: PARP inhibitors such as olaparib are approved for the treatment of ovarian and breast tumours in patients who carry a germline mutation in *BRCA1* or *BRCA2*.

**a)** Explain the concept of synthetic lethality.

**b)** Explain, step by step, why inhibiting PARP1 kills BRCA-deficient tumour cells.

**c)** Every cell in these patients carries the *BRCA* mutation. Why are the patient's normal cells largely spared?

**d)** PARP inhibitors do more than block catalytic activity: they also "trap" PARP1 on DNA. Why does trapping add to their toxicity?
A: **In brief:** Synthetic lethality: losing either gene is tolerated, losing **both kills**. PARP inhibition leaves **single-strand breaks** that collapse replication forks into **one-ended double-strand breaks**, which only **HR** can repair; BRCA-deficient tumour cells cannot and die. The patient's normal cells are **heterozygous**, so HR still works. **Trapped PARP** is itself a fork block.

**a)** Two genes are **synthetically lethal** when losing either one alone is tolerated but losing **both together kills the cell**. If a tumour has already lost gene A, a drug that inhibits gene B kills the tumour cells while sparing normal cells that still have A. The selectivity comes from the tumour's own genetics, not from dosing.

**b)**
1. **PARP1** detects **single-strand breaks** and, using NAD⁺, builds **poly(ADP-ribose)** chains that recruit repair factors (XRCC1 and others) for **single-strand break repair**.
2. With PARP inhibited, single-strand breaks **persist**.
3. When a **replication fork** runs into an unrepaired single-strand break, the fork **collapses**, producing a **one-ended double-strand break**.
4. A one-ended break in S phase can only be repaired accurately by **homologous recombination (HR)**, using the **sister chromatid** as template.
5. BRCA1 (resection) and BRCA2 (loading of **RAD51**) are required for HR. In BRCA-deficient cells the breaks cannot be repaired correctly: they accumulate, are mis-joined by error-prone pathways (NHEJ), giving chromosome aberrations such as **quadriradials**, and the cells **die**.

**c)** Patients are **heterozygous**: their normal cells carry one mutant and one **wild-type** allele, which is enough for normal HR. Only the tumour has lost the remaining allele (**loss of heterozygosity**) and so is HR-deficient. PARP inhibition therefore creates breaks that normal cells can repair and tumour cells cannot.

**d)** Auto-PARylation normally makes PARP1 so negatively charged that it **releases itself** from the DNA. An inhibited PARP1 stays **stuck on the break** as a protein-DNA complex, which is itself a **barrier to the replication fork** and converts more lesions into fork collapse and double-strand breaks. Trapping potency correlates with cytotoxicity better than catalytic inhibition does.

Read more: [The mechanism of the synthetic lethality](#/chapter/ch05-dna-replication-repair-and-recombination/the-mechanism-of-the-synthetic-lethality)
Tags: parp, brca, clinical, core

---

Q: *BRCA1* and *BRCA2* are tumour suppressor genes: carriers of a germline mutation have a high risk of breast and ovarian cancer. Yet deleting *BRCA1* or *BRCA2* in normal primary cells **inhibits** their growth, and *Brca* knockout mice die as embryos.

**a)** Explain how these two observations can both be true. Describe the steps by which a BRCA-deficient tumour arises.

**b)** At which steps of homologous recombination do BRCA1 and BRCA2 act?

**c)** BRCA1/2 also have a function in DNA replication that is separate from homologous recombination. What is it?
A: **In brief:** BRCA loss alone is lethal: unrepaired breaks trigger **p53**-mediated arrest or death. A tumour needs a **germline mutation**, **loss of heterozygosity**, and loss of **p53** so the cell tolerates the resulting instability. **BRCA1** promotes **resection**, **BRCA2** loads **RAD51**. Separately, BRCA1/2 **protect stalled forks** from MRE11.

**a)** Loss of BRCA function alone is **lethal to a cell**, because without HR, breaks arising during every S phase cannot be repaired accurately; cells accumulate damage and the **checkpoint** (p53 activation) drives them into **apoptosis or senescence**. A tumour arises in three steps:
1. **Heterozygous germline mutation.** All cells have one working allele and normal HR.
2. **Loss of heterozygosity** in one somatic cell (deletion, mitotic recombination, promoter methylation): the cell is now HR-deficient. This alone would make it arrest or die.
3. **A cooperating mutation that tolerates the damage**, typically loss of **TP53**. The cell no longer dies in response to breaks, so the **genome instability** from HR loss becomes a **source of further mutations** that drive the tumour.

So BRCA loss alone kills; BRCA loss **plus** p53 loss builds a tumour.

**b)** **BRCA1 acts early**, at **end resection**: it antagonises **53BP1** (which blocks resection) and promotes the 5′→3′ resection that creates the 3′ single-stranded overhangs. **BRCA2 acts later**, at **strand invasion**: together with **PALB2** (the bridge to BRCA1) it **loads RAD51** onto the RPA-coated single-stranded DNA, the committed step that allows homology search and invasion of the sister chromatid.

**c)** **Protection of stalled replication forks.** A stalled fork can reverse into a four-way structure; BRCA1/2 with RAD51 stabilise it and **keep the nuclease MRE11 away**. Without them MRE11 **degrades the nascent DNA strands**, causing loss of viability and chemotherapy sensitivity.

Read more: [How a tumour arises anyway](#/chapter/ch05-dna-replication-repair-and-recombination/how-a-tumour-arises-anyway)
Tags: brca, cancer

---

Q: A **DNA fibre assay** is performed on wild-type and BRCA2-deficient cells. Cells are first labelled with **CldU** (red), then with **IdU** (green), and are then treated for several hours with **hydroxyurea (HU)**, which depletes dNTPs and stalls replication forks. Individual DNA fibres are stretched on a slide and the length of the green IdU tract is measured and expressed as a ratio to the red CldU tract.

| Cells | IdU/CldU ratio after HU |
|---|---|
| Wild type | ~1.0 |
| BRCA2-deficient | ~0.5 |
| BRCA2-deficient + MRE11 inhibitor | ~1.0 |

**a)** Explain the principle of the DNA fibre assay. What pattern would you see for an ongoing fork, and for an origin that fired during the IdU pulse?

**b)** Interpret the results in the table.

**c)** In BRCA2-deficient cells in which the protein **PTIP** has been knocked down, the IdU/CldU ratio returns to ~1.0 and the cells become resistant to cisplatin and PARP inhibitors. Yet gene targeting in these cells is still 0%. What does this tell you about the two functions of BRCA2?
A: **In brief:** Two sequential labels show what each fork did. In **BRCA2-deficient** cells the IdU tract **shrinks** after HU: nascent DNA at stalled forks is **degraded by MRE11** (the inhibitor restores it), so BRCA2 **protects forks**. PTIP loss restores fork protection and **chemoresistance** while HR stays absent: the two functions are **separable**.

**a)** Nascent DNA is labelled with two **consecutive pulses of different thymidine analogues**. DNA is spread as single fibres, and the two labels are detected with antibodies in two colours. Each labelled track records what one **replication fork** did during the pulses: the track length divided by the pulse time gives **fork speed**. An **ongoing fork** shows a red tract followed directly by a green tract; a **new origin** fired during the second pulse shows **green only** (a bidirectional green track).

**b)** The IdU tract was made just before HU, while the fork was stalled during HU. In **wild-type** cells the IdU tract stays intact (ratio ~1): the stalled fork is **protected**. In **BRCA2-deficient** cells the IdU tract becomes **shorter** (ratio ~0.5): newly synthesised DNA at the stalled fork is being **degraded**. Inhibiting **MRE11** restores the ratio, showing that the degradation is carried out by the **MRE11 nuclease**. Conclusion: BRCA2 **protects stalled forks from MRE11-mediated degradation** of nascent strands.

**c)** Gene targeting requires **homologous recombination**, which is still completely absent; yet **fork protection** is restored and that alone is enough to give **chemoresistance**. So the two BRCA2 functions, **HR** and **fork protection**, are **genetically separable**, and loss of fork protection (not only of HR) is what makes BRCA2-deficient cells sensitive to these drugs. Clinically, an HR assay alone cannot predict whether a tumour will respond.

Read more: [DNA fibre assay (single-molecule analysis of replication)](#/chapter/ch05-dna-replication-repair-and-recombination/dna-fibre-assay-single-molecule-analysis-of-replication)
Tags: methods, brca, type/figure

---

Q: At a replication fork, the two new strands are made differently: one continuously, the other in short Okazaki fragments that each start with an RNA primer.

**a)** Explain why the fork must be asymmetric in this way.

**b)** Why does the cell start every Okazaki fragment with an RNA primer made by primase, rather than letting DNA polymerase start the chain itself?

**c)** Describe the roles of RPA and PCNA at the fork.

**d)** Replication is accurate to about one error per 10⁹ to 10¹⁰ nucleotides. Describe the three layers that produce this accuracy.
A: **In brief:** Polymerase works only **5′→3′** and the strands are **antiparallel**, so one strand must be made in pieces. A proofreading polymerase **cannot start a chain**; primase's RNA primer marks the start and is later replaced. **RPA** protects single-stranded DNA and signals trouble; **PCNA** is the clamp giving processivity. Accuracy = **base selection × proofreading × mismatch repair**.

**a)** DNA polymerase can only synthesise **5′→3′**, adding to an existing 3′-OH, and the two template strands are **antiparallel**. On one template, synthesis can follow the fork continuously (**leading strand**); on the other it must run **away from the fork**, so it is made discontinuously in short pieces, each started anew as more template is exposed (**lagging strand**, Okazaki fragments). In the **trombone model** the lagging template loops out so both polymerases move with the fork as one machine.

**b)** A replicative DNA polymerase **cannot start a chain from scratch**, and it would not want to: it **proofreads**, and the first few nucleotides of a new chain are poorly paired, so an efficient proofreading exonuclease would remove them. Primase has **no proofreading**, so it can start; the RNA marks the start as "suspect" and is later **removed** (FEN1, RNase H2) and replaced with DNA, and the nicks are sealed by **DNA ligase**.

**c)** **RPA** coats the exposed **single-stranded DNA**, preventing re-annealing, hairpins and nuclease attack; it is also the platform for later steps and, when single-stranded DNA accumulates, the **signal** that a fork is in trouble (it recruits ATR). **PCNA** is the **sliding clamp**: a ring around the DNA, loaded by RFC, that tethers the polymerase and gives it **processivity**.

**d)** (1) **Base selection** by the polymerase active site, which closes properly only around a correctly paired nucleotide. (2) **Proofreading** by the polymerase's **3′→5′ exonuclease**, which removes a mispaired nucleotide before synthesis continues. (3) **Mismatch repair**, which scans the new duplex, recognises which strand is new, and corrects errors that escaped proofreading. Each layer multiplies the accuracy of the one before; loss of a layer (Lynch syndrome, POLE mutations) is oncogenic.

Read more: [Leading and lagging strands](#/chapter/ch05-dna-replication-repair-and-recombination/leading-and-lagging-strands)
Tags: replication, core

---

Q: Overexpression of the oncogene **MYC** in pre-cancerous cells causes **replication stress**.

**a)** Define replication stress and explain how an oncogene can cause it.

**b)** When the polymerase stalls but the helicase continues unwinding, what accumulates at the fork, and how does the cell sense it? Describe the main outcomes of the replication stress response.

**c)** If a stalled fork collapses, it forms a one-ended double-strand break. Why can a single such break kill a cell if it is not repaired by homologous recombination?
A: **In brief:** Replication stress is **slowed or stalled fork progression**; oncogenes fire **too many origins**, drain **dNTPs** and cause **transcription-replication collisions**. Uncoupling leaves **RPA-coated ssDNA**, which activates **ATR-CHK1**: checkpoint, origin suppression, fork stabilisation and restart. A **one-ended break** cannot be joined correctly: translocations, loss of acentric fragments, p53-driven death.

**a)** Replication stress is the **slowing or stalling of replication fork progression and/or DNA synthesis**. Oncogenes such as MYC and RAS push cells into S phase without the resources for it: **more origins fire**, so more forks run at once and **drain the dNTP pool**; forks then slow and stall. Increased transcription also raises **transcription-replication collisions** and R-loops.

**b)** The helicase and polymerase **uncouple**, and **single-stranded DNA** accumulates. It is coated by **RPA**, and RPA-ssDNA recruits **ATR-ATRIP**, which is activated (by TopBP1) and phosphorylates **CHK1**. Outcomes: **S-phase checkpoint** activation (and a block on entry into mitosis via CDC25 degradation and WEE1 inhibition of CDKs); **suppression of new origin firing** globally while allowing nearby dormant origins to fire; **stabilisation and restart** of stalled forks; prevention of fork collapse; and DNA repair.

**c)** A one-ended break has **no second end** to be joined to, so NHEJ has nothing correct to do: if it acts it joins the end to **another break elsewhere**, giving **translocations and dicentric chromosomes** that break again at the next mitosis. The fragment beyond the break lacks a **centromere** and is **lost** at mitosis with all its genes. And persistent damage signalling activates **p53**, driving **apoptosis or senescence**. The only clean solution is to copy the missing information from the **sister chromatid** by HR.

Read more: [Oncogene-induced replication stress](#/chapter/ch05-dna-replication-repair-and-recombination/oncogene-induced-replication-stress)
Tags: replication-stress, cancer

---

Q: You have knocked down a newly identified gene, *GENE-X*, and want to find out whether it is required for homologous recombination (HR).

**a)** Describe how the **DR-GFP reporter assay** works and what result you would expect if *GENE-X* is required for HR.

**b)** Why does repair of the break by non-homologous end joining not produce a green cell?

**c)** Describe a second, independent assay you could use, and what you would expect to see after irradiating HR-deficient cells.

**d)** Why is homologous recombination restricted to the S and G2 phases of the cell cycle?
A: **In brief:** **I-SceI** cuts SceGFP once; repair by **HR** from iGFP restores GFP, so the **% of green cells** measures HR and falls if GENE-X is needed. **NHEJ** only rejoins the ends and copies nothing. Independent check: **RAD51 foci** after irradiation are absent in HR-deficient cells. HR needs the **sister chromatid**, so only S and G2.

**a)** The DR-GFP cassette contains two defective GFP copies: **SceGFP**, interrupted by an **I-SceI** recognition site, and **iGFP**, a promoterless internal GFP fragment. Expressing the I-SceI endonuclease (whose site does not occur in the mammalian genome) makes **one defined double-strand break** in SceGFP. If the cell repairs it by **HR**, using iGFP as template (gene conversion), the correct GFP sequence is restored and the cell becomes **green**. The **percentage of GFP-positive cells**, measured by flow cytometry, is the HR efficiency. If *GENE-X* is needed for HR, knocking it down **lowers the % GFP⁺ cells** compared with a control knockdown (with RAD51 or BRCA2 knockdown as a positive control).

**b)** NHEJ simply **rejoins the broken ends**, often with small insertions or deletions, and does not copy sequence from iGFP. The I-SceI site is not replaced by correct GFP sequence, so GFP stays broken.

**c)** For example **RAD51 foci**: after **ionising radiation**, wild-type cells form many nuclear **RAD51 foci** (RAD51 filaments at breaks), while HR-deficient cells such as BRCA2-deficient cells form **none**, because RAD51 is never loaded. Alternatives: **gene targeting efficiency** (percentage of correctly targeted clones drops to zero without HR), or **metaphase spreads** showing breaks and **quadriradial** chromosomes.

**d)** HR needs an **intact homologous template**, and in somatic cells this is the **sister chromatid**, which only exists after the DNA has been replicated (S and G2). In G1 there is no sister, and NHEJ dominates. Resection, which commits a break to HR, is also activated by CDK activity in S/G2.

Read more: [Reporter assays: DR-GFP](#/chapter/ch05-dna-replication-repair-and-recombination/reporter-assays-dr-gfp)
Tags: methods, hr
