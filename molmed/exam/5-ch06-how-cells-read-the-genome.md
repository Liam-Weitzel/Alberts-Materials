---
title: Session 5. From RNA to Protein
description: Open exam questions for Thamar van Dijk's lecture, including the course's own sample question on the ribosomal subunits, with model answers.
tags: [molmed, session-5, ch6, exam]
---

Q: **Official sample question 3.** Ribosomes are composed of one large and one small subunit.

In the table below, indicate whether a characteristic is unique to the large subunit, or to the small subunit, or is common for both subunits.

| Characteristic | Large subunit only | Small subunit only | Both subunits |
|---|---|---|---|
| Binds mRNA | | | |
| Built of rRNA | | | |
| Contains proteins | | | |
| Has catalytic activity | | | |
| Scans for start-codon | | | |
| Interacts with growing peptide | | | |
| Binding site for antibiotics | | | |
| Binds tRNA | | | |
| Slides first during elongation | | | |
| Is assembled in the nucle(ol)us | | | |
A: **In brief:** **Small only:** binds mRNA, scans for the start codon. **Large only:** catalytic activity, interacts with the growing peptide, slides first during elongation. **Both:** built of rRNA, contain proteins, binding sites for antibiotics, bind tRNA, assembled in the nucleolus.

| Characteristic | Answer | Why |
|---|---|---|
| Binds mRNA | **Small only** | The mRNA-binding site (and decoding centre) is in the small subunit |
| Built of rRNA | **Both** | Each subunit is roughly two thirds rRNA; the rRNA gives the structure |
| Contains proteins | **Both** | Both carry ribosomal proteins, mostly on the surface |
| Has catalytic activity | **Large only** | The **peptidyl transferase centre** (made of rRNA, a ribozyme) is in the large subunit |
| Scans for start-codon | **Small only** | The small subunit with the initiator tRNA and initiation factors scans from the cap; the large subunit joins only at the AUG |
| Interacts with growing peptide | **Large only** | The peptidyl transferase centre and the **exit tunnel** are in the large subunit |
| Binding site for antibiotics | **Both** | Antibiotics bind around the decoding centre and mRNA channel (small) and around the peptidyl transferase centre and exit tunnel (large) |
| Binds tRNA | **Both** | The A, P and E sites **span both subunits**: the anticodon end sits on the small subunit, the acceptor end on the large |
| Slides first during elongation | **Large only** | After peptide bond formation the **large subunit translocates first** (tRNAs in hybrid positions), then the small subunit moves the mRNA three nucleotides |
| Is assembled in the nucle(ol)us | **Both** | Both subunits are assembled in the nucleolus from rRNA and imported ribosomal proteins, exported **separately**, and finished in the cytoplasm |

**Where marks are lost:** "Has catalytic activity: both" (the small subunit decodes, but the chemistry of peptide bond formation is in the large subunit); "Binds tRNA: small only" (the tRNA bridges the two).

Read more: [The ribosome has three tRNA sites](#/chapter/ch06-how-cells-read-the-genome/the-ribosome-has-three-trna-sites)
Tags: official, qa, ribosome

---

Q: A patient carries a mutation that causes **intron 3** of an eight-exon gene to be retained in the mRNA. The retained intron contains an in-frame stop codon. Surprisingly, almost no truncated protein can be detected in the patient's cells, and the mutant mRNA itself is present at very low levels.

**a)** Explain why the mutant mRNA is so scarce. Describe the mechanism involved.

**b)** A second patient has a mutation that creates a premature stop codon in the **last exon** of the same gene. Predict what happens to this mRNA, and why.

**c)** Why is it an advantage for the cell to destroy such an mRNA rather than translate it?
A: **In brief:** The retained intron's stop codon is reached while **EJCs are still bound downstream**, so the ribosome recognises a **premature stop** and **nonsense-mediated decay** destroys the mRNA. A premature stop in the **last exon** has no EJC downstream, escapes NMD and gives a **truncated protein**. Destroying the message is cheaper and safer than making a harmful fragment.

**a)** **Nonsense-mediated decay (NMD).** During splicing, an **exon junction complex (EJC)** is deposited near each exon-exon junction; it travels with the mRNA to the cytoplasm. In the **first (pioneer) round of translation**, the ribosome displaces each EJC as it passes. On a normal mRNA the stop codon is in the **last exon**, so all EJCs are removed before termination. Here the ribosome stops in intron 3 while **EJCs are still bound downstream**; this is read as a **premature stop**, **Upf proteins** are recruited and the **whole mRNA is degraded**. Hence little mRNA and little truncated protein.

**b)** A premature stop in the last exon has **no EJC downstream** of it (there is no exon junction after the last exon), so it is **not recognised by NMD**. The mRNA is stable and translated into a **truncated protein** lacking its C-terminal part, which may be non-functional or even harmful (dominant-negative).

**c)** The cell cannot inspect a protein to know what it should look like, so it **inspects the message**, using a mark that records the splicing history. A truncated protein may not merely be useless but **harmful**, for example by binding partners without being able to function, or by aggregating. Destroying the message is cheaper and safer than making the protein.

Read more: [Nonsense-mediated decay](#/chapter/ch06-how-cells-read-the-genome/nonsense-mediated-decay)
Tags: quality-control, clinical, type/apply

---

Q: In a classic experiment, a tRNA that normally carries cysteine (tRNA^Cys) was charged with cysteine and then chemically treated so that the cysteine attached to it was converted into **alanine**, leaving the tRNA itself unchanged. The resulting Ala-tRNA^Cys was added to an in vitro translation system.

**a)** Predict where alanine will be incorporated into the newly made proteins. Explain your answer.

**b)** What does this experiment tell you about the two "adaptors" that translate the genetic code?

**c)** Aminoacyl-tRNA synthetases rarely make this kind of mistake. How do they achieve their accuracy?
A: **In brief:** Alanine is inserted at **cysteine codons**, because the ribosome reads only the **anticodon** and trusts whatever amino acid is attached. The **synthetase** is the first adaptor (amino acid to tRNA), the **tRNA** the second (codon). Synthetases stay accurate with a separate **editing site** that removes wrong amino acids.

**a)** Alanine will be incorporated at **cysteine codons (UGU, UGC)**. The ribosome reads only the **codon-anticodon** pairing, and the anticodon of this tRNA is still that of tRNA^Cys. The ribosome has no way to check which amino acid is attached, so it inserts whatever is carried.

**b)** The code is translated by **two adaptors** acting in sequence. The **aminoacyl-tRNA synthetase** is the first: it decides **which amino acid is attached to which tRNA**. The **tRNA** is the second: its **anticodon** decides **which codon it reads**. The ribosome checks only the second step and takes the first on trust, so a **mischarged tRNA** leads directly to an error in the protein.

**c)** There is **one synthetase per amino acid**, which recognises its tRNAs by features in the **anticodon** and the **acceptor stem**. Distinguishing chemically similar amino acids is difficult, so synthetases **proofread**: besides the **synthesis site**, they have a separate **editing site**. If the wrong amino acid has been attached, the 3′ end of the tRNA moves into the editing site and the incorrect amino acid is **hydrolysed off**. It is the same principle as the proofreading exonuclease of DNA polymerase.

Read more: [Two adaptors, not one](#/chapter/ch06-how-cells-read-the-genome/two-adaptors-not-one)
Tags: trna, translation, type/apply

---

Q: **Puromycin** is an antibiotic that stops protein synthesis in both bacteria and human cells, whereas many clinically used antibiotics act only on bacterial ribosomes.

**a)** Explain how puromycin acts, based on its structure.

**b)** Why does it act on both bacterial and eukaryotic ribosomes?

**c)** How can other antibiotics inhibit bacterial translation selectively? Why do some of these antibiotics nevertheless cause side effects in human cells?
A: **In brief:** Puromycin **mimics an aminoacyl-tRNA**, enters the A site and accepts the chain, but its **amide bond** cannot pass the chain on, so the truncated peptide is released. It attacks **peptidyl transfer**, which every ribosome performs. Selective antibiotics exploit **bacterial ribosome features**; mitochondria's **bacteria-like ribosomes** explain some side effects.

**a)** Puromycin **mimics the aminoacyl end of a charged tRNA**. The ribosome accepts it into the **A site**, and the peptidyl transferase transfers the growing chain onto it, as onto a normal aminoacyl-tRNA. In a real aminoacyl-tRNA, the amino acid is linked by an **ester bond** that can be broken in the next round to pass the chain on; in puromycin the corresponding link is an **amide bond**, which cannot. The chain cannot be passed on, and the **peptidyl-puromycin is released**: translation stops, giving a **truncated protein**.

**b)** It does not exploit a difference between ribosomes: it **abuses the peptidyl transfer reaction**, which is the same (and made by the same conserved rRNA core) in every ribosome.

**c)** Bacterial (70S) and eukaryotic (80S) ribosomes are built on the same plan but differ in **size, rRNA sequence and proteins**. An antibiotic can bind a **bacteria-specific** feature (for example near the decoding centre or the exit tunnel) and jam the bacterial ribosome while leaving the host's working: **selective toxicity**, a product of the long **co-evolution** of fungi and bacteria. However, **mitochondrial ribosomes resemble bacterial ribosomes** (endosymbiotic origin), so some antibacterial antibiotics also inhibit mitochondrial translation. An example is **aminoglycoside-induced deafness** in people with a mitochondrial rRNA variant that makes their mitochondrial ribosome even more bacteria-like.

Read more: [Puromycin](#/chapter/ch06-how-cells-read-the-genome/puromycin)
Tags: antibiotics, ribosome

---

Q: When a eukaryotic mRNA reaches the cytoplasm, it forms a closed loop before it is translated.

**a)** Describe how the loop is formed, and give three advantages it offers the cell.

**b)** Describe how a eukaryotic ribosome finds the start codon.

**c)** Bacterial mRNAs often encode several proteins, while eukaryotic mRNAs almost always encode one. Explain this difference from the way initiation works.

**d)** Some viral mRNAs are translated even when cap-dependent translation is shut down. How?
A: **In brief:** **eIF4E** on the cap and **eIF4G** bind **poly-A-binding protein**: the loop checks that both ends are intact, lets ribosomes **re-initiate** and **protects** the ends. The small subunit with **Met-tRNAi** scans from the cap to the first good **AUG** (Kozak), then the large subunit joins. Bacteria place ribosomes at **Shine-Dalgarno** sites anywhere, allowing several proteins per mRNA. An **IRES** bypasses the cap.

**a)** The **cap-binding complex** is replaced in the cytosol by **eIF4E** on the cap, with **eIF4G** bound behind it. eIF4G contacts the **poly-A-binding proteins** on the poly-A tail, closing the mRNA into a circle. Advantages: **quality control** (the loop only forms if **both** cap and poly-A tail are intact, so a truncated message is not translated efficiently); **efficiency** (a ribosome that terminates near the 3′ end is released close to the 5′ end and can **re-initiate**); **stability** (both ends are protected by proteins from exonucleases).

**b)** The **initiator tRNA** charged with methionine, bound to **eIF2-GTP**, is loaded into the **P site** of the **small subunit**. The small subunit is recruited to the **5′ cap** (via eIF4E/eIF4G) and **scans** along the mRNA, using **ATP**, until it finds the **first AUG** in a good sequence context (**Kozak sequence**). eIF2 then hydrolyses its GTP, the initiation factors leave, and the **large subunit joins**; the first aminoacyl-tRNA enters the A site.

**c)** Bacteria do not scan from the cap. Each start codon is preceded by a **Shine-Dalgarno sequence** that base-pairs with the small-subunit rRNA and places the ribosome **directly on the start codon**, anywhere in the mRNA, so one mRNA can carry several ribosome-binding sites and encode several proteins. Eukaryotic ribosomes enter at the **5′ end** and start at the first suitable AUG, so in practice only **one protein** per mRNA is made.

**d)** By an **internal ribosome entry site (IRES)**: a structured region of the mRNA that recruits **eIF4G directly**, without the cap or eIF4E, so the ribosome can initiate internally.

Read more: [Initiation](#/chapter/ch06-how-cells-read-the-genome/initiation)
Tags: translation, initiation

---

Q: Newly made polypeptide chains must fold correctly, and misfolded proteins must be removed.

**a)** Compare the roles of HSP70 and HSP60 (the chaperonin) in protein folding.

**b)** How is a protein targeted to the proteasome, and where does the specificity of this system lie?

**c)** Degradation is also used to regulate proteins that are perfectly folded, for example at cell-cycle transitions. Describe two ways in which a degradation signal can be switched on, and explain why regulated destruction is suited to such transitions.
A: **In brief:** **HSP70** binds hydrophobic stretches of emerging chains; **HSP60** encloses misfolded proteins in a private chamber. Targets get a **polyubiquitin chain** from **E1, E2 and E3** (the E3 gives specificity); the proteasome cap unfolds them and the core digests them inside. **Regulated destruction** exposes a signal by phosphorylation, unmasking or a new N-terminus: fast and irreversible.

**a)** **HSP70** acts early, at the **ribosome exit tunnel**, on chains as they emerge. It binds **exposed hydrophobic stretches** (which in a folded protein would be buried), and cycles of **ATP-driven binding and release** give the chain repeated chances to fold and prevent aggregation. **HSP60** acts later, on proteins that are **already misfolded**: it is a **barrel** with hydrophobic sites at the opening; the protein is captured, a **cap** closes over it, and ATP hydrolysis drives a folding attempt in an **isolated chamber**, away from other proteins. HSP70 prevents trouble; HSP60 gives a protein in trouble a private second chance. Neither adds information about the final structure.

**b)** **Ubiquitin** is attached to the **ε-amino group of lysine** side chains by an **E3 ubiquitin ligase** working with an **E2**; further ubiquitins are added to form a **polyubiquitin chain**, which the proteasome cap recognises. The cap removes the ubiquitin for recycling, an **ATP-driven unfoldase** ring unfolds the protein, and it is threaded into the **central cylinder**, where the protease active sites face an **internal chamber** (so nothing is digested by accident). The **specificity** lies in the **E3s**: there are many, each recognising particular **degradation signals**.

**c)** Any two: **phosphorylation by a kinase** creating the degradation signal; **dissociation of a partner protein** that masked the signal; **cleavage** creating a **destabilising N-terminus**. Regulated destruction is **fast** (nothing needs to be synthesised, the protein was already destructible) and **irreversible**, which is what a **point of no return** such as a cell-cycle transition needs.

Read more: [Chaperones](#/chapter/ch06-how-cells-read-the-genome/chaperones)
Tags: folding, degradation

---

Q: There are 64 codons, of which 61 specify amino acids, but a cell contains far fewer than 61 different tRNAs.

**a)** Is the genetic code partly unused or redundant? Explain.

**b)** How can one tRNA read more than one codon? Explain the wobble position and the role of inosine.

**c)** Why do synonymous codons almost always differ at the third position rather than the first?

**d)** In what sense is the genetic code "not quite universal"?
A: **In brief:** **Redundant**: all 64 codons are used, 61 for amino acids and 3 as stops. At the **wobble** (third codon) position pairing is relaxed, and **inosine** pairs with U, C or A, so one tRNA reads several codons. The first two positions must pair strictly. **Mitochondria** use slightly different codes.

**a)** **Redundant.** Every triplet is used: **61 codons** specify amino acids and **3 are stop codons**, and most amino acids are specified by **more than one codon**. **AUG** is both the start codon and the methionine codon.

**b)** Pairing between the **third** base of the codon and the **first** base of the anticodon is less strict; this is the **wobble position**, where non-standard base pairs are tolerated. **Inosine**, made by **deamination of adenosine** in the tRNA anticodon, can pair with **U, C or A**, so a single tRNA with inosine at the wobble position reads three codons. Redundancy is achieved both by **several tRNAs for one amino acid** and by **tRNAs that read more than one codon**.

**c)** Because the first two codon-anticodon pairs must be strict Watson-Crick pairs (checked geometrically by the ribosome), while the **third is relaxed**. Codons that differ only at the third position can therefore be read by the same tRNA and code for the same amino acid.

**d)** **Mitochondria** use slightly different codes, and different lineages have diverged differently: a codon that is a **stop** in the standard code can specify an amino acid in a mitochondrial code, and vice versa. The code is a "frozen accident" that a small, isolated genome can drift away from.

Read more: [Wobble, and inosine](#/chapter/ch06-how-cells-read-the-genome/wobble-and-inosine)
Tags: genetic-code, trna

---

Q: An mRNA is exported from the nucleus as a particle, and its protein coat changes on the way.

![An export-ready mRNA passing through the nuclear pore, with some proteins travelling with it, others staying behind, and cytosolic versions replacing the nuclear ones](assets/img/fig-6-40.png)

CBC: cap-binding complex. SR proteins: so-named because they contain a domain rich in serines and arginines; these proteins assemble on exon sequences. EJC: exon-junction complex.

**a)** The EJC is not a nucleus-restricted protein complex. What is the function of the EJC in the cytoplasm?

**b)** Shortly before translation, the mRNA-protein complex is shown in the figure as a circular structure. Does this have (a) biological function(s)? Explain.
A: **In brief:** a) EJCs mark where introns were removed and are knocked off by the first ribosome; an EJC still downstream when the ribosome reaches a stop codon means the stop is premature, and the mRNA is destroyed by **nonsense-mediated decay**. b) Yes: the circle (eIF4E/eIF4G at the cap bound to poly-A-binding protein) acts as **quality control** (only intact messages with cap and tail are translated), makes translation **efficient** (ribosomes re-initiate) and **stabilises** the mRNA.

**a) Quality control of splicing.** An EJC is deposited about 20 to 24 nucleotides upstream of **every exon-exon junction** during splicing, and it travels with the mRNA to the cytoplasm. During the **first (pioneer) round of translation**, the ribosome displaces each EJC it passes. On a correctly spliced mRNA the normal stop codon lies in the **last exon**, so all EJCs are gone by the time the ribosome terminates. If the ribosome stops while an **EJC is still bound downstream**, the stop codon is **premature** (typically from mis-splicing, such as a retained intron). **Upf proteins** are then recruited and the mRNA is degraded: **nonsense-mediated decay**. This prevents truncated, possibly harmful proteins.

![A correctly spliced mRNA whose exon junction complexes are all stripped off before the stop codon, beside an aberrantly spliced one where a premature stop is reached while EJCs remain, triggering degradation](assets/img/fig-6-80.png)

**b) Yes, three functions.** In the cytoplasm the CBC is replaced by **eIF4E** on the 5′ cap, and **eIF4G** bound to it contacts the **poly-A-binding proteins** on the 3′ tail, closing the loop.
- **Quality control:** the loop can only form if **both the cap and the poly-A tail** are present, so a broken or incompletely processed mRNA is not translated efficiently.
- **Efficiency:** a ribosome that finishes at the 3′ end is released close to the 5′ end and can **start again** on the same mRNA (many ribosomes on one message, a polyribosome).
- **Stability:** both ends are covered by proteins, protecting them from **exonucleases**.

Read more: [Nonsense-mediated decay](#/chapter/ch06-how-cells-read-the-genome/nonsense-mediated-decay)
Tags: qa, quality-control, translation

---

Q: The figure shows the central cylinder of a proteasome (left) and the entire proteasome (right).

![A cutaway of the 20S proteasome cylinder with protease active sites facing the inner chamber, and the complete proteasome with a 19S cap at each end](assets/img/fig-6-86.png)

**a)** How are proteins targeted for degradation by proteasomes?

**b)** Describe the process by which a misfolded protein ends up in the proteasome.

**c)** Describe the functions of the caps and the active sites in the central cylinder.
A: **In brief:** a) A **polyubiquitin chain** (Lys48-linked) is attached to lysines of the target by **E1, E2 and an E3 ubiquitin ligase**; the E3 recognises the degradation signal. b) Chaperones first try to refold it; a protein that keeps exposing hydrophobic surfaces is recognised by an E3, polyubiquitinated and delivered to the proteasome. c) The **caps** recognise the ubiquitin chain, remove the ubiquitin for recycling, **unfold** the protein using ATP and thread it into the core; the **active sites** are proteases facing the **inside** of the cylinder, where they cut the protein into short peptides.

**a) Ubiquitin tagging.** Ubiquitin is activated by **E1**, passed to **E2**, and attached by an **E3 ubiquitin ligase** to the **ε-amino group of a lysine** on the target. Further ubiquitins are added onto the first, forming a **polyubiquitin chain**, and the chain (not a single ubiquitin) is the signal the proteasome recognises. The **E3** provides the **specificity**: there are many E3s, each recognising particular **degradation signals** on its targets.

**b) A misfolded protein.** A misfolded protein exposes **hydrophobic stretches** that would normally be buried. **Chaperones** (HSP70, HSP60) bind these and give the protein further chances to fold. If folding keeps failing, the exposed hydrophobic regions are recognised (with chaperone help) by a **ubiquitin ligase**, the protein is **polyubiquitinated**, and the cap of the proteasome binds the chain. The alternative fate, **aggregation**, is what the system is trying to avoid.

**c) Caps and active sites.**
- **Caps (19S regulatory particles)**: contain the **ubiquitin receptor** that binds the chain; a **ubiquitin hydrolase** that removes ubiquitin for **recycling**; and an **ATP-driven unfoldase ring** that unfolds the protein and threads it through the narrow opening into the core. They are the gate: nothing enters the core without being selected.
- **Active sites (in the central 20S cylinder)**: **protease** sites that hydrolyse **peptide bonds**, cutting the protein into short peptides. They face an **enclosed internal chamber**, so proteins in the cytosol are not digested by accident: only what the caps feed in is degraded.

![The proteasome cap recognizing a polyubiquitin chain, cleaving off the ubiquitin for recycling, and threading the unfolded protein into the core, with the cap's ubiquitin receptor and ubiquitin hydrolase](assets/img/fig-6-87.png)

Degradation is also used for **regulated destruction** of perfectly folded proteins: phosphorylation by a kinase, dissociation of a masking partner, or cleavage creating a destabilising N-terminus can expose a degradation signal.

Read more: [The proteasome](#/chapter/ch06-how-cells-read-the-genome/the-proteasome)
Tags: qa, degradation
