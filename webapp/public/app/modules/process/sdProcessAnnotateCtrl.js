/**
 * Created by subhasis on 11/1/16.
 */
'use strict';

module.exports = sdProcessAnnotateCtrl;

function sdProcessAnnotateCtrl ($scope, Upload, sdNotifier, $routeParams) {
    $scope.sourceId = $routeParams.id;

    $scope.cropper = {};
    $scope.cropper.sourceImage = null;
    $scope.cropper.croppedImage = null;
    $scope.bounds = {};
    $scope.bounds.left = 0;
    $scope.bounds.right = 0;
    $scope.bounds.top = 0;
    $scope.bounds.bottom = 0;

    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }

    $scope.uploadCropedImage = function (cropedImage) {
        var imageFile = dataURLtoFile(cropedImage, 'a.png');
        Upload.upload({
            url: '/api/contribute/upload',
            data: {file: imageFile}
        }).then(function (response) {
            sdNotifier.notify(response.data.message);
        });
    }
}