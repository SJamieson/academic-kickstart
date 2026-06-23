---
title: Finding the optimal exploration-exploitation trade-off online through Bayesian risk estimation and minimization
authors: [S. Jamieson, J. P. How, Y. Girdhar]
venue: Artificial Intelligence (Vol. 330)
year: 2024
date: 2024-05-01
type: journal
featured: true
links:
  doi: https://doi.org/10.1016/j.artint.2024.104096
---

We propose endogenous Bayesian risk minimization (EBRM) over policy sets as an approach to online learning across a wide range of settings. Many real-world online learning problems have complexities such as action- and belief-dependent rewards, time-discounting of reward, and heterogeneous costs for actions and feedback; we find that existing online learning heuristics cannot leverage most problem-specific information, to the detriment of their performance. To this end, we introduce a belief-space Markov decision process (BMDP) model that can capture these complexities, and further apply the concepts of aleatoric, epistemic, and process risks to online learning. These risk functions describe the risk inherent to the learning problem, the risk due to the agent's lack of knowledge, and the relative quality of its policy, respectively. We demonstrate how computing and minimizing these risk functions guides the online learning agent towards the optimal exploration-exploitation trade-off in any stochastic online learning problem, constituting the basis of the EBRM approach. We also show how Bayes' risk, the minimization objective in stochastic online learning problems, can be decomposed into the aforementioned aleatoric, epistemic, and process risks.

In simulation experiments, EBRM algorithms achieve state-of-the-art performance across various classical online learning problems, including Gaussian and Bernoulli multi-armed bandits, best-arm identification, mixed objectives with action- and belief-dependent rewards, and dynamic pricing, a finite partial monitoring problem. To our knowledge, it is also the first computationally efficient online learning approach that can provide online bounds on an algorithm's Bayes' risk. Finally, because the EBRM approach is parameterized by a set of policy algorithms, it can be extended to incorporate new developments in online learning algorithms, and is thus well-suited as the foundation for developing real-world learning agents.
