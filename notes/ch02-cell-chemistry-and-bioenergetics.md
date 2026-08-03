---
title: Ch 2. Cell Chemistry and Bioenergetics
description: Why weak bonds matter more than strong ones, and how the cell stays far from equilibrium.
date: 2026-08-03
tags: [mboc, ch2]
---

This chapter is the physical chemistry you need before any of the machinery makes
sense. It is heavier going than chapter 1, and it repays slowing down, because
almost every mechanism later in the book is an application of these few ideas.

## Weak bonds do the interesting work

Covalent bonds hold molecules together. Everything else, meaning recognition,
regulation, assembly and catalysis, runs on four weak interactions:

- hydrogen bonds
- electrostatic (ionic) attractions
- van der Waals attractions
- the hydrophobic force

Each is worth roughly 1 to 5 kcal/mol against about 90 for a C-C bond, so any one
of them is close to meaningless at body temperature; thermal motion breaks them
constantly. Specificity comes from many of them acting at once across two surfaces
that fit. That is the whole trick, and it explains why shape matters so much in
biology: binding strength is a function of how much complementary surface you can
bring into contact.

It also explains why these interactions are useful for regulation. A bond that
costs 90 kcal/mol to break is permanent on a cellular timescale. A binding event
worth a handful of weak interactions can be made and unmade in milliseconds, which
is exactly what a switch needs.

## The hydrophobic force is not a force

The name is misleading and I want to keep the correct version in my head. Nonpolar
groups are not attracted to each other in any special way. Water is attracted to
itself. Forcing a hydrocarbon into solution makes the surrounding water adopt a
more ordered arrangement, which costs entropy, and the system responds by
minimising that exposed surface. Oil separates from water because of what happens
to the water.

This is worth getting right because it is the thing that drives membrane assembly
and protein folding, both of which come up constantly later.

## Free energy

The central relation:

$$\Delta G = \Delta H - T\Delta S$$

A reaction runs spontaneously when $\Delta G < 0$. The part I had to be careful
with is the difference between $\Delta G$ and $\Delta G^\circ$:

$$\Delta G = \Delta G^\circ + RT \ln \frac{[\text{products}]}{[\text{reactants}]}$$

$\Delta G^\circ$ is a property of the reaction under standard conditions and never
changes. $\Delta G$ depends on the concentrations right now, so the cell can drive
a reaction that is unfavourable on paper simply by keeping the product
concentration low. At equilibrium $\Delta G = 0$, which gives

$$\Delta G^\circ = -RT \ln K$$

A useful reference point: at body temperature, every 1.4 kcal/mol of
$\Delta G^\circ$ is about a tenfold change in $K$.

The consequence worth remembering is that **a living cell is never at
equilibrium**. Equilibrium is death. The cell holds concentrations away from their
equilibrium values, and that displacement is what makes reactions run in the
direction it needs.

## Enzymes change rates, never equilibria

An enzyme lowers the activation energy, so it accelerates the forward and reverse
reactions by exactly the same factor. It cannot change $\Delta G$, and it cannot
shift where the equilibrium sits. It only changes how fast you get there.

This is the point I would most expect to be tested on, because the wrong version
(enzymes push reactions toward products) is intuitive and wrong.

## ATP and coupling

ATP hydrolysis has $\Delta G^\circ \approx -7.3$ kcal/mol, and in the cell, where
ATP is held far from equilibrium, the actual value is nearer $-12$. The energy is
not stored "in the bond" in any mystical sense; the products are simply more
stable, through resonance stabilisation and relief of the electrostatic repulsion
between the phosphates.

Coupling is how that gets used. An unfavourable reaction is made part of a pathway
sharing an intermediate with a favourable one, so the sum is negative. Hexokinase
is the standard example:

> glucose + Pᵢ → glucose-6-phosphate is $+3.3$ kcal/mol on its own.
> Coupled to ATP hydrolysis at $-7.3$, the net is $-4.0$, and it runs.

Nothing violates thermodynamics here. You are paying for one reaction with
another.

## Two carriers, two jobs

NADH and NADPH differ by a single phosphate group on one ribose, which seems
trivial until you see why it exists: it lets enzymes tell them apart, so the cell
can hold two different redox pools at two different ratios.

| Carrier | Ratio held | Used for |
|---|---|---|
| NADH / NAD⁺ | low | catabolic oxidation |
| NADPH / NADP⁺ | high | reductive biosynthesis |

A single phosphate group buys the cell two independent redox budgets. This kind of
minimal distinction shows up repeatedly in cell biology.

## Catabolism in three stages

1. **Digestion** breaks polymers down to their subunits. No useful energy is
   captured here.
2. **Glycolysis** takes sugars to pyruvate in the cytosol and then to acetyl CoA
   in the mitochondrion. Net yield is only 2 ATP per glucose, plus NADH.
3. **Citric acid cycle and oxidative phosphorylation** finish the oxidation to
   CO₂ and produce roughly 30 ATP per glucose.

![Three stages of catabolism](assets/img/catabolism-stages.svg)

The lopsidedness is the point. Glycolysis gets a lot of attention because it was
worked out first and because it runs without oxygen, but almost all the ATP comes
from the last stage.

## What I want to remember

Two things. First, the cell buys direction by staying away from equilibrium, not
by breaking thermodynamics. Second, weak and reversible beats strong and permanent
whenever something needs to be controlled. Most of the cards here are about the
$\Delta G$ versus $\Delta G^\circ$ distinction, because that is where I expect to
slip.
