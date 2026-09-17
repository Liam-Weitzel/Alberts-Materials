---
title: Ch 3. Proteins
description: ""
date: 2026-08-08
tags: [mboc, ch3]
---

## Why study protein structure?

Proteins regulate the cell. They both **regulate** and **execute** cellular processes.

To understand a cellular process, we want to know:

* **when** a protein acts
* **who** it acts with
* **how** it acts

Knowing *how* a protein works gives **mechanistic insight**. Mechanistic insight is also the starting point for finding ways to interfere with a protein, which is the basis of **drug design**.

The aim of this chapter is to lay a basis for understanding the role that proteins play in cellular processes.

## Proteins are chains of amino acids

A protein is a chain of amino acids.

The 20 amino acids are built mainly from four types of atom:

* carbon
* nitrogen
* oxygen
* sulfur

(plus hydrogen)

The types of atom in a protein determine its chemical properties.

Structure figures use a standard atom colouring:

* **nitrogen:** blue
* **oxygen:** red
* **sulfur:** orange (sometimes yellow)
* **carbon:** any colour, often green or grey

Nitrogen and oxygen are more electronegative than carbon. They pull electrons towards themselves and carry partial negative charges, which is why the blue and red atoms are where the polar and charged chemistry of a protein happens.

## Protein function is always through interactions

A protein performs its function by interacting with other molecules.

These interactions include:

* **protein–ligand** interactions
* **protein–protein** interactions
* **protein–DNA** interactions

From the DNA sequence we can deduce the amino acid sequence of a protein, and therefore all of its covalent bonds.

This does not tell us what the protein does. Function depends on how the chain folds into a three-dimensional shape, and on which surfaces that shape presents for interactions.

---

# Interactions

The interactions that matter in proteins are:

* **Covalent bonds:** peptide bonds along the amino acid sequence, and disulfide bridges
* **Noncovalent bonds:** salt bridges (ionic bonds), hydrogen bonds, and van der Waals interactions (nonpolar interactions)
* **The hydrophobic effect**

## Covalent bonds

In a **covalent bond**, atoms share pairs of electrons.

Covalent bonds are not easy to cleave. Breaking one takes a large amount of energy.

An ionic bond behaves like a covalent bond in a vacuum, but in water it behaves as a noncovalent interaction. Water molecules surround the charges and shield them from one another (see Ch 2).

## Noncovalent interactions

### Electrostatic interactions (ionic bonds)

* Between opposite charges: **attractive**
* Between identical charges: **repulsive**

In proteins, an ionic bond between two oppositely charged side chains, such as Lys and Glu, is called a **salt bridge**.

![Three types of noncovalent bond acting together between amino acid side chains: electrostatic attractions, hydrogen bonds and van der Waals attractions](assets/img/fig-3-04.png)

### Van der Waals contacts

**Van der Waals contacts** are very weak, about **0.2 kcal/mol** each.

When two atoms approach each other they experience a weak attractive force. When they come too close, their electron clouds overlap and they repel each other.

* Close to the atom: **repulsive**, scaling as $1/r^{12}$
* Slightly further away: **attractive**, scaling as $1/r^{6}$

The balance of attraction and repulsion is described by the **Lennard-Jones potential**:

$$
V(r) = \frac{A}{r^{12}} - \frac{B}{r^{6}}
$$

On a graph of energy against distance:

* at very short distances the energy rises steeply (repulsion)
* at the optimal contact distance there is a shallow energy minimum
* at larger distances the energy returns to zero (no interaction)

The strong distance dependence means that van der Waals contacts only contribute when surfaces fit together closely. Each contact is tiny, but a well-packed protein interior contains very many of them.

### Hydrogen bonds

**Hydrogen bonds** are stronger, about **2–5 kcal/mol**.

They are a special case of noncovalent interaction with an **almost covalent character**. They are sometimes described as "weak" covalent bonds.

* **Hydrogen bond donors:** NH, OH
* **Hydrogen bond acceptors:** O, N

The donor is an electronegative atom carrying a hydrogen. The acceptor is an electronegative atom with a **lone pair of electrons** that the hydrogen can point at.

Hydrogen bonds have:

* a **short optimal distance** of about **2.8 Å** between donor and acceptor atoms
* a **directional component**: the bond is strongest when donor, hydrogen, and acceptor lie in a straight line

On the energy–distance graph, the hydrogen bond potential has a deeper and narrower minimum than the van der Waals potential.

The optimal donor–acceptor distance is shorter than the van der Waals contact distance would allow. The partial covalent character lets the two atoms come closer together than two atoms that only touch through van der Waals contacts.

## Lengths and strengths

| Interaction | Length (nm) | Strength in water (kcal/mol) |
|---|---|---|
| Covalent | 0.15 | 90 |
| Ionic bond (salt bridge) | 0.25 | 3 |
| Hydrogen bond | 0.30 | 1 |
| Van der Waals | 0.35 | 0.1 |

The strengths in water are lower than the intrinsic values given above. In an unfolded protein, polar groups can already hydrogen bond with water, so forming a hydrogen bond inside the protein only gains the difference.

For further reading on detailed atomic interactions, the lecturer recommends **Kuriyan, *The Molecules of Life***.

## The hydrophobic effect

Water makes many hydrogen bonds, and those hydrogen bonds orient the water molecules.

Nonpolar amino acids cannot hydrogen bond with water. They prevent the surrounding water from making its ideal hydrogen bonds.

The water around a nonpolar side chain is forced into a more **ordered** arrangement. This is energetically **unfavourable** because it decreases entropy.

It is therefore more favourable to **sequester the apolar (hydrophobic) amino acids away from the water**, in the interior of the protein.

This is the **hydrophobic effect**. It is not an attractive force between nonpolar groups. It results from water pushing them together.

## How each interaction shapes a protein

* **Covalent peptide bonds** fix the order of amino acids in the chain.
* **Disulfide bridges** covalently link distant parts of the chain and add extra stability.
* **The hydrophobic effect** drives the chain to collapse with its nonpolar side chains buried in a core.
* **Hydrogen bonds** must be satisfied when polar groups are buried. They give rise to secondary structure.
* **Van der Waals contacts** reward tight packing of the core and give shape complementarity at binding surfaces.
* **Salt bridges** can stabilize particular contacts within a protein and between proteins.

---

# Levels of protein structure

Protein structure is described at four levels:

| Level | What it describes |
|---|---|
| **Primary** | The polypeptide chain of amino acids (and the preferred side-chain conformations, or rotamers) |
| **Secondary** | Alpha helices, beta sheets, and turns |
| **Tertiary** | The domain fold |
| **Quaternary** | The relative orientation of domains and subunits |

---

# Primary structure

## The peptide bond

A protein is a **covalent chain of amino acids linked by peptide bonds**.

![Formation of a peptide bond between glycine and alanine with removal of water, and a two-dimensional representation of a polypeptide backbone with its attached side chains](assets/img/fig-3-01.png)

A peptide bond forms in a **condensation reaction** between the carboxyl group of one amino acid and the amino group of the next, releasing water:

$$
\text{amino acid}_1 + \text{amino acid}_2 \rightarrow \text{dipeptide} + H_2O
$$

Proteins are built exclusively from **L-amino acids**.

Protein sizes vary widely:

* smallest proteins: **< 100** amino acids
* average proteins: **~300–500** amino acids
* largest proteins: **> 3000** amino acids

## The 20 amino acids

There are **20 natural amino acids**.

They share the same backbone, a central α-carbon (Cα) carrying an amino group, a carboxyl group and a hydrogen. They differ in their **side chain (R)**.

![The 20 amino acids commonly found in proteins, grouped as acidic, basic, uncharged polar and nonpolar, with three-letter and one-letter abbreviations](assets/img/fig-3-02.png)

Amino acids can be classified into **5 groups** depending on their side chain:

1. **Aliphatic:** R is a hydrocarbon side chain
2. **Charged:** R carries a charge in solution at pH 7, either positive (basic) or negative (acidic)
3. **Aromatic:** R contains an aromatic ring
4. **Polar:** R is an uncharged, polar group
5. **Conformational:** R has an unusual effect on the flexibility of the backbone


| Group | Amino acids | Shared features |
|---|---|---|
| **Aliphatic** | Ala (A), Val (V), Leu (L), Ile (I), Met (M) | Hydrophobic hydrocarbon side chains, usually buried in the protein core |
| **Acidic** | Asp (D), Glu (E) | Negatively charged at pH 7 (carboxylate group) |
| **Basic** | His (H), Lys (K), Arg (R) | Positively charged at pH 7 (His only partly) |
| **Aromatic** | Phe (F), Tyr (Y), Trp (W) | Large, flat ring side chains; mostly hydrophobic, but Tyr has an OH and Trp an NH |
| **Neutral polar** | Ser (S), Thr (T), Cys (C), Met (M), Asn (N), Gln (Q) | Uncharged but polar, hydrophilic; can hydrogen bond |
| **Conformational** | Gly (G), Pro (P) | Change the flexibility of the main chain |

Methionine appears in both the aliphatic and the polar group on the slides. Its sulfur makes it slightly polar, but it mostly behaves as a hydrophobic amino acid.

![Panel 3-1, first page: families of amino acids, the general amino acid formula, optical isomers, the basic side chains, and peptide bond formation](assets/img/panel-3-01.png)

### Histidine

**Histidine is not always charged.**

The nitrogens of its ring have a pKa close to 6, so at physiological pH histidine is only partly protonated. Whether it is charged depends on its local environment and the pH.

This allows histidine to act as either a proton donor or a proton acceptor, which is why it appears so often in enzyme active sites.

### Aromatic amino acids

**Phe, Tyr** and **Trp** have ring-shaped side chains.

### Conformational amino acids

**Glycine** has only a hydrogen as its side chain. With nothing to clash with, it can adopt many more backbone conformations than other amino acids. Glycine is therefore **more flexible**.

**Proline** has a side chain that loops back and bonds covalently to its own backbone nitrogen, forming a ring. This makes proline **less flexible**. Its backbone nitrogen also has no hydrogen, so proline cannot donate a hydrogen bond. Proline therefore disrupts alpha helices and is commonly found in turns.

![Panel 3-1, second page: the atomic structures of the acidic, uncharged polar and nonpolar side chains, and the disulfide bond between two cysteines](assets/img/panel-3-01b.png)

## Three-letter and one-letter codes

Each amino acid has a **three-letter code** (e.g. Ala) and a **one-letter code** (e.g. A).

The one-letter code was introduced by **Margaret Dayhoff**, a pioneer of bioinformatics. Long protein sequences written in one-letter code take much less space, which made it practical to store sequences on early computers and to compare them against each other.

The three-letter code is easier to read and less ambiguous for individual residues (e.g. "Lys48"). The one-letter code is used for sequences and alignments.

Dayhoff's sequence comparisons also revealed that the non-histone part of the chromatin protein A24 was **ubiquitin**. This showed that ubiquitin is covalently attached to histone **H2A**.

---

# Main-chain conformation

## Phi and psi angles

The **peptide bond is planar**. It has partial double-bond character, so there is no free rotation around it.

The backbone can only rotate around the two bonds on either side of each α-carbon:

* **phi (φ):** rotation around the N–Cα bond
* **psi (ψ):** rotation around the Cα–C bond

The conformation of the main chain is therefore described by a pair of φ/ψ angles for each residue.

**Clashes of side chains** (and backbone atoms) **limit the allowed combinations** of φ and ψ.

## Ramachandran plot

This was realized by **G.N. Ramachandran**.

A **Ramachandran plot** plots the φ angle against the ψ angle for each residue. It shows regions of:

* **allowed** combinations
* **forbidden** combinations, where atoms would clash

The allowed regions correspond to the common secondary structures. There is one region for alpha helices and one for beta strands.

![Steric limitations on bond angles in a polypeptide chain, with the planar peptide unit and the phi and psi rotations, and a Ramachandran plot of observed angle pairs](assets/img/fig-3-03.png)

Glycine lacks a side chain, so it can also occupy regions that are forbidden for other amino acids.

Occasionally, a residue is found with a **strained, forbidden combination**. These are typically in the **active sites** of proteins, where strain can be functionally important.

Residues in the forbidden regions of an experimental structure can also point to errors in the model.

## Trans and cis peptide bonds

The rotation around the peptide bond itself is described by the **omega (ω)** angle.

The peptide bond usually adopts the **trans** conformation (ω ≈ 180°).

In the trans conformation, the α-carbons of two neighbouring residues lie on **opposite sides** of the peptide bond. In the **cis** conformation (ω ≈ 0°), they lie on the same side, and their side chains clash.

Cis peptide bonds are therefore **very rare**.

The exception is the peptide bond before a **proline**. Because proline's ring is attached to its own nitrogen, the trans and cis forms are similarly crowded. **Cis prolines are found relatively often**, although trans is still the more common form.

## Side-chain nomenclature

Side-chain atoms are named with the Greek alphabet, counting outwards from the main chain:

$$
C\alpha \rightarrow C\beta \rightarrow C\gamma \rightarrow C\delta \rightarrow C\varepsilon \rightarrow C\zeta
$$

The α-carbon is part of the main chain. Side-chain atoms start at β.

When a side chain branches, the atoms at the same position are distinguished by a number. For example, isoleucine has **Cγ1** and **Cγ2**.

In a PDB file these names appear as e.g. `CA`, `CB`, and `OG` (the γ oxygen of serine).

## Rotamers

Amino acid side chains adopt **preferred conformations**, called **rotamers**.

Side-chain conformation is expressed in torsion angles **chi1 (χ1), chi2 (χ2)**, etc.

**Steric hindrance** with the main chain causes certain combinations of these angles to be preferred. A side chain can therefore only adopt a **limited set of conformations**.

## Disulfide bridges

Two cysteines can form a covalent **disulfide bridge** (S–S bond) between their sulfur atoms.

![Covalent disulfide bonds forming between adjacent cysteine side chains, joining either two parts of one polypeptide chain or two different chains](assets/img/fig-3-25.png)

Forming a disulfide is an **oxidation** reaction, so disulfide bridges require **oxidizing conditions**.

The cytosol and nucleus are **reducing** environments. Disulfide bridges are therefore **not normally found in the cytosol**.

They are normally only found:

* in the **secretory route** of cells, where they are formed in the **endoplasmic reticulum**
* in **extracellular** proteins, after secretion

Disulfide bridges covalently link distant parts of a protein and give it **extra strength**.

This matters for proteins outside the cell, such as proteins in blood serum. The extracellular environment is much harsher and less controlled than the cytosol, so these proteins need to be reinforced.

---

# Protein folding

## Proteins behave like oil drops in water

Proteins do not form extended chains in water.

They **behave like oil drops in water**: the hydrophobic side chains cluster together in the interior, and polar and charged side chains are exposed on the surface.

![How a protein folds into a compact conformation, with polar side chains on the outside and nonpolar side chains buried in a hydrophobic core](assets/img/fig-3-05.png)

**Noncovalent forces stabilize protein folding.**

## What drives protein folding?

The energy difference between the denatured and folded states is small:

$$
\Delta G_{\text{unfolded} \rightarrow \text{folded}} \approx 5\text{–}15 \text{ kcal/mol}
$$

The energy of **one hydrogen bond** is about **2–5 kcal/mol**.

A folded protein is therefore only marginally stable. Losing just a few hydrogen bonds can be enough to unfold it.

Protein folding is driven by:

* **Prevention of the ordering of water**, by sequestering hydrophobic residues in the interior (the hydrophobic effect)
* **Making sure that all possible hydrogen bonds are made** after folding

## Hydrogen bond donors and acceptors

Various amino acid side chains can make hydrogen bonds:

| Side chain group | Amino acids | Donor | Acceptor |
|---|---|---|---|
| Hydroxyl (OH) | Ser, Thr, Tyr | ✓ | ✓ |
| Amide (CONH₂) | Asn, Gln | ✓ | ✓ |
| Carboxylate (COO⁻) | Asp, Glu | | ✓ |
| Amine / guanidinium | Lys, Arg | ✓ | |
| Imidazole ring | His | ✓ | ✓ |
| Indole NH | Trp | ✓ | |

In the unfolded state, these groups make hydrogen bonds with water.

When the protein folds, a buried donor or acceptor that cannot find a partner loses those hydrogen bonds without gaining new ones. This is very unfavourable.

When folding, a protein therefore avoids burying a hydrogen bond donor or acceptor where it cannot donate or accept.

## The main chain is hydrophilic

This creates a problem: **the main chain is hydrophilic**.

Every residue in the backbone has:

* an **N–H** group (a hydrogen bond donor)
* a **C=O** group (a hydrogen bond acceptor)

The backbone has to pass through the hydrophobic core of the protein, carrying these polar groups with it.

**Solution:** the main chain makes all possible hydrogen bonds **with itself**, by creating **secondary structure**.

Alpha helices and beta sheets are a way to use up the hydrogen bonding capacity of the backbone.

---

# Secondary structure

**Secondary structure satisfies all main-chain hydrogen bonds.**

## Alpha helix

In an **alpha helix**, the C=O group of each residue forms a hydrogen bond with the N–H group of the residue four positions further along the chain.

$$
C{=}O_{(i)} \cdots H{-}N_{(i+4)}
$$

Properties of the alpha helix:

* **3.6 residues per turn**
* **5.4 Å rise per turn**
* side chains point outward, angled towards the **N-terminus**, like the branches of a **Christmas tree**

All the backbone hydrogen bonds run parallel to the helix axis, inside the helix.

![The regular conformation of the polypeptide backbone in the alpha helix and the beta sheet, showing the hydrogen bonds between backbone peptide bonds](assets/img/fig-3-06.png)

## Beta sheet

A **beta sheet** is made of extended **beta strands** lying next to each other. Hydrogen bonds form between the backbones of neighbouring strands.

Properties of the beta sheet:

* side chains point **out of the plane** of the sheet
* adjacent side chains alternate **above and below** the sheet
* strands can be **parallel**, **anti-parallel**, or **mixed**

In an **anti-parallel** sheet, neighbouring strands run in opposite directions (N→C next to C→N).

In a **parallel** sheet, neighbouring strands run in the same direction. The hydrogen bonds are then slightly angled.

![An antiparallel beta sheet and a parallel beta sheet, both formed from hydrogen-bonded neighbouring strands](assets/img/fig-3-07.png)

## Turns and loops

**Secondary structure elements are connected by turns and loops.**

The chain has to reverse direction, often in **very tight turns**. An example is the **β-hairpin**, a short turn connecting two anti-parallel strands.

Turns and loops are usually on the surface of the protein and often contain **Gly** and **Pro**.

---

# Tertiary structure: domains

**Beta strands and/or alpha helices are connected by loop regions to form domains.**

This is **tertiary structure**.

Over the years, certain recurring patterns of folding have been recognized and given names. Domains can often be recognized through **sequence motifs**.

![Ribbon models of three protein domains: an all-alpha cytochrome, a mixed alpha and parallel beta NAD-binding domain, and an all-beta immunoglobulin light chain domain](assets/img/fig-3-10.png)

**Independent folding domains may have defined functions.** For example, a particular domain may bind DNA, bind phosphorylated peptides, or catalyse a reaction.

## Multiple domains can be mixed and matched

Domains can be **mixed and matched** in different proteins, combining functions to fulfil a specific task.

A classic example is the **SH2 domain**, which binds phosphotyrosine. SH2 domains are found in many different proteins, in combination with other domains:

![The SH2 domain drawn as a polypeptide backbone model, a ribbon model, a wire model including side chains, and a space-filling model](assets/img/fig-3-09.png)

* adaptor proteins
* kinases
* phosphatases
* proteins involved in Ras signalling, transcription, ubiquitination, and cytoskeletal regulation

This is the protein-level result of the **DNA segment shuffling** described in Ch 1.

![Domain shuffling, showing the two protease domains of chymotrypsin combined with EGF-like, calcium-binding and kringle domains in urokinase, factor IX and plasminogen](assets/img/fig-3-15.png)

## Bacterial versus human proteins

**Bacterial proteins** tend to be simple, often consisting of **one domain**.

**Human proteins** are usually more complex:

* they often have **multiple domains**
* some regions have **no domain or secondary structure** at all
* some proteins only fold by **wrapping around another protein**

These proteins often need help from **chaperones** and **assembly factors** to reach their final structure.

## Repeat architecture (solenoids)

**Large proteins can have a repeat architecture**, called a **solenoid**.

A short structural unit is repeated many times. The repeats stack onto each other to form a regular, elongated or ring-shaped structure.

Examples include:

* **WD40 repeat** domains, which form a closed ring (β-propeller)
* **leucine-rich repeat** domains, which form a horseshoe
* **armadillo repeat** domains
* **ankyrin repeat** domains
* **kelch repeat** domains
* **HEAT repeat** domains

Their large, regular surfaces are well suited for binding other proteins.

![The seven-bladed kelch repeat domain of galactose oxidase, with the N- and C-termini marked adjacent to one another](assets/img/fig-q3-02.png)

So we see both ends of the spectrum: some proteins are very nicely folded, others hardly at all.

---

# Quaternary structure

Many proteins consist of more than one polypeptide chain, called **subunits**.

**Quaternary structure** describes the arrangement of the subunits and domains relative to each other.

| Complex | Composition | Example |
|---|---|---|
| **Homodimer** | $\alpha_2$ | two identical subunits |
| **Heterodimer** | $\alpha\beta$ | two different subunits |
| **Heterotetramer** | $\alpha_2\beta_2$ | hemoglobin (see Ch 1) |
| **Heteropentamer** | $\alpha_2\beta\gamma\delta$ | nicotinic acetylcholine receptor |

Identical subunits often assemble into **symmetric** complexes, such as dimers, trimers, tetramers, and larger **rings**.

![A symmetrical CAP protein dimer formed through one identical binding site on each monomer, and a symmetrical neuraminidase tetramer formed through two nonidentical binding sites](assets/img/fig-3-19.png)

## Why do dimers usually bind head to head?

Identical subunits can bind in two ways.

**Head to head (isologous):** the same surface patch on each subunit binds its partner. The interface is symmetric. Once the two subunits are bound, both binding surfaces are used up, so the complex is **closed** and stops at a dimer.

**Head to tail (heterologous):** one surface of a subunit binds a *different* surface on the next subunit. Each new subunit leaves a free binding surface at the end of the complex. The complex can keep growing into a **long filament or helix**, as in actin filaments and microtubules.

![A protein with one binding site forming a dimer, identical proteins with two different binding sites forming a long helical filament, and the same two sites arranged to close into a ring](assets/img/fig-3-21.png)

A head-to-tail arrangement only gives a closed, defined complex if the geometry curves around and closes into a ring.

![Electron micrographs of negatively stained actin filaments, and the helical arrangement of actin molecules with a 37 nm repeat between the minus and plus ends](assets/img/fig-3-22.png)

For a defined dimer, head-to-head binding is therefore the self-limiting option.

---

# Post-translational modifications

## What are PTMs?

A **post-translational modification (PTM)** is a covalent change made to a protein after (or during) its synthesis by the ribosome.

PTMs can change a protein's:

* charge
* shape
* interactions with other molecules
* activity
* localization
* stability or lifetime

In the broad sense, modifications include:

* **disulfide bridge formation**
* **cofactor binding**
* **proteolysis**
* **chemical modification of side chains**

Folding with the help of a **chaperone is NOT a PTM**. The chaperone assists folding but does not change the protein chemically.

## Chemical modifications

| Modification | Modified residues |
|---|---|
| Glycosylation | Asn, Ser (and Thr) |
| Phosphorylation | Tyr, Ser, Thr, His, Asp |
| ADP-ribosylation | Arg, Glu, Asp |
| Carbamylation | Lys |
| Acetylation | amino groups (Lys, N-terminus) |
| Methylation | Lys, Arg |
| Ubiquitination | Lys |
| Hydroxylation | Lys (and Pro) |

### Phosphorylation

A phosphate group is transferred from ATP onto a side chain by a **kinase**, and removed again by a **phosphatase**.

![Transfer of a phosphate group from ATP to a serine side chain by a protein kinase and its removal by a protein phosphatase, with phosphorylation either raising or lowering activity](assets/img/fig-3-58.png)

Phosphorylation adds a large **negative charge**. This can change the conformation of the protein or create a binding site for other proteins, such as the phosphotyrosine binding site of SH2 domains.

Because it is reversible, phosphorylation is one of the most common ways to switch protein activity on or off.

### Ubiquitination

**Ubiquitin** is a small protein of 76 amino acids. It is covalently attached to lysine side chains of target proteins.

* **Chains** of ubiquitin (e.g. linked through Lys48) mark a protein for **degradation** by the proteasome.
* A **single** ubiquitin (monoubiquitination), such as on histone H2A, acts as a signal that changes the protein's function or interactions.

![The three-dimensional structure of ubiquitin, and the patterns of monoubiquitylation, multiubiquitylation and Lys48 and Lys63 polyubiquitylation with their meanings](assets/img/fig-3-65.png)

### Acetylation

**Acetylation** of a lysine **neutralizes its positive charge**.

On histones, this weakens the interaction with the negatively charged DNA and is associated with more open chromatin.

### Methylation

**Methylation** of lysine or arginine does **not** remove the charge. Instead, it creates a binding site that is recognized by specific "reader" domains in other proteins.

### Glycosylation

**Glycosylation** attaches sugar chains to Asn (N-linked) or Ser/Thr (O-linked).

It occurs in the ER and Golgi, so it is mainly found on **secreted** and **membrane** proteins. Sugars help with folding, stability, and recognition at the cell surface.

### Hydroxylation

**Hydroxylation** of lysine (and proline) is essential in **collagen**, where it stabilizes the triple helix.

![A short section of collagen fibril resolving into individual 300 nm collagen molecules, each a triple helix of three wound chains](assets/img/fig-3-24.png)

## Cofactors

Many proteins bind **cofactors**: non-protein molecules or ions that are needed for their structure or function.

### Heme

The **heme group** of hemoglobin and myoglobin is not covalently bound. It sits in a pocket of the protein, where its iron is coordinated by a histidine side chain.

The heme contributes to the shape of the protein, and without it the protein does not fold properly.

![The isomerization of 11-cis retinal to all-trans retinal on absorbing light, and the structure of a heme group with its central iron atom](assets/img/fig-3-51.png)

### Light-harvesting complexes

The **light-harvesting complexes** of plants carry large numbers of cofactors, mainly **chlorophylls** and **carotenoids**. Together they absorb light and transfer the energy to the photosynthetic reaction centre.

The protein holds these pigments at precise distances and orientations from each other.

### Electron carriers

Redox enzymes use cofactors such as **FAD** and **NAD⁺** to accept and donate electrons (see Ch 2).

### Metal ions

Many proteins and enzymes need metal ions:

* **calcium**, e.g. calmodulin, which changes shape when it binds Ca²⁺
* **zinc**, e.g. zinc finger domains, where zinc stabilizes a small fold
* **magnesium**, e.g. kinases and polymerases, where Mg²⁺ binds the phosphates of ATP

## Proteolysis

**Proteolysis** is the cleavage of peptide bonds, making a protein smaller.

Many enzymes are synthesized as an **inactive precursor** (a **zymogen** or proenzyme) and **require** proteolytic cleavage to become active.

Unlike phosphorylation, proteolysis is **irreversible**.

Examples:

* **Digestive proteases:** trypsin is made as inactive trypsinogen in the pancreas and only activated in the intestine. This prevents the protease from digesting the pancreas itself.
* **Blood clotting:** a cascade of proteases activate each other by cleavage. The final steps are prothrombin → thrombin, and then fibrinogen → fibrin, which forms the clot. A cascade amplifies a small signal quickly.
* **Complement:** a similar protease cascade in the immune system.
* **Hormones:** insulin is made as proinsulin. Cleavage removes a middle peptide, leaving two chains held together by disulfide bridges.

![Proinsulin folding and stabilization by disulfide bonds, removal of the connecting peptide to leave two-chain insulin, and the irreversible separation of the chains by reduction](assets/img/fig-3-30.png)

## pH-induced conformational changes

A change in pH is not a covalent modification, but it can also change protein shape.

The **hemagglutinin** protein of the influenza virus is a good example. It is first activated by proteolytic cleavage. In the acidic environment of the endosome, it then undergoes a large conformational change that allows the virus membrane to fuse with the host membrane.

## Histone modifications

Histones carry many different PTMs on their tails, including acetylation, methylation, phosphorylation, and ubiquitination.

The **combination** of modifications acts as a signal that regulates chromatin structure and gene expression. The protein acts like a **"microchip"** that integrates many inputs.

![A spectrum of covalent modifications producing a combinatorial regulatory code that is read to change a protein's binding, location or fate, and the known modifications of p53](assets/img/fig-3-81.png)

The challenge is to **unravel these signals**.

---

# Intrinsically disordered proteins (IDPs)

Not all proteins have a stable fold.

**Many proteins contain natively unfolded regions.** These can be:

* **flexible linkers** between domains
* **linear motifs**, such as binding regions and PTM sites
* **regions that fold upon interaction** with a partner (**coupled folding and binding**)
* **regions that remain disordered** even in the bound state

Disordered regions **can be stabilized** by, for example, **chaperones**.

![Unstructured regions of polypeptide forming binding sites for other proteins, and the same regions carrying multiple phosphorylation sites that change their binding preferences](assets/img/fig-3-73.png)

## Aggregation of IDPs

**Aggregation of IDPs can be functional.**

### Phase separation

IDPs can undergo **phase separation**. Many weak, multivalent interactions cause the proteins to separate out of the surrounding solution into a dense, liquid- or gel-like droplet, much like oil droplets in water.

These droplets (**condensates**) are compartments without a membrane. They concentrate specific molecules and exclude others, creating a local chemical environment that differs from the rest of the cell.

![Types of weak multivalent interaction that drive condensate formation between unstructured proteins, structured proteins and RNA, and a FRAP experiment on labelled nucleoli](assets/img/fig-3-77.png)

Phase separation is used as a **method of signalling** and organization. It is currently a hot topic.

![Three spherical nucleoli inside a nucleus dissected from a Xenopus oocyte fusing into a single larger condensate under the light microscope](assets/img/fig-3-78.png)

### Disease

Aggregation of IDPs can also be the **basis of disease**.

In **synucleinopathies** such as Parkinson's disease, the disordered protein α-synuclein forms toxic aggregates.

![How two alpha-synuclein monomers pair through a hydrophobic zipper to create the fibril spine, a cryo-EM rendering of the fibril, and an electron micrograph of the fibrils](assets/img/fig-3-32.png)

---

# Structure determination

## X-ray crystallography

The structure determination process:

$$
\text{purified protein} \rightarrow \text{crystal} \rightarrow \text{X-ray diffraction} \rightarrow \text{electron density} \rightarrow \text{3D structure} \rightarrow \text{biological interpretation}
$$

### Crystallization

The purified protein must form a well-ordered **crystal**, in which millions of copies of the protein are packed in an identical, repeating arrangement.

Crystallization is often the most difficult step. Flexible proteins and large, heterogeneous complexes crystallize poorly.

### Diffraction and the phase problem

X-rays are scattered by the electrons in the crystal, producing a **diffraction pattern** of spots.

To calculate the **electron density**, both the **intensity** and the **phase** of each diffracted wave are needed. The detector only records the intensity. The phase information is lost.

This is the **phase problem**.

It can be solved by:

* **molecular replacement:** using a known similar structure (now often an AlphaFold model) as a starting point
* incorporating **heavy atoms** or selenomethionine into the crystal, which change the diffraction in a measurable way

The atomic model is then built into the electron density map.

## Nuclear magnetic resonance (NMR)

**NMR** is a spectroscopic method.

* The purified protein is **labelled** with NMR-active nuclei: **¹⁵N** and **¹³C** (in addition to ¹H).
* It is placed in a strong magnet, **300–900 MHz**.
* NMR experiments produce a **spectrum** in which signals from individual atoms can be assigned.
* The spectrum gives **distance constraints** between atoms that are close in space.
* These constraints are used to calculate an **ensemble of structures** that all satisfy the data.

The spread of the ensemble reflects both uncertainty and real flexibility of the protein.

## Single-particle cryo-electron microscopy (cryo-EM)

* The protein sample is rapidly frozen in a thin layer of ice.
* Many images are taken of individual protein particles in random orientations.
* Particles are **selected**, **sorted into classes and averaged** to improve the signal.
* The averaged 2D views are used to **reconstruct a 3D image**.
* A **structural model is fitted** into the 3D map.

From **2014 to today**, a **revolution** in detectors and software has improved the resolution of cryo-EM to atomic resolution.

Cryo-EM was awarded the **Nobel Prize in Chemistry in 2017**.

## Comparison

| Method | Pros | Cons |
|---|---|---|
| **X-ray crystallography** | Very high resolution; no size limit; well established | Needs crystals; phase problem; gives a static picture, and crystal packing can distort flexible regions |
| **NMR** | Protein in solution; shows dynamics and flexibility; no crystals needed | Limited to small proteins; needs isotope labelling and large amounts of protein |
| **Cryo-EM** | No crystals needed; works well for large complexes and membrane proteins; can capture several conformational states | Difficult for small proteins; expensive equipment; flexible regions are poorly resolved |

---

# The Protein Data Bank (PDB)

The **Protein Data Bank** stores atomic resolution structures of:

* proteins
* peptides
* viruses
* protein–nucleic acid complexes
* carbohydrates

Approximate numbers of structures:

* X-ray structures: **~187,000**
* NMR structures: **~14,000**
* EM structures: **~22,000**

X-ray crystallography still accounts for most structures, but cryo-EM is growing rapidly.

Websites:

* PDBe: http://www.ebi.ac.uk
* RCSB: http://www.rcsb.org

Viewers include **PyMOL**, **ChimeraX**, **CCP4MG**, and the Astex viewer. SwissPDBviewer and RasMol are older and less powerful.

## A PDB file is a text file

Structures are stored in **PDB format** or the more structured **mmCIF format**.

The file contains general information on the experiment, and the **coordinates** of the structure with **one line per atom**:

```
      Atom       Residue     Coordinates x, y, z        Occ   B
ATOM     1  N   SER A   2   -12.168  35.044  19.421  1.00 12.72  N
ATOM     2  CA  SER A   2   -10.726  35.335  19.722  1.00 13.30  C
ATOM     3  C   SER A   2   -10.551  36.793  20.143  1.00 13.69  C
ATOM     4  O   SER A   2   -10.787  37.691  19.352  1.00 13.81  O
ATOM     5  CB  SER A   2    -9.842  35.042  18.500  1.00 13.24  C
ATOM     6  OG  SER A   2    -8.485  35.354  18.766  1.00 11.94  O
```

Each line contains:

* the atom number and **atom name** (N, CA, C, O are the main chain; CB, OG are side-chain atoms)
* the **residue** name, chain, and residue number (serine 2 of chain A)
* the **x, y, z coordinates** in Å
* the occupancy
* the **B-factor**, which reflects the **thermal motion** or flexibility of the atom

## Displaying a structure

The same coordinates can be displayed in different ways:

* **ball-and-stick**, showing all atoms and bonds
* **Cα trace**, showing only the path of the backbone
* **cartoon**, accentuating the secondary structure (helices as spirals, strands as arrows)

---

# Folding: principles and prediction

## Anfinsen's principle (1963)

> "The information needed to properly fold a protein into its NATIVE 3-D structure is contained in its amino acid sequence."

Anfinsen unfolded the enzyme ribonuclease with **urea**, which destroyed its activity. When the urea was removed, the protein refolded spontaneously into its **active native state**.

**The primary structure specifies the higher structure.**

Anfinsen's own account of these experiments is summarized in [[anfinsen-1973-principles-that-govern]].

## Levinthal's paradox

Suppose every residue in a protein of 100 amino acids can adopt only 3 conformations. The chain would then have:

$$
3^{100} \approx 5 \times 10^{47}
$$

possible conformations.

If a small protein folded into its native state by **randomly checking all possible conformations**, the process would take **longer than the age of the universe** (> 100 billion years).

Yet folding can occur in a **fraction of a second**.

This is the **protein folding problem**, or **Levinthal's paradox**.

The solution is that proteins fold through **pathways and mechanisms** that remove the need to probe all possible conformations. For example, hydrophobic collapse and local secondary structure form quickly and greatly narrow down the options.

## Chaperones

**Folding of many proteins in vivo is assisted by chaperones.**

Inside the crowded cell, partly folded proteins expose hydrophobic surfaces that can stick to other proteins and aggregate. Chaperones bind these surfaces and give the protein a chance to fold correctly.

**Chaperones act as catalysts and do not violate Anfinsen's principle.** They do not contain information about the final structure. They only help the protein reach the structure encoded in its own sequence.

## Fold prediction before AlphaFold

**Protein structure is more conserved than sequence.** Proteins with quite different sequences can still have the same fold.

Until 2021, structure could only be predicted from **other structures and the sequence**:

| Sequence identity to a known structure | Result |
|---|---|
| **> 70%** | Good homology models |
| **> 30%** | Good general topology, but no detail in insertions and deletions |
| **Low** | Only beginning to work, e.g. Rosetta@home, massive trials |

The steps were:

* **secondary structure prediction**, which is reasonably accurate
* **threading** the sequence onto known folds
* **analysis of co-evolution**

The **CASP** competition tracks progress in the prediction field.

### Co-evolution analysis

If a change in one amino acid is consistently accompanied by a change at a distant position in the sequence, we can **infer that the two residues are likely close in space**.

The second mutation compensates for the first to preserve the contact. By comparing sequences from many species, these correlated pairs give a map of contacts in the folded protein.

## AlphaFold: the AI watershed moment

**AlphaFold** is an artificial intelligence approach to protein folding. It gives **near-perfect prediction** of many protein folds.

* announced December 2020
* published July 2021 (Jumper et al.)
* **AlphaFold3** published May 2024 (Abramson et al.), which also predicts complexes with other molecules

AlphaFold is based on:

* multiple sequence alignments
* co-evolution analysis
* known protein structures from the PDB
* pioneering, innovative AI approaches

It has now been applied to all proteins in an increasing series of genomes, available in the **AlphaFold DB** (https://alphafold.ebi.ac.uk/). A server is available for 20 predictions per day.

AlphaFold was awarded the **Nobel Prize in Chemistry in 2024**.

AlphaFold effectively solved the structure prediction problem, and brings a great new resource of structural information.

## Reading an AlphaFold prediction

An AlphaFold DB entry gives two confidence measures, which are extremely useful:

* **Colour coding** of the structure shows the **confidence in the prediction** for each residue (pLDDT). Dark blue is very confident. Yellow and orange are low confidence and often correspond to disordered regions.
* A **matrix** (predicted aligned error) shows the **confidence in the distance between amino acids**. Dark squares along the diagonal show well-predicted domains. Light areas between them show that the relative position of those domains is uncertain.

A structure can therefore have confidently predicted domains, while the way those domains are arranged relative to each other is unreliable.

## Limitations of AlphaFold

* It sometimes **hallucinates** structure in unfolded regions (AlphaFold3).
* It has only a **subset of cofactors, metals, ligands, and ions**.
* It only predicts a **single state** for each protein.

The last point matters because many proteins switch between conformations. **Mad2** is an example. It exists in an open form and in a closed form, which it adopts when bound to **Mad1**. AlphaFold2 predicts only one of these states (on the slide, the model resembles the Mad1-bound form).

## Sickle cell anaemia: when folding goes wrong

**Sickle cell anaemia** is caused by a single amino acid change in β-globin: a glutamate (charged) is replaced by a **valine** (hydrophobic) on the **surface** of the protein.

The hemoglobin still folds normally. However, the exposed hydrophobic valine binds a hydrophobic pocket on a neighbouring hemoglobin molecule, especially in the deoxygenated state.

Because this is a **head-to-tail** interaction, hemoglobin molecules polymerize into **long fibres**. These fibres distort red blood cells into the characteristic sickle shape.

This shows how one change in primary structure, combined with the hydrophobic effect, can have dramatic consequences for the whole organism.

---

# Protein function (self study)

The lecture slides present protein function as self study.

A structure gives a **static view**, but protein function takes place in a **dynamic world** in which proteins move and change shape.

| Function | What it does |
|---|---|
| **Binding** | Bind a ligand, DNA, or protein |
| **Catalysis** | Promote a reaction |
| **Switching** | Create a signal |
| **Structural** | Provide stability |
| **Mechanical work** | Transfer energy into motion |

## Binding

### Ligand binding

* The **surface conformation** of the protein shapes the binding site.
* **Noncovalent bonds** generate the interaction.
* **Shape complementarity** assists, through van der Waals contacts.
* **Different sequence regions** can contribute to a single binding site, brought together by folding.

![A ligand fitting precisely into a protein's binding site like a hand into a glove, shown schematically and as a space-filling model](assets/img/fig-3-35.png)

### Protein–protein binding

Proteins bind to other proteins through **several types of interfaces**, such as surface-to-surface, helix-to-groove, and peptide-to-surface.

![Three ways two proteins bind: a rigid surface against an extended string of polypeptide, two alpha helices forming a coiled-coil, and two complementary rigid surfaces](assets/img/fig-3-39.png)

**Antibodies** display very versatile protein interactions. Loops at the tips of the antibody vary between antibodies, creating a practically unlimited range of binding sites.

![A Y-shaped antibody of two heavy and two light chains held by disulfide bonds, with antigen-binding sites formed where variable domains meet, and a light chain showing the hypervariable loops](assets/img/fig-3-40.png)

### Affinity

The binding function of proteins depends on noncovalent interactions. Binding is described by three questions:

![Molecule A encountering B, C and D, with poorly matched surfaces breaking apart under thermal motion and the well-matched pair staying bound](assets/img/fig-3-41.png)

* How strong is the affinity? → $K_D$
* How fast is the association? → $k_{on}$
* How fast is the dissociation? → $k_{off}$

For the reaction:

$$
[A{-}B] \rightleftharpoons [A] + [B]
$$

the **dissociation constant** at equilibrium is:

$$
K_D = \frac{[A][B]}{[A{-}B]} = \frac{k_{off}}{k_{on}}
$$

$K_D$ has the unit **M**.

![The dissociation and association rate equations, their equality at equilibrium giving K as kon over koff, and a table relating equilibrium constants to standard free-energy differences](assets/img/fig-3-42.png)

The **lower** the $K_D$, the **higher** the affinity:

* **weak** binding: µM
* **strong** binding: nM

Examples:

| Interaction | $K_D$ |
|---|---|
| Ubiquitin binding domain | $10^{-5}$ M |
| Antigen–receptor | $10^{-7}$ to $10^{-11}$ M |
| Transcription factor | $10^{-9}$ M |
| Avidin–biotin | $10^{-15}$ M |

### Binding kinetics

For simple 1-to-1 binding, association and dissociation follow simple curves.

Binding does not obey the simple 1-to-1 model when, for example:

* there is **cooperativity** between binding sites, as in oxygen binding by hemoglobin
* a molecule binds with **multiple sites at once** (avidity), as with a bivalent antibody
* binding is coupled to a **conformational change**

Binding and dissociation can be measured in real time by **surface plasmon resonance (SPR)**.

## Catalysis

**Most biochemical reactions are accelerated by protein catalysts.**

**Enzymes stabilize the transition state and lower the activation energy barrier** (see Ch 2).

![Free-energy diagram comparing the activation energy for an uncatalysed reaction with the lower activation energy of the enzyme-catalysed route through ES and EP](assets/img/fig-3-45.png)

The reaction takes place in the **catalytic pocket**, or **active site**. The enzyme promotes the reaction by:

1. **ideal positioning** of the reactants
2. **arranging charges** to promote the reaction
3. **straining the substrate** towards the transition state

![Three general strategies for enzyme catalysis: orienting two substrates precisely, rearranging electrons to create partial charges, and straining the substrate toward a transition state](assets/img/fig-3-50.png)

Because enzymes bind the transition state tightly, a molecule that mimics the transition state can act as a strong **inhibitor**. This is used in **drug design**. Antibodies raised against transition-state mimics can even act as enzymes (**catalytic antibodies**).

### Michaelis–Menten kinetics

$$
E + S \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} ES \xrightarrow{k_2} E + P
$$

Steady-state kinetics are described by:

$$
v = \frac{V_{max}[S]}{K_m + [S]}
$$

* $V_{max}$: steady-state velocity of product formation at saturating substrate (mol/s)
* $K_m$: substrate concentration at half $V_{max}$, a measure of **substrate affinity** (M)
* $k_{cat}$: **turnover number**, the number of substrate molecules converted per enzyme per second (s⁻¹)

![Panel 3-2, first page: why enzyme kinetics is analysed, and the steady-state derivation of the Michaelis-Menten equation](assets/img/panel-3-02.png)

### Regulation of enzyme activity

The cell regulates the catalytic activities of its enzymes by:

* **allosteric binding** of other molecules, e.g. aspartate transcarbamoylase
* **post-translational modification**, e.g. phosphorylation
* **proteolysis**, e.g. blood clotting enzymes, complement
* **protein interaction**

![Feedback inhibition of a biosynthetic pathway, where the end product Z inhibits the first enzyme unique to its own synthesis](assets/img/fig-3-52.png)

**Allosteric enzymes** have two or more binding sites that interact:

* Two ligands whose binding sites are coupled must **reciprocally** affect each other's binding.
* Activators and inhibitors can use the same or different allosteric sites.

![A cooperative allosteric transition in an enzyme of two identical subunits, with the first inhibitory ligand binding with difficulty and the second easily](assets/img/fig-3-57.png)

## Switching

**Many proteins function as molecular switches** through conformational changes.

**Ras** is a classic example:

* **Ras–GTP** is the active "on" state and passes on a signal.
* Ras hydrolyses GTP to GDP, giving the inactive **Ras–GDP** "off" state.
* A GEF (guanine nucleotide exchange factor) swaps GDP for GTP to switch Ras on. A GAP (GTPase-activating protein) speeds up GTP hydrolysis to switch it off.

![The GTPase cycle: an active GTP-bound protein, GTP hydrolysis releasing phosphate to give the inactive GDP-bound form, slow GDP dissociation and fast GTP rebinding](assets/img/fig-3-63.png)

Mutant Ras proteins that are stuck in the GTP state are found in many cancers.

![The structure of the Ras protein with GTP bound, with the regions that change conformation on hydrolysis highlighted and the switch helix marked](assets/img/fig-3-64.png)

## Structural proteins

**Proteins can provide structure to a cell**, for example the cytoskeleton and keratin.

**Coiled coils** are built from two (or more) alpha helices wound around each other. The sequence has a regular pattern of seven residues (a heptad, positions *abcdefg*). Positions **a** and **d** are hydrophobic, often **leucines**. They form a hydrophobic stripe along each helix, which packs against the stripe on the partner helix.

![A coiled-coil, showing the sevenfold abcdefg labelling of side chains, the stripe of nonpolar a and d residues, and two helices wrapped around each other](assets/img/fig-3-08.png)

## Mechanical work

**Motor proteins use the energy of ATP to generate large movements.**

Normal conformational changes of a protein are **nondirectional**: the protein moves back and forth between states.

![A protein cycling between three conformations as it moves along a cytoskeletal filament, wandering randomly without an input of energy](assets/img/fig-3-70.png)

Motor proteins produce directional movement by **coupling movement to an irreversible reaction**, ATP hydrolysis. This makes each step effectively one-way.

![An allosteric motor protein driven by ATP hydrolysis walking along a filament, and a walking myosin motor visualized by high-speed atomic force microscopy](assets/img/fig-3-71.png)

Examples:

* **myosin** on actin filaments
* **kinesin** on microtubules
* **helicase** on DNA

The challenge is to unravel the steps in these multicomponent systems, using single-molecule, quantitative, and cellular data.

## Systems biology

**Systems biology** aims to understand the integration between networks of proteins.

This requires quantitative data, such as kinetic and binding constants, for the individual components.

![A network of protein-binding interactions in Drosophila cells, with highly interactive groups such as the proteasome, ribosome and actin cytoskeleton labelled](assets/img/fig-3-82.png)
