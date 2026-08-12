---
title: Ch 6. How Cells Read the Genome: From DNA to Protein
description: How a gene becomes an RNA and an RNA becomes a protein, and the proofreading that makes both accurate enough to be worth doing.
tags: [mboc, ch6]
---

Q: What is the **central dogma of molecular biology**, and what is the one thing about it that is genuinely universal?
![Genetic information flowing from DNA to RNA by transcription and from RNA to protein by translation, with DNA also being replicated](assets/img/fig-6-01.png)
A: That genetic information flows from DNA to RNA to protein: the nucleotide sequence of a gene is first copied into RNA, which is transcription, and the RNA then directs the synthesis of a protein, which is translation. What makes it a dogma rather than an observation is that every cell from bacteria to humans expresses its information this way. The universality stops at the outline, though, and the chapter is careful about it: eukaryotes subject their RNA transcripts to a series of processing steps in the nucleus, including splicing, before the RNA is allowed out to be translated, and those steps can change what an RNA molecule means. So the arrow from DNA to RNA to protein is shared, and almost everything in between is not.
Tags: core, universals, transcription

---

Q: Not every gene ends in a protein. What is the alternative, and how much of the genome works that way?
A: For many genes the RNA is the final product, and these are the noncoding RNAs. Like proteins, some of them fold into precise three-dimensional structures with structural and catalytic roles. The numbers give the scale: in the yeast *Saccharomyces cerevisiae* more than 1200 genes, about 15% of the total, produce RNA as their final product, and humans produce about 5000 different noncoding RNAs. The honest position the chapter takes is that the functions of many of them are still not known, and it returns in the chapter on gene control to the ones that are, so a noncoding RNA gene should not be read as a well-understood object simply because it has been counted.
Tags: core, transcription, human-genome

---

Q: The chapter says genomes are "surprisingly disorderly". What specifically is disorderly about them?
A: Four things, none of which a designer would have chosen. Genes in multicellular organisms are mostly a long string of alternating short exons and long introns, so the coding information is broken into fragments. Small bits of protein-coding sequence are interspersed with large blocks of apparently meaningless DNA. Some sections of the genome are crowded with genes and others have none at all. And there is no functional logic to the arrangement: proteins that work closely together in the cell usually have their genes on different chromosomes, while adjacent genes typically encode proteins with little to do with each other. The explanation offered is historical rather than functional, since genomes reflect chaotic evolutionary histories rather than a filing system.
Tags: core, human-genome, genome-evolution

---

Q+: What does Figure 6-2 show about the density of information in the human genome?
![A schematic of a small portion of the human X chromosome with protein-coding genes marked, noncoding RNA genes as purple diamonds, a conservation histogram, and red brackets over genes whose mutation causes inherited disease](assets/img/fig-6-02.png)
A: The stretch drawn is 1.25 million nucleotide pairs of the X chromosome, less than one two-thousandth of the genome, and it already contains at least 48 protein-coding genes plus 6 genes for noncoding RNAs. The figure is worth reading for three separate things layered on one axis: the gene structures themselves, with exons as bars above and below the line; the blue conservation histogram from alignments of 100 vertebrate genomes, which is how functional sequence is identified; and the red brackets marking genes whose mutation causes an inherited condition, including *Abcd1*, incontinentia pigmenti and the factor VIII gene behind haemophilia A. Because males carry a single X, most of these conditions affect only males, while females inheriting one defective copy are often asymptomatic because the other X still makes functional protein.
Tags: human-genome, core

---

Q: Cells make vastly different amounts of different proteins from a genome where every gene is present in one copy. Where does the difference come from?
![Gene A transcribed into many RNA molecules each translated frequently, against gene B making few RNAs each translated rarely](assets/img/fig-6-03.png)
A: From the efficiency of the two steps, multiplied together. Many identical RNA copies can be made from one gene, and each RNA can direct the synthesis of many identical protein molecules, so the output is amplified twice over. Genes are transcribed and translated with different efficiencies, so a gene transcribed heavily whose transcripts are also translated heavily produces enormously more protein than one where both steps are inefficient. On top of this the cell can regulate expression gene by gene according to its needs, most commonly by controlling the production of RNA, and many genes are not expressed at all in a given cell type.
Tags: core, regulation, transcription

---

Q: The chapter names one underlying problem as a central theme of the whole chapter. What is it?
A: That conventional base-pairing, on which nearly every step of gene expression depends, has only modest specificity on its own. In many contexts a correct base pair is only 10 to 100 times more thermodynamically stable than an incorrect one, which is nowhere near the accuracy that transcription and translation actually achieve. So the chapter is organized around the mechanisms cells use to improve on base-pairing and to correct the mistakes it makes, and the recurring answers are proofreading steps, kinetic delays and induced fit. Reading the chapter with that theme in mind makes the repeated appearance of GTP hydrolysis and time delays look like one strategy rather than several unrelated details.
Tags: core, fidelity, universals

---

Q: Chemically, how does RNA differ from DNA, and how much do those differences matter?
![Ribose compared with deoxyribose, and uracil compared with thymine](assets/img/fig-6-05.png)
A: Two differences, both small on paper. The sugar is ribose rather than deoxyribose, which means an extra hydroxyl group on the sugar ring, and this is where ribonucleic acid gets its name. The base uracil replaces thymine, and uracil is simply thymine lacking a methyl group. Neither change affects base-pairing: U pairs with A through the same hydrogen bonds that T does, so the pairing rules carry over intact, with G pairing C and A pairing U. The consequence that does matter is structural rather than chemical, because DNA occurs in cells as a double helix while RNA is single-stranded, and that difference is what gives RNA a completely different set of capabilities.
Tags: dna-structure, transcription, core

---

Q: In RNA the sugar is {{ribose}}, which differs from deoxyribose by an extra {{-OH}} group, and the base {{uracil}} replaces thymine, from which it differs by the absence of a {{methyl}} group.
![A short length of RNA showing the phosphodiester linkage between nucleotides and the 5' and 3' ends](assets/img/fig-6-04.png)
A: Neither change touches the pairing rules. Uracil forms the same hydrogen bonds with adenine that thymine does, so a U-A pair closely resembles a T-A pair, and the missing methyl group has no effect on base-pairing at all. The phosphodiester linkage joining the nucleotides is also the same as in DNA. So RNA is chemically DNA with two small substitutions, and everything that makes it behave differently follows from being single-stranded rather than from the chemistry of the subunits.
![Uracil hydrogen-bonded to adenine, showing that the U-A pair closely resembles a T-A pair](assets/img/fig-6-06.png)
Tags: dna-structure, transcription

---

Q+: If RNA is single-stranded, what can it do that DNA cannot?
![An RNA molecule folded through conventional base pairs, the same structure folded further by nonconventional pairs, and the structure of a real self-splicing RNA](assets/img/fig-6-07.png)
A: Fold into a specific three-dimensional shape determined by its own sequence, exactly as a polypeptide chain does. RNA is largely single-stranded but contains short stretches that can pair with complementary sequences elsewhere in the same molecule, and beyond those conventional G-C and A-U pairs there are nonconventional interactions, A-G among them, that fold the structure further. The payoff is that some RNA molecules acquire precise structural and catalytic functions, which is why the same polymer can be a passive message in one gene and an enzyme in another. The example the figure ends on is a real RNA that catalyses its own splicing.
Tags: structure, catalysis, transcription

---

Q: How does transcription differ from DNA replication, given that both copy a template?
![A DNA double helix with one strand acting as template, transcribed into a single-strand RNA whose sequence matches the non-template strand with U for T](assets/img/fig-6-08.png)
A: Three ways that follow from what the product is for. The new RNA strand does not stay hydrogen-bonded to its template: just behind the point where nucleotides are being added, the RNA is displaced and the DNA helix re-forms, so transcripts are released as single strands. The RNA is copied from only a limited region rather than the whole molecule, so where a human chromosomal DNA can run to 250 million nucleotide pairs, most RNAs are no more than a few thousand nucleotides and many are much shorter. And because the RNA peels off immediately, many copies can be made from the same gene at once, with new transcripts started before earlier ones are finished. One detail worth holding onto from the figure: the RNA sequence matches the non-template strand, with U wherever that strand has T.
Tags: transcription, replication, core

---

Q: How fast does transcription run, and how many transcripts can one gene yield?
![Electron micrograph of two adjacent genes each covered with RNA polymerase molecules carrying transcripts of increasing length](assets/img/fig-6-10.png)
A: Each polymerase moves at up to 50 nucleotides per second, and because they follow hard on each other's heels, more than a thousand transcripts can be made from a single gene in an hour. The micrograph is the direct evidence: polymerases appear as a row of dots along the DNA with newly made transcripts as fine threads attached, and because the threads get progressively longer in one direction you can read off which way the polymerases are travelling, in this case right to left. The transcripts here are ribosomal RNAs rather than mRNAs, and the particles at the free 5′ end of each are thought to be the beginnings of ribosome assembly, so the picture is catching transcription and ribosome construction happening together.
Tags: transcription, machines

---

Q: RNA polymerase and DNA polymerase catalyse essentially the same chemistry. How do they differ?
![Cutaway view of RNA polymerase with the magnesium ion at the active site, the short DNA-RNA helix, the ribonucleoside triphosphate uptake channel and the direction of transcription](assets/img/fig-6-09.png)
A: In four respects. RNA polymerase links ribonucleotides rather than deoxyribonucleotides, using ATP, CTP, UTP and GTP as substrates, whose phosphate bonds provide the driving force. It can start a chain without a primer, which DNA polymerases cannot. It is processive in a stronger sense: the same polymerase that begins an RNA molecule must finish it without dissociating, whereas DNA polymerases make their products in segments that are stitched together later. And it is far less accurate, at about one mistake per $10^4$ nucleotides against one per $10^7$ for proofread DNA replication. The structural surprise is that despite doing the same job, x-ray crystallography shows the two enzymes are quite different apart from a critical $\mathrm{Mg}^{2+}$ at the catalytic site, which suggests template-dependent polymerases arose at least twice in early evolution.
Tags: transcription, enzymes, machines

---

Q+: Why is the cell willing to tolerate an error rate a thousandfold worse than in replication?
A: Because RNA does not permanently store genetic information. A mistake in a transcript affects only the molecules made from that one copy, and transcripts are made in large numbers and turned over, so a faulty one is diluted and eventually degraded. A mistake in DNA is inherited by every descendant cell. That difference in consequence is what allows RNA polymerase to skip a primer and to run with a lighter proofreading mechanism than DNA polymerase carries. It does still proofread modestly: if an incorrect ribonucleotide is added, the polymerase can back up and excise it in a reaction that resembles the reverse of polymerization, except that a water molecule takes the place of pyrophosphate and a nucleoside monophosphate is released.
Tags: fidelity, proofreading, transcription

---

Q: What are the main categories of RNA a cell produces?
A: One coding class and a long list of noncoding ones.

| Type | What it does |
| --- | --- |
| mRNA | Messenger RNA, carries the code for a protein |
| rRNA | Ribosomal RNA, forms the basic structure of the ribosome and catalyses protein synthesis |
| tRNA | Transfer RNA, the adaptor between mRNA and amino acids |
| snRNA | Small nuclear RNA, functions in nuclear processes including pre-mRNA splicing |
| snoRNA | Small nucleolar RNA, helps process and chemically modify rRNAs |
| miRNA | MicroRNA, blocks translation of specific mRNAs and causes their degradation |
| siRNA | Small interfering RNA, directs degradation of selected mRNAs and helps establish repressive chromatin |
| piRNA | Piwi-interacting RNA, protects the germ line from transposable elements |
| lncRNA | Long noncoding RNA, a diverse set, some scaffolding and regulating processes such as X-inactivation |

Telomerase RNA belongs on the list too, as the template the telomerase enzyme carries. The chapter adds a caveat to the lncRNA row that is easy to skip: not all of them appear to have a function.
Tags: core, transcription, regulation

---

Q+: Of all the RNA in a cell, how much is messenger RNA?
A: Very little. RNA makes up only a few percent of a cell's dry weight against about 50% for protein, and most of that RNA is ribosomal. Messenger RNA is only 3 to 5% of the total RNA in a typical mammalian cell. What makes that figure more striking is how it is divided: the mRNA population consists of tens of thousands of different species, so on average there are only 10 to 15 molecules of each species present in a cell. The machinery for finding and translating a particular message is therefore working at very low copy number, which is worth remembering whenever a diagram draws a tidy queue of ribosomes on an abundant transcript.
Tags: core, transcription

---

Q: What is a **transcription unit**, and how does its content differ between bacteria and eukaryotes?
A: A transcription unit is each transcribed segment of DNA. In eukaryotes it typically carries the information of just one gene, so it codes for a single RNA or a single protein, or for a group of related proteins if the initial transcript is spliced in more than one way. In bacteria a set of adjacent genes is often transcribed as one unit, so the resulting mRNA carries the information for several distinct proteins. That single organizational difference has consequences that run through the rest of the chapter, since a bacterial ribosome must be able to start translating in the middle of a message while a eukaryotic one generally starts at the beginning.
Tags: transcription, core

---

Q: What is a **σ factor**, and what does it contribute that the core enzyme cannot?
![The transcription cycle of bacterial RNA polymerase drawn as eight steps, from holoenzyme assembly and promoter binding through abortive initiation, sigma release, elongation and termination](assets/img/fig-6-11.png)
A: The bacterial RNA polymerase core enzyme is a multisubunit complex that can synthesize RNA from a template, but it cannot tell where to begin. Sigma factor is an additional subunit that associates with the core and reads the signals in DNA marking the start, and core plus σ together are the **holoenzyme**. The mechanism is a search: the holoenzyme adheres only weakly when it collides with DNA, so it slides rapidly along the molecule and dissociates again, until it slides into a promoter, where it binds tightly because σ makes specific contacts with the edges of bases exposed on the outside of the double helix. Sigma is then discarded once transcription is properly under way, and the free core enzyme picks up a fresh σ to start again.
Tags: transcription, machines, core

---

Q+: Walk through what happens between promoter binding and productive elongation.
A: The tightly bound holoenzyme opens the double helix to expose about 10 unpaired nucleotides, the **transcription bubble**, stabilized by σ binding the unpaired bases on one strand. The other strand is the template, and the first two ribonucleotides are joined to begin the chain. The first ten or so nucleotides are made by **scrunching**, where the polymerase stays bound to the promoter and pulls upstream DNA into its active site, expanding the bubble. That builds considerable stress, and the short RNAs are frequently released to relieve it, forcing the enzyme, which has not moved, to start over: this is **abortive initiation**. Eventually the attempt succeeds, and the stress from scrunching is what helps the core break its grip on the promoter and discard σ. From there the polymerase moves one base pair forward per nucleotide added, the bubble expanding at the front and contracting at the rear, at about 50 nucleotides per second.
Tags: transcription, machines

---

Q+: How does a bacterial polymerase know to stop?
A: By transcribing a terminator, which for most bacterial genes is a string of A-T nucleotide pairs preceded by a twofold symmetric sequence. Once transcribed, the symmetric part folds back on itself into an RNA hairpin through Watson-Crick base-pairing, and the hairpin destabilizes the polymerase's hold on the transcript. The A-T run is the other half of the mechanism: the RNA in the hybrid at that point is held by weak A-U base pairs, so once the hairpin forms there is little holding the transcript in place and both RNA and DNA template are released. This is the first of many places in the chapter where the folding of RNA into a specific structure is what carries out a step, rather than a protein doing it.
Tags: transcription, structure

---

Q: If a polymerase falls off a gene halfway through, what happens to the partial transcript?
A: It is lost, and the polymerase must start over from the promoter. This is why the conformational changes of initiation matter so much: the enzyme first has to open the double helix at the promoter, and then has to tighten around the DNA and RNA so that it will not dissociate before the gene is finished. Processivity here is not a convenience but a requirement, because unlike DNA replication there is no mechanism for joining a partial transcript to one made later by a different enzyme. A gene is transcribed by one polymerase from end to end or not at all.
Tags: transcription, machines

---

Q: What is a **consensus sequence**, and what does a **sequence logo** show that a consensus sequence hides?
![The consensus sequence for E. coli promoters with its -35 and -10 hexamers, the distribution of spacings between them, and the same information drawn as a sequence logo](assets/img/fig-6-12.png)
A: A consensus sequence is derived by comparing many sequences with the same function and taking the most common nucleotide at each position, so it is an average of a large collection rather than any real sequence. What it hides is how strong the preference is at each position: writing T at a position says nothing about whether T appears in 95% or 40% of promoters. A sequence logo fixes that by making the height of each letter proportional to how often that base occurs there, with the total height at a position proportional to the information content in bits. So a position tolerating several bases comes out short, as the last three bases of the $-35$ sequence do, while a strongly constrained position comes out tall. The major class of *E. coli* promoters is defined by two hexamers, the $-35$ and $-10$ sequences, named for their approximate position relative to the start point at $+1$.
Tags: transcription, model-organisms

---

Q+: The sequence between the two hexamers shows no similarity between promoters, yet the figure devotes a whole panel to it. Why?
A: Because the spacing matters even though the sequence does not. The panel plots the distribution of distances between the $-35$ and $-10$ hexamers across *E. coli* promoters, and it clusters tightly around 16 to 18 nucleotides. The reason is geometric rather than chemical: σ factor contacts both hexamers at once, so they have to be presented on the same face of the helix at the right separation, and what lies between them is simply spacer. This is a general lesson about reading regulatory DNA, since a stretch with no sequence conservation can still be under selection for its length.
Tags: transcription, regulatory-dna

---

Q: What makes one bacterial promoter stronger than another, and why does that matter?
A: Strength means the number of initiation events per unit time, and it is set by the promoter's own nucleotide sequence, specifically how closely it matches what σ factor prefers. Evolution has tuned each promoter to initiate as often as necessary, producing a wide spectrum: genes coding for abundant proteins have much stronger promoters than genes for rare ones. This is worth pairing with the earlier point about expression efficiency, because it identifies where one of those differences is physically written. Terminators vary in sequence even more than promoters do, since the only feature that really matters is the potential to form a hairpin, and an almost unlimited number of sequences can do that.
Tags: transcription, regulatory-dna

---

Q+: Given all that variation, can you find promoters and terminators just by reading a genome sequence?
A: Not reliably, and the chapter uses this to make a general point about genome analysis. We know a great deal about bacterial promoters and can write down an average sequence capturing their most salient features, yet the variation between real promoters makes it difficult to locate them definitively from sequence alone. In eukaryotic genomes it is harder still, partly because of the sheer excess of DNA the signals are buried in. Additional information, some of it from direct experiment, is usually needed to locate and interpret these short signals. This is the same difficulty the chapter opened with, that cells decode their genomes thousands of times a second while we struggle to find where a gene begins.
Tags: transcription, human-genome

---

Q: Which DNA strand is used as the template for transcription?
![A stretch of bacterial chromosome with genes transcribed in both directions, the direction of each set by the orientation of its promoter](assets/img/fig-6-13.png)
A: It varies from gene to gene, and the promoter decides. Promoter sequences are asymmetric, so RNA polymerase can bind in only one orientation, and because the polymerase can synthesize RNA only in the 5′-to-3′ direction, that orientation determines which strand is read as template. In the stretch of *E. coli* chromosome shown, about 9000 base pairs or 0.2% of the genome, genes transcribed left to right use the bottom strand as template and those transcribed right to left use the top strand. So there is no such thing as "the template strand" of a chromosome, only the template strand for a particular gene.
Tags: transcription, core

---

Q+: A transcript begins 5′-AUGCCAG-3′. Which strand did the polymerase read as its template?
- [x] 3′-TACGGTC-5′
- [ ] 3′-ATGCCAG-5′
- [ ] 3′-CTGGCAT-5′
- [ ] 3′-UACGGUC-5′
A: The template must be complementary to the transcript and antiparallel to it, so pairing A with T, U with A, G with C and C with G gives 3′-TACGGTC-5′. The second option is the *non*-template strand, whose sequence matches the RNA except that it carries T where the RNA has U, and it is the strand people usually write when they quote a gene sequence, which is exactly why it is the tempting wrong answer. The third is the correct bases in the wrong order, which is what you get by forgetting that the two strands run antiparallel. The fourth contains uracil, which does not occur in DNA at all.
Tags: transcription, dna-structure

---

Q: Eukaryotic nuclei have three RNA polymerases. Which genes does each transcribe?
A: They are structurally similar and share some subunits, but they divide the work.

| Polymerase | Genes transcribed |
| --- | --- |
| RNA polymerase I | Most ribosomal RNA genes |
| RNA polymerase II | All protein-coding genes, plus snoRNA, miRNA, siRNA, lncRNA and most snRNA genes |
| RNA polymerase III | tRNA genes, 5S rRNA genes, some snRNA genes and other small RNA genes |

Polymerase II does most of what the chapter is about, since it makes every mRNA. A naming note worth having: rRNAs are named by their S values, which measure how fast they sediment in an ultracentrifuge, so a larger S means a larger rRNA. That is why 28S is bigger than 18S, and why the numbers do not simply add up when subunits combine.
Tags: transcription, core

---

Q: Bacterial RNA polymerase needs one initiation factor. What do eukaryotes need instead, and why?
![A bacterial RNA polymerase and eukaryotic RNA polymerase II side by side with structurally similar regions in green, additional eukaryotic regions in grey, the catalytic magnesium in red and structural zinc atoms in blue](assets/img/fig-6-14.png)
A: Eukaryotic polymerases need many factors, collectively the **general transcription factors**, where bacteria need only σ. The second difference is the substrate: eukaryotic initiation has to happen on DNA packaged into nucleosomes and higher-order chromatin, which bacterial chromosomes do not have. The structures themselves are more alike than the mechanisms, since polymerase II is larger at 12 subunits against 5 but shares large regions of structure with the bacterial enzyme, along with the catalytic magnesium and structural zinc atoms. The polymerases of bacteria, archaea and eukaryotes are all closely related, which puts the basic design of the enzyme before the divergence of the three domains.
Tags: transcription, machines, evolution

---

Q: Trace the assembly of a transcription initiation complex at a polymerase II promoter.
![TFIID binding the TATA box through TBP, followed by TFIIB and TFIIA, then assembly of RNA polymerase and the remaining general factors, then TFIIH prying the helix apart and phosphorylating the polymerase tail](assets/img/fig-6-15.png)
A: It begins when TFIID binds a short stretch of DNA made mostly of T and A nucleotides, the **TATA box**, typically about 30 nucleotides upstream of the start site, through its subunit **TBP**, the TATA-binding protein. That binding lets TFIIB and TFIIA bind alongside. RNA polymerase II and the remaining general factors then assemble to complete the initiation complex. TFIIH, the most complicated of the factors at 10 subunits and nearly as large as the polymerase itself, then hydrolyses ATP to pull the two DNA strands apart at the start point and expose the template. The polymerase then makes short RNAs at the promoter until conformational changes let it move away into elongation. For most genes TFIID stays behind at the promoter while the other general factors are released.
Tags: transcription, machines, core

---

Q+: What do the individual general transcription factors do?
A: Each has a defined job, and the set is required at nearly all polymerase II promoters, which is what makes them "general".

| Factor | Role |
| --- | --- |
| TFIID | Recognizes the TATA box and other sequences near the start point; composed of TBP plus 11 TAFs |
| TFIIB | Recognizes the BRE element; accurately positions the polymerase at the start site |
| TFIIA | Not needed at all promoters; stabilizes TFIID binding |
| TFIIF | Stabilizes the polymerase interaction with TFIIB; helps attract TFIIE and TFIIH |
| TFIIH | Unwinds DNA at the start point, phosphorylates Ser5 of the CTD, releases the polymerase from the promoter |

In a broad sense they carry out together what σ does alone in bacteria, which is the useful way to hold them rather than as five unrelated names.
Tags: transcription, machines

---

Q+: TBP does something to the DNA beyond binding it. What, and what is that for?
![The TATA-binding protein bound to DNA, folded into two similar domains and bending the double helix through kinks separated by partly unwound DNA](assets/img/fig-6-17.png)
A: It causes a large distortion, kinking the double helix in two places with partly unwound DNA between them. Two purposes are proposed. The distortion is thought to serve as a physical landmark marking the location of an active promoter in the middle of a very large genome, so what the rest of the machinery recognizes is a shape rather than a sequence. And bending brings the DNA sequences on either side closer together, which makes the subsequent protein assembly steps possible. TBP itself is a single polypeptide folded into two very similar domains, which is the structural signature of an ancient internal duplication.
Tags: transcription, structure

---

Q: The TATA box is not the only signal at a polymerase II start point. What are the others?
![The consensus sequences around a eukaryotic polymerase II start point, with BRE and TATA upstream, INR at the start point and DPE downstream, and the factor that recognizes each](assets/img/fig-6-16.png)
A: Four sequences recur: **BRE** at about $-35$, recognized by TFIIB; the **TATA** box at about $-30$, recognized by TBP within TFIID; **INR**, the initiator, straddling the start point itself and recognized by TFIID; and **DPE**, the downstream promoter element at about $+30$, also recognized by TFIID. Two things about this list are worth holding. Most start points carry only two or three of the four, and the ones lacking a TATA box typically have a strong INR instead, so there is no single required element. And the DPE sits inside the transcribed region rather than upstream, which breaks the intuition that all the signals controlling transcription must come before the gene.
Tags: transcription, regulatory-dna

---

Q: What is the **CTD**, and what happens to it during initiation?
A: The C-terminal domain is a long tail extending from the core of RNA polymerase II, and in humans it consists of 52 tandem repeats of a seven-amino-acid sequence. During initiation, TFIIH, which carries a protein kinase in one of its subunits, phosphorylates the serine at the fifth position of each repeat. Those phosphorylations trigger the polymerase to disengage from the cluster of general transcription factors, and during that process it undergoes conformational changes that tighten its grip on the DNA and acquires new proteins that let it transcribe for very long distances, in some cases for hours, without dissociating. The general factors left behind are then free to initiate another round with a fresh polymerase, which is how one promoter supports repeated firing.
Tags: transcription, machines, phosphorylation

---

Q+: Fully extended, the CTD is nearly ten times longer than the rest of the polymerase. What is a cell doing with a tail that size?
![RNA polymerase transcribing with capping proteins, splicing proteins and 3'-end processing proteins carried on its phosphorylated tail and handed onto the emerging RNA](assets/img/fig-6-23.png)
A: Using it as a scaffold. The CTD is a flexible domain that tethers a collection of proteins close to the polymerase so they can act the moment they are needed, and phosphorylation is what recruits them. The set includes the elongation factors and the RNA-processing machinery, and some of the processing proteins are thought to hop from the tail onto the nascent RNA to begin work as soon as it emerges. That turns the elongating polymerase into an RNA factory that both synthesizes the transcript and processes it on the way out. The strategy of holding consecutive reactions together on a tether to speed up the whole series is used widely in the cell rather than being peculiar to transcription.
Tags: transcription, rna-processing, machines

---

Q: On purified DNA, general transcription factors plus polymerase are enough to initiate. What else does a real eukaryotic cell need?
![An activator protein bound at a distant enhancer, with Mediator, general transcription factors, RNA polymerase, chromatin remodelling complexes and histone-modifying enzymes assembling at the promoter](assets/img/fig-6-18.png)
A: Three further classes of protein, because the in vitro experiment leaves out chromatin. Transcriptional **activators** must bind specific sequences called **enhancers**, often thousands of nucleotide pairs away along the DNA, to help attract the general factors and polymerase to the start point. **Mediator**, a large complex, lets those activators communicate with polymerase II and the general factors, and it also positions TFIIH near the polymerase tail so the tail gets phosphorylated and the polymerase is released. And chromatin-modifying enzymes are needed at most genes, both ATP-dependent remodelling complexes and histone-modifying enzymes, because the default state of eukaryotic DNA is to be packaged into nucleosomes. Altogether well over 100 individual subunits assemble at a start point to begin transcription in a eukaryotic cell.
Tags: transcription, regulation, chromatin

---

Q: How does a polymerase transcribe through a nucleosome without knocking it off?
![Cryo-electron microscopy structure of RNA polymerase II halfway through a nucleosome, with elongation factors Spt4, Spt5 and Elf1, and one turn of DNA still on the histone core](assets/img/fig-6-19.png)
A: With help, in several forms. Elongation factors associate with the polymerase shortly after initiation and reduce the chance that it dissociates before reaching the end of a gene. In the structure shown the polymerase has moved about halfway through the nucleosome, leaving one of the two loops of duplex DNA still bound to the histone core, and the factors Spt4, Spt5 and Elf1 are working in three ways: forming a wedge that pries DNA away from the histone core, destabilizing histone-DNA contacts by pushing a positively charged surface ahead of the polymerase, and reducing the polymerase's own stickiness for nucleosomes. Beyond these, ATP-dependent remodelling complexes seek out and rescue occasional stalled polymerases, and histone chaperones partially disassemble nucleosomes in front of the polymerase and reassemble them behind.
Tags: transcription, chromatin, machines

---

Q+: Elongation is not a smooth glide. What does the polymerase actually do, and what does the cell do with that?
A: It moves jerkily, pausing at some sequences and transcribing rapidly through others. At many human genes the polymerase pauses shortly after initiating, and the pause can last from several seconds to many hours, with the cell controlling its duration as a means of gene regulation. So elongation is a second control point rather than an automatic consequence of initiation. A separate thing happens as the polymerase travels: some of the enzymes bound to it modify histones, leaving a record of where the polymerase has been. The chapter is honest that it is not clear exactly how the cell uses that record, offering only that it may make it easier to transcribe a gene repeatedly once it has been activated for the first time.
Tags: transcription, regulation, chromatin

---

Q: Why does a polymerase moving along DNA create **superhelical tension**?
![DNA with a free end rotating as the helix is opened, DNA with fixed ends forming a supercoil instead, and a protein tracking along DNA generating positive supercoils ahead and negative supercoils behind](assets/img/fig-6-20.png)
A: Because neither the DNA nor the polymerase is free to spin. There are about 10 nucleotide pairs per helical turn, so opening 10 nucleotide pairs requires one full rotation somewhere. If one end of the DNA is free, or a nick provides a swivel, the helix simply rotates. If the ends are fixed, as in a bacterial circle or a clamped eukaryotic loop, the rotation cannot happen and the strain is taken up instead by the helix bending into one supercoil for every 10 nucleotide pairs opened. Now add a polymerase that is far too large, with its transcript attached, to rotate rapidly around the helix as it moves: helical turns pile up ahead of it as positive supercoils and are lost behind it as negative supercoils.
Tags: transcription, topoisomerases, structure

---

Q+: What are the consequences of that tension, good and bad?
A: If it is not relieved the polymerase grinds to a halt, because further unwinding would cost more energy than transcription can supply, and topoisomerases are what relieve it, exactly as they do for the tension generated by DNA replication. The mild buildup is thought to bring a bonus in eukaryotes: positive tension ahead of the polymerase makes the DNA in nucleosomes easier to unwrap, since releasing DNA from the histone core relaxes that tension. Bacteria go further and exploit the effect deliberately. DNA gyrase, a specialized topoisomerase found in bacteria but not eukaryotes, spends ATP to pump negative supercoils into the DNA continuously, holding the chromosome under constant tension of the opposite handedness. Opening the helix anywhere then removes some of those negative supercoils, so helix opening is energetically favourable, which assists every bacterial process that needs it, transcription initiation included.
Tags: transcription, topoisomerases, enzymes

---

Q: Compare the route from gene to protein in a eukaryote and in a bacterium.
![The eukaryotic route through transcription, capping, splicing, polyadenylation, export and translation, beside the much shorter bacterial route in a single compartment](assets/img/fig-6-21.png)
A: In a eukaryote the transcript contains both exons and introns, both ends are modified, the introns are removed by splicing, and the resulting mRNA is transported out of the nucleus before it can be translated. In a bacterium the 5′ end of an mRNA is simply where transcription started and the 3′ end is where it stopped, with no modification of either; there is no nucleus, so transcription and translation happen in one compartment and translation of a message often begins before its synthesis has finished; and one bacterial mRNA typically produces several different proteins. Two caveats the figure carries are worth keeping. The eukaryotic steps are drawn in sequence for convenience but many happen concurrently, with capping and splicing beginning before transcription is complete. Because of that coupling, intact primary transcripts, the full-length RNAs you would get if no processing occurred, are found only rarely.
Tags: rna-processing, transcription, core

---

Q: How are the two ends of a eukaryotic mRNA modified, and what is the point of modifying both?
![Bacterial mRNA with unmodified ends encoding three proteins, eukaryotic mRNA with a 5' cap and poly-A tail encoding one, and the structure of the 5' cap with its 5'-to-5' triphosphate bridge](assets/img/fig-6-22.png)
A: The 5′ end gets a cap, a modified guanine nucleotide, and the 3′ end is produced by cleaving the transcript and adding a poly-A tail of about 150 to 250 adenines. The reason for marking both, rather than one, is that it lets the cell check that an mRNA is intact before committing to it: if both special ends are present the message cannot be a fragment, and only then is it exported from the nucleus and translated. The structural oddity worth noticing in the cap is its linkage, a 5′-to-5′ triphosphate bridge joining 7-methylguanosine to the rest of the RNA, which is not how nucleotides are normally joined and is what makes the cap recognizable as a cap.
Tags: rna-processing, core

---

Q+: Most eukaryotic mRNAs carry one further methylation on the cap. What is it for?
A: The 2′-hydroxyl of the ribose at the 5′ end of the primary transcript is methylated, and its role was mysterious for many years. Recent work indicates that it lets cells distinguish their own mRNAs from those of invading viruses, which typically lack the modification, and a cell that can make that distinction can block translation of viral RNAs and so defend itself. It is a good example of a modification whose function is not chemical in any obvious way: nothing about the extra methyl group helps the message be translated, and its whole purpose is to serve as a mark of self.
Tags: rna-processing, viruses

---

Q: When during transcription is the cap added, and why then?
A: As soon as RNA polymerase II has produced about 20 nucleotides of RNA, which is far earlier than the transcript is finished. The timing follows from the coupling arrangement: the capping enzymes are among the proteins carried on the phosphorylated CTD, so they are already present when the 5′ end first emerges from the polymerase and they act on it immediately. Capping first also makes sense of the order of the processing steps, because the 5′ end is the first part of the transcript to exist, and leaving it unprotected while several kilobases are transcribed would expose it to degradation.
Tags: rna-processing, transcription

---

Q: Three enzymes build the 5′ cap. What does each do?
![The capping reactions, from removal of a phosphate through addition of GMP in a reverse linkage to methylation of the guanosine](assets/img/fig-6-24.png)
A: A phosphatase removes one phosphate from the triphosphate left at the 5′ end of the nascent RNA, leaving a diphosphate. A guanyl transferase adds a GMP to that diphosphate in a reverse linkage, 5′-to-5′ rather than the usual 5′-to-3′, which is what makes the cap chemically distinctive. A methyl transferase then adds a methyl group to the guanosine, producing 7-methylguanosine. All three bind the polymerase tail phosphorylated on Ser5, the modification TFIIH added during initiation, so all three are already in position when the 5′ end emerges. The nucleotide that starts an RNA chain is usually a purine, and the cap is added on top of whatever it is.
Tags: rna-processing, enzymes

---

Q+: What does the cell use the cap for, once it has one?
A: As a label meaning "this is a messenger RNA". The 7-methylguanosine marks the 5′ end of eukaryotic mRNAs and helps the cell distinguish them from the other RNAs present, which works because polymerases I and III produce uncapped RNAs, partly because they lack a CTD to carry the capping enzymes. In the nucleus the cap binds the cap-binding complex, CBC, which helps a future mRNA be processed further and exported. Later, in the cytosol, the cap has an important role in translation. So a single modification serves as identity tag, processing handle, export licence and translation signal at four different points in the molecule's life.
Tags: rna-processing, core

---

Q+: A minority of mRNAs carry a completely different cap. What is it, and what might it be for?
A: NADP$^+$, the same cofactor that appears throughout metabolism, which RNA polymerase itself installs as the first nucleotide when it begins the chain rather than being added afterwards by capping enzymes. Its role is not known with certainty. The hypothesis the chapter offers is that it gives the cell a way to link expression of some genes to its overall metabolic health, since the availability of NADP$^+$ reflects metabolic state and a polymerase that starts with whatever nucleotide is abundant would produce differently capped messages under different conditions. Worth filing as a case where the mechanism is established and the purpose is a proposal.
Tags: rna-processing, coenzymes

---

Q: Introns were discovered in 1977 and came as a surprise. Why was it a surprise, and how much of a eukaryotic gene do they occupy?
![The three-exon human β-globin gene beside the 26-exon Factor VIII gene, drawn to different scales](assets/img/fig-6-25.png)
A: Because until then molecular biologists were familiar only with bacterial genes, which are a continuous stretch of coding DNA transcribed directly into mRNA. Eukaryotic genes turned out to be small pieces of coding sequence, the exons, separated by much longer intervening sequences, the introns, so the coding portion is often only a small fraction of the gene's length. Both are transcribed, and the introns are then removed from the transcript by splicing. The two genes in the figure show the range: β-globin has 3 exons while the factor VIII gene has 26, and on average each of the roughly 20,000 human protein-coding genes carries 11 introns. Only after both ends have been processed and splicing is done is a transcript called an mRNA.
Tags: splicing, human-genome, core

---

Q: Trace the chemistry of a single splicing event.
![The branch-point adenine attacking the 5' splice site to form a lariat, then the freed exon end attacking the next exon, with the phosphate rearrangements drawn in detail](assets/img/fig-6-26.png)
A: Two sequential phosphoryl-transfer reactions, both transesterifications, which means no bond is hydrolysed and the number of phosphodiester bonds stays constant. First, a specific adenine within the intron attacks the 5′ splice site and cuts the backbone there; the cut 5′ end of the intron becomes covalently joined to that adenine, through its 2′ position, which creates a loop. Second, the 3′-OH end freed on the first exon attacks the start of the next exon, joining the two exons into a continuous coding sequence and releasing the intron as a **lariat**. The released intron is eventually broken down to nucleotides and recycled. That the branch is made to an adenine's 2′ hydroxyl is what makes the intermediate a lariat rather than a linear piece.
Tags: splicing, catalysis, core

---

Q: What are the sequences that tell the machinery where to splice, and how much of them is actually fixed?
![The consensus sequences at the 5' splice site, branch point and 3' splice site of a human intron, with the branch-point adenine marked](assets/img/fig-6-28.png)
A: Three blocks are needed: the 5′ splice site, the branch point inside the intron that becomes the base of the lariat, and the 3′ splice site preceded by a polypyrimidine tract. Each has a consensus, but only two nucleotides are invariant, the GU beginning the intron and the AG ending it, and several different nucleotides can occupy every other position. The distances between the three blocks vary enormously, though the branch point sits much closer to the 3′ junction than to the 5′ one. Two invariant nucleotides is nothing like enough information to locate a splice site in a genome, which is exactly why the cell needs the additional mechanisms that follow.
Tags: splicing, regulatory-dna

---

Q: What is the **spliceosome** made of, and what is unusual about which part does the catalysis?
A: Five small nuclear RNAs, U1, U2, U4, U5 and U6, each under 200 nucleotides and each complexed with at least seven proteins to form an snRNP, together with several hundred additional proteins. What is unusual is that the RNA does the work rather than the protein. The snRNAs recognize the splice junctions and the branch point by base-pairing with the pre-mRNA, and they also form the active site that catalyses the chemistry, with the proteins there to position them correctly. This is one of the places where the chapter's final section is foreshadowed, because an RNA-catalysed reaction sitting at the centre of eukaryotic gene expression is evidence about what the earliest cells were doing.
Tags: splicing, catalysis, core

---

Q+: Walk through the order in which the spliceosome assembles.
![The stepwise spliceosome cycle from U1 binding the 5' splice site through U2 displacing BBP, entry of the U4/U6+U5 triple snRNP, active site formation, lariat formation and release of the spliced RNA](assets/img/fig-6-29.png)
A: U1 snRNP base-pairs with the 5′ splice junction, while BBP, the branch-point binding protein, recognizes the branch point and binds cooperatively with U2AF, which recognizes the polypyrimidine tract and the 3′ junction. U2 snRNP then displaces BBP and U2AF and base-pairs with the branch point itself. The U4/U6 plus U5 triple snRNP enters, and rearrangements break the U4/U6 base pairs so that U6 can displace U1 at the 5′ splice site, ejecting U4. The NTC/NTR protein complex is added, which positions the snRNPs to form the active site and brings the branch point next to the 5′ splice site. The lariat forms, further rearrangements bring the two exons into the active site, and the spliced RNA is released. Nearly every step consumes ATP.
Tags: splicing, machines

---

Q+: There is a disagreement in the field about how the spliceosome exists between reactions. What is it?
A: Whether it is assembled fresh or is standing by. Studied in vitro, a few components assemble on the pre-mRNA and then, as the reaction proceeds, new components enter and spent ones are jettisoned, which is the stepwise picture the figure draws. Many scientists believe that inside the cell the spliceosome is instead a preexisting loose assembly of all the components, which captures, splices and releases RNA as a coordinated unit and rearranges itself extensively for each splice. The distinction matters for how you picture the timing, since a preassembled machine can act far faster on an emerging transcript than one that has to be built from parts each time.
Tags: splicing, machines

---

Q: Splicing costs eight ATP, five RNAs and more than a hundred proteins per intron removed. Is any of that needed for the chemistry?
A: No, and that is the striking part. The two transesterifications neither consume nor release a phosphodiester bond, so ATP hydrolysis is not required for the splicing reaction itself. Three features make the process look grossly inefficient: the enormous parts list, the fact that the catalytic site must be assembled from scratch on every pre-mRNA through a multistep process, and that many genes need more than twenty splices for one mRNA. The chapter's explanation is partly historical, suggesting splicing evolved from a simpler purely RNA-based process and accumulated parts through what some evolutionary biologists call runaway bureaucracies, accruing components that become required without necessarily making the process better.
Tags: splicing, evolution, core

---

Q+: What do all those ATP hydrolyses actually buy, then?
![The RNA rearrangement that forms the spliceosome active site, drawn before and after, with the real cryo-EM structure of the RNA catalytic core holding two magnesium ions](assets/img/fig-6-30.png)
A: Directionality and accuracy. The hydrolysis steps keep the reaction from stalling or running backwards, and most of the ATP-hydrolysing proteins use the energy to break existing RNA-RNA interactions so new ones can form. Those rearrangements let the splicing signals be examined more than once: U1 first recognizes the 5′ splice site by base-pairing and is later replaced by U6 at the same site, and the branch point is read first by BBP and then again by U2. The spliceosome therefore checks and rechecks its signals before the active site forms. The active site itself is built by U2 and U6 and grasps the two magnesium ions that do the chemistry, and both catalytic steps happen in that same site, the second being almost the reverse of the first.
Tags: splicing, fidelity, catalysis

---

Q+: What is **kinetic proofreading**, and how does it apply here?
A: It is accuracy bought with a time delay. An incorrect base-pairing interaction is weaker than a correct one, so it dissociates faster. Each ATP-mediated rearrangement of the spliceosome takes a finite time, and during that window an off-target interaction will often fall apart while a correct one persists, giving the correct interaction repeated chances to form. Nothing inspects the pairing; the delay does the discrimination on its own. The principle is used throughout biology, and the chapter has already invoked it for the initial selection of nucleotides by DNA polymerase and will return to it in detail for the ribosome. Holding it as one idea rather than three separate mechanisms is most of the value.
Tags: fidelity, proofreading, splicing

---

Q: After the chemistry is done, what is left behind on the mRNA and what happens to the machinery?
A: The snRNPs remain bound to the excised lariat, and getting them off the lariat and off each other takes another series of ATP-driven RNA-RNA rearrangements that return the snRNAs to their starting configuration so they can be used again. On the mRNA, the spliceosome directs a set of proteins to bind near the position the intron used to occupy: the **exon junction complex**, or EJC. Its significance is that it is a physical mark of a successful splicing event left on the message, and the cell reads that mark later to decide the mRNA's fate, which is how nonsense-mediated decay knows where the introns were.
Tags: splicing, rna-processing

---

Q: Introns vary from tens to more than 100,000 nucleotides. What stops the machinery getting lost?
![Size distributions of exons and of introns in the human, worm and fly genomes, with exon length far more uniform](assets/img/fig-6-31.png)
A: Two strategies on top of the spliceosome's own fidelity mechanisms. The first is a consequence of splicing being coupled to transcription: components that stimulate spliceosome formation are carried on the polymerase tail and handed to the RNA as it emerges, so the snRNPs that assemble at a 5′ splice site are initially offered only the single 3′ splice site that emerges next, because the sites further downstream do not exist yet. That ordering is what prevents inappropriate exon skipping. The second is **exon definition**, which exploits the fact visible in the figure: exon length is far more uniform than intron length, averaging about 150 nucleotide pairs across a wide range of eukaryotes. So the machinery hunts for the regularly sized exons rather than trying to measure the wildly variable introns.
Tags: splicing, fidelity, human-genome

---

Q+: What are the two errors that all of this machinery exists to prevent?
![Exon skipping, where a 5' splice site pairs with the wrong 3' site and an exon is lost, and cryptic splice-site selection](assets/img/fig-6-32.png)
A: **Exon skipping**, where a 5′ splice site is joined to a 3′ site further downstream than the correct one, so an entire exon is left out of the mRNA; and **cryptic splice-site selection**, where the spliceosome uses a sequence that closely resembles a real splicing signal but is not one. Both follow directly from the weakness of the signals: only two nucleotides of an intron are invariant, so sequences that look like splice sites are common by chance, and with introns running to more than 100,000 nucleotides there are a great many wrong partners available for any given site. These are also exactly the two outcomes seen when a mutation destroys a real splice site, which is what makes the disease cases in β-thalassemia diagnostic of how the machinery normally chooses.
Tags: splicing, fidelity

---

Q+: How is exon definition actually carried out?
![SR proteins bound along each exon of a pre-mRNA guiding snRNPs to the intron-exon boundaries, beginning at the cap-binding complex, with hnRNPs on the introns](assets/img/fig-6-34.png)
A: By marking the exons with proteins. As RNA synthesis proceeds, SR proteins, named for a domain rich in serines and arginines, assemble on exon sequences and mark off each 3′ and 5′ splice site, starting from the cap-binding complex at the 5′ end. They then recruit U1 snRNP to mark one exon boundary and U2AF, with BBP, to specify the other. Some SR proteins bind tightly to specific sequences called **splicing enhancers** that are preferentially found in exons, and there is a neat evolutionary point attached: because most amino acids are specified by several codons, a splicing enhancer can evolve inside coding sequence without changing the protein. A complementary set of proteins, the hnRNPs, is proposed to associate preferentially with introns, helping the spliceosome tell the two apart from both directions.
Tags: splicing, regulatory-dna

---

Q+: Does that mean introns are removed in the order they appear along the transcript?
![Electron micrograph of a heavily transcribed Drosophila gene showing splicing happening on transcripts still attached to the DNA](assets/img/fig-6-33.png)
A: No. Marking of boundaries and assembly of the spliceosome both begin while the RNA is still being elongated, which the micrograph captures directly, but the actual chemistry of splicing can be delayed. So intron sequences are not necessarily removed in the order in which they occur along the chain. This is worth keeping straight because the coupling argument above is about which splice sites are *available* when a decision is made, not about the order in which the cutting happens.
Tags: splicing, transcription

---

Q: A point mutation destroys a splice site. What usually happens?
![The normal three-exon β-globin transcript, then a mutation causing exon skipping, one activating a cryptic splice site, and one creating a new splice site that inserts an extra exon](assets/img/fig-6-35.png)
A: Not a failure to splice, but a different splice. The machinery has evolved to pick the best available pattern of junctions, so if the optimal one is damaged it seeks out the next best. Most commonly an exon is simply skipped, because a normal splice site left without a partner pairs with the next one along. Alternatively a cryptic splice site, a sequence that closely resembles a real signal, becomes the default choice. A mutation can also create a new splice site where none existed, causing an extra exon to be incorporated. The figure works through all three as they occur in β-thalassemia, a severe anaemia caused by aberrant haemoglobin synthesis.
Tags: splicing, medicine, human-genome

---

Q+: How much human disease does that plasticity account for?
A: A substantial share. It has been estimated that of the many point mutations causing inherited human disease, 10% produce aberrant splicing of the gene containing the mutation. Beyond β-thalassemia, aberrant splicing plays an important part in cystic fibrosis, frontotemporal dementia, Parkinson's disease, retinitis pigmentosa, spinal muscular atrophy, myotonic dystrophy, premature aging and cancer. The same flexibility has an upside on evolutionary timescales, since changes in splicing pattern caused by random mutation have been important in the evolution of genes and organisms. The plasticity that lets a gene acquire a new protein product is the plasticity that lets a single nucleotide change ruin one.
Tags: splicing, medicine, evolution

---

Q: What is **alternative splicing**, and how much of the human genome really does it?
![The rat α-tropomyosin gene spliced in several different ways to give striated muscle, smooth muscle, fibroblast and brain mRNAs](assets/img/fig-6-27.png)
A: Splicing the transcript of one gene in more than one way, so a single gene produces a set of different but related proteins. The α-tropomyosin gene is the worked example, giving distinct mRNAs in striated muscle, smooth muscle, fibroblasts and brain, with some patterns specific to particular cell types. On the frequency, the chapter is deliberately sceptical: it has been proposed that 95% of human gene transcripts are spliced in more than one way, but this is almost certainly an overestimate, because many of the detectable splicing products are the results of splicing errors and do not produce functional proteins. Being able to detect a transcript is not evidence that the cell means to make it, which is the same argument the book used against ENCODE in chapter 4.
Tags: splicing, regulation, human-genome

---

Q+: Is alternative splicing something the cell controls, or something that just happens?
A: Both, and the distinction is worth having. Some examples are constitutive, meaning the alternatively spliced mRNAs are produced continually by cells throughout the organism, so the gene simply yields a fixed mixture of products. In many other cases the cell regulates the splicing pattern, so different forms of the protein are made at different times and in different tissues, which is what the tropomyosin example shows. The reason regulation is possible at all is the plasticity described above: a process that reliably picks the best of several competing patterns can be redirected by anything that changes which pattern looks best, which is how regulatory proteins act on it.
Tags: splicing, regulation

---

Q: Why does splicing use a lariat and RNA catalysis, rather than simply cutting at both junctions and rejoining?
A: Because of where it came from rather than what would be simplest to design. The chapter's answer is evolutionary: early cells are thought to have used RNA as their major catalyst and to have stored genetic information in RNA, and RNA-catalysed splicing presumably had a critical role in them. The evidence that survives is self-splicing introns, intron sequences whose removal happens with no proteins and no other RNA molecules involved, still found in the nuclear rRNA genes of the ciliate *Tetrahymena*, in a few bacteriophage T4 genes, and in some mitochondrial and chloroplast genes. Such an intron folds into a specific three-dimensional structure that brings the junctions together and catalyses the two transesterifications itself, and you can demonstrate it by incubating pure RNA in a test tube and watching it splice. Because the chemistry and the active-site structure of some self-splicing RNAs closely resemble the spliceosome's, the elaborate modern machine looks like an overgrown version of the ancient reaction.
Tags: splicing, origins, evolution

---

Q: How is the 3′ end of a eukaryotic mRNA made, given that it is not simply where the polymerase stopped?
![The AAUAAA hexamer, the CA cleavage site and the GU-rich element downstream, the signals that direct cleavage and polyadenylation](assets/img/fig-6-36.png)
A: By cutting the transcript at a position specified by signals encoded in the DNA, which are recognized as RNA once transcribed. Three elements matter: the hexamer AAUAAA, bound by CPSF, cleavage and polyadenylation specificity factor; a CA sequence at the cleavage site itself, bound by a third factor; and a GU-rich or U-rich element beyond the cleavage site, bound by CstF, cleavage stimulation factor. CPSF and CstF both travel on the polymerase tail and are handed to the RNA as it emerges, as the capping and splicing components are. Once they bind, more proteins assemble to cleave the RNA, which releases it from the polymerase and finishes the 3′ end. As with every consensus in this chapter, the sequences shown are optimal ones and real signals vary.
Tags: rna-processing, transcription

---

Q+: Where does the poly-A tail come from, and what sets its length?
![RNA polymerase transcribing past the poly-A signal, with CPSF and CstF binding, cleavage of the RNA, and poly-A polymerase adding adenines while poly-A-binding proteins coat the tail](assets/img/fig-6-37.png)
A: From poly-A polymerase, PAP, which adds roughly 200 A nucleotides one at a time to the 3′ end created by the cleavage, using ATP as precursor and making the same 5′-to-3′ bonds as ordinary RNA synthesis. The difference from every other polymerase in the chapter is that PAP needs no template, so the poly-A tail is not encoded in the genome anywhere. Length is set by poly-A-binding proteins, which assemble onto the tail as it grows and somehow limit it, by a mechanism the chapter admits is poorly understood. This is worth noticing as a counting problem the cell solves without a template, which is unusual.
Tags: rna-processing, enzymes

---

Q+: The polymerase keeps transcribing after the RNA has been cut off. What eventually stops it?
A: Two things, and the second is the elegant one. First, recruiting the many 3′-end processing proteins, while some are still attached to the polymerase tail, causes a conformational change that slows the polymerase and reduces its processivity. Second, once cleavage has happened, the RNA still emerging from the polymerase has no 5′ cap, so it is unprotected and is rapidly chewed up by a 5′-to-3′ exonuclease. That exonuclease runs along the RNA faster than the polymerase is moving, and when it catches up it causes the polymerase to let go of the template and terminate. So termination is enforced by a degrading enzyme chasing the polymerase down, rather than by a stop signal in the DNA, and the polymerase can run on for hundreds of nucleotides before it is caught.
Tags: transcription, rna-processing

---

Q+: What happens when a gene has more than one cleavage and polyadenylation site?
A: It produces a range of mRNAs differing in their 3′ ends, and the cell can regulate which site is used. That makes alternative 3′-end processing a second way to get different proteins from one gene, closely analogous to alternative splicing. It matters more than it might appear, because the 3′ untranslated region is where much of the regulatory information controlling an mRNA's stability, localization and translation sits, so two messages with identical coding sequence but different 3′ ends can behave quite differently in the cytosol.
Tags: rna-processing, regulation

---

Q: Most of what RNA polymerase II makes is useless or dangerous. How does the cell tell a finished mRNA from debris?
A: By the proteins bound to it, present and absent. Acquisition of the cap-binding complex, exon junction complexes and poly-A-binding proteins marks the successful completion of capping, splicing and polyadenylation respectively, so a properly finished mRNA carries a particular constellation of proteins. It is equally identified by what it lacks: the long-term presence of an snRNP protein would signify incomplete or aberrant splicing. Only when the proteins collectively signify success is the mRNA exported. Everything else, meaning excised introns, broken RNAs, aberrantly processed pre-mRNAs and accidentally transcribed portions of the genome, is retained in the nucleus and degraded. The default fate of RNA in the nucleus is destruction, and only correctly marked molecules are spared.
Tags: rna-processing, quality-control, core

---

Q+: What does the degrading?
![The RNA exosome as a ring-shaped complex with a central channel, shown from the side and end-on with its nine different subunits](assets/img/fig-6-38.png)
A: The **RNA exosome**, a large complex whose interior is rich in exonucleases. RNA is fed into one end, passes through a central channel formed by nine different protein subunits, and is degraded by RNases at the other end, which means a molecule must be threaded through to be destroyed rather than being attacked from outside. Eukaryotic cells have two versions sharing that channel and differing in their other subunits: the nuclear exosome degrades aberrant RNAs before they can be exported and also trims certain RNAs, the rRNAs among them, to their final form; the cytoplasmic exosome degrades mRNAs in the cytosol and is therefore what sets the lifetime of each message.
Tags: quality-control, machines, rna-processing

---

Q: What are **hnRNPs**, and what do they do to a pre-mRNA?
A: Heterogeneous nuclear ribonucleoproteins, the most abundant of all the proteins that assemble on pre-mRNAs as they emerge from the polymerase, with about 30 different ones in humans. They have at least two jobs. Some unwind the hairpin helices that form in the RNA, so that splicing signals and other sequences can be read more easily, which matters because RNA folds spontaneously and a signal buried in a stem is invisible. Others preferentially package the RNA of the very long introns found in complex organisms, which may help distinguish the debris left over from processing from the mature mRNA. That packaging role is the same one invoked earlier for helping the spliceosome tell introns from exons.
Tags: rna-processing, splicing

---

Q: Trace an mRNA's journey out of the nucleus, with the timings.
![The Balbiani Ring mRNA being synthesized and packaged by nuclear proteins into a curved fiber, then entering the nuclear pore complex 5' cap first](assets/img/fig-6-39.png)
A: A finished mRNA is guided through a nuclear pore complex, an aqueous channel connecting nucleoplasm and cytosol. Molecules under about 40,000 daltons or 5 nm diffuse through freely, but an mRNA with its proteins is far too large, so it must be actively transported by a nuclear transport receptor, which in many organisms is loaded onto the mRNA in concert with 3′ cleavage and polyadenylation. Following single molecules by fluorescent labelling gives the timings: a typical mRNA released from its transcription site spends several minutes diffusing randomly in the nucleus before encountering a pore, hovers at the entrance for several seconds while processing is presumably completed, and then passes through very rapidly. How some very large complexes cross in about 10 milliseconds remains a mystery.
Tags: rna-processing, organelles

---

Q+: What does the Balbiani Ring mRNA show that fluorescence cannot?
A: The physical remodelling, because it is unusually large and abundant enough to be watched in the electron microscope. As the gene is transcribed, the new pre-mRNA is packaged by proteins including hnRNPs, SR proteins and spliceosome components. The protein-RNA complex then goes through a series of structural transitions, probably corresponding to processing events, ending as a curved fiber. That fiber diffuses through the nucleoplasm, enters the pore with its 5′ cap first, and undergoes further structural transitions as it passes through. The general conclusion is that these complexes are dynamic structures that gain and lose specific proteins throughout synthesis, processing and export, rather than a message with a fixed set of passengers.
Tags: rna-processing, organelles

---

Q+: Which proteins travel with the mRNA into the cytosol, and does it matter?
![An export-ready mRNA passing through the nuclear pore, with some proteins travelling with it, others staying behind, and cytosolic versions replacing the nuclear ones](assets/img/fig-6-40.png)
A: Some go and some stay. The export receptor accompanies the mRNA and then dissociates in the cytosol and is re-imported for reuse. Several nuclear proteins are lost and replaced by cytosolic counterparts, including the proteins that bind the 5′ cap, and in humans there are different poly-A-binding proteins in the nucleus and cytosol, though some species manage with only one. It matters a great deal, because proteins deposited on the mRNA while it is still in the nucleus can determine the message's stability in the cytosol, how efficiently it is translated and where in the cell it ends up. Decisions about an mRNA's future are therefore made before it has left the compartment where it was born.
Tags: rna-processing, regulation

---

Q: Why does a cell need multiple copies of its rRNA genes when one copy suffices for most proteins?
![Electron micrograph of tandemly arranged rRNA genes, showing alternating transcribed genes and untranscribed spacers](assets/img/fig-6-41.png)
A: Because rRNA is a final product and cannot be amplified by translation. An abundant protein can be made from a single-copy gene, since each mRNA is translated many times over, giving an enormous amplification. The RNA components of the ribosome get no such multiplier: a growing mammalian cell must synthesize about 10 million copies of each type of rRNA per cell generation to build its 10 million ribosomes, and the only way to reach that output is to have many copies of the gene. Even *E. coli* needs seven copies. Human cells have about 200 rRNA gene copies per haploid genome in small clusters on five different chromosomes, and *Xenopus* has about 600 in a single cluster on one chromosome. The micrograph shows the arrangement directly, as transcribed genes alternating with untranscribed spacers.
Tags: transcription, ribosome, human-genome

---

Q: How are the four eukaryotic rRNAs produced?
![The 35S precursor rRNA of 13,000 nucleotides being chemically modified, then cleaved and trimmed into 18S, 5.8S and 28S rRNAs with nearly half the sequence discarded](assets/img/fig-6-42.png)
A: Three of the four, the 18S, 5.8S and 28S, are cut out of one large precursor of about 13,000 nucleotides made by RNA polymerase I, which is dedicated to rRNA and whose lack of a C-terminal tail explains why its transcripts are neither capped nor polyadenylated. The fourth, 5S, comes from a separate gene cluster transcribed by polymerase III and needs no chemical modification. What is striking about the processing is the waste: nearly half the nucleotides of the precursor are discarded and degraded in the nucleus by the exosome. Processing begins while the precursor is still being transcribed, and the nascent transcripts are already being assembled with ribosomal proteins, which is what the particles at the ends of the transcripts in the earlier micrograph were.
Tags: ribosome, rna-processing

---

Q+: What chemical modifications does the precursor rRNA receive, and how is each one aimed at the right nucleotide?
![Pseudouridine and a 2'-O-methylated nucleotide, and a snoRNP base-pairing to a precursor rRNA to position the modifying enzyme](assets/img/fig-6-43.png)
A: About 100 methylations of 2′-OH positions on the sugars and about 100 isomerizations of uridine to **pseudouridine**, in which the base is rotated so that it attaches to the sugar through a carbon rather than a nitrogen. Each one is placed at a specific position by a **guide RNA** that positions itself on the precursor by base-pairing and brings a modifying enzyme to the right spot. These guides are **snoRNAs**, small nucleolar RNAs, bound to proteins as snoRNPs that carry both the guide sequence and the enzyme. Other snoRNAs promote cleavage of the precursor, probably by causing conformational changes that expose sites to nucleases. The functions of the modifications are not understood in detail; they probably aid assembly and may subtly affect how finished ribosomes work.
Tags: ribosome, rna-processing

---

Q+: Where do snoRNA genes live?
A: Many are encoded in the introns of other genes, especially those encoding ribosomal proteins, and are produced by RNA polymerase II and then processed out of the excised intron sequences. That arrangement is worth pausing on, because it means an intron is not always simply discarded: the same transcript yields a ribosomal protein mRNA from its exons and a functional guide RNA from the piece cut out between them. It also couples production of the guides to production of the proteins they help install, since both come from transcribing one gene.
Tags: ribosome, splicing, genome-evolution

---

Q: What is the **nucleolus**, and what makes it unlike most organelles?
![Electron micrograph of a nucleolus in a human fibroblast showing the fibrillar center, dense fibrillar component and granular component](assets/img/fig-6-44.png)
A: It is the site where rRNAs are synthesized and processed and ribosomes are assembled, and it is the most obvious structure in a eukaryotic nucleus under the light microscope, scrutinized so heavily by early cytologists that an 1898 review could list some 700 references. What sets it apart is that it has no membrane. It is a huge biomolecular condensate holding the rRNA genes themselves, precursor and mature rRNAs, processing enzymes, snoRNPs, a large set of assembly factors including ATPases, GTPases, protein kinases and RNA helicases, ribosomal proteins and partly assembled ribosomes. Its assembly is thought to be driven by a phase transition, and the close but loose association of all these components gives it liquid-like properties.
Tags: organelles, condensates, ribosome

---

Q+: What is the direct evidence that the nucleolus behaves like a liquid?
![Time course of three frog oocyte nucleoli fusing with one another over about 1800 seconds](assets/img/fig-6-45.png)
A: Nucleoli fuse. In the experiment shown, nucleoli isolated from frog oocytes and observed under mineral oil are seen to run together over about half an hour, with one fusion joint eventually breaking while the other enlarges to complete the fusion. Two droplets coalescing into one larger, rounder droplet is what liquids do and what solid aggregates do not, so the time course is an argument about material state rather than a picture of a process the cell carries out. This is the same reasoning used for other membraneless compartments, and it is why the word condensate rather than particle is used for them.
Tags: condensates, organelles

---

Q+: How does the nucleolus form, and why does its size vary so much?
![Nucleolus formation after mitosis from three distinct condensates, with rDNA loci from different chromosomes brought together into one assembly line](assets/img/fig-6-46.png)
A: The rRNA genes themselves nucleate it. In a diploid human cell they lie in 10 clusters near the tips of five chromosome pairs, and during interphase those 10 chromosomes contribute DNA loops into the nucleolus. In M phase, when chromosomes condense, the nucleolus fragments and disappears; at telophase the tips of the 10 chromosomes each start a small nucleolus, and these progressively coalesce into one. Size tracks output, as you would expect of a factory: it varies greatly between cell types and can change within one cell, occupying nearly 25% of the total nuclear volume in cells making unusually large amounts of protein. The three zones visible in the electron micrograph are proposed to be three distinct condensates that pass material outward in sequence, like an assembly line.
Tags: organelles, condensates, ribosome

---

Q: How complicated is building a ribosome, and how does that compare with building a spliceosome?
![The nucleolus taking in rRNA gene transcripts and ribosomal proteins from the cytoplasm, processing and assembling immature subunits that are exported through nuclear pores](assets/img/fig-6-49.png)
A: Beyond the proteins and RNAs of the finished particle, assembly needs more than 200 further proteins, including chaperones, ATP-dependent RNA helicases, nucleases and many RNA-binding proteins, plus a number of small RNAs such as the snoRNA guides. In many respects it resembles spliceosome formation, with many ATP-driven RNA structural rearrangements as assembly proceeds. The key difference is economic: a spliceosome must be built and taken apart for every single splice, while a ribosome, once made, is stable and used over and over. In human cells each ribosome is estimated to make about 3000 individual proteins in its lifetime, which is what justifies spending 200 assembly factors on it.
Tags: ribosome, machines, assembly

---

Q+: The subunits are assembled in the nucleolus but are not finished there. Where do they mature?
A: In the cytoplasm. The 35S precursor is packaged into a large ribonucleoprotein particle together with ribosomal proteins imported from the cytoplasm, and while it remains in the nucleolus components are added and others discarded as it is processed into immature large and small subunits. Each subunit then reaches its final functional form only after being individually transported out through the nuclear pores. Keeping the last maturation step outside the nucleus has an obvious safeguard built into it: a subunit that cannot function until it has been exported cannot start translating anything in the compartment where unprocessed transcripts are still floating about.
Tags: ribosome, organelles, quality-control

---

Q+: The nucleolus is not only about ribosomes. What else is assembled there?
A: Several other ribonucleoprotein complexes. The U6 snRNP, one RNA and seven proteins and a key component of the spliceosome, has its RNA chemically modified by snoRNAs and is assembled there. Telomerase and the signal-recognition particle are both put together there too. And the tRNAs that carry amino acids for protein synthesis are processed there, their genes being clustered in the nucleolus as the rRNA genes are. So the nucleolus is best held as a general factory where noncoding RNAs are transcribed, processed and assembled with proteins into ribonucleoprotein complexes, with ribosome production as its largest product line rather than its only one.
Tags: organelles, ribosome, trna

---

Q: The nucleolus {{fragments and disappears}} during M phase, and re-forms in {{telophase}} as the tips of the {{10}} chromosomes carrying rRNA gene clusters each nucleate a small nucleolus, which then {{coalesce}} into one.
![Changes in the appearance of the nucleolus through the cell cycle, dispersing at mitosis and reassembling afterwards](assets/img/fig-6-47.png)
A: The disappearance is not destruction of a compartment so much as the removal of what holds it together: when chromosomes condense, the rDNA loops that nucleate the nucleolus are packed away and transcription of the rRNA genes shuts down, so the condensate has nothing to organize around. Reassembly is directly observable in cultured human fibroblasts, where the many small nucleoli formed after mitosis grow and run together into the single large one typical of interphase cells, which is the same coalescence behaviour that identifies the nucleolus as a liquid-like condensate rather than a structure with a fixed architecture.
![Light micrographs of human fibroblasts showing stages of nucleolar fusion after mitosis](assets/img/fig-6-48.png)
Tags: organelles, condensates, ribosome

---

Q: What are **Cajal bodies** and **interchromatin granule clusters**, and what are they for?
![Fluorescence image of a nucleus with fibrillarin marking nucleoli and Cajal bodies, coilin marking Cajal bodies, and antibodies against a splicing protein marking interchromatin granule clusters](assets/img/fig-6-50.png)
A: Two further membraneless nuclear compartments. Cajal bodies, named for the scientist who described them in 1906, are where snRNPs and snoRNPs undergo final maturation and where snRNPs are recycled and reset after the rearrangements of splicing. Interchromatin granule clusters, also called speckles, are stockpiles of fully mature snRNPs and other processing components ready for use. Both are highly dynamic according to the needs of the cell. Working out their exact functions has been difficult, partly because their appearance changes dramatically through the cell cycle and with the environment, and partly because disrupting a given nuclear body often has little effect on viability.
Tags: organelles, condensates, splicing

---

Q+: If you can delete a Cajal body without hurting the cell, what is it doing?
A: Concentrating components to speed up assembly, which only becomes essential when speed is essential. Assembly of the U4/U6 snRNP is estimated to happen 10 times faster in a Cajal body than it would if the same number of components were dispersed through the nucleus. That makes Cajal bodies dispensable in many cell types but absolutely required where cells must proliferate rapidly, as in early vertebrate development, where protein synthesis depends on splicing and delays can be lethal. This is the general logic of condensates in this chapter: they do not enable new chemistry, they raise local concentrations, so their absence shows up as a rate problem rather than as a failure.
Tags: condensates, splicing, organelles

---

Q: Splicing needs many components, so does it happen in a dedicated compartment?
![A model of an mRNA production factory, with components carried on one polymerase tail and then many tails brought together into a condensate, and an image of transcription and replication factories in a cell](assets/img/fig-6-51.png)
A: No, and it cannot, because spliceosome assembly is co-transcriptional and so must happen wherever the genes are, at many locations along the chromosomes. What the cell does instead is build factories at those locations. A typical mammalian cell may express on the order of 15,000 genes, yet transcription and splicing take place at only several thousand sites, each about 100 nm across and estimated to hold on average about 10 RNA polymerase II molecules along with many other proteins. These are condensates created by bringing many polymerase tails together, concentrating the components each tail was already carrying. A consequence worth holding: initial rounds of transcription and processing at a new site are thought to be slow and perhaps error-prone because key components are limiting, and only once a factory is fully assembled does production become rapid and accurate.
Tags: transcription, condensates, splicing

---

Q: Why is translation a fundamentally harder kind of information transfer than transcription?
A: Because the symbols change. DNA and RNA are chemically and structurally similar, so DNA can act as a direct template for RNA through complementary base-pairing, and the book's analogy is a handwritten message being retyped: the language and the form do not change and the symbols are closely related. Converting RNA into protein is a translation into another language with entirely different symbols, and there is no chemistry by which a nucleotide recognizes an amino acid. There is also an arithmetic problem: 4 nucleotides cannot map one-to-one onto 20 amino acids. The mapping therefore has to be carried by an arbitrary set of rules, the genetic code, implemented by adaptor molecules rather than by direct chemical complementarity.
Tags: translation, genetic-code, core

---

Q: The mRNA is read in groups of three. Why three, and what follows from that choice?
![The genetic code laid out as 64 codons with their amino acids, showing three stop codons and AUG as both start and methionine](assets/img/fig-6-52.png)
A: Because two would not be enough and three is the smallest that is. There are $4 \times 4 = 16$ possible pairs, short of the 20 amino acids needed, while $4 \times 4 \times 4 = 64$ triplets is more than enough. Since only 20 amino acids are commonly used, either some triplets are never used or the code is redundant, and redundancy is the answer. Each group of three is a **codon**, specifying one amino acid or a stop. Three codons specify no amino acid and act as termination signals, and AUG does double duty as both the initiation codon and the codon for methionine. There are regularities worth seeing in the table rather than memorizing it: codons for the same amino acid tend to share their first and second nucleotides and differ at the third.
Tags: genetic-code, translation, core

---

Q+: If the code is read in threes, what stops the ribosome reading it in the wrong threes?
![The same nucleotide sequence read in three different reading frames, giving three completely different amino acid sequences](assets/img/fig-6-53.png)
A: Nothing intrinsic to the sequence, which is the problem. An RNA sequence can in principle be translated in any of three reading frames depending on where decoding begins, and the three give completely different amino acid sequences, only one of which is the real message. The frame is set by a punctuation signal at the beginning of the message that fixes where translation starts, and from then on the frame is maintained mechanically by the ribosome moving exactly three nucleotides at a time. This is why a single-nucleotide insertion or deletion in coding sequence is so destructive: it does not corrupt one codon, it shifts every codon downstream into a different frame.
Tags: genetic-code, translation, core

---

Q: What is a **tRNA**, and which two parts of it do the work?
![A phenylalanine tRNA drawn as a cloverleaf with its base-paired stems, as the folded L-shaped structure from x-ray diffraction, and as its linear sequence with modified bases marked](assets/img/fig-6-54.png)
A: A small RNA of about 80 nucleotides that acts as an adaptor, recognizing a codon at one end and carrying an amino acid at the other. Four short segments of the folded molecule are double-helical, which drawn schematically gives the cloverleaf, and the cloverleaf folds further into a compact L shape held together by additional hydrogen bonds between different regions. The two working parts are the unpaired regions at either end of the L. One is the **anticodon**, three consecutive nucleotides that pair with the complementary codon in mRNA. The other is a short single-stranded stretch at the 3′ end, where the matching amino acid is attached. Being at opposite ends of the L means the codon can be read in one place while the amino acid is delivered somewhere else, which is exactly what the ribosome needs.
Tags: trna, translation, structure

---

Q: The code is redundant, so does each codon get its own tRNA?
![The wobble rules, listing which anticodon bases can pair with each codon base at the third position, separately for bacteria and eukaryotes](assets/img/fig-6-55.png)
A: Not quite, and both possible solutions are used. Some amino acids do have more than one tRNA, and some tRNAs are built so that they need accurate base-pairing only at the first two codon positions and can tolerate a mismatch, or **wobble**, at the third. That is why so many alternative codons for one amino acid differ only in the third nucleotide: the redundancy in the table and the flexibility in the pairing are the same fact seen from two sides. Wobble lets bacteria cover all 61 amino-acid-specifying codons with as few as 31 kinds of tRNA. Pairing at positions 1 and 2 remains strict, with only conventional base pairs permitted.
Tags: trna, genetic-code, translation

---

Q+: Inosine appears in the wobble position. Where does it come from and what does it buy?
A: It is made by deamination of adenosine after the tRNA has been synthesized, so it is a modification rather than something the code provides for. Its value is breadth: an inosine at the wobble position lets one tRNA recognize any of three different codons in bacteria, or either of two in eukaryotes. Nonstandard base pairs, inosine's included, are generally weaker than conventional pairs, which is tolerable at the third position where a firm grip is not needed but would be dangerous at the first two. The bacteria-versus-eukaryote difference in the wobble rules presumably comes from subtle structural differences between their ribosomes rather than from anything about the tRNAs themselves.
Tags: trna, genetic-code

---

Q+: How many tRNA genes does a human have?
A: Nearly 500, encoding tRNAs with 48 different anticodons, against the 31 kinds that suffice for a bacterium. The gap between 500 genes and 48 anticodons is the interesting part: most of that gene count is redundancy of sequence rather than of decoding capacity, which fits tRNAs being final products that cannot be amplified by translation, exactly as the rRNA genes are. The exact number of tRNA kinds differs considerably from one species to the next, so neither 31 nor 48 should be carried as a universal.
Tags: trna, human-genome

---

Q: What has to happen to a tRNA before it may leave the nucleus?
![A four-subunit tRNA-splicing endonuclease docked to a precursor tRNA with the intron marked](assets/img/fig-6-56.png)
A: Trimming, sometimes splicing, and extensive chemical modification. Eukaryotic tRNAs are made by RNA polymerase III as larger precursors that are then trimmed, and some precursors in both bacteria and eukaryotes contain introns that must be removed. That splicing is chemically different from pre-mRNA splicing: instead of a lariat, tRNA splicing uses a cut-and-paste mechanism catalysed by proteins, an endonuclease removing the intron and a multifunctional ligase joining the halves. Both trimming and splicing require the precursor to be correctly folded into its cloverleaf, which turns them into quality-control steps, since a misfolded precursor is not processed properly and is degraded by the nuclear exosome instead.
Tags: trna, rna-processing, quality-control

---

Q+: How heavily modified is a mature tRNA, and what are the modifications for?
![Unusual tRNA nucleotides including N,N-dimethyl G, dihydrouridine, 4-thiouridine and inosine](assets/img/fig-6-57.png)
A: Nearly 1 nucleotide in 10 of a mature tRNA is an altered version of a standard G, U, C or A, and more than 50 different types of modification are known, all made after the nucleotide has been incorporated into the chain. They serve two distinguishable purposes. Some sit within the anticodon, most notably inosine, and change its base-pairing behaviour so the tRNA recognizes the appropriate codons. Others affect the accuracy with which the tRNA is charged with the correct amino acid. So the modifications act on both halves of the adaptor's job, reading the message and carrying the right cargo.
Tags: trna, rna-processing

---

Q: How is an amino acid attached to its tRNA, and why does the reaction cost ATP?
![Amino acid activation in two steps, first forming an adenylated amino acid from ATP, then transferring the activated carboxyl to the 3' end of the tRNA](assets/img/fig-6-58.png)
A: By an aminoacyl-tRNA synthetase, in two steps. The amino acid's carboxyl group is first attached directly to AMP, forming an adenylated amino acid, a linkage that would be unfavourable on its own and is driven by hydrolysis of the ATP that donates the AMP. Then, without leaving the enzyme, the AMP-linked carboxyl is transferred to a hydroxyl on the sugar at the 3′ end of the tRNA. The point of spending the ATP is not to make the attachment but to store energy in it: the result is a high-energy ester linkage, and that stored energy is what later drives formation of the peptide bond. An amino acid held this way is said to be **activated**.
Tags: translation, trna, enzymes

---

Q+: What exactly is the bond between the amino acid and the tRNA?
![The aminoacyl-tRNA linkage, with the amino acid's carboxyl group forming an ester bond to the ribose at the 3' end of the tRNA](assets/img/fig-6-59.png)
A: An ester bond between the carboxyl end of the amino acid and a hydroxyl on the ribose at the tRNA's 3′ end. Hydrolysis of that ester is accompanied by a large favourable free-energy change, which is what "activated" means when an amino acid is described that way, and it is the energy source for peptide bond formation later on. There are two major classes of synthetase distinguished by where they attach it: one links the amino acid directly to the 3′-OH of the ribose, the other links it first to the 2′-OH, after which a transesterification shifts it to the 3′ position. Either way the amino acid ends up in the same place, which is why the ribosome need not care which class charged the tRNA it receives.
Tags: translation, trna, thermodynamics

---

Q+: How many synthetases does a cell have?
A: Most cells have one for each amino acid, so 20 in all: one attaches glycine to every tRNA that reads a glycine codon, another does the same for alanine, and so on. Many bacteria manage with fewer than 20, and the trick they use is worth knowing because it looks like a mistake. A single synthetase places the same amino acid on two different types of tRNA, only one of which has a matching anticodon, and a second enzyme then chemically converts each incorrectly attached amino acid into the one that does correspond to the anticodon its tRNA displays. The charging is fixed after the fact rather than being got right first time.
Tags: translation, trna, enzymes

---

Q: The genetic code is said to be read by two adaptors acting in sequence. What are they, and what experiment established it?
![An aminoacyl-tRNA synthetase charging a tRNA with tryptophan, and the charged tRNA then base-pairing with the UGG codon on mRNA](assets/img/fig-6-60.png)
A: The first adaptor is the aminoacyl-tRNA synthetase, which couples a particular amino acid to its tRNA; the second is the tRNA itself, whose anticodon pairs with the codon. An error at either step puts the wrong amino acid into the chain. The experiment that proved the ribosome reads only the second adaptor was to take a cysteine already attached to its own tRNA and chemically convert it into alanine. When those hybrid molecules were used for protein synthesis in a cell-free system, alanine was inserted at every position where that cysteine tRNA was used. So the ribosome does not check the cargo, it reads the anticodon and accepts whatever is attached, which places the entire burden of matching amino acid to code on the synthetase.
Tags: translation, trna, genetic-code, core

---

Q+: Given that the ribosome does not check, how accurate is charging, and how is that accuracy achieved?
![Hydrolytic editing by an aminoacyl-tRNA synthetase compared with the exonucleolytic proofreading of DNA polymerase, both showing separate synthesis and editing sites](assets/img/fig-6-61.png)
A: About one mistake in 40,000 couplings, achieved in two steps because one is not enough. The correct amino acid has the highest affinity for the active-site pocket and is favoured over the other 19, and anything larger is simply excluded by size. But that cannot separate two similar amino acids such as isoleucine and valine, which differ by a single methyl group. So after the amino acid has been linked to AMP, the synthetase tries to force it into a second **editing pocket** whose dimensions exclude the correct amino acid while admitting closely related ones. Anything that fits in there is hydrolysed off, from the AMP or from the tRNA if the bond has already formed. The logic is a double sieve: the first site rejects anything too big, the second destroys anything small enough to fit where the right one cannot.
Tags: fidelity, proofreading, translation

---

Q+: The synthetase must also pick the right tRNA. How does it recognize one?
![A tRNA-Gln bound to its synthetase, with recognition nucleotides in the anticodon and the acceptor stem and the ATP used for coupling](assets/img/fig-6-62.png)
A: By extensive structural and chemical complementarity that lets it probe several features at once. Most synthetases directly read the anticodon, containing three adjacent nucleotide-binding pockets each complementary in shape and charge to one anticodon nucleotide, which is the arrangement you would design. For others the key determinant is the nucleotide sequence of the acceptor stem, the arm that will carry the amino acid, which is at the far end of the molecule from the anticodon. In most cases the synthetase reads nucleotides at several different positions, and reading more than one feature is what makes the assignment reliable.
Tags: translation, trna, structure

---

Q: Which end of a protein is made first, and what keeps the reaction energetically favourable?
![The stepwise addition of an amino acid to the C-terminal end of a growing chain, with the peptidyl-tRNA linkage regenerated on the newly added residue](assets/img/fig-6-63.png)
A: A protein is made from its N-terminal end to its C-terminal end, one amino acid at a time, with each peptide bond formed between the carboxyl group at the growing end and the free amino group of the incoming amino acid. What keeps it favourable is that the growing carboxyl end is always activated by covalent attachment to a tRNA, forming a **peptidyl-tRNA**. Each addition destroys that high-energy linkage and immediately re-creates an identical one on the amino acid just added. So every amino acid arrives carrying the activation energy for adding the *next* one rather than for its own addition, which is the polymer-end activation strategy used generally for polymer synthesis.
Tags: translation, thermodynamics, core

---

Q+: In that scheme, which molecule leaves the ribosome uncharged?
- [x] The tRNA that was holding the growing chain, which is freed from its peptidyl linkage
- [ ] The tRNA that has just arrived carrying the new amino acid
- [ ] Both tRNAs, since the peptide bond replaces both linkages
- [ ] Neither, because the chain stays attached to the first tRNA
A: The one that was holding the chain. The incoming aminoacyl-tRNA attacks with its free amino group, so the whole growing polypeptide is transferred onto the new amino acid, and the tRNA that had been carrying the chain is left with nothing and is released. The newly arrived tRNA is now the peptidyl-tRNA holding a chain one residue longer. This is why the reaction regenerates rather than consumes the activated linkage, and it is worth getting right because the intuitive picture, of the new amino acid being added onto a chain that stays put, has the transfer running the wrong way.
Tags: translation, core

---

Q: What is a ribosome made of, and how fast does it work?
![Electron micrograph of ribosomes in the cytoplasm of a eukaryotic cell, some free and some attached to endoplasmic reticulum membranes](assets/img/fig-6-64.png)
A: More than 50 different ribosomal proteins together with several ribosomal RNAs, giving a machine of several million daltons. A typical eukaryotic cell holds millions of them, some free in the cytosol and some attached to the endoplasmic reticulum. On rate, a eukaryotic ribosome adds about four amino acids per second and a bacterial one about 20, so an average-sized protein takes roughly a minute. The accuracy is about one mistake per 10,000 amino acids, which is the number to hold alongside the polymerase error rates: transcription errs about once in $10^4$ nucleotides, and translation about once in $10^4$ residues, so the two steps of expression are comparably sloppy and both far below replication.
Tags: ribosome, translation, core

---

Q+: How do bacterial and eukaryotic ribosomes compare?
![Bacterial 70S and eukaryotic 80S ribosomes broken down into their subunits, rRNAs and protein counts](assets/img/fig-6-65.png)
A: Same architecture, different sizes.

| | Bacterial (70S) | Eukaryotic (80S) |
| --- | --- | --- |
| Mass | 2500 kilodaltons | 4200 kilodaltons |
| Large subunit | 50S, with 23S and 5S rRNA, 34 proteins | 60S, with 28S, 5.8S and 5S rRNA, about 49 proteins |
| Small subunit | 30S, with 16S rRNA, 21 proteins | 40S, with 18S rRNA, about 33 proteins |

Both work the same way. The point the chapter makes about the extra eukaryotic nucleotides is worth keeping: the 18S and 28S rRNAs contain many nucleotides absent from their bacterial counterparts, but these are present as multiple insertions forming extra domains and leave the basic rRNA structure largely unchanged. The eukaryotic ribosome is the bacterial one with additions, not a redesign.
Tags: ribosome, translation, evolution

---

Q: What is the division of labour between the two ribosomal subunits?
A: The small subunit provides the framework on which tRNAs are accurately matched to the codons of the mRNA, and the large subunit catalyses formation of the peptide bonds. That split maps neatly onto the two things translation must do, reading and joining, and it explains why the accuracy machinery discussed later sits in the small subunit while the catalytic centre sits in the large one. When not synthesizing, the two subunits are separate; they join on an mRNA, usually near its 5′ end, to begin. The mRNA is then pulled through three nucleotides at a time, and at a stop codon the ribosome releases the finished protein and the subunits separate again, free to start another protein on the same or a different message.
Tags: ribosome, translation, core

---

Q: A ribosome has four RNA-binding sites. What are they?
![A bacterial ribosome with tRNAs bound in the E, P and A sites, shown from several angles and as the schematic used in later figures](assets/img/fig-6-66.png)
A: One for the mRNA and three for tRNAs, named **A**, **P** and **E** for aminoacyl-tRNA, peptidyl-tRNA and exit. A tRNA is held tightly at the A and P sites only if its anticodon base-pairs with a complementary codon on the mRNA threaded through the ribosome, wobble allowed, so occupancy of those sites is itself a test of the pairing. The figure shows all three sites filled at once for clarity, but during actual synthesis not more than two are thought to hold tRNAs at any moment. Getting the names in the right order matters for everything that follows, since the cycle runs A to P to E and the mRNA moves in the opposite sense through the machine.
Tags: ribosome, translation, core

---

Q+: Where does the mRNA itself run?
![The path of the mRNA threading through the small ribosomal subunit past the three tRNA-binding sites](assets/img/fig-6-67.png)
A: Through the small subunit, in a channel that carries it past the three tRNA sites so that the codon in the A site and the codon in the P site are adjacent on the message. That geometry is what makes the reading frame a physical property of the machine rather than something that has to be recomputed: as long as the mRNA advances by exactly three nucleotides per cycle and the tRNA sites stay where they are, the frame set at initiation is preserved to the end. It also explains why the small subunit is where codon-anticodon matching is assessed, since that is the subunit the message passes through.
Tags: ribosome, translation, structure

---

Q: Walk through the four-step cycle that adds one amino acid to a growing chain.
![The translation cycle drawn as four steps: aminoacyl-tRNA binding to the A site, peptide bond formation, large subunit translocation into hybrid states, and small subunit translocation carrying the mRNA three nucleotides](assets/img/fig-6-68.png)
A: Start with a peptidyl-tRNA in the P site holding the chain. In step 1 a tRNA carrying the next amino acid binds the A site by pairing with the codon there, so P and A now hold tRNAs on adjacent codons. In step 2 the carboxyl end of the chain is released from the P-site tRNA and joined to the free amino group on the A-site amino acid, forming the peptide bond, catalysed by the peptidyl transferase in the large subunit. In step 3 the large subunit moves relative to the mRNA held by the small subunit, shifting the acceptor stems of the two tRNAs into hybrid positions, P and E on the large subunit while they are still A and P on the small. In step 4 the small subunit and its mRNA move exactly three nucleotides, ejecting the spent tRNA from the E site and resetting the ribosome with an empty A site.
Tags: translation, ribosome, core

---

Q+: Why does translocation happen in two separate steps rather than one?
A: Because the two subunits move independently, and splitting the movement is what makes it directional. The large subunit shifts first, leaving the tRNAs in hybrid states that belong to different sites on the two subunits, and only then does the small subunit ratchet forward with the mRNA. Holding the tRNAs in hybrid positions between the two moves is what prevents the ribosome from simply sliding backwards, since at no point are both subunits free to move at once. It also explains why the reading frame survives: the three-nucleotide step is taken by the subunit the mRNA threads through, and the A and P sites are close enough that their tRNAs are forced to pair with adjacent codons.
Tags: translation, ribosome

---

Q: Two elongation factors cycle on and off the ribosome. What are they and what do they cost?
![The detailed translation cycle with EF-Tu delivering aminoacyl-tRNA and hydrolysing GTP at the first proofreading step, and EF-G driving translocation](assets/img/fig-6-69.png)
A: EF-Tu and EF-G in bacteria, called EF1 and EF2 in eukaryotes. Each enters and leaves once per cycle, hydrolysing GTP to GDP and changing conformation in the process. EF-Tu delivers the aminoacyl-tRNA to the A site and provides two chances to proofread the codon-anticodon match; EF-G binds afterwards and its GTP hydrolysis rearranges the ribosome so the mRNA moves exactly three nucleotides. Ribosomes can be forced to synthesize protein without these factors and without GTP hydrolysis under some conditions in vitro, and the result establishes what the factors buy: synthesis still happens but is very slow, inefficient and inaccurate. Coupling GTP-driven conformational changes to the transitions between ribosome states both speeds the process enormously and ensures the many changes happen only in the forward direction.
Tags: translation, ribosome, machines

---

Q+: EF-Tu provides two proofreading opportunities. What are they?
![A nucleotide of the small-subunit rRNA hydrogen-bonding to the first base pair of a correctly matched codon-anticodon pair](assets/img/fig-6-70.png)
A: The first is a gate on GTP hydrolysis. The 16S rRNA of the small subunit assesses the match by folding around the codon-anticodon pair and probing its molecular details, forming a network of hydrogen bonds that is possible only when the pairing is correct. When it is, the rRNA closes tightly and the resulting conformational change triggers EF-Tu to hydrolyse GTP, and only then does EF-Tu release its grip on the tRNA. Incorrect matches do not readily trigger that change, so most errant tRNAs fall off before being used. The second comes after EF-Tu has left: there is a time delay before the amino acid moves into position for catalysis, that delay is longer for incorrect pairs, and incorrectly matched tRNAs dissociate faster. So most of the wrong tRNAs that survived the first check leave during the second, along with a significant number of correct ones. The two steps in series are largely responsible for the ribosome's 99.99% accuracy.
Tags: fidelity, proofreading, ribosome

---

Q: The chapter names two general principles that rescue base-pairing from its own imprecision. What are they?
A: **Induced fit** and **kinetic proofreading**. Induced fit means the machine folds around the base pair and only completes the folding, and so only permits the reaction, if the match is correct: the ribosome does this around the codon-anticodon pair, and RNA polymerase does the same around an incoming nucleoside triphosphate, where folding around the new base pair is what creates the enzyme's active site. Incorrect pairs have the wrong geometry, impair the induced fit and tend to dissociate before being incorporated. Kinetic proofreading means an irreversible step, typically ATP or GTP hydrolysis, starts a clock, and during the delay an incorrect substrate is more likely to dissociate than a correct one, both because its interaction is weaker and because the delay is longer for a mismatch. Together they explain how processes built on a 10-fold to 100-fold affinity difference achieve accuracies thousands of times better.
Tags: fidelity, proofreading, universals, core

---

Q+: How much fidelity can kinetic proofreading buy, and what does it cost?
A: It can improve a reaction from one error in $10^x$ to as little as one error in $10^{2x}$, assuming that differences in dissociation rate are what underlie the specificity of the interactions involved. In other words it can square the error rate, which is why a mechanism resting on modest affinity differences can reach parts per ten thousand. The cost is energetic, paid as ATP or GTP hydrolysis, and it is unavoidable rather than incidental: the discrimination comes from an irreversible step, so there has to be one. The same mechanism operates from DNA replication and repair through RNA splicing to translation, which is the chapter's point in naming it as a principle rather than a detail of the ribosome.
Tags: fidelity, proofreading, thermodynamics

---

Q: Translation is a compromise between accuracy and speed. What is the evidence that the cell has tuned it deliberately?
A: Mutants that are more accurate and do worse. Bacteria carrying a specific alteration in the small ribosomal subunit have longer time delays and translate mRNA into protein with an accuracy considerably higher than the normal one mistake per $10^4$ amino acids, but protein synthesis is so slow in them that they are barely able to survive. That is the clean demonstration that the wild-type error rate is not a limit imposed by chemistry but a chosen point on a trade-off, since a more accurate ribosome exists and is selected against. The normal setting gives 20 amino acids per second in bacteria at one error in ten thousand.
Tags: fidelity, translation, evolution

---

Q+: How much energy does making one peptide bond actually take?
A: At least four high-energy phosphate bonds, and in most cells protein synthesis consumes more energy than any other biosynthetic process. Two are spent charging the tRNA with its amino acid, and two more drive steps in the ribosomal cycle. On top of that fixed cost come the proofreading losses: energy is consumed every time a synthetase hydrolyses an incorrectly attached amino acid, and every time an incorrect tRNA enters the ribosome, triggers GTP hydrolysis and is then rejected. The subtlest part of the bill is that any effective proofreading mechanism must also discard an appreciable fraction of *correct* interactions, so the waste is not confined to genuine errors. Accuracy is paid for in free energy, as any increase in order in the cell must be.
Tags: thermodynamics, translation, fidelity

---

Q+: Where do the four high-energy phosphate bonds spent per peptide bond actually go?
- [x] Two to charge the tRNA with its amino acid, and two to drive steps in the ribosomal cycle
- [ ] One for each of the four steps of the elongation cycle
- [ ] Two to form the peptide bond itself, and two to translocate the ribosome
- [ ] Four to charge the tRNA, with the ribosomal cycle needing none
A: Two are consumed by the aminoacyl-tRNA synthetase, since the ATP it spends is cleaved to AMP plus pyrophosphate and the pyrophosphate is then hydrolysed, and two more are spent on the ribosome as GTP by EF-Tu and EF-G. The third option is the most seductive because it puts the energy where the chemistry is, but the peptide bond itself is paid for by the ester linkage created during charging, which is why the growing chain must stay attached to a tRNA. Translocation does cost GTP, but so does delivery of the aminoacyl-tRNA. Note that four is a *minimum*: every rejected tRNA that triggered GTP hydrolysis and every incorrectly charged amino acid hydrolysed off by a synthetase adds to the bill.
Tags: thermodynamics, translation, fidelity

---

Q: In what sense is the ribosome a **ribozyme**?
![The three-dimensional fold of the 5S and 23S rRNAs of a bacterial large subunit, with the secondary structure of the 23S rRNA divided into six domains](assets/img/fig-6-71.png)
A: In the strongest sense: the RNA does the chemistry. The ribosome is two-thirds RNA and one-third protein by mass, and the 2000 structures of both subunits confirmed that the rRNAs are folded into compact precise structures that form the core, determine the overall shape, position the tRNAs on the mRNA and catalyse peptide bond formation. The A, P and E sites are formed primarily by rRNA, and so is the catalytic site, where the nearest amino acid lies more than 1.8 nm away and so cannot be participating. A ribozyme is simply an RNA molecule with catalytic activity, and the spliceosome is another, though its active site is built from several different RNAs rather than one.
Tags: ribosome, catalysis, core

---

Q+: That was a surprise. Why, and how does the rRNA manage catalysis without the usual tools?
A: Because RNA lacks the equipment. Unlike proteins it has no easily ionizable functional groups of the kind normally used to catalyse a reaction as demanding as peptide bond formation, and the metal ions that RNA often recruits instead, as the spliceosome does, were not found at the ribosome's active site. The current view is that the 23S rRNA forms a highly structured pocket that uses a network of hydrogen bonds to orient the two reactants, the growing chain and the aminoacyl-tRNA, precisely enough that their joining is greatly accelerated. Catalysis here is positioning rather than chemistry. A further surprise was that the P-site tRNA contributes an important hydroxyl group to the active site and participates directly, which may guarantee that catalysis happens only when that tRNA is properly placed.
Tags: ribosome, catalysis, structure

---

Q+: If the RNA does the work, what are the fifty-odd ribosomal proteins for?
![The L15 protein of the bacterial large subunit, with a globular domain on the surface and an extended region penetrating deep into the rRNA core](assets/img/fig-6-73.png)
![The bacterial large subunit with rRNA in blue and its proteins in green, occupying the surface and crevices](assets/img/fig-6-72.png)
A: Stabilizing the RNA. They sit generally on the surface, filling gaps and crevices in the folded RNA rather than occupying the core, and some send extended regions of polypeptide chain penetrating short distances into holes in the RNA, as the L15 protein does. Their main role appears to be to stabilize the RNA core while still permitting the conformational changes the rRNA must make to catalyse synthesis efficiently, which is a harder requirement than simply holding it rigid. The dependence runs the other way too: ribosomal proteins are brought to the nucleolus largely unfolded, escorted by chaperones, and take their final folded state only as the ribosome is assembled, so their structure depends on the rRNA framework.
Tags: ribosome, structure, assembly

---

Q: Why is the choice of start codon the most consequential decision in translation?
A: For two reasons. It sets the reading frame for the entire message, so an error of one nucleotide either way would cause every subsequent codon to be misread and produce a nonfunctional protein with a garbled sequence. And for most genes it is the last point at which the cell can decide whether an mRNA is translated at all, so the efficiency of initiation is one of the determinants of how fast a given protein is made, and it is where much regulation acts. Everything downstream is mechanical; initiation is where the commitment happens.
Tags: translation, regulation, core

---

Q: How does a eukaryotic ribosome find the start codon?
![The eukaryotic initiation pathway, with Met-tRNAi loaded into the small subunit, the cap bound by eIF4E and eIF4G, scanning for the first AUG, and the large subunit joining](assets/img/fig-6-74.png)
A: By scanning from the 5′ end. The initiator tRNA carrying methionine, Met-tRNAi, is loaded into the small subunit together with eukaryotic initiation factors; uniquely among charged tRNAs it can bind the small subunit tightly without the whole ribosome present, and it binds directly to the P site rather than the A site. The small subunit then binds the 5′ end of the mRNA, recognized through its cap, which has already bound the initiation factors eIF4E and eIF4G, and moves forward 5′ to 3′ looking for the first AUG, helped by further factors acting as ATP-powered helicases. In about 90% of mRNAs translation begins at the first AUG encountered. The factors then dissociate, the large subunit joins, and with the initiator tRNA in the P site and the A site vacant, elongation can begin.
Tags: translation, ribosome, core

---

Q+: Efficient initiation also requires the poly-A tail, which is at the other end of the message. Why?
A: So that the machinery can confirm both ends are present before committing, the same logic that governed export from the nucleus. The poly-A tail bound by poly-A-binding proteins communicates with the 5′ end through an interaction between those proteins and eIF4G, which effectively circularizes the message. A truncated mRNA missing either end therefore fails the check and is not translated. The interaction appears to be transient, with the two ends dissociating once translation has begun, so the circle is a checkpoint rather than a permanent structure.
Tags: translation, quality-control

---

Q+: What is the **Kozak sequence**, and what is leaky scanning?
A: The nucleotides immediately around the start site influence how efficiently an AUG is recognized during scanning, and the consensus for that context is 5′-ACCAUGG-3′, named after its discoverer. When a site differs substantially from it, scanning subunits will sometimes ignore the first AUG and initiate at the second or third instead, which is **leaky scanning**. Cells use this deliberately to make two or more proteins differing at their N-termini from one message. The worked example is a gene producing the same protein with and without an N-terminal signal sequence, so that the two forms are directed to different compartments of the cell. A weak start context is therefore not simply a defect; it is a way of splitting one gene's output between two destinations.
Tags: translation, regulation

---

Q+: Does translation always start at AUG?
A: Usually, but not always, and the exceptions are informative. For some proteins translation begins at a codon differing from AUG by a single base, particularly in the third position; the normal methionine initiator tRNA is still used, but because the match is imperfect these proteins are translated much less efficiently, which is how the cell makes very small amounts of some proteins. More rarely translation begins with an entirely different tRNA: a few proteins begin at a CUG codon read by a leucine tRNA, which is a perfect match, so leucine rather than methionine is the first amino acid. In all the standard cases the N-terminal methionine is usually removed later by a specific protease, so a mature protein rarely still shows it.
Tags: translation, regulation

---

Q: Bacteria have no cap. How does a bacterial ribosome choose where to start?
![A bacterial mRNA carrying three ribosome-binding sites, each preceding an AUG, and each yielding a different protein](assets/img/fig-6-75.png)
A: By base-pairing rather than scanning. Each bacterial mRNA carries a **ribosome-binding site**, the Shine-Dalgarno sequence, a few nucleotides upstream of the AUG where translation should begin, with consensus 5′-AGGAGGU-3′. That sequence forms base pairs with the 16S rRNA of the small subunit, which positions the initiating AUG in the ribosome directly, with initiation factors orchestrating the interaction and the subsequent assembly of the large subunit. The consequence is architectural: because a ribosome can assemble directly on a start codon in the interior of a message as long as a binding site precedes it, bacterial mRNAs are often **polycistronic**, encoding several entirely different proteins translated from the same molecule. A eukaryotic mRNA, which must be entered at its 5′ cap, generally encodes only one.
Tags: translation, ribosome, core

---

Q: How does translation stop?
![Release factor binding an A site bearing a stop codon, water added instead of an amino acid, and the ribosome dissociating into subunits](assets/img/fig-6-76.png)
A: At one of three stop codons, UAA, UAG or UGA, which are not recognized by any tRNA and specify no amino acid. Proteins called **release factors** bind to any ribosome with a stop codon in the A site and force the peptidyl transferase to add a water molecule to the peptidyl-tRNA instead of an amino acid. That hydrolysis frees the carboxyl end of the chain from its tRNA, and since that attachment is the only thing normally holding the polypeptide to the ribosome, the finished protein is released into the cytoplasm. The ribosome then releases the mRNA and separates into subunits, which can reassemble on this or another message. Release factors are proteins that resemble tRNAs in overall shape and charge distribution, which is how they fit into a site designed for a tRNA.
Tags: translation, ribosome, core

---

Q+: The new protein leaves through a tunnel. What is it like inside?
A: It is a large water-filled channel through the large subunit, roughly 10 nm long and 1.5 nm across, with walls made primarily of 23S rRNA. Their surface is a patchwork of tiny hydrophobic patches embedded in a more extensive hydrophilic surface, an arrangement that is deliberately not complementary to any particular peptide. The chapter describes the result as a Teflon coating: because nothing in the tunnel binds any sequence preferentially, a chain of any composition slides through easily rather than sticking. Some folding can begin inside, but most of it happens as the protein emerges.
Tags: ribosome, folding, structure

---

Q: What is a **polyribosome**, and how crowded is a typical message?
![A series of ribosomes translating one mRNA simultaneously, and an electron micrograph of a polyribosome](assets/img/fig-6-77.png)
A: A large cytoplasmic assembly of several ribosomes translating one mRNA at once, spaced as close as 80 nucleotides apart. They form because most proteins take between 20 seconds and several minutes to make, and as soon as one ribosome has moved far enough out of the way the 5′ end is threaded into another, so multiple initiations happen during one round of synthesis. The point is throughput: many more protein molecules can be made in a given time than if each had to be finished before the next could start. On occupancy, in a typical human cell about a third of mRNAs carry no ribosomes at all, and the rest have 10 to 20 each, which is a useful corrective to the impression that every message is being read.
Tags: translation, ribosome

---

Q: The genetic code is nearly universal. What are the exceptions, and what do they suggest?
A: They are rare, and that rarity is itself the evidence for common ancestry across all three branches of life. Two examples: *Candida albicans*, the most prevalent fungal pathogen of humans, translates CUG as serine where nearly all other organisms read it as leucine; and in some ciliates the three conventional stop codons specify particular amino acids instead of terminating. What makes such changes so rare is that reassigning a codon alters every protein in the organism at once, so the barrier is not chemical but systemic. A change of this kind can only be tolerated where the codon is rare enough that the damage is survivable, which is why the exceptions cluster on infrequently used codons.
Tags: genetic-code, evolution, universals

---

Q: The standard code allows 20 amino acids. How does a cell get a twenty-first?
![A special tRNA charged with serine, the serine converted enzymatically to selenocysteine, and a stem-loop in the mRNA signalling that the neighbouring UGA encodes selenocysteine](assets/img/fig-6-78.png)
A: By **recoding**, in which neighbouring sequence information in an mRNA changes the meaning of the code at one particular site. Selenocysteine, which has a selenium atom where cysteine has sulfur and is needed for the efficient function of a variety of enzymes, is available to bacteria, archaea and eukaryotes alike. It is made in an unusual way: a special tRNA is charged with serine by the ordinary seryl-tRNA synthetase, and the serine is then enzymatically converted to selenocysteine while still attached. That tRNA pairs with UGA, normally a stop codon, and a stem-and-loop structure elsewhere in the same mRNA, together with a selenocysteine-specific translation factor, signals that this particular UGA means an amino acid. After it is added, translation continues to a conventional stop.
Tags: genetic-code, translation

---

Q+: Mitochondria deviate from the code routinely. Give an example, and say why they can get away with it.
A: In mammalian mitochondria AUA is translated as methionine, while in the cytosol of the same cell it is isoleucine. They can do this because they are a closed system: mitochondria have their own genomes and encode much of their own translational apparatus, so a reassignment affects only the handful of proteins made inside the organelle rather than the whole proteome. That is the same reason the other exceptions are confined to particular organisms or particular codons, and it is a good illustration of why the code is nearly frozen in the main cellular compartment: the cost of a change scales with how many proteins it touches.
Tags: genetic-code, organelles, evolution

---

Q: Why do so many antibiotics target the ribosome, and why can we take them safely?
![Binding sites for tetracycline, spectinomycin, streptomycin, hygromycin B, chloramphenicol, erythromycin and streptogramin B mapped onto the two bacterial ribosomal subunits](assets/img/fig-6-79.png)
A: Because protein synthesis is essential and the bacterial ribosome differs enough from ours to be attacked selectively, so high doses can be given without undue toxicity. Most of these compounds were originally isolated from bacteria and fungi rather than designed, and are thought to have arisen over evolutionary time through warfare between competing microbes. Mechanically, many simply lodge in pockets in the ribosomal RNAs and gum up the machine's smooth operation, while others block specific parts such as the exit tunnel. The caveat that matters clinically is in the table's footnote: mitochondrial and chloroplast ribosomes often resemble bacterial ones in their sensitivity, so some of these antibiotics can have deleterious effects on human mitochondria.
Tags: antibiotics, ribosome, medicine

---

Q+: What do the commonly used inhibitors actually block?
A: They divide by which cells they act on, which is what makes them useful in the laboratory as well as the clinic.

| Inhibitor | Acts on | Effect |
| --- | --- | --- |
| Tetracycline | Bacteria | Blocks binding of aminoacyl-tRNA to the A site |
| Streptomycin | Bacteria | Prevents the transition from initiation to elongation, and causes miscoding |
| Chloramphenicol | Bacteria | Blocks the peptidyl transferase reaction |
| Erythromycin | Bacteria | Binds in the exit tunnel and inhibits chain elongation |
| Rifamycin | Bacteria | Blocks initiation of RNA chains by binding RNA polymerase |
| Puromycin | Both | Causes premature release of nascent chains by being added to the growing end |
| Actinomycin D | Both | Binds DNA and blocks movement of RNA polymerase |
| Cycloheximide | Eukaryotes | Blocks the peptidyl transferase reaction |
| Anisomycin | Eukaryotes | Blocks the A site of the 60S subunit after initiation but before elongation |
| α-Amanitin | Eukaryotes | Blocks mRNA synthesis by binding preferentially to RNA polymerase II |

Tags: antibiotics, ribosome

---

Q+: Puromycin is described as a fascinating example of molecular mimicry. What does it imitate, and what happens?
A: It is a structural analogue of a tRNA linked to an amino acid. The ribosome mistakes it for an authentic charged tRNA and covalently incorporates it at the C-terminus of the growing chain, but because it is not a tRNA and cannot be extended, the result is premature termination and release of a truncated polypeptide. Since the deception exploits a feature common to all ribosomes rather than a bacterial peculiarity, puromycin inhibits protein synthesis in bacteria and eukaryotes alike, which is exactly why it is a laboratory reagent rather than an antibiotic. The related laboratory point is that chloramphenicol in a eukaryotic cell inhibits synthesis only on mitochondrial and chloroplast ribosomes, presumably reflecting the bacterial origins of those organelles, while cycloheximide affects only cytoplasmic ones, so the pair can be used to separate the two.
Tags: antibiotics, ribosome, model-organisms

---

Q: What is **nonsense-mediated mRNA decay**, and how does it detect a premature stop?
![A correctly spliced mRNA whose exon junction complexes are all stripped off before the stop codon, beside an aberrantly spliced one where a premature stop is reached while EJCs remain, triggering degradation](assets/img/fig-6-80.png)
A: A surveillance system that destroys mRNAs carrying a stop codon in the wrong place, which is what aberrant splicing usually produces, especially in organisms like us with large introns. It works by using position rather than sequence. As an mRNA emerges from a nuclear pore it is met by a ribosome that performs a test round of translation, and as that ribosome travels it strips off the exon junction complexes deposited at each completed splice. A normal stop codon lies in the last exon, so by the time the ribosome reaches it the message should be free of EJCs, and it is then released to the cytosol for translation in earnest. If a stop is reached while EJCs are still bound, Upf proteins bound to those complexes trigger rapid degradation. The requirement that the premature stop be in the same reading frame as the normal protein is what makes the test specific.
Tags: quality-control, splicing, translation

---

Q+: Why does the chapter call this mechanism important for evolution, for immunity and for human disease?
A: Three consequences of the same filter. In evolution, it lets eukaryotic cells explore new genes formed by DNA rearrangements, mutations or new splicing patterns more freely, because only mRNAs capable of producing a full-length protein are selected for translation. In the developing immune system, the extensive DNA rearrangements that generate antibody diversity often create premature termination codons, and the surveillance system degrades those transcripts, avoiding the toxic effects of truncated proteins. In medicine, roughly one-third of all human genetic disorders result from mutations that turn a codon into a stop, or from frameshift and splice-site mutations that place one in the reading frame. In someone carrying one mutant and one functional copy, nonsense-mediated decay eliminates the aberrant mRNA and prevents a potentially toxic protein from being made, so without this safeguard such individuals would suffer much more severe symptoms.
Tags: quality-control, medicine, evolution

---

Q+: A mutation creates a premature stop codon in the *final* exon of a three-exon gene. What happens to that mRNA?
- [x] It is translated, producing a truncated protein, because no exon junction complexes remain downstream of the stop
- [ ] It is destroyed by nonsense-mediated decay, because the stop codon is premature
- [ ] It is retained in the nucleus, because the last splice was never completed
- [ ] It is translated normally, because a stop codon in the last exon is read through
A: It escapes surveillance and is translated. Nonsense-mediated decay does not detect prematurity as such; it detects a stop codon reached while exon junction complexes are still bound ahead of the ribosome. A stop in the final exon has no EJC downstream of it, since the last junction lies upstream, so the message passes its test round of translation and is released for use. The clinical consequence is the one worth carrying: mutations in the last exon evade the safeguard and produce a truncated protein, which can be worse than no protein if it retains the ability to bind its partners, whereas the same mutation earlier in the gene would have been silenced.
Tags: quality-control, splicing, medicine

---

Q: What stalls a ribosome, and how does the cell notice?
![A ribosome stalled at a damaged base with an upstream ribosome colliding into it, and a ribosome stalled at the end of a broken mRNA with an empty A site, both routed into the ribosome quality control pathway](assets/img/fig-6-81.png)
A: Several things: a broken mRNA lacking an in-frame stop codon, so the ribosome translates to the 3′ end and is never released; damaged bases that cannot form stable codon-anticodon interactions; stable mRNA secondary structures; and stretches of rare codons whose matching charged tRNAs are present at very low concentration. Detection uses two different cues depending on the cause. A ribosome stalled in the middle of a message is detected by collision, because the ribosomes behind it run into it and each other, generating a string of nonfunctioning ribosomes that is itself the signal. A ribosome stalled at the end of a broken mRNA is detected by its empty A site. Translating ribosomes therefore act as continuous sensors of mRNA health.
Tags: quality-control, ribosome, translation

---

Q+: What does ribosome-associated quality control then do, and why those three things?
A: The mRNA is degraded, the nascent protein is degraded, and the stalled ribosome is disengaged for reuse. Each makes sense on its own terms: destroying the mRNA removes a damaged template that would cause the same problem repeatedly, destroying the nascent chain prevents an aberrant protein from being released into the cell, and rescuing the ribosome preserves an RNA-protein machine that took a great deal of resource to build. Mechanically the stalled ribosome is split, releasing the 40S subunit immediately, while the 60S subunit still holding a tRNA and a partial protein in its P site is taken over by the RQC complex, which ubiquitylates the nascent protein and cleaves the tRNA from it. Given that each ribosome in a human cell makes about 3000 proteins in its lifetime, the ability to rescue rather than discard them contributes substantially to that longevity.
Tags: quality-control, ribosome, ubiquitin

---

Q: Translation produces a chain of amino acids. What else has to happen before there is a functional protein?
![The steps from a newly synthesized chain through folding and cofactor binding, covalent modification, and assembly with partner subunits into a mature functional protein](assets/img/fig-6-82.png)
A: Four things, all specified in the end by the amino acid sequence itself. The chain must fold into its unique three-dimensional conformation, driven by burying hydrophobic residues in an interior core and by the sum of many noncovalent interactions, giving the conformation of lowest free energy. It must bind any small-molecule cofactors it needs. It must be covalently modified where required, most often by glycosylation and phosphorylation, though more than 200 different types of covalent modification are known. And it must assemble correctly with the other subunits it works with. Many of these steps begin while the protein is still being synthesized rather than waiting until it is complete.
Tags: folding, translation, core

---

Q+: What happens to a protein's N-terminus as it emerges?
A: In most eukaryotic proteins it is edited. Translation always begins with methionine, but in about 70% of cytosolic proteins that methionine is cleaved off and the newly exposed N-terminus is acetylated. The enzymes doing this have a weak affinity for the ribosome and hover near the exit tunnel, rapidly associating and dissociating, which puts them in position to act on the growing chain the moment it appears. The same arrangement recurs throughout the chapter: rather than binding tightly and waiting, processing enzymes are held loosely at the place where their substrate will emerge.
Tags: folding, translation

---

Q: Why do most proteins need help folding, when the information is all in the sequence?
A: Because having a lowest-energy structure does not guarantee reaching it. There are many folding paths open to an unfolded or partially folded chain, and some do not lead to the correctly folded form: the protein becomes kinetically trapped in off-pathway structures, some of which aggregate and become irreversible dead ends, producing nonfunctional and potentially dangerous species. **Molecular chaperones** solve this by repeatedly binding and releasing partially folded regions, giving them many chances to fold correctly. The distinction worth holding is that a chaperone adds no information and does not specify the structure; it prevents the chain from committing to a wrong path long enough for the right one to be found.
Tags: folding, chaperones, core

---

Q+: Why are so many chaperones called **heat-shock proteins**?
A: Because they are made in dramatically increased amounts after a brief exposure to an elevated temperature, for instance 42 °C for cells that normally live at 37 °C, which is how they were found and named, hsp. The increase is a feedback system responding to an increase in misfolded proteins, of the kind heat produces, by boosting synthesis of the chaperones that refold them. The name is misleading about their normal role, and the chapter says so: even under ordinary conditions heat-shock proteins are so abundant that all proteins should be considered embedded in a rich soup of them. The hsp70 family alone makes up several percent of total cell protein.
Tags: chaperones, folding

---

Q: How does an **hsp70** chaperone work?
![An hsp70 clamping its substrate-binding domain onto exposed hydrophobic amino acids driven by ATP hydrolysis, its three-dimensional structure, and hsp70 acting at the ribosome exit tunnel](assets/img/fig-6-83.png)
A: By clamping and releasing, over and over, at the expense of ATP. Short stretches of hydrophobic amino acids abnormally exposed in a misfolded or unfinished protein trigger hydrolysis of ATP to ADP, which closes hsp70 down onto the substrate and traps it in an extended conformation; rebinding of another ATP opens the clamp and releases it. Repeated cycles, often with several hsp70 molecules on the same target, keep hydrophobic regions from aggregating until they can be assimilated into the core of the properly folded protein. Humans have thirteen hsp70 proteins, and different family members work in different compartments: mitochondria have their own, distinct from the cytosolic ones, and a special hsp70 called BiP folds proteins in the endoplasmic reticulum.
Tags: chaperones, folding, machines

---

Q+: How does hsp70 help a protein that is still being synthesized?
A: A group of hsp70s associates with the ribosome and helps nearly all emerging proteins fold, by rapidly binding and releasing short sequences of about five amino acids as the chain is pushed through the exit tunnel. When one encounters a sequence rich in hydrophobic amino acids, the sort that normally forms the core of a folded protein, it clamps down and delays folding of that region until enough of the protein has been made for it to fold correctly. The problem being solved is one of timing rather than of thermodynamics: a hydrophobic stretch that emerges early has no partner surface to pair with yet, and without a chaperone it would find one on a neighbouring molecule instead. Most proteins are at least partly folded when released, and many complete their folding through further hsp70 cycles away from the ribosome.
Tags: chaperones, folding, ribosome

---

Q: What does an **hsp60** chaperonin do that hsp70 cannot?
![A misfolded protein captured at the hydrophobic opening of a barrel-shaped chaperonin, enclosed by the GroES cap for folding in isolation, then released, with the crystal structure of GroEL-GroES](assets/img/fig-6-84.png)
A: It provides an isolation chamber. Where hsp70 works on exposed stretches of a chain, hsp60 forms a large barrel-shaped structure that acts after a protein has been fully synthesized but before it has folded correctly, and it encloses the substrate so that folding happens with no other protein available to aggregate with. A misfolded protein is captured by hydrophobic interactions at the exposed surface of the opening, which often helps unfold it in the first place. ATP binding and the arrival of a cap then release the substrate into the enclosed space, and a twisting of the chamber subunits swaps some hydrophobic inner surfaces for hydrophilic ones, so the interior now favours the arrangement a correctly folded protein wants. After about 10 seconds ATP hydrolysis weakens the cap, further ATP binding ejects it, and the protein is released whether or not it has succeeded. Only half of the symmetric barrel works on a client at any one time.
Tags: chaperones, folding, machines

---

Q+: The same machine has three names. What are they, and what other chaperone families are there?
![A protein released and rebound by hsp70 being passed on either to hsp90 or to an hsp60-like chaperonin for a different kind of folding catalysis](assets/img/fig-6-85.png)
A: It is called hsp60 in mitochondria, TRiC in the cytosol of vertebrate cells and GroEL in bacteria, with GroES being the bacterial cap. Beyond hsp70 and hsp60 there are many others, including hsp90, which can harness mechanical forces to help proteins fold and works as part of a collaborative network: a protein whose exposed hydrophobic regions defeat hsp70 can be passed on, still complexed with hsp70, to either hsp90 or a chaperonin for a different kind of folding catalysis. All three families often need many cycles of ATP binding and hydrolysis to fold one chain, the energy going into movements that convert each machine between binding and releasing conformations. As with transcription, splicing and translation, a great deal of free energy is spent to improve the accuracy of a biological process.
Tags: chaperones, folding, thermodynamics

---

Q: Besides chaperones, what two features of translation itself help a protein fold?
A: Its speed and its company. Translation is not smooth: the ribosome moves in fits and starts, running quickly through some sequences and pausing at others, with pauses caused by runs of rare codons whose low-abundance charged tRNAs take longer to arrive by diffusion, or by mRNA secondary structures forming ahead of the ribosome. Many of these pauses are thought not to be accidental but spaced to give problem regions extra time to fold as they leave the exit tunnel, which would mean an mRNA encodes not only a sequence but a schedule matched to its protein's folding behaviour. Separately, a protein emerging from the ribosome often begins assembling with already-folded partner subunits, whose complementary surfaces help it adopt the right structure.
Tags: folding, translation, regulation

---

Q+: How does a cell arrange for those partner subunits to be nearby?
A: Differently in bacteria and eukaryotes. For a complex built of identical subunits the problem solves itself, since one mRNA is translated by many ribosomes at once, so finished molecules are always in the vicinity of ones being made. In bacteria, different proteins can be translated from the same polycistronic mRNA, so different subunits of one complex are made side by side and can help each other fold. In eukaryotes, where each mRNA typically yields a single protein, it has been proposed that mRNAs encoding different subunits of a complex are held near one another, perhaps directed by information in the untranslated regions, producing a high local concentration of mature subunits where new ones are appearing.
Tags: folding, assembly, translation

---

Q: A protein fails to fold despite everything. How is it recognized and marked?
A: By the same signal chaperones use, an exposed hydrophobic patch, so the continued presence of a chaperone is itself the indication that folding has failed. The cases that arrive here are varied: normal proteins that simply fail after numerous attempts, aberrant proteins produced by errors in transcription, splicing or translation that could never fold, and proteins that folded correctly and were later damaged by chemical reactions such as oxidation. Specialized enzymes recognize the hydrophobic patch, possibly helped by chaperones, and attach the small protein **ubiquitin** to a nearby lysine, then extend it into a polyubiquitin chain. The specific signal is the linkage: a chain of ubiquitins joined through their lysine 48 is the tag that marks a protein for destruction, as opposed to the other ubiquitin modifications the cell uses for other purposes.
Tags: ubiquitin, quality-control, folding

---

Q: What is a **proteasome**, and why are its active sites hidden inside?
![A cutaway of the 20S proteasome cylinder with protease active sites facing the inner chamber, and the complete proteasome with a 19S cap at each end](assets/img/fig-6-86.png)
A: A compartmentalized protease that destroys ubiquitylated proteins, and it is abundant, at roughly 1% of total cell protein, dispersed through the cytosol and nucleus. The core is a hollow cylinder, the 20S proteasome, built from subunits assembled as a stack of four heptameric rings, and some of those subunits are proteases whose active sites face the inner chamber. That geometry is the whole design principle: sequestering the active sites prevents them running rampant through the cell, so a protein can only be degraded if it is deliberately delivered. Each end of the cylinder normally carries a 19S cap containing a six-subunit ring through which target proteins are threaded into the core.
Tags: ubiquitin, machines, quality-control

---

Q+: How does a folded protein get into a channel that narrow?
A: It is unfolded on the way in. The cap selectively binds proteins marked by ubiquitin, and if the protein also contains a loosely structured region to grip, the cap uses ATP hydrolysis to drive the threading reaction, pulling on the chain and unfolding it so it can pass through the narrow channel into the inner chamber, where it is digested to short peptides. So degradation is not simply a matter of cutting a protein up: the machine has to defeat the folding first, which is why it needs ATP and why a protein with no accessible unstructured segment is harder to destroy. The proteasome also handles aberrant proteins in the endoplasmic reticulum, which an ER surveillance system detects and retrotranslocates back to the cytosol for degradation.
Tags: ubiquitin, machines, quality-control

---

Q: What makes the proteasome **processive**, and why does that matter?
![The proteasome cap recognizing a polyubiquitin chain, cleaving off the ubiquitin for recycling, and threading the unfolded protein into the core, with the cap's ubiquitin receptor and ubiquitin hydrolase](assets/img/fig-6-87.png)
A: A simple protease cuts a chain once and dissociates; the proteasome keeps the entire substrate bound until all of it has been converted into short peptides. That matters because a partly digested protein would be worse than an intact one, since fragments are exactly the sort of species that expose hydrophobic surface and aggregate. The mechanism enforces it: the substrate is threaded through a narrow channel into an enclosed chamber, so it cannot leave until it has passed all the way through. The ubiquitin is cleaved off by a ubiquitin hydrolase in the cap before the protein enters, and recycled, so the tag is not destroyed along with the protein it condemned.
Tags: ubiquitin, machines, quality-control

---

Q+: What actually pulls the protein through?
![A hexameric AAA unfoldase ring gripping a substrate, with ATP hydrolysis driving successive tilting of adjacent subunits in a hand-over-hand pulling motion](assets/img/fig-6-88.png)
A: A hexameric ring of **AAA proteins**, a large class of protein unfoldases that share mechanistic features with the ATP-dependent DNA helicases that unwind DNA. The ATP-bound ring grasps the substrate, and a conformational change driven by ATP hydrolysis pulls on it and strains the ring. At that point the substrate either partially unfolds and enters further into the pore, or holds its structure and partially withdraws, so progress is a contest rather than a stroke. Successive tilting of adjacent subunits produces what is described as a hand-over-hand pulling motion, with the hands often slipping until unfolding occurs, after which the chain moves through relatively quickly. Some substrates need hundreds of cycles of ATP hydrolysis and dissociation, and some resist entirely and are eventually de-ubiquitylated and released.
Tags: machines, ubiquitin, folding

---

Q+: Ubiquitin marks a protein for destruction. Is the mark by itself sufficient?
A: No, there is a second check, and it is a structural one. The polyubiquitin chain binds a receptor in the 19S cap, but the protein is only grasped tightly, de-ubiquitylated and pulled in if it *also* has an unfolded region for the cap to grip, which can span the ubiquitin mark. Ubiquitylated proteins lacking such a region are typically de-ubiquitylated and released back into solution. This sets up a genuine competition between chaperones and the degradation machinery for misfolded proteins: those that fold quickly escape destruction, at least early in life before they accumulate damage, while those that go through many rounds of chaperone-assisted folding are more likely to be degraded, and some chaperones hand persistent failures directly to the destruction machinery. Between 1 and 5% of all newly synthesized proteins fail to fold properly and are destroyed this way.
Tags: quality-control, chaperones, ubiquitin

---

Q: Degradation is not only for damaged proteins. What else is it for?
![Six routes to inducing destruction of a protein, three activating a ubiquitin ligase and three creating an exposed degradation signal in the target](assets/img/fig-6-89.png)
A: For conferring short lifetimes on specific normal proteins whose concentrations must change promptly when the cell's state changes. Some are degraded rapidly at all times; many others are conditionally short-lived, meaning metabolically stable under some conditions and unstable after a change, the mitotic cyclins being the standard case, long-lived through the cell cycle until their sudden destruction at the end of mitosis. Control is exercised at ubiquitylation, and by two general routes. Either the ubiquitin ligase is switched on, by phosphorylation of an E3 or by an allosteric transition caused by binding a small molecule or a protein subunit, which is how the anaphase-promoting complex is activated by a cell-cycle-timed subunit addition. Or a ubiquitylation site is created in the target, by phosphorylation completing a recognition site, by unmasking a preexisting signal through subunit dissociation, or by cleaving a peptide bond to expose a new destabilizing N-terminus.
Tags: ubiquitin, regulation, quality-control

---

Q+: Nearly 70% of human cytosolic proteins are acetylated at the N-terminus. What is that mark, on this account, actually doing?
A: Marking them for destruction. That acetylated N-terminal residue is recognized by a specific E3 enzyme, which directs ubiquitylation and sends the protein to the proteasome, so the majority of human proteins carry their own destruction signal built in from the moment they are made. The proposal that resolves the apparent absurdity is that the signal is normally hidden: when a protein is properly folded, and before that while it is in contact with a chaperone, the acetylated N-terminus is buried and inaccessible to the E3. As the protein ages and becomes damaged, or if it fails to fold correctly in the first place, the signal becomes exposed and the protein is destroyed. On this view every protein carries a timer that starts when its structure begins to fail.
Tags: ubiquitin, quality-control, folding

---

Q: What determines the final amount of a protein in a cell?
![The full sequence from gene through transcription, capping, splicing, polyadenylation, export, translation, folding, and both mRNA and protein degradation](assets/img/fig-6-90.png)
A: The balance between the rates of synthesis and degradation, with synthesis itself being the product of the efficiency of every step along the way: transcription, capping, splicing, cleavage and polyadenylation, export, translation initiation, elongation, and folding. The chapter is explicit that the cell devotes enormous resources to selectively degrading proteins, particularly those that fail to fold or accumulate damage with age, so degradation belongs in the accounting rather than being an afterthought. Every protein eventually accumulates damage and is probably degraded by the proteasome. In principle any or all of the steps in the sequence could be regulated for an individual protein, and there are examples of regulation at each one.
Tags: regulation, core, quality-control

---

Q: What is the central paradox that the **RNA world** hypothesis is meant to solve?
![A timeline of the universe from the big bang through formation of the solar system, an RNA world, the first cells with DNA and the first mammals](assets/img/fig-6-91.png)
A: That nucleic acids are required to synthesize proteins and proteins are required to synthesize nucleic acids, so a system of interdependent components has to have arisen somehow without either half existing first. The proposed resolution is that RNA did both jobs before modern cells arose: it stored genetic information and directly catalysed the chemical reactions of primitive cells, acting as its own enzymes. Only later did DNA take over as the genetic material and proteins become the major catalysts and structural components. The argument rests on a property unique to RNA among present-day biological molecules, that it can be both a carrier of genetic information and a catalyst. The transition was never completed, which is the source of the evidence: RNA still catalyses several fundamental reactions in modern cells, including splicing and peptide bond formation.
Tags: origins, catalysis, core

---

Q: How does a folded RNA manage to be a catalyst at all?
![Common elements of RNA structure: a three-nucleotide bulge, a four-stem junction, a hairpin loop and a pseudoknot](assets/img/fig-6-92.png)
A: The same way a protein does, by presenting a surface with unique contours and chemical properties on which a set of substrates can react. Base-pairing and other hydrogen bonds between nucleotides in the same chain fold an RNA into a shape determined by its sequence, and comparisons across many structures reveal conserved motifs that recur as parts of larger structures: hairpin loops, bulges, multi-stem junctions and pseudoknots. The limitation is chemical, since a polynucleotide chain has a restricted set of functional groups, and many ribozymes get around it the way some proteins do, by positioning metal ions at their active sites to widen the range of reactions available.
Tags: origins, catalysis, structure

---

Q+: What does a real ribozyme do?
![A small ribozyme base-pairing with a substrate RNA, cleaving it at a specific site and releasing the product](assets/img/fig-6-93.png)
A: The well-studied example is a small RNA that cleaves a second RNA at a specific site. It works by base-pairing with its substrate, which is how it achieves specificity, then cutting, then releasing the product. It is found embedded in larger RNA genomes called viroids, which infect plants, and in nature the cleavage happens at a distant location on the same RNA molecule that contains the ribozyme, as a step in replicating the viroid genome. The reaction requires a magnesium ion positioned at the active site, which is the general strategy above in a concrete case.
Tags: origins, catalysis, viruses

---

Q: How are new ribozymes made in the laboratory, and what has that established?
![In vitro selection of a ribozyme, from a pool of random DNA sequences through transcription and folding, selection of self-phosphorylating RNAs on a column, and repeated rounds of amplification](assets/img/fig-6-94.png)
A: By **in vitro selection**. A large pool of nucleic acid molecules with randomly generated sequences is made, transcribed into RNA and allowed to fold, and the rare molecules with a property the experimenter specifies are pulled out. In the example shown, RNAs are offered an ATP derivative containing sulfur in place of an oxygen, so that only molecules able to phosphorylate themselves incorporate sulfur, and those are captured on a column binding tightly to sulfur. Because the successful molecules are extremely rare, the eluted material is converted back to DNA, amplified, transcribed and put through repeated rounds. Experiments of this kind have produced RNAs catalysing a wide variety of biochemical reactions, with rate enhancements only a few orders of magnitude below the fastest protein enzymes.
Tags: origins, catalysis, model-organisms

---

Q+: If RNA can catalyse all that, why do protein enzymes so greatly outnumber ribozymes today?
A: Not because ribozymes are hopelessly slow, since the selected ones come within a few orders of magnitude of the fastest protein enzymes, and the chapter says plainly that it is not clear why proteins won so completely. The partial answers experiments have given are about binding rather than chemistry: RNA molecules have more difficulty than proteins in binding flexible, hydrophobic substrates, and in forming pockets specific for different small molecules. Underlying both is the parts list, since having 20 types of amino acid with varied side chains presumably provides a much greater number of binding and catalytic strategies than four chemically similar nucleotides.
Tags: origins, catalysis, evolution

---

Q: What can RNA do that proteins cannot, and why is that the crux of the argument?
![A hypothetical ribozyme catalysing the synthesis of a complementary copy of its own sequence](assets/img/fig-6-95.png)
A: Directly guide the formation of copies of its own sequence, through complementary base-pairing of its subunits, so one RNA can act as a template for another. That templating is what sits at the heart of replication and transcription in modern cells. The crux is that efficient synthesis by templating still needs a catalyst, since without one polymer formation would be slow, error-prone and inefficient, and RNA is the one molecule that can supply both the template and the catalyst. Hence the proposal that RNAs once catalysed their own template-dependent synthesis. The honest state of play: self-replicating systems of RNA have not been found in nature, and while progress has been made building them in the laboratory, such experiments cannot prove the scenario, only establish whether it is plausible.
Tags: origins, catalysis, core

---

Q: The RNA world does not explain how protein synthesis arose. What is the difficulty, and what partial answers are offered?
A: The difficulty is circular: protein synthesis is now carried out by an interlocking system of protein and RNA, and the proteins cannot have existed before an early translation apparatus was already there. Three partial answers are offered. Some short peptides, such as antibiotics, are made today without ribosomes by peptide synthetase enzymes that assemble a defined sequence with no mRNA to guide them, so a noncoded primitive protein synthesis is plausible and could have been catalysed by RNA, which presents no conceptual difficulty since rRNA catalyses peptide bond formation now. Short simple peptides such as polylysine have been shown to enhance the function of laboratory-made ribozymes, raising the possibility that the first peptides were selected for helping RNA molecules fold, assemble and catalyse. And ribozymes made in the laboratory can perform specific aminoacylation, matching particular amino acids to particular tRNAs, so tRNA-like adaptors could have arisen in the RNA world as the beginning of a code, with plausible scenarios starting from about 10 of today's 20 amino acids.
Tags: origins, translation, evolution

---

Q: What chemical evidence suggests RNA came before DNA?
![The progression from RNA-based systems through RNA and protein-based systems to present-day cells using DNA, RNA and protein](assets/img/fig-6-96.png)
A: The sugars. Ribose, like glucose and other simple carbohydrates, can be formed from formaldehyde, a simple chemical readily produced in laboratory experiments simulating conditions on the primitive Earth. Deoxyribose is harder to make, and in present-day cells it is produced *from* ribose by a protein enzyme, which is the order you would expect if ribose came first. DNA presumably appeared later and then proved the better permanent repository, because the deoxyribose in its backbone makes the chain chemically more stable, so much greater lengths can be maintained without breakage. The transition is not hard to envisage since both use similar base-pairing rules, and consistent with that, a ribozyme has been made in the laboratory that synthesizes RNA on a DNA template and DNA on an RNA template.
Tags: origins, dna-structure, evolution

---

Q+: Beyond the sugar, what else about DNA makes it the better archive?
A: Being double-helical and using thymine rather than uracil, both of which serve repair rather than storage as such. A double helix means every sequence is present in two complementary copies, so damage to one strand can be corrected by reference to the other. Using thymine matters because cytosine deaminates spontaneously to uracil: if uracil were a legitimate DNA base, the repair machinery could not tell an original U from a damaged C, whereas in DNA any uracil found is by definition damage and is excised. Both differences make the many unavoidable accidents that happen to the molecule much easier to repair, which is the property an archive needs and a working copy does not.
Tags: dna-structure, dna-repair, origins

---

Q+: Could this scenario ever be tested somewhere other than Earth?
A: The chapter raises exactly that. There is widespread interest in the possibility that a primitive form of life once existed, or may even still exist, in water-containing regions below the surface of Mars, and vehicles are being sent to promising sites to collect subterranean samples for eventual return to Earth, in the hope that analysing them will let scientists refine scenarios of this kind. It is worth noticing what kind of evidence that would be: not a proof that life on Earth began in an RNA world, but a second instance to compare against, which is the thing origin-of-life reasoning most lacks.
Tags: origins, evolution

---

Q: The chapter says the ribosome "was finally revealed in atomic detail" in 2000 and names nobody. Who did it?
A: Three groups, working separately and publishing within weeks of each other in August and September 2000, each producing a crystal structure at a resolution that let individual atoms be placed: Venkatraman Ramakrishnan on the small subunit, Thomas Steitz on the large subunit, and Ada Yonath, who had pioneered the crystallography of ribosomes years earlier when the problem was widely thought hopeless. They shared the 2009 Nobel Prize in Chemistry for studies of the structure and function of the ribosome. The result mattered beyond the picture itself, because it is what showed that the peptidyl transferase centre contains no protein, turning the ribosome into a ribozyme as a matter of observation rather than inference, and it is also what made structure-based understanding of ribosome-targeting antibiotics possible.
Tags: ribosome, history, structure

---

Q: The chapter mentions self-splicing introns in *Tetrahymena* and RNase P without saying why they were startling. What was the discovery?
A: That RNA can be an enzyme, which was thought impossible. Thomas Cech, working on ribosomal RNA splicing in the ciliate *Tetrahymena thermophila*, showed in 1982 that an unprocessed RNA placed in a test tube with no protein present spliced itself, cutting itself and rejoining the flanking pieces. Sidney Altman showed that the RNA component of ribonuclease P, not its protein, is what cleaves a precursor tRNA to give mature tRNA. The two shared the 1989 Nobel Prize in Chemistry. The importance is the one the chapter's final section rests on: before this, catalysis was assumed to be the exclusive business of proteins, and if that had been true the RNA world hypothesis would have no foundation at all, since a molecule that cannot catalyse cannot bootstrap a living system.
Tags: origins, catalysis, history

---

Q: The chapter says progress has been made toward building self-replicating RNA in the laboratory. How far has it actually got?
A: Far enough to be interesting and not far enough to close the loop. The best-developed line is the RNA polymerase ribozymes evolved in Gerald Joyce's laboratory, where a variant called 24-3, obtained after 24 rounds of in vitro evolution, copies structured templates with mixed base composition well enough to synthesize a complete 33-nucleotide hammerhead ribozyme. Its striking demonstration, published in 2020, is that it can synthesize its own evolutionary ancestor, an RNA ligase ribozyme, assembled from three fragments, along with the complements of each of those fragments. What that is not yet is self-replication: the polymerase cannot copy a molecule of its own length and complexity, so the system still depends on the experimenter supplying the enzyme. The chapter's own caution is the right one, that such experiments cannot prove the scenario, only test whether it is plausible.
Tags: origins, catalysis, evolution

---

Q: The chapter mentions pseudouridine, 2′-O-methylation and the ability of cells to spot foreign RNA as three separate details. What connects them?
A: mRNA vaccines. The chapter notes that cells use 2′-O-methylation of the cap to distinguish their own mRNAs from viral ones and block translation of RNAs lacking it, and separately that pseudouridine is one of the commonest modifications made to cellular RNA. The consequence, which the chapter does not draw, is that synthetic mRNA made in a test tube looks foreign: it triggers innate immune sensors, provokes an inflammatory response and is poorly translated. Katalin Karikó and Drew Weissman showed in 2005 that replacing uridine with a modified nucleoside, ultimately N1-methylpseudouridine, largely abolishes that recognition and greatly increases how much protein is made from the message. That is the change that made the COVID-19 mRNA vaccines feasible, and it won the 2023 Nobel Prize in Physiology or Medicine. The general lesson is worth more than the application: the modifications on cellular RNA are partly a system of self-labelling, so a therapeutic RNA has to be labelled as self to be usable.
Tags: rna-processing, medicine, history

---

Q: True or false? Errors in transcription are less dangerous to an organism than errors in DNA replication.
A: True, and the reason is what the whole error-rate hierarchy rests on. DNA is the permanent archive: a replication error is copied into every descendant cell and is inherited, so one mistake becomes a property of a lineage. An RNA transcript is a disposable working copy made in many identical versions and continually turned over, so a mistake affects only the proteins made from that one molecule, and it is diluted by the correct transcripts of the same gene and eventually degraded. That difference in consequence is precisely why the cell tolerates RNA polymerase erring about once every $10^4$ nucleotides while insisting on about one in $10^7$ for proofread replication, and why RNA polymerase can dispense with a primer and carry only a modest proofreading mechanism.
Tags: problems, transcription, fidelity

---

Q: True or false? Because introns are largely genetic "junk", they do not have to be removed precisely during RNA splicing.
A: False, and the premise and the conclusion fail for different reasons. Whatever the interior of an intron is worth, the *junctions* must be found to the exact nucleotide, because the exons on either side are joined into a continuous coding sequence and the reading frame runs straight through the join. Cutting one nucleotide short or long shifts the frame for every codon downstream, garbling the rest of the protein and usually introducing a premature stop. That is why the cell spends five snRNAs, more than a hundred proteins and eight ATP per intron on a reaction whose chemistry needs none of it, and why a point mutation at a splice site causes disease rather than a slightly ragged protein.
Tags: problems, splicing

---

Q: True or false? Wobble pairing occurs between the first position in the codon and the third position in the anticodon.
A: False: it is the other way round, the third position of the codon pairing with the first position of the anticodon. The reason is that the codon and anticodon pair antiparallel, so reading the codon 5′ to 3′ runs against reading the anticodon 5′ to 3′, and the first codon position meets the third anticodon position rather than the first. The statement has the two ends swapped. Everything else about wobble follows from getting this right: it is the third codon position that tolerates a mismatch, which is exactly why alternative codons for the same amino acid so often differ only in their third nucleotide, and why an inosine at anticodon position 1 lets one tRNA read several codons.
Tags: problems, trna, genetic-code

---

Q: True or false? During protein synthesis, the thermodynamics of base-pairing between tRNAs and mRNAs sets the upper limit for the accuracy with which proteins are made.
A: False, and this is the chapter's central theme stated as a trap. A correct codon-anticodon match is only about 10 to 100 times more stable than an incorrect one, which would give an error rate far worse than the observed one mistake in $10^4$ amino acids. The extra accuracy comes from mechanisms that are not thermodynamic discriminations at all: induced fit, where the 16S rRNA folds around the pair and only completes the folding, and so only permits GTP hydrolysis, if the match is correct; and kinetic proofreading, where the irreversible GTP hydrolysis starts a time delay during which a weaker, incorrect pairing is more likely to fall apart. Both are paid for in free energy, which is what buys the accuracy that thermodynamic stability alone cannot.
Tags: problems, fidelity, translation

---

Q: True or false? Protein enzymes greatly outnumber ribozymes in modern cells because they can catalyze a much greater variety of reactions, and all of them have faster rates than any ribozyme.
A: False, though only the second half is wrong. The variety claim is reasonable: 20 amino acids with varied side chains offer far more binding and catalytic strategies than four chemically similar nucleotides, and experiments show RNA has particular difficulty binding flexible hydrophobic substrates and forming pockets specific for small molecules. But the rate claim is simply not true. Ribozymes selected in vitro achieve rate enhancements only a few orders of magnitude below the fastest protein enzymes, which overlaps the range of ordinary protein enzymes comfortably. The chapter is explicit that it is *not* clear why protein catalysts so greatly outnumber ribozymes, so a confident single-cause answer is the error being tested.
Tags: problems, catalysis, origins

---

Q: An RNA polymerase is fixed to a glass slide and transcribes a DNA whose far end carries a magnetic bead. As the DNA is drawn through the polymerase, which way does the bead turn?
![RNA polymerase attached to a glass slide transcribing a DNA tethered to a magnetic bead carrying fluorescent marker beads, held upright by a magnet](assets/img/fig-q6-01.png)
A: Clockwise, viewed from above, looking down the DNA towards the polymerase. The reasoning matters more than the word. DNA is a right-handed helix with about 10 nucleotide pairs per turn, and a polymerase tracking along the template must follow that helical path, so one full turn of relative rotation is required for every 10 base pairs transcribed. Normally the polymerase would be the thing that spins; here it is bolted to the slide, so the DNA has to spin instead. Treat the DNA as a right-handed screw and the fixed polymerase as the nut: as the DNA is drawn downward through it, a right-handed screw advancing away from the viewer must turn clockwise from the viewer's side. The answer is meaningless without stating the direction you are looking from, which is the point of the fluorescent beads, since they are what make the sense of rotation visible at all.
Tags: problems, transcription, structure

---

Q: Given the supercoils in the figure, which way along the template is the RNA polymerase moving? Would supercoils form at all if the polymerase were free to rotate?
![A DNA anchored at both ends with two positive supercoils on the left, the polymerase in the middle, and two negative supercoils on the right](assets/img/fig-q6-02.png)
A: To the left, towards the positive supercoils. A polymerase that cannot rotate pushes helical turns ahead of itself and leaves a deficit behind, so positive supercoils accumulate in front and negative supercoils behind; the positives here are on the left, so that is the direction of travel. And no, supercoils would not form if the polymerase could rotate freely about the DNA axis: it would simply screw its way along the helix, taking up the required rotation itself, and the DNA would be left untwisted. That is why the constraint matters in real cells rather than being a laboratory artefact: the polymerase carries a growing RNA transcript, and in bacteria ribosomes translating that transcript as well, so spinning the whole assembly around the DNA thousands of times is not a realistic option. The other requirement is visible in the figure, that both DNA ends are anchored, since a free end would act as a swivel.
Tags: problems, transcription, topoisomerases

---

Q: Exons 2 and 3 of the human α-tropomyosin gene are alternative exons. Must they have the same length, an integral number of codons each, or the same remainder when divided by 3?
![The human α-tropomyosin gene with alternative exons marked in red, and four splice variants each using exactly one of exons 2 and 3 and exactly one of exons 7 and 8](assets/img/fig-q6-03.png)
A: The same remainder when divided by 3, which is the weakest of the three statements and therefore the accurate one. Exons 2 and 3 are mutually exclusive: every one of the four variants contains exactly one of them, and every variant also contains exons 1 and 10, so whichever is chosen, the reading frame established in exon 1 must continue correctly into everything downstream. That requires only that the two alternatives shift the frame by the same amount, which is to say that their lengths leave the same remainder modulo 3. They need not be the same length, and neither needs to be a whole number of codons, provided both are wrong by the same amount. The same answer applies to exons 7 and 8, which the figure shows are used in exactly the same mutually exclusive way.
Tags: problems, splicing, genetic-code

---

Q+: When would the stricter condition, an integral number of codons, actually be required?
A: For a cassette exon, one that is either included or skipped entirely rather than swapped for a partner. Such an exon has to be invisible to the reading frame in both states, and the only way to be invisible when absent is to contain a whole number of codons, so that removing it removes complete codons and leaves the downstream frame untouched. The general rule is worth extracting: what a reading frame cares about is the *difference* between the two alternatives, so a mutually exclusive pair must match each other modulo 3, while a skippable exon must match zero modulo 3. Note also that this reasoning constrains only length, not sequence, which is why alternative exons can encode quite different stretches of protein.
Tags: problems, splicing, genetic-code

---

Q: A site in a protein normally carries valine. Mutagenesis gives alanine in one mutant and methionine in another, and a second round converts each of those to threonine. Which codons are in use, and could valine have become threonine in one step?
![Valine changing to alanine or methionine in a first round of mutagenesis, and both changing to threonine in a second round](assets/img/fig-q6-04.png)
A: Valine is GUG, alanine GCG, methionine AUG and threonine ACG. Methionine fixes the answer immediately, because AUG is its only codon, and reaching it from a valine codon by one change forces valine to be GUG, differing at position 1. Alanine from GUG by one change gives GCG, differing at position 2. Now check that both routes reach the same threonine codon: AUG to ACG changes position 2, and GCG to ACG changes position 1, and both give ACG, which is a legitimate threonine codon. The four codons are consistent with every observed step.

No, valine could not have become threonine in one step: GUG to ACG requires changes at both position 1 and position 2, and single-nucleotide changes cannot do that. The pattern in the figure is therefore not an accident of which mutants were picked, it is forced by the code, which is why the intermediate had to be either alanine or methionine.
Tags: problems, genetic-code

---

Q: Which of these mutations would you expect to damage gene function most, and why?
- [ ] Insertion of a single nucleotide near the end of the coding sequence
- [x] Removal of a single nucleotide near the beginning of the coding sequence
- [ ] Deletion of three consecutive nucleotides in the middle of the coding sequence
- [ ] Substitution of one nucleotide for another in the middle of the coding sequence
A: Removing one nucleotide near the beginning. It shifts the reading frame, so essentially the entire protein downstream is translated as a different amino acid sequence, and a premature stop codon will almost certainly appear within a few dozen codons by chance, so the product is both wrong and truncated, and the transcript will very likely be destroyed by nonsense-mediated decay as well. Insertion near the *end* is also a frameshift but corrupts only a short C-terminal stretch, so much of the protein may still work. Deleting three consecutive nucleotides stays in frame and removes a single amino acid, which is often tolerated. A substitution changes at most one amino acid, and may be silent. The ranking is really about how much of the protein each change affects, which is why position matters as much as the type of lesion.
Tags: problems, genetic-code, translation

---

Q: Both prokaryotes and eukaryotes guard against translating broken mRNAs. What danger does a partial mRNA actually pose?
A: Two dangers, one from the protein produced and one from the machinery consumed. The protein is the greater worry: a truncated polypeptide can fold partially and still bind its normal partners, so instead of being merely useless it can act as a poison, occupying a place in a complex that it cannot do the job of, or exposing hydrophobic surface and seeding aggregates. This is why a truncated product can be worse than no product, and why nonsense-mediated decay improves the symptoms of people carrying one mutant and one working copy of a gene. The second danger is mechanical: an mRNA broken so that it lacks an in-frame stop codon gives a ribosome nothing to terminate on, so the ribosome translates to the 3′ end and simply stops there, still bound, and the ribosomes behind it pile into it. Every ribosome stalled that way is withdrawn from service, along with the resources spent making it.
Tags: problems, quality-control, translation

---

Q: hsp60-like and hsp70 chaperones both use exposed hydrophobic patches as their signal. Why is that such a good indicator of folding status?
A: Because a hydrophobic patch on the surface is, almost by definition, a structure that has not finished folding. Folding in an aqueous cell is driven largely by burying hydrophobic side chains in an interior core, so a correctly folded soluble protein has them on the inside and hydrophilic residues facing the water. A patch still exposed therefore means one of three things: the protein has not yet been made in full, it has folded wrongly, or it was correct and has since been damaged. All three are cases where a chaperone should intervene. The deeper reason the signal is well chosen is that it is not merely correlated with the problem, it *is* the problem: exposed hydrophobic surface is exactly what makes two molecules stick to each other and aggregate irreversibly. Recognizing it means the chaperone binds the very feature that would otherwise do the damage, which is also why the same signal is used later to condemn a protein to the proteasome.
Tags: problems, chaperones, folding

---

Q: If most proteins need chaperones to fold correctly, how do the chaperones themselves fold?
A: The question exposes a regress that has to stop somewhere, and it stops in two ways. Some proteins do fold unassisted, as Anfinsen showed for ribonuclease, and chaperones will be among them; small single-domain proteins with a well-funnelled folding landscape reach their native state without help, and there would be strong selection for the folding machinery to be of that kind. Beyond that, the regress is not vicious because chaperones can fold each other: hsp70 acts on newly emerging chains generally, chaperonins included, and chaperones work as a collaborative network in which a difficult substrate is passed from hsp70 to hsp90 or to a chaperonin. What cannot happen is a chaperone that depends only on itself, so at the base there must be proteins whose sequences make them reliable folders on their own.
Tags: problems, chaperones, folding

---

Q: An RNA folds into a hairpin with a symmetric internal loop. Could its complement fold into a similar structure, and would any part be identical?
![An RNA hairpin with the stems GCA paired to UGC and CCG paired to GGC, separated by a symmetric internal loop of CU against AC](assets/img/fig-q6-05.png)
A: Yes, and the base-paired stems come out identical. Writing the molecule as a single strand gives 5′-GCACUCCGUCGGCAUGC-3′, and its reverse complement is 5′-GCAUGCCGACGGAGUGC-3′. Fold the second one the same way: its first three nucleotides GCA pair with its last three UGC, and further in, CCG pairs with GGC, leaving a two-by-two internal loop between the stems and a single unpaired nucleotide at the turn. Both stems are exactly the sequences found in the original.

That is not a coincidence. A stem is two segments that are reverse complements of each other, so taking the reverse complement of the whole molecule maps each segment of a stem onto its former partner and leaves the duplex unchanged. What does differ is everything unpaired: reading both strands of the loop 5′ to 3′, the original has CU opposite CA while the complement has UG opposite AG, and the nucleotide at the turn changes from U to A. Base-paired regions are conserved by complementation and loops are not, which is why a conserved secondary structure can be shared by two RNAs whose loop sequences look nothing alike.
Tags: problems, structure, origins

---

Q: What is so special about RNA that it is proposed as the evolutionary precursor of DNA and protein, and what makes DNA the better archive?
A: RNA is the only present-day biological molecule that does both jobs at once. It carries information in a nucleotide sequence and can be copied by complementary base-pairing, and because it is single-stranded it folds into a defined three-dimensional structure determined by that sequence, which lets it present an active site and catalyse reactions. A system built on RNA therefore escapes the paradox that nucleic acids are needed to make proteins and proteins are needed to make nucleic acids.

DNA is better for storage on three counts, all about stability and repair rather than information capacity. Deoxyribose lacks the 2′ hydroxyl, which makes the backbone chemically more stable, so much longer molecules can be maintained without breaking. Being double-helical means every sequence exists in two complementary copies, so damage to one strand can be repaired by reference to the other. And using thymine instead of uracil means that any uracil found in DNA is unambiguously damage, most often from spontaneous deamination of cytosine, and can be excised; if uracil were a normal DNA base that damage would be invisible.
Tags: problems, origins, dna-structure

---

Q: A single RNA molecule with a catalytic site for RNA replication assembles by chance in a warm pond, with plenty of nucleotides available. Can it replicate itself?
A: No, for two reasons that are worth separating. The first is geometric: to act as a catalyst the molecule must be folded into its active conformation, while to act as a template it must be extended and its bases exposed for pairing. One molecule cannot be both at once, so a replicase needs a *separate* molecule to copy, and here there is only one.

The second is more fundamental and survives even if you imagine the folding problem away. Copying a template does not produce a copy of it, it produces its complement. Regenerating the original sequence takes a second round of copying using that complement as template, so the minimum self-sustaining unit is a pair of complementary strands cycling, not a single molecule. This is why laboratory work on the problem builds systems of two or more RNAs, and why the achievement of Joyce's polymerase ribozyme is framed as synthesizing its ancestor in fragments rather than as replicating itself.
Tags: problems, origins, catalysis
