// Clear react-packager cache

const os = require('os')
const fs = require('fs')
const path = require('path')

const tempDir = os.tmpdir()

const cacheFiles = fs.readdirSync(tempDir).filter(function (fileName) {
  return fileName.indexOf('react-packager-cache') === 0
})

cacheFiles.forEach(function (cacheFile) {
  var cacheFilePath = path.join(tempDir, cacheFile)
  fs.unlinkSync(cacheFilePath)
  console.log('Deleted cache: ', cacheFilePath)
})

if (!cacheFiles.length) {
  console.log('No cache files found!')
}
