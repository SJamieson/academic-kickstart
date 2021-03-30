---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Multi-Robot Distributed Semantic Mapping in Unfamiliar Environments through
  Online Matching of Learned Representations
subtitle: ''
summary: ''
authors:
- Stewart Jamieson
- Kaveh Fathian
- Kasra Khosoussi
- Jonathan P. How
- Yogesh Girdhar
tags:
- '"⛔ No DOI found"'
- '"Computer Science - Multiagent Systems"'
- '"Computer Science - Robotics"'
categories: []
date: '2021-05-01'
lastmod: 2021-03-29T23:36:43-04:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
publishDate: '2021-03-30T03:37:56.109301Z'
publication_types:
- '1'
abstract: We present a solution to multi-robot distributed semantic mapping of novel
  and unfamiliar environments. Most state-of-the-art semantic mapping systems are
  based on supervised learning algorithms that cannot classify novel observations
  online. While unsupervised learning algorithms can invent labels for novel observations,
  approaches to detect when multiple robots have independently developed their own
  labels for the same new class are prone to erroneous or inconsistent matches. These
  issues worsen as the number of robots in the system increases and prevent fusing
  the local maps produced by each robot into a consistent global map, which is crucial
  for cooperative planning and joint mission summarization. Our proposed solution
  overcomes these obstacles by having each robot learn an unsupervised semantic scene
  model online and use a multiway matching algorithm to identify consistent sets of
  matches between learned semantic labels belonging to different robots. Compared
  to the state of the art, the proposed solution produces 20-60% higher quality global
  maps that do not degrade even as many more local maps are fused.
publication: '*2021 IEEE International Conference on Robotics and Automation (ICRA)*'
url_pdf: http://arxiv.org/abs/2103.14805
---
