+++
title = "DeepSeeColor: Realtime Adaptive Color Correction for Autonomous Underwater Vehicles via Deep Learning Methods"

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date = 2023-05-30T15:00:00+01:00
date_end = 2023-05-30T16:40:00+01:00
all_day = false

# Schedule page publish date (NOT talk date).
publishDate = 2023-05-01T9:00:00-04:00

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Stewart Jamieson", "Jonathan P. How", "Yogesh Girdhar"]

# Location of event.
location = "London, United Kingdom"

# Name of event and optional event URL.
event = "2023 IEEE International Conference on Robotics and Automation"
event_url = "https://www.icra2023.org/"

# Abstract. What's your talk about?
abstract = "Successful applications of complex vision-based behaviours underwater have lagged behind progress in terrestrial and aerial domains. This is largely due to the degraded image quality resulting from the physical phenomena involved in underwater image formation. Spectrally-selective light attenuation drains some colors from underwater images while backscattering adds others, making it challenging to perform vision-based tasks underwater. State-of-the-art methods for underwater color correction optimize the parameters of image formation models to restore the full spectrum of color to underwater imagery. However, these methods have high computational complexity that is unfavourable for realtime use by autonomous underwater vehicles (AUVs), as a result of having been primarily designed for offline color correction. Here, we present DeepSeeColor, a novel algorithm that combines a state-of-the-art underwater image formation model with the computational efficiency of deep learning frameworks. In our experiments, we show that DeepSeeColor offers comparable performance to the popular 'Sea-Thru' algorithm (Akkaynak & Treibitz, 2019) while being able to rapidly process images at up to 60Hz, thus making it suitable for use onboard AUVs as a preprocessing step to enable more robust vision-based behaviours."

# Summary. An optional shortened abstract.
summary = ""

# Is this a featured talk? (true/false)
featured = true

# Tags (optional).
#   Set `tags = []` for no tags, or use the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []

# Markdown Slides (optional).
#   Associate this page with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references 
#   `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides = ""

# Optional filename of your slides within your talk folder or a URL.
url_slides = ""

# Projects (optional).
#   Associate this talk with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["deep-learning"]` references 
#   `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects = []

# Links (optional).
url_pdf = "http://arxiv.org/abs/2303.04025"
url_video = "https://youtu.be/IpbnIg63w3s"
url_code = ""
url_poster = ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
[image]
  # Caption (optional)
  caption = ""

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = "Left"
+++
