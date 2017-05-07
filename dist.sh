VERSION=0.2
DEPLOY_TARGET=(
    "_locales"
    "assets"
    "js"
    "manifest.json"
    "popup.html"
)

# Check GA_CODE (Google Analytic code)
if [ $GA_CODE ];
then
    echo "GA_CODE($GA_CODE) is used."
else
    echo "Please specify GA_CODE variable."
    exit
fi

# Clean dist directory
echo "cleaning dist directory..."
rm -rf ./dist/*

# Deploy code
echo "deploying targets to dist directory..."
for v in ${DEPLOY_TARGET[@]}
do
    cp -r $v dist
done

# Find and Replace ga code
echo "updating relevant variables...."
SED_PARAM=s/UA-XXXXXXXX-X/$GA_CODE/g
sed -i -e $SED_PARAM dist/js/popup.js
rm dist/js/popup.js-e

# Compress
cd dist; zip -r remo_for_pooq_$VERSION.zip ${DEPLOY_TARGET[@]}

