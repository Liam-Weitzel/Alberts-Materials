---
title: Session 4. From DNA to Protein, part I
description: Open exam questions for Fabio Catalano's lecture, including the course's own sample question on the ovalbumin gene, with model answers.
tags: [molmed, session-4, ch6, exam]
---

Q: **Official sample question 1.** The intron-exon structure of eukaryotic genes came as a shock. In the early, skeptical days, the most convincing demonstration was visual, as shown, for example, by the electron micrograph below (left panel). This image was obtained by hybridizing ovalbumin mRNA to a long segment of DNA that contains the gene. To those used to looking at single- and double-stranded nucleic acids in the electron microscope, the structure was clear: a set of single-stranded tails and loops emanating from a central duplex segment whose ends corresponded to the ends of the mRNA (below, right panel). To the extent possible, describe the intron-exon structure of this gene.

![Electron micrograph (left) of ovalbumin mRNA hybridised to a DNA segment containing its gene, and its interpretation (right): a central duplex running from the 5′ end to the 3′ end of the mRNA, with single-stranded loops and tails emanating from it; scale bar 200 nucleotides](assets/img/exam-sample-q1.png)
A: **In brief:** The duplex is where the mRNA pairs with the gene: the **exons**. Each **single-stranded loop** is DNA with no partner in the mRNA: an **intron**. The tails are flanking DNA. **Seven loops, so seven introns and eight exons**; the exons are short and the introns larger, so the gene is several times longer than its mRNA. Only number, order and approximate sizes can be read.

**How to read the image.** The mRNA can only base-pair with the parts of the gene that are **present in the mRNA**, the **exons**. Those regions form the **RNA–DNA duplex** (the thick central line). **Introns** were transcribed into the pre-mRNA but **spliced out**, so the mature mRNA has no sequence to pair with them: each intron is left as a **single-stranded DNA loop** between two paired exons. The **tails** at either end are single-stranded DNA **flanking the gene** (sequence beyond the transcribed region), which also has no partner in the mRNA; the duplex begins and ends where the mRNA begins and ends.

**The structure.**
- There are **seven loops**, so the gene has **seven introns**.
- Seven introns separate **eight exons**: the first exon at the 5′ end of the duplex, the last at the 3′ end, and six in between. The exons are the short duplex segments between the points where loops emerge.
- Judged against the **200-nucleotide scale bar**, the exons are **short** (of the order of 100 to 200 nucleotides), while the loops vary widely in size, from a few hundred to well over a thousand nucleotides. Most of the gene is therefore **intron**: the gene is several times longer than the mRNA it encodes.

**The limits ("to the extent possible").**
- Only the **number, order and approximate sizes** can be read. The micrograph gives no sequence, so exact exon-intron boundaries cannot be placed, and which parts of the exons are coding versus untranslated cannot be told.
- A very **short intron** would give a loop too small to see, and a very **short exon** might not hold two loops apart, so the counts are a minimum.
- A small single-stranded tail at the 3′ end may also include the **poly-A tail** of the mRNA, which is added after transcription and so has no counterpart in the DNA.

**Where marks are lost:** identifying the loops as exons (they are the parts *not* in the mRNA), or forgetting that n introns means n+1 exons.

Read more: [Splicing](#/chapter/ch06-how-cells-read-the-genome/splicing)
Tags: official, qa, splicing, type/figure

---

Q: The C-terminal domain (CTD) of the largest subunit of RNA polymerase II consists of many tandem repeats of the sequence YSPTSPS. During transcription, serine 5 and serine 2 of these repeats are phosphorylated in turn.

**a)** Describe when each serine is phosphorylated and what each phosphorylation recruits.

**b)** A cell line is treated with a drug that inhibits the kinase activity of TFIIH. Predict the consequences for the transcripts made by RNA polymerase II.

**c)** Why is it an advantage for the cell to carry out RNA processing on the CTD of the polymerase rather than after the transcript has been released?
A: **In brief:** **Ser5-P** (by TFIIH, at initiation) recruits the **capping** enzymes; **Ser2-P** (during elongation) recruits **splicing** and **3′-end processing** factors. Blocking TFIIH's kinase impairs promoter escape and leaves transcripts **uncapped** (unstable, poorly processed and translated). The CTD brings the enzymes to the RNA as it emerges, so processing is **co-transcriptional** and in order.

**a)** **Ser5** is phosphorylated at **initiation**, by the kinase of **TFIIH** at the promoter; Ser5-P recruits the **capping enzymes**, so the 5′ cap is added when the transcript is only about 25 nucleotides long. As the polymerase moves along the gene, Ser5-P declines and **Ser2** phosphorylation rises (**elongation**); Ser2-P recruits the **splicing** machinery and the **3′-end processing** factors (CPSF, CstF, cleavage factors, poly-A polymerase). The phosphorylation pattern of the tail therefore encodes where the polymerase is on the gene.

**b)** Without Ser5 phosphorylation, the polymerase does not switch efficiently from initiation to elongation (**promoter escape** is impaired) and the **capping enzymes are not recruited**. Transcripts that are made would be **uncapped**: unprotected from 5′→3′ exonucleases, poorly spliced at the first intron, not exported efficiently, and not recognised by eIF4E for translation. Downstream processing (splicing, polyadenylation), which depends on the CTD code, would also be disturbed. (TFIIH's helicase, which opens the DNA, is a separate activity.)

**c)** The CTD is a **moving platform** that brings the processing enzymes to the RNA **as it emerges**, so capping, splicing and polyadenylation happen **co-transcriptionally**, at high local concentration and in the right order. The 5′ end is capped and protected almost immediately; introns can be removed while the rest of the gene is still being made; and the cell couples processing to transcription, so that only properly processed transcripts become export-ready.

Read more: [The pre-initiation complex and the CTD](#/chapter/ch06-how-cells-read-the-genome/the-pre-initiation-complex-and-the-ctd)
Tags: transcription, processing, type/apply

---

Q: Splicing removes introns from pre-mRNA in two transesterification reactions carried out by the spliceosome.

**a)** Describe the two chemical steps of splicing, naming the nucleophile in each. Why is the excised intron a lariat?

**b)** The chemistry of splicing does not require energy, yet the spliceosome consumes a lot of ATP. What is the ATP used for?

**c)** A patient carries a point mutation that changes the **GU** at the start of intron 4 of a gene into AU. Predict two possible consequences for the mRNA.

**d)** Human introns can be tens of thousands of nucleotides long, while exons are short and uniform in size. How does the cell find the splice sites? Explain exon definition.
A: **In brief:** The **branch-point A's 2′-OH** attacks the 5′ splice site (forming the **lariat**), then the freed **3′-OH of exon 1** attacks the 3′ splice site. ATP pays for **snRNP rearrangements** that check the sites, not for the chemistry. A GU→AU mutation causes **exon skipping**, **intron retention** or use of a **cryptic site**. Cells find splice sites by **exon definition**: SR proteins mark the short exons.

**a)** (1) The **2′-OH of the branch-point adenine** attacks the phosphate at the **5′ splice site**. The 5′ end of the intron is cut and joined to that adenine by a **2′,5′ phosphodiester bond**, forming a branched loop (the **lariat**), and exon 1 is left with a free **3′-OH**. (2) That **3′-OH of exon 1** attacks the **3′ splice site**, joining the two exons with a normal phosphodiester bond and **releasing the intron as a lariat**. The lariat shape comes from the 2′,5′ branch made in the first step.

**b)** For **accuracy and resetting**, not for the chemistry. Each step (a phosphodiester bond exchanged for another) is energetically neutral. ATP drives the **rearrangements** of the snRNPs: U2 displacing BBP/U2AF and binding the branch point, **U4/U6 unwinding**, **U6 replacing U1** at the 5′ splice site. Each rearrangement is a chance to **check** that the right sites have been chosen. ATP is also used to release the products and **recycle the snRNPs**.

**c)** The 5′ splice site is no longer recognised by **U1 snRNP**. Possible outcomes: **exon skipping** (exon 4 is spliced out together with introns 3 and 4, because the spliceosome joins exon 3 to exon 5); **intron retention** (intron 4 is left in the mRNA); or use of a nearby **cryptic 5′ splice site**, adding or removing part of the exon. Each is likely to shift the reading frame or introduce a **premature stop codon**, which can lead to degradation of the mRNA by nonsense-mediated decay or a truncated protein.

**d)** Splice-site signals are **short and degenerate**, so scanning for a huge intron would be hopeless. Instead the cell recognises the **exon**, which is short and has a narrow size range. In **exon definition**, **SR proteins** bind along each exon and recruit **U1** to the 5′ splice site downstream and **U2AF** to the 3′ splice site upstream, marking the exon as a unit. **hnRNP** proteins coat the introns. The cap-binding complex marks the first exon and poly-A-binding proteins the last.

Read more: [The chemistry: two transesterifications](#/chapter/ch06-how-cells-read-the-genome/the-chemistry-two-transesterifications)
Tags: splicing, core

---

Q: Compare transcription in *E. coli* and in human cells.

**a)** How does the RNA polymerase find the start of a gene in each case?

**b)** A bacterial promoter consists of two consensus sequences, at −35 and −10, which are not palindromic. Why is this asymmetry essential?

**c)** How is transcription terminated in bacteria, and how is the 3′ end of an mRNA made in humans?

**d)** A mutation changes the AAUAAA sequence of a human gene to AAGAAA. What would you expect to happen to its mRNA?
A: **In brief:** Bacteria: **σ** reads the promoter directly. Humans: **general transcription factors** (TFIID/TBP first) assemble the pre-initiation complex with Pol II. An **asymmetric** promoter fixes orientation and template strand. Termination: a **hairpin** in bacteria; **CPSF/CstF cleavage and polyadenylation** in humans. AAUAAA→AAGAAA blocks polyadenylation: an **unstable, poorly exported and translated** mRNA.

**a)** **Bacteria** have **one RNA polymerase**; its **σ factor** joins the core enzyme to form the **holoenzyme**, which slides along DNA and recognises the promoter directly, opens the helix and starts transcription. **Humans** have **three nuclear RNA polymerases** (Pol II for protein-coding genes). Pol II cannot recognise a promoter alone: the **general transcription factors** assemble first, starting with **TFIID** (its TBP subunit binds and **bends** the TATA box, other parts bind INR and DPE; TFIIB binds BRE), followed by Pol II with TFIIF, TFIIE and **TFIIH**, which opens the DNA (helicase) and phosphorylates the CTD. Activators at enhancers, **Mediator** and chromatin-modifying complexes are also needed for initiation in the context of chromatin.

**b)** Because the promoter is not symmetric, **σ can only bind it one way round**. The orientation of the bound polymerase decides **which strand is used as template** and therefore **which direction** transcription goes. A palindromic promoter would give no information about direction.

**c)** **Bacteria:** the terminator, once transcribed, forms a **GC-rich hairpin** in the RNA followed by a run of **U**s; the hairpin destabilises the RNA-DNA hybrid and pulls the RNA out of the polymerase. **Humans:** no hairpin. The Ser2-phosphorylated CTD carries the 3′-end factors: **CPSF** binds **AAUAAA**, **CstF** binds a downstream **GU/U-rich** element, the RNA is **cleaved** (at a CA, by cleavage factors) and **poly-A polymerase** adds about 200 A's without a template. The downstream RNA, still attached to Pol II, is degraded by an exonuclease that chases and releases the polymerase.

**d)** **CPSF** no longer recognises the polyadenylation signal, so the RNA is **not cleaved and polyadenylated** at the normal site (or a weaker, alternative site is used). Without a poly-A tail the mRNA is **unstable**, **poorly exported** and **poorly translated** (the poly-A tail binds PABP, which interacts with eIF4G), so little protein is made.

Read more: [Transcription in prokaryotes](#/chapter/ch06-how-cells-read-the-genome/transcription-in-prokaryotes)
Tags: transcription, type/discriminate

---

Q: In the late 1950s it was known that proteins are made on ribosomes, but not how the information in a gene reaches them. One hypothesis was that each ribosome carries the information for one particular protein in its own RNA; the other was that ribosomes are general-purpose machines programmed by a short-lived "messenger" RNA.

Brenner, Jacob and Meselson grew *E. coli* in medium containing heavy isotopes, so that all ribosomes were "heavy". They then infected the bacteria with a bacteriophage, which switches the cell to making phage proteins, and **at the same moment** transferred them to light medium. They then separated ribosomes by density and looked for newly made, phage-specific RNA.

**a)** What would each hypothesis predict about where the phage-specific RNA and the phage proteins are made?

**b)** They found newly made (light) phage RNA associated with the **old, heavy ribosomes**. Which hypothesis does this support, and why?

**c)** Give two properties that a "messenger" molecule should have, and how RNA fulfils them.
A: **In brief:** Specialised ribosomes would require **new, light ribosomes**; the messenger model predicts new RNA on **old, heavy ribosomes**, and that is what was found. So ribosomes are **general-purpose** and a short-lived **mRNA** carries the information. A messenger's amount should track protein synthesis, its sequence should match the gene, and it should be short-lived.

**a)** **Specialised ribosomes:** to make phage proteins the cell would need **new ribosomes** carrying phage information; these would be made after the shift and would be **light**, and phage RNA would be found in new light ribosomes. **Messenger hypothesis:** the **existing (heavy) ribosomes** would be reused; new phage RNA (light) would associate with **pre-existing heavy ribosomes** and direct them to make phage proteins.

**b)** The **messenger hypothesis**. No new ribosomes were needed to make new proteins: the old ribosomes were simply loaded with a newly made RNA copied from the phage DNA. Ribosomes are therefore **general-purpose machines**, and the specificity is supplied by a **short-lived RNA intermediate**, the mRNA.

**c)** (1) **Its amount should be quantitatively coupled to protein synthesis**: an increase in the protein should go with an increase in the messenger. Phage infection caused a sharp rise in RNA synthesis at the same moment as phage protein synthesis began (Volkin and Astrachan). (2) **Its sequence should reflect the gene it comes from**: the new RNA's base composition resembled the **phage DNA**, not the host's. (3) It should be **short-lived**, so that protein synthesis can change quickly; mRNA is degraded and replaced.

Read more: [How RNA was shown to be the messenger](#/chapter/ch06-how-cells-read-the-genome/how-rna-was-shown-to-be-the-messenger)
Tags: history, type/apply

---

Q: An mRNA vaccine consists of a synthetic mRNA with a 5′ cap, a 5′ UTR, an open reading frame encoding the antigen, a 3′ UTR and a poly-A tail. Each part is a design variable.

**a)** Why does the synthetic mRNA need a cap, and why does it matter whether this is a cap-0 or a cap-1 structure?

**b)** Two versions of the vaccine encode exactly the same protein but use different synonymous codons. Explain why they can produce very different amounts of protein.

**c)** Uridines in the vaccine mRNA are replaced by **pseudouridine (Ψ)**. Give two reasons why this is beneficial, and explain where cells use this modification themselves.
A: **In brief:** The **cap** protects the 5′ end and recruits **eIF4E**; **cap-1** (2′-O-methylated) marks the RNA as **self**, avoiding innate immune detection. Synonymous **codons** change translation efficiency and mRNA **structure and half-life**. **Pseudouridine** stabilises the mRNA and dampens immune sensing; cells put Ψ in their own rRNA.

**a)** The cap (7-methylguanosine joined **5′-to-5′** by a triphosphate bridge) **protects the 5′ end** from exonucleases and is recognised by **eIF4E**, which recruits the ribosome, so without it the mRNA is unstable and poorly translated. **Cap-1** has an extra **2′-O-methylation** on the first transcribed nucleotide. This is a marker of **"self"**: innate immune sensors treat RNA lacking it as foreign (viral) and trigger an inflammatory response that shuts down translation. A cap-1 structure lets the vaccine mRNA be translated without being recognised as foreign.

**b)** Synonymous codons are **not used equally**, and changing them changes (1) the **efficiency of translation** (and so the total protein output), and (2) the **secondary structure** of the mRNA, because the coding sequence also base-pairs with itself. More stable structures alter the **half-life** of the mRNA and how well ribosomes load onto it. The UTRs similarly change half-life and ribosome load.

**c)** Ψ **increases stability** of the mRNA (longer half-life, adding to the structural effect) and **reduces recognition by the innate immune system**, so the mRNA is translated rather than triggering inflammation. Cells themselves **isomerise uridine to pseudouridine** in their own RNAs, particularly in **rRNA** (guided by snoRNAs in the nucleolus), which is part of how self RNA is distinguished from foreign RNA.

Read more: [Practical example: designing an mRNA vaccine](#/chapter/ch06-how-cells-read-the-genome/practical-example-designing-an-mrna-vaccine)
Tags: mrna-vaccine, clinical, processing

---

Q: MicroRNAs (miRNAs) and small interfering RNAs (siRNAs) are both around 22 nucleotides long and both act through Argonaute proteins.

**a)** Describe how a miRNA is produced, from its primary transcript to the active RISC complex, including where each step takes place.

**b)** A miRNA that pairs perfectly with its target and one that pairs only partially have different effects. Explain.

**c)** siRNAs can be loaded into RISC or into RITS. What does each complex do?
A: **In brief:** Pol II makes a capped, polyadenylated **pri-miRNA**; **Drosha** crops the hairpin in the nucleus, **exportin 5** exports it, **Dicer** cuts it in the cytosol, and one strand loads into **Argonaute (RISC)**. Perfect pairing: **slicing**; partial pairing: **translational repression** and decay. siRNAs in **RISC** destroy mRNA; in **RITS** they direct **heterochromatin** at the gene.

**a)** miRNA genes are transcribed by **RNA polymerase II**, so the primary transcript (pri-miRNA) is **capped and polyadenylated**, and it folds into **hairpins**. In the **nucleus**, **Drosha** cuts the hairpin out ("cropping"). The pre-miRNA is exported by **exportin 5**. In the **cytosol**, **Dicer** removes the loop ("dicing"), leaving a ~22-nucleotide duplex. One strand is loaded into **Argonaute** to form **RISC**; the other strand is discarded.

**b)** **Extensive pairing**: Argonaute **cleaves ("slices")** the target mRNA, which is rapidly degraded, and RISC is released to act on another target (dominant in plants). **Partial pairing** (typically in the 3′ UTR): **translational repression**, the mRNA is moved to P-bodies, **deadenylated** and eventually degraded (dominant in animals). Because only partial pairing is needed, one miRNA can regulate **hundreds of targets**.

**c)** siRNAs are made by **Dicer** from **double-stranded RNA** (viral, transposon or experimental). In **RISC** they act post-transcriptionally, cleaving or repressing the target mRNA. In **RITS** (RNA-induced transcriptional silencing) they act in the **nucleus**: the siRNA pairs with the **nascent transcript** at the gene, and RITS recruits **histone methylation and DNA methylation**, producing **heterochromatin** and transcriptional silencing.

Read more: [Regulation of gene expression by non-coding RNAs](#/chapter/ch06-how-cells-read-the-genome/regulation-of-gene-expression-by-non-coding-rnas)
Tags: ncrna
