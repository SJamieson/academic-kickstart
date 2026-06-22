---
title: "DeepSeeColor: Realtime Adaptive Color Correction for Autonomous Underwater Vehicles via Deep Learning Methods"
authors: [S. Jamieson, J. P. How, Y. Girdhar]
venue: 2023 IEEE International Conference on Robotics and Automation (ICRA)
year: 2023
date: 2023-05-01
type: conference
featured: true
links:
  arxiv: https://arxiv.org/abs/2303.04025
  video: https://youtu.be/IpbnIg63w3s
  doi: https://doi.org/10.1109/ICRA48891.2023.10160477
---

Successful applications of complex vision-based behaviours underwater have lagged behind progress in terrestrial and aerial domains. This is largely due to the degraded image quality resulting from the physical phenomena involved in underwater image formation. Spectrally-selective light attenuation drains some colors from underwater images while backscattering adds others, making it challenging to perform vision-based tasks underwater. State-of-the-art methods for underwater color correction optimize the parameters of image formation models to restore the full spectrum of color to underwater imagery. However, these methods have high computational complexity that is unfavourable for realtime use by autonomous underwater vehicles (AUVs), as a result of having been primarily designed for offline color correction. Here, we present DeepSeeColor, a novel algorithm that combines a state-of-the-art underwater image formation model with the computational efficiency of deep learning frameworks. In our experiments, we show that DeepSeeColor offers comparable performance to the popular "Sea-Thru" algorithm (Akkaynak & Treibitz, 2019) while being able to rapidly process images at up to 60Hz, thus making it suitable for use onboard AUVs as a preprocessing step to enable more robust vision-based behaviours.
