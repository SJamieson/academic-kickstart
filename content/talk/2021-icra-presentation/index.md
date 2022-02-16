+++
title = "ICRA 2021 Presentation: Multi-Robot Distributed Semantic Mapping in Unfamiliar Environments"

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date = 2021-06-03T15:00:00-04:00
date_end = 2021-06-03T15:15:00-04:00
all_day = false

# Schedule page publish date (NOT talk date).
publishDate = 2021-05-31T12:00:00-04:00

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Stewart Jamieson", "Kaveh Fathian", "Kasra Khosoussi", "Jonathan P. How", "Yogesh Girdhar"]

# Location of event.
location = "Xi'an, China (Delivered via Recording)"

# Name of event and optional event URL.
event = "IEEE International Conference on Robotics and Automation (ICRA) 2021"
event_url = "http://icra2021.org/"

# Abstract. What's your talk about?
abstract = "We present a solution to multi-robot distributed semantic mapping of novel and unfamiliar environments. Most state-of-the-art semantic mapping systems are based on supervised learning algorithms that cannot classify novel observations online. While unsupervised learning algorithms can invent labels for novel observations, approaches to detect when multiple robots have independently developed their own labels for the same new class are prone to erroneous or inconsistent matches. These issues worsen as the number of robots in the system increases and prevent fusing the local maps produced by each robot into a consistent global map, which is crucial for cooperative planning and joint mission summarization. Our proposed solution overcomes these obstacles by having each robot learn an unsupervised semantic scene model online and use a multiway matching algorithm to identify consistent sets of matches between learned semantic labels belonging to different robots. Compared to the state of the art, the proposed solution produces 20-60% higher quality global maps that do not degrade even as many more local maps are fused."

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
projects = ["co-robotic-exploration"]

# Links (optional).
url_pdf = "https://arxiv.org/pdf/2103.14805.pdf"
url_video = "https://www.youtube.com/watch?v=-5NzXHW91_k"
url_code = ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
[image]
  # Caption (optional)
  caption = ""

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = "Center"
+++
