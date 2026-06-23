---
title: Enabling Human-Multi-Robot Collaborative Visual Exploration in Underwater Environments
authors: [S. Jamieson]
venue: Ph.D. Thesis, MIT & Woods Hole Oceanographic Institution
year: 2024
date: 2024-03-01
type: thesis
featured: false
links:
  pdf: https://hdl.handle.net/1721.1/155482
---

This thesis presents novel approaches to vision-based autonomous exploration in underwater environments using human-multi-robot systems, enabling robots to adapt to evolving mission priorities learned via a human supervisor's responses to images collected in situ. The robots model the spatial distribution of various habitats and terrain types in the environment using semantic classes learned online, and send image queries to the supervisor to learn which of these classes are associated with the highest concentration of targets of interest. The robots do not require prior examples of these targets, and learn these concentration parameters online. This approach is suitable for exploration in unfamiliar environments where unexpected phenomena are frequently discovered, such as coral reefs. A novel risk-based online learning algorithm identifies the concentration parameters using the fewest possible number of queries, enabling the robots to adapt quickly and reducing the operational burden on the supervisor.

I introduce four primary contributions to address prevalent challenges in underwater exploration. Firstly, a multi-robot semantic representation matching algorithm enables inter-robot sharing of semantic maps, generating consistent global maps with 20-60% higher quality scores than those produced by other methods. Next, we present DeepSeeColor, a novel real-time algorithm for correcting underwater image color distortions, which achieves up to 60 Hz processing speeds, thereby enabling improved semantic mapping and target recognition accuracy online. Thirdly, an efficient risk-based online learning algorithm ensures effective communication between robots and human supervisors, and, while remaining computationally tractable, overcomes the myopia which would cause previous algorithms to underestimate a query's value. Lastly, we propose a new reward model and planning algorithm tailored for autonomous exploration, together enabling a 25-75% increase in the number of targets of interest located when compared to baseline surveys. These experiments were conducted with simulated robots exploring real coral reef maps and with real, ecologically meaningful targets of interest.

Collectively, these contributions overcome key barriers to vision-based autonomous underwater exploration, and enhance the capability of autonomous underwater vehicles to adapt to new and evolving mission objectives in situ. Beyond marine exploration, these contributions have value in broader applications, such as space exploration, ecosystem monitoring, and other online learning problems.
