---
title: Ch 6. How Cells Read the Genome: From DNA to Protein
description: ""
date: 2026-08-11
tags: [mboc, ch6]
---

> **Session 4** of the *Molecular Biology of the Cell* course in the **Molecular Medicine master's at Erasmus MC**, given by **Fabio Catalano** (postdoc in the Pim Pijnappel lab at Erasmus MC, working on gene therapy and muscle-on-a-chip).
>
> The exam asks about what was covered in the **lectures**, not the chapter as a whole, so this summary follows the slides.

It is **part I** of chapter 6 and covers only the first arrow of the central dogma: **from DNA to RNA**. Translation, the genetic code, the ribosome, protein folding and degradation are part II.

The lecture follows the chapter closely but reorders it around five questions, each introduced by its own title slide:

1. What is RNA, and what is RNA's function?
2. In which direction is DNA/RNA synthesis?
3. How do transcription **initiation**, **termination** and **mRNA processing** differ between prokaryotes and eukaryotes?
4. What happens to the mRNA, and to the polymerase, once transcription is over?
5. How do non-coding RNAs regulate gene expression?

It ends with a **practical example**: why the design of an mRNA vaccine is an exercise in everything above.

---

# How DNA became the molecule of life

The opening slide is a timeline of the experiments that had to happen before the word "transcription" could mean anything.

| When | Who | What |
|---|---|---|
| ~10,000 years ago | — | The agricultural revolution: heredity exploited long before it was understood |
| **1865** | **Mendel** | Principles of heredity — discrete, particulate factors |
| **~1900** | **Boveri and Sutton** | Chromosome theory: those factors sit on chromosomes |
| **1910** | **Morgan** | Confirms it with *Drosophila*: the white-eyed mutation tracks with the X chromosome |
| **1944** | **Avery, MacLeod and McCarty** | The "transforming principle" of pneumococcus is **nucleic acid**, not protein |
| **1953** | **Watson and Crick** | The double helix, from Franklin and Gosling's diffraction data |
| **1958–1960** | **Crick** | The **central dogma of molecular biology** |

Avery, MacLeod and McCarty are the pivot: the R (rough, avirulent) strain becomes S (smooth, virulent) after taking up material from heat-killed S cells, and the material that does it is DNA. That is the first evidence that DNA *carries information*. Watson and Crick then explain, in one structure, how information can be **copied**. What remains unexplained until the 1960s is how it is **read**.

## The central dogma, and where it is not true

**DNA → RNA → protein.** Transcription, then translation.

The lecturer immediately marks the slide *"not entirely true"*, with three qualifications that are worth remembering as a set:

* **Reverse transcription.** RNA → DNA, by retroviruses such as **HIV** (and by telomerase, and by retrotransposons in our own genome).
* **RNA-dependent RNA replication.** RNA → RNA, used by **almost all RNA viruses excluding the retroviruses** — coronaviruses among them.
* **Not all RNA is translated.** The **non-coding RNAs** are the end product of their genes, not an intermediate.

What *is* universal is the outline: every cell copies genes into RNA, and every cell translates messenger RNA on ribosomes.

![Genetic information flowing from DNA to RNA by transcription and from RNA to protein by translation, with DNA also being replicated](assets/img/fig-6-01.png)

---

# What is RNA?

## Two chemical differences from DNA

Until the 1950s RNA was known mainly as "the other nucleic acid", distinguished from DNA by two small substitutions:

* the sugar is **ribose** rather than deoxyribose — an extra **2′-OH** on the sugar ring;
* the base **uracil** replaces thymine — uracil is thymine without its methyl group.

![Ribose compared with deoxyribose, and uracil compared with thymine](assets/img/fig-6-05.png)

Neither change touches base-pairing. U pairs with A using exactly the hydrogen bonds T uses, and the phosphodiester backbone is the same. But the two substitutions have consequences out of all proportion to their size.

**The 2′-OH makes RNA chemically reactive.** A hydroxyl group sitting next to the phosphodiester bond is a nucleophile in the immediate neighbourhood of the bond that holds the chain together, so RNA hydrolyses far more readily than DNA, especially under alkaline conditions. **RNA is the less stable of the two molecules**, and that is a large part of why the genome is stored as DNA and only *read out* as RNA. The same reactivity is not purely a liability: the 2′-OH of the branch-point adenine is the nucleophile that opens the splicing reaction later in this lecture.

## Single-strandedness is the real difference

DNA in cells is a double helix. **RNA is made single-stranded**, and a single strand is free to fold back on itself. Conventional base pairs give **secondary structure** — hairpins, stems, loops — and unconventional pairings and stacking then fold those elements into a defined **tertiary structure**, the same way a polypeptide folds.

![An RNA molecule folded through conventional base pairs, the same structure folded further by nonconventional pairs, and the structure of a real self-splicing RNA](assets/img/fig-6-07.png)

So an RNA molecule can do what a protein does: present a shaped surface, bind a ligand specifically, and catalyse a reaction. RNAs that catalyse are **ribozymes**, and they turn up in the machines discussed below — the spliceosome's active site and the ribosome's peptidyl transferase are both made of RNA.

The lecture's worked example is **tRNA**: drawn flat it is the familiar cloverleaf of four base-paired stems, but in three dimensions it folds into an **L**, with the **anticodon** at one end and the **amino acid attachment site** at the 3′ end, some 7 nm away.

![A phenylalanine tRNA drawn as a cloverleaf with its base-paired stems, as the folded L-shaped structure from x-ray diffraction, and as its linear sequence with modified bases marked](assets/img/fig-6-54.png)

## What RNA's function is: Table 6–1

The lecturer builds Table 6–1 up in two steps — first the three classical RNAs everyone learns, then the rest of the list, which is longer than most people expect.

| Type of RNA | Function |
|---|---|
| **mRNA** | Messenger RNAs, code for proteins |
| **rRNA** | Ribosomal RNAs, form the basic structure of the ribosome and catalyse protein synthesis |
| **tRNA** | Transfer RNAs, the adaptors between mRNA and amino acids |
| **Telomerase RNA** | Template for the telomerase enzyme that extends chromosome ends |
| **snRNA** | Small nuclear RNAs, various nuclear processes including splicing of pre-mRNA |
| **snoRNA** | Small nucleolar RNAs, process and chemically modify rRNAs |
| **lncRNA** | Long non-coding RNAs, not all with a known function; some are scaffolds, some regulate processes such as X-chromosome inactivation |
| **miRNA** | MicroRNAs, block translation of specific mRNAs and cause their degradation |
| **siRNA** | Small interfering RNAs, direct degradation of selected mRNAs and help establish repressive chromatin |
| **piRNA** | Piwi-interacting RNAs, bind piwi proteins and protect the germ line from transposable elements |

Only the first row leads to a protein. Everything below it is a case of the RNA *being* the product.

---

# How RNA was shown to be the messenger

This section is the lecture's "you are the scientist" thread, and it is the sort of thing that makes a good exam question, so it is worth holding the logic rather than the names.

**What was known by the mid-1950s.** Ribosomes are where proteins are made, and tRNAs carry amino acids to them.

**George Palade** (Nobel Prize 1974) established the first half of that by electron microscopy: **acinar cells of the rat pancreas**, which secrete enzymes at an enormous rate, are packed with ribosomes on their endoplasmic reticulum. Cells that make a lot of protein contain a lot of ribosomes, so ribosomes are where protein is made.

**Paul Zamecnik and Mahlon Hoagland** made it biochemical with a **cell-free system from rat liver**: add radiolabelled amino acids, and follow where the label goes. It goes into protein, and it does so on ribosomes. Along the way they found a small RNA that becomes covalently charged with an amino acid first — **tRNA**, the adaptor Crick had predicted.

**What was not known.** Where the information for a *given* protein comes from. The ribosome is the workshop; what is the blueprint?

> **Slide question.** Which experiment or result would best reveal the candidate "messenger" molecule?
> **A** It should be very close to the DNA · **B** removing it leaves protein levels unchanged · **C** removing it increases protein levels · **D** an increase in protein levels should correspond to an increase in the candidate, and vice versa
>
> **D.** Proximity (A) is suggestive but not evidence, and B and C are the wrong sign. A messenger must be *quantitatively coupled* to the protein it specifies.

Two experiments then did exactly that.

**Elliott Volkin and Lazarus Astrachan** infected bacteria with bacteriophage. Phage infection switches the cell over to making phage proteins, and **RNA synthesis rose sharply** at the same moment, producing an RNA whose base composition resembled the phage DNA rather than the host's. Hypothesis: RNA is the intermediate between DNA and protein synthesis.

**Sydney Brenner, François Jacob and Matthew Meselson** made the decisive version using density labelling. Grow *E. coli* in **heavy isotopes** so that its ribosomes are heavy, infect with phage, then shift to **light** medium. The newly made RNA is light — and it is found associated with the **pre-existing heavy ribosomes**. No new ribosomes were needed to make new proteins.

That result establishes the modern picture in one stroke: **ribosomes are general-purpose machines**, not one-protein-one-ribosome specialists, and the specificity is supplied by a **short-lived RNA intermediate**, the messenger, that is loaded onto them.

---

# Transcription: the reaction itself

## Direction and chemistry

RNA is synthesised **5′→3′**, reading the **template strand 3′→5′**. The RNA therefore matches the **non-template (coding) strand**, with U in place of T.

![Cutaway view of RNA polymerase with the magnesium ion at the active site, the short DNA-RNA helix, the ribonucleoside triphosphate uptake channel and the direction of transcription](assets/img/fig-6-09.png)

The cutaway on the slide is worth reading feature by feature, because everything in it recurs: a **Mg²⁺ ion at the active site**, a **ribonucleoside triphosphate uptake channel** feeding substrates in from the side, a **short DNA–RNA hybrid helix** of around nine base pairs, the **downstream DNA duplex** being unwound at the front, and the RNA peeling away at the back as the duplex zips shut behind. The polymerase carries its own **transcription bubble** along with it.

## Similarities and differences with replication

**Similar:** the helix is opened, one strand is used as a template, and the new chain is built by complementary base-pairing, 5′→3′, from nucleoside triphosphates whose hydrolysis pays for the bond.

**Different**, and these are the points the slide lists:

* **The RNA detaches.** It does not stay base-paired to its template — the duplex re-forms behind the polymerase. So transcription can be repeated indefinitely on the same gene, and many polymerases can work on it at once.
* **Length.** A transcript is a copy of one gene, not of a chromosome.
* **Processivity.** RNA polymerases are highly processive, but **less so than DNA polymerases**, which carry sliding clamps.
* **Accuracy.** RNA polymerases have a **higher error rate** — roughly one mistake in 10⁴ nucleotides, against one in 10⁷ or better for a proofreading DNA polymerase. The cell tolerates it because transcripts are transient and made in many copies, while a replication error is inherited forever.
* **Structure.** RNA and DNA polymerases are **structurally distinct enzymes**. They perform chemically similar reactions without being the same kind of machine: the chemistry converged, the machines did not.
* **No primer.** An RNA polymerase can start a chain from scratch, which is precisely what a proofreading DNA polymerase cannot do.

---

# Transcription in prokaryotes

A bacterial transcription unit is simple and worth drawing once: **promoter → transcription start site → RNA-coding region → terminator**, with the promoter's asymmetry fixing which way the polymerase faces.

Bacteria have **one RNA polymerase**. Specificity comes from an interchangeable subunit: the **σ (sigma) factor**, which joins the core enzyme to form the **holoenzyme** and is the part that reads the promoter.

![The transcription cycle of bacterial RNA polymerase drawn as eight steps, from holoenzyme assembly and promoter binding through abortive initiation, sigma release, elongation and termination](assets/img/fig-6-11.png)

The cycle on the slide, numbered as the lecturer numbered it:

1. **Sliding.** The holoenzyme binds DNA non-specifically and slides along it, sampling.
2. **Closed complex.** σ recognises the promoter; the DNA is still double-stranded.
3. **Open complex → abortive initiation.** The helix is pried open to form the transcription bubble and synthesis begins. The first attempts mostly fail: the polymerase makes short transcripts of a few nucleotides and releases them, repeatedly, without moving off the promoter. This is **abortive initiation**, and the lecture spends a five-minute animation on it. It is not a defect — it is the consequence of the enzyme being anchored to the promoter by σ while trying to move forward.
4. **Promoter clearance and σ release.** Once the transcript passes roughly ten nucleotides, the polymerase breaks its grip on the promoter, **σ is released**, and the enzyme commits.
5. **Elongation.** The core enzyme transcribes processively.
6. **Termination hairpin formation.** The terminator sequence, once transcribed, makes an RNA that folds on itself.
7. **Termination.** The **hairpin** — a GC-rich stem followed by a run of U residues — destabilises the RNA–DNA hybrid and physically pulls the transcript out of the polymerase. Note where the signal lives: in the **RNA**, not in the DNA being read.
8. **Reassociation with σ**, and the cycle begins again.

## The promoter, and why asymmetry matters

![The consensus sequence for E. coli promoters with its -35 and -10 hexamers, the distribution of spacings between them, and the same information drawn as a sequence logo](assets/img/fig-6-12.png)

Aligning many *E. coli* promoters gives a **consensus** built from two hexamers: **TTGACA at −35** and **TATAAT at −10**, separated by **15–19 nucleotides**, most often **17**. The sequence logo at the bottom of the figure shows how much of the information sits in a few positions and how degenerate the rest is.

The lecturer's point about this slide, written in red: **asymmetry**. The consensus is not a palindrome. It reads differently in the two directions, so σ can only dock one way round, which determines **which strand is used as template** and therefore **in which direction the polymerase travels**. Bacterial genes accordingly run in both directions along a chromosome, each one's orientation set by the orientation of its own promoter.

---

# Transcription in eukaryotes

## Three polymerases

* **Prokaryotes: 1** RNA polymerase.
* **Eukaryotes: 3** main RNA polymerases — plants are the exception, with two extra ones (Pol IV and Pol V) for small RNA pathways.

| Polymerase | Genes transcribed |
|---|---|
| **RNA polymerase I** | 5.8S, 18S and 28S rRNA genes |
| **RNA polymerase II** | **All protein-coding genes**, plus snoRNA, miRNA, siRNA, lncRNA and most snRNA genes |
| **RNA polymerase III** | tRNA genes, 5S rRNA genes, some snRNA genes, other small RNAs |

The "S" values are **sedimentation coefficients** from ultracentrifugation: bigger S, bigger rRNA. The rest of the lecture is about **Pol II**.

## General transcription factors

Where bacteria need one σ factor, eukaryotes need a set of **general transcription factors**: **TFIID, TFIIA, TFIIB, TFIIF, TFIIE, TFIIH**. "General" means they are required at essentially every Pol II promoter — they are the machinery, not the regulation.

**Assembly starts with TFIID**, which contains **TBP** (TATA-binding protein, one subunit) plus about **eleven TAFs** (TBP-associated factors). TBP finds the **TATA box**; **TFIIB** and **TFIIA** join, and this small assembly is the nucleus everything else is built on.

![TFIID binding the TATA box through TBP, followed by TFIIB and TFIIA, then assembly of RNA polymerase and the remaining general factors, then TFIIH prying the helix apart and phosphorylating the polymerase tail](assets/img/fig-6-15.png)

The core promoter is not just the TATA box, and the take-home message of the next slide is that **each element is read by a specific general transcription factor**:

| Element | Consensus | Recognised by |
|---|---|---|
| **BRE** (TFIIB recognition element) | G/C G/C G/A C G C C | **TFIIB** |
| **TATA** | T A T A A/T A A/T | **TBP**, subunit of TFIID |
| **INR** (initiator) | C/T C/T A N T/A C/T C/T | **TFIID** |
| **DPE** (downstream promoter element) | A/G G A/T C G T G | **TFIID** |

BRE and TATA sit around −35 to −30, INR spans the start point, DPE lies around +30. A given promoter carries some subset of them; not every promoter has a TATA box.

![The consensus sequences around a eukaryotic polymerase II start point, with BRE and TATA upstream, INR at the start point and DPE downstream, and the factor that recognizes each](assets/img/fig-6-16.png)

**How TBP binds** is a structure worth knowing by sight: the protein is a **saddle** of two similar domains that sits over the DNA, binds it through the **minor groove**, and **kinks the helix sharply**, bending it by around 80°. The bend is the signal — it creates the geometry the other factors dock onto.

![The TATA-binding protein bound to DNA, folded into two similar domains and bending the double helix through kinks separated by partly unwound DNA](assets/img/fig-6-17.png)

## The pre-initiation complex and the CTD

Onto the TFIID–TFIIB–TFIIA platform come **RNA polymerase II with TFIIF**, then **TFIIE**, then **TFIIH**. That assembly is the **transcription pre-initiation complex (PIC)**.

**TFIIH** is the one to remember, because it has two enzymatic activities and both matter:

* an **ATP-dependent helicase** that pries the double helix open at the start site — the eukaryotic equivalent of what σ does by itself in bacteria;
* a **kinase** that phosphorylates the polymerase's tail.

That tail is the **C-terminal domain (CTD)** of the largest Pol II subunit: **52 tandem repeats of a seven-amino-acid sequence** in humans (YSPTSPS). It is an unstructured arm, long enough to reach out of the complex, and it works as a **moving platform that carries the RNA-processing enzymes**.

Two of the seven positions carry the signals:

* **Serine 5 phosphorylation — initiation.** Added by TFIIH at the start. Ser5-P recruits the **capping enzymes**, which is why capping happens first and happens to every Pol II transcript. Ser5-P then declines as the polymerase moves down the gene.
* **Serine 2 phosphorylation — elongation.** Rises along the gene, and recruits the **splicing** and **3′-end processing / polyadenylation** machinery.

So the position of the polymerase along a gene is encoded in the phosphorylation pattern of its own tail, and the RNA is processed by whatever that pattern has recruited.

## From pre-initiation to initiation: activators, Mediator, chromatin

The PIC is *promoter recognition and assembly of the basic machinery*. It is not yet transcription. Getting to the **transcription initiation complex** — Pol II activated and actually starting — needs three more classes of component:

* **Activators** — sequence-specific transcription factors bound at **enhancers**;
* **Mediator** — the large complex that physically couples activators to the polymerase;
* **Chromatin-modifying and remodelling complexes** — ATP-dependent remodellers that slide or evict nucleosomes, and histone-modifying complexes such as **SAGA** and **ATAC**.

An enhancer can be thousands of base pairs from the promoter, and the DNA in between simply **loops out** so that the activator and the promoter complex touch.

![An activator protein bound at a distant enhancer, with Mediator, general transcription factors, RNA polymerase, chromatin remodelling complexes and histone-modifying enzymes assembling at the promoter](assets/img/fig-6-18.png)

Not every gene needs an activator at a nearby enhancer: at some promoters the sequence-specific factors bind close in, or the promoter is constitutively accessible, and the assembly happens without a long-range loop.

> **Slide question: what is the difference between a general and a sequence-specific transcription factor?**
>
> A **general** transcription factor (TFIID, TFIIB, TFIIA, TFIIF, TFIIE, TFIIH) is needed at **essentially all** Pol II promoters, recognises **core promoter elements** (TATA, BRE, INR, DPE), and its job is to position and activate the polymerase. It carries no information about *which* gene should be on.
>
> A **sequence-specific** transcription factor — an activator or repressor, the subject of chapter 7 — binds a **particular sequence** at an enhancer or silencer, is present in some cell types or conditions and not others, and acts by recruiting Mediator, remodellers and modifying enzymes. It is where the regulatory information lives.

## Initiation to elongation: what leaves, what arrives

Add the four ribonucleoside triphosphates and the complex converts.

* **Leaves:** most of the general transcription factors are **released** as the polymerase clears the promoter. TFIID and Mediator can stay behind at the promoter, which is what makes rapid **re-initiation** by the next polymerase possible.
* **Arrives:** **elongation factors** bind and stay with the polymerase for the length of the gene, making dissociation much less likely; **ATP-dependent chromatin remodelling complexes** travel with it so the polymerase can transcribe through nucleosomes; and the **RNA-processing factors** ride on the phosphorylated CTD.

![Cryo-electron microscopy structure of RNA polymerase II halfway through a nucleosome, with elongation factors Spt4, Spt5 and Elf1, and one turn of DNA still on the histone core](assets/img/fig-6-19.png)

## Superhelical tension

A polymerase tracking along a double helix cannot rotate the whole chromosome behind it, so it **twists the DNA it is moving through**: **positive supercoils accumulate ahead** of it, where helix opening is *hindered*, and **negative supercoils behind** it, where helix opening is *facilitated*.

![DNA with a free end rotating as the helix is opened, DNA with fixed ends forming a supercoil instead, and a protein tracking along DNA generating positive supercoils ahead and negative supercoils behind](assets/img/fig-6-20.png)

The distinction the figure makes is between DNA with a **free end**, which can simply spin, and DNA with **fixed ends**, which cannot and therefore supercoils. Chromosomal DNA is effectively the second case everywhere. On a very long transcription unit the tension builds up enough to slow or stall the polymerase, and **topoisomerases** (helped by helicases) are what relieve it. Negative supercoiling behind the polymerase is not purely a waste product: it makes the helix easier to open, which favours the next round of initiation.

---

# Processing: what eukaryotes do that bacteria do not

In **bacteria** there is no nucleus, no processing and no delay: transcription and translation are coupled, ribosomes load onto an mRNA that is still being made, and one mRNA often encodes several proteins.

In **eukaryotes** the primary transcript is made in the nucleus and must be **capped, spliced and polyadenylated** before it is **exported** and translated. All three happen **co-transcriptionally**, on the CTD.

![The eukaryotic route through transcription, capping, splicing, polyadenylation, export and translation, beside the much shorter bacterial route in a single compartment](assets/img/fig-6-21.png)

## The 5′ cap

Capping happens first, when the transcript is only about 25 nucleotides long, triggered by **Ser5** phosphorylation of the CTD.

![RNA polymerase transcribing with capping proteins, splicing proteins and 3'-end processing proteins carried on its phosphorylated tail and handed onto the emerging RNA](assets/img/fig-6-23.png)

Three enzymatic steps, in order:

1. **RNA triphosphatase** removes the terminal (γ) phosphate from the 5′ end, leaving a diphosphate.
2. **Guanylyltransferase** transfers **GMP** onto it — and does so backwards, creating the characteristic **5′-to-5′ triphosphate bridge**. The cap is attached the wrong way round to the rest of the chain, which is exactly why exonucleases cannot get a grip on it.
3. **Methyltransferase** methylates the guanine at **N7**, giving **7-methylguanosine**. This is **cap-0**.

A further **2′-O-methyltransferase** methylates the ribose of the first transcribed nucleotide (**cap-1**), and sometimes the second (**cap-2**). The take-home message of this slide is simply that **there are different cap types**, and the distinction is not cosmetic: cap-1 is a marker of "self". Innate immune sensors treat RNA lacking proper cap methylation as foreign, which is why viruses have evolved their own capping and 2′-O-methylation enzymes — and why cap chemistry is a design parameter for mRNA therapeutics.

![Bacterial mRNA with unmodified ends encoding three proteins, eukaryotic mRNA with a 5' cap and poly-A tail encoding one, and the structure of the 5' cap with its 5'-to-5' triphosphate bridge](assets/img/fig-6-22.png)

What the cap does: protects the 5′ end from exonucleases, recruits the **cap-binding complex (CBC)** in the nucleus, licenses export, assists splicing of the first intron, and in the cytosol is the handle that **eIF4E** grabs to start translation.

## Splicing

**Bacteria do not splice.** Eukaryotes do, at considerable cost, and the lecture is explicit about the trade-off. The scale of what is being removed is easiest to see by comparing two human genes: β-globin's three exons fit within about 2,000 nucleotide pairs, while Factor VIII's 26 exons are spread over some 200,000, and only a few percent of that length survives into the mRNA.

![The three-exon human β-globin gene beside the 26-exon Factor VIII gene, drawn to different scales](assets/img/fig-6-25.png)

The facts on the slide:

* **Substrate:** pre-mRNA, but also **rRNA and snRNA**.
* **Introns** are 10 to ~10,000 nucleotides, removed as a **lariat** by **two sequential transesterification reactions**.
* The reaction is catalysed by **several hundred proteins and five RNA molecules**.
* It consumes **a lot of ATP** — circled in red on the slide, because the chemistry itself does not require it.

**Why does it occur at all?** Because a gene split into pieces can be **recombined in different ways**: **alternative splicing** lets one coding region produce several proteins, which is evolutionarily advantageous both for making new proteins from existing parts and for regulation. The ATP is not paying for the chemistry, it is paying for **accuracy** — the rearrangements that check and re-check the splice sites before anything is cut.

The classic example is the rat **α-tropomyosin** gene, spliced one way in striated muscle, another in smooth muscle, two more ways in fibroblasts, and another in brain:

![The rat α-tropomyosin gene spliced in several different ways to give striated muscle, smooth muscle, fibroblast and brain mRNAs](assets/img/fig-6-27.png)

The reason this is possible is the reason splicing is hard: **the signals are short and degenerate.**

![The consensus sequences at the 5' splice site, branch point and 3' splice site of a human intron, with the branch-point adenine marked](assets/img/fig-6-28.png)

| Site | Sequence | Note |
|---|---|---|
| **Donor / 5′ splice site** | ⋯AG **↓ GURAG**⋯ | the intron essentially always begins GU |
| **Branch point** | **YNYUR A Y** | that **A** is the nucleophile |
| **Polypyrimidine tract** | YYYYYYYYNYAG | pyrimidine-rich, just upstream of the acceptor |
| **Acceptor / 3′ splice site** | ⋯**AG ↓** exon 2⋯ | the intron essentially always ends AG |

### The chemistry: two transesterifications

![The branch-point adenine attacking the 5' splice site to form a lariat, then the freed exon end attacking the next exon, with the phosphate rearrangements drawn in detail](assets/img/fig-6-26.png)

1. The **2′-OH of the branch-point adenine** performs a **nucleophilic attack on the 5′ splice site**. The intron's 5′ end is cut and joined to that adenine through a **2′,5′ phosphodiester bond** — a branch, hence the **lariat**. Exon 1 is left with a free **3′-OH**.
2. That **3′-OH attacks the 3′ splice site**. The two exons are joined by an ordinary phosphodiester bond and the **lariat is released**.

No bonds are destroyed on balance — a phosphodiester bond is traded for a phosphodiester bond each time, which is what "transesterification" means, and why the reaction needs no energy input in principle. The released intron is **degraded in the nucleus**; the snRNPs are **recycled**, and *that* is where much of the ATP goes.

### The spliceosome

The five RNAs are the **small nuclear RNAs U1, U2, U4, U5 and U6**:

* fewer than **200 nucleotides** each;
* each complexed with **at least seven proteins** to form a **snRNP** ("snurp");
* together they form the **core of the spliceosome**.

![The stepwise spliceosome cycle from U1 binding the 5' splice site through U2 displacing BBP, entry of the U4/U6+U5 triple snRNP, active site formation, lariat formation and release of the spliced RNA](assets/img/fig-6-29.png)

The order of events, following the slide's four annotated panels:

1. **U1 snRNP base-pairs with the 5′ splice site.** At the other end, **BBP** (branch-point binding protein) recognises the branch point and binds cooperatively with **U2AF**, which reads the polypyrimidine tract and the 3′ splice site.
2. **U2 snRNP displaces BBP and U2AF** and base-pairs with the branch-point sequence, deliberately **bulging the branch-point A out** of the helix so that its 2′-OH is exposed and available. ATP is hydrolysed here.
3. **The U4/U6•U5 "triple" snRNP enters.** Inside it, **U4 and U6 are base-paired to each other** — U6 arrives held in an inactive conformation. Rearrangements then **break the U4/U6 pairs**, so that **U6 can displace U1 at the 5′ splice site**, and **U4 is ejected** along with some U6 proteins. This is the step the lecturer emphasised: the components have to *move*, and each move is an opportunity to check that the right sites were chosen.
4. **The NTC/NTR protein complex** locks the snRNPs into position, forming the **active site** and bringing the branch point next to the 5′ splice site.

![The RNA rearrangement that forms the spliceosome active site, drawn before and after, with the real cryo-EM structure of the RNA catalytic core holding two magnesium ions](assets/img/fig-6-30.png)

The active site that results is made of **RNA**: U6 and U2 base-paired to each other and to the substrate, with **phosphates holding two magnesium ions** in exactly the arrangement used by protein phosphoryl-transfer enzymes. **The spliceosome is a ribozyme** with a very large protein exoskeleton. Then the first reaction forms the lariat, further rearrangement brings the two exons into the active site, the second reaction joins them, an **exon junction complex (EJC)** is deposited near the new junction, and ATP hydrolysis resets the machine.

### Exon definition: why the cell marks exons rather than introns

![Size distributions of exons and of introns in the human, worm and fly genomes, with exon length far more uniform](assets/img/fig-6-31.png)

The two distributions behave in opposite ways:

* **Introns** vary enormously between species. In worm and fly, over half are under 100 nucleotides; in humans, most are 100–2000 and a substantial fraction run to tens of thousands.
* **Exons** do the opposite: they are **short and remarkably uniform**, peaking near 100–150 nucleotides in all three species, and *more* sharply so in humans than in worm or fly.

If you are a spliceosome looking for a 30,000-nucleotide intron flanked by weak consensus sequences, searching for the intron is hopeless. Searching for the **exon** is tractable. Hence **exon definition**: **SR proteins** bind along each exon and mark it, recruiting U1 to the downstream 5′ splice site and U2AF to the upstream 3′ site, while **hnRNP** proteins coat the introns and keep them condensed and out of the way. The **cap-binding complex** anchors the first exon and the **poly-A-binding proteins** the last.

![SR proteins bound along each exon of a pre-mRNA guiding snRNPs to the intron-exon boundaries, beginning at the cap-binding complex, with hnRNPs on the introns](assets/img/fig-6-34.png)

Splicing also happens **while the transcript is still being made**, and several introns are removed **simultaneously** on the same transcript rather than one after another.

## Termination and the 3′ end

In eukaryotes there is no hairpin. The **CTD**, now carrying **Ser2** phosphorylation, holds the 3′-end processing factors and hands them to the RNA as the relevant sequences emerge. The **termination sequence is specified in the genome**, but it acts as an RNA signal once transcribed.

![The AAUAAA hexamer, the CA cleavage site and the GU-rich element downstream, the signals that direct cleavage and polyadenylation](assets/img/fig-6-36.png)

Three signals, in order along the RNA:

| Signal | Read by |
|---|---|
| **AAUAAA** | **CPSF** — cleavage and polyadenylation specificity factor |
| **CA**, 10–30 nucleotides downstream | **CF I and CF II**, which cleave here |
| **GU-rich or U-rich**, within ≤30 nucleotides further on | **CstF** — cleavage stimulation factor |

Once CPSF and CstF are both bound, additional cleavage factors are recruited, the RNA is **cut at the CA**, and **poly-A polymerase (PAP)** adds roughly **200 adenines** to the new 3′ end without any template. **Poly-A-binding proteins** coat the tail as it grows, and it is they that set its final length: when enough have bound, PAP and CPSF let go.

![RNA polymerase transcribing past the poly-A signal, with CPSF and CstF binding, cleavage of the RNA, and poly-A polymerase adding adenines while poly-A-binding proteins coat the tail](assets/img/fig-6-37.png)

The downstream fragment, still attached to the polymerase, has an unprotected 5′ end and is **degraded in the nucleus** by a 5′→3′ exonuclease that chases the polymerase down and eventually causes it to terminate.

---

# What happens to the mRNA, and to the polymerase?

The mRNA does not leave the nucleus as bare RNA. It leaves as an **mRNP** whose protein coat is a record of whether processing was done correctly:

![An export-ready mRNA passing through the nuclear pore, with some proteins travelling with it, others staying behind, and cytosolic versions replacing the nuclear ones](assets/img/fig-6-40.png)

* **Cap-binding complex** at the 5′ end, **poly-A-binding proteins** at the 3′ end, **SR proteins** and **exon junction complexes** along the body, **hnRNPs** on anything intron-like.
* **hnRNPs and other nucleus-restricted proteins are stripped off** — an unspliced transcript still wearing them is not exported, which is a quality-control step in itself.
* An **export receptor** takes the mRNP through the **nuclear pore complex**.
* In the cytosol the nuclear proteins are exchanged for cytosolic ones: **CBC is replaced by eIF4E and eIF4G**, and translation begins.
* The **first (pioneer) round of translation** displaces the **EJCs** as the ribosome passes. An EJC left **downstream of a stop codon** means the stop was reached too early — a premature termination codon — and triggers **nonsense-mediated decay**, destroying the message rather than letting a truncated protein be made.

And the polymerase: released from the DNA, **dephosphorylated** on its CTD, and available to be recruited to a promoter again. The phosphorylation state, not the identity of the enzyme, is what distinguishes an initiating polymerase from an elongating one.

---

# Nuclear structures

The lecturer flagged most of this section as material returned to in the next lecture, but the concepts are needed to finish the story of where transcription actually happens.

The nucleus is not homogeneous. **Euchromatin** is the open, actively transcribed fraction; **heterochromatin** is condensed and silent, and is conspicuous as a dark rim of **peripheral heterochromatin** against the nuclear envelope in electron micrographs. Transcription happens in the euchromatic interior.

## The nucleolus

**What is a nucleolus?** It is the site where **ribosomal RNA is transcribed and processed and ribosomal subunits are assembled** — and it is **not a membrane-bounded organelle**. It is a **condensate**: a liquid-like compartment that forms around the rDNA repeats, held together by the molecules working there, which is why it can fuse, disperse and re-form.

It assembles around the tandemly repeated rRNA genes contributed by several different chromosomes, transcribed by **Pol I** at extraordinary density — the "Christmas tree" of Miller spreads, where each gene is coated with polymerases carrying transcripts of increasing length:

![Electron micrograph of tandemly arranged rRNA genes, showing alternating transcribed genes and untranscribed spacers](assets/img/fig-6-41.png)

The primary transcript is then processed. The lecturer's point is that **pre-mRNA is not the only substrate of RNA processing**: rRNA is cleaved, trimmed and chemically modified too (and in some organisms spliced, by self-splicing introns).

![The 35S precursor rRNA of 13,000 nucleotides being chemically modified, then cleaved and trimmed into 18S, 5.8S and 28S rRNAs with nearly half the sequence discarded](assets/img/fig-6-42.png)

* The precursor (**35S**, ~13,000 nucleotides in the figure; 47S in humans) carries the **18S**, **5.8S** and **28S** rRNAs separated by spacers.
* **Chemical modification** comes first: **2′-O-methylation** of the ribose, and **isomerisation of uridine to pseudouridine (Ψ)**.
* Then **cleavage and trimming**, which discards nearly half the sequence.
* **5S rRNA is made elsewhere**, by Pol III.

The modifications are targeted by **snoRNAs**, each carried in a **snoRNP** that **base-pairs with the precursor** at the site to be modified and positions the enzyme. The snoRNA supplies the address; the protein does the chemistry.

![Pseudouridine and a 2'-O-methylated nucleotide, and a snoRNP base-pairing to a precursor rRNA to position the modifying enzyme](assets/img/fig-6-43.png)

The nucleolus is not only about rRNA. It is also where **U6 snRNP**, **telomerase** and some **tRNA** processing are handled. And it is **demand-driven**: it is large in cells making many ribosomes, and it **disperses at mitosis and reassembles afterwards**, because there is no rRNA transcription while the chromosomes are condensed.

![Changes in the appearance of the nucleolus through the cell cycle, dispersing at mitosis and reassembling afterwards](assets/img/fig-6-47.png)

## Cajal bodies, speckles, and transcription factories

![Fluorescence image of a nucleus with fibrillarin marking nucleoli and Cajal bodies, coilin marking Cajal bodies, and antibodies against a splicing protein marking interchromatin granule clusters](assets/img/fig-6-50.png)

| Structure | What it is for |
|---|---|
| **Nucleolus** | rRNA transcription and processing, ribosome subunit assembly |
| **Cajal body** | **snRNA and snoRNA maturation**, and recycling/resetting of snRNPs after splicing |
| **Interchromatin granule clusters (speckles)** | **storage of snRNPs** ready for splicing |
| **Bulk chromatin** | everything else |

Transcription itself is **not spread evenly through the nucleoplasm**. Polymerases cluster into **transcription factories**, discrete foci where many polymerases, and the processing factors riding on their tails, work together.

![A model of an mRNA production factory, with components carried on one polymerase tail and then many tails brought together into a condensate, and an image of transcription and replication factories in a cell](assets/img/fig-6-51.png)

The **"aggregation factor"** on the slide is the mechanism behind this. The CTD tails and the processing factors they carry are full of **multivalent, low-complexity regions** that bind each other weakly and repeatedly. Many weak interactions between many tails cause the whole assembly to **condense into a droplet-like body** — the same liquid–liquid phase separation that makes the nucleolus. The consequences are real: the local concentration of processing enzymes is raised where it is needed, and **genes on different chromosomes can be drawn into the same factory** and transcribed together.

---

# Regulation of gene expression by non-coding RNAs

The last section previews chapter 7, using its figures.

## miRNA

**miRNAs are transcribed by Pol II**, so a pri-miRNA has a **5′ cap and a poly-A tail** like an mRNA — but it folds into **hairpins**.

| Step | Enzyme | Where |
|---|---|---|
| **"Cropping"** — the hairpin is excised from the primary transcript | **Drosha** ribonuclease | nucleus |
| **Export** | **Exportin 5** | nuclear pore |
| **"Dicing"** — the loop of the hairpin is cut off, leaving a ~22 nt duplex | **Dicer** | cytosol |
| **Loading** — one strand is kept, the other discarded | **Argonaute** and other proteins → **RISC** | cytosol |

What RISC then does depends on how well the miRNA matches its target, usually in the **3′ UTR**:

* **Extensive match → "slicing".** Argonaute cleaves the mRNA; the fragments are degraded rapidly and RISC is released to act again. This is the dominant mode in plants.
* **Less extensive match → translational repression.** The message is moved into **P-bodies**, deadenylated, and eventually degraded. This is the dominant mode in animals, and it is why a single miRNA can regulate hundreds of targets.

## siRNA: RISC versus RITS

**Double-stranded RNA** — from a virus, a transposon, or an experiment — is chopped by **Dicer** into **siRNAs**, which are loaded into either of two complexes:

* **RISC** (Argonaute and partners) → the post-transcriptional pathway above: target mRNA is cleaved or repressed.
* **RITS** (RNA-induced transcriptional silencing) → the nuclear pathway. The siRNA base-pairs with the **nascent transcript** at the gene itself, and RITS recruits **histone methylation and DNA methylation**, producing **transcriptional repression** and heterochromatin.

The second is the more interesting one conceptually: an RNA is being used as an address to deposit a heritable chromatin mark at the locus that produced it.

---

# Take-home messages

Straight from the final slide:

* **RNA is the information-carrying molecule in gene expression.**
* **Ribosomes are the site of protein synthesis.**
* **mRNA is a short-lived DNA-to-protein intermediate.**
* **Transcription is always 5′→3′** and is catalysed by RNA polymerases, which are highly processive, have a higher error rate than DNA polymerases, and are structurally distinct from them.
* **Prokaryotes:** one RNA polymerase plus a **σ factor**. **Eukaryotes:** **Pol I, II and III** plus the **general transcription factors** (TFIID…TFIIH).
* **TFIIH and the Pol II CTD coordinate RNA processing**; activators, Mediator and chromatin-modifying complexes are needed to start transcription, and an enhancer is brought to the promoter by **DNA looping**.
* During elongation, **elongation factors** — and ATP-dependent chromatin remodelling factors — stabilise the polymerase.
* **Splicing increases protein diversity** through alternative splicing, which is possible precisely because the consensus splice sites are weak.
* During splicing, **introns are removed as a lariat by the spliceosome** (snRNAs **U1, U2, U4, U5, U6**); it is an **energy-consuming** process.
* **Termination in eukaryotes:** **CPSF, CstF, CF I/II, PAP** carry out 3′ processing of the mRNA.
* **Nuclear organisation:** the **nucleolus** (rRNA transcription and processing, ribosome assembly), **Cajal bodies** (snRNA/snoRNA maturation) and **speckles** (snRNP storage).
* **Non-coding RNAs regulate gene expression.**

---

# Practical example: designing an mRNA vaccine

The lecture closes with the application that makes every part of it concrete. Modelling of the **first year of COVID-19 vaccination** estimates **14.4 million deaths averted** on the basis of reported COVID deaths, and about **19.8 million** using excess-mortality estimates.

A synthetic mRNA has the same parts as a cellular one — **5′ cap, 5′ UTR, open reading frame, 3′ UTR, poly-A tail** — and each is a design variable. The slides work through three of them, using Leppek *et al.*, *Nat. Commun.* **13**:1536 (2022):

**The UTRs.** Screening many natural and designed 5′/3′ UTR combinations shows that the choice changes both the **in-cell half-life** and the **ribosome load** of the message, and both feed into total protein output. Nothing about the encoded protein changes.

**Codon choice.** Synonymous codons are not used equally — the human codon usage table on the slide makes the point that some codons are many times more frequent than their synonyms. Choosing among them changes:

* **total protein output** (the same protein, made in different amounts), and
* **the secondary structure the mRNA folds into**, since the coding sequence is also a sequence that base-pairs with itself.

**Structure → stability.** The folded structures predicted for differently codon-optimised versions of the same open reading frame differ substantially, and those differences show up as measured **half-lives**: in the in-solution degradation assay on the slide, constructs range from **t½ ≈ 0.36 h** to **t½ ≈ 1.14 h**, with **pseudouridine (Ψ) substitution** adding further stability on top of the structural effect.

That last point closes a loop with the rest of the lecture. **Ψ and 2′-O-methylation** are the modifications cells put on their own rRNA and mRNA; they are also, in part, how the innate immune system tells self from non-self. Building them into a synthetic message is what makes it usable as a medicine rather than an inflammatory stimulus — the same chemistry, read in the same way, applied deliberately.

---

> **Session 5** of the same course, given by **Thamar van Dijk**, who also gave session 1a.
>
> This is **part II** of chapter 6. Part I stopped at an export-ready mRNA sitting in the nucleus. Part II takes it out through the pore, translates it, folds the product, and then destroys both the message and the protein.

The opening slide is the same whole-pathway figure that closed part I, and its point is that **every arrow on it is a regulatory step**: transcription initiation, capping and splicing, cleavage and polyadenylation, export, mRNA degradation, translation initiation, folding, and protein degradation. Part II covers the second half of that list.

# Export-ready mRNA and its transport

An mRNA never travels naked. It leaves the nucleus as a **particle**, an mRNP, wearing a coat of proteins that was assembled on it during processing: **hnRNP proteins**, **SR proteins**, **exon junction complexes (EJCs)**, **poly-A-binding proteins**, the **cap-binding complex (CBC)** on the 5' cap, and a **nuclear export receptor**.

![An export-ready mRNA passing through the nuclear pore, with some proteins travelling with it, others staying behind, and cytosolic versions replacing the nuclear ones](assets/img/fig-6-40.png)

Three things happen on the way out and just after:

* **Nucleus-restricted proteins are left behind.** hnRNPs and the rest of the nuclear coat are stripped at the pore. A transcript still wearing them has not finished processing and does not get exported, which is itself a checkpoint.
* **The nuclear cap protein is exchanged for the cytosolic ones.** **CBC** comes off and the **initiation factors for protein synthesis**, **eIF4E** on the cap and **eIF4G** behind it, take its place. On the slide this exchange is drawn as part of the same arrow labelled **nonsense-mediated decay**, because the first round of translation is where the message is proofread.
* **The mRNA closes into a circle.** eIF4G at the 5' end contacts the **poly-A-binding proteins** at the 3' end, and the message becomes a loop.

The lecture gives three reasons for the circle, and they are the reasons worth remembering:

| Why circularise | What it buys |
|---|---|
| **Quality control** | The loop can only close if **both** the cap and the poly-A tail are present and intact. A truncated or uncapped message cannot form it, and so is never translated |
| **Efficiency** | A ribosome that terminates at the 3' end is released next to the 5' end, so it can re-initiate on the same message instead of diffusing away |
| **Stability** | Both ends are occupied by protein, and both ends are where exonucleases would attack |

# The ribosome

## Free and membrane-bound ribosomes

An electron micrograph of the cytoplasm shows two populations: ribosomes **attached to the endoplasmic reticulum**, which give the rough ER its name, and ribosomes **free in the cytosol**.

![Electron micrograph of ribosomes in the cytoplasm of a eukaryotic cell, some free and some attached to endoplasmic reticulum membranes](assets/img/fig-6-64.png)

The split is by **destination, not by ribosome**: the ones on the ER are making proteins bound for **secretion** or for the membrane system, the free ones are making proteins that stay in the cytosol. A ribosome is not committed in advance; what it is translating decides where it ends up, which is chapter 12's subject.

## Two sizes, one machine

Bacterial and eukaryotic ribosomes are built to the same plan and differ in size. Both are **two subunits, one large and one small**, named by how fast they sediment: the bacterial ribosome is **70S**, from a **50S** and a **30S** subunit; the eukaryotic one is **80S**, from a **60S** and a **40S**.

![Bacterial 70S and eukaryotic 80S ribosomes broken down into their subunits, rRNAs and protein counts](assets/img/fig-6-65.png)

Two things follow that matter more than the numbers. First, the **S values do not add up** (50 + 30 gives 70, not 80), because a sedimentation coefficient depends on shape as well as mass and is not additive. Second, the **eukaryotic ribosome is the larger of the two at every level**: bigger overall, bigger subunits, longer rRNAs and more proteins, around eighty against around fifty-five. That size difference is what antibiotics exploit later in the lecture.

## Mostly RNA, and the RNA does the work

Each subunit is a complex of **rRNA** and **ribosomal proteins**, and the composition is roughly **two thirds RNA to one third protein**. Shown with **RNA in blue and protein in green**, the picture makes the relationship obvious.

![The bacterial large subunit with rRNA in blue and its proteins in green, occupying the surface and crevices](assets/img/fig-6-72.png)

The RNA is not scaffolding for the proteins; it is the other way round. The **rRNA provides the overall structure** and the **rRNA performs the catalysis**. The proteins sit mostly on the **surface and in the crevices**, stabilising the fold and tuning efficiency. The ribosome is therefore a **ribozyme**, and the peptidyl transferase centre is made of RNA. This is the same conclusion part I reached about the spliceosome, and it is the single most important structural fact in this lecture.

## A conserved core with eukaryotic additions

rRNA was the example of sequence conservation in session 1a, where an aligned stretch from human, *Methanococcus* and *E. coli* was still largely identical after billions of years. The structures say the same thing.

![Aligned rRNA sequence from human, Methanococcus and E. coli beside bacterial and eukaryotic ribosome structures coloured by which parts are universally conserved](assets/img/slide-5-09.png)

Colouring the two ribosomes by conservation shows a **universally conserved core**, the part that does the chemistry, with the eukaryotic ribosome carrying **extensions built on top of it**. Some regions are bacteria-only, some are shared by archaea and eukaryotes, some are eukaryote-only. The machine was solved once, very early, and has been decorated since.

# The nucleolus: the ribosome factory

## Why a cell needs so many rRNA genes

A cell holds on the order of **millions of ribosomes**, and it holds roughly **two hundred copies of the rRNA gene** per haploid genome. Those two facts are connected: a single copy of a gene, transcribed at the maximum rate a polymerase can manage, cannot supply that many ribosomes. **Amplification by gene copy number** is the only way to meet the demand, and an electron micrograph of rRNA genes in action shows why: each gene is coated with polymerases, transcribing simultaneously, in the "Christmas tree" pattern.

![Electron micrograph of tandemly arranged rRNA genes, showing alternating transcribed genes and untranscribed spacers](assets/img/fig-6-41.png)

## The nucleolus is built by the genes it transcribes

In humans the rRNA gene clusters sit on the short arms of the **acrocentric chromosomes**, and this is where the nucleolus comes from. A **fibrillar centre** nucleates at an rDNA locus; **rDNA loci from different chromosomes are then drawn together into one nucleolus**; and the result is a **multiphasic** body, with a fibrillar centre, a dense fibrillar component and a granular component arranged as an **assembly line**.

![Nucleolus formation after mitosis from three distinct condensates, with rDNA loci from different chromosomes brought together into one assembly line](assets/img/fig-6-46.png)

This is the transcription-factory idea from part I, made concrete: the nucleolus is **not a membrane-bounded organelle**. It is a condensate held together by the work going on inside it, which is why it has no membrane, why loci from separate chromosomes can share one, and why it behaves as a liquid.

That also explains its behaviour through the cell cycle. The nucleolus **disperses at mitosis and reassembles afterwards**, because rRNA transcription stops while the chromosomes are condensed. A compartment maintained by an activity cannot outlive the activity.

![Changes in the appearance of the nucleolus through the cell cycle, dispersing at mitosis and reassembling afterwards](assets/img/fig-6-47.png)

## Where the subunits are actually finished

This is the point the rough note got tangled in, so it is worth setting out in order.

![The nucleolus taking in rRNA gene transcripts and ribosomal proteins from the cytoplasm, processing and assembling immature subunits that are exported through nuclear pores](assets/img/fig-6-49.png)

1. The **rRNA gene is transcribed** in the nucleolus into a single long **precursor**.
2. **Ribosomal proteins are made in the cytoplasm**, like every other protein, and **imported into the nucleus**. So do the **assembly factors** and the **snoRNPs** that modify the rRNA.
3. The precursor is **modified and processed**, and the pieces are assembled with the imported proteins into **immature subunits**.
4. The **large and small subunits are exported separately** through nuclear pores.
5. Each undergoes **additional assembly in the cytoplasm**, and only there are they complete.
6. The two subunits **come together only on an mRNA**, at initiation, and separate again at termination.

So assembly **begins** in the nucleolus and **finishes** in the cytoplasm. Note also the traffic this implies: the proteins of the ribosome are made by ribosomes in the cytoplasm and then carried back into the nucleus to be built into the next generation of ribosomes. The same figure shows the nucleolus assembling **telomerase** as well, which is a reminder that it is a general ribonucleoprotein assembly site rather than a ribosome-only factory.

# tRNA and the genetic code

Translating RNA into protein needs the ribosome **and one more component**: an adaptor that can read a codon at one end and hold an amino acid at the other. That is **tRNA**.

## The shape of a tRNA

![A phenylalanine tRNA drawn as a cloverleaf with its base-paired stems, as the folded L-shaped structure from x-ray diffraction, and as its linear sequence with modified bases marked](assets/img/fig-6-54.png)

Drawn flat, a tRNA is a **cloverleaf** of base-paired stems and loops. Folded, it is an **L**, and the two things that matter sit at **opposite ends of the L**: the **anticodon** in its loop at one end, and the **amino acid attached to the 3' end** of the acceptor stem at the other. That geometry is the whole point of the molecule: one end reads the message, the other end carries the cargo, and they are far enough apart to be handled independently.

## The code is redundant, not partly unused

There are **4 nucleotides** and a codon is **3 consecutive nucleotides**, so there are **4 x 4 x 4 = 64** codons for **20 amino acids**. The lecture puts the question the right way round: does that mean some triplets are **never used**, or that the code is **redundant**?

It is redundant. Every triplet is used: **61 specify amino acids and 3 are stops**, and most amino acids are specified by more than one codon. What you are asked to carry from the code table is not the table but its shape: **AUG is both the start codon and the methionine codon**, and there are **three stop codons**.

Redundancy is achieved two ways:

* **More than one tRNA for many amino acids.**
* **Some tRNAs base-pair with more than one codon.**

The counts make the second mechanism necessary: a cell has far fewer tRNA species than it has sense codons, so tRNAs must be reading more than one codon each.

## Wobble, and inosine

Synonymous codons almost always differ in the **third** position, and that is not a coincidence. When a tRNA pairs with a codon, the third codon base pairs with the first anticodon base under **relaxed, non-standard geometry**. That position is called the **wobble position**.

![The wobble rules, listing which anticodon bases can pair with each codon base at the third position, separately for bacteria and eukaryotes](assets/img/fig-6-55.png)

The nucleotide to know here is **inosine (I)**. It is made by **deamination of adenosine**, an ordinary chemical modification of an already-made tRNA, and its value is that it is **permissive**: an inosine in the wobble position of the anticodon can pair with **U, C or A** in the codon. One tRNA then covers three codons. Inosine matters for **decoding**, not for the shape of the tRNA.

Inosine is one of a family of **modified nucleotides** found in tRNA, alongside methylated G, dihydrouridine and 4-thiouridine.

![Unusual tRNA nucleotides including N,N-dimethyl G, dihydrouridine, 4-thiouridine and inosine](assets/img/fig-6-57.png)

## The code is not quite universal

The genetic code is called universal, and it very nearly is, which is what makes the exceptions interesting. **Mitochondria** run slightly different codes, and the differences are not the same in every lineage.

![Table 14-3, some differences between the universal code and mitochondrial genetic codes in mammals, invertebrates, yeasts and plants](assets/img/slide-5-21.png)

A codon that is a **stop** in the universal code can specify an amino acid in one mitochondrial code, and an amino acid codon can become a stop. The concept: the code is a **frozen accident that is not completely frozen**, and a genome small and isolated enough can drift away from it.

## Two adaptors, not one

The slide title is the point: **the genetic code is translated by means of two adaptors**.

![An aminoacyl-tRNA synthetase charging a tRNA with tryptophan, and the charged tRNA then base-pairing with the UGG codon on mRNA](assets/img/fig-6-60.png)

The **first adaptor** is the **aminoacyl-tRNA synthetase**, which decides **which amino acid goes onto which tRNA**. The **second adaptor** is the **tRNA itself**, whose anticodon decides **which codon that tRNA reads**. The ribosome checks only the second: it verifies codon-anticodon pairing and takes whatever amino acid is attached on trust. Net result: **the amino acid is selected by its codon**, but only because the synthetase got the first step right.

That is also why a mischarged tRNA is dangerous. The ribosome has no way of detecting it.

Charging costs energy: **ATP is hydrolysed to AMP plus two phosphates**, and the amino acid ends up joined to the tRNA by a **high-energy bond**.

**Is there a different synthetase for each amino acid, or for each codon?** For each **amino acid**. Since several tRNAs can carry the same amino acid, one synthetase serves all the tRNAs for that amino acid, and it recognises them by features spread over the molecule, in the **anticodon** and in the **acceptor stem**.

![A tRNA-Gln bound to its synthetase, with recognition nucleotides in the anticodon and the acceptor stem and the ATP used for coupling](assets/img/fig-6-62.png)

## Editing

Distinguishing chemically similar amino acids is hard, so synthetases get it wrong sometimes and then fix it. The enzyme has **two sites**: a **synthesis site** and a separate **editing site**.

![Hydrolytic editing by an aminoacyl-tRNA synthetase compared with the exonucleolytic proofreading of DNA polymerase, both showing separate synthesis and editing sites](assets/img/fig-6-61.png)

If the wrong amino acid has been attached, the 3' end of the tRNA is **moved into the editing site**, where the incorrect amino acid is **hydrolysed off**. This is the same architecture as the proofreading exonuclease of DNA polymerase: **a second active site that undoes the work of the first**, which is how a cell buys accuracy it cannot get from a single binding step.

## Where the energy for the peptide bond comes from

Chapter 2 distinguished two ways of building a polymer, and proteins use the less obvious one.

![Polymer-end activation compared with direct-monomer activation for the condensation reactions that build biological polymers](assets/img/fig-2-44.png)

In **direct-monomer activation**, used for DNA, RNA and polysaccharides, **each incoming monomer carries the high-energy bond for its own addition**. In **polymer-end activation**, used for proteins and fatty acids, **the high-energy bond sits at the growing end of the chain**, and the incoming monomer brings the energy that will be used for the **next** addition.

For translation this means the growing chain is held to the ribosome as a **peptidyl-tRNA**, an activated species. Each new **aminoacyl-tRNA** attacks that activated end, the chain is transferred onto the new amino acid, and **the new tRNA now carries the activated end**. The energy was paid for earlier, by the synthetase, when the tRNA was charged.

# Translation

## The ribosome has three tRNA sites

![A bacterial ribosome with tRNAs bound in the E, P and A sites, shown from several angles and as the schematic used in later figures](assets/img/fig-6-66.png)

Three sites hold tRNAs, and they are named for what occupies them:

| Site | Name | What sits there |
|---|---|---|
| **A** | aminoacyl-tRNA | the incoming charged tRNA, matched to the codon being read |
| **P** | peptidyl-tRNA | the tRNA carrying the growing chain |
| **E** | exit | the now-empty tRNA, on its way out |

Each site **spans both subunits**. The **mRNA-binding site is in the small subunit**, and the **peptidyl transferase centre is in the large subunit**, so a tRNA in the A or P site is being read at one end by the small subunit and having its amino acid handled at the other by the large subunit. That is why both subunits are needed and why they only assemble around a message.

## Elongation

![The translation cycle drawn as four steps: aminoacyl-tRNA binding to the A site, peptide bond formation, large subunit translocation into hybrid states, and small subunit translocation carrying the mRNA three nucleotides](assets/img/fig-6-68.png)

One cycle, four steps, always in the same order:

1. A **charged tRNA binds the A site**, selected by codon-anticodon pairing.
2. A **peptide bond forms**: the chain on the P-site tRNA is transferred onto the A-site amino acid. The P-site tRNA is now empty and the A-site tRNA now carries the chain.
3. The **large subunit translocates**, putting the tRNAs into hybrid positions.
4. The **small subunit translocates**, carrying the mRNA along by exactly **three nucleotides**, which moves the new peptidyl-tRNA into the P site and **ejects the empty tRNA from the E site**.

The A site is now empty over the next codon and the cycle repeats.

## Speed

Translation runs at roughly **six amino acids per second** in a mammalian cell, and a typical protein is a few hundred residues. Two consequences are worth holding on to. First, **a typical protein takes on the order of a minute to make**, which is slow compared with almost everything else a cell does and explains why regulation acts on initiation rather than on elongation. Second, an extreme case such as **titin**, tens of thousands of residues long, takes the better part of an hour on a single ribosome, which is one reason a cell puts many ribosomes on one message.

## Elongation factors 1: speed and accuracy

An incoming tRNA is not delivered bare. It arrives bound to an elongation factor carrying **GTP** (**EF-Tu** in bacteria), and that factor is what turns a binding event into a proofread decision.

![The detailed translation cycle with EF-Tu delivering aminoacyl-tRNA and hydrolysing GTP at the first proofreading step, and EF-G driving translocation](assets/img/fig-6-69.png)

The accuracy comes from **two separate proofreading steps**, both of which work by **delay**:

* **Before GTP hydrolysis.** The tRNA is held in the A site by the factor. Only a **correct codon-anticodon pair** holds on long enough for the ribosome to trigger hydrolysis; incorrectly paired tRNAs **dissociate preferentially** before it happens.
* **After GTP hydrolysis.** The factor, now **GDP-bound**, releases the tRNA and leaves. There is a further pause before the amino acid is committed to the chain, and again **incorrectly paired tRNAs dissociate preferentially** during it.

The mechanism is the same both times: **a wrong pairing is not impossible, it is short-lived**, and the ribosome simply waits long enough that most wrong ones let go. The small-subunit rRNA does the checking, hydrogen-bonding to the minor groove of the codon-anticodon helix to verify that the geometry is right.

![A nucleotide of the small-subunit rRNA hydrogen-bonding to the first base pair of a correctly matched codon-anticodon pair](assets/img/fig-6-70.png)

This is why speed and accuracy are on the same slide: the delay that buys accuracy is also what limits the rate.

## Elongation factors 2: efficiency

A second factor (**EF-G** in bacteria), also **GTP-bound**, drives **translocation**: the step that moves the **small subunit and the mRNA** on by one codon and ejects the spent tRNA. It hydrolyses GTP and leaves.

Translocation would happen without it, but slowly and reversibly. The factor makes the step **fast and directional**, which is the same trick as any other GTP-driven motor: **couple the motion to an irreversible hydrolysis** so the cycle cannot run backwards.

## Initiation

![The eukaryotic initiation pathway, with Met-tRNAi loaded into the small subunit, the cap bound by eIF4E and eIF4G, scanning for the first AUG, and the large subunit joining](assets/img/fig-6-74.png)

Initiation is the most regulated step, and the order matters:

1. A **special initiator tRNA charged with methionine** is loaded, with **eIF2 and GTP**, into the **P site of the free small subunit**. Note that this is the one occasion a tRNA enters at the P site rather than the A site.
2. The small subunit is brought to the **5' cap**, which is held by **eIF4E** with **eIF4G** behind it, the same pair that replaced the CBC on export.
3. The small subunit **scans along the message**, spending **ATP**, looking for the **first AUG**.
4. The context around that AUG is the **Kozak sequence**, which is what marks a particular AUG as the real start rather than one that happens to be in the 5' UTR.
5. At the start codon, **eIF2 hydrolyses its GTP and the initiation factors dissociate**, and only then does the **large subunit join**.
6. The first **aminoacyl-tRNA enters the A site** and the **first peptide bond** forms. Elongation has begun.

![The Kozak sequence as a sequence logo, showing the preferred bases around the AUG start codon](assets/img/slide-5-44.png)

## Initiation in bacteria

Bacteria do not scan. Each start codon is preceded by a **Shine-Dalgarno sequence**, a **ribosome-binding site** that base-pairs directly with the small subunit's rRNA and places the ribosome straight onto the start codon.

![A bacterial mRNA carrying three ribosome-binding sites, each preceding an AUG, and each yielding a different protein](assets/img/fig-6-75.png)

The consequence is structural, and it is the real reason to know this: because a ribosome can be placed **anywhere** on the message rather than having to enter at the 5' end, a single bacterial mRNA can carry **several ribosome-binding sites and encode several proteins**. Eukaryotic scanning from the cap makes that impossible, which is why eukaryotic mRNAs are essentially one message per protein.

## Alternative initiation: IRES

Cap-dependent scanning is not the only route in. An **internal ribosome entry site (IRES)** is a **structured region of the mRNA** that recruits **eIF4G directly**, with **no cap and no eIF4E**.

![Cap-dependent initiation compared with initiation at an internal ribosome entry site, which recruits eIF4G without a cap](assets/img/slide-5-47.png)

This matters because it is a **bypass**: a cell shutting down cap-dependent translation, and a virus wanting to be translated while it does so, both care about a route that does not need the cap. The topic belongs to chapter 7.

## Termination

There is no tRNA for a stop codon. Instead a **release factor**, a protein, enters the **A site**.

![Release factor binding an A site bearing a stop codon, water added instead of an amino acid, and the ribosome dissociating into subunits](assets/img/fig-6-76.png)

Two features are worth holding:

* **It is a protein that behaves like a tRNA.** The release factor has evolved to **mimic the shape of a tRNA** closely enough to occupy the A site. The lecture shows this beside a moth that mimics a dead leaf, and the analogy is exact: an unrelated object shaped to fit a slot it has no right to.
* **It carries water instead of an amino acid.** The peptidyl transferase centre does its usual chemistry, but with **H2O as the nucleophile** rather than an amino group. Instead of another peptide bond, the chain is **hydrolysed off the tRNA**, leaving a free **carboxyl terminus**. The protein is released.

![A release factor shaped like a tRNA beside a moth mimicking a dead leaf](assets/img/slide-5-49.png)

GTP is hydrolysed, and the ribosome then **dissociates into its two subunits**, which return to the cytosolic pool and are used again on another message.

## Polyribosomes

One ribosome per message would be wasteful, and it is not what happens. As soon as one ribosome has cleared the start codon, another initiates behind it, so a single mRNA carries **many ribosomes at once**, each at a different point in the same protein.

![A series of ribosomes translating one mRNA simultaneously, and an electron micrograph of a polyribosome](assets/img/fig-6-77.png)

Drawn out, a polyribosome is the circularised message with ribosomes strung around it. **The scaffold is the mRNA itself**, closed into a loop by eIF4E and eIF4G at the cap and the poly-A-binding proteins at the tail. Nothing else holds the cluster together, and that is the elegance of it: the same loop that proves the message is intact also recycles terminating ribosomes back to the start.

# Antibiotics and the ribosome

**What is the connection between translation and antibiotics?** The lecture answers it in one line: **fungi versus bacteria, coevolution, antibiotics**. Organisms that have competed with bacteria for hundreds of millions of years have evolved molecules that poison them, and we have borrowed those molecules.

The reason so many of them hit the **ribosome** is the size and sequence difference established earlier. A bacterial ribosome is different enough from a eukaryotic one that a compound can **jam the bacterial machine and leave ours running**. That is selective toxicity, and it is the whole basis of the class.

![Binding sites for tetracycline, spectinomycin, streptomycin, hygromycin B, chloramphenicol, erythromycin and streptogramin B mapped onto the two bacterial ribosomal subunits](assets/img/fig-6-79.png)

Mapped onto the structure, the binding sites cluster where the work happens: around the **decoding centre and the mRNA channel** on the small subunit, and around the **peptidyl transferase centre and the exit tunnel** on the large one.

![Table 6-4, inhibitors of protein or RNA synthesis grouped by whether they act on bacteria, on eukaryotes, or on both](assets/img/slide-5-56.png)

The table is not to be learned by heart. What it is for is its **three groupings**, and the footnote:

| Group | What it means |
|---|---|
| **Acting only on bacteria** | The useful antibiotics. They exploit a bacterial-specific feature of the ribosome or polymerase |
| **Acting on bacteria and eukaryotes** | Not useful as antibiotics, useful as laboratory tools, because they poison the patient too |
| **Acting on eukaryotes but not bacteria** | Toxins and research reagents |

The footnote is the clinically important part: **mitochondrial ribosomes resemble bacterial ones**, so some antibacterial antibiotics have a **deleterious effect on human mitochondria**. The endosymbiotic origin of the mitochondrion turns up as a side-effect profile.

## Puromycin

Puromycin is the one to know, because its mechanism follows from its shape.

![Puromycin compared with a tyrosyl-tRNA, showing the amide bond in place of the ester bond, and its effect on translation elongation](assets/img/slide-5-57.png)

It is a **structural mimic of the aminoacyl end of a charged tRNA**. The ribosome accepts it into the **A site** and transfers the growing chain onto it, exactly as it would onto a real aminoacyl-tRNA.

The difference is one bond. In a real aminoacyl-tRNA the amino acid is attached through an **ester bond**, which the peptidyl transferase centre can break again to pass the chain on. In puromycin the equivalent linkage is an **amide (peptide) bond**, which it cannot. So the chain goes on and **cannot come off**. The peptidyl-puromycin **falls out of the ribosome**, and translation of that message stops with a **truncated protein**.

That is why puromycin acts on **both bacteria and eukaryotes**: it does not exploit a difference between the ribosomes, it abuses a reaction they both perform. It is also why it is such a useful reagent, since the truncated chains it releases are tagged with puromycin and can be detected.

# Quality control

Two checkpoints act on the message itself, and both work by **using the first round of translation as the test**.

## Cap and poly-A

The first is the circle. An mRNA that has **lost its cap or its poly-A tail**, whether because it was truncated, degraded or never finished, **cannot form the loop**, so eIF4G never meets the poly-A-binding proteins and **translation never initiates efficiently**. The structural requirement doubles as an integrity check on both ends at once.

## Nonsense-mediated decay

The second uses the **exon junction complexes** left behind by splicing. An EJC marks **where an intron was removed**, and EJCs are **stripped off by the first ribosome to pass over them**.

![A correctly spliced mRNA whose exon junction complexes are all stripped off before the stop codon, beside an aberrantly spliced one where a premature stop is reached while EJCs remain, triggering degradation](assets/img/fig-6-80.png)

That gives the cell a simple rule. On a correctly spliced message, the **normal stop codon lies in the last exon**, past every junction, so by the time a ribosome terminates **every EJC has already been removed**. If a ribosome reaches a stop codon while **EJCs are still present downstream of it**, then the stop came too early and the message is faulty.

The commonest way that happens is **abnormal splicing**: an intron retained in the message is read in frame and almost always contains an in-frame stop codon. When the ribosome stalls at such a premature stop with an EJC still downstream, **Upf proteins** are recruited and **trigger degradation of the whole mRNA**.

The logic is worth stating plainly, because it is a favourite exam point: **the cell has no way of knowing what a protein should look like, so it cannot inspect the protein. It inspects the message instead, using a mark that records the splicing history, and reads a stop codon in the wrong place relative to that mark as evidence of a splicing error.** Destroying the message is cheaper than making a truncated protein, which might be not merely useless but actively harmful.

# Folding

## Folding starts before synthesis finishes

![The steps from a newly synthesized chain through folding and cofactor binding, covalent modification, and assembly with partner subunits into a mature functional protein](assets/img/fig-6-82.png)

A polypeptide begins to fold **while it is still being made**. The N-terminal part emerges from the exit tunnel and can **fold into its domain** while the C-terminal part is still being synthesized, so a multi-domain protein folds **domain by domain, N to C**. The tunnel itself is too narrow for much more than a helix, so real folding happens **outside** the ribosome, and the fold is only **completed after release**.

This is Anfinsen's principle from chapter 3 at work: the sequence contains the information. But a crowded cytosol full of half-made hydrophobic surfaces is a difficult place to fold in, which is what the chaperones are for.

## Chaperones

**Heat shock proteins (HSPs)** are named for the conditions that first revealed them, since heat denatures proteins and cells respond by making more of the machinery that deals with denatured proteins. They are **not** only heat-stress proteins; they work constantly.

**HSP70** acts **at the ribosome exit tunnel**, on the chain as it emerges.

![An hsp70 clamping its substrate-binding domain onto exposed hydrophobic amino acids driven by ATP hydrolysis, its three-dimensional structure, and hsp70 acting at the ribosome exit tunnel](assets/img/fig-6-83.png)

It **binds exposed hydrophobic stretches**, which in a finished protein would be buried, and therefore act as a signal that folding is incomplete. **Cycles of ATP-driven binding and release** give the chain repeated chances to fold and stop it from aggregating or from committing to a wrong structure in the meantime.

**HSP60**, the chaperonin, handles a harder case: a protein that is **already incorrectly or incompletely folded**.

![A misfolded protein captured at the hydrophobic opening of a barrel-shaped chaperonin, enclosed by the GroES cap for folding in isolation, then released, with the crystal structure of GroEL-GroES](assets/img/fig-6-84.png)

It is a **barrel** with **hydrophobic binding sites** at the opening. The misfolded protein is captured, a **cap** closes over it, and ATP hydrolysis drives the folding attempt **in an isolated chamber**, away from every other protein in the cytosol. Then the cap comes off and the protein is released.

The contrast is the thing to hold: **HSP70 works on a chain as it appears and prevents trouble; HSP60 encloses a chain that is already in trouble and gives it a private second chance.** Both spend ATP, and neither adds information about the final structure.

## What happens to a protein that will not fold

![The fates of a newly synthesized protein: folded without help, folded with a chaperone, digested by the proteasome, or aggregated](assets/img/slide-5-64.png)

Four outcomes, and one of them is a disease mechanism:

* **correctly folded without help**
* **correctly folded with the help of a molecular chaperone**
* **incompletely folded, and digested by the proteasome**
* **aggregated**, which is the failure mode behind the neurodegenerative diseases mentioned in chapter 3

# Degradation

## The proteasome

![The proteasome cap recognizing a polyubiquitin chain, cleaving off the ubiquitin for recycling, and threading the unfolded protein into the core, with the cap's ubiquitin receptor and ubiquitin hydrolase](assets/img/fig-6-87.png)

The proteasome is built so that proteolysis can only happen **inside** it:

* a **central cylinder** whose **protease active sites face an internal chamber**, so nothing is digested by accident;
* an **unfoldase ring** that grips the substrate and **pulls it apart**, spending ATP, because a folded protein will not fit through;
* a **cap** at each end that **recognises the polyubiquitin chain**, and **removes the ubiquitin for recycling** before the chain is fed in.

## The ubiquitin system

![Six routes to inducing destruction of a protein, three activating a ubiquitin ligase and three creating an exposed degradation signal in the target](assets/img/fig-6-89.png)

Ubiquitin is added to the **epsilon-amino group of a lysine side chain** on the target, by a **ubiquitin ligase (E3)** working with an **E2**. One ubiquitin is added, then more onto the first, giving a **polyubiquitin chain**, and it is the **chain**, not a single ubiquitin, that the proteasome cap reads as a destruction signal.

The specificity lives in the **E3**, which is what recognises the **degradation signal** on the target. There are very many E3s, and that is how one shared destruction machine handles thousands of different substrates on different schedules.

## Regulated destruction

Degradation is **not only a way of clearing up mistakes**. It is a normal, scheduled part of signalling and of the cell cycle, and it is controlled by switching the degradation signal on and off rather than by changing the proteasome.

Three ways to expose a signal that was previously hidden:

* **Phosphorylation by a protein kinase**, creating the signal.
* **Unmasking by dissociation of a partner protein** that was covering it.
* **Creation of a destabilizing N-terminus**, by cleaving the protein.

The point is the same in all three: the protein was **already destructible**, and what changed was whether the signal could be seen. That makes destruction fast, because nothing has to be synthesized, and **irreversible**, which is exactly what you want at a point of no return such as a cell-cycle transition.

# Learning goals

The closing slide lists what to be able to talk about:

* **mRNA as a particle**, and the **nucleolus**
* **tRNA** and **tRNA synthetase**
* **codon** and **wobble position**
* **basics of the ribosome**
* **translation: start, elongation, termination**
* **puromycin**
* **mRNA quality control** and **nonsense-mediated decay**
* **chaperones**
* **proteasome, the ubiquitin system, regulated destruction**
