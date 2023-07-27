---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: 'DeepSeeColor: Realtime Adaptive Color Correction for Autonomous Underwater
  Vehicles via Deep Learning Methods'
subtitle: ''
summary: ''
authors:
- Stewart Jamieson
- Jonathan P. How
- Yogesh Girdhar
tags:
- Autonomous underwater vehicles
- Computational modeling
- Computer Science - Computer Vision and Pattern Recognition
- Computer Science - Robotics
- Deep learning
- Image color analysis
- Image quality
- Image restoration
- Lighting
categories: []
date: '2023-05-01'
lastmod: 2023-07-27T14:37:45-04:00
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
publishDate: '2023-07-27T18:37:45.316115Z'
publication_types:
- '1'
abstract: Successful applications of complex vision-based behaviours underwater have
  lagged behind progress in terrestrial and aerial domains. This is largely due to
  the degraded image quality resulting from the physical phenomena involved in underwater
  image formation. Spectrally-selective light attenuation drains some colors from
  underwater images while backscattering adds others, making it challenging to perform
  vision-based tasks underwater. State-of-the-art methods for underwater color correction
  optimize the parameters of image formation models to restore the full spectrum of
  color to underwater imagery. However, these methods have high computational complexity
  that is unfavourable for realtime use by autonomous underwater vehicles (AUVs),
  as a result of having been primarily designed for offline color correction. Here,
  we present DeepSeeColor, a novel algorithm that combines a state-of-the-art underwater
  image formation model with the computational efficiency of deep learning frameworks.
  In our experiments, we show that DeepSeeColor offers comparable performance to the
  popular \"Sea-Thru\" algorithm (Akkaynak & Treibitz, 2019) while being able to rapidly
  process images at up to 60Hz, thus making it suitable for use onboard AUVs as a
  preprocessing step to enable more robust vision-based behaviours.
publication: '*2023 IEEE International Conference on Robotics and Automation (ICRA)*'
doi: 10.1109/ICRA48891.2023.10160477
links:
- name: URL
  url: http://arxiv.org/abs/2303.04025
---
