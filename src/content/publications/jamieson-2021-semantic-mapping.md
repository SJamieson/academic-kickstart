---
title: Multi-Robot Distributed Semantic Mapping in Unfamiliar Environments through Online Matching of Learned Representations
authors: [S. Jamieson, K. Fathian, K. Khosoussi, J. P. How, Y. Girdhar]
venue: 2021 IEEE International Conference on Robotics and Automation (ICRA)
year: 2021
date: 2021-05-30
type: conference
featured: true
links:
  arxiv: https://arxiv.org/abs/2103.14805
  video: https://www.youtube.com/watch?v=-5NzXHW91_k
  doi: https://doi.org/10.1109/ICRA48506.2021.9561934
---

We present a solution to multi-robot distributed semantic mapping of novel and unfamiliar environments. Most state-of-the-art semantic mapping systems are based on supervised learning algorithms that cannot classify novel observations online. While unsupervised learning algorithms can invent labels for novel observations, approaches to detect when multiple robots have independently developed their own labels for the same new class are prone to erroneous or inconsistent matches. These issues worsen as the number of robots in the system increases and prevent fusing the local maps produced by each robot into a consistent global map, which is crucial for cooperative planning and joint mission summarization. Our proposed solution overcomes these obstacles by having each robot learn an unsupervised semantic scene model online and use a multiway matching algorithm to identify consistent sets of matches between learned semantic labels belonging to different robots. Compared to the state of the art, the proposed solution produces 20-60% higher quality global maps that do not degrade even as many more local maps are fused.
