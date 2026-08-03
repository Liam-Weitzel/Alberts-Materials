---
title: Ch 2. Cell Chemistry and Bioenergetics
description: Bonds, water, free energy, catalysis and the currency of the cell.
tags: [mboc, ch2]
---

Q: Write the relationship between free-energy change, enthalpy and entropy, and state the condition for a spontaneous reaction.
A: $$\Delta G = \Delta H - T\Delta S$$
A reaction proceeds spontaneously when $\Delta G < 0$. At equilibrium $\Delta G = 0$. Note that this is the *actual* free-energy change, not the standard one.

---

Q: How does $\Delta G$ relate to the standard free-energy change and the concentrations of reactants and products?
A: For $A \rightleftharpoons B$:
$$\Delta G = \Delta G^\circ + RT \ln \frac{[B]}{[A]}$$
At equilibrium $\Delta G = 0$, so $\Delta G^\circ = -RT \ln K$ where $K = [B]/[A]$ at equilibrium. This is why an unfavourable *standard* reaction can still run forward when the cell keeps product concentrations low.
Tags: thermodynamics

---

Q: Which statements about **enzymes** are correct?
- [x] They lower the activation energy of a reaction
- [x] They leave $\Delta G$ for the overall reaction unchanged
- [ ] They shift the equilibrium toward products
- [x] They can accelerate reactions by factors of $10^{6}$ or more
A: Catalysts change the *rate* at which equilibrium is reached, never the position of equilibrium. An enzyme accelerates the forward and reverse reactions by the same factor.
Tags: enzymes

---

Q: The four bond types that hold biological molecules together non-covalently are {{hydrogen bonds}}, {{electrostatic (ionic) attractions}}, {{van der Waals attractions}}, and the {{hydrophobic force}}.
A: Each is weak individually (1 to 5 kcal/mol against ~90 for a C-C covalent bond), so specificity comes from many of them acting together over a complementary surface.

---

Q: Why is **water** such an effective solvent for polar molecules but not for hydrocarbons?
A: Water molecules are polar and form an extensive hydrogen-bonded network. Polar or charged solutes make favourable hydrogen bonds or electrostatic interactions with water. A hydrocarbon cannot; forcing it into solution makes surrounding water molecules adopt a more ordered cage, which costs entropy, so nonpolar groups cluster together (the **hydrophobic force**).

---

Q: What makes ATP hydrolysis energetically useful, and what is its standard free-energy change?
A: $$\text{ATP} + \text{H}_2\text{O} \rightarrow \text{ADP} + \text{P}_i \qquad \Delta G^\circ \approx -7.3\ \text{kcal/mol}$$
The products are stabilised by resonance and by relief of the electrostatic repulsion between the phosphates. In the cell, ATP is held far from equilibrium, so the *actual* $\Delta G$ is closer to **−12 kcal/mol**.
Tags: atp, bioenergetics

---

Q: What does it mean for two reactions to be **coupled**, and give the canonical example?
A: An energetically unfavourable reaction is driven by being made part of a pathway with a shared intermediate, so the summed $\Delta G$ is negative. The classic example is glucose phosphorylation by hexokinase:
> glucose + Pᵢ → glucose-6-P ($\Delta G^\circ = +3.3$) coupled to ATP hydrolysis ($-7.3$), giving a net $-4.0$ kcal/mol.

---

Q: Which molecule carries **reducing power** for biosynthesis, as distinct from the one used in catabolic oxidation?
- [ ] FADH₂ for biosynthesis, NADH for catabolism
- [x] NADPH for biosynthesis, NADH for catabolism
- [ ] Both roles are filled by NADH
- [ ] Acetyl CoA for biosynthesis, NADPH for catabolism
A: NADPH and NADH differ by a single phosphate on one ribose, which lets enzymes distinguish them. The cell keeps the NADPH/NADP⁺ ratio high, favouring reduction in biosynthesis, and the NADH/NAD⁺ ratio low, favouring oxidation in catabolism.

---

Q: Name the three stages of catabolism, from food to ATP.
A: 1. **Digestion**: polymers broken to their subunits outside the cell or in lysosomes, with no useful energy captured.
2. **Glycolysis and acetyl CoA production**: in the cytosol, sugars to pyruvate, then into mitochondria. Small ATP yield plus NADH.
3. **Citric acid cycle and oxidative phosphorylation**: full oxidation to CO₂, with the bulk of the ATP made by the electron-transport chain.

---

Q: Given a standard free-energy change, compute the equilibrium constant. Sketch the calculation for $\Delta G^\circ = -4.0$ kcal/mol at 37 °C.

```python
import math

R = 0.0019872          # kcal / (mol K)
T = 310.15             # 37 degrees C in kelvin

def K_from_dG(dG_standard):
    """Equilibrium constant from a standard free-energy change."""
    return math.exp(-dG_standard / (R * T))

print(round(K_from_dG(-4.0), 1))   # -> 660.9
```
A: $K = e^{-\Delta G^\circ / RT} \approx 6.6 \times 10^{2}$. Every 1.4 kcal/mol is roughly a tenfold change in $K$ at body temperature.
Tags: thermodynamics, calculation

---

Q: In the diagram below, which stage produces the majority of the cell's ATP?

![Three stages of catabolism](assets/img/catabolism-stages.svg)

- [ ] Stage 1, digestion
- [ ] Stage 2, glycolysis
- [x] Stage 3, oxidative phosphorylation
A: Glycolysis nets only 2 ATP per glucose. Complete oxidation via the citric acid cycle and the electron-transport chain yields roughly 30 ATP per glucose.
