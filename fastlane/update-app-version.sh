ANDROID_FILE="android/app/build.gradle"
TEMP_ANDROID_FILE="${ANDROID_FILE}.txt"

IOS_FILE="ios/ReactNativeStarterKit/Info.plist"
TEMP_IOS_FILE="${IOS_FILE}.txt"

IOS_BUILD_NUMBER=1

CURRENT_VERSION_NAME=$( /usr/libexec/PlistBuddy -c "Print :CFBundleShortVersionString" "${IOS_FILE}" )

# ---

echo "••• What's the new App Version? (current version: $CURRENT_VERSION_NAME)"
read APP_VERSION_NAME

# ---

# Android
cat ${ANDROID_FILE} | sed "s/versionName \".*\"/versionName \"${APP_VERSION_NAME}\"/" > ${TEMP_ANDROID_FILE}
  echo "$(awk '{sub(/versionCode [[:digit:]]+$/,"versionCode "$2+1)}1' ${TEMP_ANDROID_FILE})" > ${TEMP_ANDROID_FILE}
  cat ${TEMP_ANDROID_FILE} > ${ANDROID_FILE}
  rm -f ${TEMP_ANDROID_FILE}

# iOS
/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString ${APP_VERSION_NAME}" "${IOS_FILE}"
/usr/libexec/PlistBuddy -c "Set :CFBundleVersion ${IOS_BUILD_NUMBER}" "${IOS_FILE}"
