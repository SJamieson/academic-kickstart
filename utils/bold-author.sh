echo "Do not use this script, because it breaks author page heading. Instead, edit themes/academic/layouts/partials/page_metadata_authors.html" 
exit 1
author="Stewart Jamieson"
find "$(dirname $0)/../content/publication/" -type f -exec perl -pi -e "s/\"$author\"/\"**$author**\"/g" "{}" ";"
find "$(dirname $0)/../content/talk/" -type f -exec perl -pi -e "s/\"$author\"/\"**$author**\"/g" "{}" ";"
