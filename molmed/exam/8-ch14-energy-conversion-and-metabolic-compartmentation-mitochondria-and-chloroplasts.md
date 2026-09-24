---
title: Session 8. Mitochondria and Energy Conversion
description: Open exam questions for Alessandro Iuliano's lecture, in the style of the course's sample questions, with model answers.
tags: [molmed, session-8, ch14, exam]
---

Q: Isolated mitochondria are placed in a sealed chamber with an oxygen electrode, in a buffer containing pyruvate and phosphate. The following are added one after another, and the rate of O₂ consumption is recorded after each addition:

1. ADP
2. a compound that blocks the proton channel of ATP synthase
3. a protonophore (a chemical uncoupler that carries H⁺ across the inner membrane)
4. cyanide

**a)** Predict how the rate of O₂ consumption changes after each addition, and explain each prediction.

**b)** What does this experiment show about the coupling between electron transport and ATP synthesis?

**c)** Brown fat contains a protein, UCP1, with an effect similar to step 3. What is its physiological purpose?
A: **In brief:** **ADP**: O₂ use **rises** (protons return through ATP synthase). **ATP synthase blocker**: it **falls** (the gradient builds up and stalls the pumps). **Protonophore**: it **rises sharply**, with no ATP made. **Cyanide**: it **stops** (complex IV blocked). Electron transport and ATP synthesis are coupled only through the **proton gradient**. **UCP1** turns the gradient into **heat**.

**a)**
1. **ADP → O₂ consumption rises.** ATP synthase can now make ATP, letting **H⁺ flow back** into the matrix; this lowers the proton-motive force, which had been holding back the pumps, so electrons flow faster and O₂ is consumed faster.
2. **ATP synthase blocker → O₂ consumption falls** (to a low leak rate). Protons can no longer return through ATP synthase, so the gradient **builds up** until the energy needed to pump another proton equals the energy released by electron transport; the chain then **slows down** because it cannot pump against the gradient.
3. **Protonophore → O₂ consumption rises sharply** (even though ATP synthase is still blocked). H⁺ now return **without passing through ATP synthase**, the gradient collapses, and the chain runs at maximal rate. **No ATP is made**; the energy is released as **heat**.
4. **Cyanide → O₂ consumption stops.** Cyanide binds the **heme a₃-CuB site of complex IV**, where O₂ is reduced, so electrons can no longer be passed to O₂; all upstream carriers remain reduced and the **entire chain stops**.

**b)** Electron transport and ATP synthesis are **coupled through the proton gradient** (chemiosmosis), not directly. The chain runs only as fast as protons can re-enter the matrix; blocking ATP synthase slows respiration, while dissipating the gradient lets respiration run without ATP synthesis. The **H⁺ gradient is the intermediate** linking the two processes.

**c)** **Thermogenesis (non-shivering heat production).** UCP1 is a regulated **proton leak** in the inner membrane of brown adipocytes: O₂ consumption continues, but the energy of the gradient is released as **heat** instead of being stored as ATP, keeping the body (especially newborns) warm.

Read more: [Uncouplers turn the gradient into heat](#/chapter/ch14-energy-conversion-and-metabolic-compartmentation-mitochondria-and-chloroplasts/uncouplers-turn-the-gradient-into-heat)
Tags: chemiosmosis, type/apply, core

---

Q: The proton-motive force across the inner mitochondrial membrane is about 180 mV.

**a)** The proton-motive force has two components. Name them, state which side of the membrane is positive and which more acidic, and explain why they can be added together.

**b)** ATP is made in the matrix but used in the cytosol, and ADP, phosphate and pyruvate must enter the matrix. Explain how each component of the proton-motive force drives this traffic.

**c)** In a heart muscle cell during ischaemia (no O₂ supply), ATP synthase starts to run in reverse. Explain why this happens and why it is harmful. How does the cell limit it?
A: **In brief:** **ΔV** (matrix negative) plus **ΔpH** (matrix alkaline): both push H⁺ in and can be expressed in the same units, so they add. **ΔV** drives the **ADP/ATP exchanger**, **ΔpH** drives **phosphate and pyruvate** import. In **ischaemia** the gradient collapses and ATP synthase **runs backwards**, burning ATP; **IF1** blocks this.

**a)** (1) The **membrane potential (ΔV)**, about 160 to 170 mV: pumping positive charge out makes the **matrix negative** relative to the intermembrane space. (2) The **pH gradient (ΔpH)**, about 20 to 30 mV: the matrix is **more alkaline** (about 0.5 pH unit higher), the intermembrane space more acidic. Both push **H⁺ into the matrix**. They can be added because both are forms of **free energy** per proton: a pH difference can be expressed in the same units as a voltage (about 61 mV per pH unit at 37 °C).

**b)** The **voltage (ΔV)** drives the **ADP/ATP carrier**, which exchanges **ADP³⁻ in for ATP⁴⁻ out**: one net negative charge leaves the negative matrix per exchange, so the membrane potential favours this direction. The **pH gradient** drives import of **phosphate** and **pyruvate** together with **H⁺** (symport). The outer membrane is freely permeable to these small molecules through **porins**. Part of the gradient is therefore spent on transport, not only on ATP synthase.

**c)** ATP synthase is **reversible**; its direction depends on whether the proton-motive force exceeds the ΔG of ATP synthesis. Without O₂, the chain cannot pump, the **gradient collapses**, and ATP synthase runs **backwards, hydrolysing ATP to pump H⁺ out** of the matrix. This **drains the ATP** that glycolysis is still making in the cell, worsening the energy crisis. The inhibitory protein **IF1** binds ATP synthase and blocks the hydrolysis direction.

Read more: [The proton-motive force](#/chapter/ch14-energy-conversion-and-metabolic-compartmentation-mitochondria-and-chloroplasts/the-proton-motive-force)
Tags: chemiosmosis, atp-synthase

---

Q: The oxidation of one NADH by the respiratory chain yields about 2.5 ATP, whereas one FADH₂ yields only about 1.5 ATP.

**a)** Describe the path of electrons from NADH to O₂, naming the complexes and the two mobile carriers.

**b)** What determines the direction in which electrons flow along the chain?

**c)** Explain why FADH₂ yields less ATP than NADH.

**d)** Complex III does not pump protons by a conformational change but by the Q cycle. Explain the principle that allows electron transfer to move protons across the membrane.

**e)** Why is it important that complex IV holds O₂ bound until it has received four electrons?
A: **In brief:** **NADH → I → Q → III → cyt c → IV → O₂**, down the redox potential. **FADH₂** enters at Q via **complex II**, which pumps nothing, skipping complex I: about **6 H⁺ instead of 10**. Carriers **take up H⁺ when reduced and release it when oxidised**; on opposite faces this moves protons (the Q cycle). O₂ stays bound until fully reduced, avoiding **reactive oxygen species**.

**a)** **NADH → complex I (NADH dehydrogenase) → ubiquinone (Q) → complex III (cytochrome b-c₁) → cytochrome c → complex IV (cytochrome oxidase) → O₂**, which is reduced to H₂O. **Ubiquinone** is mobile **within the inner membrane**; **cytochrome c** is mobile in the **intermembrane space**. Inside the complexes, electrons travel on flavins, Fe-S clusters, hemes and copper centres.

**b)** **Redox potential.** Each carrier has a higher (more positive) redox potential than the one before, so electrons flow spontaneously "downhill" from NADH (about −320 mV) to O₂ (about +820 mV). The energy is released in **three large steps**, and these are where the three proton pumps sit: **complexes I, III and IV**.

**c)** FADH₂ (in succinate dehydrogenase, **complex II**) passes its electrons **directly to ubiquinone**, bypassing **complex I**. Complex II **pumps no protons**, because its electrons enter below the first large energy step. Electrons from NADH move about **10 H⁺** (4 + 4 + 2); electrons from FADH₂ move only about **6 H⁺** (4 + 2), so less ATP is made.

**d)** Electron and proton transfer are chemically linked: when a carrier such as **ubiquinone** is **reduced**, it takes up **H⁺** from the water on one side; when it is **oxidised**, it **releases H⁺** on the other side. If uptake happens on the **matrix side** and release on the **intermembrane-space side**, electron transfer moves protons across the membrane. In the Q cycle, QH₂ releases its H⁺ outside; one electron goes on to cytochrome c, the other is **recycled** via the b hemes to reduce another Q on the matrix side, which takes up H⁺ from the matrix. Net: **4 H⁺ out** per two electrons delivered to cytochrome c.

**e)** Partly reduced oxygen species (**superoxide, peroxide**) are **highly reactive** and damage cells. Holding O₂ at the heme a₃-CuB site until it is fully reduced to **2 H₂O** prevents their release.

Read more: [Four complexes, three pumps](#/chapter/ch14-energy-conversion-and-metabolic-compartmentation-mitochondria-and-chloroplasts/four-complexes-three-pumps)
Tags: respiratory-chain, core

---

Q: A woman with mild muscle weakness carries the mitochondrial DNA mutation m.3243A>G in the gene for a mitochondrial tRNA (associated with MELAS). She has three children: one is unaffected, one has mild symptoms, and one has severe neurological disease. Her husband's mtDNA is normal.

**a)** Explain why all three children inherited the mutation, but with such different severity. Use the terms heteroplasmy, threshold effect and bottleneck.

**b)** Why does a mutation in a single mitochondrial tRNA gene affect all of the mtDNA-encoded respiratory chain subunits, and why are the brain and muscle mainly affected?

**c)** Describe how mitochondrial donation could prevent transmission of this disease to a future child. What does the child inherit from each of the three people involved, and what open questions remain?
A: **In brief:** mtDNA is **maternally inherited**, so all her children carry it; **heteroplasmy**, the germline **bottleneck** and tissue **thresholds** explain the different severity. A **tRNA** defect disrupts synthesis of **all 13** mtDNA-encoded proteins; brain and muscle depend most on OXPHOS. **Mitochondrial donation** moves the parents' nuclear DNA into a **donor egg or zygote**; carry-over and long-term effects remain open questions.

**a)** mtDNA is **maternally inherited** (it comes from the oocyte; sperm contributes none), so all her children receive it. Cells contain many copies of mtDNA, and normal and mutant copies can **coexist** in one cell (**heteroplasmy**). Only a **small number of mtDNA copies** pass through the germ line into each oocyte (the **bottleneck**), so the proportion of mutant mtDNA can **shift sharply** between mother and child and differ between her eggs. Symptoms appear only when the mutant fraction exceeds a **tissue-specific threshold**. The children therefore received different mutant loads: below threshold (unaffected), just above in some tissues (mild), well above in brain (severe).

**b)** mtDNA encodes **13 proteins** (all core subunits of complexes I, III, IV and ATP synthase), **22 tRNAs** and **2 rRNAs**, and the 13 proteins are translated **inside the mitochondrion** using mtDNA-encoded tRNAs. A defective tRNA impairs translation of **all 13** proteins, not one, so it disturbs several complexes at once. The **brain and muscle** (with heart, retina and cochlea) depend most on **oxidative phosphorylation**, so they reach their threshold first.

**c)** The **nuclear DNA of the parents** is transferred into a **donor egg** (or zygote) whose own nucleus has been removed and which contains **healthy donor mitochondria**: either **maternal spindle transfer** (before fertilisation) or **pronuclear transfer** (after fertilisation). The child inherits **nuclear DNA from its mother and father** and **mtDNA (37 genes) from the donor**. Open questions: **carry-over** of a small amount of the mother's mutant mtDNA, which could increase again (**reversion**); the need for **long-term follow-up**; and, for girls, the **donor mtDNA is passed on** to future generations.

Read more: [mtDNA disease: inheritance, heteroplasmy, threshold](#/chapter/ch14-energy-conversion-and-metabolic-compartmentation-mitochondria-and-chloroplasts/mtdna-disease-inheritance-heteroplasmy-threshold)
Tags: mtdna, clinical, type/apply

---

Q: Two healthy, unrelated parents have two children who both develop Leigh syndrome, a severe mitochondrial disease; a third child is healthy. Genetic testing of the children's mitochondrial DNA shows no pathogenic variants, but muscle biopsies show reduced activity of complex IV.

**a)** Is this disease more likely to be caused by a nuclear gene or by an mtDNA mutation? What is the most likely mode of inheritance? Explain.

**b)** Human mitochondria contain more than 1,000 different proteins. Where are most of them made, and how does this explain why most mitochondrial disease is caused by nuclear genes?

**c)** Which complex of the respiratory chain can only be affected by nuclear gene mutations, and why?

**d)** In another patient, muscle biopsy shows **multiple different deletions** of mtDNA. Why does this point to a nuclear gene defect?
A: **In brief:** A **nuclear gene, autosomal recessive**: healthy parents, two of three children affected, normal mtDNA. Only **13** of the **>1,100** mitochondrial proteins are encoded by mtDNA; the rest are nuclear and imported. **Complex II** is entirely nuclear-encoded. **Multiple mtDNA deletions** point to a faulty **nuclear-encoded maintenance** machinery (for example POLG).

**a)** A **nuclear gene**, inherited as **autosomal recessive**. Both parents are healthy (carriers), two of three children are affected (consistent with a 1 in 4 risk per child), no mtDNA variant is found, and there is no maternal-line pattern. Complex IV contains many **nuclear-encoded** subunits and needs nuclear **assembly factors** (for example SURF1), which are classic causes of Leigh syndrome.

**b)** Only **13** proteins are encoded by mtDNA; all the others, **over 1,100**, are encoded in the **nucleus**, made on cytosolic ribosomes and **imported** into mitochondria. During evolution the mitochondrion (an endosymbiotic bacterium) **transferred most of its genes to the nucleus**. Since most of the genes that build and maintain mitochondria are nuclear, most mitochondrial disease is nuclear and follows **Mendelian** inheritance (mostly autosomal recessive; some dominant or X-linked).

**c)** **Complex II (succinate dehydrogenase).** It is the only respiratory chain complex with **no mtDNA-encoded subunit**: all its genes are nuclear.

**d)** mtDNA **replication and maintenance** are carried out by **nuclear-encoded** proteins (for example the mitochondrial DNA polymerase, POLG, and the helicase Twinkle). Multiple independent deletions arising in one tissue mean the **machinery that copies mtDNA is faulty**, not that one deletion was inherited.

Read more: [Nuclear genes cause most mitochondrial disease](#/chapter/ch14-energy-conversion-and-metabolic-compartmentation-mitochondria-and-chloroplasts/nuclear-genes-cause-most-mitochondrial-disease)
Tags: mtdna, clinical, type/apply

---

Q: Skeletal muscle is built from different fibre types: slow type I fibres and fast type IIA and IIX fibres.

**a)** Compare type I and type IIX fibres in terms of their metabolism, mitochondrial content and fatigue resistance. Explain how the metabolism of each suits its function.

**b)** During contraction, the demand for ATP rises many-fold within seconds. Explain how Ca²⁺ couples the supply of ATP by mitochondria to the demand.

**c)** Which two ATP-consuming processes account for most of the ATP used during contraction?
A: **In brief:** **Type I**: oxidative, **many mitochondria**, fatigue-resistant (endurance). **Type IIX**: glycolytic, **few mitochondria**, powerful but quick to fatigue. **Ca²⁺** released for contraction enters mitochondria via the **MCU**, activates **dehydrogenases**, raises NADH and so ATP supply matches demand. Main consumers: **myosin ATPase** and **SERCA**.

**a)** **Type I (slow twitch)** fibres are **oxidative**, contain **many mitochondria** and many capillaries, and are **fatigue-resistant**: suited to endurance and posture. Oxidative metabolism gives about **15 times more ATP per glucose** and can run as long as O₂ and fuel are supplied. **Type IIX (fast twitch)** fibres are **glycolytic**, with **few mitochondria**: they generate **high power quickly**, since glycolysis makes ATP fast and without O₂, but they **fatigue quickly** because glycolysis yields little ATP per glucose and fuel runs out. (Type IIA fibres are intermediate.) Most of the difference between fibre types is in the **amount** of mitochondria, not their kind.

**b)** (1) The **sarcoplasmic reticulum releases Ca²⁺**, which triggers contraction. (2) **Mitochondria take up Ca²⁺** through the **mitochondrial calcium uniporter (MCU)**, which also buffers the cytosolic Ca²⁺ transient. (3) Matrix Ca²⁺ **activates dehydrogenases** of the citric acid cycle and pyruvate dehydrogenase, so more **NADH** is produced. (4) More NADH feeds the respiratory chain and **ATP synthesis increases**. The same signal that causes contraction tells mitochondria to supply the ATP for it, so supply matches demand without delay.

**c)** **Myosin ATPase** (cross-bridge cycling) and **SERCA**, which pumps Ca²⁺ back into the sarcoplasmic reticulum.

Read more: [Calcium couples contraction to ATP supply](#/chapter/ch14-energy-conversion-and-metabolic-compartmentation-mitochondria-and-chloroplasts/calcium-couples-contraction-to-atp-supply)
Tags: muscle, calcium

---

Q: Mitochondria are thought to be descended from bacteria.

**a)** Give three lines of evidence for the endosymbiotic origin of mitochondria.

**b)** Cells lacking mtDNA entirely (ρ⁰ cells) can survive in culture if supplemented with pyruvate and uridine, yet they still cannot survive without the mitochondrial organelle. Explain both observations.

**c)** When isolated mitochondria are placed in a hypotonic solution, only the outer membrane breaks. Explain this, using the differences between the two membranes.
A: **In brief:** Evidence: **two membranes**, their **own circular DNA**, **bacterial-type ribosomes**, **division by fission**. ρ⁰ cells survive on **glycolysis** but still need the organelle for jobs such as **Fe-S cluster assembly**. In hypotonic medium the matrix swells, the folded inner membrane **unfolds**, and the smaller **outer membrane bursts**.

**a)** Any three: **two membranes** (the inner derived from the bacterial plasma membrane); their **own circular genome** (mtDNA); **bacterial-type ribosomes** (hence sensitivity to some antibacterial antibiotics); **division by fission** (mitochondria are never made from scratch, only from existing ones); their **closest living relatives are α-proteobacteria**.

**b)** Without mtDNA, cells cannot make the mtDNA-encoded subunits and so have **no working respiratory chain**. They survive on **glycolysis**, provided the medium supports it (pyruvate helps them re-oxidise NADH; uridine is needed because pyrimidine synthesis depends on a respiratory-chain-linked enzyme). But the **organelle** is still essential for jobs **unrelated to ATP**, such as **iron-sulfur cluster assembly**, which it performs with nuclear-encoded, imported proteins. Respiration can be removed; mitochondria cannot.

**c)** The **outer membrane** contains **porins** that make it permeable to small molecules, but it is not folded. The **inner membrane** is **impermeable to ions**, rich in cardiolipin and **highly folded into cristae**. In hypotonic solution, water enters and the **matrix swells**; the folded inner membrane can **unfold** to accommodate the extra volume, but the smaller outer membrane **ruptures**, releasing the contents of the intermembrane space. (This is used to separate the mitochondrial compartments by centrifugation.)

Read more: [Endosymbiosis](#/chapter/ch14-energy-conversion-and-metabolic-compartmentation-mitochondria-and-chloroplasts/endosymbiosis)
Tags: structure, evolution

---

Q: What is chemiosmosis? How is it related to the production of energy?
A: **In brief:** Chemiosmosis is **ATP synthesis driven by a proton gradient**. Electrons passing down the respiratory chain in the inner mitochondrial membrane release energy that is used to **pump H⁺ out of the matrix**; the H⁺ then flow back **through ATP synthase**, which uses that energy to make ATP from ADP and Pᵢ.

**The two stages.**
1. **Electron transport builds a gradient.** High-energy electrons (from NADH and FADH₂, made by the oxidation of food) pass from carrier to carrier towards O₂. Each large step releases energy that complexes I, III and IV use to **pump protons** from the matrix into the intermembrane space.
2. **The gradient is spent on ATP.** The inner membrane is **impermeable to ions**, so the protons can only return through **ATP synthase**; their flow turns its rotor, and the rotation drives ATP synthesis.

**The name:** *chemi-* for the **redox chemistry** (electron transfer), *osmosis* for the **transport of ions across a membrane**.

**Relation to energy.** The **electrochemical proton gradient** (the proton-motive force, about 180 mV: a membrane potential plus a pH difference) is a **temporary energy store** that links the oxidation of food to ATP production. It is the common currency of energy conversion: the same mechanism works in chloroplasts (driven by light) and bacteria, and the gradient also drives **transport** across the membrane (ADP/ATP exchange, phosphate and pyruvate import). It produces most of the cell's ATP, about 30 per glucose instead of 2 from glycolysis alone.

![Chemiosmosis in two stages: electron transport drives a pump that moves protons across a membrane, then the proton gradient is harnessed by ATP synthase to make ATP from ADP and phosphate](assets/img/slide-8-18.png)

Read more: [The two stages](#/chapter/ch14-energy-conversion-and-metabolic-compartmentation-mitochondria-and-chloroplasts/the-two-stages)
Tags: qa, chemiosmosis, core

---

Q: Explain the term oxidative phosphorylation.
A: **In brief:** The **oxidation** of NADH and FADH₂ by O₂ through the respiratory chain is **coupled** to the **phosphorylation** of ADP to ATP. The two reactions are not joined chemically: the coupling runs through the **proton gradient** across the inner mitochondrial membrane (chemiosmosis).

**Oxidation:** NADH + ½O₂ + H⁺ → NAD⁺ + H₂O releases a **large** amount of free energy. The electrons pass along the electron-transport chain (complexes I, III, IV, with ubiquinone and cytochrome c) to **O₂, the final electron acceptor**, which is reduced to water.

**Phosphorylation:** ADP + Pᵢ → ATP **requires** energy.

**The coupling:** the energy released by electron transport is used to **pump H⁺** across the inner membrane; the H⁺ flowing back through **ATP synthase** drive ATP formation. So oxidation and phosphorylation happen in different proteins and are linked only by the **gradient**; uncouplers that let protons leak show this, since oxidation then continues without ATP being made.

It is distinct from **substrate-level phosphorylation** (for example in glycolysis), where a phosphate is transferred directly from a metabolite to ADP. Oxidative phosphorylation produces most of the ATP of an aerobic cell.

![Energy of high-energy electrons in NADH converted by electron transport and oxidative phosphorylation in the inner membrane into the energy of high-energy phosphate bonds in ATP](assets/img/fig-14-12.png)

Read more: [Oxidative phosphorylation](#/chapter/ch14-energy-conversion-and-metabolic-compartmentation-mitochondria-and-chloroplasts/oxidative-phosphorylation)
Tags: qa, chemiosmosis, core
