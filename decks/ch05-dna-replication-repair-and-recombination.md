---
title: Ch 5. DNA Replication, Repair, and Recombination
description: How cells copy their DNA almost perfectly, repair the damage that happens anyway, and still allow the sequence to change.
tags: [mboc, ch5]
---

Q: The chapter opens by setting two requirements against each other: short-term survival and long-term survival. What is the tension?
A: The short-term survival of a cell depends on preventing harmful changes in its DNA, so everything in the first two-thirds of the chapter is machinery for stopping the sequence from changing. But the long-term survival of a species requires that those same sequences be changeable over many generations, because without variation there is nothing for natural selection to act on and no adaptation to changing circumstances. The resolution the chapter offers is not a compromise but an accident that turns out to be useful: despite the great efforts cells make to protect their DNA, occasional changes are unavoidable, and those unavoidable failures supply the genetic variation evolution runs on. The last part of the chapter then describes pathways that alter DNA sequences deliberately, which is a different thing again.
Tags: core

---

Q: What is a **mutation**, and how is the **mutation rate** measured in *E. coli*?
A: A mutation is a permanent change in the DNA, produced on the rare occasions when the cell's DNA-maintenance processes fail. The mutation rate is the rate at which such changes occur, and in *E. coli* it can be measured directly because the organism divides about once every 30 minutes, so a single cell generates several billion descendants in less than a day. Within such a population you look for the small fraction that have lost a gene needed to use lactose: grow the cells on a different sugar such as glucose, then test them for the ability to survive on lactose. The fraction of damaged genes underestimates the true rate, because many mutations are silent, changing a codon without changing the amino acid, or changing the amino acid without affecting the protein's activity. Correcting for those gives about three nucleotide changes per $10^{10}$ nucleotides copied.
Tags: replication, fidelity, model-organisms

---

Q+: How is the equivalent number measured in humans, and does it come out anywhere near the bacterial one?
A: You sequence the complete genomes of a family, parents and offspring together, and count what is new in the child. Roughly 70 new single-nucleotide mutations arise in the germ line of each offspring, which normalized to the genome is one nucleotide change per $10^8$ nucleotides per human generation. That is a slight underestimate, since lethal germ-line mutations never appear in a surviving child, though because relatively little of the human genome carries critical information this barely matters. The comparison with bacteria only works once you divide out generation length: about 100 cell divisions separate conception from the eggs and sperm that make the next generation, which converts the figure to one change per $10^{10}$ nucleotides copied. *E. coli* and humans differ enormously in how they reproduce and how long a generation lasts, yet per round of DNA replication their mutation rates sit within a factor of 3 of each other.
Tags: replication, fidelity, human-genome

---

Q: Alberts argues that the low mutation rate is not merely nice to have but sets a ceiling on how complex an organism can be. What is the argument?
A: Because most mutations that do anything are deleterious, the number of essential genes an organism can rely on is limited by the chance that at least one of them is damaged. At the observed mutation frequency, that ceiling is thought to be around 30,000 essential genes; go beyond it and the probability that some critical component is broken becomes catastrophically high. Run the same argument with a mutation frequency ten times higher and the ceiling drops to about 3000 essential genes, which would have confined evolution to organisms considerably less complex than a fruit fly. So the accuracy of replication is not a housekeeping detail but one of the constraints that decided how elaborate life on Earth could become.
Tags: replication, fidelity, evolution

---

Q: Why do the **somatic cells** of a multicellular organism need protecting from mutation, given that they never pass their DNA to the next generation?
![Germ-line cells in red running from gamete through zygote to the next generation's gametes, with somatic cells in blue branching off to form the body](assets/img/fig-5-01.png)
A: Because a mutation in a somatic cell can produce a variant that proliferates rapidly at the expense of the rest of the organism, through what amounts to natural selection acting locally inside a body. The extreme form of that is cancer, which is due largely to accumulated changes in the DNA sequences of somatic cells. So an organism like us depends on high-fidelity replication twice over: germ-cell stability, to perpetuate a species carrying a large number of genes, and somatic-cell stability, to avoid cancer. Any significant rise in mutation frequency would presumably cause a disastrous rise in cancer incidence by accelerating the rate at which dangerous somatic variants appear.
Tags: replication, cancer

---

Q: What does the summary mean when it says the human genome is "unchanged or changed by only a few nucleotides" each time a typical cell divides?
A: It is the mutation rate of one nucleotide change per $10^{10}$ nucleotides replicated applied to a genome of about $3.1 \times 10^9$ nucleotide pairs. Multiply the two and you get roughly $0.3$ changes per haploid genome copied, so most divisions introduce no change at all and the occasional one introduces a single change. That is what makes it possible both to hand accurate genetic instructions to the next generation and, for most of us, to avoid the accumulation of somatic changes that leads to cancer.
Tags: replication, human-genome

---

Q: What is **DNA templating**, and what has to happen physically before it can work?
![The parent double helix separating into an S strand and an S-prime strand, each acting as a template for a new complementary strand](assets/img/fig-5-02.png)
A: DNA templating is the mechanism a cell uses to copy the nucleotide sequence of one DNA strand into a complementary sequence. It requires the helix to be separated into two template strands, because the hydrogen-bond donor and acceptor groups on each base are buried in the base pair and have to be exposed before a free nucleotide can recognize them. Once exposed, each incoming unpolymerized nucleotide base-pairs with the appropriate template base, which aligns it correctly for enzyme-catalyzed polymerization into the new chain. Since A pairs only with T and G only with C, each of the two strands specifies its partner completely, so both strands of a helix can be copied at once to give two exact copies of the original.
Tags: replication, core

---

Q: Nucleotides arrive at the growing DNA chain as **deoxyribonucleoside triphosphates**. Where does the energy for the polymerization step come from, and what is released?
![The chemistry of DNA synthesis, with an incoming deoxyribonucleoside triphosphate pairing with the template and pyrophosphate leaving as the bond forms](assets/img/fig-5-03.png)
A: From the incoming nucleotide itself, not from the chain. The energy comes from hydrolysis of a high-energy phosphate bond in the incoming nucleoside triphosphate, which releases pyrophosphate as the nucleoside monophosphate is joined on. That pyrophosphate is subsequently hydrolyzed to two molecules of inorganic phosphate, which pulls the whole reaction hard in the forward direction. The new bond forms between the 5′ triphosphate of the arriving nucleotide and the free 3′-hydroxyl at the end of the growing strand, so the chain necessarily grows in the 5′-to-3′ direction.
Tags: replication, enzymes

---

Q+: Where does DNA polymerase actually sit in that reaction, and what does it contribute beyond speed?
![DNA polymerase cradling the template and the growing strand, with the incoming nucleoside triphosphate being positioned in the active site](assets/img/fig-5-04.png)
A: The polymerase guides the incoming nucleoside triphosphate onto the template strand and positions it so that its 5′ triphosphate can react with the 3′-hydroxyl group on the newly synthesized strand. That positioning is the catalysis: the enzyme is holding two reactive groups in the right geometry rather than doing anything exotic to the chemistry. The first such enzyme was discovered in 1957, when the substrates were found to be deoxyribonucleoside triphosphates and the requirement for a single-strand DNA template was established.
Tags: replication, enzymes

---

Q: What does it mean to say DNA replication is **semiconservative**, and what is the alternative it rules out?
![Successive rounds of replication, each producing daughter helices made of one old strand and one new strand](assets/img/fig-5-05.png)
A: It means each daughter double helix is composed of one conserved old strand and one newly synthesized strand, so neither daughter is entirely new and neither is entirely old. Each of the two original strands serves as template for an entire new strand, and each daughter cell inherits one of the resulting hybrid helices. The alternative it rules out is conservative replication, in which the original helix would stay intact and an entirely new helix would be built alongside it, leaving one daughter cell with all-old DNA and the other with all-new.
Tags: replication, core

---

Q: What is a **replication fork**, and how was it first seen?
![Autoradiograph of a replicating circular E. coli chromosome, with the interpretation showing two replication forks](assets/img/fig-5-06.png)
A: A replication fork is the localized, Y-shaped region of replication that moves progressively along the parent double helix, spinning out newly replicated DNA behind it. The stem of the Y is the parent helix and the two arms hold the newly synthesized DNA. It was found in the early 1960s in analyses of the whole replicating chromosome of *E. coli*: the bacteria were fed radioactive thymine for several hours, the DNA was gently isolated onto filter paper, and a piece of photographic film was laid against it. The developed film carried an image of the DNA, and the picture showed a large circular molecule with two forks moving in opposite directions. At the fork, a multienzyme complex containing the DNA polymerase makes the DNA of both new daughter strands.
Tags: replication, model-organisms

---

Q: The simplest picture of a replication fork, with both new strands growing continuously as the fork advances, does not work. Why not?
A: Because the two strands of the double helix are antiparallel, so continuous growth of both would require one daughter strand to polymerize 5′-to-3′ and the other 3′-to-5′, and that would need two distinct kinds of DNA polymerase. No such pair exists: every DNA polymerase at a replication fork synthesizes only in the 5′-to-3′ direction. The problem is not that the geometry is impossible to imagine but that the enzyme to do half of it was never invented, which forces the whole backstitching solution that follows.
Tags: replication, core

---

Q: What are **Okazaki fragments**, and what experiment revealed them?
A: They are the short pieces of DNA in which the lagging strand is made before being joined up. In the late 1960s researchers added highly radioactive $^3$H-thymidine to dividing bacteria for a few seconds, so that only DNA made in that instant, meaning the DNA just behind the fork, was labeled. What they found were transient pieces 1000 to 2000 nucleotides long, later named after their discoverer. Similar intermediates were subsequently found in eukaryotes, where they are much shorter, only 100 to 200 nucleotides. They were shown to be synthesized only 5′-to-3′ and to be joined together after synthesis into long chains.
Tags: replication, core

---

Q+: Given the fragments, what are the **leading strand** and the **lagging strand**, and what is odd about the direction of lagging-strand synthesis?
![The asymmetric replication fork, with continuous leading-strand synthesis and discontinuous lagging-strand fragments at each of two forks](assets/img/fig-5-07.png)
A: The leading strand is the daughter strand synthesized continuously, and its synthesis slightly precedes that of the lagging strand, which is synthesized discontinuously. The oddity is that on the lagging strand the direction of nucleotide polymerization is opposite to the overall direction in which the chain grows: each fragment is laid down 5′-to-3′, away from the fork, but the series of fragments accumulates back toward the fork. The polymerase makes a short piece, stops, and is moved by its protein machine back toward the fork to start the next one. The whole point of that awkward backstitching is that it lets a single 5′-to-3′ polymerase copy both strands.
Tags: replication, core

---

Q: If base-pairing alone determined accuracy, replication would be far more error-prone than it is. What two things spoil the fidelity of pairing?
A: First, the standard complementary pairs are not the only ones possible: with small changes in helix geometry, two hydrogen bonds can form between G and T. Second, the four bases occasionally slip into rare alternative configurations called tautomers, transiently and in a ratio of about 1 part in $10^4$ to $10^5$. These forms mispair without any change in helix geometry at all, so the rare tautomeric form of C pairs happily with A instead of G. That second failure is the more insidious one, because there is no distortion for the enzyme to notice at the moment the pair forms. If the polymerase did nothing special about mispairing, the wrong nucleotide would often be incorporated and mutations would be frequent.
Tags: replication, fidelity

---

Q: DNA polymerase proofreads twice, once before the bond forms and once after. What is the first check?
A: After a nucleotide binds but before it is covalently added, the enzyme must undergo a conformational change in which its grip tightens around the active site. That change occurs more readily with correct base-pairing than incorrect, so it lets the polymerase double-check the exact base-pair geometry before committing to catalysis. Incorrectly paired nucleotides are therefore harder to add and more likely to diffuse away again before the enzyme mistakenly joins them on. It is a kinetic filter rather than an inspection: the wrong substrate is not rejected so much as given more time to leave.
Tags: replication, proofreading

---

Q+: And what is **exonucleolytic proofreading**, the second check?
![Successive steps in which a polymerase adds an incorrect nucleotide, removes it by proofreading, and resumes synthesis](assets/img/fig-5-08.png)
A: It is what happens immediately after the rare occasions when an incorrect nucleotide has actually been added. DNA polymerases will only elongate a previously formed, correctly base-paired 3′-OH primer end, so a mismatched nucleotide at that end stalls the enzyme. A separate catalytic site, either in a separate subunit or a separate domain depending on the polymerase, then acts as a 3′-to-5′ proofreading exonuclease: it clips off unpaired or mispaired residues at the primer terminus and keeps going until a correctly base-paired 3′-OH end has been regenerated. The polymerase is therefore self-correcting, removing its own errors as it travels.
Tags: replication, proofreading

---

Q+: The polymerase has two catalytic sites for this. How does the DNA get from one to the other?
![DNA polymerase shown in polymerizing mode and in editing mode, with the polymerization site P and the editing site E marked](assets/img/fig-5-09.png)
A: The newly synthesized strand transiently unpairs from the template near its end, and its 3′ end swings across into the editing site, which is a physically separate pocket from the polymerization site. The enzyme cradles the DNA throughout, so it is the DNA end that moves rather than the protein rearranging around it. Once the offending nucleotide has been removed and the end is correctly paired again, the end returns to the polymerization site and synthesis continues. The structures showing this were determined by x-ray crystallography of an *E. coli* DNA polymerase.
Tags: replication, proofreading

---

Q: Why can a self-correcting polymerase not start a DNA chain from scratch?
A: Because its self-correcting property depends on requiring a perfectly base-paired primer terminus before it will extend anything. An enzyme whose whole discipline is "refuse to work unless the 3′ end is correctly paired" cannot begin a chain, since at the beginning there is no 3′ end at all. The converse holds too, and the chapter uses it later: an enzyme that can start chains from nothing cannot be efficient at self-correction, which is why the primer that begins each Okazaki fragment is made inaccurately and then thrown away.
Tags: replication, proofreading

---

Q+: RNA polymerase does start chains without a primer, and is far less accurate. Why is the cell content with that?
A: Because errors in making RNA are not passed on to the next generation. An occasional defective RNA molecule has no long-term significance, since it is one of many transcripts and will be degraded anyway, whereas an error written into DNA is copied forever. On average about one mistake is made per $10^4$ polymerization events in RNA synthesis, and the same rate applies to translating mRNA into protein. That is over 100,000 times the error rate of DNA replication. So RNA polymerases were free to keep the ability to start new chains without a base-paired 3′-OH, which is precisely the ability a proofreading enzyme has to give up.
Tags: replication, fidelity

---

Q: Table 5-1 breaks the fidelity of DNA synthesis into three steps. What are they and what does each contribute?
A: Three steps multiply together to give the final accuracy.

| Step | Errors per nucleotide added |
| --- | --- |
| 5′→3′ polymerization | 1 in $10^5$ |
| 3′→5′ exonucleolytic proofreading | 1 in $10^2$ |
| Strand-directed mismatch repair | 1 in $10^3$ |
| Combined | 1 in $10^{10}$ |

The first figure is the probability that an incorrect nucleotide is added in the first place. The other two are the probability that an error, having been made, is *not* corrected, so each step reduces the chance of a final error by the factor shown. Multiplying $10^5 \times 10^2 \times 10^3$ gives $10^{10}$, which is the observed mutation rate for both bacteria and humans per round of replication.
Tags: replication, fidelity

---

Q: Why does DNA get replicated only in the 5′-to-3′ direction, when a 3′-to-5′ polymerase seems no harder to imagine?
A: Because a 3′-to-5′ polymerase could not proofread. In 5′-to-3′ synthesis the activating triphosphate is carried by the incoming nucleotide, so removing a wrongly added nucleotide simply leaves a 3′-OH end that is still fully competent to be extended. Reverse the direction and the growing 5′ end of the chain, rather than the incoming mononucleotide, would have to supply the activating triphosphate. Hydrolyzing away a mistake would then strip the chain of its triphosphate and leave a bare 5′ end, which would immediately terminate synthesis altogether. So a mismatched base can only be corrected if it sits at the 3′ end of a chain, and the elaborate backstitching of the lagging strand is the price of keeping every polymerase pointed the correcting way.
Tags: replication, proofreading

---

Q: What does **DNA primase** do, and how is it different from DNA polymerase?
![Primase joining two ribonucleotides on a DNA template and extending them into a short RNA primer](assets/img/fig-5-10.png)
A: Primase is an RNA polymerase that uses a DNA strand as a template to make the short RNA primers that DNA polymerase then extends. Like DNA polymerase it synthesizes 5′-to-3′, but unlike DNA polymerase it can start a new chain outright by joining together two nucleoside triphosphates, with no base-paired 3′ end needed as a starting point. It uses ribonucleoside triphosphates rather than deoxyribonucleoside triphosphates, and it is much less accurate. In eukaryotes the primers are about 10 nucleotides long, made at intervals of 100 to 200 nucleotides along the lagging strand. The leading strand needs a primer too, but only once, at the very beginning.
Tags: replication, enzymes

---

Q+: In eukaryotes an RNA primer is about {{10}} nucleotides long, primers are laid down at intervals of roughly {{200}} nucleotides, and bacterial Okazaki fragments are much longer at {{1000 to 2000}} nucleotides.
A: The eukaryotic interval is not a property of primase at all. It is set by the nucleosome: polymerase δ is stopped by the newly assembled nucleosome ahead of it, so the fragment ends where the next nucleosome begins, and about 200 nucleotides is the nucleosome repeat length. Bacteria have no nucleosomes for the polymerase to run into, which is why their fragments are five to ten times longer.
Tags: replication, chromatin

---

Q: Trace the whole sequence of enzymes that turns a stretch of lagging-strand template into finished, continuous DNA.
![RNA primer synthesis by primase, extension into an Okazaki fragment, removal of the previous primer, gap filling by repair polymerase and sealing by DNA ligase](assets/img/fig-5-11.png)
A: Primase lays down an RNA primer of about 10 nucleotides. DNA polymerase extends it to make an Okazaki fragment, and stops when it runs into the RNA primer at the 5′ end of the previous fragment. Nucleases that recognize the RNA strand of an RNA-DNA hybrid helix then destroy the primer, leaving a gap. An accurate repair DNA polymerase, one that proofreads as it goes, fills the gap in with DNA. Finally DNA ligase joins the 3′-hydroxyl end of one fragment to the 5′-phosphate end of the next, linking the sugar-phosphate backbones into one continuous chain.
Tags: replication, enzymes

---

Q+: Why use an *erasable* RNA primer rather than simply priming with DNA?
A: Because whatever primes the fragments has to be able to start chains from scratch, and by the argument above that means it cannot proofread, so it will make a relatively inaccurate copy. If those inaccurate stretches were left in place, one per Okazaki fragment across the whole genome, the overall mutation rate would rise enormously. Making the primer out of ribonucleotides marks it chemically as suspect copy: the ribonucleotides are a flag that lets a repair system find these sequences unambiguously, remove them, and have them rewritten by a highly accurate DNA polymerase. The choice of RNA is a labeling trick rather than anything to do with RNA chemistry being better suited to priming.
Tags: replication, fidelity

---

Q: **DNA ligase** seals the nick between Okazaki fragments. What does the reaction cost, and why does it cost anything at all?
![DNA ligase using ATP to activate the 5′ phosphate of one fragment before joining it to the 3′ hydroxyl of the next](assets/img/fig-5-12.png)
A: It costs one ATP. The ligase uses the ATP to activate the 5′ phosphate of one fragment in a first step, and only then forms the new bond with the 3′ hydroxyl of the other fragment in a second step. It costs energy because a nick is a place where the two ends are simply lying next to each other with no stored activation: unlike the polymerization reaction, where the incoming nucleotide arrives carrying its own triphosphate, there is nothing energetic at a nick to drive bond formation. The contrast worth keeping is with DNA topoisomerase, which breaks a phosphodiester bond but keeps its energy in a covalent protein-DNA linkage and so reseals for free.
Tags: replication, enzymes

---

Q: What do **DNA helicases** do, and how do they do it?
![A helicase running along a single strand and displacing a short complementary fragment as it goes](assets/img/fig-5-13.png)
A: They open the double helix ahead of the fork so the template bases are available for pairing. They were first isolated as proteins that hydrolyze ATP when bound to single-stranded DNA, and they work on the principle described in Chapter 3: binding and hydrolysis of ATP change the shape of the protein in a cycle, and that cyclical shape change is turned into mechanical work. A helicase uses it to propel itself rapidly and unidirectionally along one DNA single strand, and when it meets a region of double helix it simply keeps going, acting as a moving wedge that pries the helix apart ahead of it. Movement can reach 1000 nucleotides per second.
Tags: replication, machines

---

Q+: The two strands run in opposite directions, so a helicase could in principle track along either. Which does the bacterial replicative helicase use, and what is its structure?
![A hexameric helicase ring drawn to scale with a replication fork, and the x-ray structure of the bacteriophage T7 replicative helicase](assets/img/fig-5-14.png)
A: Both kinds of helicase exist, but in the best-understood bacterial replication systems the predominant one moves 5′-to-3′ along the lagging-strand template. Structurally many DNA helicases are a ring of six subunits, and the bacteriophage T7 replicative helicase is the worked example: six identical subunits bind and hydrolyze ATP in an ordered fashion to drive the molecule along a single strand that threads through the central hole, working like a rotary engine. The eukaryotic replicative helicase does the opposite, tracking along the leading-strand template, which is worth holding onto because it makes the two forks look different in diagrams for a reason that has nothing to do with chemistry.
Tags: replication, machines

---

Q: Why does the cell need **single-strand DNA-binding (SSB) proteins** in addition to a helicase?
![Single-stranded template folding into hairpins, and SSB monomers binding cooperatively to straighten the chain out](assets/img/fig-5-15.png)
A: Because single-stranded DNA does not sit obligingly straight. Chance matches between short regions of complementary sequence make the strand fold back on itself into hairpin helices, and these arise routinely on the lagging-strand template, where long stretches sit exposed. If left in place, hairpins impede the DNA polymerase. SSB proteins bind tightly and cooperatively to single-stranded DNA, each molecule preferring to bind next to one already bound, so they form long rows that coat and straighten the strand and prevent hairpins from forming.
Tags: replication, machines

---

Q+: What is notable about how the human SSB protein grips the DNA?
![Two DNA-binding domains of human RPA covering eight nucleotides, and the same structure viewed with the DNA end on](assets/img/fig-5-16.png)
A: The bases stay exposed. Human RPA covers eight nucleotides with its two DNA-binding domains and holds the sugar-phosphate backbone rather than burying the bases, which is exactly what is needed: the point of the protein is to keep the template straight and available, not to sequester it. A protein that gripped the bases would prevent the hairpins and also prevent the polymerase from reading the template.
Tags: replication, structure

---

Q: What is a **sliding clamp**, and what problem does it solve?
![The E. coli clamp protein as a ring around a DNA helix, and the clamp loader opening the ring and screwing it onto DNA](assets/img/fig-5-17.png)
A: On their own, most DNA polymerase molecules synthesize only a short string of nucleotides before falling off the template, which would make replicating a chromosome hopeless. An accessory protein, called PCNA in eukaryotes, forms a large ring that encircles the DNA double helix. One face of the ring binds the back of the polymerase, and the whole ring slides freely along the DNA as the polymerase moves, so the enzyme is topologically trapped on its template without being slowed down. The clamp releases the polymerase as soon as it runs into a double-stranded region, which is how the lagging-strand polymerase knows it has finished a fragment.
Tags: replication, machines

---

Q+: A closed ring cannot get onto DNA by itself. What loads it?
A: A protein complex called the clamp loader, which opens and closes the ring in a regulated manner and hydrolyzes ATP as it works. Its structure resembles a screw nut, with threads that match the grooves of double-stranded DNA. It binds a free clamp and forces a gap in the ring of subunits so the clamp can slip around the DNA, then screws the open clamp along the double helix until it meets the 3′ end of a primer, at which point it hydrolyzes ATP and releases the clamp to close around the DNA. At bacterial forks the loader does not then wander off: it stays bound to the polymerase so that it is in position to assemble a new clamp at the start of every Okazaki fragment.
Tags: replication, machines

---

Q: Each time the lagging-strand polymerase finishes an Okazaki fragment it lets go of its clamp. Why is that not a disaster for processivity?
A: Because dissociating from the clamp is not the same as leaving the fork. The polymerase releases itself from the clamp and comes off the template, but it is held at the replication fork by flexible arms extending from the clamp loader, so it stays in place while the loader assembles a fresh clamp on the RNA primer of the next fragment. The polymerase then associates with that new clamp and starts again. Losing the grip on the DNA every couple of hundred nucleotides is exactly what lagging-strand synthesis requires, and the machine is built so that the loss is local and immediately recoverable.
Tags: replication, machines

---

Q: The proteins at a replication fork are usually described as a **replication machine** rather than a set of separate enzymes. What does that buy, and what analogy does the book use?
![A bacterial replication fork with one polymerase on the leading strand and two alternating on the lagging strand, plus an electron micrograph of the T4 replication machine](assets/img/fig-5-18.png)
A: The proteins are held together in a large, orderly multienzyme complex of total molecular mass greater than $10^6$ daltons, and the close association raises the efficiency of replication substantially. The analogy is a tiny sewing machine built of protein parts and powered by nucleoside triphosphate hydrolysis: like a sewing machine it probably stays put with respect to its surroundings, while the DNA is threaded rapidly through it like a long strip of cloth. In bacteria the helicase opens the helix at the front, one polymerase runs the leading strand and two alternate on the lagging strand, and the lagging strand is folded back into a loop so that its polymerase can face the same way as everything else.
Tags: replication, machines

---

Q+: What does the folding back of the lagging strand actually accomplish?
A: It lets the lagging-strand polymerase work while pointing in the same direction as the fork is moving, so that everything can be part of one physical assembly rather than one polymerase running away from the other. It also keeps the clamp loader and the lagging-strand polymerase in place at the fork even when they have let go of their DNA template, which is what makes loading a new clamp for each Okazaki fragment quick. The electron micrograph of the T4 replication machine shows this loop directly, and the sketch interpreting it notes that the replication proteins had partly detached from the very front of the fork during preparation, which is why the loop is so clearly visible.
Tags: replication, machines

---

Q: How much of eukaryotic DNA replication is the same as bacterial, and where does the picture diverge?
![A eukaryotic replication fork with polymerase epsilon on the leading strand, the CMG helicase, and polymerases alpha and delta on the lagging strand](assets/img/fig-5-19.png)
A: The fundamentals are the same: fork geometry, 5′→3′ polymerases, helicases, clamps, clamp loaders and single-strand binding proteins all appear in both. The differences are in complexity and in the division of labour. Eukaryotes use three different DNA polymerases at each fork rather than one repeated. The eukaryotic CMG helicase moves along the leading-strand template, opposite to the bacterial helicase. Eukaryotic replication proteins are also thought to function largely independently rather than as one tightly coupled machine, which may be why the eukaryotic fork is slower. Even the subunit counts diverge: the eukaryotic single-strand binding protein is built from three different subunits against one in bacteria, and CMG has 11 different subunits against a hexamer of 6 identical ones.
Tags: replication, eukaryotes

---

Q+: What does each of the three eukaryotic polymerases do?
A: Polymerase ε makes the leading strand, and it binds both the sliding clamp and the replicative helicase, which lets it run very long stretches without dissociating. Polymerase α starts every new chain: it includes DNA primase as one of its subunits, so it lays down the short RNA, and a different subunit of the same enzyme then extends it by only about 20 nucleotides of DNA before letting go. Polymerase δ, loaded together with a sliding clamp, takes over from there and completes each Okazaki fragment to a total length of about 200 nucleotides. So the lagging strand is handed between two enzymes for every fragment, which is one more moving part than bacteria need.
Tags: replication, eukaryotes

---

Q: With the exception of the sliding clamp, bacterial and eukaryotic replication proteins have completely different structures and sequences. What does the book conclude from that?
A: That the two replication machineries evolved independently over hundreds of millions of years and converged on the same basic mechanisms, rather than descending from a shared ancestral machine. The contrast is with transcription and translation, where the fundamental components, RNA polymerase and the ribosome, are recognizably similar across bacteria and eukaryotes and clearly conserved from a common ancestor. It is a genuinely surprising asymmetry: the machinery for reading the genome is ancient and shared, while the machinery for copying it apparently is not, even though both look equally indispensable.
Tags: replication, evolution

---

Q: What is a **mutator gene**, and what was found by screening for them in *E. coli*?
A: A mutator gene is one whose alteration greatly increases the rate of spontaneous mutation, and because *E. coli* divides every 30 minutes it is easy to screen huge populations for such rare mutants. Unsurprisingly, one class turned out to make a defective form of the 3′-to-5′ proofreading exonuclease, so replication errors that would have been clipped out simply stayed. The more interesting result was that other high-mutation-rate mutants pointed to a proofreading system nobody had been looking for, acting after the polymerase had gone: strand-directed mismatch repair, which is present in all cells on Earth.
Tags: mismatch-repair, model-organisms

---

Q: **Strand-directed mismatch repair** faces a problem that ordinary proofreading does not. What is it?
A: Telling which of the two mismatched nucleotides is the wrong one. The system finds mismatches by monitoring their potential to distort the double helix, which noncomplementary pairs do markedly. But a mismatch is a disagreement between two strands, and nothing about the mismatch itself says which strand is at fault. If the system simply corrected one of the two nucleotides at random, it would fix the new strand half the time and rewrite the original template to match the error the other half, leaving the overall error rate exactly where it started. To be worth anything, the system has to remove only the nucleotide on the newly synthesized strand.
Tags: mismatch-repair, fidelity

---

Q+: How does *E. coli* mark which strand is new?
A: By a deliberate lag in methylation. Methyl groups are added to all A residues in the sequence GATC, but not until some time after the GATC has been synthesized. So for a window just behind the replication fork the only unmethylated GATC sequences in the genome are the ones on the new strands, base-paired to methylated GATCs on the old. Recognizing that hemimethylated state lets the repair system distinguish new DNA from old for exactly as long as it needs to. The full correction is five steps: recognize the mismatch, identify the new strand, excise the portion containing the wrong nucleotide, resynthesize it using the old strand as template, and ligate the backbone. The whole system reduces replication errors by a further factor of 100 to 1000.
Tags: mismatch-repair

---

Q+: Eukaryotes do not use methylation for this. What do they use instead?
![MutS locking onto a mismatch, recruiting MutL, scanning to a sliding clamp and nick, and the excision and resynthesis that follow](assets/img/fig-5-20.png)
A: They use the sliding clamps and the nicks left behind on the new strand. On the lagging strand, newly synthesized DNA carries transient single-strand gaps before the Okazaki fragments are processed and ligated, and each gap usually still carries a sliding clamp. The two faces of a clamp differ, and the clamp loader always loads it in the same orientation relative to the 3′ end of the previous fragment, so every clamp on the DNA faces the same way relative to the direction of replication. That orientation is the signal. MutS binds the mismatched base pair, recruits MutL, and the complex scans the nearby DNA until it finds a gap and a clamp; the clamp's orientation determines which strand gets cut. MutL is then activated, usually joined by a second nuclease, and together they remove the new DNA from the gap past the mismatch, after which polymerase δ fills in and ligase seals.
Tags: mismatch-repair, eukaryotes

---

Q+: How does MutS find a mismatch in the first place?
A: By testing the DNA for how easily it bends. MutS is a dimer that grips the double helix and kinks it at the mismatched base pair, and it appears to scan by looking for sites that can be readily kinked, which are the ones holding an abnormal base pair. That is an elegant way round the fact that a mismatch has no distinctive chemistry to recognize: rather than reading the bases, the protein probes a mechanical property that only abnormal pairs have.
Tags: mismatch-repair, structure

---

Q: Why do people who inherit one defective copy of a mismatch repair gene get cancer, when they still have a working copy?
A: Because only that one working copy stands between them and a mismatch-repair-deficient cell lineage, and a single spontaneous mutation somewhere in the body will eventually knock it out. When it does, the resulting clone of somatic cells accumulates mutations unusually rapidly, and since most cancers arise in cells that have accumulated many mutations, that clone has a greatly enhanced chance of becoming cancerous. Hereditary nonpolyposis colorectal cancer is the example given. Most of us inherit two good copies, and the protection this affords is statistical rather than absolute: it is simply very unlikely that both copies are knocked out in the same cell.
Tags: mismatch-repair, cancer

---

Q: DNA polymerases occasionally insert a **ribonucleotide** instead of a deoxyribonucleotide. Given that they prefer deoxy by a factor of about a million, why does this happen at all?
A: Because the cell's concentrations are wildly unbalanced in the other direction. Ribonucleotides are far more abundant than their deoxy counterparts, by as much as 500-fold in the case of ATP, which has many other uses in the cell. A millionfold preference fighting a large concentration excess still leaves a measurable failure rate, and the result is that a ribonucleotide is accidentally incorporated roughly once per several thousand nucleotides of DNA synthesized. The two molecules differ by a single -OH group on the sugar, which is not much for an enzyme to discriminate on.
Tags: replication, fidelity

---

Q+: What harm does an incorporated ribonucleotide do, and how is it fixed?
A: It weakens the DNA chain at that point and makes it highly susceptible to breakage, and if the chain does not break, the distortion it introduces can stall some polymerases during the next round of replication. Left unrepaired, these weak links would cause high mutation rates and genome rearrangements. Specific nucleases cleave the chain when they meet a ribonucleotide, which leads to its excision and replacement by DNA, in much the same way RNA primers are removed from Okazaki fragments. There is a suggestion that this is more than damage control: because the process produces gaps only in newly synthesized DNA, those transient lesions may be another cue telling mismatch repair which strand to fix, which would be particularly useful on the leading strand where gaps are otherwise rare.
Tags: replication, mismatch-repair

---

Q: What is the **winding problem**, and how bad does it get at a real replication fork?
![Torsional stress building ahead of a fork, relief by supercoiling, and relief by a topoisomerase-generated single-strand break](assets/img/fig-5-21.png)
A: The two parent strands are wound around each other, so separating them means unwinding one complete turn of the helix for every 10 nucleotide pairs replicated. In principle the chromosome ahead of the fork could just spin, but for a bacterial fork moving at 500 nucleotides per second that would mean the parent helix rotating at about 50 revolutions per second, and for a long chromosome this is energetically prohibitive. So instead the DNA ahead of the fork becomes overwound. Some of the resulting tension is absorbed as supercoiling, where the helix twists around itself, but if tension keeps building the fork eventually stops, because further unwinding would require more energy than the helicase can supply.
Tags: topoisomerases, replication

---

Q: What is a **DNA topoisomerase**, and what does topoisomerase I do?
![A type I topoisomerase attacking the backbone through an active-site tyrosine, allowing free rotation, then resealing the phosphodiester bond](assets/img/fig-5-22.png)
A: A topoisomerase can be viewed as a reversible nuclease: it adds itself covalently to a phosphate in the DNA backbone, thereby breaking a phosphodiester bond, and the bond re-forms as the protein leaves. Topoisomerase I makes a transient single-strand break. That nick lets the two sections of helix on either side rotate freely relative to each other, using the phosphodiester bond in the strand opposite the nick as a swivel. Any tension in the helix drives that rotation in the direction that relieves it, so replication can proceed with only the short length of helix just ahead of the fork having to turn.
Tags: topoisomerases, enzymes

---

Q+: Resealing the break costs no ATP, unlike DNA ligase sealing a nick. Why the difference?
A: Because the topoisomerase never lets the energy go. The covalent linkage joining the protein to the DNA phosphate, a phosphotyrosine bond formed through a tyrosine in the active site, retains the energy of the cleaved phosphodiester bond, so resealing is rapid and needs no further input. DNA ligase faces a genuinely different situation: at an unsealed nick left by the replication machinery, the bond energy was spent long ago and nothing is stored anywhere, so the ligase has to buy the bond with a molecule of ATP.
Tags: topoisomerases, thermodynamics

---

Q: Topoisomerase II works differently from topoisomerase I. What are the steps of its reaction?
![Topoisomerase II binding two crossed helices, opening a protein gate in one, passing the other through, and resealing](assets/img/fig-5-23.png)
A: It forms a covalent linkage to both strands of a helix at once, making a transient double-strand break. These enzymes are activated by sites where two double helices cross over each other, such as the crossings supercoiling generates ahead of a fork. Once bound to such a crossing, the protein uses ATP hydrolysis to run three steps: it breaks one double helix reversibly to create a DNA gate, it passes the second nearby helix through the opening, and it then reseals the break and dissociates. At crossovers made by supercoiling, the passage happens in whichever direction reduces the supercoiling, so like topoisomerase I it relieves the tension ahead of a fork. Unlike a type I enzyme, it does hydrolyze ATP, which is needed to release and reset the enzyme after each cycle.
Tags: topoisomerases, enzymes

---

Q+: Passing one helix through another is good for more than relieving supercoils. What else does it make possible?
A: Separating intertwined DNA molecules, which is what stops daughter chromosomes ending up hopelessly tangled after replication. The demonstration is a mutant yeast that makes a topoisomerase II inactive above 37°C: warm those cells and their daughter chromosomes stay intertwined after replication and simply cannot come apart. The book's image for this is trying to remove a severe tangle from a fishing line or a large ball of thread without scissors, the point being that a topoisomerase is a pair of scissors that puts everything back afterwards.
Tags: topoisomerases

---

Q+: Why are type II topoisomerases a good target for antibiotics, and what is the class?
A: The fluoroquinolones, used against many kinds of bacterial infection. They work because type II topoisomerases matter most to rapidly dividing cells, which is exactly what an expanding bacterial population consists of. The clever and dangerous part is where they act: they inhibit bacterial topoisomerase II at the third step of the cycle, meaning after the gate has been opened and the second helix has passed through but before the break is resealed. So rather than merely blocking the enzyme they trap it mid-reaction, producing high levels of double-strand breaks that are lethal to dividing cells.
Tags: topoisomerases, enzymes

---

Q: What is a **replication origin**, and what two kinds of sequence does a bacterial or yeast origin contain?
![A replication bubble forming: local opening of the helix, RNA primer synthesis, leading-strand synthesis, then two forks moving apart](assets/img/fig-5-24.png)
A: A replication origin is a position at which the helix is first opened, by initiator proteins that bind double-stranded DNA and pry the two strands apart, breaking the hydrogen bonds between bases. In simple cells such as bacteria or budding yeast, origins are specified by DNA sequences several hundred nucleotide pairs long, and those sequences do two jobs: some short stretches attract the initiator proteins, and other stretches are simply easy to open. The second kind is the AT-rich DNA. An A-T pair is held by fewer hydrogen bonds than a G-C pair, so AT-rich DNA pulls apart more readily, and regions enriched in A-T are typically found at origins.
Tags: origins, replication

---

Q: How does *E. coli* replicate its genome, and why is initiation the only point at which it can exert control?
![A circular bacterial chromosome replicating from a single origin to give two circular daughter molecules](assets/img/fig-5-25.png)
A: The genome is a single circular molecule of $4.6 \times 10^6$ nucleotide pairs. Replication begins at one origin, and the two forks assembled there travel in opposite directions at roughly 1000 nucleotides per second until they meet about halfway round, taking about 30 minutes in total. Once the forks are assembled they synthesize DNA at a relatively constant speed until they are done, and there is no mechanism to slow them, pause them or turn them back. So the only decision the cell gets to make is whether to start, which is why initiation is so tightly regulated.
Tags: origins, replication, model-organisms

---

Q: Walk through what the initiator proteins actually do at the *E. coli* origin.
![Initiator proteins binding and destabilizing the AT-rich sequence, helicases loaded by helicase-loading proteins, primase entering, and two forks forming](assets/img/fig-5-26.png)
A: Specialized initiator proteins, in their ATP-bound state, bind in multiple copies to specific sites at the origin and wrap the DNA around themselves to form a large protein-DNA filament. That introduces torsional stress on the helix, and the stress is partially relieved by the melting of the adjacent AT-rich sequences, so the opening is done by mechanical strain rather than by prying bases apart individually. The complex then attracts two DNA helicases, each carried by a helicase loader, and places them facing in opposite directions around adjacent single strands. Once positioned, the loaders dissociate, the helicases start unwinding, and enough single-stranded DNA appears for primases to make the first RNA primers, after which the rest of the replication proteins assemble into two forks. In *E. coli* the initiator, helicase and primase are the dnaA, dnaB and dnaG proteins.
Tags: origins, replication

---

Q+: What is the helicase loader for, beyond the obvious analogy with the clamp loader?
A: It keeps the helicase inactive until it is properly loaded. That is not fussiness: a replicative helicase turned loose on any single-stranded stretch in the genome would start unwinding wherever it landed, and single-stranded regions occur all over a working chromosome. The loader therefore does two things at once, placing the helicase around the right strand at the right place and holding it switched off until the placement is correct. The parallel with the clamp loader is that both proteins exist because a ring-shaped enzyme cannot get onto DNA unaided.
Tags: origins, machines

---

Q: *E. coli* must not re-initiate at its origin immediately after firing it. How is the refractory period created?
![A fully methylated origin firing, becoming hemimethylated and resistant to initiation, then being remethylated and competent again](assets/img/fig-5-27.png)
A: Two things reset together. The initiator protein is inactivated by hydrolysis of its bound ATP, and the origin enters a refractory period caused by a delay in methylating the newly incorporated A nucleotides. The origin contains 11 GATC sequences across about 250 nucleotide pairs, and immediately after replication these are hemimethylated, with one strand methylated and the other not. In that state an inhibitor protein called Seq A binds the origin and blocks the initiator proteins from unwinding it. About 15 minutes later the Dam methylase has fully methylated the origin, Seq A dissociates, and the origin becomes competent again. Initiation resumes only when the A's are methylated and the initiator is back in its ATP-bound state, and those conditions are met only when the cell can actually complete a new round of replication.
Tags: origins, replication

---

Q+: The same lag in GATC methylation appears twice in this chapter, for two different purposes. What is the difference between the two uses?
A: One is a licence, the other is a label. At the origin, hemimethylation is read by Seq A and used to forbid re-initiation for about 15 minutes, so the delay acts as a timer for the cell cycle. In mismatch repair, hemimethylation at GATC sequences scattered throughout the chromosome is read as a marker of which strand is new, so the delay acts as a temporary annotation on the whole genome. Same chemistry, same enzyme, different readers: the origin's GATCs are bound by Seq A, whereas the scattered ones are not.
Tags: origins, mismatch-repair

---

Q: How was the pattern of replication on eukaryotic chromosomes first worked out, and how fast do eukaryotic forks turn out to move?
![Autoradiographic tracks of silver grains showing replication origins with bidirectional fork movement, before and after a chase with unlabeled medium](assets/img/fig-5-28.png)
A: By autoradiography of stretched DNA, in the early 1960s. Human cells in culture were labeled briefly with $^3$H-thymidine, gently lysed, and their DNA stretched on a glass slide coated with photographic emulsion. Developing the emulsion months later revealed lines of silver grains over the radioactive DNA, so replicated stretches became visible in a light microscope even though the DNA itself is far too thin to see. From the rate at which the tracks lengthen with labeling time, eukaryotic forks travel at about 50 nucleotides per second, roughly twentyfold slower than bacterial forks. The likely reason is the difficulty of replicating DNA packaged in chromatin.
Tags: origins, replication, eukaryotes

---

Q+: The experiment was run twice, the second time with a chase in unlabeled medium. What did the second version show that the first could not?
A: That forks move in both directions from a common origin. Adding unlabeled medium after the pulse allowed further DNA to be replicated at a lower level of radioactivity, so each dark track ended up with silver grains tapering off at both ends. The pairs of dark tracks were found to taper in opposite directions, which is the signature of two forks that started together at a central origin and travelled apart, forming a replication bubble. A single fork running one way would have given a track that faded at one end only.
Tags: origins, replication

---

Q: Calculate why a human chromosome cannot be replicated from a single origin.
A: An average-size human chromosome is a single linear DNA molecule of about 150 million nucleotide pairs. At 50 nucleotides per second, that is 0.02 seconds per nucleotide, so $0.02 \times 150 \times 10^6 = 3.0 \times 10^6$ seconds, which is about 35 days. Since human cells divide on a timescale of about a day, one fork per chromosome is off by more than an order of magnitude, and the autoradiographs duly show many forks belonging to separate replication bubbles moving simultaneously on each chromosome.
Tags: origins, human-genome

---

Q+: A bacterial replication fork moves at about {{1000}} nucleotides per second and a eukaryotic fork at about {{50}}, making the eukaryotic fork roughly {{twentyfold}} slower.
A: The likely reason for the gap is that eukaryotic DNA is packaged in chromatin, so the fork has to disassemble a nucleosome every couple of hundred nucleotides and put it back afterward. There may also be a contribution from how the machinery is organized: the bacterial replication proteins are held together as one tightly coupled complex, whereas the eukaryotic ones are thought to work largely independently.
Tags: replication, origins

---

Q: Whole-genome sequencing of synchronized cells has replaced autoradiography for studying replication timing. What five things has it established?
A: The method works because a replicated segment contains twice as much DNA as an unreplicated one, so sequencing synchronized cells at time points tracks initiation and fork movement across a whole genome. The findings: approximately 30,000 to 50,000 origins are used each time a human cell divides; the genome holds many more potential origins than this, perhaps tenfold more, and different cell types use different sets; origins do not all fire simultaneously but are often activated in a prescribed order for a given cell type; every fork moves at about the same speed regardless of when or where its origin fired; and forks are formed in pairs, expanding a bubble outward and stopping only when they meet an oncoming fork or reach a chromosome end.
Tags: origins, human-genome

---

Q+: What is the excess of unused origins good for?
A: Two things, one strategic and one defensive. Having more origins than you need lets the cell match its active origins to other features of its chromosomes, notably which genes are being expressed, which is why different cell types use different sets. And the unused ones are backups: if a primary origin fails, a nearby dormant one can still start a fork and the region gets replicated anyway. It is a redundancy that costs nothing, since an unused origin simply gets replicated by a fork arriving from elsewhere.
Tags: origins

---

Q: In which part of the cell cycle does eukaryotic DNA replication happen, and how long does it take?
![The four phases of the eukaryotic cell cycle, G1, S, G2 and M, with DNA replication confined to S phase](assets/img/fig-5-29.png)
A: In S phase, the DNA synthesis phase, which in a mammalian cell typically lasts about 8 hours and in simpler eukaryotes such as yeasts can be as short as 40 minutes. Rapidly growing bacteria by contrast replicate their DNA nearly continually. By the end of S phase every chromosome has been replicated into two complete copies, which stay joined at their centromeres until M phase follows. Different origins fire at different times within S phase, but all replication both begins and finishes inside it, and the cell-cycle control system enforces that entry into each phase requires successful completion of the one before.
Tags: origins, eukaryotes

---

Q: What is **ORC**, and what three things does a budding yeast replication origin have to contain?
![Chromosome III of S. cerevisiae showing its telomeres, centromere and the positions of its replication origins along 300,000 nucleotide pairs](assets/img/fig-5-30.png)
A: ORC is the origin recognition complex, a large multisubunit initiator protein. A functional *S. cerevisiae* origin was defined by taking a segment spanning an origin and testing smaller and smaller fragments for the ability to work, and what survives has three components: a binding site for ORC, a stretch rich in A's and T's and therefore easy to pull apart, and at least one binding site for proteins that help ORC bind, probably by adjusting the local chromatin structure. Chromosome III, one of the smallest chromosomes known at less than 1/100 the length of a typical human chromosome, carries 180 genes and 18 origins spaced on average 30,000 nucleotide pairs apart, and can be replicated in about 15 minutes.
Tags: origins, model-organisms

---

Q+: Only a subset of those 18 origins is used in any given cell division. How uneven is the usage?
A: Very. The origins on chromosome III are used with markedly different frequencies: some fire in about 90% of cell divisions while others are used in less than 10%. So describing a chromosome as having 18 origins overstates how deterministic the process is, and the same picture scales up to the human genome, where perhaps a tenth of the potential origins fire in any one cell.
Tags: origins

---

Q: Human replication origins have resisted definition in a way that yeast origins did not. What is known, and what is missing?
A: Specific human DNA sequences several thousand nucleotide pairs long have been identified that are sufficient to serve as origins, and they keep working when moved to a different chromosomal region by recombinant DNA methods, provided they land somewhere the chromatin is relatively uncondensed. What is missing is any sequence they share: comparing them reveals no common motif of the kind that defines bacterial and yeast origins. Meanwhile a human ORC very similar to the yeast one does bind human origins and initiate replication there, and many of the other yeast initiation proteins have central roles in humans too. So the mechanism is conserved while the thing being recognized apparently is not a sequence at all.
Tags: origins, human-genome

---

Q+: If not sequence, what is thought to attract ORC to a mammalian origin?
A: Structural properties of the chromosome rather than the letters of the DNA. Origins are often nucleosome-free, and it has been proposed that DNA that is hard to fold onto a histone core is part of what defines an origin. Nearby transcriptional activity may activate certain origins by altering local chromatin structure, which would explain why different cell types, expressing different genes, use different origins, and it fits the observation that the origins firing earliest in S phase tend to sit near highly transcribed regions. Origins close to one another also tend to fire together, suggesting the three-dimensional organization of chromosomes groups them into domains that fire as a unit. Several influences acting together is exactly the situation in which no single clean defining feature will be found, which is why the search has been so difficult.
Tags: origins, chromatin

---

Q: With tens of thousands of origins, how does a eukaryotic cell guarantee that every region of DNA is replicated **once and only once** per S phase?
![Loading of two Mcm helicases in G1, phosphorylation of Mcm and ORC at S phase, CMG helicases moving apart, and the two complete replication machines](assets/img/fig-5-31.png)
A: By splitting the job into two windows that cannot overlap. During G1, when kinase activity is low, a symmetrical complex of two incomplete helicases (the Mcm helicases) is loaded onto the DNA by the bound ORC. On passage into S phase, specialized protein kinases direct the final assembly of the two replicative helicases, adding Cdc45 and GINS to Mcm to make the CMG helicase and positioning one on each single strand so they move apart and open the helix. The same kinases prevent any new helicase from binding that origin, partly by phosphorylating ORC so it can no longer accept them, and nothing resets until the next M phase. Loading can therefore happen only in G1 and activation only in S, and since the two phases are mutually exclusive and occur in a fixed order, each origin fires at most once per cycle.
Tags: origins, replication, eukaryotes

---

Q+: Stopping each origin from firing twice is not actually enough. What else is needed?
A: Inactivating any ORC-DNA complex that a replication fork passes. Because there are far more ORC-bound origins than are ever used, most of them are simply overrun by a fork that started somewhere nearby. If such an origin were left loaded and licensed, it could fire afterward on DNA that has already been copied, re-replicating it. So the guarantee needs both mechanisms together: one origin cannot fire twice, and an origin that has been passed is switched off.
Tags: origins, replication

---

Q: Where does the CMG helicase get its name?
A: From its three components: Cdc45, Mcm and GINS. The Mcm helicases form the enzymatic core and are loaded in G1 as inactive halves; Cdc45 and the GINS complex are added at the start of S phase to complete the active enzyme. The name therefore encodes the assembly history, which is the whole point of the regulation: the catalytic part is put in place at one time and made competent at another.
Tags: origins, machines

---

Q: Duplicating a eukaryotic chromosome means duplicating its histones too. How does the cell arrange to make the right amount of histone?
A: It couples histone synthesis tightly to DNA synthesis. Each division needs new histone protein roughly equal in mass to the newly synthesized DNA, which is why most eukaryotes carry multiple copies of each histone gene; vertebrate cells have about 20 repeated gene sets, most containing the genes for all five histones H1, H2A, H2B, H3 and H4. Unlike most proteins, histones are made mainly in S phase, when histone mRNA levels rise about fiftyfold through both increased transcription and decreased mRNA degradation. When DNA synthesis stops at the end of S phase the major histone mRNAs are degraded within minutes, by a mechanism depending on special properties of their 3′ ends. The proteins themselves are remarkably stable and may survive many generations. Underneath this sits a feedback mechanism that monitors the level of free histone, so the amount made matches the amount of new DNA rather than merely being made at the right time.
Tags: chromatin, replication

---

Q: What happens to a nucleosome when a replication fork runs through it?
![Parent H3-H4 tetramers being distributed to both daughter duplexes while H2A-H2B dimers are displaced by FACT and reassembled by NAP1 and CAF1](assets/img/fig-5-32.png)
A: The histone octamer is broken into one H3-H4 tetramer and two H2A-H2B dimers, and all of them come off the DNA, leaving about 600 nucleotide pairs of free DNA in the fork's wake. The two halves then have different fates. The H3-H4 tetramers stay in the vicinity, loosely bound to proteins at the fork and primarily to the CMG helicase, and are distributed at random to one or other daughter duplex, so each daughter inherits roughly half of them. The H2A-H2B dimers are released completely and may diffuse away to entirely different chromosomes. Freshly made H3-H4 tetramers fill the gaps on the new DNA, and H2A-H2B dimers, half old and half new, are added at random to complete the nucleosomes. The consequence is that some daughter nucleosomes are all-parent and some all-new, but most are hybrids.
Tags: chromatin, replication

---

Q+: Nucleosome reassembly turns out to set a number we met much earlier. Which one?
A: The length of an Okazaki fragment. As polymerase δ works its way along the lagging strand it is stopped by the newly formed nucleosome ahead of it, so the fragment length is decided by where the next nucleosome sits rather than by anything about the polymerase. That is why eukaryotic Okazaki fragments are about 200 nucleotides, which is approximately the nucleosome repeat length, and why they are so much shorter than the 1000 to 2000 nucleotide fragments of bacteria, which have no nucleosomes to run into.
Tags: chromatin, replication

---

Q+: What are **histone chaperones**, and what does FACT do?
A: Histone chaperones, also called chromatin assembly factors, are multisubunit complexes that bind the highly basic histones and release them onto DNA only in the appropriate context, which is what makes reassembly behind the fork orderly and fast rather than a scramble. Some of them are directed to newly replicated DNA by binding the sliding clamp, and some clamps appear to linger on the DNA just long enough for the chaperone to finish its job. FACT works at the other end of the process: it moves at the front of the replication machinery and disassembles nucleosomes as it advances, making multiple contacts with a nucleosome through globular domains joined by flexible linkers. NAP1 and CAF1 then restore the full complement of histones behind the fork, using both parent and newly made histones.
Tags: chromatin, machines

---

Q: How does DNA replication actually **terminate**, in bacteria and in eukaryotes?
A: In *E. coli* the two forks meet at a spot opposite the origin, but they do not simply collide at full speed. That spot carries a special DNA sequence that slows and stalls each fork and causes them to disassemble; repair polymerases and DNA ligase then fill and seal the remaining gaps, and topoisomerases separate the two completed genomes. In eukaryotes there are roughly as many termination events as initiations, so 30,000 to 50,000 per S phase in mammalian cells, and they are largely independent of the underlying sequence. The principal termination signal is instead a head-on encounter with a fork coming the other way: when two forks meet, the CMG helicase at each is covalently modified by the addition of ubiquitin, which causes it to be disassembled and removed from the DNA, and without the helicase the rest of the fork proteins rapidly fall off. At a chromosome end the CMG helicase is believed simply to slide off the DNA.
Tags: replication, origins

---

Q: What is the **end-replication problem**?
A: The final RNA primer laid down on a lagging-strand template cannot be replaced by DNA, because replacing a primer requires a 3′-OH end upstream of it for the repair polymerase to extend from, and at the very end of a linear chromosome there is no further primer ahead to supply one. So the extreme end of each new lagging strand cannot be finished, and without some way round this, DNA would be lost from the ends of every chromosome at every cell division. Bacteria avoid the problem entirely by having circular chromosomes, which have no ends. Eukaryotes, whose chromosomes are linear, need a positive solution.
Tags: telomeres, replication

---

Q: What is a **telomere**, and what does **telomerase** do to it?
![Schematic structure of human telomerase, with its RNA scaffold, template region, reverse transcriptase catalytic core and additional proteins](assets/img/fig-5-33.png)
A: A telomere is the specialized structure at the end of a eukaryotic chromosome, built on many tandem repeats of a short sequence that is similar across organisms as different as protozoa, fungi, plants and mammals. In humans the repeat unit is GGGTTA, repeated roughly a thousand times at each telomere. Sequence-specific DNA-binding proteins recognize the telomere and attract telomerase, an enzyme that replenishes those repeats each time a cell divides. Telomerase recognizes the tip of an existing repeat and elongates it 5′-to-3′ using an RNA template that is a component of the enzyme itself. Human telomerase is 10 protein subunits plus an RNA of 451 nucleotides, and that RNA does three jobs at once: it forms the scaffold of the complex, it provides the template, and it helps form the active site.
Tags: telomeres, enzymes

---

Q+: Telomerase is a reverse transcriptase. What makes it unusual among reverse transcriptases?
A: That it carries its own template around with it. A reverse transcriptase is any polymerase that uses an RNA template to make a DNA strand, and the enzymatic portion of telomerase resembles other members of that family. What is unique is that the RNA template is an integral subunit of the enzyme rather than something supplied from outside, and it is not merely a passenger: unlike an ordinary template, the telomerase RNA contributes to the active site and is essential for efficient catalysis. In many organisms, though not humans, additional protein complexes are needed to bring the assembled enzyme to the ends of chromosomes.
Tags: telomeres, enzymes

---

Q+: Once telomerase has extended the parent strand, how does the daughter strand get finished?
![Telomerase binding an incomplete lagging strand, extending the 3′ end by RNA-templated synthesis, and DNA polymerase alpha completing the lagging strand](assets/img/fig-5-34.png)
A: By the ordinary machinery, using the new extension as template. Telomerase lengthens the 3′ end of the parent lagging-strand template by RNA-templated DNA synthesis, which gives the incomplete daughter strand somewhere further to go, and conventional DNA polymerases then copy that extension by ordinary DNA-templated synthesis. The final bit is laid down by DNA polymerase α, the same enzyme that begins every Okazaki fragment, starting with RNA and continuing with DNA. So the end-replication problem is not solved by finishing the strand: it is solved by continually adding disposable sequence beyond the point where finishing fails. The reactions were first discovered in the ciliate *Tetrahymena*.
Tags: telomeres, replication

---

Q+: In humans the telomere repeat unit is {{GGGTTA}}, repeated roughly {{a thousand}} times at each chromosome end, and human telomerase carries an RNA of {{451}} nucleotides.
A: The repeat sequence is similar in organisms as different as protozoa, fungi, plants and mammals, which puts telomerase among the deeply conserved machinery rather than a vertebrate invention. The RNA is not merely a template: it also forms the scaffold that holds the ten protein subunits together, and it contributes to the active site, so it is essential for efficient catalysis rather than simply being read.
Tags: telomeres

---

Q: Why do telomeres need protecting as well as extending, and what protects them?
![Electron micrograph of a t-loop at the end of a human chromosome, and a diagram of the 3′ overhang tucking back into the duplex repeats](assets/img/fig-5-35.png)
A: Because a chromosome end looks exactly like a double-strand break, and the cell repairs those rapidly. If telomeres were not distinguished from accidental breaks, the repair machinery would fuse chromosomes end to end and produce other genetic abnormalities. Telomeres carry several features preventing this. A specialized nuclease chews back the 5′ end to leave a protruding single-strand 3′ end, and that overhang, in combination with the GGGTTA repeats, attracts a group of proteins forming a protective cap called shelterin, which is what stops the end being treated as damaged DNA. There may be a second layer: when human telomeres are artificially cross-linked and viewed by electron microscopy, t-loops appear, in which the protruding single-strand end loops back and tucks itself into the duplex DNA of the repeats, and the attractive idea is that shelterin orchestrates these to hide the ends. The loop in the published micrograph is about 15,000 nucleotide pairs long.
Tags: telomeres, structure

---

Q: Telomeres are neither made nor eroded at a fixed rate, so how does a cell hold their length steady?
![A yeast chromosome with an artificially lengthened or shortened telomere returning to the normal length distribution after many divisions](assets/img/fig-5-36.png)
A: With a homeostatic feedback mechanism, demonstrated cleanly in yeast. Make the telomere at one end of a particular chromosome artificially longer than average, or artificially shorter, and after many cell divisions it recovers, ending up with an average length and a length distribution typical of the other chromosomes in the cell. Since the processes that grow and shrink telomeres are only approximately balanced, chromosome ends carry variable numbers of repeats, and a mechanism of this kind is what keeps the number within a limited range. A similar feedback has been proposed for the germ-line cells and stem cells of mammals.
Tags: telomeres, model-organisms

---

Q: Most human somatic cells let their telomeres shorten. What is that thought to be for?
A: A counting mechanism that limits how many times a cell lineage can divide, and so helps prevent unlimited proliferation of wayward cells in adult tissues. Somatic cells start in the embryo with a full complement of repeats. Some stem cells, notably those in tissues replenished at a high rate throughout life such as bone marrow or gut lining, keep full telomerase activity. In many other cell types telomerase is reduced to a level that cannot quite keep up with chromosome duplication, and those cells lose 100 to 200 nucleotides from each telomere every division. After enough generations the descendants inherit chromosomes lacking functioning telomeres, which activates a DNA-damage response and makes them withdraw permanently from the cell cycle: replicative cell senescence.
Tags: telomeres, cancer

---

Q+: How was the counting idea tested in human fibroblasts?
A: Human fibroblasts normally proliferate for about 60 divisions in culture before undergoing replicative senescence, and like most human somatic cells they make only low levels of telomerase, so their telomeres shorten with every division. Insert a fully active telomerase gene and the telomeres are maintained, and many of the cells then go on proliferating indefinitely. That is a direct test of the causal claim rather than a correlation: the length of the telomere, not the number of divisions as such, is what the cell is counting. Consistent with the same picture, in approximately 90% of cancer cells the telomerase gene has been reactivated, circumventing the safeguard.
Tags: telomeres, cancer

---

Q+: What did knocking telomerase out of mice show, and why did it take several generations to show anything?
A: Mouse telomeres are about five times longer than human ones, so telomerase-null mice have to be bred through three or more generations before their telomeres have shrunk to a normal human length. The first generations therefore develop normally, which is a useful reminder that the phenotype tracks telomere length rather than the presence of the enzyme. Later generations develop progressively more defects in highly proliferative tissues, show signs of premature aging, and have a pronounced tendency to develop tumors. They resemble humans with dyskeratosis congenita, who carry one functional and one nonfunctional copy of the telomerase RNA gene, have prematurely shortened telomeres and typically die of progressive bone marrow failure, also developing lung scarring, liver cirrhosis and abnormalities of skin, hair follicles and nails.
Tags: telomeres, model-organisms

---

Q+: Telomere shortening protects against cancer and also causes it. How does that work?
A: Because not every cell that starts losing the ends of its chromosomes obediently stops dividing. Some become genetically unstable and keep going, and an unstable dividing cell is exactly the raw material for the variant lineages that lead to cancer. Many of those variants then reactivate telomerase at high levels, which secures their survival and removes the limit that was supposed to constrain them. So the mechanism is not foolproof, and, like many mechanisms in the cell, it has to strike a balance between benefit and risk rather than eliminating one at no cost.
Tags: telomeres, cancer

---

Q: How much DNA damage does a human cell suffer in a day, and how much of it survives as mutation?
A: Tens of thousands of random changes are created every day in the DNA of a human cell by heat, metabolic accidents, radiation of various sorts, and exposure to substances in the environment. Fewer than 0.02% of them accumulate as permanent mutations; the rest are eliminated by DNA repair. Two other measures of how seriously cells take this: several percent of the coding capacity of most genomes is devoted solely to DNA repair functions, and inactivating any one repair gene raises the mutation rate. Most of the repair proteins and genes now known to operate across a wide range of organisms including humans were originally found in bacteria, by isolating mutants with an increased mutation rate or increased sensitivity to DNA-damaging agents.
Tags: dna-repair, core

---

Q: Table 5-2 lists inherited human syndromes caused by defective DNA repair. Match a few of them to the process that is broken.
A: The pattern worth carrying away is that a specific repair defect gives a specific and often predictable disease.

| Syndrome or gene | Phenotype | Process affected |
| --- | --- | --- |
| Msh2, Msh3, Msh6, Mlh1, Pms2 | Colon cancer | Mismatch repair |
| Polymerase proofreading-associated polyposis | Colon cancer | Proofreading by DNA polymerase ε |
| Aicardi-Goutières syndrome | Encephalopathy, genome instability | Removal of misincorporated ribonucleotides |
| Xeroderma pigmentosum groups A to G | Skin cancer, UV sensitivity | Nucleotide excision repair |
| Cockayne syndrome | UV sensitivity, developmental abnormalities | Coupling of nucleotide excision repair to transcription |
| XP variant | UV sensitivity, skin cancer | Translesion synthesis by DNA polymerase η |
| Ataxia telangiectasia | Leukemia, lymphoma, γ-ray sensitivity | ATM, a kinase activated by double-strand breaks |
| Seckel syndrome | Dwarfism, microcephaly | ATR, a kinase activated by single-strand breaks |
| Brca1, Brca2 | Breast, ovarian, prostate, pancreatic cancer | Repair by homologous recombination |

Xeroderma pigmentosum is the cleanest illustration: the inability to repair damage from the ultraviolet component of sunlight gives an extreme sensitivity to it, serious skin lesions, and a greatly increased susceptibility to skin cancers.
Tags: dna-repair, cancer

---

Q: Figure 5-37 marks every atom of a nucleotide that spontaneous chemistry attacks. What are the three kinds of attack, and how are their frequencies shown?
![A nucleotide with arrows marking sites of oxidative damage in red, hydrolytic attack in blue and methylation in green, with arrow width showing relative frequency](assets/img/fig-5-37.png)
A: Oxidative damage, marked with red arrows, hydrolytic attack, marked in blue, and methylation, marked in green, with the width of each arrow indicating how often that event happens. What the figure makes visible is that there is no single vulnerable spot: the bases, the sugars and the phosphates are all attacked, at different rates and by different chemistry. The blue arrows on the glycosyl bonds joining base to sugar are the widest, which is depurination, and the summary is due to Tomas Lindahl, whose measurements are also the source of Table 5-3.
Tags: dna-repair, damage

---

Q: What is **depurination**, and how often does it happen?
![Depurination removing guanine from the backbone by hydrolysis, and deamination converting cytosine to uracil](assets/img/fig-5-38.png)
A: Depurination is the spontaneous hydrolysis of the N-glycosyl linkage joining a purine base, adenine or guanine, to its deoxyribose, which leaves the sugar in place with nothing attached. The DNA of each human cell loses about 18,000 purine bases this way every day, which makes it by far the most frequent damage DNA suffers. It happens on double-helical DNA and does not break the phosphodiester backbone, so the chain stays intact and only the information is gone.
Tags: dna-repair, damage

---

Q+: And **deamination**? How does its rate compare?
A: Spontaneous deamination of cytosine to uracil happens at about 100 bases per cell per day, so it is roughly 180 times rarer than depurination. Like depurination it takes place on double-helical DNA and leaves the backbone intact. Deamination is not restricted to cytosine, though that is the major reaction. The reason it matters so much despite being uncommon is that uracil, unlike a missing base, is a perfectly respectable base as far as the replication machinery is concerned: it just pairs with the wrong partner.
Tags: dna-repair, damage

---

Q: Table 5-3 counts the endogenous lesions arising and being repaired in one diploid mammalian cell in 24 hours. Which are the big numbers?
A: Hydrolysis gives 18,000 depurinations, 600 depyrimidinations, 100 cytosine deaminations and 10 deaminations of 5-methylcytosine. Oxidation gives about 1500 8-oxoguanines, 2000 ring-saturated pyrimidines such as thymine glycol and cytosine hydrates, and 1000 lipid peroxidation products. Nonenzymatic methylation by S-adenosylmethionine, the cell's own high-energy methyl donor, gives 6000 7-methylguanines and 1200 3-methyladenines, and nitrosated polyamines and peptides add 20 to 100 O$^6$-methylguanines. All of these are the result of normal chemistry going on inside a cell, with no external insult at all; cells exposed to chemicals and radiation suffer greater and more diverse damage on top.
Tags: dna-repair, damage

---

Q+: S-adenosylmethionine appears in that table as a source of damage, having appeared in chapter 2 as an activated carrier. What is going on?
A: The same property makes it useful and dangerous. SAM is the cell's high-energy methyl donor, and it is reactive enough to transfer a methyl group to an enzyme-held substrate, which is exactly why it also transfers methyl groups to DNA bases without any enzyme involved. Six thousand 7-methylguanines and 1200 3-methyladenines per cell per day are the toll. It is a good example of a general point about metabolism: a molecule held at high group-transfer potential does not confine itself to the reactions the cell intends.
Tags: dna-repair, damage

---

Q: How does ultraviolet radiation damage DNA?
![Two adjacent thymine bases becoming covalently linked by UV radiation to form a thymine dimer](assets/img/fig-5-39.png)
A: It produces a covalent linkage between two adjacent pyrimidine bases in the same strand, most familiarly two adjacent thymines forming a thymine dimer, though dimers also form between an adjacent thymine and cytosine. Skin cells exposed to sunlight are especially susceptible. Unlike depurination or deamination, this lesion does not alter what a base is but instead staples two of them together, which distorts the helix and is why it is handled by a repair pathway that looks for distortion rather than for a wrong base.
Tags: dna-repair, damage

---

Q: Deamination and depurination cause different kinds of mutation if they are not repaired. What does each produce?
![Deamination of C to U leading to a G-to-A change after replication, and depurination leading to loss of a nucleotide pair](assets/img/fig-5-40.png)
A: Deamination gives a base-pair substitution. Deaminating cytosine produces uracil, which base-pairs preferentially with adenine rather than guanine, so when the replication machinery meets a uracil on the template it inserts an adenine, and what was a G-C pair becomes an A-T pair in one daughter. Depurination gives a deletion. When the machinery meets a missing purine on the template it can skip to the next complete nucleotide, producing a daughter molecule missing one nucleotide pair, although it may instead place an incorrect nucleotide opposite the gap and give a substitution. Either way the change is then propagated through all subsequent cell generations.
Tags: dna-repair, damage

---

Q: Why is the double-helical structure of DNA well suited to being repaired, and what does that imply about single-stranded genomes?
A: Because it carries two separate copies of all the genetic information, one in each strand. Damage one strand and the complement still holds an intact copy, which is used as the template to restore the correct sequence. The implication is that a single-stranded genome cannot be repaired by any of these processes at all, and indeed only a few small viruses use single-stranded DNA or RNA as their genetic material, with a correspondingly high chance that any damage becomes a permanent change. The fact that every cell uses a double helix, and only tiny genomes get away with anything else, is the strongest evidence that the redundancy is what the structure is for. Only a tiny genome is a small enough target for damage to survive without it.
Tags: dna-repair, viruses

---

Q: Describe **base excision repair**, and the trick DNA glycosylases use to inspect bases.
![Base excision repair removing a deaminated C with uracil DNA glycosylase, AP endonuclease cutting the backbone, and polymerase and ligase restoring the C](assets/img/fig-5-41.png)
A: Base excision repair starts with a DNA glycosylase, one of a battery of enzymes each recognizing a specific kind of altered base and catalyzing its hydrolytic removal from the backbone. Different members handle deaminated C's, deaminated A's, various alkylated or oxidized bases, bases with opened rings, and bases where a carbon-carbon double bond has been accidentally reduced to a single bond. The missing tooth left behind is recognized by AP endonuclease, so named because it cuts within the chain at any site with a deoxyribose lacking its base, whether apurinic or apyrimidinic. AP endonuclease and a phosphodiesterase excise the bare sugar phosphate, DNA polymerase fills the single-nucleotide gap using the other strand as template, and DNA ligase seals the break, so an accidental U is restored to a C.
Tags: dna-repair, enzymes

---

Q+: How does a glycosylase find a damaged base buried in a double helix?
![Stick and space-filling models of a nucleotide flipped out of the double helix into a glycosylase active site](assets/img/fig-5-42.png)
A: By flipping it out. The enzyme rotates the nucleotide out of the helix into its own active site, which lets it probe every face of the base for damage rather than seeing only the edge that faces the groove. These enzymes are thought to travel along DNA using base-flipping to evaluate each base in turn, and when one finds the specific damage it recognizes, it cleaves the glycosyl bond joining that base to its sugar. It is an expensive-looking way to read a genome, and it is hard to see an alternative given that most of a base is hidden inside the stack.
Tags: dna-repair, structure

---

Q+: Depurination has already removed a base, so where does it enter this pathway?
A: Halfway down. A depurination leaves exactly the same thing a glycosylase leaves, a deoxyribose sugar with no base on it, so no glycosylase step is needed and repair begins directly with AP endonuclease. Given that depurination is by far the commonest damage DNA suffers, that lower half of the base excision pathway is one of the busiest repair activities in the cell.
Tags: dna-repair

---

Q: How does **nucleotide excision repair** differ from base excision repair, and what does it handle?
A: It looks for shape rather than chemistry. A large multienzyme complex scans the DNA for a distortion in the double helix rather than for any specific base change, which lets one pathway handle almost any large alteration to the structure. The lesions it takes on are bulky ones: bases covalently joined to large hydrocarbons, such as the carcinogen benzopyrene found in tobacco smoke, coal tar and diesel exhaust, and the pyrimidine dimers T-T, T-C and C-C caused by sunlight. On finding a lesion it cleaves the backbone of the abnormal strand on both sides of the distortion and a helicase peels away the single-strand oligonucleotide carrying the lesion, after which polymerase and ligase fill and seal the gap. In humans the gap left is about 30 nucleotides.
Tags: dna-repair, enzymes

---

Q+: A liver cell has just suffered four lesions: a benzopyrene adduct on a guanine, a spontaneously depurinated adenine, a deaminated cytosine, and an O$^6$-methylguanine. Which pathway takes each?
- [x] Excision of the nucleotide for the adduct, and of the base or bare sugar for the other two, with the methylguanine reversed directly
- [ ] All four go to nucleotide excision repair, since all four distort the helix
- [ ] All four go to base excision repair, since all four are damaged bases
- [ ] The adduct and the methylguanine are reversed directly, the others are excised
A: The benzopyrene adduct is bulky and distorts the double helix, so it is found by the scanning complex of nucleotide excision repair and removed inside a stretch of about 30 nucleotides. The deaminated cytosine is chemically wrong but structurally unremarkable, so it is found by uracil DNA glycosylase and enters base excision repair at the top. The depurinated adenine has already lost its base, so it needs no glycosylase and enters the same pathway one step down, at AP endonuclease. The O$^6$-methylguanine is one of the few lesions dangerous enough to warrant direct reversal, its methyl group being transferred to a cysteine in the repair protein at the cost of destroying that protein. The pattern is that the pathway is chosen by what the lesion looks like, not by what caused it.
Tags: dna-repair

---

Q+: A third strategy avoids excision altogether. What is it, and what is odd about one of its enzymes?
A: Direct chemical reversal of the damage, used selectively for certain highly mutagenic or cytotoxic lesions where speed matters. O$^6$-methylguanine has its methyl group removed by direct transfer to a cysteine residue in the repair protein itself, and the oddity is that this destroys the repair protein: having accepted a methyl group it cannot be reset, so each molecule can be used exactly once. That is a stoichiometric protein rather than a catalyst, which is an extraordinary thing for a cell to pay for and a measure of how dangerous the lesion is. The methyl groups of 1-methyladenine and 3-methylcytosine are handled differently, burned off by an iron-dependent demethylase that releases formaldehyde and regenerates the native base.
Tags: dna-repair, enzymes

---

Q: Cells repair all their DNA, but they repair some of it preferentially. How is repair aimed at the sequences that matter most?
A: By coupling it to transcription. RNA polymerase stalls when it hits a lesion, and coupling proteins use the stalled polymerase to direct the nucleotide excision repair machinery to that site, so genes currently in use by the cell get repaired first. This is a neat solution to a problem the cell has no other way to solve, since which DNA is important depends on the cell type and changes with circumstances. In bacteria, where genes are relatively short, the stalled polymerase is simply dissociated from the DNA, the damage repaired, and the gene transcribed again from the beginning. In eukaryotes, where genes can be enormously long, restarting from scratch would be wasteful, so a more complex reaction backs the polymerase up, repairs the damage and restarts it.
Tags: dna-repair, transcription

---

Q+: What happens when the coupling itself is broken?
A: Cockayne syndrome, caused by a defect in that coupling. Affected individuals suffer growth retardation, skeletal abnormalities, progressive neural retardation and severe sensitivity to sunlight. Most of these problems are thought to come not from unrepaired damage as such but from RNA polymerase molecules permanently stalled at damaged sites in important genes, so the gene is not merely damaged, it is blocked. The lesson is that a stalled polymerase is itself a problem, not just a symptom.
Tags: dna-repair, transcription

---

Q: The chemistry of the four DNA bases makes damage unusually easy to spot. What is the argument, and where does hypoxanthine come into it?
![Deamination products of A, G, C and 5-methyl C, showing that A gives hypoxanthine, G gives xanthine, C gives uracil, T cannot deaminate, and 5-methyl C gives T](assets/img/fig-5-43.png)
A: Every possible deamination event in DNA yields an unnatural base, which a specific glycosylase can recognize and remove without ambiguity. Hypoxanthine is the illustration: it is the simplest purine capable of pairing specifically with C, so on the face of it, it should have been the base of choice. It is not used in DNA, presumably because it is the direct deamination product of A, so if DNA contained it there would be no way to tell an accident from the real thing. Instead G, which carries a second amino group, is used to pair with C. G cannot arise from A by spontaneous deamination, and G's own deamination product, xanthine, is likewise unique. T has no amino group to remove and cannot deaminate at all.
Tags: dna-repair, evolution

---

Q+: RNA uses U and DNA uses T, which is 5-methyl U. Why the switch?
A: To keep the deamination product of C distinguishable. Spontaneous deamination of C gives U, and that is made relatively harmless by uracil DNA glycosylase, which finds U in DNA and removes it. But that only works because U has no business being there. If DNA contained U as a natural base, no repair system could tell a deaminated C from a legitimate U, and every deamination would become a mutation. Since RNA is thought to have carried the genetic code first, in the four nucleotides A, C, G and U, the methyl group that turns U into T looks like a modification adopted specifically so that the repair system would have an unambiguous signal.
Tags: dna-repair, evolution

---

Q+: There is one place where this logic breaks down in vertebrates. Where, and what does it cost us?
A: At methylated cytosines. About 3% of the C nucleotides in vertebrate DNA are methylated at specific CG sequences associated with inactive genes, and the accidental deamination of 5-methyl C produces T, which is a perfectly natural base sitting in a mismatched pair with the G opposite. A special glycosylase does recognize a T-G mismatch and remove the T, but it must be relatively ineffective, because methylated C's are exceptionally common sites of mutation. The number is striking: although only about 3% of human C's are methylated, mutations at those positions account for about one-third of the single-base mutations observed in inherited human diseases.
Tags: dna-repair, human-genome

---

Q: What are **translesion polymerases**, and why does the cell keep such inaccurate enzymes around?
![A stalled replicative polymerase, ubiquitylation of the sliding clamp, loading of a translesion polymerase, low-fidelity synthesis past the lesion, and return of the replicative polymerase](assets/img/fig-5-44.png)
A: They are the emergency option when a cell's DNA is heavily damaged and the ordinary repair pathways cannot keep up. The high-fidelity replicative polymerases simply stall at damaged DNA, and a stalled fork is worse than an inaccurate one, so cells employ versatile but less accurate backup polymerases to replicate straight through the damage. Human cells contain seven different ones. Some recognize a specific kind of damage and add the nucleotides that restore the correct sequence, for instance adding two A's opposite a thymine dimer. Others make only good guesses, particularly where the template base has been extensively damaged.
Tags: dna-repair, replication

---

Q+: Why are they so inaccurate, even on undamaged DNA, and how does the cell limit the damage they do?
A: They lack exonucleolytic proofreading, and many are much less discriminating than a replicative polymerase about which nucleotide to incorporate in the first place, so both stages of fidelity are missing. They are probably responsible for most of the base-substitution and single-nucleotide deletion mutations that accumulate in genomes, and they probably generate mutations at a low level even on undamaged DNA. The cell limits them by exposure: each translesion polymerase is given the chance to add only one or a few nucleotides before a high-fidelity replicative polymerase resumes. The proposed recruitment model is that a stalled replicative polymerase triggers covalent modification of the sliding clamp, typically ubiquitylation, which releases the replicative enzyme and, with the damaged DNA, attracts the appropriate translesion polymerase; once past the lesion the modification is removed and the accurate enzyme returns.
Tags: dna-repair, replication

---

Q+: The chapter draws a general principle out of the translesion polymerases. What is it?
A: That many repair enzymes are dangerous to the genome in their own right, so the cell's problem is not only having them but keeping them away from everything except the damage. A polymerase that will copy anything, a nuclease that will cut, a glycosylase that will excise: each is destructive if it acts where it is not needed. The regulation is therefore about spatial and temporal restriction rather than about switching an activity on and off globally, which is why so many of these mechanisms are triggered by a local signal at the lesion itself, such as a modified sliding clamp or a stalled RNA polymerase.
Tags: dna-repair, core

---

Q: What makes a **double-strand break** an especially dangerous lesion?
![Nonhomologous end joining, in which ends are cleaned and ligated with loss of nucleotides, beside homologous recombination, which repairs accurately from an undamaged homolog](assets/img/fig-5-45.png)
A: Because both strands are broken, so there is no intact template strand to copy from, which is the assumption every repair pathway discussed up to this point relies on. Ionizing radiation, replication errors, oxidizing agents and other metabolites all cause them, and if left unrepaired they would quickly break chromosomes into smaller fragments and lose genes at the next cell division. Two distinct mechanisms restore an intact helix: nonhomologous end joining, which brings the two ends back together directly, and homologous recombination, which uses a second, undamaged double helix of identical or nearly identical sequence as a template.
Tags: double-strand-breaks, dna-repair

---

Q: How does **nonhomologous end joining** work, and what does it cost?
![Ku heterodimers grasping the broken ends, additional proteins holding them together and processing them, ligation, and the three-dimensional structure of Ku on duplex DNA](assets/img/fig-5-46.png)
A: The broken ends are processed to remove damaged nucleotides, brought together, and rejoined by ligation, generally with the loss of some nucleotides at the join. A Ku heterodimer plays the central part, quickly grasping the broken chromosome ends; additional proteins hold the ends together and clean them up, single-strand gaps are filled by specialized repair polymerases, and a ligase dedicated to this pathway joins them covalently. Ku is unusually versatile at cleaning up almost any kind of chemically damaged end, which matters because ionizing radiation and chemical attack rarely leave tidy breaks. The cost is a mutation, usually a small deletion, at every site repaired this way.
Tags: double-strand-breaks, dna-repair

---

Q+: A quick and dirty repair that mutates the genome every time sounds unacceptable, yet it is the predominant mechanism in mammalian somatic cells. Why is that tolerable?
A: Because so little of the mammalian genome is essential for life that a deletion at a random position is very unlikely to land anywhere that matters. The scale of the accumulated damage is worth stating plainly: by the time a human reaches 70, a typical somatic cell carries more than 2000 such scars distributed through its genome, each a place where DNA was inaccurately repaired by end joining. A genome largely made of noncritical sequence can absorb that. The same arithmetic would be lethal in an organism with a compact genome.
Tags: double-strand-breaks, human-genome

---

Q+: There is a second danger in end joining that has nothing to do with losing nucleotides. What is it?
A: Joining the wrong two ends. Occasionally end joining attaches one broken chromosome to another, generating rearrangements, and the products are chromosomes with two centromeres or with none at all. Both kinds missegregate at cell division, so the damage is not confined to the sequence at the join but wrecks the inheritance of whole chromosomes. This is also why telomeres need their specialized structure: without it the natural end of every chromosome would look like a broken end and would be repaired into a fusion.
Tags: double-strand-breaks, telomeres

---

Q: When a cell has both options, what decides whether a double-strand break is repaired by end joining or by homologous recombination?
A: The cell cycle, acting through the nuclease that starts recombination. The two pathways compete for every break, but the specialized nuclease that resects DNA ends becomes highly active during S and G2 phases, because cell-cycle-controlled kinases phosphorylate it, so recombination usually wins at those times. That is exactly when it should: in S and G2 a newly replicated daughter molecule is lying nearby and can serve as the template. Outside those phases there is no sister chromatid to copy from and end joining is all that is available. Nonhomologous end joining predominates in humans overall, precisely because most of a cell's life is spent outside S and G2.
Tags: double-strand-breaks, recombination

---

Q+: Resection does more than expose single strands for the recombination machinery. What else does it accomplish?
A: It commits the repair irreversibly. The initiating nuclease, the Mre11 complex in eukaryotes, chews back in the 5′→3′ direction and leaves protruding 3′ ends that can be as long as several thousand nucleotides, and single-strand binding protein, the same one used at replication forks, then coats them to protect them from other nucleases and keep them free of intramolecular base-pairing. Once the ends look like that, nonhomologous end joining can no longer act on them, so the choice is made by destroying the substrate for the alternative rather than by any regulatory decision downstream.
Tags: double-strand-breaks, recombination

---

Q: Why does a cell delay its own cell cycle when DNA is damaged, and what happens when it cannot?
A: To buy time for repair. In mammalian cells the presence of DNA damage can block entry from G1 into S, slow S phase once begun, and block the G2 to M transition, and the cycle restarts only when the damage has been repaired. Damage also triggers increased synthesis of many repair enzymes, through signaling proteins that sense the damage and make more of whichever enzymes suit it. The consequences of losing this are visible in ataxia telangiectasia, caused by defects in the gene encoding the ATM protein, a large protein kinase that generates the intracellular signals halting the cell cycle in response to many kinds of spontaneous damage. Affected individuals show neurodegeneration, a predisposition to cancer and genome instability, all from living with lesions that were never given time to be repaired.
Tags: dna-repair, cancer

---

Q: What is **homologous recombination**, and what is the one step that defines it?
A: It is a flexible set of reactions producing an exchange of DNA strands between a pair of homologous duplex sequences, so that one stretch of duplex DNA can restore lost or damaged information on another. The defining step is strand exchange, also called strand invasion: a single strand from one duplex invades a second duplex, base-pairs with one of its strands and displaces the other. Because the corrective information comes from a separate DNA molecule rather than from the partner strand, homologous recombination can repair damage where both strands are ruined, which no other repair pathway can do.
Tags: recombination, dna-repair

---

Q+: Double-strand breaks from radiation get the attention, but they are not the main reason every proliferating cell needs this pathway. What is?
A: Replication accidents. Breaks do arise from reactive chemicals and radiation, including radon gas accumulating in some old basements, but more frequently they arise when forks become stalled or broken with no external cause at all. Those happen during nearly every round of DNA replication, which makes homologous recombination essential for every proliferating cell rather than an emergency system. It also repairs other damage such as covalent cross-links between the two strands of a helix, which makes it perhaps the most versatile repair mechanism the cell has, and probably explains why both the mechanism and the proteins have been conserved in virtually all cells on Earth.
Tags: recombination, replication

---

Q: Why can homologous recombination only act between very similar sequences, and what enforces that?
A: Base-pairing enforces it directly. Before recombining, two DNA helices sample each other's sequence by testing the potential base-pairing between a single strand from one duplex and a complementary single strand from the other, and recombination is initiated only when a match is found. The match need not be perfect but it must be very close. So the specificity is not imposed by a proofreading step added on top: the recognition event and the pairing event are the same thing, which is why the requirement is so hard to subvert.
Tags: recombination

---

Q: Trace the steps by which homologous recombination repairs a double-strand break.
![Resection of the 5′ ends of a broken duplex, strand invasion into the undamaged homolog, repair synthesis, and ligation restoring both helices](assets/img/fig-5-47.png)
A: The broken duplex and an intact template duplex perform what the book calls a strand dance. Specialized nucleases resect the broken ends, chewing back the 5′ ends to leave overhanging single-strand 3′ ends. One of those 3′ ends then invades the template duplex, searching it for homologous sequence by base-pairing, and once stable pairing is established the strand-exchange step is complete. An accurate DNA polymerase extends the invading strand using the undamaged molecule as template, restoring one of the damaged strands. Strand displacement, further repair synthesis and ligation then restore both original double helices with no loss or alteration of nucleotides at the site. The pathway is best regarded as a flexible series of reactions: all versions share resection and strand invasion, and they diverge afterward, some proceeding through a double Holliday junction.
Tags: recombination, double-strand-breaks

---

Q: Strand invasion poses three hard problems at once. What are they, and which protein solves them?
![RecA-bound single-stranded DNA held in a stretched conformation, and the heteroduplex formed after strand exchange](assets/img/fig-5-48.png)
A: How the invading strand rapidly samples a whole duplex for a complementary sequence, how the structure is stabilized once homology is found, and how the inherent stability of the template double helix is overcome so that base-pairing can be tested at all. The protein is RecA in *E. coli* and Rad51 in virtually all eukaryotes. Accessory proteins load RecA/Rad51 monomers onto the protruding single strand, forming a cooperatively bound filament that displaces the single-strand binding protein already there. Within that filament the DNA is held in an unusual conformation: groups of three consecutive nucleotides sit as they would in a conventional double helix, while between adjacent triplets the backbone is untwisted and stretched out. The filament then grasps a nearby duplex and stretches it too, destabilizing it enough that its strands can be pulled apart for testing.
Tags: recombination, structure

---

Q+: How does the search itself work, and why is it fast?
A: In triplets, and by rejection. The invading strand samples the duplex three bases at a time, and each triplet is already held in a base-pair-ready conformation, so a good match is cheap to test. Only when a triplet matches is the adjacent triplet sampled, and so on, which means a mismatch causes dissociation almost immediately and millions of possible pairings can be tested. Only an extended stretch of pairing, at least 15 nucleotides, stabilizes the invading strand enough to proceed. In the vast majority of binding events no match is found and the filament dissociates at once to begin a new search.
Tags: recombination

---

Q+: RecA/Rad51 is an ATPase. What is the ATP actually for, given that the search is the expensive-sounding part?
A: Not for searching. Every monomer along the filament must be in the ATP-bound state for the reactions to work, but the searching itself does not require hydrolysis: it proceeds by simple molecular collisions, which is what allows an enormous number of sequences to be sampled rapidly. Hydrolysis is needed afterward, to disassemble RecA from the complex of DNA molecules once stable base-pairing has been achieved and strand exchange is complete. So the ATP pays for letting go rather than for looking, which is a pattern worth noticing: binding is cheap and reversible, and the cell spends energy at the point where it wants a step made irreversible.
Tags: recombination, thermodynamics

---

Q: A replication fork meets a single-strand gap in the parent helix just ahead of it. What happens, and why can end joining not fix it?
![A replication fork collapsing at a single-strand break, then being rebuilt by strand exchange and DNA synthesis so that replication restarts](assets/img/fig-5-49.png)
A: The fork falls apart, leaving one broken and one intact daughter chromosome. The reason end joining is useless here is that this is a one-sided double-strand break: there is only one free end, and there is nothing to join it to. Homologous recombination becomes essential, and it repairs the broken fork using the same basic reactions as any other double-strand break, with the undamaged duplex serving as template. The result is a fork that has moved past the break on the damaged template and restarted.
Tags: recombination, replication

---

Q+: A different accident stalls a fork rather than breaking it. What is **fork reversal**?
![A fork backing up so that the newly synthesized leading and lagging strands base-pair with each other, allowing synthesis past the lesion before the fork re-forms](assets/img/fig-5-50.png)
A: When a fork stalls on damage that clogs the replication machinery, that damage often ends up buried deep in the core of the fork where it cannot easily be reached. Fork reversal backs the machine up: a specialized helicase peels the newly synthesized strands away from their parent templates and lets them base-pair with each other, which reverses the fork and exposes the lesion. Two outcomes are then possible. The damage, now accessible, can be repaired conventionally and the fork restarted. Or, as drawn in the figure, synthesis can bypass the damage by using the newly made daughter strand as template instead of the damaged parent strand, so the fork gets past and the lesion is dealt with later. How the fork restarts afterward remains a mystery.
Tags: recombination, replication

---

Q: Homologous recombination is the accurate pathway, yet it carries its own risk. What is **loss of heterozygosity**?
A: It is what happens when a break is repaired from the wrong template. Sometimes a broken human chromosome is repaired using the homolog inherited from the other parent rather than the sister chromatid. Since maternal and paternal chromosomes differ in sequence at many positions, that converts the repaired region from maternal to paternal sequence or the reverse, and the cell loses the difference between its two copies. The consequences are severe if the homolog used as template carries a deleterious mutation, because the recombination event has just overwritten the good copy with the bad one. It happens rarely, but it is a critical step in the formation of many cancers.
Tags: recombination, cancer

---

Q+: What keeps the cell from doing that most of the time?
A: Mainly proximity, enforced by timing. Resection of the broken ends happens primarily in S and G2, which favours using a daughter duplex as template, either a partially replicated chromosome or a fully replicated sister chromatid. Since the two daughter chromosomes lie close together, their physical closeness disfavours the use of any other genome sequence, so the correct template wins by being nearest rather than by being recognized as correct. On top of that, loading RecA/Rad51 and the strand-exchange reaction are themselves tightly controlled by a host of accessory proteins, though exactly how all of them coordinate the process remains unknown.
Tags: recombination

---

Q: What are DNA **repair factories**, and how were they visualized?
![Fibroblast nuclei showing total DNA, sites of repair synthesis, and localization of the Mre11 complex in stripes matching the pattern of irradiation](assets/img/fig-5-51.png)
A: The enzymes catalyzing recombinational repair are made at relatively high levels in eukaryotes and sit dispersed through the nucleus in an inactive form. On DNA damage they converge rapidly on the damaged sites, become activated, and form structures in which many lesions are apparently brought together and repaired. The demonstration is elegant: human fibroblasts were x-irradiated through a microscopic grid with x-ray-absorbing bars spaced 1 μm apart, producing a striped pattern of damage so that damaged and undamaged DNA could be compared within one nucleus. Thirty minutes later, both new repair synthesis, marked by BrdU incorporation, and the Mre11 complex itself were found in stripes matching the pattern of irradiation.
Tags: recombination, dna-repair

---

Q+: What kind of structure are these factories thought to be?
A: Biomolecular condensates, formed by many weak interactions between different repair proteins and between repair proteins and damaged DNA, of the kind described in chapter 3. The point of concentrating the machinery this way is that the high local concentration of the right proteins together with their substrates is thought to increase the speed and efficiency of repair. It is the same logic as any other condensate: nothing new is synthesized and no compartment is built, the cell simply raises a local concentration by making the components stick weakly to each other.
Tags: recombination, condensates

---

Q: Both too much and too little homologous recombination cause cancer. How does each?
A: Too little raises the mutation rate, because damage that recombination would have repaired flawlessly is either left alone or shunted to an error-prone pathway. Too much causes repair from the wrong template, giving loss of heterozygosity and destroying good copies of genes. A delicate balance has evolved that keeps the process in check on undamaged DNA while letting it act quickly on lesions as soon as they appear, and mutations in the components that carry it out and regulate it are responsible for several inherited forms of cancer.
Tags: recombination, cancer

---

Q+: **Brca1** and **Brca2** are both breast cancer genes acting in this pathway. At which steps?
A: At two different points, on either side of resection. Brca1 regulates an early step in broken-end processing, and without it ends are not processed correctly for homologous recombination and are instead shunted into the error-prone nonhomologous end-joining pathway. Brca2 acts after resection, where it is needed to load Rad51 correctly onto the protruding single-strand ends in preparation for strand exchange. In both cases repair by homologous recombination becomes inefficient, damage accumulates, and in a small proportion of cells that gives rise to a cancer. Mutations in these genes were first discovered through the greatly increased frequency of breast cancer they cause, before their biochemical roles were known.
Tags: recombination, cancer

---

Q: What does homologous recombination accomplish in meiosis that it does not accomplish in repair?
![A diploid cell with one pair of homologous chromosomes undergoing duplication and meiosis to give haploid cells marked with a crossover site and sites of gene conversion](assets/img/fig-5-52.png)
A: It deliberately exchanges material between two different chromosomes to generate DNA molecules carrying novel combinations of genes. In repair the aim is to restore what was there, so the template is chosen to be as nearly identical as possible and a perfect outcome leaves no trace. In meiosis the aim is the opposite: the maternal and paternal homologs differ at many positions, and recombination between them produces germ cells whose chromosomes carry blocks of both parents' genetic information, along with many short regions of gene conversion. That is what supplies the next generation with unique characteristics for natural selection to act on. The reactions at the core are the same ones used to repair a double-strand break.
Tags: recombination, meiosis

---

Q: In meiosis, homologous recombination starts with a deliberate break rather than an accidental one. What makes it?
![Meiotic recombination from the Spo11 cut and Mre11 processing through strand exchange, splitting into a non-crossover pathway and a double Holliday junction pathway](assets/img/fig-5-53.png)
A: A specialized Spo11 protein complex, which breaks both strands of the double helix in one of the recombining chromosomes. After catalyzing the cut, the complex remains covalently bound to the broken DNA, in the same way a topoisomerase stays attached to the phosphate it has cleaved. The Mre11 complex then chews back the ends, removing the bound proteins along with the DNA and leaving the protruding 3′ single-strand ends needed for strand invasion. Many subsequent reactions closely resemble double-strand break repair and use some of the same proteins, though several meiosis-specific proteins guide them differently.
Tags: recombination, meiosis

---

Q+: What is the key difference between meiotic recombination and recombinational repair, given they share so much machinery?
A: The choice of partner. In repair, recombination occurs between newly replicated, identical DNA duplexes, and the whole regulatory apparatus is arranged to make that happen. In meiosis it occurs preferentially between the maternal and paternal chromosomal homologs, which are held closely together during meiosis for precisely that reason. Since the homologs differ in sequence at many positions, this is what makes meiotic recombination generative rather than merely restorative: it produces chromosomes carrying combinations of alleles that neither parent had.
Tags: recombination, meiosis

---

Q: What is a **Holliday junction**, and what is meant by its isomerization?
![The crossed form of a Holliday junction, its isomerization to an open symmetrical structure, branch migration, and the three-dimensional structure of the open form](assets/img/fig-5-54.png)
A: A Holliday junction, or cross-strand exchange, is the structure in which two paired homologous DNA helices are held together by the reciprocal exchange of two of the four strands present, one strand originating from each helix. Drawn conventionally it has one pair of crossing strands and one pair of noncrossing strands, so the four strands are not equivalent. Through a series of rotational movements it can isomerize into an open, symmetrical structure in which both pairs occupy equivalent positions, and it is this open isomer that specialized proteins bind. The junction is named after the scientist who first proposed its formation.
Tags: recombination, structure

---

Q+: What is **branch migration**, and what catalyzes it?
![A RuvA tetramer and two RuvB hexamers bound to an open Holliday junction, spooling DNA through it in opposite directions](assets/img/fig-5-55.png)
A: Branch migration is the movement of the junction along the paired helices, which greatly expands the region of heteroduplex DNA created by the initial strand exchange. Proteins bound to the open isomer use the energy of ATP hydrolysis to drive it: in *E. coli* a tetramer of RuvA plus two hexamers of RuvB, where RuvB resembles the hexameric helicases used in replication and spools DNA rapidly through the junction while RuvA coordinates the movement and threads the strands to avoid tangling. In meiosis heteroduplex regions often migrate thousands of nucleotides from the original site of the double-strand break, and the junctions are often produced in pairs, as double Holliday junctions.
Tags: recombination, machines

---

Q: Meiotic recombination has two possible outcomes. What are they, and how are they distributed in humans?
A: A non-crossover or a crossover. In humans approximately 90% of the double-strand breaks made during meiosis are resolved as non-crossovers, in which the two original duplexes separate unaltered except for a region of heteroduplex near the site of the break, which is essentially the double-strand break repair reaction. The other outcome is more consequential: a double Holliday junction is formed and cleaved by specialized enzymes, which swaps the portions of each chromosome lying upstream and downstream of the two junctions and produces two chromosomes that have crossed over, each carrying a large number of both maternally and paternally inherited genes.
Tags: recombination, meiosis

---

Q+: With only about 10% of breaks becoming crossovers, how does a cell make sure the few it gets are useful?
A: Through **crossover control**, a regulatory mechanism that is well documented and poorly understood. The decision is not random: a crossover in one position inhibits crossing-over in neighbouring regions, which spreads the crossovers roughly evenly along the chromosomes. It also guarantees that every chromosome, no matter how small, undergoes at least one crossover every meiosis, and for many organisms roughly two occur per chromosome, one on each arm. That guarantee is not only about generating variety: crossovers play an important mechanical role in the proper segregation of chromosomes during meiosis, so a chromosome with none of them would be liable to missegregate.
Tags: recombination, meiosis

---

Q: What is a **heteroduplex** region, and why is it a site of potential gene conversion?
![Sites of potential gene conversion and a crossover site marked on a recombined chromosome, with heteroduplex regions shown in detail](assets/img/fig-5-56.png)
A: Whether a meiotic recombination event resolves as a crossover or a non-crossover, the machinery leaves behind a region where a strand with the sequence of the paternal homolog is base-paired with a strand from the maternal homolog. These regions tolerate a small percentage of mismatched base pairs and, thanks to branch migration, often extend for thousands of nucleotide pairs. Because maternal and paternal sequences differ at many positions, a heteroduplex usually contains a few mismatches, and a mismatch is exactly what the repair machinery will act on. The many non-crossover events of meiosis therefore leave scattered sites in germ cells where short sequences from one homolog have been pasted into the other.
Tags: recombination, meiosis

---

Q: What is **gene conversion**, and why did it look like a violation of the rules of genetics?
![A heteroduplex covering a site where the red and blue alleles of gene X differ, mismatch repair excising part of the blue strand, and synthesis creating an extra copy of the red allele](assets/img/fig-5-57.png)
A: The rule it appears to break is that each parent contributes equally, so when a diploid cell undergoes meiosis to produce four haploid germ cells, exactly half the genes among them should be maternal and half paternal. In organisms such as fungi, where all four products of a single meiosis can be recovered and analyzed, rare cases show three copies of the maternal version of a gene and only one of the paternal. That deviation in the segregation of alleles is gene conversion, and typically only small sections of DNA are affected, sometimes only part of a gene.
Tags: recombination, meiosis

---

Q+: What actually causes it?
A: Mismatch repair acting on a heteroduplex. If the two strands of a heteroduplex are not identical, mismatched base pairs form, and the cell's mismatch repair system corrects them. The crucial difference from the situation after replication is that here neither strand is newly synthesized, so there is no way to tell which one should be preserved and the system simply picks a strand at random as the template. That erases the sequence on one homolog and duplicates the other, which is precisely one allele being lost and the other gained. So a phenomenon originally regarded as a mysterious deviation from genetics turns out to be a straightforward consequence of a repair system doing its ordinary job in a situation where its usual strand-identification cue is absent.
Tags: recombination, mismatch-repair

---

Q: Homologous recombination shuffles alleles but leaves gene order unchanged. What can transposition and conservative site-specific recombination do that it cannot?
A: They do not require substantial regions of DNA homology, so they can alter the order of genes along a chromosome and introduce whole blocks of sequence into a genome. Homologous recombination is constrained by the requirement that the recombining sequences be very similar, which is exactly what keeps gene order intact: a sequence can only exchange with something almost identical, so nothing ends up anywhere new. The two mechanisms in this section are largely dedicated to moving mobile genetic elements, which range from a few hundred to tens of thousands of nucleotide pairs and typically carry a unique set of genes, often including one encoding the specialized enzyme that catalyzes the movement of that element and its close relatives.
Tags: transposons, recombination

---

Q: **Mobile genetic elements** are often called selfish DNA. What is the case for and against that description?
A: The case for is that they are molecular parasites that persist because cells cannot get rid of them, and they have come close to overrunning our own genome: nearly half of the DNA in the human genome can be traced to them. Random mutation has since altered their sequences so that only a few of the many copies in our DNA are still capable of moving, and the rest are molecular fossils that provide striking clues to our evolutionary history. The case against is that they can benefit the host. The genes they carry are sometimes advantageous, as with antibiotic resistance in bacteria, and their movement produces much of the genetic variation on which evolution depends, since besides moving themselves they occasionally rearrange neighbouring host sequences. Spontaneous mutations in bacteria, *Drosophila*, humans and other organisms are often due to their random movement, and while many are deleterious, some are advantageous and spread. It is almost certain that much of the variety of life originally arose this way.
Tags: transposons, genome-evolution

---

Q: What is a **transposon**, and what does a **transposase** do?
A: A transposon, or transposable element, is a mobile element that moves by transposition. A transposase, usually encoded by the transposon itself, acts on specific DNA sequences at each end of the element and causes it to insert into a new DNA site. Most transposons are only modestly selective about their target, so they can insert into many different places, and in particular there is no general requirement for sequence similarity between the ends of the element and the target sequence. That is the point of contrast with homologous recombination: the enzyme recognizes the element rather than the destination.
Tags: transposons, enzymes

---

Q+: How often do transposons actually move, and why is the rate so different in bacteria and in plants and animals?
A: In bacteria, typically one transposition event every $10^5$ cell divisions, and significantly more frequent movement would probably destroy the host genome. In plants and animals it is common for progeny to carry tens to hundreds of new insertions relative to their parents. The tolerance is a matter of what is at stake: plant and animal genomes carry vast amounts of nonessential sequence, so most insertions land somewhere harmless, whereas a compact bacterial genome is almost all essential and an insertion is likely to hit something that matters. The same argument runs through this chapter: how much damage an organism can tolerate scales with how much of its genome is expendable.
Tags: transposons, genome-evolution

---

Q: Table 5-4 divides transposable elements into three classes. What are they?
A: The classes differ in structure and in how they move.

| Class | Structure | Movement | Examples |
| --- | --- | --- | --- |
| DNA-only transposons | Short inverted repeats at each end | Moves as DNA, by cut-and-paste or replicative pathways | P element (*Drosophila*), Ac-Ds (maize), Tn3 (*E. coli*), Tam3 (snapdragon), Helraiser (bat) |
| Retroviral-like retrotransposons | Directly repeated long terminal repeats (LTRs) at each end | Moves via an RNA intermediate made from a promoter in the LTR | Copia and Gypsy (*Drosophila*), Ty1 (yeast), HERVK (human), Bs1 (maize), EVADE (*Arabidopsis*) |
| Nonretroviral retrotransposons | Poly A at the 3′ end of the RNA transcript, 5′ end often truncated | Moves via an RNA intermediate often made from a neighbouring promoter | I element (*Drosophila*), L1 (human), Cin4 (maize), Karma (rice) |

They range in length from 1000 to about 12,000 nucleotide pairs, each family has many members, and some viruses move in and out of host chromosomes by the same mechanisms, being related to the first two classes.
Tags: transposons

---

Q: How did **DNA-only transposons** turn antibiotic resistance into a public health problem?
![Two bacterial DNA-only transposons, IS3 and Tn3, showing their transposase genes, inverted repeat sequences and an ampicillin-resistance gene](assets/img/fig-5-58.png)
A: The genes encoding antibiotic-inactivating enzymes are carried on transposons. When penicillin and streptomycin became widely available in the 1950s most disease-causing bacteria were susceptible; now penicillin and its modern derivatives are ineffective against many strains, including those causing gonorrhea and bacterial pneumonia. A transposon can only transpose within a cell that already carries it, but it can be moved between cells by horizontal gene transfer, and once introduced it inserts into the genome and is faithfully passed to all progeny by ordinary replication and cell division. So the resistance gene gets a mechanism for hopping between bacteria and a mechanism for being inherited reliably once it arrives.
Tags: transposons, evolution

---

Q+: What does the structure of a bacterial DNA-only transposon look like?
A: A transposase gene flanked by two short DNA sequences recognized by that same transposase, usually arranged so that one is an inverted repeat of the other. The inverted repeats can be as short as 20 nucleotides, and they are all that is needed for whatever lies between them to be transposed by the matching enzyme, which is why a transposon can pick up extra cargo. Some carry additional genes, such as the AmpR gene inactivating ampicillin in Tn3. IS3 is the minimal version, carrying only the transposase; Tn3 is the larger one with resistance genes on board.
Tags: transposons, structure

---

Q: Trace **cut-and-paste transposition**, and say what signature it leaves behind.
![Transposase monomers bringing the inverted repeats together into a loop, cleaving the donor chromosome, and inserting the transposon at a staggered break in the target](assets/img/fig-5-59.png)
A: The transposase brings the two inverted repeat sequences together, forming a DNA loop, and excises the element from the donor chromosome. Insertion into the target, also catalyzed by the transposase, happens at a more or less random site through the creation of staggered breaks. The two single-strand gaps left by those staggered breaks are then filled in by DNA polymerase and ligase, and because each gap is filled using target sequence as template, the insertion site ends up flanked by a short direct repeat of the target DNA. Those direct repeats are the signature of a past transposition event, and they often provide valuable clues for identifying transposons in genome sequences.
Tags: transposons

---

Q+: The transposon leaves a hole in the donor chromosome. What happens to it?
A: One of the two double-strand break pathways from earlier in the chapter deals with it. If the chromosome has recently been replicated so that an identical copy of the damaged host sequence is available, recombinational repair can heal the lesion perfectly. Otherwise nonhomologous end joining reseals the break, and in that case the sequence that originally flanked the transposon is often altered, producing a mutation at the site the element left. So a transposon can mutate a genome twice over: once where it lands and once where it departed from.
Tags: transposons, double-strand-breaks

---

Q+: The cut-and-paste mechanism was later found doing something entirely different in vertebrates. What?
A: Generating antibody and T-cell receptor diversity. V(D)J recombination, the process that rearranges DNA in developing B and T cells, uses the same mechanism as cut-and-paste transposons. V(D)J recombination is found only in vertebrates and is a relatively recent evolutionary novelty, but its mechanism was probably derived from the much more ancient transposons, which makes the adaptive immune system a domesticated parasite. The connection shows up elsewhere too: the Ku protein central to nonhomologous end joining is also essential for V(D)J joining, and the two share many mechanistic similarities, the difference being that V(D)J joining acts on double-strand breaks the cell makes deliberately.
Tags: transposons, evolution

---

Q: Not all DNA-only transposons cut themselves out. What are **helitrons** and how do they move?
![Helitron transposase nicking the donor DNA, peeling back a single strand with helicase activity, releasing a single-stranded circle, and inserting it into target DNA](assets/img/fig-5-60.png)
A: Helitrons replicate themselves and move the copy, leaving the original intact and in place. They are found in all branches of life and are especially common in plants and animals, where they can make up several percent of genomes. They carry a gene for an unusual transposase that works as both a sequence-specific nuclease and a helicase. In the model based on Helraiser, a helitron from bats, the transposase nicks one end of the element and, using its helicase activity, peels back the single strand; a second reaction releases the transposon as a single-stranded DNA circle, which travels with the transposase to a new site where the enzyme catalyzes its covalent insertion.
Tags: transposons

---

Q+: Helitrons often carry pieces of the host genome with them. How does that happen mechanistically, and why does it matter?
A: It happens when the transposase skips over its own CTAGT recognition sequence at the release step and instead cleaves the host DNA further downstream at a similar sequence. The single-stranded circle it then produces contains both helitron and host DNA, and both get inserted at the target. That is a mistake in a recognition step being turned into a genome-shuffling mechanism, and it is why helitrons are thought to be especially important in reshuffling genomic information to produce variant organisms for natural selection to work on.
Tags: transposons, genome-evolution

---

Q: Certain viruses count as mobile genetic elements. What separates them from transposons, and where are they thought to have come from?
A: The sequences forming these viruses encode proteins that package their genetic information into virus particles able to leave the host cell and infect others, which no transposon can do. Most viruses probably evolved from transposable elements by capturing genes from their host cells: genes originally serving some other purpose which, after a long process of mutation and selection, now code for the structural proteins that let the virus escape. Viruses that insert into host chromosomes generally do so by behaving either like DNA-only transposons or like retroviral-like retrotransposons, and much of what is known about those two mechanisms came from studying the viruses that use them.
Tags: viruses, transposons

---

Q: Walk through the life cycle of a **retrovirus**, and say where the name comes from.
![A retrovirus entering a cell, reverse transcriptase making a DNA-RNA then DNA-DNA helix, integration into the host chromosome, transcription and assembly of new particles](assets/img/fig-5-61.png)
A: Outside the cell a retrovirus is a single-strand RNA genome, typically 7000 to 12,000 nucleotides, packed into a protein capsid with a virus-encoded reverse transcriptase, all surrounded by a lipid envelope carrying virus-encoded envelope proteins. On infection the viral RNA enters the cell and the reverse transcriptase, which can polymerize DNA on either an RNA or a DNA template, makes first a DNA copy of the RNA and then a second DNA strand, giving a double-strand DNA copy of the genome. A virus-encoded transposase called integrase recognizes specific sequences near the two ends and inserts the DNA into a host chromosome by a mechanism similar to cut-and-paste transposition. Integration is required for the host RNA polymerase to make new viral RNA, which the host machinery then uses to produce capsid, envelope and reverse transcriptase for new particles. The name refers to reversing the usual flow of information, which normally runs from DNA to RNA. HIV is the best-known member.
Tags: viruses, retroviruses

---

Q: How does SARS-CoV-2 replicate, given that it never makes DNA at all?
![The coronavirus life cycle: entry and loss of envelope, translation of the genome, RNA replicase making complementary copies and new genomes, and assembly of new particles](assets/img/fig-5-62.png)
A: Its genome is a single-strand RNA of about 30,000 nucleotides packaged along its length with an RNA-binding protein and enclosed in a lipid bilayer carrying the spike protein. On entry the genome is translated directly by ribosomes as though it were an mRNA, which makes it a [+] strand virus, and among the first proteins made is an RNA-dependent RNA polymerase. That assembles with several other viral proteins and a few host proteins into a replicase complex, which needs no primer, starts at the 3′ end of the genome and makes a complete complementary RNA copy; that copy is then used as template to make new genomes. The whole process takes about 10 hours and a single infected cell can produce as many as 1000 new virus particles.
Tags: viruses, rna-viruses

---

Q+: Coronavirus replication happens entirely outside the nucleus, in a compartment the virus builds. What is it and what is it for?
A: Double-membrane compartments commandeered from the endoplasmic reticulum. Since coronaviruses do not use DNA, no step of their replication needs the nucleus, so the whole cycle can run in the cytoplasm, and it runs inside these virus-induced compartments. They are believed to protect the virus from the cell's many antiviral defenses during replication and assembly. The virus codes for at least 27 different proteins, some of which organize these membrane structures while others inhibit various immune responses to the infection.
Tags: viruses, rna-viruses

---

Q: Coronaviruses do something no other RNA virus family does. What, and what three consequences follow?
A: Their replicase complexes proofread as they copy the genome, in much the same way DNA polymerases do: an incorrectly added nucleotide is excised by a 3′-to-5′ exonuclease carried in the complex, giving the replicase another chance. Three consequences follow. Coronaviruses do not mutate as fast as most RNA viruses, which is why the annual reformulation of influenza vaccines may not always be necessary for them. They can carry a larger genome, since the lower the mutation rate the more essential proteins a genome can maintain; SARS-CoV-2 has 30,000 nucleotides coding for at least 27 proteins against influenza's 13,500 nucleotides and about 10 proteins. And they are harder to treat with certain antivirals.
Tags: viruses, fidelity

---

Q+: How do the two families of antiviral nucleoside analogs work, and why does proofreading matter for each?
A: Viral replicases are attractive drug targets partly because no similar enzyme exists in an uninfected host cell, which reduces the chance of side effects. Remdesivir is the first type: a nucleoside triphosphate analog that fools the replicase into adding it to a growing RNA chain, after which its improper 3′ end poisons further elongation. Coronavirus proofreading can excise many of these analogs and so reduce their potency, which is exactly the mechanism the exonuclease evolved for. Molnupiravir takes the second route: it is incorporated by the replicase, escapes proofreading, and then base-pairs incorrectly in the next round of replication, introducing a lethal number of mutations. The first drug is defeated by proofreading; the second is designed to slip past it.
Tags: viruses, fidelity

---

Q: How does a **retroviral-like retrotransposon** move, and what stops it from behaving like a retrovirus?
A: The whole transposon is transcribed, producing an RNA copy typically several thousand nucleotides long. That transcript is translated by the host cell as a messenger RNA and encodes a reverse transcriptase, which makes a double-strand DNA copy of the RNA via an RNA-DNA hybrid intermediate, precisely mirroring the early stages of a retroviral infection. An integrase, also encoded by the element and closely resembling the transposases of DNA-only transposons in structure and mechanism, then inserts the linear double-strand DNA into a chromosome. What is missing is any ability to leave the cell: these elements have no capsid or envelope, so they are passed only to the descendants of their resident cell through ordinary replication and cell division. They are present in organisms as diverse as yeasts, flies and mammals.
Tags: transposons, retroviruses

---

Q: How does a **nonretroviral retrotransposon** move, and what is different about the role RNA plays?
![L1 transcription, synthesis of a reverse transcriptase-endonuclease that binds L1 RNA, cleavage of the target DNA, and DNA-primed reverse transcription at the nick](assets/img/fig-5-63.png)
A: RNA is much more directly involved than in the retroviral-like elements. A complex of an endonuclease and a reverse transcriptase, bound to the 3′ end of the L1 RNA, nicks the target DNA at the point where insertion will occur. That cleavage produces a 3′-OH end in the target itself, which is then used as the primer for reverse transcription, so a single-strand DNA copy of the element is synthesized directly onto the target DNA and linked to it. Further processing generates a new double-strand copy inserted at the site of the original nick. The RNA is therefore the direct template for a target-primed reverse transcription event, rather than being copied into free DNA that is integrated afterward.
Tags: transposons

---

Q+: **Alu** elements have no endonuclease and no reverse transcriptase of their own, yet there are more than a million of them. How?
A: By pirating the enzymes encoded by active L1 elements. Alu is a member of the SINE family, short interspersed nuclear elements, and the bulk of nonretroviral retrotransposons in the human genome carry no machinery at all, yet they have amplified themselves into major constituents of our DNA on borrowed enzymes. Together the LINEs and SINEs make up more than 30% of the human genome, with 500,000 copies of the former and more than a million of the latter. L1, the LINE, is the parasite that works for a living; Alu is a parasite on the parasite.
Tags: transposons, human-genome

---

Q+: L1 movement is not merely a curiosity of genome composition. What can it do?
A: Cause disease by landing in a gene. Most nonretroviral retrotransposons in the human genome are immobile, but a few L1 elements retain the ability to move, and individual movements have been identified, some resulting in human disease. The example given is a particular type of hemophilia caused by an L1 insertion into the gene encoding the blood-clotting protein Factor VIII.
Tags: transposons, human-genome

---

Q: The human genome contains a fossil record of transposon activity. What does reading it show?
A: Comparing the sequences of the approximately 3 million transposable element remnants in the human genome has made it possible to reconstruct their movements over the past several hundred million years. Cut-and-paste DNA-only transposons were very active well before the divergence of humans and Old World monkeys 25 to 35 million years ago, but accumulated inactivating mutations and have been dormant in our lineage since. The genome is littered with relics of retroviral-like retrotransposons, and none appear to be active today; only a single family is believed to have transposed since the human-chimpanzee divergence about 6 million years ago. Nonretroviral retrotransposons are also ancient, but some are still moving.
Tags: transposons, human-genome

---

Q+: How much of our current mutation load comes from transposition, and how does the mouse compare?
A: A de novo movement of an *Alu* element is estimated to occur once in every 100 to 200 human births, and movement of nonretroviral retrotransposons is responsible for perhaps two mutations out of every thousand new human mutations. Mice are strikingly different: their genome contains roughly the same density of all three transposon types, but both kinds of retrotransposon are still actively transposing, and they cause approximately 10% of new mutations. It has been proposed that bursts of transposition activity could have been responsible for critical speciation events during the radiation of the mammalian lineages from a common ancestor, a process that began about 170 million years ago.
Tags: transposons, genome-evolution

---

Q: Which type of transposon predominates in which organism?
- [x] Bacteria are almost entirely DNA-only, yeasts are mainly retroviral-like, *Drosophila* has all three, and humans have all three
- [ ] Bacteria and yeasts are both DNA-only, while animals use only retrotransposons
- [ ] Every organism carries roughly equal proportions of all three classes
- [ ] Only vertebrates carry nonretroviral retrotransposons
A: The vast majority of bacterial transposons are DNA-only, with a few relatives of the nonretroviral retrotransposons also present. In yeasts the main mobile elements are retroviral-like retrotransposons. *Drosophila* has DNA-only, retroviral-like and nonretroviral elements all together. The human genome also contains all three, but their evolutionary histories are strikingly different, since only the nonretroviral ones are still moving. The reason the distinction matters is mechanistic: DNA-only elements move by DNA breaking and joining, retroviral-like elements also move by DNA breaking and joining but use RNA as a template to generate the DNA substrate, and nonretroviral elements use an RNA copy as the direct template for reverse transcription primed on the target itself.
Tags: transposons

---

Q: What is **conservative site-specific recombination**, and what two outcomes can it produce?
![A circular DNA integrating into a second molecule and excising again, and the same reaction with the sites in the opposite orientation producing an inversion](assets/img/fig-5-64.png)
A: Breakage and joining occur at two special sites, one on each participating DNA molecule, carried out by a specialized recombinase that breaks and rejoins the two double helices at those specific sequences. The outcome depends only on the relative orientation of the two sites. With one orientation a circular DNA molecule becomes incorporated into a second molecule by integration, and the reverse reaction excises it and re-forms the original circle. With the sites in the opposite orientation, the same chemistry inverts a specific segment of DNA in a chromosome instead.
Tags: site-specific-recombination

---

Q+: How do bacterial DNA viruses exploit the integration and excision version?
A: To hedge. When integrated into the host genome, the viral DNA is replicated along with the host DNA and passed faithfully to all descendant cells, which costs the virus nothing. If the host cell then suffers damage, for instance by UV irradiation, the virus reverses the reaction, excises its genome and packages it into a virus particle. So it can replicate passively as a component of the host genome and still leave the sinking ship, sitting in a protective coat until a new healthy host turns up. The reversibility of the recombination is what makes both options available from one mechanism.
Tags: site-specific-recombination, viruses

---

Q: What are the two things that distinguish conservative site-specific recombination from transposition?
A: The first is what has to be recognized. Site-specific recombination requires specialized sequences on both the donor and the recipient DNA, each containing a recognition site for the particular recombinase, which is where the name comes from. Transposition requires only that the transposon carries a specialized sequence, and for most transposons the recipient DNA can be almost anything. The second is the chemistry. The recombinases resemble topoisomerases: they form transient high-energy covalent bonds with the DNA and use that stored energy to complete all the rearrangements without any new DNA synthesis, so every phosphate bond broken during the event is restored by the end, which is what "conservative" means. Transposition by contrast typically leaves gaps that DNA polymerases must repair.
Tags: site-specific-recombination, transposons

---

Q: What is **phase variation** in *Salmonella*, and what is it for?
![The invertible segment carrying a promoter, driving H2 flagellin and a repressor in one orientation and allowing H1 flagellin in the other](assets/img/fig-5-65.png)
A: It is a switch in gene expression caused by the occasional inversion of a specific 1000-nucleotide-pair piece of DNA, brought about by a conservative site-specific recombinase encoded within the invertible segment itself. The bacterium has two different genes for the cell-surface protein flagellin, and the inversion changes the orientation of a promoter sitting inside the invertible segment. In one orientation the promoter drives the H2 flagellin gene together with a repressor that blocks H1; flip it and neither H2 nor the repressor is transcribed, so H1 is released from repression and expressed instead. The purpose is defence against the immune response of a vertebrate host: if the host raises antibodies against one flagellin, the few bacteria that have switched can still survive and multiply.
Tags: site-specific-recombination, evolution

---

Q+: The inversion happens only about once in every $10^5$ cell divisions. Why is a rare switch the right design?
A: Because the change is copied faithfully through all subsequent replication cycles, so a single inversion event produces an entire clone of bacteria carrying one flagellin or the other. What the population needs is not for individual cells to keep flipping but for both variants to exist somewhere in it when the immune system commits to attacking one. A high switching rate would give every cell an ambiguous, constantly changing surface and waste the advantage; a rate around $10^{-5}$ keeps the population overwhelmingly one type while guaranteeing that a minority of the other is always present.
Tags: site-specific-recombination

---

Q: How is a bacterial site-specific recombinase used to delete a gene in one mouse tissue only?
![Cre recombinase expressed under a liver-specific promoter deleting a LoxP-flanked gene of interest in liver cells while it is expressed normally elsewhere](assets/img/fig-5-66.png)
A: Two engineered DNA molecules go into the germ line. The first carries the gene for a recombinase, typically Cre from bacteriophage P1, under the control of a tissue-specific promoter so that the enzyme is made only in that tissue. The second carries the gene of interest flanked by the recombinase's recognition sites, LoxP sites in the case of Cre, and the mouse is engineered so that this is its only copy of that gene. Where Cre is made, the gene is excised; everywhere else it is expressed normally. Since many tissue-specific promoters are known and many are active only at particular times in development, the same trick can delete any gene at a chosen time in a chosen tissue.
Tags: site-specific-recombination, model-organisms

---

Q+: What problem does this solve that a plain knockout cannot, and what is the reverse use of the same trick?
A: It gets round the fact that a gene playing a key role in the early development of many tissues cannot be deleted from the germ line at all, because the animal dies too early in development to be informative. Restricting the deletion in space and time lets you ask what the gene does in one tissue while the rest of the animal develops normally. The same strategy run the other way expresses a gene artificially in a tissue of interest: instead of removing the gene, the triggered deletion removes an intervening sequence and joins a strong transcriptional promoter to the gene. With both directions available, one can in principle determine the influence of any protein in any desired tissue of an intact animal.
Tags: site-specific-recombination, model-organisms

---

Q: Alberts says Okazaki fragments are "named for their discoverer" and leaves it there. Who were they?
A: Reiji Okazaki and Tsuneko Okazaki, who were married and worked together at Nagoya University, and who presented the discontinuous replication model at the 1968 Cold Spring Harbor Symposium; Rollin Hotchkiss coined the term "Okazaki pieces" there. Reiji had been in Hiroshima as a child when the atomic bomb was dropped and was heavily irradiated; he died of leukemia in August 1975, aged 44. Tsuneko continued the work with their colleagues and went on to identify the RNA primer that begins each fragment, which is the step described in Figure 5-11 of this chapter. She became the first woman to hold a full professorship at Nagoya University, in 1983. So the singular "discoverer" in the textbook is doing a certain amount of work.
Tags: replication, history

---

Q: The chapter says the Holliday junction "is named for the scientist who first proposed its formation" without naming him or saying when. Who, and what was the evidence?
A: Robin Holliday, in 1964, in a paper titled "A mechanism for gene conversion in fungi". The evidence was genetic rather than structural: he was trying to explain gene conversion and the associated recombination data from fungi, where all four products of a single meiosis can be recovered, and he proposed that recombination begins by nicking equivalent strands in two homologous DNA molecules, which then unwind from the nicks and reanneal with the opposite partner. The four-way junction that follows from that proposal, and its two possible resolutions into crossover or non-crossover products, were deduced from segregation ratios years before anyone saw the structure. The chapter's own account of gene conversion, mismatch repair acting on a heteroduplex, is essentially the explanation Holliday was reaching for.
Tags: recombination, history

---

Q: The chapter argues that mutation rate sets a ceiling on the number of essential genes, and puts that ceiling near 30,000. What is the formal version of that argument?
A: It is Manfred Eigen's error threshold, from the quasispecies model of molecular evolution. The condition for a replicating sequence to keep its information across generations is roughly $n \mu s < 1$, where $n$ is sequence length, $\mu$ is the mutation rate per nucleotide per replication and $s$ is the deleterious effect per mutation, so the maximum maintainable length is $n < 1/(\mu s)$. Above that length, deleterious mutations accumulate faster than selection can remove them and the population loses the master sequence entirely, a collapse called the error catastrophe. The chapter's version, that a tenfold higher mutation rate would cut the ceiling from about 30,000 essential genes to about 3000, is this inverse relation between mutation rate and maintainable information stated in genes rather than nucleotides. The same logic reappears at the end of the chapter to explain why coronaviruses, alone among RNA viruses in proofreading, can carry a genome twice the size of influenza's.
Tags: fidelity, evolution

---

Q: True or false? The majority of cells in your body have exactly the same nucleotide sequence in their genomes.
A: False, and the word that breaks it is "exactly". Every cell descends from the zygote through a lineage of divisions, and each division carries a small chance of an uncorrected change, so somatic mutations accumulate independently in each lineage and essentially no two cells in an adult body have identical sequences. The chapter itself supplies the numbers: replication introduces roughly one change per $10^{10}$ nucleotides copied, which is about 0.3 per genome per division, and nonhomologous end joining leaves more than 2000 scars in a typical somatic cell by age 70. On top of the accumulated noise there are cells whose genomes have been rearranged on purpose: developing B and T cells cut and rejoin their antibody and receptor gene segments by V(D)J recombination, so their sequences differ from the germ line by design.
Tags: problems, fidelity

---

Q: True or false? In a replication bubble, the same parent DNA strand serves as the template for leading-strand synthesis at one fork and as the template for lagging-strand synthesis at the other fork.
A: True, and it follows from the geometry rather than from anything about the enzymes. The two forks of a bubble travel in opposite directions, and all synthesis is 5′-to-3′. Take one parent strand and follow it: at the fork moving to the right it is being read in the direction that allows continuous synthesis, so it is the leading-strand template there, while the fork moving to the left reads that same strand in the direction that forces backstitching, so it is the lagging-strand template there. Both parent strands are therefore leading template at one fork and lagging template at the other, which is exactly what Figure 5-7 shows for two forks moving apart.
Tags: problems, replication

---

Q: True or false? In *E. coli*, where the replication fork travels at 500 nucleotide pairs per second, the DNA ahead of the fork, in the absence of topoisomerase, would have to rotate at nearly 3000 revolutions per minute.
A: True. One complete turn of B-form DNA takes about 10 nucleotide pairs, so unwinding 500 nucleotide pairs per second means $500/10 = 50$ turns per second, and $50 \times 60 = 3000$ revolutions per minute. That is roughly the speed of a household electric drill on low, being asked of a floppy molecule millimetres long inside a cell a couple of micrometres across, which is why it does not happen. Note the figure quoted in the chapter's own Figure 5-21 is 50 revolutions per second for the same fork speed, which is the same number in different units.
Tags: problems, topoisomerases

---

Q: True or false? When bidirectional replication forks from adjacent origins meet, a leading strand always runs into a lagging strand.
A: True, and it is the previous statement seen from the other side. Consider the parent strand that is the leading-strand template for the rightward fork from origin 1. That same strand, approached by the leftward fork from origin 2, is a lagging-strand template. So on that strand a continuously synthesized leading strand advances toward a series of Okazaki fragments coming the other way, and the same is true on the other parent strand with the roles reversed. It could not be otherwise: since synthesis on a given strand runs 5′-to-3′, two polymerases converging along one template must have been travelling in the same direction, so one was moving with its fork and the other against it.
Tags: problems, replication

---

Q: True or false? DNA repair mechanisms all depend on the cell having two homologous chromosomes.
A: False, and it is the wrong redundancy. Almost every mechanism in this chapter depends on the two complementary strands of a single double helix, not on two chromosomes: base excision repair, nucleotide excision repair, mismatch repair and translesion synthesis all use the intact partner strand as the template. Direct chemical reversal, such as stripping the methyl from O$^6$-methylguanine, needs no template at all. Even the mechanism that does need a second duplex, homologous recombination, normally uses the newly replicated sister chromatid rather than the homolog from the other parent, which is why it is restricted to S and G2, and using the actual homolog is the mistake that produces loss of heterozygosity. Haploid organisms such as yeast in the haploid phase repair their DNA perfectly well.
Tags: problems, dna-repair

---

Q: Ten cultures are each started from a single *E. coli* cell, grown to $10^6$ cells, and assayed for mutants in one gene. The counts per $10^6$ cells are 4, 0, 257, 1, 2, 32, 0, 0, 2, 1, and a repeat gives 128, 0, 4, 0, 0, 66, 5, 0, 2, 1. If the mutation rate is constant, why is the variability so extreme?
A: Because mutation is a random event in time, and the size of the resulting clone depends on how early it happened. A mutation arising in one of the last divisions before assay contributes one or two mutant cells; the same event occurring twenty generations earlier gives a clone of a million-odd descendants, which is why one culture reads 257 and its neighbours read 0. What is being sampled is not the number of mutations but the number of descendants of mutations, and that quantity has a distribution with a long tail rather than a Poisson one. The medians tell the honest story: both experiments have a median of 1.5 mutant cells per $10^6$, while the means are 29.9 and 20.6 and the variances are 5816 and 1654. This is the fluctuation test, and the fact that the variance vastly exceeds the mean is the observation itself, not an artefact.
Tags: problems, fidelity

---

Q+: What does this experiment settle that a single culture never could?
A: Whether mutations arise spontaneously during growth or are induced by the selection used to detect them. If the mutants were produced in response to being placed on the selective medium, every culture would have been challenged identically and the counts would cluster tightly around a mean, with the scatter of a Poisson process. Wild fluctuation between parallel cultures is only possible if the mutations happened before the selection was applied, at random moments during growth. That was Luria and Delbrück's argument in 1943, and it is the reason the design uses many small cultures rather than one large one.
Tags: problems, evolution

---

Q: "Primase is a sloppy enzyme that makes many mistakes. Eventually the RNA primers it makes are replaced with DNA made by a polymerase with higher fidelity. This is wasteful. It would be more energy-efficient if a DNA polymerase made an accurate copy in the first place." Discuss.
A: The proposal is not merely wasteful to reject, it is impossible. A polymerase that proofreads does so by refusing to extend anything but a correctly base-paired 3′-OH end, and at the start of a chain there is no such end, so an accurate polymerase cannot begin a fragment at all. Something has to start the chain, and whatever does cannot proofread, so the first few nucleotides of every Okazaki fragment are necessarily inaccurate. Given that, the cell's problem is not how to avoid making a bad copy but how to guarantee that the bad copy is found and removed, and making it out of ribonucleotides solves that: RNA in DNA is chemically unambiguous, so a nuclease can excise it without needing to know anything about the sequence. The energy spent is real but small, roughly ten nucleotides per 200 laid down on the lagging strand, and it buys removal of what would otherwise be a mutation hotspot at the start of every fragment.
Tags: problems, replication

---

Q: If DNA polymerase requires a perfectly paired primer before adding the next nucleotide, how do any mismatched nucleotides escape and become substrates for mismatch repair?
A: Because the requirement is kinetic, not absolute. A mismatched 3′ end makes extension slow and removal by the proofreading exonuclease fast, but both reactions still happen, so the two are in competition and extension occasionally wins. Once one or two correct nucleotides have been added beyond the mismatch, the mismatch is no longer at the 3′ end and is buried inside duplex DNA where the exonuclease cannot reach it, so the error is locked in and the polymerase carries on normally. The same reasoning explains why the proofreading step is quoted in Table 5-1 as letting 1 error in $10^2$ through rather than none: it is a filter with a leak rate, and mismatch repair exists to catch what leaks.
Tags: problems, proofreading

---

Q: Mismatch repair preferentially fixes the newly synthesized strand. Suppose it instead chose a strand at random. Would it still reduce mutations?
- [ ] Yes, it would halve the mutation rate, since half the corrections are made on the right strand
- [x] No, it would leave the number of mutations exactly the same as no repair at all
- [ ] No, it would double the mutation rate compared with no repair
- [ ] Yes, because removing the mismatch removes the lesion regardless of which strand is cut
A: It would leave the number exactly unchanged. Without repair, the mismatch persists until the next replication, which resolves it into one mutant daughter duplex and one normal one, so half the descendants carry the mutation. With random-strand repair, half the time the new strand is corrected and both daughters come out normal, and half the time the parent strand is rewritten to match the error and both daughters come out mutant. The expectation is $\tfrac{1}{2} \times 0 + \tfrac{1}{2} \times 1 = \tfrac{1}{2}$, identical to doing nothing. So a strand-blind system would remove every mismatch, which sounds like repair, while achieving nothing whatsoever: the entire value of mismatch repair lies in strand discrimination, not in mismatch recognition.
Tags: problems, mismatch-repair

---

Q: A virus has a circular double-stranded DNA genome. You isolate replicating genomes, cut each once with a restriction nuclease to linearize it, and look in the electron microscope, seeing the forms below. Is there one origin or several, and is replication unidirectional or bidirectional?
![Linearized viral molecules showing a single internal bubble at various positions and sizes, and H-forms with a branch at one end](assets/img/fig-q5-01.png)
A: A single, unique origin, and bidirectional replication. Every molecule shows just one bubble, never two or more, so only one origin is in use. The bubbles look as though they sit in different places, but they do not: measured along the molecule, the five bubbles are centred at 32%, 68%, 68%, 32% and 68% of its length, and since a molecule that lands the other way up reads 68% as 32%, every one of them is centred on the same point. Their sizes meanwhile range from about 12% to about 58% of the molecule. A single fixed centre with widely varying width is exactly bidirectional growth from one origin: both edges move outward from a point that never shifts. The H-forms are the later stage, obtained once one fork has travelled past the restriction site, so that cutting yields a molecule whose middle is the unreplicated stretch still lying between the two forks and whose four arms are the duplicated ends.
Tags: problems, origins

---

Q+: Why could the same set of images not have come from a single origin replicating unidirectionally?
A: Because a unidirectional origin would put one *edge* of every bubble at the same place, not the centre. One edge would be the origin itself, which never moves, and the bubble would grow away from it in one direction only, so small and large bubbles would share a common boundary and their centres would drift steadily away from that boundary as they enlarged. What the micrographs show is the opposite: a common centre and two boundaries moving apart, which requires two forks that left one origin travelling in opposite directions.
Tags: problems, origins

---

Q: Cells are arrested at the start of S phase, released, and pulse-labeled with $^3$H-thymidine. In experiment A the label goes in immediately for 30 minutes and is then diluted to one-third for 15 minutes. In experiment B the cells run for 30 minutes before labeling, then get 30 minutes of full label and 15 minutes of diluted label. Why do the tracks have dark and light regions, and why does B have light at only one end?
![Autoradiographic tracks from two labeling experiments, with dark central segments and lighter flanking segments, and a 50 micrometre scale bar](assets/img/fig-q5-02.png)
A: The density of silver grains reports the specific activity of the thymidine at the moment that stretch of DNA was made, so full label gives dark track and one-third label gives light track. In experiment A the label was present from the instant replication began, so each origin fired inside labeled medium and both of its forks laid down dark DNA for 30 minutes before the dilution; the result is a dark central segment straddling the origin with a light segment at each end, one per fork. In experiment B the origins fired 30 minutes before any label arrived, so the DNA immediately around each origin is unlabeled and invisible. What you see is not a bubble but a single fork: each track is one fork's worth of dark DNA from the 30 minutes of full label, followed by light DNA from the chase, with the light section necessarily on the leading side because that is the direction the fork was travelling.
Tags: problems, origins

---

Q+: Estimate the rate of fork movement, and say whether the two experiments agree.
A: About 1 μm per minute. Against the 50 μm scale bar, a dark segment in experiment A measures roughly 60 μm, and it represents two forks each running for 30 minutes, so $60/(2 \times 30) \approx 1$ μm per minute per fork. In experiment B a dark segment is a single fork's 30 minutes of work and measures roughly 30 μm, giving the same $30/30 = 1$ μm per minute, and the light section of about 15 μm over the 15-minute chase agrees again. The two experiments therefore agree, which matters because they count forks differently and a mistake about that would have shown up as a factor of two. Converting, 1 μm per minute is $1000/0.34 = 2941$ nucleotide pairs per minute, or about 49 per second, which is the 50 nucleotides per second quoted in the chapter.
Tags: problems, origins

---

Q+: Can you use that rate to work out how long replicating the whole genome takes?
A: Not from the rate alone, and the reason is instructive. A single fork at 1 μm per minute would need $150 \times 10^6 \times 0.34$ nm $= 51{,}000$ μm of travel to copy an average human chromosome, which is 51,000 minutes or about 35 days. Since a cell divides in a day or so, the fork rate by itself tells you only that one origin per chromosome is impossible. To convert it into a genome time you also need the number of origins and their spacing, and both are visible in these very autoradiographs as the spacing between adjacent tracks: knowing that the forks from neighbouring origins have only some tens of micrometres to cover before they meet is what turns 35 days into the observed 8-hour S phase.
Tags: problems, origins

---

Q: Comparing the 16 possible dinucleotides between the *E. coli* and human genomes shows no striking differences except one: 5′-CG-3′ is much rarer in humans than in *E. coli* and rarer than chance predicts. Why?
A: Because in vertebrates the C of a CG dinucleotide is the one that gets methylated, and 5-methylcytosine deaminates to thymine, which is a legitimate DNA base. An ordinary deaminated C becomes uracil, which is unmistakably foreign and is excised by uracil DNA glycosylase; a deaminated 5-methyl C becomes a T sitting in a T-G mismatch, and the repair system has no way of knowing which of the two bases is the intruder. The special glycosylase that removes T from a T-G mismatch is relatively ineffective, so over evolutionary time CG has been steadily converted to TG, and the deficit is the accumulated record of that leak. *E. coli* does not methylate C in this way, so it has no such drain. The scale of the effect in living humans is the same statistic quoted in the chapter: only about 3% of human C's are methylated, yet mutations at those positions account for about a third of the single-base mutations seen in inherited disease.
Tags: problems, dna-repair

---

Q: By age 70 a human somatic cell may carry some 2000 mutations from inaccurate nonhomologous end joining. If they fall at random, how many protein-coding genes are hit, and should cell function be compromised? Assume 2% of the genome is crucial, 1.5% protein-coding and 0.5% regulatory.
A: About 30 protein-coding genes, since $2000 \times 0.015 = 30$, and about 40 hits on crucial information in total once the 0.5% regulatory DNA is included, since $2000 \times 0.02 = 40$. Whether that compromises the cell is a different question, and the answer is usually no. Thirty genes is a small fraction of roughly 20,000, most genes are not expressed in any given cell type so a scar in one is often invisible there, and the cell is diploid, so a mutation on one chromosome usually leaves a working copy on the other. The reason to care is not the average cell but the tail of the distribution: the occasional cell that loses both copies of something important, or that is hit in a gene controlling proliferation, is the seed of the cancers and the tissue decline that this accumulated damage is thought to contribute to.
Tags: problems, double-strand-breaks

---

Q: A broken duplex with single-strand 3′ tails invades an intact homologous duplex at both ends. Describe the double Holliday junction that results, and where DNA synthesis is needed.
![A broken duplex with 5′ and 3′ labeled single-strand tails ready to invade an intact homologous duplex](assets/img/fig-q5-03.png)
A: Each resected 3′ tail of the broken molecule invades the intact duplex and base-pairs with its complementary strand, displacing the identical strand of the intact duplex, so the two molecules become joined at two points, one from each invading end. Between those two points the intact duplex has both of its strands paired with a strand from the broken molecule, and running outward from each crossover the two duplexes revert to their own strands, which is what makes each crossover a four-strand junction rather than a simple join. Reading either junction, the two crossing strands run in opposite orientations, so the left end of the invading strand at the left junction is 5′ while the corresponding invading strand at the right junction presents its 3′ end into the gap. Synthesis is needed at exactly two places, and both are primed by an invading 3′ end extending across the region the resection removed: each 3′ tail is elongated using the intact strand it has paired with as template until it meets the 5′ end left behind on its own molecule, after which ligation closes the two nicks and the double junction is complete.
Tags: problems, recombination

---

Q: Besides correcting mismatches, the mismatch repair system also discourages homologous recombination between duplexes that are only moderately similar. Why does a human cell need that?
A: Because our genome is full of sequences that are similar without being allelic. LINEs and SINEs alone make up more than 30% of it, with 500,000 copies of L1 and more than a million *Alu* elements scattered across every chromosome, and members of a family resemble each other closely enough to pair. If the recombination machinery were allowed to act on any close match, a break on chromosome 4 could be repaired from an *Alu* element on chromosome 11, and the products would be deletions, duplications, inversions and translocations rather than a repaired chromosome. Mismatch repair aborts strand exchange when the heteroduplex it inspects carries too many mismatches, which is a sequence-identity threshold applied at the moment of pairing. The requirement for near-identity is therefore not a limitation of the pairing chemistry alone: it is actively enforced, and it has to be, in a genome where the raw material for illegitimate recombination is everywhere.
Tags: problems, recombination

---

Q: Cre recombinase pairs two LoxP sites, breaks both duplexes at the same point in each site, and rejoins the ends with new partners so that each LoxP site is regenerated. Predict the products for the two substrates shown.
![Cre-mediated break and rejoin of two LoxP triangles, and two substrates: a-LoxP-b-c-LoxP(inverted)-d and a-LoxP-b-c-LoxP-d in the same orientation](assets/img/fig-q5-04.png)
A: Everything follows from the relative orientation of the two triangles. In the first substrate the two LoxP sites point toward each other, so bringing them together requires folding the intervening DNA back on itself, and rejoining with new partners flips the segment between them: the product is a single molecule reading a, LoxP, c, b, LoxP, d, with the b-c segment inverted and both LoxP sites regenerated in the reverse orientation. Nothing is lost. In the second substrate the two sites point the same way, so pairing them forms a loop and rejoining excises it: the products are a linear molecule reading a, LoxP, d, plus a separate circle carrying b and c and the other regenerated LoxP site. That is the difference exploited in Figure 5-66, where the deletion version is used to remove a gene from a chosen tissue, and it is the same orientation rule that governs whether conservative site-specific recombination integrates a viral genome or inverts a *Salmonella* promoter.
Tags: problems, site-specific-recombination

---

Q: A self-correcting polymerase is thought to be unable to start chains de novo, since the first nucleotides are weakly paired and would be removed by an efficient proofreading exonuclease. Yet the SARS-CoV-2 replicase both starts strands de novo and proofreads. How can it do both?
A: By putting the two activities in different proteins. The argument only bites if one active site has to both tolerate a weakly paired new end and refuse to extend a weakly paired one, which is a contradiction within a single enzyme. In the coronavirus replicase, polymerization is done by nsp12 with its cofactors nsp7 and nsp8, and that polymerase is free to initiate without a base-paired 3′-OH because it carries no exonuclease of its own. The proofreading is delegated to a separate enzyme, the 3′-to-5′ exoribonuclease domain of nsp14, which is only nuclease-active when partnered with nsp10, and which associates with the polymerase complex rather than being part of it. Splitting the functions means the removal of errors can be regulated independently of initiation instead of being an inseparable property of the polymerizing site. Knocking out the nsp14 exonuclease in engineered coronaviruses raises the mutation rate 15- to 20-fold, which confirms it is genuinely doing the proofreading, and the same activity is what lets the virus excise nucleoside-analog drugs such as remdesivir.
Tags: problems, viruses, fidelity
