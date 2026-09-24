---
title: Ch 14. Energy Conversion and Metabolic Compartmentation: Mitochondria and Chloroplasts
description: How mitochondria turn food into ATP by chemiosmosis, from NADH through the respiratory chain and the proton-motive force to ATP synthase, with skeletal muscle as a case and mitochondrial disease at the end.
date: 2026-09-23
tags: [mboc, ch14]
---

> **Session 8** of the *Molecular Biology of the Cell* course in the **Molecular Medicine master's at Erasmus MC**, given by **Alessandro Iuliano**, whose research is on **Pompe disease** and on engineering human **muscle on a chip**.
>
> The exam asks about what was covered in the **lectures**, not the chapter as a whole, so this summary follows the slides.

The lecture is about **mitochondria** only. Chloroplasts appear once, as the other organelle that runs the same chemiosmotic machinery, and photosynthesis itself is not covered. The roadmap slide announces ten sections, each opened by a question, and the lecture works through all ten in order:

1. Why mitochondria matter: energy, metabolism, cell fate
2. Origin and structure: endosymbiosis, dynamics, two membranes
3. Chemiosmosis: coupling electron flow to ATP via H⁺
4. NADH: from fuel to high-energy electrons
5. Proton-motive force: ΔV + ΔpH ≈ 180 mV
6. Why protons? Fast H⁺ transfer through water
7. Respiratory chain: complexes I to IV and their carriers
8. ATP synthase: rotary motor, reversibility, transport
9. Case: muscle. Fibre types, mitochondria, Ca²⁺
10. Disease: mtDNA versus nuclear defects; mitochondrial donation

The spine of the whole lecture is one idea, **chemiosmosis**: electrons from food fall through a chain of carriers in the inner membrane, the energy they release pumps protons out of the matrix, and the protons flowing back in drive ATP synthase. Sections 3 to 8 are that sentence taken apart. Sections 9 and 10 show what happens to a tissue when supply and demand have to be matched, and when the machinery breaks.

The lecturer opened with his own research, because it frames the muscle case at the end. **Pompe disease** is an inherited glycogen-storage disorder that mainly damages muscle, and his group studies it in engineered human muscle. A short account of the disease is given in section 9, next to the muscle data it motivates.

---

# Why mitochondria matter

## About thirty ATP instead of two

The opening numbers are the argument for the organelle. A glucose molecule **fully oxidised in mitochondria** yields **~30 ATP**. **Glycolysis alone** yields **2**. Oxidative phosphorylation therefore supplies most of the ATP in any aerobic cell, and a cell that loses it has to burn roughly fifteen times as much sugar for the same energy.

## A metabolic hub and a signalling organelle

The same slide gives mitochondria two further jobs, and the lecture keeps returning to both:

| Role | What it covers |
|---|---|
| **Energy conversion** | Oxidative phosphorylation supplies most of the ATP in aerobic cells |
| **Metabolic hub** | Citric acid cycle, fatty-acid β-oxidation, and precursors for amino acids, heme and lipids |
| **Signalling and cell fate** | Ca²⁺ buffering, ROS signalling, and apoptosis via cytochrome c release |

## Not only ATP: the rho-zero cell

The clearest evidence that mitochondria are more than a power plant is a cell with no mitochondrial DNA at all. **ρ⁰ cells** (rho-zero) lack mtDNA, so they cannot build a working respiratory chain, yet they **survive on glycolysis** if the medium is supplemented with **pyruvate and uridine**. The organelle itself, though, stays **essential**: the cell still needs it for jobs that have nothing to do with ATP, such as **iron-sulfur cluster assembly**. So you can remove respiration from a cell, but not mitochondria.

---

# Origin and structure

## Two membranes, four compartments

Mitochondria look odd next to other organelles. They are large, about the size of a bacterium, they have **two membranes**, and the inner one is folded into **cristae** that fill the interior. The folding increases the surface area of the inner membrane, which is where the energy conversion happens (the lecturer compared it to the folding of the brain's cortex, which does the same job for neurons).

![A tomographic slice and a surface rendering of a mouse heart mitochondrion alongside a schematic, labelling the outer membrane, the inner boundary membrane, cristae, crista junctions, the intermembrane space, the crista space and the matrix](assets/img/fig-14-06.png)

Two membranes make **four compartments**, and each has its own job:

![Thin-section electron micrograph of a mitochondrion labelling the matrix, the inner membrane folded into cristae, the outer membrane and the intermembrane space, with the role of each compartment listed beside it](assets/img/slide-8-07.png)

| Compartment | What it is for |
|---|---|
| **Outer membrane** | Permeable to small molecules through **porins** |
| **Intermembrane space** | Where the **pumped H⁺ accumulate** |
| **Inner membrane (cristae)** | **Ion-impermeable**; holds the electron-transport chain and ATP synthase |
| **Matrix** | Citric acid cycle, fatty-acid oxidation, mtDNA and mitochondrial ribosomes |

That impermeability is the whole point of the inner membrane: a membrane that leaked ions could never hold a proton gradient.

## Endosymbiosis

Mitochondria descend from an **aerobic bacterium engulfed by an ancestral eukaryote**. The slide's figure tells the story in three steps: infoldings of the plasma membrane of a proto-eukaryote gave rise to the nucleus and ER; in a **first endosymbiotic event** the cell took up aerobic bacteria that became mitochondria; and in a **second, later event**, only in the lineage leading to plants and algae, it took up photosynthetic bacteria that became **chloroplasts**. Humans carry the first but not the second: every one of our cells contains the descendants of an aerobic bacterium.

![The endosymbiosis figure: a proto-eukaryote develops a nucleus and endoplasmic reticulum, engulfs an aerobic bacterium that becomes the mitochondrion, and in one lineage later engulfs a photosynthetic bacterium that becomes the chloroplast, with the evidence for a bacterial origin listed beside it](assets/img/slide-8-08.png)

The evidence for a bacterial origin, as the slide lists it:

- **Two membranes.** The inner one derives from the bacterial plasma membrane. The proteins of the outer membrane, by contrast, are all encoded in the nucleus today.
- **Their own circular genome** (mtDNA) and **bacterial-type ribosomes**, which is why some antibiotics that target bacterial ribosomes also hit mitochondria.
- **Division by fission.** Mitochondria are never assembled from scratch; every mitochondrion comes from an existing one.
- **Closest living relatives.** α-proteobacteria for mitochondria; cyanobacteria for chloroplasts.

Since the merger, mitochondria have **handed most of their genes to the nucleus**. What is left in mtDNA is a small remnant, and almost every mitochondrial protein is now made in the cytosol and imported (section 10 puts numbers on this).

## A dynamic network: fusion and fission

Mitochondria are not static beans. The slide follows **one mitochondrion in a living cell** and its shape changes completely within **20 minutes**. They continuously **fuse** and **divide**, and the proteins that do it matter clinically, because their mutations cause disease:

| Process | Machinery |
|---|---|
| **Fusion** | **MFN1/MFN2** on the outer membrane, **OPA1** on the inner membrane |
| **Fission** | **DRP1** (gene *DNM1L*), recruited by **MFF** |

Why the cell bothers: fusion and fission allow **content mixing**, **quality control** (damaged pieces are split off and removed by **mitophagy**) and **distribution** of mitochondria around the cell. *OPA1*, *MFN2* and *DNM1L* mutations cause disease, which returns in section 10.

## Placed where ATP is used

Mitochondria are distributed along **microtubules**. Two fluorescence images of the same cultured cell, one stained for mitochondria and one for microtubules, show the elongated mitochondria lying along the microtubule network, and they are **moved along it** to where they are needed. The cytoskeleton organises the cell's interior, and nowhere more obviously than in muscle.

The result is that mitochondria are **packed where ATP is consumed**. In **cardiac muscle** they sit between the myofibrils of the contractile apparatus; in the **sperm tail** they wrap around the flagellar axoneme that drives swimming.

![Mitochondria packed between the myofibrils of a cardiac muscle cell, and wrapped around the core of a sperm flagellum, shown in drawings and electron micrographs](assets/img/fig-14-05.png)

## Two membranes with very different permeability

The difference between the two membranes is what chemiosmosis relies on.

| | Outer membrane | Inner membrane |
|---|---|---|
| **Composition** | **Porins** (VDAC) form large aqueous channels | Rich in **cardiolipin**; densely packed with proteins |
| **Permeability** | Molecules up to **~5,000 Da** pass (ions, ATP, pyruvate) | **Impermeable** to ions and most small molecules, so it **can hold an H⁺ gradient** |
| **Consequence** | The intermembrane space is **≈ cytosol** for small molecules | Traffic only via **selective carriers (SLC25 family)** and channels |

Porins versus cardiolipin is the pair to remember: one makes a sieve, the other a seal.

## Separating the compartments

The permeability difference also lets you take a mitochondrion apart. Put isolated mitochondria in a **hypotonic medium** (low osmolarity) and water rushes into the matrix. The matrix swells, the folded inner membrane unfolds and survives, but the **outer membrane ruptures**, releasing the contents of the intermembrane space. It is the outer membrane that bursts, not the whole organelle.

![Fractionation of mitochondria: in a medium of low osmolarity the matrix swells and ruptures the outer membrane, releasing the intermembrane-space contents, beside a comparison of the porin-rich outer membrane and the cardiolipin-rich, ion-impermeable inner membrane](assets/img/slide-8-12.png)

Centrifugation then separates the pieces. The intermembrane-space contents stay in the non-sedimenting fraction. **Density-gradient centrifugation** separates the light outer membrane from the dense matrix still enclosed by the inner membrane. **Disrupting** that fraction and centrifuging again separates the **inner membrane** from the soluble **matrix** components. Each compartment can then be analysed for its own proteins and enzymes, which is how the compartment table above was established.

---

# Chemiosmosis

## From fuel to high-energy electrons

Before the membrane does anything, fuel has to be turned into electrons. The roadmap slide gives the route in five steps:

1. **Fuel.** Glucose is broken down to **pyruvate** by glycolysis **in the cytosol**; fats are broken down to **fatty acids**.
2. **Import** across the inner membrane into the matrix.
3. **Acetyl CoA** is made from pyruvate (by **pyruvate dehydrogenase**) or from fatty acids (by **β-oxidation**).
4. The **citric acid cycle** oxidises the acetyl groups to **CO₂**.
5. The **high-energy electrons** released are captured by **NADH and FADH₂**, which carry them to the electron-transport chain.

![Amino acids, fatty acids, pyruvate and ketone bodies entering the mitochondrial matrix, converging on acetyl CoA, feeding the citric acid cycle, with NADH passing electrons to the respiratory chain and the resulting proton flow driving ATP synthase](assets/img/fig-14-10.png)

## Product yields from the oxidation of sugars and fats

The lecture then counted what the five steps produce, using the book's table of product yields (Table 14-3 in the 7th edition). The currency is not yet ATP: it is **NADH, FADH₂ and GTP**, the carriers that will feed the chain.

| Fuel | Stage | Where | Net products |
|---|---|---|---|
| **1 glucose** | Glycolysis | Cytosol | 2 pyruvate + **2 NADH** + **2 ATP** |
| | Pyruvate dehydrogenase | Mitochondrion | 2 pyruvate → 2 acetyl CoA + **2 NADH** |
| | Citric acid cycle | Mitochondrion | 2 acetyl CoA → **6 NADH** + **2 FADH₂** + **2 GTP** |
| | *Net in the mitochondrion* | | 2 pyruvate → **8 NADH + 2 FADH₂ + 2 GTP** |
| **1 palmitoyl CoA** (activated palmitate, C16) | β-oxidation | Mitochondrion | 8 acetyl CoA + **7 NADH** + **7 FADH₂** |
| | Citric acid cycle | Mitochondrion | 8 acetyl CoA → **24 NADH** + **8 FADH₂** + **8 GTP** |
| | *Net in the mitochondrion* | | **31 NADH + 15 FADH₂ + 8 GTP** |

Three things follow from the table.

- **Glycolysis is a small part of the story.** Of everything a glucose yields, only 2 ATP and 2 NADH come from the cytosol. The rest is made in the matrix, as reduced carriers that are only worth ATP once the respiratory chain and ATP synthase have spent them.
- **The ~30 ATP per glucose is a conversion, not a count.** Each mitochondrial NADH is worth about **2.5 ATP** and each FADH₂ about **1.5**, because FADH₂ enters at complex II and skips the first proton pump (section 7). Cytosolic NADH also counts as about 1.5, because its electrons have to be shuttled into the matrix. Adding it up gives 2 (glycolysis) + 2 (GTP) + 3 (cytosolic NADH) + 20 (mitochondrial NADH) + 3 (FADH₂) = **30**, and almost all of it is made by ATP synthase.
- **Fat is the richer fuel.** One palmitate gives about **106 ATP** once the cost of activating it is subtracted, roughly 6.6 ATP per carbon against 5 for glucose. Fatty-acid carbons are more reduced than sugar carbons, so they carry more electrons to the chain. Fats also yield proportionally more FADH₂, which is why their electrons move slightly fewer protons each.

Then the membrane takes over. NADH donates its electrons to the chain in the inner membrane; H⁺ are pumped into the intermembrane space; they flow back through ATP synthase, making ATP from ADP + Pᵢ; and **O₂ accepts the electrons** at the end, forming water.

![The electron-transport chain in the inner membrane: an electron passes through three complexes, each pumping H⁺ from the matrix into the intermembrane space, O₂ accepts the electron and forms water, and the H⁺ flow back through ATP synthase, which makes ATP from ADP and phosphate](assets/img/slide-8-16.png)

## The two stages

Energy from food (or, in chloroplasts, from sunlight) is **stored transiently as an H⁺ gradient**. The gradient is the **common currency**: whatever the input, high-energy electrons from oxidised foodstuffs or from light-excited chlorophyll, the output is a **transmembrane electrochemical H⁺ gradient**, and the gradient is then spent on **ATP synthesis**, **active membrane transport**, and, in bacteria, **flagellar rotation**.

![Energy from sunlight or from food oxidation driving electron transfer in membrane complexes that pump protons across a membrane to build an electrochemical gradient](assets/img/fig-14-02.png)

Chemiosmosis is that in two stages:

- **Stage 1.** Electrons pass from high to low energy through membrane proteins, which use the released energy to **pump H⁺ across the membrane**.
- **Stage 2.** The H⁺ **flow back down their gradient through ATP synthase**, which converts that energy into ATP.

The pumping goes **from the matrix, across the inner membrane, into the intermembrane space**. Nothing is pumped across the outer membrane, which is full of porins and could not hold a gradient anyway. And the return flow is not osmosis in the everyday sense: it is protons passing through one specific protein, ATP synthase.

![Chemiosmosis in two stages: electron transport drives a pump that moves protons across a membrane, then the proton gradient is harnessed by ATP synthase to make ATP from ADP and phosphate](assets/img/slide-8-18.png)

**The name.** *Chemi-* is the **redox chemistry** (electron transfer); *osmosis* is the **ion transport across the membrane**. It is the protons that cross the membrane, not the electrons, which stay inside the proteins and carriers of the chain.

## Mitochondria and chloroplasts run the same logic

The comparison slide puts the two organelles side by side, and the point is how similar they are:

| | Mitochondrion | Chloroplast |
|---|---|---|
| **Source of high-energy electrons** | Food: fats and carbohydrates, via the citric acid cycle to NADH | Light: two photosystems pull electrons from H₂O |
| **Where the electrons end** | **O₂**, reduced to **H₂O** | **NADPH** |
| **By-products** | **CO₂** released | **O₂** released |
| **Gradient** | Three H⁺ pumps build it; it drives ATP synthesis | One H⁺ pump between the photosystems builds it; it drives ATP synthesis |
| **What the products are used for** | ATP for the cell | ATP and NADPH power the **carbon-fixation cycle**, turning CO₂ into carbohydrate |

![Side-by-side electron-transport pathways: in the mitochondrion food-derived NADH passes electrons down a chain to oxygen, making water, while in the chloroplast light drives electrons from water to NADPH, releasing oxygen and feeding carbon fixation](assets/img/fig-14-04.png)

The two are mirror images at the level of chemistry (one burns sugar and consumes O₂, the other makes sugar and releases O₂), but they share the machinery in the middle: an electron-transport chain that pumps H⁺, and an ATP synthase that spends the gradient.

---

# How NADH donates its electrons

## Oxidative phosphorylation

Two reactions are coupled:

- **Oxidation:** NADH + ½O₂ + H⁺ → NAD⁺ + H₂O releases a **large** amount of free energy.
- **Phosphorylation:** ADP + Pᵢ → ATP **requires** energy.

Neither reaction touches the other directly. What links them is the **energy-conversion process in the inner membrane**, the H⁺ gradient. That coupling through a membrane is what the name *oxidative phosphorylation* means.

![Energy of high-energy electrons in NADH converted by electron transport and oxidative phosphorylation in the inner membrane into the energy of high-energy phosphate bonds in ATP](assets/img/fig-14-12.png)

## The hydride ion

NAD⁺ and NADP⁺ carry electrons on their **nicotinamide ring**. On reduction the ring accepts a **hydride ion**, H⁻, which is **one proton plus two electrons**. In the oxidised form (NAD⁺) the ring is aromatic and carries a positive charge on its nitrogen; in the reduced form (NADH) it has gained a hydrogen at the carbon opposite the nitrogen and lost a double bond, so it is no longer aromatic. **The reduced form, NADH, is the high-energy one**: its two electrons are what the chain is going to use.

![NADPH being produced as two hydrogen atoms are removed from a substrate, with the structures of NADP+ and NADPH](assets/img/fig-2-36.png)

The slide shows NADP⁺/NADPH; **NAD⁺/NADH are identical except for one phosphate** on the ribose. The phosphate is a label, not a chemical difference: it lets enzymes tell the two pools apart. **NADH feeds catabolic energy into the respiratory chain; NADPH powers biosynthesis.**

Donation runs the reduction backwards. The hydride is removed as **a proton plus two electrons**; the ring passes through an unstable isomer and **rearranges back to NAD⁺**; and the **two electrons go to the electron-transport chain** in the inner membrane. NAD⁺ is then free to be reduced again by the citric acid cycle, so it cycles.

![NADH giving up its hydride ion: the hydride leaves as a proton and two high-energy electrons, which go to the electron-transport chain, and the ring passes through an unstable isomer and rearranges to NAD⁺](assets/img/slide-8-25.png)

## Why the energy is released in steps

If H₂ and O₂ react directly, as in **combustion**, all the energy is released **at once, as heat**, in an explosion, and none of it can be captured. **Biological oxidation** splits the hydrogen into **H⁺ and electrons**, and the electrons pass through **a series of carriers**, each a small step down. Each step releases a manageable amount of energy, and at each large step **much of it is harnessed** and converted to a stored form. What the chain does with each step is **pump H⁺ across the membrane**.

![Combustion of hydrogen and oxygen releasing all its energy as an explosive burst of heat, compared with biological oxidation in which hydrogen is split into protons and electrons and the electrons pass down a series of carriers, each step harnessing part of the energy](assets/img/fig-14-13.png)

This is why evolution built a chain rather than a single enzyme. It is the same total energy either way; the difference is whether it arrives in pieces small enough to do work with.

---

# The proton-motive force

Pumping protons out of the matrix creates two forces at once, because a proton is both a **charge** and a **concentration**:

| Component | Where it comes from | Size |
|---|---|---|
| **Membrane potential (ΔV)** | Positive charge moved out: the **matrix is negative** relative to the intermembrane space | **160 to 170 mV** |
| **pH gradient (ΔpH)** | H⁺ concentration: the **matrix is ~0.5 pH unit more alkaline** (pH 7.5 versus pH 7 on the slide) | **20 to 30 mV** |
| **Proton-motive force (Δp)** | The sum of the two | **≈ 180 to 190 mV** |

![The proton-motive force across the inner membrane shown as a membrane potential, positive outside and negative in the matrix, plus a pH gradient of pH 7 outside and pH 7.5 in the matrix, with the total of about 180 to 190 mV split into ΔV of 160 to 170 mV and ΔpH of 20 to 30 mV](assets/img/slide-8-28.png)

The difference in charge is literally a voltage, and it is most of the force. The pH difference is not a voltage, but it is an energy, and it can be expressed in the same units: **1 pH unit is worth about 61 mV at 37 °C**, so half a pH unit contributes about 30 mV. That is what lets the two be added.

**Both forces point the same way: they push H⁺ into the matrix**, through ATP synthase or through H⁺-coupled carriers. The proton-motive force is the **total energy stored in the H⁺ gradient**, and it is what everything downstream spends.

The break slide collected the keywords so far: **chemiosmosis** (ATP synthesis driven by an H⁺ gradient that electron transport creates), the **electrochemical proton gradient** (ΔV + ΔpH across the inner membrane, ≈ 180 mV, pushing H⁺ into the matrix) and the **electron-transport chain** (inner-membrane complexes that pass electrons from NADH to O₂ and pump H⁺). It was shown alongside a video of mitochondrial nucleoid dynamics.

---

# Why protons

The section asks why the chain uses protons, of all ions, to store its energy. The answer has two parts: protons move unusually fast, and electron carriers pick them up and drop them as a natural consequence of being reduced and oxidised.

## Protons hop through water

A proton in water does not exist as a free ion. It sits on a water molecule as **hydronium (H₃O⁺)**. It then **jumps to a neighbouring water molecule**, which passes one of its own protons on, and so on down a hydrogen-bonded chain. No single proton travels far; the **charge** is relayed. This is the **Grotthuss mechanism**, and it is **much faster than diffusion** of an ion, which has to push its way through the solvent.

![Protons hopping from water molecule to water molecule by forming and breaking hydronium ions, and a proton wire through a protein made of acidic and hydroxyl side chains and trapped water molecules](assets/img/fig-14-28.png)

The same relay works inside proteins. **Chains of water and polar side chains** inside membrane proteins act as proton wires, which is what lets the pumps move H⁺ across the membrane quickly.

## Electron carriers pick up and drop protons

The second reason is that electron transfer and proton transfer are chemically tied together:

- **Adding an electron** to an oxidised carrier A creates a **negatively charged intermediate**, which **grabs an H⁺ from water**, giving the reduced carrier AH.
- **Removing the electron** from a reduced carrier BH leaves a **positively charged intermediate**, which **releases its H⁺ to water**.

![An oxidised electron carrier taking an electron, becoming a transient negative intermediate and picking up a proton from water, and a reduced carrier losing an electron, becoming a transient positive intermediate and releasing its proton to water](assets/img/slide-8-32.png)

So **if uptake happens on one face of the membrane and release on the other**, electron transfer moves H⁺ across the membrane without any further machinery. That is the principle behind ubiquinone and the Q cycle below.

The carriers on the slide are generic (A and B). NAD⁺ is a special case: it takes **a hydride** (a proton with two electrons) in one step, rather than an electron and then a proton from water.

---

# The respiratory chain

## Four complexes, three pumps

Electrons from NADH pass through **four complexes** on their way to O₂. Three of them move H⁺; one does not.

![The respiratory chain in the crista membrane: NADH dehydrogenase passes electrons to ubiquinone, ubiquinone to cytochrome c reductase, which passes them via cytochrome c to cytochrome c oxidase and then to oxygen, with each complex pumping protons, and succinate dehydrogenase feeding electrons into ubiquinone without pumping](assets/img/fig-14-18.png)

| Complex | Name | What it does | H⁺ moved per NADH (2 e⁻) |
|---|---|---|---|
| **I** | **NADH dehydrogenase** | Oxidises NADH to NAD⁺ and reduces ubiquinone | **4** |
| **II** | **Succinate dehydrogenase** | Passes electrons from succinate, via **FADH₂**, to ubiquinone | **0**: pumps no H⁺ |
| **III** | **Cytochrome b-c₁ complex** | Takes electrons from ubiquinol and passes them to cytochrome c | **4** |
| **IV** | **Cytochrome oxidase** | Takes electrons from cytochrome c and reduces O₂ to H₂O | **2** |

That gives **≈ 10 H⁺ per NADH**. Electrons that enter through complex II (from FADH₂) skip complex I, so they move only **≈ 6 H⁺**. This is why FADH₂ is worth less ATP than NADH.

Between the complexes run two **mobile carriers**: **ubiquinone** (Q), which diffuses **within the inner membrane**, and **cytochrome c**, which moves **in the intermembrane space**. The full path, as the take-home slide writes it: **NADH → I → Q → III → cyt c → IV → O₂**.

Ubiquinone is the meeting point of the two entrances: complex I (from NADH) and complex II (from succinate, via FADH₂) both hand their electrons to it, and it carries them on to complex III.

## The electron carriers

Inside the complexes, electrons travel on **small non-protein groups** bound to the proteins, and between complexes on the two mobile carriers. The lecture summarised them on one slide:

![The electron carriers of the respiratory chain: heme, iron-sulfur clusters and copper centres fixed in proteins, and ubiquinone and cytochrome c as mobile carriers, with the number of electrons each carries and the complexes it serves](assets/img/slide-8-35.png)

| Carrier | Chemistry | Electrons carried | Where |
|---|---|---|---|
| **Heme** (cytochromes) | Fe in a porphyrin ring, cycles Fe³⁺ ⇄ Fe²⁺ | **1** | Complexes III and IV, and cytochrome c |
| **Iron-sulfur clusters** | 2Fe-2S or 4Fe-4S, held by cysteines | **1** | Complexes I, II and III |
| **Copper centres** | Cu_A and Cu_B, cycle Cu²⁺ ⇄ Cu⁺ | **1** | Cytochrome oxidase (IV) |
| **Ubiquinone** (coenzyme Q) | Lipid-soluble quinone | **2 e⁻ + 2 H⁺** | Mobile in the membrane, from I and II to III |
| **Cytochrome c** | Small soluble heme protein | **1** | Mobile in the intermembrane space, from III to IV |

**Flavins** (FMN in complex I, FAD in complex II) accept the electrons at the entry points of the chain.

Every transfer is a **redox pair**: whenever one carrier is oxidised, the next is reduced. Electrons are never free.

### Heme and the cytochromes

**Heme** is an iron atom held in a **porphyrin ring**. The Fe cycles between **Fe³⁺ and Fe²⁺**, carrying **one electron at a time**. Proteins that contain heme are called **cytochromes**, and the heme is what makes them coloured. The **protein environment tunes each cytochrome's redox potential**, which is why there are a-, b- and c-type hemes with different positions in the chain. In **cytochrome c** the heme is attached covalently, through **two cysteine thioether bonds**.

![The heme group of cytochrome c, with an iron atom held at the centre of a porphyrin ring by four nitrogens and the ring attached covalently to the protein through two cysteine sulfur linkages](assets/img/fig-14-15.png)

### Iron-sulfur clusters

In an **iron-sulfur cluster**, iron atoms are coordinated by **inorganic sulfide** and by the **sulfur of cysteine side chains** in the protein. They come as **2Fe-2S** or **4Fe-4S**, and whatever the size, **a cluster transfers one electron at a time**.

![A four-iron four-sulfur cluster held in a polypeptide chain by bonds from four cysteine sulfur atoms](assets/img/fig-14-16.png)

### Ubiquinone and the semiquinone radical

**Ubiquinone** carries **two electrons and two H⁺**, but it takes them **one electron at a time**. Oxidised ubiquinone (Q) takes up one electron and one H⁺ to form **ubisemiquinone, a free radical**; a second electron and H⁺ give **ubiquinol (QH₂)**, the fully reduced form. Its long **hydrophobic tail** keeps it diffusing within the inner membrane.

![Ubiquinone picking up one electron and one proton to become the ubisemiquinone free radical, then a second electron and proton to become ubiquinol, with its long hydrophobic tail anchoring it in the membrane](assets/img/fig-14-17.png)

The half-reduced **semiquinone is a major source of superoxide**: an unpaired electron sitting on a mobile molecule can be handed to O₂ directly, outside the controlled path through complex IV. The radical is dangerous only if it accumulates, and it is specific to the quinone. Hemes, Fe-S clusters and copper centres carry their single electrons by changing a metal's oxidation state, without forming a radical.

## Redox potential sets the direction

**Redox potential** measures how strongly a molecule **holds on to electrons**. A **more negative** potential means a **weaker** hold (a good electron donor); a **more positive** potential means a **stronger** hold (a good acceptor). **Electrons flow spontaneously from negative to positive.**

Along the chain the redox potential **rises from NADH (≈ −320 mV) to O₂ (≈ +820 mV)**: each carrier has a stronger tendency to accept electrons than the one before, so electrons move "downhill". The free energy released comes in **three large steps**, and those three steps are exactly where the pumps sit: **complexes I, III and IV**.

![Free energy per electron and redox potential plotted along the chain, dropping in three large steps across NADH dehydrogenase, cytochrome c reductase and cytochrome c oxidase, with succinate dehydrogenase feeding in at ubiquinone](assets/img/fig-14-19.png)

Complex II feeds electrons in at ubiquinone, **below** the first big step, which is the energetic reason it cannot pump.

## How complexes I and IV pump: conformational change

The general model for **complexes I and IV** is a protein that changes shape to change both **which side** a proton-binding site faces and **how tightly** it binds:

1. **A → B.** The site **faces the matrix** and binds H⁺ with **high affinity**.
2. **B → C.** **Energy from electron transfer** drives a **conformational change**: the site now **faces outside** and its **affinity drops**.
3. **C → A.** The H⁺ is **released to the intermembrane space**; the protein **relaxes**, ready for the next cycle.

![A pump protein cycling through conformations: open to the matrix with high proton affinity, picking up a proton, occluded, then open to the crista space with low affinity, releasing it, with the transitions driven one way by electron transport](assets/img/fig-14-29.png)

Electron transfer makes one step of the cycle irreversible, which forces the whole cycle to run in one direction.

## Complex III and the Q cycle

**Complex III** (cytochrome b-c₁) is a **dimer** spanning the inner membrane. Each monomer contains **cytochrome b** (with **two hemes**, b_L and b_H), **cytochrome c₁** and an **iron-sulfur (Rieske) protein**. It takes electrons from **ubiquinol in the membrane** and passes them to **cytochrome c in the intermembrane space**.

![The dimeric cytochrome c reductase in the crista membrane with cytochrome b, cytochrome c1 and the Rieske iron-sulfur protein coloured, and a close-up of electron paths from ubiquinol through the Rieske cluster and heme c1 to cytochrome c, and through hemes bL and bH toward the matrix side](assets/img/fig-14-22.png)

Complex III does **not** pump by a conformational change. It moves H⁺ by the **Q cycle**, which uses the carrier principle from section 6: protons are taken up where Q is reduced and released where QH₂ is oxidised.

1. **Ubiquinol (QH₂) releases its 2 H⁺ to the intermembrane space** and gives up its 2 e⁻.
2. **One electron** goes via the **Fe-S centre** and **cytochrome c₁** to **cytochrome c**.
3. **The other** recycles through **hemes b_L and b_H** to **reduce a Q on the matrix side**, which **takes up H⁺ from the matrix**.

![The two steps of the Q cycle: in each, a ubiquinol docks near the crista side and releases two protons, sending one electron via the iron-sulfur cluster and heme c1 to cytochrome c and the other via hemes bL and bH to a quinone bound near the matrix side, which becomes a semiquinone in step 1 and ubiquinol in step 2](assets/img/fig-14-23.png)

The net result per 2 e⁻ delivered to cytochrome c: **4 H⁺ released outside, 2 H⁺ taken from the matrix**. Recycling half the electrons back into Q is what doubles the protons moved per electron that actually leaves.

## Complex IV: cytochrome oxidase

**Cytochrome oxidase** reduces O₂ to water, and O₂ needs **four** electrons for that. They arrive **one at a time from cytochrome c**, via a **copper centre (Cu_A)** and **heme a**, and are **collected at the heme a₃-Cu_B active site**, where **O₂ stays bound until it is fully reduced to 2 H₂O**.

![Four electrons from cytochrome c passing one at a time through copper atoms and heme a to a bimetallic site where heme a3 iron and a copper atom hold O2 until it has received all four, releasing two waters](assets/img/fig-14-25.png)

Holding O₂ until all four electrons have arrived is the point: partly reduced oxygen is superoxide or peroxide, and releasing either would damage the cell.

Protons, **per O₂**: **4 "chemical" H⁺ taken from the matrix** to make the two waters, plus **4 H⁺ pumped across the membrane**. The chemical ones do not cross the membrane, but removing them from the matrix still adds to the gradient.

The catalytic core is small inside a large complex. **Subunit II** receives electrons from cytochrome c at **Cu_A**; **subunit I** holds **heme a** and the binuclear **heme a₃-Cu_B centre**, where O₂ is reduced. The path is **Cu_A → heme a → heme a₃-Cu_B → O₂**.

![The dimeric cytochrome c oxidase in the crista membrane, and its functional core of subunits I, II and III with electrons passing from cytochrome c through copper ions and hemes to oxygen bound between heme a3 and a copper](assets/img/fig-14-24.png)

## Cyanide

**Cyanide blocks complex IV.** It binds the **heme a₃-Cu_B site**, where O₂ should bind, so O₂ cannot be reduced. Because every complex upstream depends on the next one taking its electrons, blocking the last step **halts the entire chain**: the carriers stay reduced, pumping stops, and ATP synthesis stops with it.

![The structure of cytochrome oxidase in the inner membrane with its coloured functional core, and cyanide binding at the heme a₃-Cu_B site, blocking O₂ reduction](assets/img/slide-8-43.png)

---

# ATP synthase

## A rotary motor

ATP synthase is a huge protein, but the principle is simple: **H⁺ flowing down the gradient turn a rotor, and the rotation drives ATP synthesis**.

![ATP synthase drawn and as a structure: a membrane rotor ring of c subunits attached to a central rotor stalk inside a catalytic head of alternating alpha and beta subunits, held stationary by a peripheral stator stalk anchored to the a subunit in the membrane](assets/img/fig-14-31.png)

| Part | Where | What it does |
|---|---|---|
| **F₀** | Membrane | H⁺ flowing through **subunit a** turn the **ring of c subunits** and the **central stalk** |
| **F₁ head** (α₃β₃) | Matrix | The rotating stalk drives **conformational changes in the β subunits** that make ATP |
| **Peripheral stalk (b)** | Alongside | A **stator** that holds the head still against rotation |

It makes **~3 ATP per turn**, one per β subunit, and can run at up to **~100 ATP per second**. The stator matters as much as the rotor: if the head could spin with the stalk, nothing would change shape and no ATP would be made.

## The gradient also drives transport

ATP is made in the matrix but used in the cytosol, and ADP, phosphate and pyruvate have to get in. The same proton-motive force pays for that traffic, and each component does a different job:

- **The voltage gradient** drives the **ADP/ATP carrier**, which exchanges **ADP³⁻ in for ATP⁴⁻ out**. One net negative charge leaves the matrix per exchange, and the matrix is negative, so the membrane potential pushes the exchange in this direction.
- **The pH gradient** drives the import of **pyruvate** and **phosphate** together with **H⁺**.
- The **outer membrane** is freely permeable to all of these small molecules, through porins.

![Metabolite transport across the inner membrane: the voltage gradient drives exchange of ADP³⁻ in for ATP⁴⁻ out, and the pH gradient drives import of pyruvate and phosphate together with H⁺](assets/img/slide-8-49.png)

This is part of the cost of making ATP: some of the gradient is spent moving the substrates and the product, not only on the synthase.

## Free energy: why the cell keeps ATP far from equilibrium

This is the mathematical part of the lecture. For ATP → ADP + Pᵢ,

$$\Delta G = \Delta G^\circ + RT \ln \frac{[\text{ADP}][\text{P}_i]}{[\text{ATP}]}$$

When all the concentrations are 1 M the logarithm is zero and **ΔG = ΔG°**, so ΔG° is a **constant**, the standard free-energy change. At equilibrium ΔG = 0, which gives **ΔG° = −RT ln K**.

![Derivation linking hydrolysis and synthesis rates of ATP to the equilibrium constant, and showing that delta G equals delta G standard plus RT ln of ADP times phosphate over ATP, so that delta G standard equals minus RT ln K](assets/img/fig-14-30.png)

The two quantities answer different questions. **ΔG° sets where the equilibrium lies. ΔG says how far a reaction is from it**, and so how hard it is being driven. ΔG is to a chemical reaction what the proton-motive force is to the movement of protons: the driving force.

Cells keep **[ATP]/[ADP][Pᵢ] far above equilibrium**. That is why ATP hydrolysis releases about **−11 to −13 kcal/mol in vivo**, against **−7.3 kcal/mol under standard conditions**. The extra energy is not in the phosphate bond; it is in the concentration ratio, and mitochondria are what keep that ratio high.

## ATP synthase runs in reverse

ATP synthase is **reversible**. Which way it turns depends on a comparison: the **proton-motive force** against the **ΔG of ATP synthesis**, which is set by the ATP/ADP ratio.

- **Synthesis.** When the proton-motive force **exceeds** the ΔG needed for ATP synthesis, H⁺ flow into the matrix and drive ATP formation.
- **Hydrolysis.** When the gradient **collapses** (in **anoxia** or **ischaemia**, for instance, where there is no O₂ to accept electrons, so no pumping), the motor **runs backwards**: it **burns ATP to pump H⁺ out** of the matrix.

![ATP synthase in both directions: in synthesis, protons flowing into the matrix turn the rotor and ADP and phosphate are joined into ATP; in hydrolysis, ATP is split and the rotor turns the other way, pumping protons out of the matrix](assets/img/slide-8-51.png)

Running backwards is not a design flaw: it is simply what any coupled machine does when the balance of forces is reversed, just as a water wheel becomes a pump if you drive it with a motor. But in a failing cell it would drain the cytosolic ATP that glycolysis is still making, so cells **limit this wasteful reversal with the inhibitory protein IF1**, which blocks the hydrolysis direction. IF1 regulates ATP synthase itself; the uncoupling proteins below are a separate route by which protons re-enter the matrix.

## Uncouplers turn the gradient into heat

**Uncouplers** let protons back into the matrix **without passing through ATP synthase**. They are either chemical **protonophores**, which carry H⁺ across the membrane, or proteins such as **UCP1 in brown fat**. The consequence has three parts: **O₂ consumption continues** (the chain keeps running, and runs faster, since the gradient no longer holds it back), **ATP synthesis stops**, and the **energy becomes heat**.

That is the purpose of UCP1. Brown adipocytes are specialised for **thermoregulation**: they burn fuel with their mitochondria deliberately uncoupled, so the energy of the gradient is released as heat rather than stored as ATP.

### The uncoupling protein family

UCP1 is the founding member of a small family, and the lecture named its relatives. All of them are inner-membrane carriers of the **SLC25 family**, the same family as the ADP/ATP carrier. What differs is where they are made and how certain their job is (the detail below is from the wider literature):

| Protein | Main tissue | Role |
|---|---|---|
| **UCP1** (thermogenin) | **Brown fat** | The one proven thermogenic uncoupler: a regulated proton leak that turns the gradient into heat |
| **UCP2** | Widely expressed, including immune cells and pancreatic β cells | Mild uncoupling that lowers the proton-motive force and with it ROS production; also proposed to export metabolites from the matrix |
| **UCP3** | Mainly **skeletal muscle** (and heart) | Linked to handling fatty acids when they are the main fuel; mild uncoupling |
| **UCP4, UCP5** | Mainly **brain** | Thought to protect neurons by limiting ROS and calcium overload |

The logic that ties UCP2 to UCP5 together is **mild uncoupling**. Reactive oxygen species are made mostly when the chain is backed up: a high proton-motive force slows electron flow, carriers such as the semiquinone stay reduced for longer, and electrons leak to O₂. Letting a few protons back in keeps electrons moving and lowers ROS, at a small cost in ATP. Only UCP1 leaks enough protons to heat a tissue; for the others, how much they uncouple in living cells is still debated.

### Shivering is a different route to heat

**Shivering** does not act through uncoupling proteins. It is rapid involuntary contraction of skeletal muscle, and the heat comes from the ATP that contraction hydrolyses, with the mitochondria fully coupled. **Brown fat** makes heat **without** contraction, through UCP1, which is why it is called **non-shivering thermogenesis**. The two are separate defences against cold.

## Mitochondria buffer cytosolic metabolism

The last slide of the section shows mitochondria absorbing whatever the cytosol cannot handle, in both directions:

| Condition | What mitochondria do |
|---|---|
| **Starvation** | Use **amino acids** to fuel ATP production |
| **Cells relying on glycolysis for rapid ATP** | **Remove excess NADH** from the cytosol, re-oxidising it so glycolysis can keep running |
| **Excess nutrients** | Supply the cytosol with **citrate** for synthesis of fatty acids and sterols |
| **Excess nutrients** | Supply the cytosol with **reducing power (as NADPH)** for biosynthesis, using excess mitochondrial reducing power |

![Mitochondria buffering cytosolic metabolism: under starvation they burn amino acids for ATP, in glycolytic cells they remove excess cytosolic NADH, and under excess they export citrate for fatty-acid and sterol synthesis and reducing power as NADPH](assets/img/slide-8-52.png)

The NADH point matters for the muscle case next: glycolysis produces NADH, and it stops once NAD⁺ runs out, so a cell running glycolysis fast still needs somewhere to re-oxidise it.

---

# Case: skeletal muscle

## Fibre types

Skeletal muscle is the lecturer's own system, and it makes the point that mitochondrial content is tuned to what a tissue does. People usually talk about **slow-twitch** and **fast-twitch** fibres, but there are really three main types:

![Skeletal muscle fibre types: type I slow-twitch with aerobic oxidative metabolism, type IIA intermediate fast-twitch with mixed metabolism, and type IIX fast-twitch with anaerobic glycolytic metabolism, beside cross-sections of endurance and strength muscle](assets/img/slide-8-54.png)

| Type | Twitch | Metabolism | Mitochondria | Behaviour |
|---|---|---|---|---|
| **Type I** | Slow | **Oxidative** | **Many**, with many capillaries | **Fatigue-resistant**: endurance, posture |
| **Type IIA** | Fast | **Oxidative-glycolytic** | **Intermediate** | Between the two |
| **Type IIX** | Fast | **Glycolytic** | **Few** | **High power, fatigues quickly** |

The logic runs from section 1: oxidative metabolism gives ~15 times more ATP per glucose and can run as long as O₂ and fuel are delivered, which is what endurance needs. Glycolysis gives little ATP per glucose but fast, without O₂, which is what a sprint needs, and it runs out quickly.

## Mitochondrial content follows fibre type

The data slide backs this up in two panels. On the left, immunostaining of muscle sections for **type I, IIa and IIx** fibres shows that **biceps** and **gastrocnemius** contain different **fibre-type proportions**, and different average cross-sectional areas for each type.

On the right, **mean mitochondrial protein expression** is compared between **type I** fibres (**PRE-I**) and **type II** fibres (**PRE-II**), and is significantly higher in type I (P < 0.01). The plot comes from a single-fibre proteomics study of the **vastus lateralis** in men (Reisman et al., *Nature Communications* 2024). Fibres were isolated from biopsies, typed, pooled and analysed by mass spectrometry, **before (PRE)** and **after (POST)** eight weeks of either moderate-intensity continuous training or sprint-interval training. PRE-I and PRE-II are therefore the untrained baseline: each point is one participant, and type I and type II fibres were compared within the same person.

The study's main conclusion sharpens the lecture's point. Most of the difference between fibre types is in **how many mitochondria** a fibre has, not in **what kind**: once the data were corrected for total mitochondrial content, fewer than a third of the protein differences between type I and type II fibres remained.

![Muscle sections immunostained for type I, IIa and IIx fibres, with fibre-type proportions and cross-sectional areas in biceps and gastrocnemius, and a box plot of mean mitochondrial protein expression higher in the PRE-I group than in PRE-II, P below 0.01](assets/img/slide-8-55.png)

So mitochondrial content differs both **between fibre types** and **between muscles**, because different muscles are built from different mixtures of fibres.

## Calcium couples contraction to ATP supply

A contracting muscle cannot wait for a slow signal to tell its mitochondria to work harder. The coupling is built into the contraction signal itself, **Ca²⁺**:

1. **The SR releases Ca²⁺**, which triggers contraction.
2. **Mitochondria take up Ca²⁺** via the **mitochondrial calcium uniporter (MCU)**, which also **buffers the cytosolic Ca²⁺ transient**.
3. **Matrix Ca²⁺ activates dehydrogenases**: **pyruvate dehydrogenase**, **isocitrate dehydrogenase** and **α-ketoglutarate dehydrogenase**, so more NADH is made.
4. **ATP supply matches demand**: the extra ATP pays for the two big consumers of contraction, **myosin ATPase** and **SERCA** pumping Ca²⁺ back into the SR.

![Ca²⁺ imaging with Fluo-4 in an engineered muscle at baseline and under 50 Hz electrical pulse stimulation, a trace of the normalised Ca²⁺ transient and force over three tetani, and the four steps from SR Ca²⁺ release through mitochondrial Ca²⁺ uptake and dehydrogenase activation to ATP supply matching demand](assets/img/slide-8-56.png)

The figure comes from the lecturer's work on engineered 3D muscle bundles: **Fluo-4** Ca²⁺ imaging during **50 Hz electrical pulse stimulation**, and the normalised Ca²⁺ transient (green) tracking force (red) over three tetani. The same ion that makes the muscle contract tells the mitochondria to supply the ATP for it.

## Pompe disease and muscle on a chip

Pompe disease is why the lecturer works on muscle, and it shows how an energy-storage defect becomes a muscle disease. The slides do not cover it; the account below is background to what he said about his research.

**What goes wrong.** Pompe disease (glycogen storage disease type II) is an **autosomal recessive** deficiency of **acid α-glucosidase (GAA)**, the enzyme that breaks down glycogen **inside lysosomes**. Muscle keeps a large glycogen store as fuel, and a small share of it is always being taken up by autophagy and digested in lysosomes. Without GAA that share is never digested, so **glycogen accumulates in lysosomes**, above all in **skeletal and cardiac muscle**. The lysosomes swell, autophagy backs up, and the contractile apparatus is disrupted.

**Why it is a muscle disease and not a fuel shortage.** Glycogen breakdown in the cytosol, which supplies glucose for glycolysis and the mitochondria, still works. The damage comes from what piles up, not from what is missing. The mitochondria are hit secondarily: with autophagy blocked, damaged mitochondria are not cleared by mitophagy, and affected muscle shows abnormal mitochondria, more ROS and disturbed Ca²⁺ handling. That is where this lecture's material, Ca²⁺ coupling and mitochondrial quality control, meets the disease.

**How it presents.** The **classic infantile** form, with almost no enzyme activity, causes severe cardiomyopathy and profound weakness and is fatal in the first year without treatment. **Late-onset** forms, with some residual activity, cause slowly progressive weakness of the limb-girdle and respiratory muscles.

**Treatment, and why a chip.** The standard treatment is **enzyme replacement therapy** with recombinant GAA, which is taken up into lysosomes but reaches skeletal muscle poorly, so gene and cell therapies are being developed. Testing them needs human muscle that behaves like muscle. Engineered **3D human muscle bundles** grown on a chip from patient-derived cells contract, generate force and produce the Ca²⁺ transients shown above, so the effect of a treatment on function, not only on glycogen, can be measured.

---

# When mitochondria fail

## The mitochondrial genome

Human **mtDNA** is a circle of **16,569 bp** carrying **37 genes**: **13 proteins, 22 tRNAs and 2 rRNAs**. Everything else a mitochondrion needs, over a thousand proteins, is encoded in the nucleus, made in the cytosol and imported.

![The circular human mitochondrial genome of 16,569 base pairs, with genes for rRNAs, tRNAs and protein subunits of NADH dehydrogenase, cytochrome oxidase, cytochrome b and ATP synthase, and a noncoding region at the origin of replication](assets/img/fig-14-59.png)

The 13 proteins are all core subunits of the respiratory chain and ATP synthase:

| Complex | mtDNA-encoded subunits |
|---|---|
| **Complex I** (NADH dehydrogenase) | 7: ND1, ND2, ND3, ND4, ND4L, ND5, ND6 |
| **Complex III** (cytochrome b-c₁) | 1: cytochrome b |
| **Complex IV** (cytochrome c oxidase) | 3: COX1, COX2, COX3 |
| **Complex V** (ATP synthase) | 2: ATP6, ATP8 |
| **Complex II** (succinate dehydrogenase) | **None**: entirely nuclear |

Complex II is the only complex of the chain with **no** mtDNA-encoded subunit: its genes have all moved to the nucleus.

![A human cell with nuclear genes translated on cytoplasmic ribosomes into 1200 to 1600 different mitochondrial proteins imported through TOM and TIM, while mtDNA is transcribed and translated on mitochondrial ribosomes into 13 proteins, both sets assembling into respiratory complexes](assets/img/fig-14-60.png)

## mtDNA disease: inheritance, heteroplasmy, threshold

mtDNA mutations follow rules that nuclear genes do not, and four terms carry them:

- **Maternal inheritance.** mtDNA comes from the **oocyte**; the sperm contributes none. An mtDNA disease passes from a mother to all her children, and never from a father.
- **Heteroplasmy.** A cell has many copies of mtDNA, and **normal and mutant mtDNA can coexist in one cell**.
- **Threshold effect.** Symptoms appear only once the **mutant fraction exceeds a tissue-specific level**. Tissues that depend most on oxidative phosphorylation (brain, muscle, heart, retina, cochlea) reach their threshold first.
- **Bottleneck.** The mutant load can **shift sharply from mother to child**, because only a small number of mtDNA copies pass through the germ line into each oocyte.

![A primordial germ cell with a mixture of normal and mutant mitochondria giving rise to oocytes with high, intermediate and low proportions of mutant mtDNA, leading to affected, mildly affected and unaffected offspring](assets/img/fig-14-63.png)

The disease slide sorts mtDNA disorders by the kind of gene hit. The specific variants are on the slide as examples; what matters for the exam is the logic that connects gene class to disease.

![The mtDNA disease slide: 16,569 bp, 37 genes, the 13 protein-coding genes by complex, the four principles of maternal inheritance, heteroplasmy, threshold and bottleneck, and example diseases for protein-coding, tRNA and rRNA genes and for single large-scale deletions](assets/img/slide-8-58.png)

| Gene class | Examples | Main systems |
|---|---|---|
| **Protein-coding** | **LHON** (*MT-ND4*, *MT-ND1*, *MT-ND6*); **NARP / maternally inherited Leigh** (*MT-ATP6*) | Optic nerve; nerves, retina, brainstem |
| **tRNA** | **MELAS** and **MIDD** (*MT-TL1* m.3243A>G); **MERRF** (*MT-TK*) | Brain and muscle / pancreas and cochlea; muscle, brain |
| **rRNA** | **Aminoglycoside-induced and non-syndromic deafness** (*MT-RNR1* m.1555A>G) | Cochlea |
| **Single large-scale deletions** (mostly sporadic) | **CPEO → Kearns-Sayre → Pearson**: one clinical spectrum | Eye muscles, retina, heart conduction; bone marrow and pancreas in Pearson syndrome |

Two points to take from it. A **tRNA** mutation affects the translation of **all 13** mtDNA-encoded proteins, not one, which is why tRNA mutations give broad, multisystem disease. The **rRNA** mutation makes the mitochondrial ribosome **more like a bacterial one**, so aminoglycoside antibiotics, which target bacterial ribosomes, damage the mitochondria of the cochlea: the endosymbiotic origin, turning up as a drug side effect.

**Multiple mtDNA deletions, or mtDNA depletion, point to a nuclear gene defect**, because they mean the machinery that maintains mtDNA is broken, and that machinery is encoded in the nucleus.

## Nuclear genes cause most mitochondrial disease

There are **1,136** human mitochondrial proteins (MitoCarta3.0) and only **13** are encoded by mtDNA. All the others are nuclear-encoded and imported, so it follows that **most mitochondrial disease is caused by nuclear genes**, and is inherited in **Mendelian** fashion: **autosomal recessive** (most), **dominant** (e.g. *OPA1*, some *POLG*) or **X-linked** (e.g. *TIMM8A*).

![Nuclear genes causing mitochondrial disease through eight pathways: mtDNA maintenance, OXPHOS subunits and assembly, fusion and fission, protein import, metabolite carriers, coenzyme Q10 synthesis, iron-sulfur clusters and mitochondrial translation, with example genes and diseases for each](assets/img/slide-8-59.png)

The slide lists eight pathways, each with example genes and diseases:

| Pathway | Example genes | Example diseases |
|---|---|---|
| **mtDNA maintenance** | *POLG*, *TWNK*, *TK2*, *MPV17* | PEO with multiple deletions; Alpers; depletion syndromes |
| **OXPHOS subunits and assembly** | *NDUFS1*, *SURF1*, *SCO2*, *SDHA* | Leigh syndrome; isolated complex deficiencies |
| **Fusion and fission** | *OPA1*, *MFN2*, *DNM1L* | Dominant optic atrophy; CMT2A; fission-defect encephalopathy |
| **Protein import** | *TIMM8A* | Mohr-Tranebjærg syndrome (deafness-dystonia) |
| **Metabolite carriers (SLC25)** | *SLC25A4*, *SLC25A20*, *SLC25A13* | PEO / myopathy; CACT deficiency; citrin deficiency |
| **Coenzyme Q₁₀ synthesis** | *COQ2*, *COQ4*, *PDSS2* | Primary CoQ₁₀ deficiency (kidney, muscle, CNS) |
| **Iron-sulfur clusters** | *FXN*, *ISCU*, *NFU1* | Friedreich ataxia; ISCU myopathy; multiple mitochondrial dysfunction |
| **Mitochondrial translation** | *GFM1*, *TSFM*, *DARS2* | Combined OXPHOS deficiency; LBSL |

Every one of these pathways appeared earlier in the lecture: fusion and fission in section 2, SLC25 carriers in the inner membrane, coenzyme Q and Fe-S clusters as electron carriers in section 7, Fe-S assembly as the reason ρ⁰ cells still need the organelle. The disease slide is the lecture read backwards.

## Mitochondrial donation

For mtDNA disease, where the mutation rides in the mother's mitochondria, one option is to **leave the mother's nuclear DNA and replace her mitochondria** with a donor's. Two techniques do this, and they differ in **when**:

| | Maternal spindle transfer (MST) | Pronuclear transfer (PNT) |
|---|---|---|
| **When** | **Before fertilisation** | **After fertilisation** (the Newcastle method) |
| **Step 1** | Take the mother's egg (mutant mtDNA) | Fertilise both the mother's and the donor's eggs |
| **Step 2** | Remove the **spindle-chromosome complex** | Remove the **pronuclei** from the mother's zygote |
| **Step 3** | Insert it into an **enucleated donor egg** | Insert them into an **enucleated donor zygote** |
| **Step 4** | Fertilise, then embryo transfer | Embryo transfer |

**The result** either way: **nuclear DNA from both parents, plus mitochondria (mtDNA, 37 genes) from the donor.**

![Mitochondrial donation by maternal spindle transfer before fertilisation and pronuclear transfer after fertilisation, the result of nuclear DNA from both parents with mitochondria from a donor, the open questions, and the legal status in the United Kingdom, Australia and the United States as of September 2026](assets/img/slide-8-60.png)

**Open questions** remain: **carry-over of maternal mtDNA** (low-level heteroplasmy, with possible **reversion** to the mutant type), the need for **long-term follow-up**, and the **inheritance of donor mtDNA by future generations**, through daughters, since mtDNA is maternally inherited.

Where it stands, as of the slide (September 2026):

| Country | Status |
|---|---|
| **United Kingdom** | Legal since 2015; the HFEA licenses case by case. The Newcastle PNT programme reported **8 children born** (NEJM, July 2025), with maternal mutant mtDNA undetectable or at levels very unlikely to cause disease |
| **Australia** | Legal since 2022 (Maeve's Law). mitoHOPE (Monash): pre-clinical licence November 2025, first MST in training March 2026; clinical trial expected from late 2027 |
| **United States** | Since December 2015, annual appropriations riders bar the FDA from accepting applications for mitochondrial replacement, so clinical use cannot legally proceed |

---

# Take-home messages

The lecture closed on nine points:

1. **Chemiosmosis:** electron transport builds an H⁺ gradient that drives ATP synthesis.
2. **Fuel oxidation** in the matrix (citric acid cycle) loads electrons onto NADH and FADH₂.
3. **Electrons flow** NADH → I → Q → III → cyt c → IV → O₂, towards higher redox potential.
4. **Complexes I, III and IV** move H⁺ (≈ 10 H⁺ per NADH); complex II feeds Q without pumping.
5. **Proton-motive force** ≈ 180 mV = membrane potential (ΔV) + pH gradient (ΔpH).
6. **ATP synthase** is a reversible rotary motor; the gradient also drives ADP/ATP, Pᵢ and pyruvate transport.
7. **Uncouplers** (protonophores; UCP1 in brown fat) dissipate the gradient: O₂ use continues, ATP synthesis stops, energy becomes heat.
8. **Muscle:** mitochondrial content tracks fibre type; Ca²⁺ couples contraction to ATP supply.
9. **Disease:** mtDNA (maternal, heteroplasmic) or nuclear (Mendelian) defects; mitochondrial donation can prevent mtDNA disease transmission.

![The nine take-home messages of the lecture, from chemiosmosis through the respiratory chain, the proton-motive force, ATP synthase and uncouplers to muscle and mitochondrial disease](assets/img/slide-8-61.png)

---

# Appendix: the reference tables

The deck ends with two reference tables, which the lecturer marked as examples rather than exhaustive lists. They are here for completeness; the exam asks for concepts, not variants.

## Diseases caused by mtDNA mutations

| Gene class | Disease | Gene (common variant) | Main systems affected |
|---|---|---|---|
| Protein-coding | Leber's hereditary optic neuropathy (LHON) | *MT-ND4* m.11778G>A; *MT-ND1* m.3460G>A; *MT-ND6* m.14484T>C | Optic nerve |
| | Neuropathy, ataxia, retinitis pigmentosa (NARP) | *MT-ATP6* m.8993T>G | Peripheral nerves, retina, brain |
| | Maternally inherited Leigh syndrome (MILS) | *MT-ATP6* m.8993T>G/C; *MT-ND* genes | Brainstem, basal ganglia |
| tRNA | MELAS | *MT-TL1* m.3243A>G (also *MT-ND5*) | Brain, muscle |
| | Maternally inherited diabetes and deafness (MIDD) | *MT-TL1* m.3243A>G | Pancreas, cochlea |
| | Myoclonic epilepsy with ragged-red fibres (MERRF) | *MT-TK* m.8344A>G | Muscle, brain |
| | Mitochondrial cardiomyopathy | tRNA genes (e.g. *MT-TI*), *MT-ND* genes | Heart, skeletal muscle |
| rRNA / tRNA | Non-syndromic and aminoglycoside-induced deafness | *MT-RNR1* m.1555A>G; *MT-TS1* | Cochlea |
| Single large-scale deletion | Chronic progressive external ophthalmoplegia (CPEO) | Single deletion (also *MT-TL1* point variants) | Extraocular muscles |
| | Kearns-Sayre syndrome (KSS) | Single deletion | Eye muscles, retina, cardiac conduction |
| | Pearson syndrome | Single deletion | Bone marrow, exocrine pancreas |

## Mitochondrial diseases caused by nuclear gene defects

| Category | Example disease | Key nuclear genes | Main systems affected |
|---|---|---|---|
| mtDNA maintenance | PEO with multiple mtDNA deletions | *POLG*, *POLG2*, *TWNK*, *SLC25A4*, *RRM2B* | Extraocular and skeletal muscle |
| | Alpers-Huttenlocher syndrome | *POLG* | Brain, liver |
| | mtDNA depletion syndromes | *TK2*, *DGUOK*, *SUCLA2*, *RRM2B*, *MPV17* | Muscle, liver, CNS |
| OXPHOS subunits and assembly | Leigh syndrome (nuclear) | *NDUFS1*, *NDUFV1*, *SURF1*, *COX10*, *SCO2* | Brainstem, basal ganglia |
| | Complex II deficiency | *SDHA*, *SDHB*, *SDHAF1* | Brain, muscle |
| | Cytochrome c oxidase (COX) deficiency | *SURF1*, *SCO1*, *SCO2*, *COA6*, *LRPPRC* | Brain, muscle, heart, liver |
| | Complex V deficiency | *TMEM70*, *ATP5F1E* | Brain, heart, metabolic crises |
| Fusion and fission | Dominant optic atrophy | *OPA1* | Optic nerve |
| | Charcot-Marie-Tooth type 2A | *MFN2* | Peripheral nerves |
| | Encephalopathy due to defective fission | *DNM1L*, *MFF* | Brain |
| Protein import | Mohr-Tranebjærg (deafness-dystonia) syndrome | *TIMM8A* | Hearing, motor system |
| Metabolite carriers | Carnitine-acylcarnitine translocase deficiency | *SLC25A20* | Liver, heart, muscle |
| | Citrin deficiency (citrullinaemia type II) | *SLC25A13* | Liver |
| | Mitochondrial pyruvate carrier deficiency | *MPC1* | Brain |
| Coenzyme Q₁₀ synthesis | Primary CoQ₁₀ deficiency | *COQ2*, *COQ4*, *COQ6*, *PDSS1*, *PDSS2* | Kidney, muscle, CNS |
| Iron-sulfur clusters | Friedreich's ataxia | *FXN* | Spinal cord, cerebellum, heart |
| | ISCU myopathy | *ISCU* | Skeletal muscle |
| | Multiple mitochondrial dysfunctions syndromes | *NFU1*, *BOLA3*, *IBA57*, *ISCA2* | Brain, lung, heart |
| Mitochondrial translation | Combined OXPHOS deficiency | *MRPS16*, *GFM1*, *TSFM* | Brain, muscle, liver |
| | mt-aminoacyl-tRNA synthetase disorders (e.g. LBSL, PCH6) | *DARS2*, *RARS2*, *YARS2*, *AARS2*, *VARS2* | CNS, muscle |
